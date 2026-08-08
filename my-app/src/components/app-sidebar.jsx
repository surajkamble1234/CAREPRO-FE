import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Lifecycle",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Analytics",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Projects",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Team",
      url: "#",
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Reports",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: IconFileWord,
    },
  ],
}

export function AppSidebar({
  user,
  onLogout,
  ...props
}) {
  const currentUser = user ? {
    name: user.name || user.role || 'Staff Member',
    email: user.email || `${user.role?.toLowerCase() || 'staff'}@maxzom.in`,
    avatar: user.avatar || '/avatars/shadcn.jpg',
  } : data.user;

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="p-4 border-b border-sidebar-border/50">
        <div className="flex flex-col gap-1">
          {/* Brand Name */}
          <div className="flex items-center gap-1.5">
            <span className="text-2xl font-extrabold tracking-tight text-sidebar-foreground">
              Care<span className="text-emerald-400">Pro</span>
              <span className="text-amber-400 font-black ml-0.5">+</span>
            </span>
          </div>

          {/* Subtitle */}
          <div className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase mt-0.5">
            SMART CARE. SIMPLIFIED.
          </div>

          {/* Powered By Maxzom */}
          <div className="text-[11px] text-muted-foreground font-medium flex items-center gap-1.5 mt-0.5">
            <span>Powered by</span>
            <span className="font-bold text-amber-400 dark:text-amber-300">Maxzom</span>
          </div>
        </div>

        {/* Heartbeat ECG Pulse Line Effect */}
        <div className="my-2.5 opacity-85">
          <svg viewBox="0 0 200 24" className="w-full h-5 stroke-emerald-400 fill-none stroke-[2.5]">
            <path d="M0 12 H50 L62 2 L74 22 L86 5 L98 19 L110 12 H200" className="animate-pulse" />
          </svg>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={currentUser} onLogout={onLogout} />
      </SidebarFooter>
    </Sidebar>
  );
}
