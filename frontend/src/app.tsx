import { Router, useLocation } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import type { ParentProps } from "solid-js";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import SplashScreen from "~/components/SplashScreen";
import "./app.css";

function RootLayout(props: ParentProps) {
  const location = useLocation();

  return (
    <>
      <SplashScreen enabled={location.pathname === "/"} />
      {location.pathname !== "/" && <Nav />}
      <Suspense>{props.children}</Suspense>
    </>
  );
}

export default function App() {
  return (
    <Router root={RootLayout}>
      <FileRoutes />
    </Router>
  );
}
