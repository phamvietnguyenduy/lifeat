import React from "react";

const Navigation = ({ data }) => {
  return (
    <>
      {data.map((sec) => (
        <section className="space-y-3 mb-7" key={sec.id}>
          <h1 className="font-bold text-black">{sec.title}</h1>
          <ul className="list-none space-y-3">
            {sec.items.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
};

export default Navigation;
