import { useState } from 'react';
import './login.scss';
import { client } from '../../PocketBase';
import { useForm } from "react-hook-form";
import SnackBar from '../../components/snackbar/SnackBar';
import Money from '../../images/askingMoney01.png'

const Login = () => {

  const [registerForm, setRegisterForm] = useState(false)
  const [error, setError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [successMsg, setSuccessMsg] = useState('Success')

  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    if (registerForm) {
      await client.users.create({
        email: data.email,
        password: data.password,
        passwordConfirm: data.password,
      }).then(() => {
        setSuccessMsg('Congratulations Your Account has been created')
        setShowSuccess(true)
      }).catch((error) => {
        setShowSuccess(false)
        setError(error.data.data.email.message)
      })
    } else {
      await client.users.authViaEmail(data.email, data.password)
        .then(() => {
          setSuccessMsg('You have successfully logged in, Please wait you will be redirected shortly !!!')
          setShowSuccess(true)
        }).catch((error) => {
          setShowSuccess(false)
          setError(error.toString().split(':')[1])
        })
    }
  }


  return (
    <div className="login">
      <div className="image-left">
        <img src={Money} alt="leftimg" />
      </div>
      <div className="overlay">
        {showSuccess &&
          <SnackBar success={showSuccess} msg={successMsg} />
        }
        <div className="login-elements">
          <div className="greetings">
            <h1>GharBeti {registerForm ? 'Register' : 'Login'}</h1>
            <span>Namaste, Enter your details below to {registerForm ? 'create an account' : 'sign in to your account'} </span>
          </div>
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text" placeholder='Enter Email' {...register("email", { required: true })} />
              {errors.email?.type === 'required' && <span style={{ color: 'red', marginTop: '5px' }}>Email is Required</span>}
              <div className="password">
                <input type="password" placeholder='Enter Passcode' {...register("password", { required: true })} />
                <i className="fa-regular fa-eye"></i>
              </div>
              {errors.password?.type === 'required' && <span style={{ color: 'red', marginTop: '-5px', marginBottom: '10px' }}>Password is Required</span>}
              <span>Having Trouble in sign in?</span>
              <button type='submit'>{registerForm ? 'Sign Up' : 'Sign In'}</button>
            </form>
          </div>
          {error &&
            <span style={{ fontSize: '12px', color: 'red' }}>{error}</span>
          }
          <div className="divider">
            ―――― Or Sign in With ――――
          </div>
          <div className="social-logins">
            <div className="social-login">
              <i className="fa-brands fa-google"></i>
              <span>Google</span>
            </div>
            <div className="social-login">
              <i className="fa-brands fa-apple"></i>
              <span>Apple</span>
            </div>
            <div className="social-login">
              <i className="fa-brands fa-facebook"></i>
              <span>Facebook</span>
            </div>
          </div>
          <div className="signup">
            <span>{registerForm ? 'Already have an account?' : 'Don\'t have an account?'} <strong onClick={() => { setRegisterForm(!registerForm) }}>{registerForm ? 'Sign In Now' : 'Sign Up Now'}</strong></span>
          </div>
        </div>
      </div>
      {showSuccess && window.location.replace('/')}
    </div >
  )
}

export default Login