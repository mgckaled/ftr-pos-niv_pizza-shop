import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="flex h-screen w-screen">
      <h1>Cabeçalho</h1>
      <div className="flex w-full flex-col">
        <Outlet />
      </div>
    </div>
  );
}
