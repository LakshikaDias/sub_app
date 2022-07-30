import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addSubject,
  deleteSubject,
  editSubject,
} from "../redux/slices/subject";

const Home = () => {
  const dispatch = useDispatch();
  const sub = useSelector((state) => {
    return state.subject.subject;
  });

  console.log(sub);
  const [subject, setSubject] = useState("Add new subject");

  const [editMode, setEditMode] = useState(null);

  // const [edit, setEdit] = useState({ id: null, value: "" });
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

                  {/* start edit button */}
                  <button
                    key={index}
                    onClick={() => {
                      setSubject(subject);
                      setEditMode(index);

                      // console.log("now", subject);
                    }}
                  >
                    edit
                  </button>
                  {/* end edit button */}
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
            if (editMode != null) {
              dispatch(editSubject({ index: editMode, subject: subject }));
            } else {
              dispatch(addSubject(subject));
              setEditMode(null);
            }
            setSubject("Add new Subject");
          }}
        >
          {editMode != null ? <>edit</> : <>add</>}
        </button>
      </div>
      {/* end input form */}
    </div>
  );
};

export default Home;
