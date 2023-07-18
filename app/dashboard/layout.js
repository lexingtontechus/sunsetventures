"use client";
import DashboardMenu from "./components/dashboardmenu";

export default function DashboardLayout({ children, params }) {
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  return (
    <section>
      <DashboardMenu />
      {children}
    </section>
  );
}
