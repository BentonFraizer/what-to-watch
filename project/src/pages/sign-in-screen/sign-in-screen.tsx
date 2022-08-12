import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import { useRef, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';


function SignInScreen(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {authorizationStatus} = useAppSelector((state) => state);


  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(emailRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        eMail: emailRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    <div className="user-page">
      <Header isInSignIn/>
      <div className='sign-in user-page__content'>
        <form
          action=''
          className='sign-in__form'
          onSubmit={handleSubmit}
        >
          <div className='sign-in__fields'>
            <div className='sign-in__field'>
              <input
                ref={emailRef}
                className='sign-in__input'
                type='email'
                placeholder='Email address'
                name='user-email'
                id='user-email'
              />
              <label className='sign-in__label visually-hidden' htmlFor='user-email'>Email address</label>
            </div>
            <div className='sign-in__field'>
              <input
                ref={passwordRef}
                className='sign-in__input'
                type='password'
                placeholder='Password'
                name='user-password'
                id='user-password'
              />
              <label className='sign-in__label visually-hidden' htmlFor='user-password'>Password</label>
            </div>
          </div>
          <div className='sign-in__submit'>
            <button
              onClick={() =>
              {
                if (authorizationStatus === AuthorizationStatus.Auth) {
                  navigate(AppRoute.Main);
                }
              }}
              className='sign-in__btn'
              type='submit'
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default SignInScreen;
