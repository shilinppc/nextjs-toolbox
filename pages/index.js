import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

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
          <label>Specify the type of business:</label>
          <select {...register("businessType")}>
            <option value="Services">Services</option>
            <option value="eCommerce">eCommerce</option>
          </select>
        </div>

        <div>
          <label>Specify industry:</label>
          <select {...register("industry")}>
            <option value="Apparel & Accessories">Apparel & Accessories</option>
            <option value="Arts & Crafts Supplies">Arts & Crafts Supplies</option>
            {/* Add other options as needed */}
            <option value="Travel">Travel</option>
          </select>
        </div>

        <div>
          <label>Target area for marketing activities:</label>
          <select {...register("targetArea")}>
            <option value="Kyiv">Kyiv</option>
            <option value="Ukraine">Ukraine</option>
          </select>
        </div>

        <div>
          <label>Define your Goal:</label>
          <select {...register("goal")}>
            <option value="Leads">Leads</option>
            <option value="Transactions">Transactions</option>
            <option value="Income">Income</option>
            <option value="ROAS">ROAS</option>
          </select>
        </div>

        <input type="submit" value="Generate Strategy" />
      </form>
    </div>
  );
};

export default Index;


export default Index;
      <Footer />
