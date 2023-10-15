import { useState, useEffect } from 'react';

/**
 * validate forms
 */
const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    const newErrors = await validate(values)
    setErrors(newErrors);
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    // setErrors(validate(values));
  };

  return {
    handleChange,
    handleSubmit,
    setValues,
    values,
    errors,
    isSubmitting
  }
};

export default useForm;