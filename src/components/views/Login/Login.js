import React from 'react';
import style from './Login.module.scss';

const Login = () => {
  return (
    <div className='container'>
      <div className='d-flex flex-row justify-content-center align-items-center'>
        <div className={style.logincontainer}>
          <form>
            <div className='col-md-12 w-auto'>
              <label className='form-label'>Email</label>
              <input type='email' className='form-control' id='email' />
              <label className='form-label'>Hasło</label>
              <input type='password' className='form-control' id='password' />
              <p>
                Nie pamiętasz hasła ?{' '}
                <span className={style.blue}>Przypomnij hasło</span>
              </p>
              <div className='d-flex flex-row justify-content-center align-items-center'>
                <div className={style.loginbutton}>Zaloguj się </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
