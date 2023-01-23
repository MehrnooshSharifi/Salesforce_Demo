import { useFormik } from "formik";
import * as Yup from "yup";
const initialValues = {
  firsName: "",
  lastName: "",
  jobTitle: "",
  email: "",
  company: "",
  employees: "",
  phone: "",
  region: "Poland",
  productIntrest: "",
  comments: "",
  terms: false,
};
const validationSchema = Yup.object({
  firsName: Yup.string().required("Enter your first name"),
  lastName: Yup.string().required("Enter your last name"),
  jobTitle: Yup.string().required("Select your tilte"),
  email: Yup.string().required("Enter a valid email address"),
  company: Yup.string().required("Enter your company name"),
  employees: Yup.string().required("Select the number of employees"),
  phone: Yup.string().required("Enter a valid phone number"),
  productIntrest: Yup.string().required("Select your product interest"),
  terms: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});
const ContactUsForm = () => {
  const onSubmit = () => {
    console.log(formik.values);
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validateOnMount: true,
    enableReinitialize: true,
  });
  return (
    <div className="bg-gray-100 p-10 md:ml-20">
      <h2 className="font-medium">
        Just fill out the form, and we'll be in touch ASAP.
      </h2>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-start"
      >
        <div>inputs form</div>
        <div className="text-xs">
          <p>
            By registering, you confirm that you agree to the processing of your
            personal data by Salesforce as described in the Privacy Statement.
          </p>
        </div>
        <button
          type="onSubmit"
          className="bg-blue-900 mt-4 text-white px-8 py-2  rounded-lg"
        >
          CONTACT US
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
