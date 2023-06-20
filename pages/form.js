import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Button, TextField, Container } from '@material-ui/core';
import { useRouter } from 'next/router';

const FormPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/strategyFunction', data);
      // Store the received strategy in localStorage
      localStorage.setItem('strategy', JSON.stringify(response.data));
      // Navigate to the result page
      router.push('/result');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register("businessType")} label="Specify the type of business" fullWidth margin="normal" />
        {/* Add more fields as needed */}
        <Button type="submit" variant="contained" color="primary">
          Generate Strategy
        </Button>
      </form>
    </Container>
  );
};

export default FormPage;
