import AppRouter from "./router";
import ScrollToTop from "../components/common/ScrollToTop";
import AuthBar from "../pages/auth/AuthBar";

export default function App() {
  return (
    <>
      <AuthBar />
      <ScrollToTop />
      <AppRouter />
    </>
  );
}
