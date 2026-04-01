/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { loginAction } from "@/actions/auth.action";
import AppField from "@/components/shared/form/AppField";
import CustomSubmitButton from "@/components/shared/form/CustomSubmitButton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  candidateRegisterZodSchema,
  ICandidateRegisterPayload,
} from "@/zod/auth.validation";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";

import { Eye, EyeOff, LogInIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

interface RegisterProps {
  redirectPath?: string;
}

const CandidateRegisterForm = ({ redirectPath }: RegisterProps) => {
  const [serverError, setServerError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (payload: ICandidateRegisterPayload) =>
      loginAction(payload, redirectPath),
    onSuccess: (result) => {
      if ("success" in result && result.success === false) {
        setServerError(result.message || "Invalid credentials");
      } else {
        toast.success("Register...");
      }
    },
    onError: (error: any) => {
      setServerError(error?.message || "Something went wrong during login");
    },
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    validators: {
      onSubmit: candidateRegisterZodSchema,
    },

    onSubmit: async ({ value }) => {
      setServerError(null);
      await mutateAsync(value);
    },
  });

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-t-4 border-t-primary">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold tracking-tight">
          Candidate Register
        </CardTitle>
        <CardDescription>
          Enter your information to create account
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="space-y-4"
        >
          <form.Field
            name="email"
            validators={{ onChange: candidateRegisterZodSchema.shape.email }}
          >
            {(field) => (
              <AppField
                field={field}
                label="Email"
                type="email"
                placeholder="name@example.com"
                autoComplete="email"
              />
            )}
          </form.Field>

          {/* Password Field */}
          <form.Field
            name="password"
            validators={{ onChange: candidateRegisterZodSchema.shape.password }}
          >
            {(field) => (
              <div className="space-y-1">
                <AppField
                  field={field}
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  append={
                    <Button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      variant="ghost"
                      size="sm"
                      className="h-full px-3 py-2 hover:bg-transparent"
                    >
                      {showPassword ? (
                        <EyeOff className="size-4 text-muted-foreground" />
                      ) : (
                        <Eye className="size-4 text-muted-foreground" />
                      )}
                    </Button>
                  }
                />
                <div className="flex justify-end">
                  <Link
                    href="/forgot-password"
                    className="text-xs text-primary hover:underline font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
            )}
          </form.Field>

          {/* Server Error Alert */}
          {serverError && (
            <Alert variant="destructive" className="py-2">
              <AlertDescription className="text-xs font-medium">
                {serverError}
              </AlertDescription>
            </Alert>
          )}

          {/* Submit Button */}
          <form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting]}>
            {([canSubmit, isSubmitting]) => (
              <CustomSubmitButton
                isPending={isSubmitting || isPending}
                pendingLabel="Register..."
                disabled={!canSubmit}
                className="w-full"
              >
                Register <LogInIcon />
              </CustomSubmitButton>
            )}
          </form.Subscribe>
        </form>
      </CardContent>
    </Card>
  );
};

export default CandidateRegisterForm;
