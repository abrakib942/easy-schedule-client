import React, { useContext, useEffect } from "react";
import DarkContext from "../../../DarkMode/DarkContext";
import "./Banner.css";

import { Link } from "react-router-dom";

const Banner = () => {
  const { toggle, setToggle } = useContext(DarkContext);

  return (
    <div class={"hero " + (toggle === true ? "bg-white" : "bg-slate-700")}>
      <div class="hero-content flex-col lg:flex-row-reverse text-black flex">
        <div className="flex-auto w-1/2">
          <img
            className="rounded"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
            style={{ width: "100%" }}
            src="https://i.ibb.co/q9pnLvw/banner-Pic.jpg"
            alt=""
          />
        </div>
        <div className="flex-auto lg:w-1/2 px-5 text-start ">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            class={
              "lg:text-5xl text-2xl font-bold " +
              (toggle === true ? "text-black" : "text-white")
            }
          >
            APPOINTMENT
          </h1>
          <h1
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="300"
            class={
              "lg:text-5xl text-2xl " +
              (toggle === true ? "text-black" : "text-white")
            }
          >
            Booking
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            class={toggle === true ? "text-gray-600 py-6" : "text-white py-6"}
          >
            Easy Schedule is your hub for scheduling meetings professionally and
            efficiently, eliminating the hassle of back-and-forth emails so you
            can get back to work.
          </p>
          <Link
            to="/dashboard/d-home/event-types"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
            class="btn btn-primary button-orange"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
