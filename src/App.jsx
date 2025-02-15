import css from "./App.module.css";
import "modern-normalize";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchContacts} from "./redux/contactsOps.js";
import {selectError, selectIsLoading} from "./redux/contactsSlice.js";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList/>
    </div>
  );
}

export default App;
