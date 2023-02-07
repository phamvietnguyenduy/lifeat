import React from "react";
import Article from "./Article";
const jobs = [
  {
    title: "Senior Full-stack Software Engineer",
    embed:
      "https://www.ycombinator.com/companies/lifeat/jobs/fmIYUz2-senior-full-stack-software-engineer",
    style: true,
  },
  {
    title: "Senior Full-stack Software Engineer",
    embed:
      "https://www.ycombinator.com/companies/lifeat/jobs/fmIYUz2-senior-full-stack-software-engineer",
    style: false,
  },
];

const values = [
  {
    title: "Team Player",
    desc: "You love to co-create and build on top of each other ideas",
    img: "https://philosophical-crayfish.super.site/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F66e82836-0ba1-4402-bf8e-1414f8a6f1f8%2Fimages%2F0ce99902-24a9-45f4-a60e-885ab3de9404.png&w=640&q=80",
  },
  {
    title: "Team Player",
    desc: "You love to co-create and build on top of each other ideas",
    img: "https://philosophical-crayfish.super.site/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F66e82836-0ba1-4402-bf8e-1414f8a6f1f8%2Fimages%2F0ce99902-24a9-45f4-a60e-885ab3de9404.png&w=640&q=80",
  },
  {
    title: "Team Player",
    desc: "You love to co-create and build on top of each other ideas",
    img: "https://philosophical-crayfish.super.site/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F66e82836-0ba1-4402-bf8e-1414f8a6f1f8%2Fimages%2F0ce99902-24a9-45f4-a60e-885ab3de9404.png&w=640&q=80",
  },
];

const sections = [
  {
    list: [
      {
        desc: "LifeAt is building modular productivity/focus software for people like you! Our mission is to prevent focus drift by making it simple to manage your productivity, so you can spend more time getting your actual work done.",
      },
    ],
    img: "https://philosophical-crayfish.super.site/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F66e82836-0ba1-4402-bf8e-1414f8a6f1f8%2Fimages%2Fdb325d62-bd79-4a65-8c60-a66860307464.png&w=1920&q=80",
    reverse: false,
    listStyle: false,
  },
  {
    title: "Who are we",
    img: "https://philosophical-crayfish.super.site/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F66e82836-0ba1-4402-bf8e-1414f8a6f1f8%2Fimages%2Fa75c6e71-c637-4f93-809c-626629cd9288.png&w=1920&q=80",
    list: [
      {
        desc: "Our founding team met while working on another startup idea at UP. We went through Y Combinator Winter 2022 and raised our seed round right after. ",
      },
      {
        desc: "We have an office in Seattle and are hybrid. Team members can work in Seattle at our office or remotely elsewhere. ",
      },
    ],
    reverse: false,
    listStyle: false,
  },
  {
    title: "Investor",
    desc: "LifeAt has raised an over-subbed Seed Round from top tier Venture Capital funds and angels.",
    img: "https://philosophical-crayfish.super.site/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F66e82836-0ba1-4402-bf8e-1414f8a6f1f8%2Fimages%2Fa75c6e71-c637-4f93-809c-626629cd9288.png&w=1920&q=80",
    list: [
      {
        desc: "Y Combinator",
        embed: "https://www.ycombinator.com/",
      },
      {
        desc: "University of Washington Jones & Fosters",
        embed: "https://foster.uw.edu/",
      },
      {
        desc: "To be announced…",
      },
    ],
    reverse: true,
    listStyle: true,
  },
];

const Career = () => {
  return (
    <main className="h-full relative w-full text-gray-700 top-20 mb-28 lg:px-80 px-16 py-28 space-y-32">
      <h1 className="text-5xl font-semibold tracking-wide">Careers</h1>
      <section>
        {sections.map((section, index) => (
          <Article
            key={index}
            title={section?.title}
            img={section.img}
            list={section?.list}
            desc={section?.desc}
            reverse={section.reverse}
            listStyle={section.listStyle}
          />
        ))}
      </section>

      <section className="space-y-5">
        <h2 className="font-semibold tracking-normal">Open roles</h2>
        <p>
          If you don’t see a role you fit in but you’re still extremely
          interested in working with us, please reach out!
        </p>

        <ul className="grid grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <li
              key={index}
              className={`${
                job.style
                  ? "bg-transparent text-black hover:text-gray-500 border border-gray-400"
                  : "bg-blue-400 text-white hover:text-gray-600"
              } flex justify-center items-center h-36 rounded-3xl tracking-wide`}
            >
              <a
                href={job?.embed}
                className=" font-bold text-xl tracking-wide max-w-xs px-10 "
              >
                {job?.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="space-y-5">
        <h2 className="font-semibold tracking-normal">Core Values</h2>
        <p>
          Join a team of makers. We are story tellers, indie hackers, and
          problem solvers.
        </p>

        <div className="grid grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div key={index}>
              <img src={value.img} alt={value.title} className="pb-5" />
              <h3 className="font-bold tracking-wide text-2xl pb-5">
                {value.title}
              </h3>
              <p className="text-gray-400  ">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-5">
        <p className="mb-11">
          Our team has learned our craft in various high-growth environments
        </p>
        <div className="grid grid-cols-4 gap-12">
          <img
            src="https://philosophical-crayfish.super.site/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F66e82836-0ba1-4402-bf8e-1414f8a6f1f8%2Fimages%2F3f4d2977-b589-4dfc-94c1-2be4ee4849e2.png&w=640&q=80"
            alt="Google"
          />
          <img
            src="https://philosophical-crayfish.super.site/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F66e82836-0ba1-4402-bf8e-1414f8a6f1f8%2Fimages%2Fa69ccb39-7a82-470d-a51b-7802a3361525.png&w=1920&q=80"
            alt="Tiktok"
          />
          <img
            src="https://philosophical-crayfish.super.site/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F66e82836-0ba1-4402-bf8e-1414f8a6f1f8%2Fimages%2Fea4f06fa-ffad-4dc6-a237-2ac43a1bde0a.png&w=1920&q=80"
            alt="Tableau"
          />
          <img
            src="https://philosophical-crayfish.super.site/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F66e82836-0ba1-4402-bf8e-1414f8a6f1f8%2Fimages%2F71447c15-2ed9-4647-8426-7153e3846a77.png&w=1920&q=80"
            alt="Vimeo"
          />
        </div>
      </section>
    </main>
  );
};

export default Career;
