import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";
import css from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={css.item}>
        <BsFillPersonFill />
        <p>name</p>
      </div>

      <div className={css.item}>
        <BsFillTelephoneFill />
        <p>number</p>
      </div>

      <button type="button">Delete</button>
    </>
  );
};

export default Contact;
