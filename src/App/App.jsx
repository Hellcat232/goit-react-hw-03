import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useState } from "react";

const base = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [states, setState] = useState(base);
  // console.log(setState);
  const [filter, setFilter] = useState("");

  const visibleContact = states.filter((state) =>
    state.toString().toLowerCase().includes(filter.toLowerCase())
  );
  console.log(visibleContact);
  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox
        values={filter}
        onFilter={(event) => setFilter(event.target.value)}
      />
      <ContactList visible={visibleContact} state={states} />
    </div>
  );
};

export default App;
