"use client";

import { getDashboardData } from "@/services/dashboard.services";
import { useQuery } from "@tanstack/react-query";
import StatsCard from "../StatsCard";
import ServiceRequestBarChart from "../ServiceRequestBarChart";
import ServiceRequestPieChart from "../ServiceRequestPieChart";
import { Skeleton } from "@/components/ui/skeleton";
import { IDashboardStatsDataPayload } from "@/types/dashboard.types";
import DashboardBanner from "../DashboardBanner";

const CustomerDashboardContent = () => {
  const { data: response, isLoading } = useQuery({
    queryKey: ["customer-dashboard-data"],
    queryFn: getDashboardData,
    refetchOnWindowFocus: false,
  });

  const data = response?.data as IDashboardStatsDataPayload;

  const formatCurrency = (value: number = 0) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="space-y-8 p-6">
      <DashboardBanner />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <StatsCard
          title="Total Requests"
          value={data?.totalRequests || 0}
          iconName="LayoutGrid"
          description="Live services in categories"
          className="border-l-blue-500"
        />

        <StatsCard
          title="Active Requests"
          value={data?.activeRequests || 0}
          iconName="Activity"
          description="Total orders received"
          className="border-l-rose-500"
        />

        <StatsCard
          title="Total Spent"
          value={formatCurrency(data?.totalSpent as number)}
          iconName="CircleDollarSign"
          description="Net earnings so far"
          className="border-l-4 border-l-violet-600 shadow-sm"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-7 lg:col-span-8">
          <ServiceRequestBarChart data={data?.monthlyRequests || []} />
        </div>

        <div className="md:col-span-5 lg:col-span-4">
          <ServiceRequestPieChart
            data={data?.requestStatusDistribution || []}
          />
        </div>
      </div>
    </div>
  );
};

const DashboardSkeleton = () => (
  <div className="space-y-8 p-6">
    <div className="space-y-2">
      <Skeleton className="h-8 w-62.5" />
      <Skeleton className="h-4 w-87.5" />
    </div>
    <div className="grid gap-4 md:grid-cols-4">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-32 w-full rounded-2xl" />
      ))}
    </div>
    <div className="grid gap-6 md:grid-cols-12">
      <Skeleton className="md:col-span-8 h-100 rounded-2xl" />
      <Skeleton className="md:col-span-4 h-100 rounded-2xl" />
    </div>
  </div>
);

export default CustomerDashboardContent;
