import React from "react";
const Content = ({ course }) => {

  return (
    <div>
      {course.parts.map((item) => <p key={item.id}>{item.name} {item.exercises}</p>)}
    </div>
  );
};

export default Content;
