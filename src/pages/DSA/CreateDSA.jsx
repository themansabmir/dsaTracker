import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createQuestion, created } from "../../features/dsaSlice";
import { Link, useNavigate } from "react-router-dom";

export const CreateDSA = () => {
  const dispatch = useDispatch();
  const isCreated = useSelector(created);
  const navigate = useNavigate();
  const [data, setData] = useState({
    questionName: "",
    questionUrl: "",
    difficultyLevel: "",
    solution: "",
    notes: "",
    topicName: "",
    tags: [],
  });

  const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createQuestion(data));
  };

  useEffect(() => {
    if (isCreated) {
      navigate("/viewall");
    }
  }, [isCreated]);
  return (
    <div className='bg-blue-300 min-h-screen flex justify-center items-center '>
      <form onSubmit={(e) => submitHandler(e)} className='bg-white px-4 py-3'>
        <span className='bg-red-500 text-white font-semibold uppercae px-2 py0'>
          <Link to={"/viewall"}>Go Back</Link>
        </span>
        <h1 className="text-center text-xl text-gray-700">Add New Question</h1>
        <div className='flex flex-col '>
          <label htmlFor=''> Question Title</label>
          <input
            type='text'
            name='questionName'
            value={data.questionName}
            onChange={changeHandler}
            className='border-b-2 border-gray-400'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor=''> Question URL</label>
          <input
            type='text'
            name='questionUrl'
            value={data.questionUrl}
            onChange={changeHandler}
            className='border-b-2 border-gray-400'
          />
        </div>{" "}
        <div className='flex gap-10 mt-5'>
          <div className='flex flex-col'>
            <label htmlFor=''> Topic Name</label>
            <input
              type='text'
              name='topicName'
              value={data.topicName}
              onChange={changeHandler}
              className='border-b-2 border-gray-400'
            />
          </div>{" "}
          <div className='flex flex-col w-full'>
            <label htmlFor=''> Difficulty Level</label>
            <select
              className=' bg-white border-2 border-gray-400  px-6 py-1 rounded'
              name='difficultyLevel'
              value={data.difficultyLevel}
              onChange={changeHandler}
            >
              <option value=''>Choose Difficulty</option>

              {["Hard", "Medium", "Easy"].map((item, i) => {
                return (
                  <option key={i} value={item}>
                    {item}{" "}
                  </option>
                );
              })}
            </select>
          </div>{" "}
        </div>
        <div className='flex flex-col'>
          <label htmlFor=''> Solution</label>
          <textarea
            name='solution'
            value={data.solution}
            onChange={changeHandler}
            id=''
            cols='20'
            rows='5'
            className='border-b-2 border-gray-400'
          ></textarea>
        </div>{" "}
        <div className='flex flex-col'>
          <label htmlFor=''> Notes</label>
          <input
            type='text'
            name='notes'
            value={data.notes}
            className='border-b-2 border-gray-400'
            onChange={changeHandler}
          />
        </div>{" "}
        {/* <div>
          <label htmlFor=''> Tags</label>
          <input
            type='text'
            name='tags'
            value={data.tags}
            onChange={changeHandler}
          />
        </div> */}
        <div className='flex flex-col'>
          <button
            type='submit'
            className='bg-blue-400 my-4 py-1 text-white font-bold uppercase'
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};
