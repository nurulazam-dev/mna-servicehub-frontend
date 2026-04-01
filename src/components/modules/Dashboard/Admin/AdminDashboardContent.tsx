"use client";

import { getDashboardData } from "@/services/dashboard.services";
import { IAdminDashboardData } from "@/types/dashboard.types";
import { useQuery } from "@tanstack/react-query";
import StatsCard from "../StatsCard";
import ServiceRequestBarChart from "../ServiceRequestBarChart";
import ServiceRequestPieChart from "../ServiceRequestPieChart";
import { Skeleton } from "@/components/ui/skeleton";

const AdminDashboardContent = () => {
  const { data: response, isLoading } = useQuery({
    queryKey: ["admin-dashboard-data"],
    queryFn: getDashboardData,
    refetchOnWindowFocus: false,
  });

  const data = response?.data as IAdminDashboardData;

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="space-y-8 p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-black tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here is what is happening at MNA ServiceHub.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <StatsCard
          title="Total Services"
          value={data?.serviceCount || 0}
          iconName="LayoutGrid"
          description="Live services in catalog"
          className="border-l-blue-500"
        />

        <StatsCard
          title="Service Requests"
          value={data?.requestCount || 0}
          iconName="Activity"
          description="Total orders received"
          trend={{ value: "12%", isPositive: true }}
          className="border-l-rose-500"
        />

        <StatsCard
          title="Total Users"
          value={data?.userCount || 0}
          iconName="Users"
          description="Registered customers"
          trend={{ value: "5%", isPositive: true }}
          className="border-l-indigo-600"
        />

        <StatsCard
          title="Providers"
          value={data?.providerCount || 0}
          iconName="ShieldCheck"
          description="Active verified partners"
          className="border-l-emerald-500"
        />

        <StatsCard
          title="Pending Apps"
          value={data?.pendingApplications || 0}
          iconName="FileSearch"
          description="Awaiting review"
          className="border-l-amber-500"
        />

        <StatsCard
          title="Total Revenue"
          // value={`$${data?.totalRevenue || 0}`}
          value={new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          }).format(data?.totalRevenue?._sum?.amount || 0)}
          iconName="CircleDollarSign"
          description="Net earnings so far"
          className="border-l-violet-600"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-7 lg:col-span-8">
          <ServiceRequestBarChart data={data?.barChartData || []} />
        </div>

        <div className="md:col-span-5 lg:col-span-4">
          <ServiceRequestPieChart data={data?.pieChartData || []} />
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

export default AdminDashboardContent;
