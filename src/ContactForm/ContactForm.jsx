import css from "./ContactForm.module.css";
import { useId } from "react";

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();

  return (
    <>
      <form className={css["contact-form"]}>
        <label htmlFor={nameId}>Name</label>
        <input className={css["contact-inputs"]} type="text" id={nameId} />
        <label htmlFor={numberId}>Number</label>
        <input className={css["contact-inputs"]} type="text" />
        <button className={css["add-btn"]} type="submit" id={numberId}>
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
