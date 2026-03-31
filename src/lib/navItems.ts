import { NavSection } from "@/types/dashboard.types";
import { getDefaultDashboardRoute, UserRole } from "./authUtils";

export const getCommonNavItems = (role: UserRole): NavSection[] => {
  const defaultDashboard = getDefaultDashboardRoute(role);

  const profilePath =
    role === "CUSTOMER"
      ? "/dashboard/profile"
      : `/${role.toLowerCase().replace("_", "-")}/dashboard/profile`;

  return [
    {
      items: [
        {
          title: "Home",
          href: "/",
          icon: "Home",
        },
        {
          title: "Dashboard",
          href: defaultDashboard,
          icon: "LayoutDashboard",
        },
        {
          title: "My Profile",
          href: profilePath,
          icon: "User",
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          title: "Change Password",
          href: "/change-password",
          icon: "Settings",
        },
        {
          title: "Account Settings",
          href: "/settings",
          icon: "Settings",
        },
      ],
    },
  ];
};

export const providerNavItems: NavSection[] = [
  {
    title: "Service Management",
    items: [
      {
        title: "Service Requests",
        href: "/provider/dashboard/requests",
        icon: "ClipboardList",
      },
      {
        title: "My Services",
        href: "/provider/dashboard/my-services",
        icon: "Briefcase",
      },
      {
        title: "Availability",
        href: "/provider/dashboard/schedules",
        icon: "Clock",
      },
      {
        title: "Earnings",
        href: "/provider/dashboard/earnings",
        icon: "Wallet",
      },
      {
        title: "Reviews",
        href: "/provider/dashboard/reviews",
        icon: "Star",
      },
      {
        title: "Service Requests",
        href: "/provider/dashboard/requests",
        icon: "ClipboardList",
      },
      {
        title: "Active Jobs",
        href: "/provider/dashboard/active-jobs",
        icon: "Activity",
      },
      {
        title: "Schedules",
        href: "/provider/dashboard/schedules",
        icon: "Clock",
      },
    ],
  },
];

export const adminNavItems: NavSection[] = [
  {
    title: "User Management",
    items: [
      {
        title: "Admins",
        href: "/admin/dashboard/admins",
        icon: "ShieldCheck",
      },
      {
        title: "Service Providers",
        href: "/admin/dashboard/providers",
        icon: "HardHat",
      },
      {
        title: "Customers",
        href: "/admin/dashboard/customers",
        icon: "Users",
      },
    ],
  },
  {
    title: "Platform Operations",
    items: [
      {
        title: "All Categories",
        href: "/admin/dashboard/categories",
        icon: "Layers",
      },
      {
        title: "Service Verification",
        href: "/admin/dashboard/verifications",
        icon: "UserCheck",
      },
      {
        title: "Transactions",
        href: "/admin/dashboard/transactions",
        icon: "CreditCard",
      },
      {
        title: "Platform Reports",
        href: "/admin/dashboard/reports",
        icon: "BarChart3",
      },
    ],
  },
  {
    title: "User Control",
    items: [
      {
        title: "Service Providers",
        href: "/admin/dashboard/providers",
        icon: "HardHat",
      },
      { title: "Customers", href: "/admin/dashboard/customers", icon: "Users" },
      {
        title: "Job Candidates",
        href: "/admin/dashboard/candidates",
        icon: "UserSearch",
      },
    ],
  },
  {
    title: "Platform",
    items: [
      {
        title: "All Bookings",
        href: "/admin/dashboard/bookings",
        icon: "CalendarDays",
      },
      {
        title: "Payments",
        href: "/admin/dashboard/payments",
        icon: "CreditCard",
      },
    ],
  },
];

export const managerNavItems: NavSection[] = [
  {
    title: "User Management",
    items: [
      {
        title: "Admins",
        href: "/manager/dashboard/admins",
        icon: "ShieldCheck",
      },
      {
        title: "Service Providers",
        href: "/manager/dashboard/providers",
        icon: "HardHat",
      },
      {
        title: "Customers",
        href: "/manager/dashboard/customers",
        icon: "Users",
      },
    ],
  },
  {
    title: "Platform Operations",
    items: [
      {
        title: "All Categories",
        href: "/manager/dashboard/categories",
        icon: "Layers",
      },
      {
        title: "Service Verification",
        href: "/manager/dashboard/verifications",
        icon: "UserCheck",
      },
      {
        title: "Transactions",
        href: "/manager/dashboard/transactions",
        icon: "CreditCard",
      },
      {
        title: "Platform Reports",
        href: "/manager/dashboard/reports",
        icon: "BarChart3",
      },
    ],
  },
];

export const candidateNavItems: NavSection[] = [
  {
    title: "Job Portal",
    items: [
      {
        title: "Applied Jobs",
        href: "/candidate/dashboard/applied",
        icon: "Briefcase",
      },
      {
        title: "Job Offers",
        href: "/candidate/dashboard/offers",
        icon: "MailOpen",
      },
      {
        title: "Resume Builder",
        href: "/candidate/dashboard/resume",
        icon: "FileUser",
      },
    ],
  },
];

export const customerNavItems: NavSection[] = [
  {
    title: "Orders & Activity",
    items: [
      {
        title: "My Bookings",
        href: "/dashboard/my-bookings",
        icon: "CalendarCheck",
      },
      {
        title: "Track Service",
        href: "/dashboard/track-service",
        icon: "MapPin",
      },
    ],
  },
  {
    title: "History",
    items: [
      {
        title: "Payment History",
        href: "/dashboard/payments",
        icon: "Receipt",
      },
      {
        title: "My Reviews",
        href: "/dashboard/my-reviews",
        icon: "MessageSquareText",
      },
    ],
  },
];

export const getNavItemsByRole = (role: UserRole): NavSection[] => {
  const commonNavItems = getCommonNavItems(role);

  switch (role) {
    case "ADMIN":
      return [...commonNavItems, ...adminNavItems];

    case "MANAGER":
      return [...commonNavItems, ...managerNavItems];

    case "SERVICE_PROVIDER":
      return [...commonNavItems, ...providerNavItems];

    case "JOB_CANDIDATE":
      return [...commonNavItems, ...candidateNavItems];

    case "CUSTOMER":
      return [...commonNavItems, ...customerNavItems];

    default:
      return commonNavItems;
  }
};
