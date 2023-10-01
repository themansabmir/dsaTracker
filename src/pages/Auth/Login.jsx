import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedin, login, } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const islogin = useSelector(isLoggedin);

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(data));
  };

  useEffect(() => {
    if (islogin) {
  navigate('/viewall')
}
  },[islogin])

  return (
    <div className='flex min-h-screen justify-center items-center bg-purple-400'>
      <form onSubmit={submitHandler} className='bg-white px-10 py-4'>
        <div className='flex flex-col'>
          <label htmlFor=''>Username</label>
          <input
            type='text'
            name='username'
            id=''
            className='border-b-2 border-gray-400 '
            value={data.username}
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <div className='flex flex-col mt-3'>
          <label htmlFor=''> Password</label>
          <input
            type='text'
            name='password'
            className='border-b-2 border-gray-400 '
            id=''
            value={data.password}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className='flex flex-col'>
          <button type='submits'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
