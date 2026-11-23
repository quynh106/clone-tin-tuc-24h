import AppRouter from "./router";
import ScrollToTop from "../components/common/ScrollToTop";
import AccountMenu from "../components/auth/AccountMenu";
import AuthModal from "../components/auth/AuthModal";
import NoticeModal from "../components/auth/NoticeModal";

export default function App() {
  return (
    <>
      <AccountMenu />
      <ScrollToTop />
      <AppRouter />
      <AuthModal />
      <NoticeModal />
    </>
  );
}
