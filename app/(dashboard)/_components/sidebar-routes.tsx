"use client";

import { Layout, Compass, List, BarChart, Home, Tag } from "lucide-react";
import SidebarItem from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
];

const adminRoutes = [
  {
    icon: Home,
    label: "Home",
    href: "/admin",
  },
  {
    icon: Tag,
    label: "Coupon Codes",
    href: "/admin/coupon-codes",
  },
];

const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("teacher");
  const isAdminPage = pathname?.includes("admin");

  const routes = isTeacherPage
    ? teacherRoutes
    : isAdminPage
    ? adminRoutes
    : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
