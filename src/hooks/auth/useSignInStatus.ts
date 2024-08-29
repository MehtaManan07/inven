import useAuth from './useAuth';

const useSignInStatus = () => {
  const { data } = useAuth();
  return { isSignedIn: data ? data.token.length > 0 : false };
};

export default useSignInStatus;
