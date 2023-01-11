import Footer from "./Footer";
import DesktopHeader from "./DesktopHeader/DesktopHeader";
import MobileHeader from "./MobileHeader/MobileHeader";

const Layout = ({ children}) => {
  return (
    <>
      <DesktopHeader />
      <MobileHeader/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
