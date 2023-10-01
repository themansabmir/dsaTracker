import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../features/userSlice";
import {Link} from 'react-router-dom'
const Signup = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    gender: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(data));
  };

  return (
    <div className='min-h-screen flex justify-center items-center bg-green-300'>
      <form onSubmit={submitHandler} className='bg-white px-20 py-10'>
        <h1 className='mb-10 text-xl'>Sign Up Here</h1>
        <div className='flex gap-8'>
          <div className='flex flex-col'>
            <label
              htmlFor=''
              class=' inline-block   text-gray-500 text-gray-500'
            >
              First Name
            </label>
            <input
              type='text'
              name='firstname'
              id=''
              className='border-b-2 border-gray-400'
              value={data.firstname}
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor=' ' class=' inline-block  text-gray-500'>
              Last Name
            </label>
            <input
              type='text'
              name='lastname'
              id=''
              className='border-b-2 border-gray-400'
              value={data.lastname}
              onChange={(e) => changeHandler(e)}
            />
          </div>
        </div>
        <div className='flex flex-col'>
          <label class=' inline-block   text-gray-500 text-gray-500' htmlFor=''>
            Username
          </label>
          <input
            type='text'
            name='username'
            value={data.username}
            className='border-b-2 border-gray-400'
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className='flex flex-col'>
          <label class='block   text-gray-500 text-gray-500' htmlFor=''>
            Email
          </label>
          <input
            type='email'
            name='email'
            id=''
            className='border-b-2 border-gray-400'
            value={data.email}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className='flex flex-col'>
          <label class='block  text-gray-500 text-gray-500' htmlFor=''>
            Password
          </label>
          <input
            type='password'
            name='password'
            className='border-b-2 border-gray-400'
            value={data.password}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className='flex flex-col'>
          <label class=' text-gray-500 text-gray-500' htmlFor=''>
            Gender
          </label>

          <select
            name='gender'
            id=''
            className='px-2 py-1 bg-white border-2 border-gray-500 rounded'
            value={data.gender}
            onChange={(e) => changeHandler(e)}
          >
            <option value=''>Select an Option</option>
            {["Male", "Female"].map((item, i) => {
              return <option value={item}>{item} </option>;
            })}
          </select>
        </div>
        <div className='flex flex-col mt-8 bg-green-500 uppercase  font-bold  py-3 text-white cursor-pointer '>
          <button type='submit' className='uppercase '>
            Sign Up
          </button>
        </div>
        <div className="mt-3">
          <p>
            Already have an account?{" "}
            <span className="text-green-700 font-semibold">
              <Link to={"/login"}>Sign In </Link>
            </span>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
