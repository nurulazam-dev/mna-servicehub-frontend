"use client";

import CustomSubmitButton from "@/components/shared/form/CustomSubmitButton";
import AppField from "@/components/shared/form/AppField";
import { IUpdateServicePayload } from "@/types/service.type";
import {
  IUpdateServiceFormValues,
  updateServiceZodSchema,
} from "@/zod/service.validation";
import { updateServiceAction } from "@/actions/service.action";
import { useForm } from "@tanstack/react-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface EditServiceFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: IUpdateServicePayload | null;
}

const getInitialValues = (
  service: IUpdateServicePayload | null,
): IUpdateServiceFormValues => ({
  name: service?.name ?? "",
  description: service?.description ?? "",
  imageUrl: service?.imageUrl ?? "",
  isActive: service?.isActive ?? false,
});

const getErrorMessage = (error: unknown): string => {
  if (typeof error === "string") {
    return error;
  }

  if (error && typeof error === "object" && "message" in error) {
    return String(error.message);
  }

  return "Invalid input";
};

const FieldMessage = ({ error }: { error: unknown }) => {
  if (!error) {
    return null;
  }

  return <p className="text-sm text-destructive">{getErrorMessage(error)}</p>;
};

export default function EditServiceModal({
  open,
  onOpenChange,
  service,
}: EditServiceFormModalProps) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: ({
      serviceId,
      payload,
    }: {
      serviceId: string;
      payload: IUpdateServicePayload;
    }) => updateServiceAction(serviceId, payload),
  });

  const form = useForm({
    defaultValues: getInitialValues(service),
    onSubmit: async ({ value }) => {
      if (!service) {
        toast.error("Service not found");
        return;
      }

      const payload: IUpdateServicePayload = {
        name: value.name,
        description: value.description,
        imageUrl: value.imageUrl,
        isActive: value.isActive,
      };

      const result = await mutateAsync({
        serviceId: String(service.id),
        payload,
      });

      if (!result.success) {
        toast.error(result.message || "Failed to update service");
        return;
      }

      toast.success(result.message || "Service updated successfully");
      onOpenChange(false);
      form.reset();

      void queryClient.invalidateQueries({ queryKey: ["services"] });
      void queryClient.refetchQueries({
        queryKey: ["services"],
        type: "active",
      });
      router.refresh();
    },
  });

  useEffect(() => {
    if (open) {
      form.reset(getInitialValues(service));
    }
  }, [service, form, open]);

  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      onOpenChange(nextOpen);
      if (!nextOpen) {
        form.reset();
      }
    },
    [form, onOpenChange],
  );

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[90vh] w-[calc(100vw-1.5rem)] max-w-[calc(100vw-1.5rem)] gap-0 overflow-hidden p-0 sm:w-[calc(100vw-3rem)] sm:max-w-[calc(100vw-3rem)] md:w-[calc(100vw-4rem)] md:max-w-[calc(100vw-4rem)] lg:w-[min(92vw,78rem)] lg:max-w-[min(92vw,78rem)] xl:w-[min(88vw,88rem)] xl:max-w-[min(88vw,88rem)] 2xl:w-[min(84vw,96rem)] 2xl:max-w-[min(84vw,96rem)]">
        <DialogHeader className="border-b px-6 py-5 pr-14">
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>
            Update user profile information and details.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(90vh-5.5rem)]">
          <div className="px-6 py-5">
            <form
              method="POST"
              action="#"
              noValidate
              onSubmit={(event) => {
                event.preventDefault();
                event.stopPropagation();
                form.handleSubmit();
              }}
              className="space-y-5"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <form.Field
                  name="name"
                  validators={{ onChange: updateServiceZodSchema.shape.name }}
                >
                  {(field) => (
                    <AppField
                      field={field}
                      label="Full Name"
                      placeholder="Enter doctor name"
                    />
                  )}
                </form.Field>
                <form.Field
                  name="description"
                  validators={{
                    onChange: updateServiceZodSchema.shape.description,
                  }}
                >
                  {(field) => (
                    <AppField
                      field={field}
                      label="Description"
                      placeholder="Enter service description"
                    />
                  )}
                </form.Field>

                <form.Field
                  name="imageUrl"
                  validators={{
                    onChange: updateServiceZodSchema.shape.imageUrl,
                  }}
                >
                  {(field) => (
                    <AppField
                      field={field}
                      label="Image URL"
                      placeholder="Enter image URL"
                    />
                  )}
                </form.Field>

                <form.Field
                  name="isActive"
                  validators={{
                    onChange: updateServiceZodSchema.shape.isActive,
                  }}
                >
                  {(field) => {
                    const firstError =
                      field.state.meta.isTouched &&
                      field.state.meta.errors.length > 0
                        ? field.state.meta.errors[0]
                        : null;

                    return (
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="edit-service-isActive"
                          className={cn(firstError && "text-destructive")}
                        >
                          Active Status
                        </Label>
                        <Select
                          value={field.state.value}
                          onValueChange={(value) => {
                            field.handleChange(
                              value as IUpdateServicePayload["isActive"],
                            );
                            field.handleBlur();
                          }}
                        >
                          <SelectTrigger
                            id="edit-user-role"
                            className={cn(
                              "w-full",
                              firstError && "border-destructive",
                            )}
                          >
                            <SelectValue placeholder="Select active status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value={true}>Active</SelectItem>
                            <SelectItem value={false}>Inactive</SelectItem>
                          </SelectContent>
                        </Select>
                        <FieldMessage error={firstError} />
                      </div>
                    );
                  }}
                </form.Field>
              </div>

              <div className="flex items-center justify-end gap-3 border-t pt-4">
                <DialogClose>
                  <Button
                    type="button"
                    variant="outline"
                    disabled={isPending}
                    onClick={() => onOpenChange(false)}
                  >
                    Cancel
                  </Button>
                </DialogClose>

                <form.Subscribe
                  selector={(state) =>
                    [state.canSubmit, state.isSubmitting] as const
                  }
                >
                  {([canSubmit, isSubmitting]) => (
                    <CustomSubmitButton
                      isPending={isSubmitting || isPending}
                      pendingLabel="Updating user..."
                      disabled={!canSubmit}
                      className="w-auto min-w-36"
                    >
                      Update User
                    </CustomSubmitButton>
                  )}
                </form.Subscribe>
              </div>
            </form>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
