import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export function App() {
  return (
    <>
      <meta charSet="utf-8" />
      <RouterProvider router={router} />
    </>
  );
}
