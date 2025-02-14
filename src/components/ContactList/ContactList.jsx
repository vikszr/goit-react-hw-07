import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import {useSelector} from "react-redux";
import {selectFilteredContacts} from "../../redux/contactsSlice.js";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.container}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact}/>
        </li>
      ))}
    </ul>
  );
}
