import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ visible }) => {
  return (
    <ul className={css.contacts}>
      <li>
        <Contact baseState={visible} />
      </li>
    </ul>
  );
};

export default ContactList;
