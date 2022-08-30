import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { validatePassword } from '../../utils/utils';
import { useRef, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types';

function SignInScreen(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorClass, setErrorClass] = useState('');
  const MIN_PASSWORD_LENGTH = 2;

  const dispatch = useAppDispatch();

  const handlePasswordInput = (evt: FormEvent<HTMLInputElement>) => {
    if ((passwordRef.current?.value as string).length < MIN_PASSWORD_LENGTH || (passwordRef.current?.value as string) === '') {
      evt.preventDefault();
      setErrorMessage('The minimum password length is two symbols');
      setErrorClass('sign-in__field--error');
    } else if(!validatePassword(passwordRef.current?.value as string)){
      setErrorMessage('The password must contain minimum one letter and one number');
      setErrorClass('sign-in__field--error');
    } else {
      setErrorMessage('');
      setErrorClass('');
    }
  };

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if ((passwordRef.current?.value as string) === '') {
      evt.preventDefault();
      setErrorMessage('The minimum password length is two symbols');
      setErrorClass('sign-in__field--error');
    }

    if (emailRef.current !== null && passwordRef.current !== null && (passwordRef.current?.value as string).length >= MIN_PASSWORD_LENGTH && (passwordRef.current?.value as string) !== '') {
      if(validatePassword(passwordRef.current?.value)){
        onSubmit({
          eMail: emailRef.current.value,
          password: passwordRef.current.value,
        });
      } else {
        setErrorMessage('The password must contain minimum one letter and one number');
        setErrorClass('sign-in__field--error');
      }
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
          <div className="sign-in__message">
            <p>{errorMessage}</p>
          </div>
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
            <div className={`sign-in__field ${errorClass}`}>
              <input
                ref={passwordRef}
                className='sign-in__input'
                type='password'
                placeholder='Password'
                name='user-password'
                id='user-password'
                onInput={handlePasswordInput}
              />
              <label className='sign-in__label visually-hidden' htmlFor='user-password'>Password</label>
            </div>
          </div>
          <div className='sign-in__submit'>
            <button className='sign-in__btn' type='submit'>
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
