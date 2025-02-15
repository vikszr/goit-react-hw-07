import css from "./ContactForm.module.css";
import {useId} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {addContact} from "../../redux/contactsOps.js";

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact({name: values.name, number: values.number}));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{name: "", number: ""}}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={css.input}
          />
          <ErrorMessage name="name" component="span" className={css.error}/>
        </div>

        <div className={css.formGroup}>
          <label className={css.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            className={css.input}
          />
          <ErrorMessage name="number" component="span" className={css.error}/>
        </div>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
