import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../lib/AuthProvider';

const emailValidator = (email) => {
    const re = /\S+@\S+\.\S+/;
    if (!email) return "Email can't be empty.";
    if (!re.test(email)) return 'Ooops! We need a valid email address.';
    return '';
  };
  
  const passwordValidator = (password) => {
    if (!password) return "Password can't be empty.";
    if (password.length < 6) return 'Password must be at least 6 characters long.';
    return '';
  };

const LoginScreen = () => {
    const {session} = useAuth();
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [loading, setLoading] = useState(false);
  
  async function loginWithEmail() {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    });
    if (error) alert(error.message);
    setLoading(false);
    if (data) {
      console.log('Authenticated successfully:', data.user);
      console.log(data.session)
    }
  }

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      console.warn(email.error, password.error);
      return;
    }
    console.log(emailError, passwordError);
    if (emailError.length === 0 && passwordError.length === 0) {
      console.warn("Logging in");
      loginWithEmail();
    }
  };
  if(session){
    <div>Loggedin</div>
    return;
  }

  return (
    <div className="flex flex-col items-center  bg-gray-100 p-4">
      <button className="self-start mb-4">
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div className="flex flex-col items-center">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.cNjnWl9iZvZ8869n5pB4rwAAAA&pid=Api&P=0&h=180"
          className="w-40 h-40 object-contain rounded-full mb-4"
          alt=""
        />
        <p className="text-4xl font-extrabold mb-5">Gymi for Administation</p>
      </div>
      <h2 className="text-2xl font-semibold mb-6">Welcome back.</h2>

      <div className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={email.value}
            onChange={(e) => setEmail({ value: e.target.value, error: '' })}
            className={`mt-1 block w-full px-3 py-2 border ${
              email.error ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          />
          {email.error && (
            <p className="mt-2 text-sm text-red-600">{email.error}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Mật khẩu
          </label>
            <input
                type="password"
                value={password.value}
                onChange={(e) => setPassword({ value: e.target.value, error: '' })}
                className={`mt-1 block w-full px-3 py-2 border ${
                password.error ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
          {password.error && (
            <p className="mt-2 text-sm text-red-600">{password.error}</p>
          )}
        </div>
      </div>
      <div className="flex justify-end w-full max-w-md mb-6">
        
      </div>
      <button
        disabled={loading}
        onClick={onLoginPressed}
        className={`w-full max-w-md px-4 py-2 font-semibold text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? 'Đang đăng nhập...' : 'Đăng Nhập'}
      </button>
     
    </div>
  );
};

export default LoginScreen;
