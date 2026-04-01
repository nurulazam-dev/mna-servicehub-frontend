/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { IJobPostPayload } from "@/types/jobPost.type";
import {
  ArrowLeft,
  Share2,
  MapPin,
  Briefcase,
  CircleDollarSign,
  Clock,
  CheckCircle2,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatFullDate } from "@/lib/utils";
import ApplyJobModal from "./ApplyJobModal";
import { getUserInfo } from "@/services/auth.services";

export default async function JobPostDetails({
  jobPost,
}: {
  jobPost: IJobPostPayload;
}) {
  const user = await getUserInfo();

  return (
    <div className="min-h-screen bg-muted/30 pb-20">
      <div className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/job-posts">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 font-bold hover:bg-primary/5 rounded-full"
            >
              <ArrowLeft className="size-4" /> Back to Careers
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full size-9"
            >
              <Share2 className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <Badge className="bg-green-800 text-primary hover:bg-primary/20 border-none px-4 py-1 rounded-full text-xs font-bold tracking-wider">
                {jobPost?.serviceType || "Full-Time"}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
                {jobPost?.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-muted-foreground font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="size-5 text-primary" /> {jobPost?.location}
                </div>
                <div className="flex items-center gap-2">
                  <CircleDollarSign className="size-5 text-primary" />{" "}
                  {jobPost?.salaryRange}
                </div>
                <div className="flex items-center gap-2 text-orange-600">
                  <Clock className="size-5" /> Deadline:{" "}
                  {jobPost?.deadline ? formatFullDate(jobPost.deadline) : "N/A"}
                </div>
              </div>
            </div>

            <Card className="p-8 md:p-12 border-none shadow-lg shadow-primary/5 rounded-lg text-justify">
              <div className="prose prose-slate max-w-none dark:prose-invert">
                <div className="prose prose-slate max-w-none dark:prose-invert">
                  <h3 className="text-2xl font-bold mb-4">Job Description</h3>

                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      We are looking for a dedicated{" "}
                      <span className="text-primary font-bold">
                        {jobPost?.title}
                      </span>{" "}
                      to join our growing team at{" "}
                      <span className="font-semibold text-foreground">
                        MNA ServiceHub
                      </span>
                      . You will be responsible for delivering high-quality
                      services to our clients across{" "}
                      <span className="text-primary font-bold">
                        {jobPost?.location}
                      </span>
                      .
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-foreground">
                        Role Overview
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        As a <span className="lowercase">{jobPost?.title}</span>
                        , you will be the face of our service excellence. Your
                        primary goal will be to ensure seamless service delivery
                        while maintaining the highest safety and quality
                        standards. This role requires a blend of technical
                        expertise, problem-solving skills, and a customer-first
                        mindset.
                      </p>

                      <h4 className="text-lg font-bold text-foreground">
                        What You&apos;ll Do
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        You will handle on-site service requests, diagnose
                        issues effectively, and provide long-term solutions to
                        our valuable clients. At MNA ServiceHub, we don&apos;t
                        just fix problems; we build trust through transparency
                        and professional craftsmanship.
                      </p>

                      <h4 className="text-lg font-bold text-foreground">
                        Why Join MNA ServiceHub?
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        We are Bangladesh&apos;s leading digital service
                        platform, connecting skilled professionals with
                        thousands of households. Joining us means being part of
                        a tech-driven ecosystem where your hard work is
                        recognized, rewarded, and supported by a dedicated
                        operations team.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">
                  Key Responsibilities
                </h3>
                <ul className="space-y-3">
                  {[
                    "Deliver services with 100% customer satisfaction",
                    "Maintain professional equipment standards",
                    "Collaborate with the ServiceHub support team",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center  gap-3 text-muted-foreground"
                    >
                      <CheckCircle2 className="size-5 text-green-600 shrink-0" />{" "}
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card className="p-8 border-t-4 border-t-primary shadow-2xl rounded-lg">
                <h4 className="text-xl md:text-2xl font-bold">
                  Interested in this role?
                </h4>
                <p className="text-sm text-muted-foreground mb-6">
                  Apply now to join Bangladesh&apos;s fastest growing service
                  platform.
                </p>

                <div className="flex flex-col gap-4">
                  <ApplyJobModal
                    jobId={jobPost?.id}
                    jobTitle={jobPost?.title}
                    userId={user?.id}
                  />
                  <div className="relative py-2">
                    <Separator />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-[10px] font-bold text-muted-foreground uppercase">
                      Or
                    </span>
                  </div>

                  <Link href="/register-candidate" className="w-full">
                    <Button
                      variant="outline"
                      className="w-full h-14 rounded-lg text-lg font-bold border-2"
                    >
                      <UserPlus className="mr-2 size-5" /> Register as Candidate
                    </Button>
                  </Link>
                </div>

                <div className="mt-8 p-4 bg-muted/50 rounded-2xl border border-dashed">
                  <p className="text-[11px] text-center text-muted-foreground leading-relaxed">
                    By clicking Apply, you agree to our{" "}
                    <span className="underline">Terms of Service</span> and{" "}
                    <span className="underline">Privacy Policy</span>.
                  </p>
                </div>
              </Card>

              <Card className="p-6 rounded-lg border-none">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Briefcase className="size-4" /> Hiring Activity
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="opacity-80">Total Applications</span>
                    <span className="font-bold">
                      {Array.isArray((jobPost as any).applications)
                        ? (jobPost as any).applications.length
                        : typeof (jobPost as any).applications === "object"
                          ? 0
                          : (jobPost as any).applications || 0}
                    </span>
                  </div>
                  <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-white h-full w-2/3" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
