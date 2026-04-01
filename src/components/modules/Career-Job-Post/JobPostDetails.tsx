import { Button } from "@/components/ui/button";
import { IJobPostPayload } from "@/types/jobPost.type";
import { AlertCircle, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";

export default function JobPostDetails({
  jobPost,
}: {
  jobPost: IJobPostPayload;
}) {
  if (!jobPost) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4">
        <AlertCircle className="size-12 text-destructive animate-bounce" />
        <h2 className="text-2xl font-bold">jobPost Not Found!</h2>
        <Link href="/job-posts">
          <Button variant="default">Back to Careers</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-12">
      <div className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/job-posts">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 font-bold hover:bg-primary/5"
            >
              <ArrowLeft className="size-4" /> Back to Careers
            </Button>
          </Link>
          <div className="flex items-center gap-2">
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

      <div className="container mx-auto px-6 pt-8">
        {/* 
        1.job post details with best UI/UX design
        2.buttons: 
        register as a candidate (open a popup form for candidate register), 
        apply this post (open a popup for apply the job post. can be apply logged-in user)
        */}
      </div>
    </div>
  );
}
