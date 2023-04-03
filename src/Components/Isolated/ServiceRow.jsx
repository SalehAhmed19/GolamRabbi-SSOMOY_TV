import React from "react";

const ServiceRow = ({ d }) => {
  return (
    <React.Fragment>
      <div
        key={d._id}
        className="p-5 border-2 rounded-lg w-48 flex flex-col justify-center items-center"
      >
        <h4 className="text-primary text-3xl mb-5 ">{d.icon}</h4>
        <h3
          className={
            d.list.length === 0
              ? "text-center text-xl text-primary font-bold"
              : "text-center text-primary font-bold"
          }
        >
          {d.title}
        </h3>
        <>
          {d.list.map((list, idx) => (
            <p key={idx}>{list}</p>
          ))}
        </>
      </div>
    </React.Fragment>
  );
};

export default ServiceRow;
