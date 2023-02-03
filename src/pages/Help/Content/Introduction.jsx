import React from "react";

export const Card = () => {
  return (
    <div>
      <div className="flex justify-center items-center lg:h-28 h-56 bg-gray-200 rounded-md mb-12">
        <span>Emoji</span>
      </div>
      <h2 className="text-3xl font-bold tracking-tight mb-5">LifeAt Basics</h2>
      <ul className="list-disc pl-7">
        <li>The Basics</li>
        <li>The Basics</li>
      </ul>
    </div>
  );
};

const Introduction = () => {
  return (
    <div>
      <section className="grid lg:grid-cols-2 gap-4 border-b-2 pb-7">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <section></section>
    </div>
  );
};

export default Introduction;
