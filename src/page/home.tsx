import React from 'react';
import FormComponent from '../components/form/form';
import Layout from '../components/layout/layout';

const Home = ({ toggleTheme }: any) => {
  return (
    <Layout toggleTheme={toggleTheme}>
      <FormComponent />
    </Layout>
  );
};

export default Home;
