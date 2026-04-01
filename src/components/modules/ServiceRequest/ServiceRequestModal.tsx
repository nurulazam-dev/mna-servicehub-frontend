"use client";

import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useState } from "react";
import { Zap, MapPin, Phone, MessageSquare } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AppField from "@/components/shared/form/AppField";
import CustomSubmitButton from "@/components/shared/form/CustomSubmitButton";
import {
  serviceRequestZodSchema,
  IServiceRequestPayload,
} from "@/zod/serviceRequest.validation";
import { createServiceRequestAction } from "@/actions/serviceRequest.action";

interface ServiceRequestModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  service: {
    id: string;
    name: string;
  } | null;
}

export default function ServiceRequestModal({
  isOpen,
  setIsOpen,
  service,
}: ServiceRequestModalProps) {
  const [serverError, setServerError] = useState<string | null>(null);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (payload: IServiceRequestPayload) =>
      createServiceRequestAction(payload),
    onSuccess: (result) => {
      if (result.success === false) {
        setServerError(result.message);
      } else {
        toast.success(result.message);
        setIsOpen(false);
        form.reset();
      }
    },
  });

  const form = useForm({
    defaultValues: {
      serviceDescription: "",
      serviceAddress: "",
      activePhone: "",
    },

    validators: {
      onSubmit: serviceRequestZodSchema,
    },

    onSubmit: async ({ value }) => {
      if (!service?.id) {
        toast.error("Service information is missing. Please try again.");
        return;
      }

      setServerError(null);

      const payload: IServiceRequestPayload = {
        ...value,
        serviceId: service.id,
      };

      await mutateAsync(payload);
    },
  });

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-112.5 rounded-[2rem] p-0 overflow-hidden border-none shadow-2xl">
        <DialogHeader className="bg-primary p-8 text-primary-foreground relative">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Zap className="size-24" />
          </div>
          <DialogTitle className="text-2xl font-black">
            Book Service
          </DialogTitle>
          <DialogDescription className="text-primary-foreground/80 font-medium">
            You are requesting for:{" "}
            <span className="text-white underline">{service?.name}</span>
          </DialogDescription>
        </DialogHeader>

        <div className="p-8">
          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
            className="space-y-5"
          >
            <form.Field
              name="serviceAddress"
              validators={{
                onChange: serviceRequestZodSchema.shape.serviceAddress,
              }}
            >
              {(field) => (
                <AppField
                  field={field}
                  label="Service Location"
                  placeholder="Street, House No, Area..."
                  append={
                    <MapPin className="size-4 text-muted-foreground mr-2" />
                  }
                />
              )}
            </form.Field>

            <form.Field
              name="activePhone"
              validators={{
                onChange: serviceRequestZodSchema.shape.activePhone,
              }}
            >
              {(field) => (
                <AppField
                  field={field}
                  label="Contact Number"
                  placeholder="01745-678912"
                  append={
                    <Phone className="size-4 text-muted-foreground mr-2" />
                  }
                />
              )}
            </form.Field>

            <form.Field name="serviceDescription">
              {(field) => (
                <AppField
                  field={field}
                  label="Additional Notes"
                  placeholder="Any specific instructions for our experts?"
                  append={
                    <MessageSquare className="size-4 text-muted-foreground mr-2" />
                  }
                />
              )}
            </form.Field>

            {serverError && (
              <Alert variant="destructive" className="py-2">
                <AlertDescription className="text-xs font-medium">
                  {serverError}
                </AlertDescription>
              </Alert>
            )}

            <form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting]}>
              {([canSubmit, isSubmitting]) => (
                <CustomSubmitButton
                  isPending={isSubmitting || isPending}
                  pendingLabel="Submitting Request..."
                  disabled={!canSubmit}
                  className="w-full h-12 rounded-xl text-lg font-bold shadow-lg shadow-primary/20"
                >
                  Confirm Booking <Zap className="ml-2 size-5 fill-current" />
                </CustomSubmitButton>
              )}
            </form.Subscribe>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
