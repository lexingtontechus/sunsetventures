"use client";
import { useAuth, useUser } from "@clerk/nextjs";

const Admin = () => {
  //  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { user } = useUser();
  return (
    <div className="mx-auto justify-between svg-dashboard p-8 mb-8">
      <h1 className="mb-4 text-5xl font-bold uppercase text-pretty text-center">
        Admin Dashboard
      </h1>
      <div className="flex flex-wrap px-8 mx-auto">
        <div className="mx-auto text-center"></div>
        <div className="mx-auto">NA</div>
      </div>
    </div>
  );
};

export default Admin;
