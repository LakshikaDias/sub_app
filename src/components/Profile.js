import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const sub = useSelector((state) => {
    return state.mySub.mySub;
  });
  return (
    <div>
      <div>
        {sub.map((sub) => {
          return sub;
        })}
      </div>
    </div>
  );
};

export default Profile;
