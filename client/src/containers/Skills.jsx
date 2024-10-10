import React, { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import { urlFor, client } from "../client";

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const experienceQuery = '*[_type == "experiences"]';
    const skillQuery = '*[_type == "skills"]';

    client.fetch(experienceQuery).then((data) => {
      setExperience(data);
    });
    client.fetch(skillQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="text-[2.75rem] font-[800] text-center color-black capitalize">
        Services
      </h2>

      <div className="flex justify-center py-5 px-5">
        <div className="relative flex w-96 flex-col rounded-lg shadow-lg bg-white items-center ">
          <nav className="flex min-w-[280px] flex-col gap-1 p-1.5">
            <div
              role="button"
              className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
            >
              <div className="mr-4 grid place-items-center">
                <img
                  alt="candice"
                  src="/images/image.png"
                  className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                />
              </div>
              <div>
                <h6 className="text-slate-800 font-medium">
                  Website Development
                </h6>
              </div>
            </div>
            <div
              role="button"
              className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
            >
              <div className="mr-4 grid place-items-center">
                <img
                  alt="alexander"
                  src="/images/image.png"
                  className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                />
              </div>
              <div>
                <h6 className="text-slate-800 font-medium">
                  Andriod Development
                </h6>
              </div>
            </div>

            <div
              role="button"
              className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
            >
              <div className="mr-4 grid place-items-center">
                <img
                  alt="emma"
                  src="/images/image.png"
                  className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                />
              </div>
              <div>
                <h6 className="text-slate-800 font-medium">Saas Product</h6>
              </div>
            </div>

            <div
              role="button"
              className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
            >
              <div className="mr-4 grid place-items-center">
                <img
                  alt="emma"
                  src="/images/image.png"
                  className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                />
              </div>
              <div>
                <h6 className="text-slate-800 font-medium">Video Editing</h6>
              </div>
            </div>

            <div
              role="button"
              className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
            >
              <div className="mr-4 grid place-items-center">
                <img
                  alt="emma"
                  src="/images/image.png"
                  className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                />
              </div>
              <div>
                <h6 className="text-slate-800 font-medium">Ui/Ux Development</h6>
              </div>
            </div>
            <div
              role="button"
              className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
            >
              <div className="mr-4 grid place-items-center">
                <img
                  alt="emma"
                  src="/images/image.png"
                  className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                />
              </div>
              <div>
                <h6 className="text-slate-800 font-medium">Training</h6>
              </div>
            </div>

            <div
              role="button"
              className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
            >
              <div className="mr-4 grid place-items-center">
                <img
                  alt="emma"
                  src="/images/image.png"
                  className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                />
              </div>
              <div>
                <h6 className="text-slate-800 font-medium">Internship</h6>
              </div>
            </div>


          </nav>
        </div>
      </div>
    </>
  );
};

export default Skills;
