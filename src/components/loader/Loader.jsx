import { Dna } from 'react-loader-spinner';
import style from './style.module.css';

export const Loader = () => {
  return (
    <div className={style.loader}>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
