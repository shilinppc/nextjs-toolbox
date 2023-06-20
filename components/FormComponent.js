import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const FormComponent = ({ setStrategy }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/.netlify/functions/strategyFunction', data);
      setStrategy(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Insert your form fields here */}
    </form>
  );
};

export default FormComponent;
