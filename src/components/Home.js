import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSubject } from "../redux/slices/subject";

const Home = () => {
  const dispatch = useDispatch();
  const sub = useSelector((state) => {
    return state.subject.subject;
  });

  console.log(sub);
  const [subject, setSubject] = useState("Add new subject");
  return (
    <div>
      {/* start subject display  */}
      <div>
        {sub
          ? sub.map((s) => {
              return <div>{s}</div>;
            })
          : ""}
      </div>
      {/* end subject display  */}

      {/* start input form */}
      <div>
        <input
          type="text"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            dispatch(addSubject(subject));
            setSubject("Add new Subject");
          }}
        >
          Add
        </button>
      </div>
      {/* end input form */}
    </div>
  );
};

export default Home;
