import React from 'react';
import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SectionCards } from '@/components/section-cards';
import { ChartAreaInteractive } from '@/components/chart-area-interactive';
import { DataTable } from '@/components/data-table';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export default function DashboardPage({ user, onLogout }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar user={user} />
      <SidebarInset>
        <SiteHeader user={user} onLogout={onLogout} />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Top Section KPI Metric Cards */}
          <SectionCards />

          {/* Interactive Hospital Patient Analytics Chart */}
          <div className="min-h-[100px] flex-1 rounded-xl bg-muted/50 md:min-h-[300px]">
            <ChartAreaInteractive />
          </div>

          {/* Recent Admissions & OPD Patient Queue Table */}
          <div className="min-h-[100px] flex-1 rounded-xl bg-muted/50 p-4">
            <DataTable />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
