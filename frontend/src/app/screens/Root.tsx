import { Outlet } from "react-router";

export default function Root() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-md mx-auto min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}
