import { Hearts } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Hearts
      height="80"
      width="80"
      color="#e231a7"
      ariaLabel="hearts-loading"
    //   wrapperStyle={{}}
    //   wrapperClass=""
      visible={true}
    />
  );
};
