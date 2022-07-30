import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addSubject,
  deleteSubject,
  editSubject,
} from "../redux/slices/subject";

import { addMySubject } from "../redux/slices/mySubject";

const Home = () => {
  // Display subjects
  const sub = useSelector((state) => {
    return state.subject.subject;
  });

  const dispatch = useDispatch();

  // console.log(sub);
  const [subject, setSubject] = useState("");

  const [editMode, setEditMode] = useState(null);

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
                      // sent data to slice via dispatch
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

                  {/* start add to my profile button */}
                  <button
                    onClick={() => {
                      dispatch(addMySubject(subject));
                    }}
                  >
                    AddToMe
                  </button>
                  {/* end add to my profile button */}
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
          placeholder="Add new subject"
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            if (editMode != null) {
              // sent data to slice via dispatch
              dispatch(editSubject({ index: editMode, subject: subject }));
            } else {
              // sent data to slice via dispatch
              dispatch(addSubject(subject));
              setEditMode(null);
            }
            setSubject("");
          }}
        >
          {editMode != null ? <>edit</> : <>add</>}
        </button>
        {/* start To profile page */}
        <div>
          <Link to="/profile">
            <button>To profile......</button>
          </Link>
        </div>
        {/* end To profile page */}
      </div>
      {/* end input form */}
    </div>
  );
};

export default Home;
