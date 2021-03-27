import React from 'react';
import { useSelector } from 'react-redux';
import Empty from '../components/empty/empty';
import Layout from '../components/layout/layout';
import ListForm from '../components/listForm/list-form';

const Load = ({ toggleTheme }: any) => {
  let countCheck = 0;
  const listData = useSelector((state: any) => state.add);

  return (
    <Layout toggleTheme={toggleTheme}>
      <>
        {listData.map((itemData: any, key: any) => {
          if (itemData.check === true) {
            countCheck++;
            return <ListForm data={itemData} key={key} defaultCheck="true" />;
          }
          return undefined;
        })}

        {countCheck === 0 && <Empty />}
      </>
    </Layout>
  );
};

export default Load;
