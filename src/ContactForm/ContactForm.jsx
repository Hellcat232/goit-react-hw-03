import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useId } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
const initialValue = {
  username: "",
  usernumber: "",
};

const Validation = Yup.object().shape({
  username: Yup.string()
    .min(3, "Must be min 3 symbols")
    .max(50, "Must be no more then 50 symbols")
    .required("Required field"),
  usernumber: Yup.string()
    .min(2, "Must be min 2 symbols")
    .max(50, "Must be no more then 50 symbols")
    .required("Required field"),
});

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={Validation}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form className={css["contact-form"]}>
        <label htmlFor={nameId}>Name</label>
        <Field
          className={css["contact-inputs"]}
          type="text"
          name="username"
          id={nameId}
        />
        <ErrorMessage name="username" component="span" />

        <label htmlFor={numberId}>Number</label>
        <Field
          className={css["contact-inputs"]}
          type="phone"
          name="usernumber"
          id={numberId}
        />
        <ErrorMessage name="usernumber" component="span" />

        <button className={css["add-btn"]} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

// const ContactForm = () => {

//   return (
//     <>
//       <form className={css["contact-form"]}>
//         <label htmlFor={nameId}>Name</label>
//         <input className={css["contact-inputs"]} type="text" id={nameId} />
//         <label htmlFor={numberId}>Number</label>
//         <input className={css["contact-inputs"]} type="text" />
//         <button className={css["add-btn"]} type="submit" id={numberId}>
//           Add contact
//         </button>
//       </form>
//     </>
//   );
// };

export default ContactForm;
