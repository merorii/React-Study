//base
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//components
import { Login, Animation } from 'components';

const LoginPage = () => {
  const user = useSelector((state) => state.user);
  const loading = user.loginLoading;
  const history = useHistory();

  useEffect(() => {
    return () => {
      loading && history.push('/enjoy');
    };
  }, [loading, history]);

  return (
    <>
      {loading ? <Animation /> : <></>}
      <Login />
    </>
  );
};

export default LoginPage;
