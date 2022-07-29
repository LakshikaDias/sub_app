import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSubject, deleteSubject } from "../redux/slices/subject";

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
          ? sub.map((subject, index) => {
              return (
                <div>
                  {subject}

                  {/* start delete button */}
                  <button
                    key={index}
                    onClick={() => {
                      dispatch(deleteSubject(index));
                    }}
                  >
                    delete
                  </button>
                  {/* end delete button */}

                  <button>edit</button>
                </div>
              );
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
