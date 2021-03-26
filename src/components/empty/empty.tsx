import { AiFillFolderOpen } from 'react-icons/ai';
import { IsEmpty } from './style';

const Empty = () => {
  return (
    <IsEmpty>
      <AiFillFolderOpen />
      <span> Ninguna Lista Seleccionada</span>
    </IsEmpty>
  );
};

export default Empty;
