import { useFormik } from "formik";
import * as Yup from "yup";
const initialValues = {
  firsName: "",
  lastName: "",
  jobTitle: "",
  email: "",
  // company: "",
  // employees: "",
  // phone: "",
  // region: "Poland",
  // productIntrest: "",
  // comments: "",
  terms: false,
};
const validationSchema = Yup.object({
  firsName: Yup.string().required("Enter your first name"),
  lastName: Yup.string().required("Enter your last name"),
  jobTitle: Yup.string().required("Select your tilte"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email address is required"),
  // company: Yup.string().required("Enter your company name"),
  // employees: Yup.string().required("Select the number of employees"),
  // phone: Yup.string().required("Enter a valid phone number"),
  // productIntrest: Yup.string().required("Select your product interest"),
  terms: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});
const ContactUsForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validateOnMount: true,
    enableReinitialize: true,
  });
  return (
    <div className="bg-gray-100  flex flex-col items-center justify-center p-10 md:ml-20 mx-20 md:mx-15 max-w-lg w-fit h-fit ">
      <h2 className="font-medium mb-4">
        Just fill out the form, and we'll be in touch ASAP.
      </h2>
      <form
        onSubmit={formik.handleSubmit}
        className=" h-screen flex flex-col justify-start w-fit"
      >
        <div className="flex flex-col text-sm justify-center items-center space-y-3 w-fit ">
          <div className=" flex justify-between space-x-4">
            <div className="flex flex-col w-fit">
              <label htmlFor="firsName">First name</label>
              <input
                id="firsName"
                type="text"
                name="firsName"
                className=" border-2 rounded-md py-1 px-3 "
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.firsName}
                {...formik.getFieldProps("firsName")}
              />
              {formik.touched.firsName && formik.errors.firsName && (
                <div className="text-red-600">{formik.errors.firsName}</div>
              )}
            </div>
            <div>
              <div className="flex flex-col">
                <label htmlFor="lastName">Last name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className=" border-2 rounded-lg py-1 px-3 "
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.values.lastName}
                  {...formik.getFieldProps("lastName")}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <div className="text-red-600">{formik.errors.lastName}</div>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-between space-x-4">
            <div className="flex flex-col">
              <label htmlFor="jobTitle">Job Title</label>
              <select
                className="border-2 rounded-lg py-1 px-3 w-[195px]"
                id="jobTitle"
                name="jobTitle"
                // value={formik.values.jobTitle}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                {...formik.getFieldProps("jobTitle")}
              >
                <option>Job Title</option>
                <option value="Sales Manager">Sales Manager</option>
                <option value="IT Manager">IT Manager</option>
                <option value="Personal Intrest">Personal Intrest</option>
              </select>
              {formik.touched.jobTitle && formik.errors.jobTitle && (
                <div className="text-red-600">{formik.errors.jobTitle}</div>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="text"
                className=" border-2 rounded-lg py-1 px-3 "
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-600">{formik.errors.email}</div>
              )}
            </div>
          </div>
          <div className="flex space-x-4 items-start mb-4 ">
            <input
              type="checkbox"
              className="mt-2"
              name="terms"
              {...formik.getFieldProps("terms")}
            />
            <p>
              Yes, I would like to receive marketing communications regarding
              Salesforce products, services, and events. I can unsubscribe at
              any time.
            </p>
          </div>
          {formik.touched.terms && formik.errors.terms && (
            <div className="text-red-600 "> {formik.errors.terms} </div>
          )}
        </div>
        <div className="text-xs mt-4">
          <p>
            By registering, you confirm that you agree to the processing of your
            personal data by Salesforce as described in the Privacy Statement.
          </p>
        </div>
        <button
          type="submit"
          className= {`bg-blue-900 mt-4 text-white px-8 py-2  rounded-lg ${!formik.isValid? "opacity-25" : "opacity-100" }  `  }
          disabled={!formik.isValid}
        >
          CONTACT US
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
