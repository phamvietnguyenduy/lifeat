import React, { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
//Pages
const Introduction = lazy(() => import("./Introduction"));
const FAQ = lazy(() => import("./FAQ"));

const navData = [
  {
    id: 1,
    title: "Help Center",

    items: [
      { title: "Getting Starts", dest: "introduction" },
      { title: "Pro FAQ", dest: "faq" },
    ],
  },
  {
    id: 2,
    title: "Help Center",
    dest: "help-center",

    items: [
      { title: "Getting Starts", dest: "introduction" },
      { title: "Pro FAQ", dest: "faq" },
    ],
  },
];

const Help = () => {
  const { pathname } = useLocation();
  const render = (params) => {
    switch (params) {
      case "/help/introduction":
        return <Introduction />;
      case "/help/faq":
        return <FAQ />;
      default:
        return <Introduction />;
    }
  };
  return (
    <main className="lg:flex lg:flex-row flex flex-col-reverse h-full justify-start relative w-full text-gray-700 top-20 mb-28">
      <nav className="lg:gap-2 lg:basis-1/6 w-full flex flex-col  bg-white px-6 pt-4">
        <Navigation data={navData} />
      </nav>
      <section className="bg-white lg:basis-4/6 block w-full lg:px-48 lg:py-20  px-6">
        {render(pathname)}
      </section>
      <section className="lg:inline hidden bg-white basis-1/6 px-6"></section>
    </main>
  );
};

export default Help;
