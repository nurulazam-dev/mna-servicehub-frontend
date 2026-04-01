import JobPostsComp from "@/components/modules/Career-Job-Post/JobPostsComp";
import { getAllJobPosts } from "@/services/jobPosts.services";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function JobPostsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["job-posts"],
    queryFn: () => getAllJobPosts(""),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="mx-auto w-full max-w-(--breakpoint-xl) px-6">
        <JobPostsComp />
      </div>
    </HydrationBoundary>
  );
}
