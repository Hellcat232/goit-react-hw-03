import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ visible }) => {
  return (
    <ul className={css.contacts}>
      {visible.map((item) => {
        return (
          <li key={item.id}>
            <Contact baseState={visible} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
