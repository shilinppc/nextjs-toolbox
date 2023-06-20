import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Toolbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Index = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/.netlify/functions/strategyFunction', data);
      const strategy = response.data;
      // Now you can do something with the received strategy, like updating your component's state
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Generate Digital Marketing Strategy</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Question 1:</label>
          <select {...register("answer1")}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            {/* Add as many options as needed */}
          </select>
        </div>

       <div>
          <label>Question 2:</label>
          <select {...register("answer1")}>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
             <option value="option5">Option 5</option>
          </select>
        </div>


        <input type="submit" value="Generate Strategy" />
      </form>
    </div>
  );
};

export default Index;
      </main>
      <Footer />
    </div>
  );
}
