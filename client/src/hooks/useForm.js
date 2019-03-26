import { useState, useEffect } from "react";

// useForm is a custom hook that can be used to add controlled form components with a validation function. Uses the concepts found in the blog post url below:
// https://upmostly.com/tutorials/form-validation-using-custom-react-hooks/

export const useForm = (callback, validate) => {
  // an object containing all of the form values
  const [values, setValues] = useState({});
  // the errors object
  const [errors, setErrors] = useState({});
  // a boolean value to make sure that we aren't calling useEffect when the errors object is empty
  const [isSubmitting, setIsSubmitting] = useState(false);

  // the useEffect function works similar to the componentDidMount and componentDidUpdate. We want to run this function when the errors object is not empty and when the isSubmitting function is not false.
  // A good way to think about when useEffect will be called is as a result ( side effect ) of [value] changing, run the useEffect function i.e. when the errors object changes the useEffect function will run the callback function passed to it.
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = event => {
    event.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = event => {
    event.persist();
    const { name, value } = event.target;

    setValues(values => ({ ...values, [name]: value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};
