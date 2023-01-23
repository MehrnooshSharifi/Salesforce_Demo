import Footer from "../layout/Footer";
import contactPage from "../../assets/images/contact-footer-au.png";
import ContactUsText from "../ContactUsComponents/ContactUsText";
import ContactUsForm from "../ContactUsComponents/ContactForm";
const ContactUsPage = () => {
  return (
    <div className="w-full h-screen">
      <div className=" flex flex-col items-center  md:flex-row md:justify-between md:items-center md:px-28 md:py-4">
        <ContactUsText />
        <ContactUsForm/>
      </div>
      <div className="hidden md:block">
        <img src={contactPage} alt="contact" className=" " />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
