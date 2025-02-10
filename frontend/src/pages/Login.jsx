import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
    // Add authentication logic here
    navigate('/profile'); // Redirect to dashboard after login
  };
  
  return (
    <form className='min-h-[80vh] flex items-center' onSubmit={onSubmitHandler}>
      <div className='flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>Login</p>
        <p>Welcome back! Please enter your credentials.</p>
        
        <div className='w-full'>
          <p>Email</p>
          <input 
            className='border border-zinc-300 rounded w-full p-2 mt-1' 
            type='email' 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            required
          />
        </div>
        
        <div className='w-full'>
          <p>Password</p>
          <input 
            className='border border-zinc-300 rounded w-full p-2 mt-1' 
            type='password' 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            required
          />
        </div>
        
        <button className='bg-primary text-white w-full py-2 rounded-md text-base' type='submit'>Login</button>
        
        <button className='text-primary w-full py-2 rounded-md text-base' type='button' onClick={() => navigate('/forgot-password')}>Forgot Password?</button>
        
        <p>Don't have an account? <span className='text-primary underline cursor-pointer' onClick={() => navigate('/signup')}>Sign up here</span></p>
      </div>
    </form>
  );
};

export default Login;
