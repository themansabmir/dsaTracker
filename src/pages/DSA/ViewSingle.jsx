import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionById, singleQuestion } from "../../features/dsaSlice";
import { useParams } from "react-router-dom";

const ViewSingle = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const questionData = useSelector(singleQuestion);

  useEffect(() => {

    dispatch(getQuestionById({ questionId: id }));

  }, []);
  return <div>hello
    {questionData &&
      <div>
        <p>{questionData._id }</p>
      </div>


    }</div>;
};

export default ViewSingle;
