/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AppField from "@/components/shared/form/AppField";
import CustomSubmitButton from "@/components/shared/form/CustomSubmitButton";
import { SendHorizontal, Paperclip } from "lucide-react";
import { applyJobAction } from "@/actions/job.action";

interface ApplyJobModalProps {
  userId: string;
  jobId: string;
  jobTitle: string;
}

const ApplyJobModal = ({ jobId, jobTitle, userId }: ApplyJobModalProps) => {
  const [open, setOpen] = useState(false);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (payload: any) => applyJobAction(payload),
    onSuccess: (res) => {
      if (res.success) {
        toast.success("Application submitted successfully!");
        setOpen(false);
      } else {
        toast.error(res.message);
      }
    },
  });

  const form = useForm({
    defaultValues: {
      //   coverLetter: "",
      cvUrl: "",
      jobPostId: jobId,
      userId: userId,
    },
    onSubmit: async ({ value }) => {
      await mutateAsync(value);
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20 transition-transform active:scale-95">
            Apply For This Job
          </Button>
        }
      />

      <DialogContent className="sm:max-w-110 rounded-lg border-none shadow-2xl p-10">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-3xl font-black flex items-center gap-2">
            <SendHorizontal className="text-primary size-7" /> Quick Apply
          </DialogTitle>
          <DialogDescription className="text-base font-medium">
            Applying for:{" "}
            <span className="text-primary font-bold">{jobTitle}</span>
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="space-y-6 pt-4"
        >
          <form.Field name="cvUrl">
            {(field) => (
              <AppField
                field={field}
                label="CV Url"
                type="text"
                placeholder="https://candidate.pdf"
                append={
                  <Paperclip className="size-4 text-muted-foreground mr-3" />
                }
              />
            )}
          </form.Field>

          {/* Cover Letter Field */}
          {/* <form.Field name="coverLetter">
            {(field) => (
              <div className="space-y-2">
                <label className="text-sm font-bold flex items-center gap-2 text-foreground">
                  <FileText className="size-4 text-primary" /> Why should we
                  hire you?
                </label>
                <textarea
                  className="w-full min-h-35 p-4 rounded-2xl border bg-muted/30 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                  placeholder="Share your experience and skills related to this role..."
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field> */}

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="destructive"
              className="flex-1 rounded-lg h-11 font-bold hover:bg-red-800 hover:text-destructive"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting]}>
              {([canSubmit, isSubmitting]) => (
                <CustomSubmitButton
                  isPending={isSubmitting || isPending}
                  pendingLabel="Submitting..."
                  disabled={!canSubmit}
                  className="flex-2 h-11 rounded-lg"
                >
                  Confirm Application
                </CustomSubmitButton>
              )}
            </form.Subscribe>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyJobModal;
