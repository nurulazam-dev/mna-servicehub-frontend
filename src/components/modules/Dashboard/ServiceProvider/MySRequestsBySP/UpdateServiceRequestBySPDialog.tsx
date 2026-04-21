/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";
import { useForm } from "@tanstack/react-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Settings2 } from "lucide-react";

import CustomSubmitButton from "@/components/shared/form/CustomSubmitButton";
import AppField from "@/components/shared/form/AppField";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

import {
  IServiceRequestUpdateCostBySPPayload,
  updateServiceCostBySPZodSchema,
} from "@/zod/serviceRequest.validation";
import { IServiceRequestPayload } from "@/types/serviceRequest.type";
import { updateServiceRequestCostBySPService } from "@/services/serviceRequest.services";

interface UpdateServiceRequestCostBySPFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mySRequest: IServiceRequestPayload | null;
}

const getInitialValues = (
  mySRequest: IServiceRequestPayload | null,
): IServiceRequestUpdateCostBySPPayload => ({
  serviceCharge: mySRequest?.costBreakdown?.serviceCharge ?? 0,
  productCost: mySRequest?.costBreakdown?.productCost ?? 0,
  additionalCost: mySRequest?.costBreakdown?.additionalCost ?? 0,
});

/* const zodValidator = (schema: any) => {
  return ({ value }: { value: unknown }) => {
    const result = schema.safeParse(value);
    return result.success ? undefined : result.error.issues[0]?.message;
  };
}; */

const zodFormValidator = (schema: any) => {
  return ({ value }: { value: unknown }) => {
    const result = schema.safeParse(value);
    if (!result.success) {
      return result.error.formErrors.fieldErrors;
    }
    return undefined;
  };
};

export default function UpdateServiceRequestCostBySPDialog({
  open,
  onOpenChange,
  mySRequest,
}: UpdateServiceRequestCostBySPFormModalProps) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: ({
      serviceRequestId,
      payload,
    }: {
      serviceRequestId: string;
      payload: IServiceRequestUpdateCostBySPPayload;
    }) => updateServiceRequestCostBySPService(serviceRequestId, payload),
  });

  const form = useForm({
    defaultValues: getInitialValues(
      mySRequest,
    ) as IServiceRequestUpdateCostBySPPayload,
    validators: {
      onSubmit: zodFormValidator(updateServiceCostBySPZodSchema),
    },

    onSubmit: async ({ value }) => {
      if (!mySRequest) {
        toast.error("service request not found");
        return;
      }
      try {
        const payload: IServiceRequestUpdateCostBySPPayload = {
          serviceCharge: value.serviceCharge,
          productCost: value.productCost,
          additionalCost: value.additionalCost,
        };

        const result = await mutateAsync({
          serviceRequestId: String(mySRequest.id),
          payload,
        });

        if (result.success) {
          toast.success(result.message || "Updated successfully");
          onOpenChange(false);
          form.reset();
          queryClient.invalidateQueries({ queryKey: ["my-requests-sp"] });
        } else {
          toast.error(result.message || "Failed to update");
        }
      } catch (error: any) {
        const errorMessage =
          error?.response?.data?.message || "Something went wrong";
        toast.error(errorMessage);
        console.error(error);
      }

      /*     if (!result.success) {
        toast.error(result.message || "Failed to update Service request");
        return;
      }

      toast.success(result.message || "Service request updated successfully");
      onOpenChange(false);
      form.reset();

      if (!result.success) return toast.error(result.message);
      toast.success("Service request updated");
      onOpenChange(false); */

      void queryClient.invalidateQueries({ queryKey: ["my-requests-sp"] });
      void queryClient.refetchQueries({
        queryKey: ["my-requests-sp"],
        type: "active",
      });
      router.refresh();
    },
  });

  useEffect(() => {
    if (open) {
      form.reset(getInitialValues(mySRequest));
    }
  }, [mySRequest, form, open]);

  /*   const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      onOpenChange(nextOpen);
      if (!nextOpen) {
        form.reset();
      }
    },
    [form, onOpenChange],
  ); */

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-150 p-0 overflow-hidden border-none shadow-2xl bg-white dark:bg-slate-950">
        <DialogHeader className="px-6 py-6 bg-muted/30 border-b">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Settings2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold">
                Update Service Cost
              </DialogTitle>
              <DialogDescription>
                Updated the service related costs.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[80vh]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
            className="p-6 space-y-6"
          >
            <form.Field
              name="serviceCharge"
              validators={{
                onChange: ({ value }) => {
                  const parsedValue =
                    typeof value === "number"
                      ? value
                      : value
                        ? Number(value)
                        : undefined;

                  const result =
                    updateServiceCostBySPZodSchema.shape.serviceCharge.safeParse(
                      parsedValue,
                    );

                  return result.success
                    ? undefined
                    : result.error.issues[0]?.message;
                },
              }}
            >
              {(field) => (
                <AppField
                  field={field}
                  label="Service Charge"
                  placeholder="e.g. 2500"
                />
              )}
            </form.Field>
            <form.Field
              name="productCost"
              validators={{
                onChange: ({ value }) => {
                  const parsedValue =
                    typeof value === "number"
                      ? value
                      : value
                        ? Number(value)
                        : undefined;

                  const result =
                    updateServiceCostBySPZodSchema.shape.productCost.safeParse(
                      parsedValue,
                    );

                  return result.success
                    ? undefined
                    : result.error.issues[0]?.message;
                },
              }}
            >
              {(field) => (
                <AppField
                  field={field}
                  label="Product Cost"
                  placeholder="e.g. 60000"
                />
              )}
            </form.Field>
            <form.Field
              name="additionalCost"
              validators={{
                onChange: ({ value }) => {
                  const parsedValue =
                    typeof value === "number"
                      ? value
                      : value
                        ? Number(value)
                        : undefined;

                  const result =
                    updateServiceCostBySPZodSchema.shape.additionalCost.safeParse(
                      parsedValue,
                    );

                  return result.success
                    ? undefined
                    : result.error.issues[0]?.message;
                },
              }}
            >
              {(field) => (
                <AppField
                  field={field}
                  label="Additional Cost"
                  placeholder="e.g. 500"
                />
              )}
            </form.Field>

            <div className="flex items-center justify-end gap-3 pt-6 border-t">
              <Button
                type="button"
                variant="ghost"
                disabled={isPending}
                onClick={() => onOpenChange(false)}
                className="px-6"
              >
                Cancel
              </Button>

              <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
              >
                {([canSubmit, isSubmitting]) => (
                  <CustomSubmitButton
                    isPending={isSubmitting || isPending}
                    pendingLabel="Saving changes..."
                    disabled={!canSubmit}
                    className="min-w-35 shadow-lg shadow-primary/20"
                  >
                    Save Changes
                  </CustomSubmitButton>
                )}
              </form.Subscribe>
            </div>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
