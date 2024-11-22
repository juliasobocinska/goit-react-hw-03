import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';



const ContactForm = ({ onAddContact }) => {
    
    const validationSchema = Yup.object({
      name: Yup.string()
        .min(3)
        .max(50)
        .required('Name is required'),
      number: Yup.string()
        .min(3)
        .max(50)
        .required('Number is required'),
    });
  
    
    const handleSubmit = (values, { resetForm }) => {
      
      const newContact = {
        id: nanoid(),
        name: values.name,
        number: values.number,
      };
      onAddContact(newContact);  
      resetForm(); 
    };
  
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" type="text" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <Field id="number" name="number" type="text" />
            <ErrorMessage name="number" component="div" />
          </div>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  };
  
  export default ContactForm;