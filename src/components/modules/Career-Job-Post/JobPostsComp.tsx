/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Loader2,
  MapPin,
  CircleDollarSign,
  CalendarClock,
  Users,
  ChevronRight,
  SearchIcon,
} from "lucide-react";
import { getAllJobPosts } from "@/services/jobPosts.services";
import { IJobPostPayload } from "@/types/jobPost.type";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatFullDate } from "@/lib/utils";

const JobPostsComp = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["job-posts"],
    queryFn: () => getAllJobPosts(""),
  });

  if (isLoading) {
    return (
      <div className="py-24 flex flex-col justify-center items-center gap-3 text-center">
        <Loader2 className="size-10 animate-spin text-primary" />
        <p className="text-muted-foreground font-medium">
          Fetching latest career opportunities...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-20 text-center text-destructive bg-destructive/5 rounded-2xl border border-destructive/20 mx-6">
        <h3 className="text-lg font-bold">Oops! Something went wrong.</h3>
        <p>Failed to load job posts. Please try again later.</p>
      </div>
    );
  }

  const jobPosts: IJobPostPayload[] = (data?.data as any) || [];

  return (
    <div className="py-12  min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-1 mb-6">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight text-foreground">
            Join Our Team
          </h2>
          <h4 className="text-xl md:text-2xl text-foreground">
            Build the Future with ServiceHub
          </h4>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Become part of a dynamic team of 50+ experts delivering top-notch
            local services across Bangladesh. We value innovation and hard work.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {jobPosts && jobPosts.length > 0 ? (
            jobPosts.map((job: IJobPostPayload) => (
              <Card
                key={job.id}
                className="group p-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-muted-foreground/10 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-5 md:p-6 bg-card hover:bg-muted/10 transition-colors rounded-xl">
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {job?.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className="px-4 py-1 border-primary/30 text-primary bg-primary/5 capitalize tracking-widest text-[10px] font-bold"
                      >
                        Category: {job?.serviceType}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:flex md:flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground font-medium">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="size-4 text-primary/70" />
                        {job.location || "Bangladesh"}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CircleDollarSign className="size-4 text-primary/70" />
                        {job.salaryRange || "Negotiable"}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CalendarClock className="size-4 text-orange-500/70" />
                        Deadline:{" "}
                        {job?.deadline ? formatFullDate(job?.deadline) : "ASAP"}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="size-4 text-blue-500/70" />
                        {Array.isArray((job as any).applications)
                          ? (job as any).applications.length
                          : typeof (job as any).applications === "object"
                            ? 0
                            : (job as any).applications || 0}{" "}
                        Applicants
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 md:mt-0 w-full md:w-auto">
                    <Link href={`/job-posts/${job.id}`}>
                      <Button className="w-full md:w-auto rounded-full px-8 font-bold group-hover:translate-x-1 transition-transform">
                        View Details <ChevronRight className="ml-2 size-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-24 border-2 border-dashed border-muted rounded-[2rem] bg-card/50">
              <SearchIcon className="mx-auto size-12 text-muted-foreground/30 mb-4" />
              <p className="text-xl font-medium text-muted-foreground">
                Currently, no positions are open.
              </p>
              <p className="text-sm text-muted-foreground/60 mt-1">
                Check back later or follow our social media.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobPostsComp;
