import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/layout/layout';
import ListForm from '../components/listForm/list-form';

const Load = ({ toggleTheme }: any) => {
  const listData = useSelector((state: any) => state.add);

  return (
    <Layout toggleTheme={toggleTheme}>
      <>
        {listData.map((val: any, key: any) => {
          if (val.check === true) {
            return <ListForm val={val} key={key} defaultCheck="true" />;
          }

          return undefined;
        })}
      </>
    </Layout>
  );
};

export default Load;
