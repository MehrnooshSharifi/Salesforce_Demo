import Footer from "./Footer";
import DesktopHeader from "./DesktopHeader/DesktopHeader";

const Layout = ({ children}) => {
  return (
    <>
      <DesktopHeader />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
