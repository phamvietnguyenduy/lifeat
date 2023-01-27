import React from "react";
import Navigation from "./Navigation";

const navData = [
  {
    id: 1,
    title: "Help Center",
    items: ["Getting Starts", "Pro FAQ"],
  },
  {
    id: 2,
    title: "Help Center",
    items: ["Getting Starts", "Pro FAQ"],
  },
];

const Help = () => {
  return (
    <main className="lg:flex lg:flex-row flex flex-col-reverse h-full justify-start relative w-full text-gray-700 top-20 mb-28">
      <nav className="lg:gap-2 lg:basis-1/6 w-full flex flex-col  bg-white px-6 pt-4">
        <Navigation data={navData} />
      </nav>
      <section className="bg-white lg:basis-4/6 block w-full lg:px-48 lg:py-20  px-6">
        Help Page
      </section>
      <section className="lg:inline hidden bg-white basis-1/6 px-6">
        Test
      </section>

      {/* className="fixed w-full bg-white h-14 text-gray-700 z-30 top-20" */}
    </main>
  );
};

export default Help;
