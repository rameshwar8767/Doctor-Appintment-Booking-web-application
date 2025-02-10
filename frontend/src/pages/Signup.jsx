import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup submitted:', { name, email, password });
    // Add sign-up logic here
    navigate('/profile'); // Redirect to dashboard after successful signup
  };

  return (
    <form className='min-h-[80vh] flex items-center' onSubmit={onSubmitHandler}>
      <div className='flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create an Account' : 'Login'}</p>
        <p>Please sign up to book an appointment</p>

        <div className='w-full'>
          <p>Full Name</p>
          <input 
            className='border border-zinc-300 rounded w-full p-2 mt-1' 
            type='text' 
            onChange={(e) => setName(e.target.value)} 
            value={name} 
            required 
          />
        </div>

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

        <div className='w-full'>
          <p>Confirm Password</p>
          <input 
            className='border border-zinc-300 rounded w-full p-2 mt-1' 
            type='password' 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            value={confirmPassword} 
            required 
          />
        </div>

        <button className='bg-primary text-white w-full py-2 rounded-md text-base' type='submit'>Create an Account</button>
        
        <p>Already have an account? <span className='text-primary underline cursor-pointer' onClick={() => navigate('/login')}>Login here</span></p>
      </div>
    </form>
  );
};

export default Signup;
