import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getQuestions } from "../../features/dsaSlice";
import { questions } from "../../features/dsaSlice";
import Table from "../../components/Table";
export const ViewDSA = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const questions = useSelector(state => state?.dsa.data)
  const questionData = useSelector(questions);
console.log(questionData)
  let hard = 0;
  let easy = 0;
  let medium = 0;
  if (questionData!= "undefied" || questionData!= null) {

     questionData.map((data, i) => {
       if (data.difficultyLevel === "Hard") {
         hard++;
       } else if (data.difficultyLevel === "Medium") {
         medium += 1;
       } else if (data.difficultyLevel === "Easy") {
         easy += 1;
       }
     })
  }

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  const columns = [
    {
      header: "S.No",
      accessorKey: "createdAt",
      cell: ({ row }) => <span>{row.index + 1}</span>,
    },
    {
      header: "Title",
      accessorKey: "questionName",
      cell: ({ row }) => (
        <div className='w-9/12'>
          <p className='text-lg text-gray-900 font-semibold uppercase break-words'>
            {row.original.questionName}
          </p>
          <span>
            <a
              className='text-blue-500 italic '
              href={row.original.questionUrl}
            >
              {row.original.questionUrl}
            </a>
          </span>
        </div>
      ),
    },
    {
      header: "Difficulty",
      accessorKey: "difficultyLevel",
    },
    {
      header: "Topic Name",
      accessorKey: "topicName",
    },
    {
      header: "Actions",
      accessorKey: "_id",
      cell: ({ row }) => (
        <button
          onClick={() => navigate("/viewall/" + row.original._id)}
          className='border-2 border-gray-400 rounded-lg px-3 py-1 hover:bg-green-400 transition-all ease-in duration-200 hover:text-white uppercase font-semibold text-gray-800'
        >
          View{" "}
        </button>
      ),
    },
  ];

  return (
    <div className='w-full overflow-x-hidden'>
      <div className='flex  justify-between mx-5 items-center'>
        <div className='bg-green-400 px-2 py-1 text-white font-semibold uppercase  '>
          {" "}
          <Link to={'/addnew'}>

          Add Question
          </Link>
        </div>
        <div className=' flex  justify-end gap-3'>
          <p className='border-red-500 border-2 rounded-md hover:cursor-pointer px-3 py-2 text-red-500 font-bold '>
            Hard:{hard}
          </p>
          <p className='border-orange-500 border-2 rounded-md px-3  hover:cursor-pointer py-2 text-orange-500 font-bold '>
            Medium: {medium}
          </p>
          <p className='border-green-500 border-2 rounded-md px-3  hover:cursor-pointer py-2 text-green-500 font-bold '>
            Easy:{easy}
          </p>
        </div>
      </div>
      {
questionData &&
      <Table data={questionData} columns={columns} />
      }
    </div>
  );
};
