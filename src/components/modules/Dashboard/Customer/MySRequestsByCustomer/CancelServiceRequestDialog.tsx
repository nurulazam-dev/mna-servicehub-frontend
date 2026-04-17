"use client";

import { cancelServiceRequestAction } from "@/actions/serviceRequest.action";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { IServiceRequestPayload } from "@/types/serviceRequest.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface CancelServiceRequestConfirmationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  myServiceRequest: IServiceRequestPayload | null;
}

export default function CancelServiceRequestDialog({
  open,
  onOpenChange,
  myServiceRequest,
}: CancelServiceRequestConfirmationDialogProps) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: cancelServiceRequestAction,
  });

  const handleConfirmDelete = async () => {
    if (!myServiceRequest) {
      toast.error("service request not found");
      return;
    }
    console.log("c myServiceRequest==", myServiceRequest);
    /* 
output:
c myServiceRequest== 
Object
activePhone
: 
"01984587545"
costBreakdown
: 
null
createdAt
: 
"2026-04-12T05:34:29.794Z"
customerId
: 
"GbXGDNZYIMPoHw3Qfg0P712gFK2fl1QJ"
id
: 
"90609450-b4b6-4652-ba08-91597111b5ab"
isDeleted
: 
false
paymentStatus
: 
"UNPAID"
provider
: 
null
providerId
: 
null
rejectionReason
: 
null
review
: 
null
schedule
: 
null
scheduleId
: 
null
service
: 
{name: 'Full House Sanitization', imageUrl: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?q=80&w=2000'}
serviceAddress
: 
"raozan"
serviceDescription
: 
"Not working properly"
serviceId
: 
"973785b6-b6e6-4695-abb1-e2f66b3de829"
status
: 
"PENDING"
updatedAt
: 
"2026-04-12T05:34:29.794Z"
*/
    if (myServiceRequest.isDeleted === true) {
      toast.error("service request already cancelled");
      return;
    }

    const result = await mutateAsync(String(myServiceRequest.id));

    if (!result.success) {
      toast.error(result.message || "Failed to cancel service request");
      return;
    }

    toast.success(result.message || "service request cancelled successfully");
    onOpenChange(false);

    void queryClient.invalidateQueries({
      queryKey: ["my-service-requests-customer"],
    });
    void queryClient.refetchQueries({
      queryKey: ["my-service-requests-customer"],
      type: "active",
    });
    router.refresh();
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Cancel service request</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to cancel{" "}
            {myServiceRequest?.service?.name ?? "this service request"} service
            request? This action will mark the service request as deleted.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={(event) => {
              event.preventDefault();
              void handleConfirmDelete();
            }}
            disabled={isPending}
          >
            {isPending ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
