import {useAppSelector} from '@hooks/useRedux';

const useHome = () => {
  const {userData} = useAppSelector(res => res.UserData);

  return {
    userData,
  };
};

export default useHome;
