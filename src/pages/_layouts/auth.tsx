import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="flex h-screen w-screen">
      <h1 className="text-2xl font-bold">Autenticação</h1>
      <div className="flex w-full flex-col">
        <Outlet />
      </div>
    </div>
  );
}
