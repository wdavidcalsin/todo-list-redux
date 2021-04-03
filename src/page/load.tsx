import React from 'react';
import { useSelector } from 'react-redux';
import Empty from '../components/empty/empty';
import Layout from '../components/layout/layout';
import ListForm from '../components/listForm/list-form';

interface IPropValue {
  value: string;
  id: string;
  check: boolean;
}

const Load = ({ toggleTheme }: any) => {
  let countCheck = 0;
  const listData = useSelector((state: any) => state.add);

  return (
    <Layout toggleTheme={toggleTheme}>
      <>
        {listData.map((itemData: IPropValue, key: any) => {
          if (itemData.check === true) {
            countCheck++;
            return <ListForm valItem={itemData} key={key} />;
          }
          return undefined;
        })}

        {countCheck === 0 && <Empty />}
      </>
    </Layout>
  );
};

export default Load;
