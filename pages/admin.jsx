import SiteLayout from "../components/SiteLayout";
import React from "react";
import Link from "next/link";
import { Login } from "../components/Login";

function Sidebar() {
  return <aside className="w-1/4 border height  ">Aside</aside>;
}

function Dashboard() {
  return <main className="border flex-grow">Main</main>;
}

const AdminPage = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default AdminPage;

function DashboardLayout({ children }) {
  return (
    <>
      <div className=" px-8 py-4 flex justify-between">
        <div className="flex items-center bg-black p-2 pr-3">
          <img className="h-8 w-8" src="/newspaper.png" alt="" />
          <Link href="/">
            <span className="hover:cursor-pointer pl-3 pt-1 font-mono text-white">
              News app
            </span>
          </Link>
        </div>
        <Login />
      </div>
      <>{children}</>
    </>
  );
}

AdminPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
