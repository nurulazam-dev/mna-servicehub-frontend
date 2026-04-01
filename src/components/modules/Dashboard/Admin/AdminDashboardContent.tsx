"use client";

import { getDashboardData } from "@/services/dashboard.services";
import { ApiResponse } from "@/types/api.types";
import { IAdminDashboardData } from "@/types/dashboard.types";
import { useQuery } from "@tanstack/react-query";
import StatsCard from "../StatsCard";
import ServiceRequestBarChart from "../ServiceRequestBarChart";
import ServiceRequestPieChart from "../ServiceRequestPieChart";

const AdminDashboardContent = () => {
  const { data: adminDashboardData } = useQuery({
    queryKey: ["admin-dashboard-data"],
    queryFn: getDashboardData,
    refetchOnWindowFocus: "always",
  });

  const { data } = adminDashboardData as ApiResponse<IAdminDashboardData>;

  /* 
export interface PieChartData {
  status: string;
  count: number;
}

export interface BarChartData {
  month: Date | string;
  count: number;
}

export interface IAdminDashboardData {
  requestCount: number;
  providerCount: number;
  serviceCount: number;
  pendingApplications: number;
  userCount: number;
  totalRevenue: number;
  barChartData: BarChartData[];
  pieChartData: PieChartData[];
}

*/

  return (
    <div>
      <StatsCard
        title="Total Service Requests"
        value={data?.serviceCount || 0}
        iconName="CalendarDays"
        description="Number of Service Requests"
      />
      <StatsCard
        title="Total Users"
        value={data?.userCount || 0}
        iconName="Users"
        description="Number of users registered"
      />

      <ServiceRequestBarChart data={data?.barChartData || []} />

      <ServiceRequestPieChart data={data?.pieChartData || []} />
    </div>
  );
};

export default AdminDashboardContent;
