import Footer from "../layout/Footer";
import contactPage from "../../assets/images/contact-footer-au.png";
import ContactUsText from "../ContactUsComponents/ContactUsText";
import ContactUsForm from "../ContactUsComponents/ContactForm";
import seal from "../../assets/images/seal.svg";
const ContactUsPage = () => {
  return (
    <div className="w-full h-fit">
      <div className=" h-fit mx-4 my-2 flex flex-col items-center justify-center md:flex-row md:justify-between md:items-start md:px-28 md:py-4">
        <ContactUsText />
        <ContactUsForm />
      </div>
      <div className="hidden md:block md:-mt-56 xl:-mt-[250px]  xl:bg-[#e4f8ff] xl:rounded-t-full ">
        <img src={contactPage} alt="contact" className="" />
      </div>
      <div className="w-full h-60 p-4">
        <img src={seal} alt="seal" className="mx-auto "/>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
