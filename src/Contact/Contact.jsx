import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";
import css from "./Contact.module.css";

const Contact = ({ baseState }) => {
  return (
    <>
      {baseState.map((base) => {
        return (
          <div key={base.id} className={css.item}>
            <div className={css.name}>
              <BsFillPersonFill />
              <p>{base.name}</p>
            </div>

            <div className={css.number}>
              <BsFillTelephoneFill />
              <p>{base.number}</p>
            </div>

            <button className={css["delete-btn"]} type="button">
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Contact;
