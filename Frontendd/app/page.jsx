// "use client";
import React from "react";

const page = () => {
  const testimonials1 = [
    {
      name: "Spadan Neupane",
      designation: "CEO, Itahari Medical Hall",
      review:
        "The UI/UX design team at Blue Fox Pvt Ltd is exceptional. They transformed our platform with stunning designs and intuitive interfaces. Our users love the seamless experience, and it has significantly improved engagement rates!",
    },
    {
      name: "Samrat Dahal",
      designation: "CEO, Web Host Nepal",
      review:
        "Blue Fox Pvt Ltd has elevated our brand's online presence with their strategic social media campaigns. Their creative content and consistent engagement strategies have helped us connect with our audience like never before!",
    },
    {
      name: "Rabindra Niraula",
      designation: "Owner, Lotus Multi-Training Cente",
      review:
        "Their graphic design and digital marketing services are top-notch. The creative visuals and targeted campaigns not only boosted our visibility but also doubled our sales. Blue Fox Pvt Ltd truly understands the art of branding!",
    },
  ];
  const testimonials2 = [
    {
      name: "Bishal Chapagain",
      designation: "Managing Director, Aspire Global Education",
      review:
        "Working with Blue Fox Pvt Ltd was an incredible experience. They developed a fully responsive and user-friendly website for our business, making it easy for our customers to connect with us. The team's expertise and attention to detail exceeded our expectations!",
    },
    {
      name: "Sangam Chhetri",
      designation: "Founder, Dami Chha",
      review:
        "Blue Fox Pvt Ltd brought our app concept to life with precision and creativity. The app is intuitive, fast, and visually appealing. Their professionalism and quick turnaround have made a significant impact on our business growth!",
    },
    {
      name: "Sanjay Chaudhary",
      designation: "CEO, My Tripary",
      review:
        "Our custom software solution by Blue Fox Pvt Ltd streamlined our operations and increased efficiency. The team thoroughly understood our requirements and delivered a robust system that has become an integral part of our organization.",
    },
  ];
  return (
    <>
      <div style={{ minHeight: "50vh" }}>
        <div className="slider">
          <div className="l__container overflow">
            <div className="slider__items">
              <div className="banner__slide overflow">
                <div className="row justify-content-center align-items-center flex-column-reverse flex-md-row">
                  <div className="col-md-7 col-lg-6">
                    <div className="slider__left">
                      <div className="section__title">
                        <h1 className="large__title">
                          Transform your vision into a Digital Reality with the
                          best IT company in Nepal
                        </h1>
                      </div>
                      <div>
                        <button
                          className="l__button l__button--border me-4 mb-4"
                          data-bs-target="#enquiryModal"
                          data-bs-toggle="modal"
                          data-id=""
                        >
                          <span> Let's Get Started</span>
                          <i className="fa-solid fa-chevron-right" />
                        </button>
                        <span className="d-block d-md-inline">
                          <a className="more-- ps-0" href="portfolio">
                            Discover Our Work
                            <span>
                              <i className="fa-solid fa-chevron-right" />
                            </span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 col-lg-6">
                    <div className="slider__right mb-4 mb-md-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 750 500"
                        height={400}
                        className="!filter-none"
                      >
                        <g id="freepik--background-complete--inject-5">
                          <path
                            d="M693.14,119l6.18-10-3.05-1.89a2.77,2.77,0,0,1-1.29-2.62,17,17,0,0,0,0-1.75,2.81,2.81,0,0,1,1.45-2.53l3.16-1.69-5.53-10.33L691,89.88a2.8,2.8,0,0,1-2.91-.19,15.31,15.31,0,0,0-1.49-.92,2.8,2.8,0,0,1-1.47-2.53l.11-3.59-11.71-.36-.1,3.6a2.8,2.8,0,0,1-1.64,2.42c-.26.12-.51.25-.77.39l-.75.43a2.78,2.78,0,0,1-2.9,0l-3.08-1.9-6.17,10,3,1.9a2.75,2.75,0,0,1,1.29,2.62,14.45,14.45,0,0,0,0,1.74A2.8,2.8,0,0,1,660.9,106l-3.16,1.69L663.28,118l3.16-1.69a2.78,2.78,0,0,1,2.91.18,17.37,17.37,0,0,0,1.48.92,2.75,2.75,0,0,1,1.47,2.52l-.11,3.6,11.71.36.11-3.59a2.8,2.8,0,0,1,1.63-2.42q.39-.18.78-.39l.75-.43a2.81,2.81,0,0,1,2.92,0Zm-9.91-7.4a9.59,9.59,0,1,1,3.93-13A9.59,9.59,0,0,1,683.23,111.55Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M85.76,226.8l6.17-10L88.88,215a2.76,2.76,0,0,1-1.29-2.62,14.55,14.55,0,0,0,0-1.75,2.77,2.77,0,0,1,1.46-2.52l3.16-1.7L86.72,196l-3.16,1.7a2.78,2.78,0,0,1-2.91-.19c-.48-.33-1-.64-1.49-.92a2.81,2.81,0,0,1-1.47-2.53l.12-3.58-11.71-.37-.11,3.6a2.78,2.78,0,0,1-1.63,2.42l-.77.39c-.26.14-.51.28-.75.43a2.79,2.79,0,0,1-2.91,0l-3.07-1.9-6.18,10,3.06,1.9A2.8,2.8,0,0,1,55,209.57a17,17,0,0,0-.06,1.75,2.79,2.79,0,0,1-1.45,2.52l-3.16,1.7,5.53,10.32,3.16-1.69a2.78,2.78,0,0,1,2.91.18,15.31,15.31,0,0,0,1.49.92,2.81,2.81,0,0,1,1.47,2.53l-.11,3.59,11.7.36.12-3.59a2.77,2.77,0,0,1,1.63-2.42c.26-.12.51-.25.77-.39s.51-.28.75-.42a2.77,2.77,0,0,1,2.92,0Zm-9.92-7.4a9.59,9.59,0,1,1,3.93-13A9.57,9.57,0,0,1,75.84,219.4Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M668.65,146.44l-4.1-7.11-2.18,1.26a1.93,1.93,0,0,1-2-.07,10.2,10.2,0,0,0-1.07-.61,2,2,0,0,1-1.07-1.74v-2.51H650v2.51a2,2,0,0,1-1.08,1.74,11.33,11.33,0,0,0-1.07.61,1.93,1.93,0,0,1-2,.07l-2.18-1.26-4.1,7.11,2.19,1.26a1.94,1.94,0,0,1,.95,1.81c0,.2,0,.4,0,.61s0,.4,0,.6a1.94,1.94,0,0,1-.95,1.8l-2.19,1.27,4.1,7.11,2.18-1.26a2,2,0,0,1,2.05.07,10.05,10.05,0,0,0,1.06.61,2,2,0,0,1,1.08,1.74v2.51h8.21v-2.51a2,2,0,0,1,1.07-1.74,10.05,10.05,0,0,0,1.06-.61,2,2,0,0,1,2-.07l2.18,1.26,4.1-7.11-2.18-1.26a1.94,1.94,0,0,1-1-1.81c0-.2,0-.4,0-.6s0-.41,0-.61a1.94,1.94,0,0,1,1-1.81Zm-7.85,3.68a6.72,6.72,0,1,1-6.72-6.73A6.71,6.71,0,0,1,660.8,150.12Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <polygon
                            points="653.7 384.05 652.2 384.05 652.2 383.05 652.7 383.05 652.7 382.55 653.7 382.55 653.7 384.05"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M650.2,384.05h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <polygon
                            points="582.25 384.05 580.75 384.05 580.75 382.55 581.75 382.55 581.75 383.05 582.25 383.05 582.25 384.05"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M581.75,380.55h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <polygon
                            points="581.75 312.6 580.75 312.6 580.75 311.1 582.25 311.1 582.25 312.1 581.75 312.1 581.75 312.6"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M650.2,312.1h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <polygon
                            points="653.7 312.6 652.7 312.6 652.7 312.1 652.2 312.1 652.2 311.1 653.7 311.1 653.7 312.6"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M653.7,380.55h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="576.77"
                            y="379.07"
                            width="8.97"
                            height="8.97"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M586.23,388.53h-10v-10h10Zm-9-1h8v-8h-8Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="576.81"
                            y="343.09"
                            width="8.97"
                            height="8.97"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M586.23,352.56h-10v-10h10Zm-9-1h8v-8h-8Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="576.81"
                            y="307.12"
                            width="8.97"
                            height="8.97"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M586.23,316.59h-10v-10h10Zm-9-1h8v-8h-8Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="648.75"
                            y="379.07"
                            width="8.97"
                            height="8.97"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M658.18,388.53h-10v-10h10Zm-9-1h8v-8h-8Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="648.75"
                            y="343.09"
                            width="8.97"
                            height="8.97"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M658.18,352.56h-10v-10h10Zm-9-1h8v-8h-8Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="648.75"
                            y="307.12"
                            width="8.97"
                            height="8.97"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M658.18,316.59h-10v-10h10Zm-9-1h8v-8h-8Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="612.78"
                            y="307.12"
                            width="8.97"
                            height="8.97"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M622.21,316.59h-10v-10h10Zm-9-1h8v-8h-8Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="612.74"
                            y="379.07"
                            width="8.97"
                            height="8.97"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M622.21,388.53h-10v-10h10Zm-9-1h8v-8h-8Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <polygon
                            points="160.12 126.5 158.62 126.5 158.62 125.5 159.12 125.5 159.12 125 160.12 125 160.12 126.5"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M156.63,126.5h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <polygon
                            points="88.68 126.5 87.18 126.5 87.18 125 88.18 125 88.18 125.5 88.68 125.5 88.68 126.5"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M88.18,123h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1V97h1Zm0-4h-1V93h1Zm0-4h-1V89h1Zm0-4h-1V85h1Zm0-4h-1V81h1Zm0-4h-1V77h1Zm0-4h-1V73h1Zm0-4h-1V69h1Zm0-4h-1V65h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <polygon
                            points="88.18 55.05 87.18 55.05 87.18 53.55 88.68 53.55 88.68 54.55 88.18 54.55 88.18 55.05"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M156.63,54.55h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Zm-4,0h-2v-1h2Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <polygon
                            points="160.12 55.05 159.12 55.05 159.12 54.55 158.62 54.55 158.62 53.55 160.12 53.55 160.12 55.05"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M160.12,123h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1V97h1Zm0-4h-1V93h1Zm0-4h-1V89h1Zm0-4h-1V85h1Zm0-4h-1V81h1Zm0-4h-1V77h1Zm0-4h-1V73h1Zm0-4h-1V69h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Zm0-4h-1v-2h1Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="83.2"
                            y="121.51"
                            width="8.97"
                            height="8.97"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M92.66,131h-10V121h10Zm-9-1h8v-8h-8Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="83.24"
                            y="85.54"
                            width="8.97"
                            height="8.97"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M92.66,95h-10V85h10Zm-9-1h8V86h-8Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="83.24"
                            y="49.57"
                            width="8.97"
                            height="8.97"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M92.66,59h-10v-10h10Zm-9-1h8v-8h-8Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="155.18"
                            y="121.51"
                            width="8.97"
                            height="8.97"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M164.61,131h-10V121h10Zm-9-1h8v-8h-8Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="155.18"
                            y="85.54"
                            width="8.97"
                            height="8.97"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M164.61,95h-10V85h10Zm-9-1h8V86h-8Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="155.18"
                            y="49.57"
                            width="8.97"
                            height="8.97"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M164.61,59h-10v-10h10Zm-9-1h8v-8h-8Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="119.21"
                            y="49.57"
                            width="8.97"
                            height="8.97"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M128.63,59h-10v-10h10Zm-9-1h8v-8h-8Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="119.17"
                            y="121.51"
                            width="8.97"
                            height="8.97"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M128.63,131h-10V121h10Zm-9-1h8v-8h-8Z"
                            style={{ fill: "#ebebeb" }}
                          />
                        </g>
                        <g id="freepik--Floor--inject-5">
                          <polygon
                            points="51.87 446.22 132.65 445.98 213.44 445.89 375 445.72 536.57 445.89 617.35 445.97 698.13 446.22 617.35 446.46 536.57 446.55 375 446.72 213.44 446.55 132.65 446.46 51.87 446.22"
                            style={{ fill: "#263238" }}
                          />
                        </g>
                        <g id="freepik--Code--inject-5">
                          <rect
                            x="149.29"
                            y="80.54"
                            width="451.42"
                            height="285.83"
                            style={{ fill: "#263238" }}
                          />
                          <rect
                            x="149.29"
                            y="80.54"
                            width="451.42"
                            height={11}
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M159.64,86A2.08,2.08,0,1,1,157.56,84,2.08,2.08,0,0,1,159.64,86Z"
                            style={{ fill: "#c7c7c7" }}
                          />
                          <path
                            d="M168.14,86A2.08,2.08,0,1,1,166.06,84,2.08,2.08,0,0,1,168.14,86Z"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M176.64,86A2.08,2.08,0,1,1,174.56,84,2.08,2.08,0,0,1,176.64,86Z"
                            style={{ fill: "#455a64" }}
                          />
                          <polygon
                            points="571.68 169.62 569.93 169.62 569.93 169.12 571.18 169.12 571.18 167.87 571.68 167.87 571.68 169.62"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M566.91,169.62h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <polygon
                            points="180.07 169.62 178.32 169.62 178.32 167.87 178.82 167.87 178.82 169.12 180.07 169.12 180.07 169.62"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M178.82,164.68h-.5V161.5h.5Zm0-6.36h-.5v-3.18h.5Zm0-6.37h-.5v-3.18h.5Zm0-6.36h-.5v-3.18h.5Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <polygon
                            points="178.82 139.22 178.32 139.22 178.32 137.47 180.07 137.47 180.07 137.97 178.82 137.97 178.82 139.22"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M566.91,138h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3ZM446,138h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3ZM307,138h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <polygon
                            points="571.68 139.22 571.18 139.22 571.18 137.97 569.93 137.97 569.93 137.47 571.68 137.47 571.68 139.22"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M571.68,164.68h-.5V161.5h.5Zm0-6.36h-.5v-3.18h.5Zm0-6.37h-.5v-3.18h.5Zm0-6.36h-.5v-3.18h.5Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <polygon
                            points="571.68 280.28 569.93 280.28 569.93 279.78 571.18 279.78 571.18 278.53 571.68 278.53 571.68 280.28"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M566.91,280.28h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <polygon
                            points="180.07 280.28 178.32 280.28 178.32 278.53 178.82 278.53 178.82 279.78 180.07 279.78 180.07 280.28"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M178.82,275.35h-.5v-3.19h.5Zm0-6.37h-.5V265.8h.5Zm0-6.36h-.5v-3.19h.5Zm0-6.37h-.5v-3.18h.5Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <polygon
                            points="178.82 249.89 178.32 249.89 178.32 248.14 180.07 248.14 180.07 248.64 178.82 248.64 178.82 249.89"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M566.91,248.64h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <polygon
                            points="571.68 249.89 571.18 249.89 571.18 248.64 569.93 248.64 569.93 248.14 571.68 248.14 571.68 249.89"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M571.68,275.35h-.5v-3.19h.5Zm0-6.37h-.5V265.8h.5Zm0-6.36h-.5v-3.19h.5Zm0-6.37h-.5v-3.18h.5Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <polygon
                            points="571.68 331.03 569.93 331.03 569.93 330.53 571.18 330.53 571.18 329.28 571.68 329.28 571.68 331.03"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M566.91,331h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3ZM446,331h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <polygon
                            points="180.07 331.03 178.32 331.03 178.32 329.28 178.82 329.28 178.82 330.53 180.07 330.53 180.07 331.03"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M178.82,326.1h-.5v-3.18h.5Zm0-6.37h-.5v-3.18h.5Zm0-6.36h-.5v-3.18h.5Zm0-6.37h-.5v-3.18h.5Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <polygon
                            points="178.82 300.64 178.32 300.64 178.32 298.89 180.07 298.89 180.07 299.39 178.82 299.39 178.82 300.64"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M566.91,299.39h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6.05,0h-3v-.5h3Zm-6,0h-3v-.5h3Zm-6,0h-3v-.5h3Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <polygon
                            points="571.68 300.64 571.18 300.64 571.18 299.39 569.93 299.39 569.93 298.89 571.68 298.89 571.68 300.64"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M571.68,326.1h-.5v-3.18h.5Zm0-6.37h-.5v-3.18h.5Zm0-6.36h-.5v-3.18h.5Zm0-6.37h-.5v-3.18h.5Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <rect
                            x="430.23"
                            y="193.01"
                            width="56.12"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="401.36"
                            y="193.01"
                            width="24.93"
                            height="2.15"
                            style={{ fill: "#a6a6a6" }}
                          />
                          <rect
                            x="204.21"
                            y="182.86"
                            width="62.94"
                            height="2.15"
                            style={{ fill: "#a6a6a6" }}
                          />
                          <rect
                            x="414.74"
                            y="172.71"
                            width="83.65"
                            height="2.15"
                            style={{ fill: "#a6a6a6" }}
                          />
                          <rect
                            x="314.6"
                            y="222.53"
                            width="83.65"
                            height="2.15"
                            style={{ fill: "#a6a6a6" }}
                          />
                          <rect
                            x="204.21"
                            y="193.01"
                            width="191.45"
                            height="2.15"
                            style={{ fill: "#407BFF" }}
                          />
                          <rect
                            x="185.13"
                            y="172.71"
                            width="8.75"
                            height="2.15"
                            style={{ fill: "#a6a6a6" }}
                          />
                          <rect
                            x="204.21"
                            y="172.71"
                            width="51.73"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="212.75"
                            y="203.16"
                            width="51.73"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="402.84"
                            y="213.31"
                            width="72.22"
                            height="2.15"
                            style={{ fill: "#407BFF" }}
                          />
                          <rect
                            x="259.53"
                            y="213.31"
                            width="138.78"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="212.75"
                            y="213.31"
                            width="38.89"
                            height="2.15"
                            style={{ fill: "#a6a6a6" }}
                          />
                          <rect
                            x="270.71"
                            y="182.86"
                            width="149.54"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="423.87"
                            y="182.86"
                            width="89.22"
                            height="2.15"
                            style={{ fill: "#407BFF" }}
                          />
                          <rect
                            x="261.2"
                            y="172.71"
                            width="149.47"
                            height="2.15"
                            style={{ fill: "#407BFF" }}
                          />
                          <rect
                            x="185.13"
                            y="182.86"
                            width="8.75"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="185.13"
                            y="193.01"
                            width="8.75"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="185.13"
                            y="203.16"
                            width="8.75"
                            height="2.15"
                            style={{ fill: "#a6a6a6" }}
                          />
                          <rect
                            x="185.13"
                            y="213.31"
                            width="8.75"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="185.13"
                            y="222.53"
                            width="8.75"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="204.21"
                            y="222.53"
                            width="102.64"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="185.13"
                            y="232.68"
                            width="8.75"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="212.75"
                            y="232.68"
                            width="65.89"
                            height="2.15"
                            style={{ fill: "#a6a6a6" }}
                          />
                          <rect
                            x="204.21"
                            y="263.13"
                            width="62.94"
                            height="2.15"
                            style={{ fill: "#a6a6a6" }}
                          />
                          <rect
                            x="212.75"
                            y="242.83"
                            width="44.15"
                            height="2.15"
                            style={{ fill: "#407BFF" }}
                          />
                          <rect
                            x="313.86"
                            y="283.43"
                            width="44.15"
                            height="2.15"
                            style={{ fill: "#407BFF" }}
                          />
                          <rect
                            x="261.8"
                            y="242.83"
                            width="164.14"
                            height="2.15"
                            style={{ fill: "#a6a6a6" }}
                          />
                          <rect
                            x="204.21"
                            y="273.28"
                            width="191.45"
                            height="2.15"
                            style={{ fill: "#407BFF" }}
                          />
                          <rect
                            x="282.78"
                            y="232.68"
                            width="135.62"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="418.78"
                            y="252.98"
                            width="28.34"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="185.13"
                            y="242.83"
                            width="8.75"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="185.13"
                            y="252.98"
                            width="8.75"
                            height="2.15"
                            style={{ fill: "#a6a6a6" }}
                          />
                          <rect
                            x="204.21"
                            y="252.98"
                            width="51.73"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="270.71"
                            y="263.13"
                            width="149.54"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="261.2"
                            y="252.98"
                            width="149.47"
                            height="2.15"
                            style={{ fill: "#407BFF" }}
                          />
                          <rect
                            x="185.13"
                            y="263.13"
                            width="8.75"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="185.13"
                            y="283.43"
                            width="8.75"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="204.21"
                            y="283.43"
                            width="102.64"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="185.13"
                            y="293.58"
                            width="8.75"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="212.75"
                            y="293.58"
                            width="65.89"
                            height="2.15"
                            style={{ fill: "#a6a6a6" }}
                          />
                          <path
                            d="M190.54,122.65a.76.76,0,0,1,0,1.08.81.81,0,0,1-.53.22.82.82,0,0,1-.55-.22l-3.38-3.42a.1.1,0,0,1-.06-.08l0,0a.38.38,0,0,1,0-.1.05.05,0,0,1,0,0s0-.06,0-.07,0,0,0-.06v-.08s0,0,0-.07,0,0,0-.06v-.09s0,0,0,0,0-.06,0-.09,0,0,0,0,0-.08.06-.1a0,0,0,0,1,0,0,.17.17,0,0,1,.07-.08l3.38-3.43a.77.77,0,0,1,1.08,1.09l-2.85,2.87Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M193.6,123l2.94-7a.66.66,0,0,1,.88-.35.65.65,0,0,1,.34.85l-2.95,7a.67.67,0,0,1-.61.4.69.69,0,0,1-.24,0A.65.65,0,0,1,193.6,123Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M203.57,120.21a0,0,0,0,1,0,0s-.05.06-.09.09l-3.37,3.42a.82.82,0,0,1-.55.22.77.77,0,0,1-.53-.22.74.74,0,0,1,0-1.08l2.84-2.87L199,116.91a.75.75,0,0,1,0-1.09.78.78,0,0,1,1.08,0l3.37,3.43s.06.06.09.08,0,0,0,0,.05.07.06.1,0,0,0,0a.37.37,0,0,0,0,.11s0,0,0,0v.09s0,0,0,.06,0,0,0,.06v.09s0,0,0,0a.34.34,0,0,0,0,.1s0,0,0,0S203.59,120.16,203.57,120.21Z"
                            style={{ fill: "#407BFF" }}
                          />
                        </g>
                        <g id="freepik--Plant--inject-5">
                          <path
                            d="M232.52,392.3s14.82-3.36,22.95-10.85,12.67-20.9,12.67-20.9a126.6,126.6,0,0,0-16.63,4.36,27.81,27.81,0,0,0-5,7.12,34.26,34.26,0,0,1,0-5.09,22.35,22.35,0,0,0-5.28,3.21C234.42,376,232.52,392.3,232.52,392.3Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M258.88,367.07c2-1.4,4.08-2.75,6.09-4.16.12-.09,0-.28-.12-.2-3.82,2.28-7.59,4.72-11.23,7.27q-1.91,1.35-3.76,2.77l.26-.44c.45-.75.92-1.48,1.39-2.21a32.1,32.1,0,0,1,3.14-4.2s0-.12-.07-.07c-1.15,1.33-2.31,2.65-3.36,4.06-.5.67-1,1.37-1.41,2.08-.23.37-.45.74-.67,1.12l-.22.38c-1.91,1.51-3.78,3.08-5.56,4.74-1.1,1-2.16,2.09-3.19,3.18.57-1.79,1.08-3.61,1.74-5.38,0-.06-.08-.08-.1,0-.64,1.85-1.35,3.72-1.85,5.62q-1.71,1.84-3.24,3.82a2,2,0,0,1,.05-.24c.17-.7.34-1.4.53-2.09.36-1.34.75-2.67,1.21-4a23.05,23.05,0,0,1,4-7.52s0-.12-.07-.07a28.83,28.83,0,0,0-5.68,11.86c-.16.63-.31,1.26-.45,1.9-.08.33-.17.68-.23,1-.44.61-.88,1.22-1.31,1.85a64.17,64.17,0,0,0-6.27,12.3,140.18,140.18,0,0,0-4.75,14.81.08.08,0,1,0,.15,0c2.9-8.67,5.86-17.47,10.83-25.23a56.54,56.54,0,0,1,3.38-4.74,27.7,27.7,0,0,0,7.21-1.43,32.16,32.16,0,0,0,7.23-3.49c1.3-.85,2.49-1.83,3.7-2.8.06-.05,0-.13-.06-.08a29.63,29.63,0,0,1-6.8,4.11,36.56,36.56,0,0,1-7.48,2.51c-1.09.24-2.2.42-3.31.57a62.71,62.71,0,0,1,4.37-4.85c.5-.5,1-1,1.53-1.46a36.29,36.29,0,0,1,5.48-3.14c2.43-1.17,4.83-2.41,7.23-3.64,1.36-.69,2.7-1.39,4.07-2.06.06,0,0-.12-.05-.09-2.44,1.18-4.91,2.28-7.37,3.41s-4.66,2.12-6.88,3.37a2.61,2.61,0,0,0-.28.17c2-1.75,4.08-3.42,6.21-5C254.86,369.92,256.85,368.47,258.88,367.07Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M258,374.71c-1.21.53-2.44,1-3.63,1.55s-2.39,1.25-3.56,1.94c0,0,0,.1.05.08,1.18-.57,2.38-1.1,3.55-1.69s2.39-1.24,3.61-1.78C258.12,374.78,258.1,374.68,258,374.71Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M184.35,317.57a21.22,21.22,0,0,1,4.43,12.32c.05,1.33-.16,3.18-.32,5.36a35.17,35.17,0,0,1,9.68,8.27,17.49,17.49,0,0,0-9.78-2.34,29.22,29.22,0,0,0,.57,4.43,16.71,16.71,0,0,1,6.29,1.24,14.06,14.06,0,0,0-5.67,1.13c2.64,8.41,10.5,17,32.19,20.72a45.5,45.5,0,0,0-3.84-30.53C211.4,325.38,184.35,317.57,184.35,317.57Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M229.25,404.68q-.57-5.39-1.4-10.75a216,216,0,0,0-4.38-21.23,84.69,84.69,0,0,0-3.13-9.68,14.38,14.38,0,0,0,.08-1.74c0-.69,0-1.39,0-2.08,0-1.39-.08-2.78-.2-4.16a49.7,49.7,0,0,0-1.33-8.14c-.4-1.54-.86-3.06-1.31-4.59a.05.05,0,1,0-.1,0,58.58,58.58,0,0,1,1.6,8.12,76.19,76.19,0,0,1,.73,8.14c0,.74,0,1.49,0,2.23,0,.32,0,.64,0,1a70.12,70.12,0,0,0-3.66-7.56,91.87,91.87,0,0,0-7.43-11.11,4.55,4.55,0,0,0-.17-1.22c-.11-.48-.21-1-.32-1.45-.22-1-.47-2-.74-2.95-.54-2-1.25-3.87-1.86-5.81,0-.06-.12,0-.1,0,.57,1.92.95,3.91,1.39,5.87.22,1,.43,1.93.64,2.9.11.48.21,1,.31,1.45a.52.52,0,0,1,0,.11c-.87-1.1-1.77-2.2-2.68-3.27-4.15-4.86-8.69-9.34-13.26-13.79-.56-.55-1.14-1.08-1.71-1.62,0,0-.11,0-.07.08,4.37,4.55,8.67,9.16,12.75,14q1.45,1.72,2.86,3.48l-1.48-1c-1.27-.82-2.55-1.63-3.86-2.37s-2.64-1.45-4-2.12-2.88-1.25-4.22-2c-.05,0-.11.07-.05.09a31.2,31.2,0,0,1,4,2.2c1.32.78,2.64,1.57,3.94,2.39s2.55,1.61,3.82,2.43c1.06.68,2.1,1.43,3.19,2.07a104.06,104.06,0,0,1,6.95,10.11,72.72,72.72,0,0,1,3.59,6.82l-.77-.34-2-.88-3.84-1.68c-2.43-1.06-4.9-2-7.29-3.19a32.7,32.7,0,0,1-3.89-2.16c-.06,0-.11.05-.05.09,4.44,3.06,9.43,5.22,14.35,7.4l2.14.95c.59.26,1.17.55,1.78.77a77,77,0,0,1,3.67,10.06,206.41,206.41,0,0,1,4.72,21c1.24,7.09,2.08,14.22,2.73,21.39.08.89.17,1.78.27,2.68a.28.28,0,0,0,.56,0C230,411.94,229.63,408.29,229.25,404.68Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M216.05,344.77c-.4-2.21-1-4.37-1.58-6.53,0-.06-.11,0-.1,0,.55,2.12.95,4.28,1.34,6.43s.77,4.4,1.08,6.61a0,0,0,0,0,.06,0A57.24,57.24,0,0,0,216.05,344.77Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M206.7,350.75a39.7,39.7,0,0,0-4.72-2.66c-.79-.41-1.59-.8-2.39-1.18s-1.68-.74-2.5-1.15c-.06,0-.11.06-.05.09.79.4,1.54.88,2.32,1.3l2.41,1.32c1.59.85,3.15,1.8,4.81,2.49A.12.12,0,0,0,206.7,350.75Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M232.78,366.61s13.73-3.27,20-12.48c6-8.79,8-23.77,8.11-25.09-.25,1.21-3.08,14.3-12.42,20.4C241.35,354.12,234.44,358,232.78,366.61Z"
                            style={{ fill: "#263238", opacity: "0.1" }}
                          />
                          <path
                            d="M245.45,342.91a17.44,17.44,0,0,0-5.06,8.33s0,0,0,0a20.52,20.52,0,0,1,5.09-8.27S245.5,342.86,245.45,342.91Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M232.78,366.61s13.73-3.27,20-12.48c6-8.79,8-23.77,8.11-25.09a.66.66,0,0,1,0-.09s-6.58,9.35-13.5,11.74S230.8,351.32,232.78,366.61Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M258.51,334.11a56.56,56.56,0,0,1-4.25,7.25,29.29,29.29,0,0,1-5.64,5.81c-1.86,1.48-3.84,2.82-5.72,4.27l0-.07c.36-.52.73-1,1.12-1.53.79-1,1.65-2,2.51-2.89,1.71-1.85,3.45-3.67,5-5.67a21.56,21.56,0,0,0,2.2-3.54c0-.06-.07-.09-.1,0-2.22,4.64-6.67,7.61-9.84,11.53a19.71,19.71,0,0,0-1.27,1.73,7.57,7.57,0,0,0-.79,1.39,29.15,29.15,0,0,0-4.68,4.74,19.75,19.75,0,0,1,.55-2.67,13.25,13.25,0,0,1,1.46-3.47c0-.06-.06-.11-.09-.06a16.37,16.37,0,0,0-1.6,3.45,12.56,12.56,0,0,0-.5,3h0A26.13,26.13,0,0,0,235,360.2c.06-.29.11-.59.17-.88.27-1.37.57-2.73.93-4.08a24.51,24.51,0,0,1,3.3-7.73c0-.05-.05-.11-.08-.06a29.26,29.26,0,0,0-3.66,7.57c-.44,1.34-.79,2.71-1.1,4.09-.15.68-.28,1.36-.41,2-.07.35-.15.71-.2,1.07a49.52,49.52,0,0,0-3.17,9.3,135.7,135.7,0,0,0-2.92,17.35,143.42,143.42,0,0,0-.95,18.42c0,.77.06,1.54.1,2.31,0,.2.31.23.32,0,.13-3,.21-6.09.39-9.13s.45-6.09.77-9.12a163.79,163.79,0,0,1,2.86-17.74c1.12-5,2.56-10.06,5.3-14.46a27.36,27.36,0,0,1,4.95-5.89c1.92-1.72,4-3.24,6.06-4.84a33.39,33.39,0,0,0,5.55-5.34,43.64,43.64,0,0,0,4.37-7.08c.32-.62.65-1.24,1-1.86C258.62,334.1,258.53,334.05,258.51,334.11Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M256.14,336.12a45.5,45.5,0,0,1-3.06,5.34s0,.08.06,0a36.44,36.44,0,0,0,3.09-5.35C256.26,336.09,256.16,336.06,256.14,336.12Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M182.43,360.55s-.21,19.49,11.45,25.12,17.91.94,25.83,2.83h0c-.3-.47-6-8.59-14.95-10.83C195.49,375.35,185.24,368.67,182.43,360.55Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M182.43,360.55s-.21,19.49,11.45,25.12,17.91.94,25.83,2.83h0a43.87,43.87,0,0,0-13.25-3.91C199.09,383.69,185,378.9,182.43,360.55Z"
                            style={{ opacity: "0.1" }}
                          />
                          <path
                            d="M220.47,388.85a19.1,19.1,0,0,0-4.63-3.14c-.25-.12-.51-.22-.76-.33l-.4-.45c-.34-.36-.71-.71-1.09-1a16.83,16.83,0,0,0-2.35-1.69c-1.93-1.14-4.05-1.93-6-3-.06,0-.11.06-.05.09,1,.51,1.92,1.07,2.87,1.62s1.87,1.06,2.77,1.64a19.31,19.31,0,0,1,2.31,1.73l.6.57a31.47,31.47,0,0,0-3.95-1.05c-2.13-.43-4.29-.73-6.42-1.19a30,30,0,0,1-3.09-.83c-1-.78-1.93-1.56-2.85-2.4a23.24,23.24,0,0,1-3-3.34c0-.06-.13,0-.09.05a35.12,35.12,0,0,0,4.78,5.27c-.5-.19-1-.39-1.49-.61a24.09,24.09,0,0,1-9.94-8.27c0-.05-.12,0-.08.05a27.15,27.15,0,0,0,8,7.72,24.5,24.5,0,0,0,5.07,2.4,45.88,45.88,0,0,0,6.31,1.49,45.14,45.14,0,0,1,6.18,1.47,18.76,18.76,0,0,1,5.18,2.73,24.12,24.12,0,0,1,7,8.66,43.57,43.57,0,0,1,3.85,14.26c0,.21.35.21.33,0C229,403.07,226.79,394.54,220.47,388.85Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M206.94,382.49a6.76,6.76,0,0,0-2.39-2.18A8.76,8.76,0,0,1,201.7,378c0-.06-.13,0-.09.05a9.66,9.66,0,0,0,2.52,2.25,8.86,8.86,0,0,1,2.74,2.27C206.9,382.58,207,382.53,206.94,382.49Z"
                            style={{ fill: "#263238" }}
                          />
                          <polygon
                            points="213.13 403.24 213.66 413.96 215.29 446.72 239.75 446.72 241.37 413.96 241.9 403.24 213.13 403.24"
                            style={{ fill: "#37474f" }}
                          />
                          <polygon
                            points="213.13 403.24 213.66 413.96 241.37 413.96 241.9 403.24 213.13 403.24"
                            style={{ fill: "#263238" }}
                          />
                          <rect
                            x="211.42"
                            y="398.76"
                            width="32.2"
                            height="10.23"
                            transform="translate(455.03 807.75) rotate(180)"
                            style={{ fill: "#37474f" }}
                          />
                        </g>
                        <g id="freepik--Windows--inject-5">
                          <rect
                            x="270.67"
                            y="40.16"
                            width="103.1"
                            height="65.77"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M374.41,106.57H270V39.5h104.4Zm-103.09-1.3H373.11V40.81H271.32Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="270.67"
                            y="40.16"
                            width="103.1"
                            height="12.44"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M374.41,53.24H270V39.5h104.4Zm-103.09-1.3H373.11V40.81H271.32Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M288.46,77.18a12.72,12.72,0,0,1,12.71-12.47,12.93,12.93,0,0,1,8,2.71,2,2,0,0,1-2.42,3.15,8.64,8.64,0,0,0-5.58-1.91,9.12,9.12,0,0,0-6.23,2.5,8.53,8.53,0,0,0-2.53,6,8.41,8.41,0,0,0,2.53,6,9.12,9.12,0,0,0,6.23,2.5,8.7,8.7,0,0,0,5.58-1.91,2.1,2.1,0,0,1,2.77.38,2,2,0,0,1-.35,2.77,12.93,12.93,0,0,1-8,2.7A12.66,12.66,0,0,1,288.46,77.18Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M315.48,83.63a1.8,1.8,0,0,1,2.53-.25,11.22,11.22,0,0,0,6.61,2.67A7.49,7.49,0,0,0,329,84.77a3.12,3.12,0,0,0,1.49-2.49,2,2,0,0,0-.31-1.11,3.19,3.19,0,0,0-1-1,13.82,13.82,0,0,0-4.75-1.63h-.07a18.78,18.78,0,0,1-4.46-1.35,7.4,7.4,0,0,1-3.22-2.7,5.22,5.22,0,0,1-.8-2.84,6.41,6.41,0,0,1,2.77-5.06,10.23,10.23,0,0,1,6-1.84c3.33,0,5.79,1.63,7.55,2.77a1.79,1.79,0,0,1,.49,2.46,1.74,1.74,0,0,1-2.46.52c-1.77-1.17-3.47-2.21-5.58-2.21a6.64,6.64,0,0,0-3.88,1.17,2.78,2.78,0,0,0-1.31,2.19,1.73,1.73,0,0,0,.24,1,3.34,3.34,0,0,0,.93.9A11.89,11.89,0,0,0,324.86,75h.07a20.33,20.33,0,0,1,4.78,1.46,8.11,8.11,0,0,1,3.47,2.87,5.61,5.61,0,0,1,.83,3,6.73,6.73,0,0,1-3,5.37,10.89,10.89,0,0,1-6.41,2,15,15,0,0,1-8.87-3.46A1.85,1.85,0,0,1,315.48,83.63Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M338.23,83.63a1.81,1.81,0,0,1,2.53-.25,11.27,11.27,0,0,0,6.62,2.67,7.49,7.49,0,0,0,4.33-1.28,3.12,3.12,0,0,0,1.49-2.49,2,2,0,0,0-.31-1.11,3.19,3.19,0,0,0-1-1,13.82,13.82,0,0,0-4.75-1.63H347a18.86,18.86,0,0,1-4.47-1.35,7.46,7.46,0,0,1-3.22-2.7,5.3,5.3,0,0,1-.79-2.84,6.39,6.39,0,0,1,2.77-5.06,10.21,10.21,0,0,1,6-1.84c3.32,0,5.78,1.63,7.55,2.77a1.79,1.79,0,0,1,.49,2.46,1.74,1.74,0,0,1-2.46.52c-1.77-1.17-3.47-2.21-5.58-2.21a6.62,6.62,0,0,0-3.88,1.17,2.77,2.77,0,0,0-1.32,2.19,1.65,1.65,0,0,0,.25,1,3.34,3.34,0,0,0,.93.9A11.89,11.89,0,0,0,347.62,75h.07a20.33,20.33,0,0,1,4.78,1.46,8,8,0,0,1,3.46,2.87,5.62,5.62,0,0,1,.84,3,6.73,6.73,0,0,1-3,5.37,10.89,10.89,0,0,1-6.41,2,15,15,0,0,1-8.87-3.46A1.85,1.85,0,0,1,338.23,83.63Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M280.24,46.46a2.08,2.08,0,1,1-2.08-2.08A2.09,2.09,0,0,1,280.24,46.46Z"
                            style={{ fill: "#c7c7c7" }}
                          />
                          <path
                            d="M288.74,46.46a2.08,2.08,0,1,1-2.08-2.08A2.09,2.09,0,0,1,288.74,46.46Z"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M297.24,46.46a2.08,2.08,0,1,1-2.08-2.08A2.09,2.09,0,0,1,297.24,46.46Z"
                            style={{ fill: "#455a64" }}
                          />
                          <rect
                            x="580.08"
                            y="271.6"
                            width="103.1"
                            height="65.77"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M683.83,338H579.43V271h104.4Zm-103.09-1.3H682.53V272.25H580.74Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="580.08"
                            y="271.6"
                            width="103.1"
                            height="12.44"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M683.83,284.69H579.43V271h104.4Zm-103.09-1.3H682.53V272.25H580.74Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M599.33,308.63A12.73,12.73,0,0,1,612,296.16a13,13,0,0,1,8,2.7,2,2,0,0,1-2.43,3.16,8.62,8.62,0,0,0-5.58-1.91,9.18,9.18,0,0,0-6.23,2.49,8.57,8.57,0,0,0-2.53,6,8.43,8.43,0,0,0,2.53,6,9.18,9.18,0,0,0,6.23,2.49,8.69,8.69,0,0,0,5.58-1.9,2.1,2.1,0,0,1,2.77.38,2,2,0,0,1-.34,2.77,13,13,0,0,1-8,2.7A12.67,12.67,0,0,1,599.33,308.63Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M632.55,310.81h-4.92a1.89,1.89,0,0,1-1.9-1.9,1.92,1.92,0,0,1,1.9-1.91h4.92v-4.81a2,2,0,0,1,2-2,2,2,0,0,1,2,2V307h4.92a1.92,1.92,0,0,1,1.9,1.91,1.89,1.89,0,0,1-1.9,1.9H636.5v4.82a2,2,0,0,1-2,2,2,2,0,0,1-2-2Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M654,310.81h-4.92a1.9,1.9,0,0,1-1.91-1.9,1.93,1.93,0,0,1,1.91-1.91H654v-4.81a2,2,0,0,1,2-2,2,2,0,0,1,2,2V307h4.92a1.93,1.93,0,0,1,1.91,1.91,1.9,1.9,0,0,1-1.91,1.9H658v4.82a2,2,0,0,1-2,2,1.94,1.94,0,0,1-2-2Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M589.66,277.91a2.08,2.08,0,1,1-2.08-2.08A2.08,2.08,0,0,1,589.66,277.91Z"
                            style={{ fill: "#c7c7c7" }}
                          />
                          <path
                            d="M598.16,277.91a2.08,2.08,0,1,1-2.08-2.08A2.08,2.08,0,0,1,598.16,277.91Z"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M606.66,277.91a2.09,2.09,0,1,1-2.09-2.08A2.09,2.09,0,0,1,606.66,277.91Z"
                            style={{ fill: "#455a64" }}
                          />
                          <rect
                            x="287.1"
                            y="356.5"
                            width="70.23"
                            height={26}
                            style={{ fill: "#455a64" }}
                          />
                          <path
                            d="M297.23,374.9V363.36a1.06,1.06,0,0,1,1.08-1.07,1.08,1.08,0,0,1,1.09,1.07v4.7h5.06v-4.7a1.06,1.06,0,0,1,1.08-1.07,1.08,1.08,0,0,1,1.09,1.07V374.9a1.08,1.08,0,0,1-1.09,1.07,1.06,1.06,0,0,1-1.08-1.07v-4.69H299.4v4.69a1.08,1.08,0,0,1-1.09,1.07A1.06,1.06,0,0,1,297.23,374.9Z"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M319.46,364.46h-3.11V374.9a1.08,1.08,0,0,1-2.15,0V364.46h-3.09a1.09,1.09,0,0,1-1.08-1.1,1.06,1.06,0,0,1,1.08-1.07h8.35a1.07,1.07,0,0,1,1.07,1.07A1.1,1.1,0,0,1,319.46,364.46Z"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M335.52,363.36V374.9a1.1,1.1,0,0,1-1.09,1.07,1.07,1.07,0,0,1-1.08-1.07v-8.23l-2.81,3.91a1.09,1.09,0,0,1-.88.45h0a1.12,1.12,0,0,1-.9-.45l-2.79-3.91v8.23a1.09,1.09,0,0,1-1.1,1.07,1.08,1.08,0,0,1-1.07-1.07V363.36a1.08,1.08,0,0,1,1.07-1.07h.06a1.08,1.08,0,0,1,.86.45l3.89,5.39,3.89-5.39a1.09,1.09,0,0,1,.88-.45h0A1.11,1.11,0,0,1,335.52,363.36Z"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M340.25,374.9V363.36a1.09,1.09,0,0,1,2.17,0V373.8h5.3a1.09,1.09,0,0,1,0,2.17h-6.39A1.07,1.07,0,0,1,340.25,374.9Z"
                            style={{ fill: "#fff" }}
                          />
                          <rect
                            x="66.17"
                            y="141.53"
                            width="57.88"
                            height={26}
                            style={{ fill: "#455a64" }}
                          />
                          <path
                            d="M83.39,155.69H81v4.24a1.09,1.09,0,0,1-2.17,0V148.39a1.07,1.07,0,0,1,1.08-1.07h3.5a4.19,4.19,0,1,1,0,8.37ZM81,153.52h2.41a2,2,0,1,0,0-4H81Z"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M90.21,159.93V148.39a1.06,1.06,0,0,1,1.08-1.07,1.08,1.08,0,0,1,1.09,1.07v4.7h5.06v-4.7a1.06,1.06,0,0,1,1.08-1.07,1.08,1.08,0,0,1,1.09,1.07v11.54A1.08,1.08,0,0,1,98.52,161a1.06,1.06,0,0,1-1.08-1.07v-4.69H92.38v4.69A1.08,1.08,0,0,1,91.29,161,1.06,1.06,0,0,1,90.21,159.93Z"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M108.64,155.69h-2.4v4.24a1.09,1.09,0,0,1-2.17,0V148.39a1.07,1.07,0,0,1,1.07-1.07h3.5a4.19,4.19,0,1,1,0,8.37Zm-2.4-2.17h2.4a2,2,0,1,0,0-4h-2.4Z"
                            style={{ fill: "#fff" }}
                          />
                        </g>
                        <g id="freepik--character-3--inject-5">
                          <path
                            d="M652,369.5l18,36.14c1.49,7.46,2.66,14,3,17.47,0,0,0,0,0,.06a5.22,5.22,0,0,1-.09,2.41l0,.06c-1.92,1.95-61.18,15.59-63.4,15.37s-1.78-6.59.1-8.95,22.24-17.74,22.24-17.74l-17.63-36.16Z"
                            style={{ fill: "#d3766a" }}
                          />
                          <path
                            d="M610.37,441c2.22.22,60.58-13.43,62.5-15.37l0-.06a5.31,5.31,0,0,0,.1-2.41.07.07,0,0,0,0-.05c-.29-3.46-1.47-10-3-17.48L665.73,397l-37.38,10.25,3.45,7.08s-19.45,15.37-21.33,17.74S608.13,440.79,610.37,441Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M609.56,440.06c2.25.17,61.64-15,63.54-17,.73-.76-1-9.54-3.33-20.09l-.08-.33L631.26,412l.18.65s-20.14,16-22,18.39S607.31,439.9,609.56,440.06Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M609.64,437.59c10-2.8,50.35-13.15,60.39-15.16.09,0,.1,0,0,.06-9.8,3-50.28,13-60.37,15.26C609.47,437.8,609.43,437.65,609.64,437.59Z"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M628.25,413.58c3.76-1.74,8.73-2.36,12.46-.32.14.08,0,.28-.11.27a57.93,57.93,0,0,0-12.2.54A.26.26,0,0,1,628.25,413.58Z"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M625.85,416c3.75-1.74,8.72-2.36,12.45-.32.14.07,0,.28-.11.27a57.93,57.93,0,0,0-12.2.54A.26.26,0,0,1,625.85,416Z"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M623.44,418.46c3.75-1.74,8.73-2.36,12.45-.32.15.07,0,.28-.11.27a57.93,57.93,0,0,0-12.2.54A.26.26,0,0,1,623.44,418.46Z"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M608.11,438.16c-1,.68.18,4.2,1,4.29s65.53-16.71,66.56-17.24-.37-4.37-1.7-4.25S608.11,438.16,608.11,438.16Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M661.58,411.81c3.76-3.25,8.82,2.58,5,5.84S657.82,415.07,661.58,411.81Z"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M665.6,394.1,622.27,405s-40.4-72.89-39.49-91.42C584,288,614,209.46,614,209.46H650s-23.85,85-24.16,99.25C625.64,316.19,665.6,394.1,665.6,394.1Z"
                            style={{ fill: "#37474f" }}
                          />
                          <path
                            d="M620.41,396.24c2.31-.92,22.94-6.88,38.33-10.13.1,0,.13.12,0,.16-4.84,1.71-35.42,9.75-38.29,10.14C620.38,396.42,620.31,396.28,620.41,396.24Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M622.81,290.46c2.86-12,5.87-23.95,9.13-35.84s6.66-23.86,10.43-35.66l1.41-4.31a.18.18,0,0,1,.35.1c-3.36,11.74-6.78,23.47-10,35.26s-6.25,23.61-9.13,35.48c-.71,2.94-1.42,5.88-2.11,8.82a80,80,0,0,0-1.83,9.2,24,24,0,0,0,.59,8.85,50.76,50.76,0,0,0,3.19,8.23q7.77,16.88,15.54,33.76c5.17,11.28,6,13.85,11,25.23.61,1.41,1.23,2.82,1.82,4.24,0,.1-.09.17-.14.08-5.67-11.15-6.54-13.83-11.8-25.18s-10.57-22.83-15.83-34.26c-2.37-5.16-5.15-10.42-5.51-16.19C619.55,302.27,621.43,296.24,622.81,290.46Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M620.85,383.78s-1.39,39.75-1.39,39.78c-.23,7.6-.56,14.26-1.06,17.69a.09.09,0,0,1,0,.05,5.16,5.16,0,0,1-.63,2.33s0,0,0,.05c-2.31,1.47-63.12,1.43-65.23.72s-.25-6.82,2.11-8.7,25.65-12.28,25.65-12.28L582,383.71Z"
                            style={{ fill: "#d3766a" }}
                          />
                          <path
                            d="M619.74,415.4s-.28,8.13-.28,8.16c-.23,7.6-.56,14.26-1.06,17.69a.09.09,0,0,1,0,.05,10,10,0,0,1-.63,2.33s0,0,0,.05c-2.31,1.47-63.12,1.43-65.23.72s-.25-6.82,2.11-8.7,25.65-12.28,25.65-12.28l.18-8.28Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M552.46,444.32c2.15.69,63.43-.26,65.74-1.78.89-.56,1.27-9.5,1.42-20.31v-.34l-39.54.17,0,.67s-23.29,10.86-25.66,12.79S550.3,443.64,552.46,444.32Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M553.11,441.93c10.33-.41,52-1.11,62.26-.73.08,0,.08.06,0,.07-10.23.63-51.92,1-62.26.83C552.9,442.1,552.89,441.94,553.11,441.93Z"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M576.78,422.9c4.06-.82,9-.27,12.19,2.57.12.11,0,.29-.17.25a56.86,56.86,0,0,0-12-2.31A.26.26,0,0,1,576.78,422.9Z"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M573.88,424.71c4-.82,9-.27,12.18,2.58.13.11,0,.28-.17.24a56.72,56.72,0,0,0-12-2.3A.26.26,0,0,1,573.88,424.71Z"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M571,426.53c4-.82,9-.28,12.19,2.57.12.11,0,.28-.17.24a57.45,57.45,0,0,0-12-2.3A.26.26,0,0,1,571,426.53Z"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M551.49,442.14c-1.1.44-.8,4.12,0,4.4s67.61-1.05,68.74-1.32.65-4.34-.67-4.53S551.49,442.14,551.49,442.14Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M609.61,428.91c4.41-2.29,8,4.55,3.56,6.85S605.2,431.2,609.61,428.91Z"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M614.48,209.43v0c.15.74,9.11,36.15,10.23,36.81s-32.54,46.25-36.56,68.58c-2.56,14.28-8.41,97.55-8.41,97.55h43.06s4.22-70.71,5.64-94c.55-9,34.46-50.84,37.68-78.7,1-8.79-5.29-30.26-5.29-30.26Z"
                            style={{ fill: "#37474f" }}
                          />
                          <path
                            d="M623.9,378.69c.51-11.72,1-23.46,1.84-35.15.48-6.63,1.42-13.05,2.08-19.66,0-.35.32-.43.31-.07-.31,11.76-1.28,23.4-1.91,35.15s-1.22,14.5-1.89,26.21c-.37,6.63-.7,13.27-1.22,19.89,0,.1-.16.1-.16,0C622.93,393.29,623.39,390.44,623.9,378.69Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M588.11,315.35a61.81,61.81,0,0,1,1.8-9.16,46.56,46.56,0,0,1,3.49-8.42c2.94-5.63,6.28-11.08,9.5-16.55s6.58-11.06,10-16.53q2.86-4.6,5.76-9.19c2-3.09,4-6.11,6.06-9.16a.11.11,0,0,1,.19.12c-3.3,5.53-6.56,11.07-9.86,16.6s-6.55,11.08-9.8,16.63-6.4,10.93-9.46,16.47a58.16,58.16,0,0,0-3.88,8.22,50.26,50.26,0,0,0-2.18,9.06c-1.14,7.16-2.08,14.37-3.53,21.48,0,.08-.16.06-.16,0C586.48,328.36,587.25,321.83,588.11,315.35Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M583.52,404.94c2.47-.32,21.25-1,37-.3.1,0,.1.15,0,.16-5.12.46-34.05.65-36.93.32C583.45,405.11,583.41,405,583.52,404.94Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M619.08,243.78a80.36,80.36,0,0,1,12.72,5.93.14.14,0,0,1-.12.26c-4.28-1.84-8.65-3.6-12.83-5.68A.28.28,0,0,1,619.08,243.78Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M617.79,214.44c0-.15.27-.18.27,0,0,5.08.29,9.56.72,14.31.2,2.21,2,14.4,5.8,13.51.64-.14,1-.77,1.07-1.74a15.45,15.45,0,0,0-.51-3.74c-.42-2.55-.76-5.11-1-7.69a70.29,70.29,0,0,1,.15-14.43.13.13,0,0,1,.25,0,131.29,131.29,0,0,0,1.17,19.92c.47,3.17,2.07,8-1.25,8.43s-5.56-7.5-6-9.68A73.24,73.24,0,0,1,617.79,214.44Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M624.48,242.57a20.36,20.36,0,0,1,.86,2.53,6,6,0,0,1,.36,2.08.15.15,0,0,1-.27,0,7.66,7.66,0,0,1-.89-2c-.29-.78-.59-1.55-.86-2.34A.43.43,0,0,1,624.48,242.57Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M622.68,329.68c.4-6,.38-12.37,2.94-17.95a60.16,60.16,0,0,1,4.69-7.82q2.63-4,5.17-8.05c6.8-10.8,13.29-21.82,19.24-33.12a73.88,73.88,0,0,0,6.95-17.05,54.64,54.64,0,0,0,.78-19.25c-.2-1.6-.41-3.19-.68-4.78a.09.09,0,0,1,.18,0,63.09,63.09,0,0,1,1.41,18.63,52.14,52.14,0,0,1-5,17.16c-2.63,5.67-5.75,11.14-8.82,16.58q-4.76,8.42-9.81,16.66c-3.34,5.47-6.87,10.82-10.36,16.2a31.12,31.12,0,0,0-4.12,8.28,44.45,44.45,0,0,0-1.31,9.4c-.87,13.32-4.24,57.57-5.43,70.82-.15,1.68-.3,3.36-.46,5a.12.12,0,1,1-.23,0C618.37,387.1,621.8,343,622.68,329.68Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M643.37,221.07c0-.1.16-.06.16,0,.12,3.7,0,7.52,1.44,11,1.31,3.21,3.93,5.45,6.86,7.14a57.07,57.07,0,0,0,5.27,2.58c.13.06.08.26-.07.21-3.41-1.08-6.87-2.25-9.7-4.52a12.69,12.69,0,0,1-4.51-9.77A32.42,32.42,0,0,1,643.37,221.07Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M633.63,151.94c-1.81,7.28-12.14,29.46-23.48,32.89-10.17,3.08-43.33-23.22-51.46-34.68-2.86-4,16.13-12.76,20.49-11.75,3.74.86,26.64,23.31,28.05,22.7,2.37-1,7.79-6.22,16.62-14.35C632.16,139.11,634.91,146.81,633.63,151.94Z"
                            style={{ fill: "#d3766a" }}
                          />
                          <path
                            d="M590.29,146.92l-25.16,11.86s30.53,30.71,45.34,27c3.41-.85,18.07-13.2,23.47-31.74,1.68-5.74.83-17.48-11.53-6.51s-15,12.68-15.47,12.66S590.29,146.92,590.29,146.92Z"
                            style={{ fill: "#a6a6a6" }}
                          />
                          <g style={{ opacity: "0.1" }}>
                            <path d="M589.83,162.21a2.17,2.17,0,0,0,1.7-2.47c-.35-2.14-2.93-3.36-4.82-4s-4.28-.85-5.9.6a1.72,1.72,0,0,0,.5,2.87c1.28.67,2.77.93,4.1,1.54S588.17,162.64,589.83,162.21Z" />
                            <path d="M598.1,165.8c.28-1.41-1-2.74-2-3.54a3.61,3.61,0,0,0-1.87-.8,1.82,1.82,0,0,0-2.08,1.5,2.38,2.38,0,0,0,.61,1.67,5.28,5.28,0,0,0,.66.68l.07.06,0,.07a6,6,0,0,0,2.1,1.92A1.84,1.84,0,0,0,598.1,165.8Z" />
                            <path d="M600.15,158.69a11.53,11.53,0,0,0-5.09-4.92c-1.68-.91-4.51-2.31-6.26-1a1.13,1.13,0,0,0-.28,1.3c.54,1.56,3,2.43,4.26,3.3,1.61,1.11,3,2.5,4.63,3.58A1.86,1.86,0,0,0,600.15,158.69Z" />
                            <path d="M600.06,174.07a2.5,2.5,0,0,0,1-.46,2.24,2.24,0,0,0,.75-1.46,3.47,3.47,0,0,0-.33-1.7,3.32,3.32,0,0,0-1-1.26L600,169l-.51-.12a2,2,0,0,0-1.23.33,2,2,0,0,0-.88,2,9.2,9.2,0,0,0,.38,1.73l.3.46a1.6,1.6,0,0,0,.65.5A2,2,0,0,0,600.06,174.07Z" />
                            <path d="M603.79,168.56a1.78,1.78,0,0,0,1-1.9,4.4,4.4,0,0,0-1-2,3.82,3.82,0,0,0-1.69-1.29,1.38,1.38,0,0,0-1.81,1.53,6.64,6.64,0,0,0,.67,1.58c.1.23.19.46.28.69a4.59,4.59,0,0,0,.55,1A1.74,1.74,0,0,0,603.79,168.56Z" />
                          </g>
                          <path
                            d="M570.55,162.34c1.84-1.19,3.86-2.13,5.81-3.14s3.84-2,5.77-2.93c3.89-1.94,7.77-4,11.79-5.69a.09.09,0,0,1,.08.15c-3.72,2.33-7.7,4.3-11.61,6.28-2,1-3.94,2-5.93,2.91a58.22,58.22,0,0,1-5.84,2.58C570.52,162.53,570.48,162.39,570.55,162.34Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M634,154c-5.41,18.53-20.07,30.89-23.48,31.74-6.87,1.72-17.12-4-26.14-10.55L605.25,159a11.92,11.92,0,0,0,1.7,1.22c.5,0,3.09-1.69,15.45-12.66S635.62,148.29,634,154Z"
                            style={{ opacity: "0.1" }}
                          />
                          <path
                            d="M666.74,222.31l-60.81.41c0,1.2,3.08-47.65,18.67-76.48,1.07-2,10.61-4.13,14.85-.27C658,162.87,666.75,223.09,666.74,222.31Z"
                            style={{ fill: "#a6a6a6" }}
                          />
                          <g style={{ opacity: "0.1" }}>
                            <path d="M624,208.37a2.76,2.76,0,0,0-4.57,1.13c-.78,2.41.79,4.75,2.87,5.88a7.9,7.9,0,0,0,7.1.29c2.14-1,1.56-4.31-.56-4.87a16.27,16.27,0,0,1-3-.75C625,209.67,624.59,208.91,624,208.37Z" />
                            <path d="M621.28,200.43c-1.25,3.61,4.07,7.51,7.26,5.91a2,2,0,0,0,.46-3.08c-.77-.8-1.47-1-2.16-1.73a3.28,3.28,0,0,1-.6-.82,5.57,5.57,0,0,0-1.44-1.66C623.48,198.09,621.75,199.09,621.28,200.43Z" />
                            <path d="M612.11,199.47c-1.38,1.38-.78,3.81.08,5.33a4.76,4.76,0,0,0,4,2.63,1.61,1.61,0,0,0,1.16-2.69,4.85,4.85,0,0,1-1.28-2.09c-.37-1.22-.53-2.76-1.75-3.43A1.89,1.89,0,0,0,612.11,199.47Z" />
                            <path d="M635,206.35a1.81,1.81,0,0,0-1.8,1.77,2.13,2.13,0,0,0,1.77,2.06,3.23,3.23,0,0,0,2-.23,1.46,1.46,0,0,0,.7-.79,1.55,1.55,0,0,0,.1-1.08,1.69,1.69,0,0,0-1.49-1.24,1.18,1.18,0,0,0-.24-.19A2,2,0,0,0,635,206.35Z" />
                            <path d="M616.41,190.9c-1.42,1.86-.29,5.57,1.69,6.63a1.74,1.74,0,0,0,2.62-1.46,7.23,7.23,0,0,0-.11-1.15c-.06-.42-.13-.68-.15-.92a9.28,9.28,0,0,0-.21-2.53A2.14,2.14,0,0,0,616.41,190.9Z" />
                            <path d="M611.19,210.31c-1.92,2.92,2.3,7,5.22,6.78,1-.08,2-1.21,1.31-2.21-.58-.8-1.32-1.48-1.85-2.31-.65-1-.93-2.27-2.08-2.89A1.94,1.94,0,0,0,611.19,210.31Z" />
                          </g>
                          <g style={{ opacity: "0.1" }}>
                            <path d="M656,204.77c-.18,1.11-.11,2.08-.82,3a14.21,14.21,0,0,0-2.09,2.68,1.44,1.44,0,0,0,1.55,1.92,6.85,6.85,0,0,0,5.12-7.69A1.9,1.9,0,0,0,656,204.77Z" />
                            <path d="M651.51,195.78c-.4,1.38-.12,2.86-.41,4.29a34.5,34.5,0,0,1-1,3.88c-.3.91.68,2.2,1.68,1.6a7.35,7.35,0,0,0,3.51-4.06c.56-1.61,1.07-4.26.17-5.8S652.08,193.78,651.51,195.78Z" />
                            <path d="M647.53,209.64a9,9,0,0,1-2.72,2.83A2.09,2.09,0,1,0,647,216a7.5,7.5,0,0,0,3.65-5.2A1.71,1.71,0,0,0,647.53,209.64Z" />
                          </g>
                          <g style={{ opacity: "0.1" }}>
                            <path d="M631.94,166.06a2.17,2.17,0,0,0,2.34-1.87c.3-2.15-1.82-4.07-3.44-5.2s-3.85-2.06-5.83-1.15a1.71,1.71,0,0,0-.35,2.89c1,1,2.38,1.69,3.46,2.67S630.22,166,631.94,166.06Z" />
                            <path d="M638.8,171.91c.68-1.27-.15-2.92-.87-4a3.56,3.56,0,0,0-1.56-1.31,1.81,1.81,0,0,0-2.42.82,2.38,2.38,0,0,0,.09,1.78,6.06,6.06,0,0,0,.43.84l0,.08,0,.08a5.88,5.88,0,0,0,1.44,2.46A1.86,1.86,0,0,0,638.8,171.91Z" />
                            <path d="M642.84,165.71a11.5,11.5,0,0,0-3.44-6.19c-1.34-1.36-3.63-3.53-5.7-2.74a1.11,1.11,0,0,0-.65,1.16c.06,1.65,2.14,3.19,3.1,4.4,1.22,1.53,2.15,3.27,3.39,4.78A1.87,1.87,0,0,0,642.84,165.71Z" />
                            <path d="M638.26,180.39a2.5,2.5,0,0,0,1.08-.16,2.18,2.18,0,0,0,1.14-1.17,3.46,3.46,0,0,0,.18-1.72,3.24,3.24,0,0,0-.62-1.51l-.36-.36-.46-.26a1.91,1.91,0,0,0-1.27-.05,2,2,0,0,0-1.43,1.66,10.44,10.44,0,0,0-.14,1.76l.15.53a1.59,1.59,0,0,0,.48.66A2,2,0,0,0,638.26,180.39Z" />
                            <path d="M643.43,176.21a1.79,1.79,0,0,0,1.48-1.53,4.47,4.47,0,0,0-.41-2.25,3.89,3.89,0,0,0-1.23-1.73,1.39,1.39,0,0,0-2.19.94,6.63,6.63,0,0,0,.18,1.71c0,.25,0,.49.07.74a5.1,5.1,0,0,0,.24,1.08A1.76,1.76,0,0,0,643.43,176.21Z" />
                          </g>
                          <path
                            d="M626.11,154.45c2.9.66,8.91-2.79,10.95-6.94a68.26,68.26,0,0,0-.93-6.77c-.3-2.16-.59-4.58-.69-6.81,0-.45-13.81,4-13.81,4a35.63,35.63,0,0,1,1.73,8.49,4.61,4.61,0,0,1-.05.92s0,.09,0,.15C623.09,149.26,623,153.74,626.11,154.45Z"
                            style={{ fill: "#d3766a" }}
                          />
                          <path
                            d="M623.31,147.36s0,.1,0,.15a9.66,9.66,0,0,0,1.43,0c8.21-.55,9.92-10.93,10.22-13.56-2.47.47-13.32,4-13.32,4a36,36,0,0,1,1.74,8.49A5.4,5.4,0,0,1,623.31,147.36Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M637.26,116.48c1.57,4.94-.86,19.29-4.34,22.53-5,4.69-13.41,5.24-17.42-.85-3.89-5.9-.39-24.54,3.51-27.5C624.75,106.32,634.93,109.19,637.26,116.48Z"
                            style={{ fill: "#d3766a" }}
                          />
                          <path
                            d="M623.4,125.24s.07.06.06.1c-.19,1-.24,2.09.58,2.56a0,0,0,1,1,0,0C623,127.62,623.07,126.12,623.4,125.24Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M624.43,124.37c1.58.14,1.19,3.28-.27,3.15S623.11,124.25,624.43,124.37Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M617.75,124.7s-.08,0-.08.07c-.09,1-.36,2.08-1.28,2.3a0,0,0,0,0,0,.05C617.48,127.1,617.82,125.64,617.75,124.7Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M617,123.57c-1.55-.31-2.06,2.81-.63,3.1S618.31,123.83,617,123.57Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M625.85,123.09a12.55,12.55,0,0,1-1.16-.58,2.11,2.11,0,0,1-1.08-.82.68.68,0,0,1,.21-.79,1.66,1.66,0,0,1,1.68,0,2.44,2.44,0,0,1,1.27,1.22A.72.72,0,0,1,625.85,123.09Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M616,121.84c.45,0,.85-.11,1.29-.17a2.09,2.09,0,0,0,1.28-.42.66.66,0,0,0,.06-.82,1.65,1.65,0,0,0-1.6-.51,2.44,2.44,0,0,0-1.59.74A.71.71,0,0,0,616,121.84Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M623.18,134.38c-.26.2-.53.48-.89.47a2.75,2.75,0,0,1-1-.38s-.06,0,0,.05a1.32,1.32,0,0,0,1.17.68,1,1,0,0,0,.87-.77C623.29,134.38,623.22,134.35,623.18,134.38Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M622.52,131.34a3.33,3.33,0,0,1-2.4,1.2,4,4,0,0,1-1.19-.1l-.23-.05-.21-.06a.23.23,0,0,1-.16-.24h0a.44.44,0,0,1,0-.1h0v-.09c.07-.75.29-1.88.29-1.88-.29.1-1.77.56-1.7.17a50.06,50.06,0,0,1,2.54-9.87.09.09,0,0,1,.17,0c-.45,3.11-1.44,6.13-1.95,9.24a6.27,6.27,0,0,1,1.62-.28c.11.05-.45,2.18-.45,2.52a0,0,0,0,0,0,0,4.63,4.63,0,0,0,3.56-.64C622.52,131.19,622.59,131.27,622.52,131.34Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M619.42,132.12a3.89,3.89,0,0,0,1.42,1.41,1.67,1.67,0,0,0,1.06.2c.81-.1.91-.81.85-1.44a4.43,4.43,0,0,0-.24-1A5.11,5.11,0,0,1,619.42,132.12Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M620.84,133.53a1.67,1.67,0,0,0,1.06.2c.81-.1.91-.81.85-1.44A1.83,1.83,0,0,0,620.84,133.53Z"
                            style={{ fill: "#ff9bbc" }}
                          />
                          <path
                            d="M634.16,111.65c-.28,2.08-1,8.56-.26,10s2.27,4.91,3.25,5.59c.66-4.29.78-8.46.08-10.77A11.09,11.09,0,0,0,634.16,111.65Z"
                            style={{ fill: "#263238", opacity: "0.2" }}
                          />
                          <path
                            d="M620.63,115.22a5.21,5.21,0,0,0,4.43,2.45,5.31,5.31,0,0,0,4.5-2.52c0-.05.1,0,.07,0a5.23,5.23,0,0,1-4.56,2.9,5.38,5.38,0,0,1-4.55-2.8C620.48,115.22,620.59,115.15,620.63,115.22Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M627.85,103.35a8.17,8.17,0,0,1,6.23,4.76,5.78,5.78,0,0,1,0,3.83c0,.06-.13,0-.11,0a6.41,6.41,0,0,0-2.13-6.17,8.25,8.25,0,0,0-7.07-2,5.3,5.3,0,0,0-3.11,1.81c-.07.1-.28,0-.22-.11C622.53,103.77,625.17,102.88,627.85,103.35Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M609.6,107.2a6.6,6.6,0,0,1,3.33-3.11c2-.85,4-.38,6.05.14,0,0,0,.1,0,.08a9.17,9.17,0,0,0-5.21-.19,6.52,6.52,0,0,0-3.46,2.69,6.36,6.36,0,0,0,1.43,8.2,6.49,6.49,0,0,0,5,1.27c.07,0,.1.09,0,.1a6.49,6.49,0,0,1-7.11-9.18Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M637.89,119.7s3.6-4.91,1.69-8.33c-1.08-2-5.56-2.36-5.56-2.36a8.1,8.1,0,0,0-4.62-4.15c-3.59-1.39-8.33.14-8.33.14s-3.24-2.54-6.82-1.13c-5,2-5.44,9.07-1.13,12,3,2.06,7.88-.18,7.88-.18.42.12,4.39,3.38,8.25,0,0,0,2.34,2.77,5,1.45A3.92,3.92,0,0,0,637.89,119.7Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M633.5,128s3.27-4.6,5.36-3.43-.39,7.86-2.86,8.76a2.51,2.51,0,0,1-3.35-1.37Z"
                            style={{ fill: "#d3766a" }}
                          />
                          <path
                            d="M638.1,126.46s0,.05,0,.06a6.36,6.36,0,0,0-3.3,4,1.38,1.38,0,0,1,2.07-.37.06.06,0,0,1,0,.1,1.54,1.54,0,0,0-1.7.52,7.36,7.36,0,0,0-.83,1.37c-.08.15-.36.07-.3-.11l0,0C634,129.74,635.73,126.66,638.1,126.46Z"
                            style={{ fill: "#263238" }}
                          />
                          <rect
                            x="188.14"
                            y="131.54"
                            width="392.86"
                            height="31.64"
                            style={{ fill: "#455a64" }}
                          />
                          <rect
                            x="194.7"
                            y="136.07"
                            width="8.75"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="213.79"
                            y="136.07"
                            width="194.03"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="413.2"
                            y="136.07"
                            width="16.63"
                            height="2.15"
                            style={{ fill: "#407BFF" }}
                          />
                          <rect
                            x="433.44"
                            y="136.07"
                            width="82.38"
                            height="2.15"
                            style={{ fill: "#a6a6a6" }}
                          />
                          <rect
                            x="194.7"
                            y="146.22"
                            width="8.75"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="222.32"
                            y="146.22"
                            width="65.89"
                            height="2.15"
                            style={{ fill: "#a6a6a6" }}
                          />
                          <rect
                            x="222.32"
                            y="156.37"
                            width="44.15"
                            height="2.15"
                            style={{ fill: "#407BFF" }}
                          />
                          <rect
                            x="271.37"
                            y="156.37"
                            width="164.14"
                            height="2.15"
                            style={{ fill: "#a6a6a6" }}
                          />
                          <rect
                            x="292.35"
                            y="146.22"
                            width="135.62"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="442.52"
                            y="156.37"
                            width="28.39"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="194.7"
                            y="156.37"
                            width="8.75"
                            height="2.15"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M574.7,130.4c-3.37-2.48-7.11-7.81-10.06-8.76a3.58,3.58,0,0,0-4.08,1.22s-.92-3.31-3.74-3.74c-1.46-.21-3.08,1.92-3.08,1.92a4.27,4.27,0,0,0-3.39-2.85c-2-.17-3.35,2-3.35,2s-2-2.14-4.11-1.66c-4.29,1-7.62,18.07-1.84,21.94,2.7,1.8,3.28-2.42,3.28-2.42s.63,6.28,4.13,7.05,3.94-4.75,3.94-4.75.66,6.07,4.37,6.51c3.87.46,3.36-5.14,3.36-5.14s1.83,4.3,4.76,4c4.82-.52.5-8.83,2.12-12.41l6.6-.87Z"
                            style={{ fill: "#d3766a" }}
                          />
                          <path
                            d="M570,125.93c3.39,2.07,8.79-1.58,12.32-.06,4.77,2-1.21,6.7-8.69,6.54l-5.78-1.15Z"
                            style={{ fill: "#d3766a" }}
                          />
                          <path
                            d="M546.66,120.43a0,0,0,0,0-.09,0,30.29,30.29,0,0,0-2.38,17.82c0,.19.36.21.36,0A61.62,61.62,0,0,1,546.66,120.43Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M553.72,121c0-.07-.09-.1-.12,0a28.27,28.27,0,0,0-1.39,19.59c.07.23.36.36.3.09C551.43,136.14,552.17,126.36,553.72,121Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M560.43,142.14c-1.79-6.36-1.35-12.66,0-19.06,0-.08-.1-.1-.14,0-1.52,3-2,7.12-2,10.39a17.48,17.48,0,0,0,2,8.76C560.26,142.31,560.47,142.27,560.43,142.14Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M637.42,161.3c-3.78,8.13-21.2,39-33,40.29-14.28,1.5-32.44-1.69-40.36-5.54-4.44-2.16,7.09-23.87,11.32-22.43,6.68,2.27,19.67,3.4,22.25,3.59s20.61-13.49,30.65-21C637.35,149.46,639.65,156.51,637.42,161.3Z"
                            style={{ fill: "#d3766a" }}
                          />
                          <path
                            d="M561.24,173.22c1.57-.06,1.55-.89-.72-2.53s-12.64-6.22-10.73-9.7,16.43,3.19,20,6.21,8.28,9.16,8.28,9.16C575,175.63,567.32,174.58,561.24,173.22Z"
                            style={{ fill: "#d3766a" }}
                          />
                          <path
                            d="M570.64,198.35c-8.86-2.21-19.92-4.77-26.95-12a5,5,0,0,1-1.46-2.93c-3.2-3.19-2.66-5.66-2.66-5.66-2.08-3.89-1.17-6.34-1.17-6.34s-3.73-3.79-1.81-6.42c2.14-3,6.95,2.94,11.58,4.56,10.61,3.73,26.73,6.05,29.9,6.82Z"
                            style={{ fill: "#d3766a" }}
                          />
                          <path
                            d="M556.54,181.26a73.06,73.06,0,0,1-9.1-3.79,72,72,0,0,1-8.92-6.09.09.09,0,0,0-.11.14,38.21,38.21,0,0,0,18.08,9.88C556.65,181.44,556.7,181.32,556.54,181.26Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M555.23,188c-3-1.3-8.13-3.6-15.59-10.33,0,0-.07,0,0,0a34.26,34.26,0,0,0,15.57,10.43C555.36,188.19,555.42,188.08,555.23,188Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M554.45,191.59c-4.94-2.39-7.75-4.52-12.18-8.19,0,0-.07,0,0,0,4.61,4.7,6.81,5.88,12.17,8.33C554.58,191.86,554.65,191.69,554.45,191.59Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M580.83,173.71l-9.72,26.9s25.36,5.33,35.53,1.52,23.61-23.81,30-35.49,3-21.5-13.36-8.48-24.27,18-25.42,18.26S580.83,173.71,580.83,173.71Z"
                            style={{ fill: "#a6a6a6" }}
                          />
                          <g style={{ opacity: "0.1" }}>
                            <path d="M604.4,195.89c-1,.47-1.79,1.06-3,1a13.85,13.85,0,0,0-3.39-.26,1.44,1.44,0,0,0-.76,2.35,6.87,6.87,0,0,0,9.25,0A1.91,1.91,0,0,0,604.4,195.89Z" />
                            <path d="M609.46,187.23c-1.37.43-2.46,1.48-3.81,2a34.49,34.49,0,0,1-3.78,1.31c-.93.25-1.47,1.77-.42,2.28a7.32,7.32,0,0,0,5.33.69c1.65-.42,4.14-1.45,4.93-3.05S611.44,186.6,609.46,187.23Z" />
                            <path d="M595.7,191.55a8.93,8.93,0,0,1-3.86-.71,2.09,2.09,0,1,0-1.78,3.74,7.51,7.51,0,0,0,6.35.18A1.71,1.71,0,0,0,595.7,191.55Z" />
                          </g>
                          <g style={{ opacity: "0.1" }}>
                            <path d="M631.94,166.06a2.17,2.17,0,0,0,2.34-1.87c.3-2.15-1.82-4.07-3.44-5.2s-3.85-2.06-5.83-1.15a1.71,1.71,0,0,0-.35,2.89c1,1,2.38,1.69,3.46,2.67S630.22,166,631.94,166.06Z" />
                            <path d="M636.56,166.73c-.6,1.11-1.27,2.29-2,3.52,0,0,0,0,0,0s0-.06,0-.08l0-.08a7.4,7.4,0,0,1-.43-.84,2.36,2.36,0,0,1-.09-1.77,1.81,1.81,0,0,1,2.42-.83A.69.69,0,0,1,636.56,166.73Z" />
                            <path d="M639.36,159.48a23.29,23.29,0,0,1-1.68,5c-.48-.73-1-1.47-1.52-2.16-1-1.21-3-2.75-3.11-4.4a1.11,1.11,0,0,1,.65-1.16C635.75,156,638,158.12,639.36,159.48Z" />
                          </g>
                          <path
                            d="M608.36,201.34c.84-1.16,6.19-2.67,20.5-21.75,2.92-3.89,5.21-7.79,8.1-11.47,0-.05.09,0,.07,0-1.39,2.66-3,5.23-4.6,7.75l.37-.33c1.08-.93,2.2-1.83,3.19-2.86.07-.08.18.05.1.12-1,1-1.92,2.08-2.9,3.09-.48.49-1,1-1.46,1.43-.2.17-.41.36-.63.53-15.33,21.39-21.89,22.67-22.62,23.55C608.4,201.54,608.29,201.44,608.36,201.34Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M576.87,200.62a63.6,63.6,0,0,1,2-6.27q1.05-3.06,2.14-6.11c1.48-4.1,2.86-8.26,4.6-12.26a.08.08,0,0,1,.15.05c-1.07,4.26-2.59,8.42-4,12.56q-1.1,3.12-2.28,6.2a54.23,54.23,0,0,1-2.44,5.9C577,200.78,576.85,200.71,576.87,200.62Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M580.75,173.44c2.52.26,12.55,2.23,15.07,2.48a5.16,5.16,0,0,0,3.24-.67c1.09-.61,19.24-13.22,21.24-14.73.09-.06.19.06.11.12-2.11,1.5-16.19,12.18-18.36,13.69a23.75,23.75,0,0,1-3,1.94,4.81,4.81,0,0,1-3.17.36c-2.38-.47-11.69-2.24-15-2.84-.06,0-.53,1.19-.59,1.18l-.14,0A5.47,5.47,0,0,1,580.75,173.44Z"
                            style={{ fill: "#263238" }}
                          />
                        </g>
                        <g id="freepik--character-2--inject-5">
                          <path
                            d="M577.4,443.69c-.23-2.17-25.09-55.74-27.34-57.18-.84-.56-8.86,2.61-18.44,6.71l-.29.13c-2,.84-38.43,10.64-38.43,10.64l16.16,35.06L547,428.1l.58-.29s18.69,16.25,21.32,17.57S577.65,445.85,577.4,443.69Z"
                            style={{ fill: "#f7a9a0" }}
                          />
                          <path
                            d="M524.4,395.39,541,429.82l6-1.73.59-.28s18.69,16.25,21.32,17.57,8.77.47,8.52-1.69-25.1-55.75-27.33-57.18c-.85-.56-8.87,2.6-18.45,6.71l-.29.13C530.83,393.57,528.14,394.34,524.4,395.39Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M577.62,444c-.24-2.19-25.16-56.38-27.41-57.84-.86-.56-9,2.61-18.64,6.71l16,35S566.35,444.3,569,445.64,577.85,446.14,577.62,444Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M575.09,444.18c-4.4-9-21.3-45.62-25-54.84,0-.07,0-.09,0,0,4.56,8.8,21.16,45.58,25.06,54.79C575.32,444.3,575.18,444.37,575.09,444.18Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M565.45,443.05a8.05,8.05,0,0,1-.29-6.46,7.86,7.86,0,0,1,3.92-4.26c.06,0,.1.08,0,.11A9.3,9.3,0,0,0,565.56,443C565.59,443.07,565.48,443.12,565.45,443.05Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M550.05,430.92c-1.72-3.61-2.37-8.41-.44-12,.08-.14.27,0,.27.1a55.52,55.52,0,0,0,.65,11.8A.25.25,0,0,1,550.05,430.92Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M552.44,433.23c-1.72-3.62-2.38-8.42-.44-12.05.07-.14.27,0,.26.1a54.88,54.88,0,0,0,.66,11.8A.25.25,0,0,1,552.44,433.23Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M554.82,435.53c-1.72-3.61-2.37-8.42-.44-12,.08-.14.27,0,.27.1a55.55,55.55,0,0,0,.65,11.8A.25.25,0,0,1,554.82,435.53Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M557.21,437.83c-1.72-3.61-2.38-8.41-.44-12,.07-.14.27,0,.26.1a55.52,55.52,0,0,0,.65,11.8A.25.25,0,0,1,557.21,437.83Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M542.56,395.62c-1.86-4.08,4.48-7,6.35-2.89S544.43,399.72,542.56,395.62Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M547.35,436.57c1.63-3.12,1.85-6.84,2.45-10.26.07-.35-.29-.56-.59-.52a.11.11,0,0,0-.16-.06,21,21,0,0,0-7.78,7.58c-1.06,1.86-1.48,4.87.89,6S546.4,438.4,547.35,436.57Zm-2.93,1.56c-4.12,1.45-2.72-3.51-1.89-4.85a22.27,22.27,0,0,1,1.85-2.46c1.36-1.63,2.93-3,4.44-4.53-.4,1.66-.65,3.34-1,5C547.43,433.29,546.69,437.32,544.42,438.13Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M540.8,413.88c-2.25,1.38-1.51,4.32-.27,6.07a21.1,21.1,0,0,0,8.52,6.74.11.11,0,0,0,.15-.08c.3,0,.64-.23.54-.58-1-3.33-1.55-7-3.49-9.95C545.11,414.36,542.92,412.58,540.8,413.88Zm6.47,7.39c.5,1.63.93,3.27,1.49,4.88a62.88,62.88,0,0,1-4.89-4,22.17,22.17,0,0,1-2.08-2.25c-1-1.25-2.87-6,1.38-5C545.51,415.4,546.66,419.33,547.27,421.27Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M450.14,289.6s.67,21,3.82,31.35c0,0,3.43,1.8,4.46,2.45,0,0-26.09,62.47-24.6,86.51.48,7.88,8.87,17.85,17.88,23.46,16,9.93,89.29,4.2,89.29,4.2l-11.3-46.81s-44.16,2.74-45.4.07c-1.58-3.38,8.22-29.66,16-51,.79-2.15,8.67-10.11,7.75-24.51a74.47,74.47,0,0,0-6.78-25.71Z"
                            style={{ fill: "#455a64" }}
                          />
                          <path
                            d="M520.71,396c-10.73-.2-19.49.71-30.23.72h-7.1a12.05,12.05,0,0,1-2.81-.25,3.48,3.48,0,0,1-2.15-1.28c-.72-1.07-.33-2.42-.09-3.57q.81-3.79,1.82-7.53c2.7-10.15,6.24-20.06,9.56-30q2.57-7.69,5.14-15.38c.41-1.25.83-2.5,1.35-3.7a31.79,31.79,0,0,1,1.69-3.22,30.34,30.34,0,0,0,2.92-6.34c2.9-9.55.11-19.43-3.29-28.44-.45-1.21-.92-2.41-1.42-3.61,0-.08-.16,0-.13,0,3.09,9.52,6.78,19.41,4.71,29.56a24.45,24.45,0,0,1-2.49,6.83c-.59,1.09-1.24,2.14-1.82,3.24a27.81,27.81,0,0,0-1.5,3.46c-1.82,5-3.43,10.17-5.14,15.25-3.39,10.1-7,20.18-9.79,30.47-.7,2.56-1.35,5.13-1.93,7.72-.43,1.91-1.38,4.51.28,6.09,1.22,1.16,3.14,1.31,4.73,1.32,2.68,0,5.36,0,8,0,10.89,0,28.31-.95,29.66-1A.19.19,0,0,0,520.71,396Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M532.72,435.39c-1.05-5.46-2.06-11-3.27-16.4s-2.52-10.88-3.93-16.28c-.4-1.53-.81-3-1.22-4.57-.19-.73-.39-1.46-.6-2.18a20.35,20.35,0,0,0-.67-2.18c0-.08-.14,0-.13,0a30,30,0,0,0,.74,4.2c.27,1.32.52,2.64.79,4q.84,4.06,1.73,8.13c1.18,5.42,2.53,10.8,3.91,16.17q1.18,4.59,2.38,9.16C532.49,435.61,532.76,435.57,532.72,435.39Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M442.76,366.14l55.27-20,2.31-6.3c.79-2.15,8.66-10.11,7.75-24.51a74.59,74.59,0,0,0-6.77-25.71H450.14s.67,21,3.82,31.34c0,0,3.44,1.82,4.46,2.46C458.42,323.4,449.81,344,442.76,366.14Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M358.73,446.2c2.09.63,61.12-1.32,63.32-2.82.84-.56,1.06-9.18,1-19.6v-.33c0-2.14-.93-38.15-.93-38.15l-41.32,1.24L385,424.29l0,.64s-22.27,10.86-24.51,12.77S356.65,445.59,358.73,446.2Z"
                            style={{ fill: "#f7a9a0" }}
                          />
                          <path
                            d="M358.73,446.21c2.09.62,61.12-1.33,63.32-2.83.84-.57,1.06-9.18,1-19.6v-.33c0-.59,0-3.51-.17-7.93L384.17,417l.8,7.29,0,.64s-22.27,10.86-24.51,12.77S356.65,445.58,358.73,446.21Z"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M358.28,446.46c2.11.63,61.72-1.36,63.94-2.87.85-.57,1.07-9.27,1-19.78L384.82,425s-22.49,11-24.75,12.89S356.18,445.83,358.28,446.46Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M359.06,444.05c10-.58,50.31-2,60.22-1.78.08,0,.08.05,0,.06-9.88.79-50.22,1.85-60.22,1.88C358.85,444.21,358.85,444.06,359.06,444.05Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M363.83,435.59a8,8,0,0,1,6.06,2.24,7.79,7.79,0,0,1,2.41,5.26c0,.06-.11.07-.12,0a9.28,9.28,0,0,0-8.34-7.38A.07.07,0,0,1,363.83,435.59Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M381,426.1c4-.19,8.69,1.07,11.28,4.25.1.13-.08.27-.2.21a55.47,55.47,0,0,0-11.13-4A.25.25,0,0,1,381,426.1Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M377.93,427.4c4-.18,8.68,1.07,11.27,4.26.1.12-.07.27-.2.21a54.65,54.65,0,0,0-11.13-4A.26.26,0,0,1,377.93,427.4Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M374.88,428.71c4-.19,8.68,1.07,11.27,4.26.11.12-.07.26-.19.2a55.44,55.44,0,0,0-11.13-4A.25.25,0,0,1,374.88,428.71Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M371.83,430c4-.19,8.68,1.07,11.28,4.25.1.13-.08.27-.2.21a55.47,55.47,0,0,0-11.13-4A.25.25,0,0,1,371.83,430Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M416.42,432.86c4.49-.13,4.71,6.84.21,7S411.92,433,416.42,432.86Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M376.81,421.42c2.25,2.71,5.6,4.36,8.51,6.23a.49.49,0,0,0,.71-.34c.07,0,.13,0,.12-.12a21.1,21.1,0,0,0-4-10.11c-1.31-1.7-3.92-3.26-5.88-1.51S375.5,419.84,376.81,421.42Zm-.3-3.31c.26-4.36,4.29-1.15,5.21.14a24.14,24.14,0,0,1,1.55,2.65,62.3,62.3,0,0,1,2.45,5.85c-1.38-1-2.82-1.89-4.23-2.84C379.81,422.77,376.38,420.52,376.51,418.11Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M400.27,424.16c-.4-2.6-3.4-3.06-5.49-2.59a21,21,0,0,0-9.51,5.24.11.11,0,0,0,0,.17.49.49,0,0,0,.33.72c3.44.42,7.06,1.29,10.53.64C398.16,428,400.65,426.62,400.27,424.16ZM391,427.27c-1.7-.17-3.37-.41-5.08-.52,1.86-1,3.67-2.1,5.63-2.93a21.1,21.1,0,0,1,2.88-1.05c1.53-.41,6.69-.31,4.1,3.21C397.05,427.92,393,427.46,391,427.27Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M381.6,421.41h46.23s-8.23-62.93-5.49-67c1.2-1.8,61.21,4.21,78.77-14.81,16-17.38-.29-50-.29-50H451.57s-1,14-3.66,19.55c-1.13,2.39-56.16-1-64.77,14.7C371.63,344.86,381.6,421.41,381.6,421.41Z"
                            style={{ fill: "#455a64" }}
                          />
                          <path
                            d="M423,412.62c-5.22-.16-10.45-.36-15.67-.36s-10.47.11-15.7.32c-1.48.06-5.84.27-6.55.32a16.84,16.84,0,0,0-2.13.18.07.07,0,0,0,0,.14c1.13.2,13,.33,15.56.34,5.2,0,10.4-.14,15.6-.33,2.95-.1,5.91-.21,8.86-.33C423.11,412.89,423.13,412.62,423,412.62Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M453.58,304.68c.2-1.48.4-3,.57-4.44.4-3.37.75-6.78.85-10.18,0-.26-.37-.24-.4,0-.31,2.62-.56,5.26-.85,7.88s-.52,5.25-1,7.83c-.15.77-.48,2.07-1.47,2.09-1.34,0-1.59-1.78-1.7-2.76a44,44,0,0,1-.14-7.35c.15-2.79.5-5.58.81-8.35,0-.1-.16-.12-.18,0-1.14,5.4-2.24,11.07-1.29,16.59a3.05,3.05,0,0,0,1.79,2.61h.05a.32.32,0,0,0,0,.09c0,.16,0,.31,0,.47v.39c0,.28,0,.55,0,.83a.2.2,0,0,0,.4,0,.17.17,0,0,0,.15-.13,4.36,4.36,0,0,0,0-1.61,2,2,0,0,0,1.64-.88A7,7,0,0,0,453.58,304.68Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M448.67,308.68a77.76,77.76,0,0,1,10.6,8.72c.13.12,0,.33-.17.22-3.61-2.79-7.32-5.53-10.77-8.51A.27.27,0,0,1,448.67,308.68Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M489.16,311.36a21,21,0,0,1-3.17-.24c-.94-.18-1.86-.44-2.77-.71-1.71-.5-3.78-1.1-5-2.45a18.05,18.05,0,0,1-2.86-4.92,20,20,0,0,1-1.67-5.87c0-.09-.15-.08-.14,0a30.42,30.42,0,0,0,1,6.21,19.57,19.57,0,0,0,1.17,2.94,8.17,8.17,0,0,0,7.2,5.23,17.39,17.39,0,0,0,6.27,0C489.34,311.57,489.29,311.36,489.16,311.36Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M417.35,351.39a2.72,2.72,0,0,1,2.27-2.15,23.09,23.09,0,0,1,4-.08c3.08,0,6.16.07,9.24.07,12.13,0,24.37-.31,36.3-2.7a85.32,85.32,0,0,0,17-5.12c4.63-2,9.26-4.76,12.14-9,3.32-4.91,3.58-11.32,3.47-17.06a65.29,65.29,0,0,0-3-18.24c-.47-1.51-1-3-1.6-4.44,0-.1.1-.17.14-.08a63,63,0,0,1,4.81,17.61,60.08,60.08,0,0,1,.41,9,34.31,34.31,0,0,1-1.14,8.74c-3.14,10.73-15.17,15.17-24.89,17.89-11.71,3.28-23.92,4.19-36,4.37-6.09.1-12.18,0-18.26-.08-1.16,0-3.08-.34-3.77.88a6.7,6.7,0,0,0-.54,2.21c-.14.86-.23,1.72-.29,2.58a74.9,74.9,0,0,0,.12,9.71q.58,9.86,1.37,19.7c.52,6.59,1.26,13.18,1.74,19.77.11,1.62.27,3.23.43,4.85,0,.18-.31.22-.33,0-1.69-13-2.9-26.13-3.76-39.25-.21-3.24-.45-6.49-.54-9.74A35.29,35.29,0,0,1,417.35,351.39Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M447,353.8a99,99,0,0,0,12.28-.89c3.83-.48,7.66-1,11.47-1.65,6.63-1.13,13.4-2.38,19.66-4.9a34.47,34.47,0,0,0,9.47-5.49.08.08,0,0,1,.11.11c-4.74,4.6-10.74,7.29-17.05,9a138.54,138.54,0,0,1-22.07,3.88,119,119,0,0,1-13.88.4A.24.24,0,0,1,447,353.8Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M448.48,231c.28,3.52.55,7,1,10.55.26,2.14.65,4.22,1.11,6.31a14.51,14.51,0,0,0,2.83,1.62c-.12-.53-.24-1.06-.35-1.57-.56-2.5-.89-5-1.2-7.53,0-.08.12-.08.13,0,.4,2.59,1,5.17,1.63,7.72q.21.82.45,1.65a19.91,19.91,0,0,0,2.9.88c-.17-.6-.32-1.21-.47-1.81-.36-1.4-.69-2.8-1-4.22a78.19,78.19,0,0,1-1.23-8.47c0-.11.15-.11.17,0,.44,2.89,1,5.78,1.63,8.65.3,1.35.62,2.71,1,4.05.17.64.36,1.28.55,1.93a33.63,33.63,0,0,0,5.46.58c5.24.14,10.49-1.53,15.22-3.73a28.18,28.18,0,0,0,10.6-8.34,26.76,26.76,0,0,1-4.41-6.19c0-.08.06-.14.1-.07,1,1.37,2,2.7,3.11,4,.52.6,1.05,1.17,1.59,1.75l.12-.17c.27-.37.55-.77.82-1.19a41.69,41.69,0,0,1-2.94-3.82,38.45,38.45,0,0,1-3.5-5.86.11.11,0,0,1,.19-.12c1.26,1.83,2.48,3.68,3.76,5.49.91,1.27,1.9,2.48,2.84,3.73a5.73,5.73,0,0,0,.86-4.37,10.78,10.78,0,0,0-2-3.37,41.92,41.92,0,0,1-2.39-3.62c-1.53-2.58-8.53-23.44-15.8-21.54,0-.06-13.25-7.31-19.09-.62-9.27,10.63-6.53,35.91-5.7,38.66a11.24,11.24,0,0,0,3.32,5.23c-.37-1.76-.63-3.56-.84-5.3a107.21,107.21,0,0,1-.58-10.89A.08.08,0,1,1,448.48,231Z"
                            style={{ fill: "#455a64" }}
                          />
                          <path
                            d="M462.65,251.72c-8.63,19-22.3,37.78-26.84,39.43-6.22,2.26-34.92-14.37-42.27-17.82-3-1.39,12.73-23.53,15.62-21.53,7.15,5,22.31,12.78,22.66,13,.72.51,18.26-14.94,23.21-19.78C466.06,234.27,466.93,242.3,462.65,251.72Z"
                            style={{ fill: "#f7a9a0" }}
                          />
                          <path
                            d="M414.49,256.66s-4.22-6.08-6.67-8.34-14.65-7.34-15.9-4.76c-1.61,3.32,4.86,7.64,8.31,9.34,0,0-3.73,7.69.24,11.8S414.49,256.66,414.49,256.66Z"
                            style={{ fill: "#f7a9a0" }}
                          />
                          <path
                            d="M395.82,274.46c-2.59-1.17-14-7.56-16.76-10s-10.23-10.22-8.54-12.53,4.05-.23,4.05-.23-2.63-3.77-.72-5.94,5.48,1.19,5.48,1.19-2.42-4.06-.35-6.1,5.08,2,5.08,2-2.39-3.61,0-4.57c2.89-1.16,6.54,6,9.81,8.51.74.57,15.86,10.51,15.86,10.51Z"
                            style={{ fill: "#f7a9a0" }}
                          />
                          <path
                            d="M383.8,242.42c2.69,5.26,4.78,7.09,9.79,10.05.1.06,0,.22-.07.17-5.17-2.45-8.12-4.38-10-10.1C383.44,242.26,383.67,242.17,383.8,242.42Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M379.13,246.48c3.28,5.22,5.52,7.22,10.54,10.71a.08.08,0,0,1-.08.13c-5.21-3-8.11-5-10.7-10.63C378.77,246.43,379,246.24,379.13,246.48Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M374.83,251.82c3.54,4.82,5.91,7.13,11.21,9.88a.11.11,0,0,1-.09.21c-5.68-2.29-8.66-5.15-11.25-10C374.52,251.61,374.61,251.52,374.83,251.82Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M391.78,244.62c.72,4.09,5.38,6,8.6,7.93a.34.34,0,0,1,.07.56c-1.35,3.32-2.28,8.41-.21,11.58a.09.09,0,0,1-.14.11c-2.68-3.1-2.17-8.18-.46-11.72-3.33-1.9-7.93-4.05-7.9-8.46C391.74,244.6,391.77,244.59,391.78,244.62Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M454,273.92l-12.37-20A152.21,152.21,0,0,1,455,241.9c8-6.38,12.52-3.92,8.85,9.35A87.57,87.57,0,0,1,454,273.92Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M454,273.92l-12.37-20A152.21,152.21,0,0,1,455,241.9c8-6.38,12.52-3.92,8.85,9.35A87.57,87.57,0,0,1,454,273.92Z"
                            style={{ opacity: "0.1" }}
                          />
                          <path
                            d="M444.53,252.16c1.08,1.37,2,2.92,2.93,4.38s1.85,2.78,2.72,4.2q2.73,4.44,5.26,9c0,.05-.05.11-.08.06q-2.87-4.27-5.59-8.63c-.91-1.44-1.78-2.9-2.65-4.37s-1.9-3-2.68-4.54A.05.05,0,0,1,444.53,252.16Z"
                            style={{ fill: "#263238" }}
                          />
                          <rect
                            x="172.96"
                            y="247.81"
                            width="392.86"
                            height="31.64"
                            transform="translate(15.66 -20.66) rotate(3.27)"
                            style={{ fill: "#455a64" }}
                          />
                          <rect
                            x="198.83"
                            y="254.6"
                            width="62.94"
                            height="2.15"
                            transform="matrix(1, 0.06, -0.06, 1, 14.97, -12.73)"
                            style={{ fill: "#a6a6a6" }}
                          />
                          <rect
                            x="198.15"
                            y="268.41"
                            width="191.45"
                            height="2.15"
                            transform="translate(15.87 -16.34) rotate(3.27)"
                            style={{ fill: "#407BFF" }}
                          />
                          <rect
                            x="413.66"
                            y="255.73"
                            width="28.34"
                            height="2.15"
                            transform="translate(15.36 -24.01) rotate(3.27)"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="180.4"
                            y="241.83"
                            width="8.75"
                            height="2.15"
                            transform="translate(14.17 -10.16) rotate(3.27)"
                            style={{ fill: "#a6a6a6" }}
                          />
                          <rect
                            x="199.42"
                            y="244.15"
                            width="51.73"
                            height="2.15"
                            transform="translate(14.37 -12.46) rotate(3.27)"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="265.15"
                            y="260.87"
                            width="149.54"
                            height="2.15"
                            transform="translate(15.51 -18.98) rotate(3.27)"
                            style={{ fill: "#ebebeb" }}
                          />
                          <rect
                            x="256.24"
                            y="250.19"
                            width="149.47"
                            height="2.15"
                            transform="translate(14.89 -18.49) rotate(3.27)"
                            style={{ fill: "#407BFF" }}
                          />
                          <rect
                            x="179.82"
                            y="251.97"
                            width="8.75"
                            height="2.15"
                            transform="translate(14.75 -10.1) rotate(3.27)"
                            style={{ fill: "#ebebeb" }}
                          />
                          <path
                            d="M506.08,300.06c-1.68,1.11-58.57.47-58.57.47l2.29-21.46S445.1,274,445,268c-.19-8.08,9.22-22.93,10.11-24,3.6-4.14,7.39-5.64,11.58-4.71C484.12,243.18,506.08,300.06,506.08,300.06Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M463.71,275a35.92,35.92,0,0,0-6.37,1.2c-1,.32-2.06.69-3.08,1.1-.51.2-1,.37-1.53.55a5.61,5.61,0,0,1-1.65.36s-.05.09,0,.1a10.41,10.41,0,0,0,1.58,0,9.11,9.11,0,0,0,1.51-.34c1.05-.3,2.1-.67,3.15-1,2.13-.65,4.26-1.3,6.41-1.75C463.83,275.23,463.81,275,463.71,275Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M468.94,277.49a39,39,0,0,0-5.29-.41,26.34,26.34,0,0,0-2.65.16c-.42,0-.84.1-1.26.16s-.92.21-1.39.27c0,0-.05.1,0,.09.44,0,.89,0,1.33,0l1.32,0c.88,0,1.76,0,2.65,0,1.76,0,3.52-.07,5.29,0C469,277.67,469,277.5,468.94,277.49Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M466.36,241.49c-.3,1-5.42,7.07-9.91,6.57-1.46-.17-.91-8.19-.91-8.19l-.1-.6-1.32-8.43,11.62-6.37S466.47,241.08,466.36,241.49Z"
                            style={{ fill: "#f7a9a0" }}
                          />
                          <path
                            d="M454.12,230.84l1.32,8.42A17.11,17.11,0,0,0,466,230.15c-.12-2.88-.22-5.28-.23-5.63a.16.16,0,0,1,0,0l-1.47.73Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M444.89,215.51c-4.94,14.12,3,18.67,6,19.74,2.77,1,12.31,3.89,18.68-9.65s1.37-20.3-4.84-22.84S449.83,201.38,444.89,215.51Z"
                            style={{ fill: "#f7a9a0" }}
                          />
                          <path
                            d="M447.16,214.32a8.87,8.87,0,0,0,1,0,1.8,1.8,0,0,0,1.05-.25.56.56,0,0,0,.1-.65,1.3,1.3,0,0,0-1.23-.51,2,2,0,0,0-1.32.48A.57.57,0,0,0,447.16,214.32Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M457,217.71a9.9,9.9,0,0,1-.93-.44,1.71,1.71,0,0,1-.87-.64.54.54,0,0,1,.15-.63,1.34,1.34,0,0,1,1.34,0,1.93,1.93,0,0,1,1,.95A.57.57,0,0,1,457,217.71Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M454.09,219.14s.06.07.05.11c-.32,1-.53,2.13.26,2.72,0,0,0,.06,0,.05C453.34,221.55,453.63,220,454.09,219.14Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M455.27,218.38c1.6.35.79,3.54-.7,3.21S453.92,218.09,455.27,218.38Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M455.85,218.71c.23.25.42.64.75.76s.76-.12,1.09-.38c0,0,.06,0,.05,0-.15.62-.54,1.18-1.22,1.1s-.91-.72-.91-1.37C455.62,218.75,455.76,218.61,455.85,218.71Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M448.73,217.51s-.08,0-.09.07c-.22,1-.63,2.1-1.61,2.21a0,0,0,0,0,0,.06C448.16,220,448.69,218.49,448.73,217.51Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M448.11,216.26c-1.56-.51-2.48,2.65-1,3.12S449.42,216.69,448.11,216.26Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M447.39,216.28c-.3.09-.64.33-.94.26s-.51-.49-.63-.89c0,0-.05,0-.06,0-.19.59-.18,1.28.37,1.56s1-.14,1.36-.7C447.54,216.44,447.51,216.24,447.39,216.28Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M452.09,227.87c-.29.18-.59.45-1,.41a2.81,2.81,0,0,1-1-.48,0,0,0,0,0-.05,0,1.36,1.36,0,0,0,1.15.8,1.08,1.08,0,0,0,1-.72C452.21,227.88,452.13,227.84,452.09,227.87Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M448.84,223.07s-.6,1.42-.79,2.11c0,.06.14.14.38.22h0A3.41,3.41,0,0,0,452,225c.07-.05,0-.14-.07-.12a5.06,5.06,0,0,1-3.24.05c0-.2,1.1-2.38,1-2.42a6,6,0,0,0-1.67-.07c1.16-3,2.79-5.76,3.9-8.74,0-.11-.11-.19-.17-.1a52.36,52.36,0,0,0-4.6,9.24C447,223.25,448.53,223.11,448.84,223.07Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M448.89,225.26a3.82,3.82,0,0,0,1.14,1.58,1.77,1.77,0,0,0,1,.35c.79,0,1-.64,1-1.25a4.22,4.22,0,0,0-.07-1A5,5,0,0,1,448.89,225.26Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M450,226.84a1.77,1.77,0,0,0,1,.35c.79,0,1-.64,1-1.25A1.78,1.78,0,0,0,450,226.84Z"
                            style={{ fill: "#ff9bbc" }}
                          />
                          <path
                            d="M469.14,225c-1.53-.52-4.42-5.93-2.47-13.5,0,0-1.28,6.92-1,8.05s-1.61-3-.13-9.17a25.25,25.25,0,0,1-7.12,1.52c-3.09,0-4.84-.49-5-.75s4.44-.44,5.95-1.44c0,0-8.61,1.45-12.21.75-.41-.08,2-7.56,8.45-9.61s13.35,3.11,15.05,6c0,0,2.62,1.13,4.47,6S470.79,225.53,469.14,225Z"
                            style={{ fill: "#455a64" }}
                          />
                          <path
                            d="M467,225.9s4.32-3.72,6.09-2.06-2.29,7.6-4.93,7.88a2.52,2.52,0,0,1-2.95-2.15Z"
                            style={{ fill: "#f7a9a0" }}
                          />
                          <path
                            d="M471.84,225.51s0,.07,0,.07a6.38,6.38,0,0,0-4.2,3.06,1.4,1.4,0,0,1,2.12.15s0,.1-.07.08a1.53,1.53,0,0,0-1.79.1,8.19,8.19,0,0,0-1.14,1.14c-.11.13-.37,0-.26-.18l0,0C467,227.73,469.47,225.14,471.84,225.51Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M473.06,259c-6,19.95-14.61,37-18.88,39.2-5.86,3.07-28.39,5-36,4.92-3.28-.05-3-25.47.47-25.44,8.95.08,25.25-1.75,25.63-1.55.79.4,16.09-17.26,20.35-22.73C474.1,241.25,476,249.09,473.06,259Z"
                            style={{ fill: "#f7a9a0" }}
                          />
                          <path
                            d="M452.87,267.12c-2,2.51-4,4.94-6.19,7.28a18.54,18.54,0,0,1-1.73,1.7,1.43,1.43,0,0,1-.68.36l-.61.05-1.19.08-4.76.33c-3.18.16-6.35.36-9.53.48s-6.36.25-9.54.28c3.16-.35,6.33-.6,9.5-.85l9.52-.66,4.77-.26,1.18-.07.59,0s.21-.11.35-.21c.58-.48,1.15-1,1.72-1.59C448.51,271.76,450.67,269.42,452.87,267.12Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M400,280c1.62-.59,1.32-1.44-1.59-2.41S383.15,275.25,384,271s18.23-2.12,23-.14,11.69,6.84,11.69,6.84C415.17,277.94,406.81,279.37,400,280Z"
                            style={{ fill: "#f7a9a0" }}
                          />
                          <path
                            d="M418.17,303.12c-10,.62-22.41,1.61-32.15-3.63a5.52,5.52,0,0,1-2.5-2.58c-4.41-2.28-4.66-5-4.66-5-3.46-3.37-3.33-6.24-3.33-6.24s-5.15-2.72-4-6.11c1.26-3.8,8.24.77,13.62.94,12.32.37,29.94-2.54,33.51-2.78Z"
                            style={{ fill: "#f7a9a0" }}
                          />
                          <path
                            d="M397.77,289.93A80.83,80.83,0,0,1,387,289a79.59,79.59,0,0,1-11.34-3.41.09.09,0,1,0-.08.17,41.81,41.81,0,0,0,22.18,4.34C397.94,290.08,398,289.93,397.77,289.93Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M398.62,297.4c-3.51-.38-9.69-1.07-19.71-5.64,0,0-.07,0,0,.06a37.64,37.64,0,0,0,19.73,5.74C398.83,297.57,398.86,297.42,398.62,297.4Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M399,301.42c-6-.86-9.6-2.16-15.46-4.53,0,0-.06,0,0,.06,6.37,3.39,9.07,3.89,15.48,4.68C399.23,301.65,399.24,301.45,399,301.42Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M467.46,282.16l-14.94-18.1a150.53,150.53,0,0,1,11.67-13.77c7-7.39,11.88-5.56,10,8.08A87.42,87.42,0,0,1,467.46,282.16Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M455.16,261.87c1.26,1.22,2.35,2.63,3.5,3.95s2.2,2.51,3.26,3.8q3.3,4,6.42,8.17s0,.11-.08.07q-3.4-3.86-6.7-7.8c-1.09-1.31-2.15-2.64-3.21-4s-2.28-2.69-3.27-4.14C455.05,261.89,455.12,261.83,455.16,261.87Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M465.34,279.58c.09.06,2.05,2.38,2.07,2.42,1.07-3,2.22-5.87,3.22-8.92a96.27,96.27,0,0,0,2.5-9.47c.4-1.82.74-3.66,1-5.5,0,0,.06,0,.06,0-.14,1.61-.33,3.21-.58,4.8.23-.77.43-1.56.6-2.36,0-.08.13-.05.12,0a12.36,12.36,0,0,1-.9,3.37,71.49,71.49,0,0,1-3.7,13.45,37.57,37.57,0,0,1-2.3,5.19s-2.15-2.85-2.19-2.94S465.3,279.56,465.34,279.58Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M453.73,262c.52-.69,1-1.35,1.59-2l.34-.41a29.5,29.5,0,0,1,1.59-2.79,0,0,0,1,1,.05,0,23.84,23.84,0,0,1-1.16,2.17c.84-1,1.71-2,2.64-2.91,0,0,.07,0,.05,0-1,1.39-2.1,2.71-3.14,4.07-.51.65-3.08,3.83-3.06,3.87s1.36,1.77,1.4,1.9,0,.08,0,0l-1.76-2S453.3,262.55,453.73,262Z"
                            style={{ fill: "#263238" }}
                          />
                        </g>
                        <g id="freepik--character-1--inject-5">
                          <path
                            d="M73.19,379.84s.1,43.72.1,43.75c.25,8.07.61,15.14,1.14,18.78a.13.13,0,0,0,0,.06,5.75,5.75,0,0,0,.67,2.48l0,0c2.45,1.55,67,1.44,69.28.68s.26-7.24-2.25-9.23-27.26-13-27.26-13l-.5-43.68Z"
                            style={{ fill: "#ad6359" }}
                          />
                          <path
                            d="M73,414.92s.31,8.64.31,8.67c.25,8.07.61,15.14,1.14,18.78a.13.13,0,0,0,0,.06,11.64,11.64,0,0,0,.67,2.48l0,0c2.45,1.55,67,1.44,69.28.68s.26-7.24-2.25-9.23-27.26-13-27.26-13l-.2-8.8Z"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M118.88,423.31c-4.32-.59-9.52.33-12.64,3.53-.12.13.06.3.2.25a59.86,59.86,0,0,1,12.45-3.24A.27.27,0,0,0,118.88,423.31Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M122.06,425c-4.32-.59-9.52.33-12.64,3.53-.12.13.06.3.2.25a59.86,59.86,0,0,1,12.45-3.24A.27.27,0,0,0,122.06,425Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M125.24,426.73c-4.32-.59-9.52.33-12.64,3.53-.12.13.06.3.2.25a59.86,59.86,0,0,1,12.45-3.24A.27.27,0,0,0,125.24,426.73Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M144.44,445.64c-2.25.77-66.82.88-69.28-.68-1-.58-1.51-10-1.87-21.37v-.36l41.65-.54v.71s24.73,11,27.26,13S146.7,444.89,144.44,445.64Z"
                            style={{ fill: "#37474f" }}
                          />
                          <path
                            d="M73.28,423.22v.37c.36,11.38.92,20.79,1.87,21.37,1.11.7,15.12,1.07,30.25,1.19,18.1.14,37.81-.09,39-.5,2.25-.76.24-7.25-2.26-9.24s-27.26-13-27.26-13l0-.7-13.9.17Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M143.71,443.14c-10.89-.25-54.81-.23-65.59.36-.09,0-.09.06,0,.06,10.78.49,54.71.11,65.59-.24C143.94,443.31,143.94,443.15,143.71,443.14Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M101.05,422.87c1.22,6.95,3,17.18,4.36,23.28,18.1.14,37.81-.09,39-.5,2.25-.76.24-7.25-2.26-9.24s-27.26-13-27.26-13l0-.7Z"
                            style={{ opacity: "0.1" }}
                          />
                          <path
                            d="M69.54,423.93l46.71-.85s.47-79.1,0-104.46c-.57-29-4.61-115.79-4.61-115.79l-34.91,1s-8.84,19.4-2.89,40.79l3.62,77.47Z"
                            style={{ fill: "#37474f" }}
                          />
                          <path
                            d="M72.78,415.66a32.87,32.87,0,0,1,3.71-.4c1.38-.14,2.75-.28,4.13-.38,2.65-.18,5.31-.3,8-.39,5.36-.17,10.72-.27,16.09-.25,3,0,6.1.05,9.15.14a.1.1,0,0,1,0,.19c-5.31.34-10.62.57-15.94.82s-10.63.5-15.94.54c-1.52,0-3,0-4.57,0s-3.08.08-4.58-.1C72.72,415.82,72.67,415.68,72.78,415.66Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M111.49,372.59c.2-12.59.17-28.18.17-40.77q0-37.76-1.54-75.5c-.57-14.12-1.34-28.22-2.15-42.33,0-.16.24-.15.25,0,2,25.23,3.24,50.53,4,75.83s1,53.36.43,78.53c-.31,14.13-.78,28.27-1.72,42.37a.1.1,0,0,1-.19,0C110.93,398,111.29,385.3,111.49,372.59Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M123.25,382.41s1.52,42.2,1.52,42.23c.25,8.08.61,15.15,1.14,18.79a.13.13,0,0,0,0,.06,5.55,5.55,0,0,0,.68,2.48s0,0,0,0c2.46,1.55,67,1.44,69.28.68s.26-7.24-2.25-9.23-27.26-13-27.26-13l-1.92-42.18Z"
                            style={{ fill: "#ad6359" }}
                          />
                          <path
                            d="M124.46,416s.31,8.63.31,8.66c.25,8.08.61,15.15,1.14,18.79a.13.13,0,0,0,0,.06,10.79,10.79,0,0,0,.68,2.48s0,0,0,0c2.46,1.55,67,1.44,69.28.68s.26-7.24-2.25-9.23-27.26-13-27.26-13l-.2-8.8Z"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M170.36,424.37c-4.31-.59-9.51.32-12.63,3.53-.12.13.05.3.19.25a60.19,60.19,0,0,1,12.45-3.24A.27.27,0,0,0,170.36,424.37Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M173.54,426.08c-4.31-.59-9.51.32-12.63,3.53-.13.13.05.3.19.25a60.19,60.19,0,0,1,12.45-3.24A.27.27,0,0,0,173.54,426.08Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M176.72,427.79c-4.31-.59-9.52.32-12.63,3.53-.13.13,0,.3.19.25a59.86,59.86,0,0,1,12.45-3.24A.27.27,0,0,0,176.72,427.79Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M195.93,446.7c-2.26.77-66.83.87-69.29-.69-.94-.57-1.51-10-1.86-21.37,0-.11,0-.23,0-.35l41.66-.54,0,.71s24.74,11,27.26,13S198.18,446,195.93,446.7Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M195.19,444.2c-10.88-.25-54.81-.23-65.59.35-.09,0-.09.07,0,.07,10.78.48,54.71.11,65.59-.24C195.42,444.37,195.42,444.2,195.19,444.2Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M98.19,247.93s20.82,59.84,21.47,70.93c.56,9.45,2,106.57,2,106.57l48.5-1.05s-6.83-98.89-7.86-108.73c-1.92-18.4-20.38-68.54-33.18-113.3l-51.37,1.42s1.11,23.59,12.32,40.37C90.1,244.14,95,246.26,98.19,247.93Z"
                            style={{ fill: "#37474f" }}
                          />
                          <path
                            d="M124,416.42c5.6-.32,11.4-.65,17-.66s11.13-.09,16.69.09c3.16.1,6.3.12,9.45.34a.09.09,0,0,1,0,.17c-5.59.48-11.21.57-16.82.68s-11.12.19-16.69.09c-3.15-.05-6.3-.13-9.45-.26C123.87,416.86,123.68,416.43,124,416.42Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M129.5,230.8c1.89,5.73,3.51,11.54,5.22,17.32s3.44,11.65,5.15,17.48c3.3,11.27,6.57,22.57,9.13,34a207.57,207.57,0,0,1,4.84,35c.59,12,.67,24.06.93,36.08s.48,24.18.6,36.27c0,1.51,0,3,0,4.52a.12.12,0,0,1-.23,0c-.65-12-.81-24.07-1.11-36.09s-.46-24.07-.9-36.09a215.32,215.32,0,0,0-4.07-35.53c-2.34-11.52-5.51-22.85-8.78-34.13-1.86-6.43-3.75-12.86-5.61-19.3s-3.86-12.94-5.53-19.48A.18.18,0,0,1,129.5,230.8Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M110.21,248.76a43.57,43.57,0,0,1-7.22-.45,70.76,70.76,0,0,1-7-1.75,56.43,56.43,0,0,0-6.87-.93,23.57,23.57,0,0,1-6.76-1.81c-.1,0-.18.11-.08.16a41,41,0,0,0,6.5,2.6c2.32.67,4.73.7,7.08,1.21a59.14,59.14,0,0,0,7.22,1.45,25.87,25.87,0,0,0,7.19-.32C110.33,248.9,110.3,248.76,110.21,248.76Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M114.6,296.71c-.51-1.78-1-3.56-1.53-5.33-1.08-3.58-2.18-7.16-3.36-10.7-2.36-7-4.61-14.13-7.09-21.13-1.41-4-2.69-8-4.32-11.88a.08.08,0,1,0-.15.05c.86,3.64,2,7.19,3.12,10.78s2.21,7.14,3.35,10.7c2.26,7.08,4.48,14.17,6.94,21.18.69,2,1.39,3.93,2.13,5.88s1.36,4.05,2.26,6a.09.09,0,0,0,.17-.06C115.74,300.33,115.12,298.52,114.6,296.71Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M121.74,128.85a3.93,3.93,0,0,0,6.12-3.66,3.62,3.62,0,0,0,4.4-.38,3.48,3.48,0,0,0,.24-4.6s0,0,0,0a3.55,3.55,0,0,1-.41,4.36,3.2,3.2,0,0,1-3.49.59,4.38,4.38,0,0,0,3.22-1.27,3.38,3.38,0,0,0,.63-3.68,4.92,4.92,0,0,0,3-3.3,3.36,3.36,0,0,0-1.28-3.46,3.76,3.76,0,0,0-1.28-6.79,3.16,3.16,0,0,0-.68-5.28,2.14,2.14,0,0,0,.26-2.29,3.53,3.53,0,0,0-2.13-1.7,2.58,2.58,0,0,0-.87-2.28,2.31,2.31,0,0,0-3,.1A6.35,6.35,0,0,0,123,92.34a3.29,3.29,0,0,0-3.48,1.09,4.57,4.57,0,0,0-6.84,0,3.23,3.23,0,0,0-3.21-.07,4.79,4.79,0,0,0-1.75,1.48,2.4,2.4,0,0,0-2.78.43,3.17,3.17,0,0,0-.85,2.58,1.92,1.92,0,0,1-.54.61,4.17,4.17,0,0,0-1.77,3.53,2.86,2.86,0,0,0-1.63,4,3.21,3.21,0,0,0-.7,4.44,4.7,4.7,0,0,0-1.61,3.54,2.7,2.7,0,0,0,1.47,2.58,1.65,1.65,0,0,0,.2,2.18,4.25,4.25,0,0,0,.7.57,3.56,3.56,0,0,1,.94.67,2.72,2.72,0,0,1,.24,1.1,4.83,4.83,0,0,0,.22.74,4.26,4.26,0,0,0,4.72,2.44,3.43,3.43,0,0,0,2.85,2.42,8,8,0,0,0,1.28.14,1.9,1.9,0,0,1,1.08.3c.2.15.37.34.58.49a2.91,2.91,0,0,0,2.31.32C115.24,131.48,119.77,131.61,121.74,128.85Zm-16.92-33a2.54,2.54,0,0,1,2.8-.89l-.07.11s-.35,0-.52,0a3.14,3.14,0,0,0-.9.23,3.3,3.3,0,0,0-1.48,1.23,4,4,0,0,0-.37.78s0,.07,0,.11A3.15,3.15,0,0,1,104.82,95.82Zm24.49.16a2.45,2.45,0,0,0-2.74-.56l0-.07a2.17,2.17,0,0,1,2.78,0,2.13,2.13,0,0,1,.71,2h0A2.81,2.81,0,0,0,129.31,96Zm-14.76,31.86h0a4.42,4.42,0,0,0,5.86,1.84C118.27,131,115.62,130.84,114.55,127.84Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M117.56,148.27c0,1,3.48,8.27,8,8.92,1.46.21,3-7.75,3-7.75l.24-.56,3.43-7.88-8.47-8.07-1.24-1.09s-.8,2.22-1.76,5l-.14.39c0,.16-.11.3-.16.45-.15.41-.3.83-.44,1.25s-.22.64-.32,1l-.32,1A54.57,54.57,0,0,0,117.56,148.27Z"
                            style={{ fill: "#ad6359" }}
                          />
                          <path
                            d="M120.72,136.83a17.28,17.28,0,0,0,8,12l3.43-7.88-8.47-8.07-1.24-1.09S121.68,134.06,120.72,136.83Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M145.7,127.73c1.88,15-6.82,17.92-10.1,18.18-2.94.23-12.95,1.23-16.36-13.45s3-20.29,9.6-21.48S143.82,112.77,145.7,127.73Z"
                            style={{ fill: "#ad6359" }}
                          />
                          <path
                            d="M144.55,124.59c-.35,0-.68-.1-1-.15a1.72,1.72,0,0,1-1-.37.53.53,0,0,1,0-.65,1.32,1.32,0,0,1,1.29-.38,1.9,1.9,0,0,1,1.26.62A.57.57,0,0,1,144.55,124.59Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M134.86,125.66a8.68,8.68,0,0,0,1-.27,1.68,1.68,0,0,0,1-.47.56.56,0,0,0,0-.66,1.35,1.35,0,0,0-1.33-.23,2,2,0,0,0-1.18.75A.57.57,0,0,0,134.86,125.66Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M137.28,129.24s-.07.06-.07.1c.11,1,.07,2.21-.83,2.62,0,0,0,.07,0,.06C137.51,131.77,137.55,130.19,137.28,129.24Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M136.28,128.25c-1.65,0-1.52,3.31,0,3.31S137.67,128.24,136.28,128.25Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M135.64,128.45c-.28.2-.55.54-.9.59s-.72-.28-1-.61c0,0-.05,0-.05,0,0,.64.28,1.28,1,1.35s1.05-.52,1.18-1.16C135.86,128.54,135.75,128.37,135.64,128.45Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M142.77,128.46s.08,0,.08.08c0,1,.18,2.21,1.12,2.52a0,0,0,0,1,0,.06C142.82,131,142.61,129.43,142.77,128.46Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M143.66,127.35c1.64-.17,1.88,3.13.35,3.3S142.28,127.5,143.66,127.35Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M144.36,127.52c.27.16.55.46.87.46s.6-.38.81-.74c0,0,.05,0,.05,0,.07.63-.1,1.31-.69,1.47s-1-.36-1.19-1C144.17,127.64,144.25,127.46,144.36,127.52Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M137.58,137.16c.24.25.48.58.86.61a2.67,2.67,0,0,0,1.1-.25s.07,0,.05,0a1.36,1.36,0,0,1-1.31.55,1.08,1.08,0,0,1-.8-.91C137.46,137.15,137.54,137.13,137.58,137.16Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M141.67,133.24s.29,1.52.33,2.24c0,.07-.17.11-.41.14h0a3.45,3.45,0,0,1-3.4-1.11c-.06-.07,0-.15.1-.11a5.18,5.18,0,0,0,3.18.74c0-.2-.58-2.59-.47-2.6a5.75,5.75,0,0,1,1.66.29c-.51-3.19-1.53-6.27-2-9.44,0-.12.15-.16.18-.06a51.63,51.63,0,0,1,2.58,10.08C143.48,133.81,142,133.35,141.67,133.24Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M141.5,135.07a4.16,4.16,0,0,1-1.45,1.56,1.85,1.85,0,0,1-1.12.26c-.86-.08-1-.83-1-1.5a4.29,4.29,0,0,1,.2-1A5.48,5.48,0,0,0,141.5,135.07Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M140.05,136.63a1.85,1.85,0,0,1-1.12.26c-.86-.08-1-.83-1-1.5A2,2,0,0,1,140.05,136.63Z"
                            style={{ fill: "#ff9bbc" }}
                          />
                          <path
                            d="M135,113.42a7,7,0,0,1,.05,4c-1.45,3.58-5.69,2.91-7,4.37s-.64,4-1.77,5.39c-1.58,1.89-3.9,1.33-4.11,2.55s-.77,5.1-2.27,5.68-10-24.52,10-24.89c0,0,2.68-1.29,7.06.61,4.83,2.1,7.23,9.64,7.23,9.64l-.72-.57c-1-.79-1.43-1.56-2.17-2.08-1.16-.8-1.75-.43-3-1.21A13.34,13.34,0,0,1,135,113.42Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M134.64,112.32a13.54,13.54,0,0,1,.76,3,5.66,5.66,0,0,1-.24,3A4.2,4.2,0,0,1,133,120.3c-.93.4-2,.56-3,1a3.23,3.23,0,0,0-1.28,1.08,4.32,4.32,0,0,0-.49,1.58,5.69,5.69,0,0,1-.94,2.85,3.46,3.46,0,0,1-2.61,1.28,7.41,7.41,0,0,0-3.1.35,7.35,7.35,0,0,1,3.1-.1,3.79,3.79,0,0,0,2.9-1.29,5.64,5.64,0,0,0,1.09-3,3.84,3.84,0,0,1,.45-1.4,2.72,2.72,0,0,1,1.1-.9c.89-.44,1.95-.63,2.93-1.07a5.54,5.54,0,0,0,1.38-.87,3.32,3.32,0,0,0,1-1.32,5.91,5.91,0,0,0,.13-3.2A13.74,13.74,0,0,0,134.64,112.32Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M135.07,113.22a11.07,11.07,0,0,0,1.14,2.71,5.23,5.23,0,0,0,2.13,2.09,7.79,7.79,0,0,0,1.42.46,2.39,2.39,0,0,1,1.12.66,6.56,6.56,0,0,0,.94,1.13,3.15,3.15,0,0,0,1.31.67,3.56,3.56,0,0,1-1.14-.84,7.52,7.52,0,0,1-.81-1.19,2.56,2.56,0,0,0-1.28-.88,7.79,7.79,0,0,1-1.34-.45,5.56,5.56,0,0,1-2-1.87A23.61,23.61,0,0,1,135.07,113.22Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M122.26,132.45s-4.05-4.08-6-2.56,1.7,7.82,4.33,8.31a2.55,2.55,0,0,0,3.13-1.93Z"
                            style={{ fill: "#ad6359" }}
                          />
                          <path
                            d="M117.39,131.67a0,0,0,0,0,0,.07c1.85.4,3,1.85,4,3.4a1.4,1.4,0,0,0-2.14,0s0,.1.06.08a1.56,1.56,0,0,1,1.79.24,8.37,8.37,0,0,1,1.06,1.24c.11.14.37,0,.28-.16l0,0C122.05,134.28,119.8,131.48,117.39,131.67Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M120.27,138.13c.12.69-2.23-1.39-2.37-1.73s-1.67-1.18-2.12-1.82a17.91,17.91,0,0,1-1.52-3c-.12-.47-1.17-1.57-1.27-2.42s-.74-8.5,3.71-14.25,8.94-6.66,8.94-6.66a32.09,32.09,0,0,1,6.85-1.18c3.76-.22,10.23,7.83,10.27,8a3.24,3.24,0,0,0,.1,1.32c.24.5.88,1,.66,1.51s.68,1.74.74,2.28-.06.69.08,1-2.81-8.89-14.63-10.73C129.71,110.48,117.73,123.26,120.27,138.13Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M144.31,121.11a.22.22,0,0,0,0,.1Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M144.31,121.11a.19.19,0,0,0,0,.1Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M138.34,110.69a1,1,0,0,1,.39-.08h0c.34.31.66.63,1,.94h0a1,1,0,1,1-1.36-.87Zm-5.48.51a18.72,18.72,0,0,1,1.83.65,1,1,0,0,0-1.28-1.29A1,1,0,0,0,132.86,111.2Zm7.18,4a16.87,16.87,0,0,1,1.34,1.33,1,1,0,0,0,.4-1.23,1,1,0,0,0-1.74-.1Zm-21.39-2.55a1,1,0,1,0,1.41-1.31C119.6,111.72,119.13,112.15,118.65,112.64Zm1.24,8.16a1,1,0,1,0,.51-1.28A1,1,0,0,0,119.89,120.8Zm10.18-12.94a1,1,0,0,0,1.8-.78h0c-.64,0-1.26.12-1.85.2h0A1,1,0,0,0,130.07,107.86Zm-5,2.87a1,1,0,1,0,.51-1.29A1,1,0,0,0,125.11,110.73Zm-2.17,5a1,1,0,1,0,.51-1.29A1,1,0,0,0,122.94,115.76Zm-7.12,2a1,1,0,1,0,.51-1.28A1,1,0,0,0,115.82,117.77Zm.88,7.38a1,1,0,1,0,.51-1.28A1,1,0,0,0,116.7,125.15ZM118.88,136a1,1,0,0,0,1.17.54c-.07-.63-.11-1.27-.12-1.9a.93.93,0,0,0-.54.07A1,1,0,0,0,118.88,136Zm1.32-8.09a.93.93,0,0,0,.31.39q.18-.89.42-1.74a.57.57,0,0,0-.22.07A1,1,0,0,0,120.2,127.89Zm-7-4.54a1,1,0,0,0,.78,0,1,1,0,0,0-.4-1.87C113.43,122.12,113.31,122.75,113.21,123.35Zm3,7.54a1,1,0,1,0,.51-1.29A1,1,0,0,0,116.19,130.89Zm-1.55,1.58c.2.43.46.93.7,1.36a1,1,0,0,0,0-.79A.93.93,0,0,0,114.64,132.47ZM113,128.75a.83.83,0,0,0,.51-.07,1,1,0,0,0-.57-1.86A18.74,18.74,0,0,0,113,128.75Z"
                            style={{
                              fill: "#fff",
                              opacity: "0.30000000000000004",
                            }}
                          />
                          <path
                            d="M117.9,136.4a10.16,10.16,0,0,1-.31-2.05c-.06-.69-.1-1.38-.13-2.07-.06-1.39-.11-2.77-.1-4.16,0-.34,0-.69,0-1a4.33,4.33,0,0,1,.25-1c.23-.65.51-1.28.78-1.92s.56-1.27.85-1.9l.86-1.89c-.67,1.21-1.29,2.45-1.88,3.71q-.45.94-.81,1.92a5.07,5.07,0,0,0-.29,1c0,.36,0,.7,0,1.05,0,1.39.06,2.78.16,4.17,0,.69.11,1.38.19,2.07,0,.35.1.69.16,1A4.43,4.43,0,0,0,117.9,136.4Z"
                            style={{ fill: "#050400", opacity: "0.1" }}
                          />
                          <path
                            d="M116.75,122.16a16.91,16.91,0,0,0-1.22,2.16,15.48,15.48,0,0,0-.93,2.31,11.16,11.16,0,0,0-.52,2.44,6.62,6.62,0,0,0,.18,2.47c0-.2-.05-.41-.07-.61a1.62,1.62,0,0,1,0-.31V130l0-.31c0-.2,0-.41.06-.61l.1-.61.14-.6c0-.2.1-.39.15-.59s.11-.4.18-.59c.24-.78.55-1.55.86-2.31.16-.38.34-.75.51-1.12S116.56,122.52,116.75,122.16Z"
                            style={{ fill: "#050400", opacity: "0.1" }}
                          />
                          <path
                            d="M142.68,116a13,13,0,0,0-1.55-1.77c-.56-.56-1.13-1.1-1.71-1.63s-1.17-1-1.82-1.51a8.25,8.25,0,0,0-2.13-1,11.32,11.32,0,0,1,1,.54,9.24,9.24,0,0,1,1,.65c.3.23.59.5.89.76l.87.78,1.75,1.58.86.8A9.27,9.27,0,0,1,142.68,116Z"
                            style={{ fill: "#050400", opacity: "0.1" }}
                          />
                          <path
                            d="M143.5,118.24a13.46,13.46,0,0,0-1-1.41c-.35-.45-.71-.88-1.1-1.3-.2-.2-.41-.41-.63-.59l-.67-.52-.69-.5c-.23-.17-.46-.34-.69-.49.2.2.41.38.62.58l.64.56.64.55a8.21,8.21,0,0,1,.6.58c.39.4.76.83,1.13,1.25l.56.64C143.14,117.8,143.31,118,143.5,118.24Z"
                            style={{ fill: "#050400", opacity: "0.1" }}
                          />
                          <path
                            d="M117.63,113.74c2,.58,6.62,1.84,7.61,1.64a7.12,7.12,0,0,0,1-.32,37.75,37.75,0,0,1,3.49-4.58,22.18,22.18,0,0,1,4,1,21.08,21.08,0,0,0,2.72-2.78,6.89,6.89,0,0,0-4-1.68,32.09,32.09,0,0,0-6.85,1.18S121.75,109,117.63,113.74Z"
                            style={{ fill: "#050400", opacity: "0.1" }}
                          />
                          <path
                            d="M128.77,108.47s3.25-5.41,8.69-6.09c0,0-.15,5.4-2,7.21-.94.9-5.21,1.32-5.72.62A10.08,10.08,0,0,1,128.77,108.47Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M134.43,103.29a1,1,0,0,1-.58,1,1,1,0,0,1-1-.13A12.68,12.68,0,0,1,134.43,103.29Zm1.39,4.14a1,1,0,0,0,.61.55,11.55,11.55,0,0,0,.56-1.87,1,1,0,0,0-.66,0A1,1,0,0,0,135.82,107.43Zm-5.75.43a1,1,0,1,0,.51-1.29A1,1,0,0,0,130.07,107.86Z"
                            style={{
                              fill: "#fff",
                              opacity: "0.30000000000000004",
                            }}
                          />
                          <path
                            d="M128.77,108.48a10.67,10.67,0,0,0,.93,1.72.18.18,0,0,0,.09.08.41.41,0,0,0,.12.08l.11,0a6,6,0,0,0,2.36.09,13.08,13.08,0,0,0-.61-2.33,3.59,3.59,0,0,0-1.65-1.47A13.09,13.09,0,0,0,128.77,108.48Z"
                            style={{ fill: "#050400", opacity: "0.1" }}
                          />
                          <path
                            d="M127.45,109.23s-7.6-1.08-11.24.61c0,0,2,3.93,5.85,4.86,1.71.42,6.66-2.73,6.38-3.62A7.61,7.61,0,0,0,127.45,109.23Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M119.08,111.21a1,1,0,1,1-.51,1.28A1,1,0,0,1,119.08,111.21Zm6-.48a1,1,0,1,0,.51-1.29A1,1,0,0,0,125.11,110.73Zm-1.91,3.9c.24-.06.48-.14.74-.23a.93.93,0,0,0-.49.07A1,1,0,0,0,123.2,114.63Z"
                            style={{
                              fill: "#fff",
                              opacity: "0.30000000000000004",
                            }}
                          />
                          <path
                            d="M125.72,109a4.45,4.45,0,0,0,.17,2.51,3.74,3.74,0,0,0,1,1.24c1-.69,1.64-1.37,1.54-1.72a7.67,7.67,0,0,0-1-1.84S126.77,109.13,125.72,109Z"
                            style={{ fill: "#050400", opacity: "0.1" }}
                          />
                          <path
                            d="M126.68,111a2.49,2.49,0,1,0,1-3.38A2.49,2.49,0,0,0,126.68,111Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M131,188.3l-1.82,14-52.47,1.36s16-43.4,32.92-54.13c8.47-5.36,16-2.77,19.6,3.53.91,1.59,8.23,17.54,7.79,25.44A11.94,11.94,0,0,1,131,188.3Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M125,148.56l-13.94.18c.45-.25.9-.47,1.34-.66l11.51-.14A9,9,0,0,1,125,148.56Zm4.21,4.55a4.57,4.57,0,0,0-.29-.47l-23.55.3-.68.65,24.61-.32A1.46,1.46,0,0,1,129.2,153.11Zm2,4.27-30.26.38-.52.64,31-.39Zm1.92,4.74-35.8.45c-.14.22-.29.43-.44.65l36.48-.46Zm1.67,4.75-40.62.52-.39.64L135,167.5C134.91,167.29,134.84,167.08,134.77,166.87Zm1.35,4.75-44.81.57c-.13.21-.25.42-.36.64l45.32-.58C136.22,172,136.18,171.83,136.12,171.62Zm.82,4.76L88.68,177c-.11.22-.23.43-.34.64L137,177C137,176.81,137,176.6,136.94,176.38Zm-50.71,5.41-.31.64,50.45-.64c.07-.21.13-.42.19-.64Zm-2.3,4.79c-.1.22-.2.43-.29.64l49.64-.63c.2-.2.42-.41.63-.64Zm-2.17,4.8c-.1.21-.2.43-.29.64l49.1-.62.08-.64Zm-2.07,4.79-.27.64,50.53-.64.08-.63Zm-2,4.79-.25.64,51.84-.65.08-.64Z"
                            style={{ fill: "#fff" }}
                          />
                          <path
                            d="M120.11,159.65c6.5,7.44,33.18,30.47,42.4,28.54,14.45-3,28.92-12.08,37-16.82,2.56-1.51-12.74-25.87-17.32-22.41-5.92,4.45-18.42,11.39-22.17,12.43-2.56.72-21-7.09-33.85-12.42C115.42,144.51,111.87,150.22,120.11,159.65Z"
                            style={{ fill: "#ad6359" }}
                          />
                          <path
                            d="M178.14,152.3l4-3.34a17.87,17.87,0,0,0,3.27-3.86c3.76-5.35,16.36-16,34.22-11.6,6.85,1.67,8.66,7.21,1.24,6.73-5.22-.34-8.82-1-10.55-.65,0,0,5.94,5.38,5.38,10a84.54,84.54,0,0,1-2.3,11.95,17.71,17.71,0,0,1-2.28-.23,9.75,9.75,0,0,1-7.24,7.47l-6.56,3.86Z"
                            style={{ fill: "#ad6359" }}
                          />
                          <path
                            d="M189.84,140.57c3.33-.82,10.42-2.42,16.68-1.72,6.95.78,20.13,4.15,19.5,9.28-.46,3.75-5.6,2.91-5.6,2.91s5.15,2.54,4,5.85c-1,3-5,2.11-5,2.11s2.87,2.08,1.29,4.79c-1.89,3.25-7.58-1.64-12.35,0C207.28,164.15,189.84,140.57,189.84,140.57Z"
                            style={{ fill: "#ad6359" }}
                          />
                          <path
                            d="M204.47,146.05a27.93,27.93,0,0,1,15.89,4.85c.12.09.11.22,0,.17a68.64,68.64,0,0,0-15.89-4.95S204.43,146.06,204.47,146.05Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M203.89,153.09c2.83.08,10.55,1.79,15.57,5.79.11.09.1.23,0,.17a73.32,73.32,0,0,0-15.56-5.89A0,0,0,0,1,203.89,153.09Z"
                            style={{ fill: "#263238" }}
                          />
                          <path
                            d="M152.67,159.18l-6.9,25s-17.42-14-26.44-24-5.29-15.82,6.89-12.33S152.67,159.18,152.67,159.18Z"
                            style={{ fill: "#407BFF" }}
                          />
                          <path
                            d="M147.19,158.5c-.21.85-.57,1.69-.85,2.52s-.53,1.69-.79,2.54l-1.5,4.92c-1,3.32-2.14,6.61-3,10,0,.05.07.09.09.05a83.69,83.69,0,0,0,3.47-9.76c.51-1.67,1-3.34,1.46-5,.24-.85.46-1.72.66-2.59s.32-1.77.56-2.61C147.33,158.46,147.21,158.42,147.19,158.5Z"
                            style={{ fill: "#263238" }}
                          />
                          <path d="M122.23,163.32c2.93,2.63,5.77,5.35,8.68,8,1.43,1.35,2.89,2.67,4.35,4s2.93,2.62,4.43,3.9c-1.63-1.11-3.17-2.35-4.68-3.61s-3-2.58-4.44-3.9-2.87-2.7-4.26-4.09S123.55,164.78,122.23,163.32Z" />
                          <path d="M123.07,165.32a32.41,32.41,0,0,0,3.16,1.92,6.75,6.75,0,0,1-.9-.29,7.23,7.23,0,0,1-.84-.41A4.75,4.75,0,0,1,123.07,165.32Z" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="service__home overflow p__tb">
          <div
            className="l__container wow fadeInUp animated"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              WebkitAnimationDuration: "1s",
              MozAnimationDuration: "1s",
              animationDuration: "1s",
            }}
          >
            <div className="section__title text-center">
              <h6>our services</h6>
              <h2 className="title">
                {" "}
                Exceptional Services For Your <span>Business Growth</span>
              </h2>
              <p className="d-none d-lg-inline-block">
                Discover our wide range of digital solutions to enhance your
                online presence.
                <a className="more" href="services">
                  See all
                </a>
              </p>
            </div>
            <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-xl-5 gy-4 gx-4">
              <div className="col">
                <div className="service__home--card pe-lg-4 pe-auto text-center text-md-start">
                  <a href="/services/website-design-in-nepal">
                    <div className="service__home--card-icon">
                      <img
                        alt=""
                        className="lazy-load"
                        data-src="/Website_developlent.svg"
                        src="/Website_developlent.svg"
                      />
                    </div>
                    <div className="service__home--card-content">
                      <h3>Website Development</h3>
                      <p>
                        Highly functional &amp; visually appealing website
                        designed to meet your need.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="service__home--card pe-lg-4 pe-auto text-center text-md-start">
                  <a href="/services/mobile-app-development">
                    <div className="service__home--card-icon">
                      <img
                        alt=""
                        className="lazy-load"
                        data-src="/App_Development.svg"
                        src="/App_Development.svg"
                      />
                    </div>
                    <div className="service__home--card-content">
                      <h3>App Development</h3>
                      <p>
                        Innovative and user-friendly mobile application designed
                        to engage users.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="service__home--card pe-lg-4 pe-auto text-center text-md-start">
                  <a href="/services/system-software-development">
                    <div className="service__home--card-icon">
                      <img
                        alt=""
                        className="lazy-load"
                        data-src="/Programmer-amico.svg"
                        src="/Programmer-amico.svg"
                      />
                    </div>
                    <div className="service__home--card-content">
                      <h3>System/Software Development</h3>
                      <p>
                        System/software developed according to your business
                        needs.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="service__home--card pe-lg-4 pe-auto text-center text-md-start">
                  <a href="/services/ui-ux-design">
                    <div className="service__home--card-icon">
                      <img
                        alt=""
                        className="lazy-load"
                        data-src="/UI_UX.svg"
                        src="/UI_UX.svg"
                      />
                    </div>
                    <div className="service__home--card-content">
                      <h3>UI/UX</h3>
                      <p>
                        Design eye-catching UI/UX interfaces for effortless user
                        interaction
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="service__home--card pe-lg-4 pe-auto text-center text-md-start">
                  <a href="/services/seo-in-nepal">
                    <div className="service__home--card-icon">
                      <img
                        alt=""
                        className="lazy-load"
                        data-src="/SEO_analytics_team-amico.svg"
                        src="/SEO_analytics_team-amico.svg"
                      />
                    </div>
                    <div className="service__home--card-content">
                      <h3>Search Engine Optimization (SEO)</h3>
                      <p>
                        Custom SEO solutions for enhanced search engine
                        visibility and growth
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="service__home--card pe-lg-4 pe-auto text-center text-md-start">
                  <a href="/services/social-media-marketing">
                    <div className="service__home--card-icon">
                      <img
                        alt=""
                        className="lazy-load"
                        data-src="/Mobile_Marketing-pana.svg"
                        src="/Mobile_Marketing-pana.svg"
                      />
                    </div>
                    <div className="service__home--card-content">
                      <h3>Social Media Marketing (SMM)</h3>
                      <p>
                        Build a strong online presence and engage with your
                        targeted audience
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="service__home--card pe-lg-4 pe-auto text-center text-md-start">
                  <a href="/services/graphics-design">
                    <div className="service__home--card-icon">
                      <img
                        alt=""
                        className="lazy-load"
                        data-src="/Website_Creator-pana.svg"
                        src="/Website_Creator-pana.svg"
                      />
                    </div>
                    <div className="service__home--card-content">
                      <h3>Graphic Design</h3>
                      <p>
                        Designs that Speak Your Brand’s Narrative and Connect
                        with Your Audience
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="service__home--card pe-lg-4 pe-auto text-center text-md-start">
                  <a href="/services/content-writing">
                    <div className="service__home--card-icon">
                      <img
                        alt=""
                        className="lazy-load"
                        data-src="/Content Writing.svg"
                        src="/Content Writing.svg"
                      />
                    </div>
                    <div className="service__home--card-content">
                      <h3>Content Writing</h3>
                      <p>
                        Engaging and meaningful content to connect with your
                        audience
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 d-lg-none">
              <a className="l__button l__button--primary" href="services">
                <span>See all</span>
                <i className="fa-solid fa-chevron-right" />
              </a>
            </div>
          </div>
        </section>
        <section className="technology overflow">
          <div className="l__container">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div
                  className="p__tb technology__content wow fadeInUp animated"
                  data-wow-duration="1s"
                  style={{
                    visibility: "visible",
                    WebkitAnimationDuration: "1s",
                    MozAnimationDuration: "1s",
                    animationDuration: "1s",
                  }}
                >
                  <div className="section__title clearfix">
                    <h6 className="text-cetner">Our Expertise</h6>
                    <h2 className="title">
                      Technologies We Rely On to <span>Achieve Success</span>
                    </h2>
                  </div>
                  <ul
                    className="nav nav-pills technology__tab"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        data-bs-target="#pills-1-app"
                        data-bs-toggle="pill"
                        role="tab"
                        type="button"
                      >
                        Web Development
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        data-bs-target="#pills-2-app"
                        data-bs-toggle="pill"
                        role="tab"
                        type="button"
                      >
                        App Development
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        data-bs-target="#pills-3-app"
                        data-bs-toggle="pill"
                        role="tab"
                        type="button"
                      >
                        Database
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        data-bs-target="#pills-4-app"
                        data-bs-toggle="pill"
                        role="tab"
                        type="button"
                      >
                        Cloud Platform
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-1-app"
                      role="tabpanel"
                    >
                      <div className="technology__list">
                        <div className="row row-cols-4 row-cols-sm-5 row-cols-md-6 row-cols-lg-5 row-cols-xl-6 g-4">
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="javascript logo"
                                className="lazy-load"
                                data-src="/icons8-javascript-96.png"
                                src="/icons8-javascript-96.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="Node JS logo"
                                className="lazy-load"
                                data-src="/node.png"
                                src="/node.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="Python logo"
                                className="lazy-load"
                                data-src="/icons8-python-96.png"
                                src="/icons8-python-96.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="Django logo"
                                className="lazy-load"
                                data-src="/icons8-django-a-high-level-python-web-framework-that-encourages-rapid-development-96.png"
                                src="/icons8-django-a-high-level-python-web-framework-that-encourages-rapid-development-96.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="HTML logo"
                                className="lazy-load"
                                data-src="/icons8-html5-96.png"
                                src="/icons8-html5-96.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="CSS logo"
                                className="lazy-load"
                                data-src="/icons8-css3-96.png"
                                src="/icons8-css3-96.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="Next JS logo"
                                className="lazy-load"
                                data-src="/icons8-next.js-96.png"
                                src="/icons8-next.js-96.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="React JS logo"
                                className="lazy-load"
                                data-src="/icons8-react-native-96_2lITedI.png"
                                src="/icons8-react-native-96_2lITedI.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="PHP logo"
                                className="lazy-load"
                                data-src="/php.png"
                                src="/php.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="Laravel logo"
                                className="lazy-load"
                                data-src="/icons8-laravel-96.png"
                                src="/icons8-laravel-96.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="Figma logo"
                                className="lazy-load"
                                data-src="/icons8-figma-96.png"
                                src="/icons8-figma-96.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="Wordpress logo"
                                className="lazy-load"
                                data-src="/icons8-wordpress-96.png"
                                src="/icons8-wordpress-96.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-2-app"
                      role="tabpanel"
                    >
                      <div className="technology__list">
                        <div className="row row-cols-4 row-cols-sm-5 row-cols-md-6 row-cols-lg-5 row-cols-xl-6 g-4">
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="Flutter logo"
                                className="lazy-load"
                                data-src="/icons8-flutter-96.png"
                                src="/icons8-flutter-96.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="iOS logo"
                                className="lazy-load"
                                data-src="/icons8-app-store-96.png"
                                src="/icons8-app-store-96.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="Dart logo"
                                className="lazy-load"
                                data-src="/icons8-dart-96.png"
                                src="/icons8-dart-96.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="Swift logo"
                                className="lazy-load"
                                data-src="/icons8-swiftui-96.png"
                                src="/icons8-swiftui-96.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="Kotlin logo"
                                className="lazy-load"
                                data-src="/icons8-kotlin-96.png"
                                src="/icons8-kotlin-96.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="React Native logo"
                                className="lazy-load"
                                data-src="/icons8-react-native-96.png"
                                src="/icons8-react-native-96.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-3-app"
                      role="tabpanel"
                    >
                      <div className="technology__list">
                        <div className="row row-cols-4 row-cols-sm-5 row-cols-md-6 row-cols-lg-5 row-cols-xl-6 g-4">
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="MongoDB logo"
                                className="lazy-load"
                                data-src="/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png"
                                src="/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="MySQL logo"
                                className="lazy-load"
                                data-src="/icons8-mysql-96.png"
                                src="/icons8-mysql-96.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="PostGres logo"
                                className="lazy-load"
                                data-src="/icons8-postgresql-100.png"
                                src="/icons8-postgresql-100.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="SQLite logo"
                                className="lazy-load"
                                data-src="/SQLite.png"
                                src="/SQLite.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="Redis logo"
                                className="lazy-load"
                                data-src="/icons8-redis-96.png"
                                src="/icons8-redis-96.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-4-app"
                      role="tabpanel"
                    >
                      <div className="technology__list">
                        <div className="row row-cols-4 row-cols-sm-5 row-cols-md-6 row-cols-lg-5 row-cols-xl-6 g-4">
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="AWS logo"
                                className="lazy-load"
                                data-src="/icons8-aws-96.png"
                                src="/icons8-aws-96.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="Google Cloud logo"
                                className="lazy-load"
                                data-src="/icons8-google-cloud-96.png"
                                src="/icons8-google-cloud-96.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="Docker logo"
                                className="lazy-load"
                                data-src="/icons8-docker-96.png"
                                src="/icons8-docker-96.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="Kubernetics logo"
                                className="lazy-load"
                                data-src="/icons8-kubernetes-96.png"
                                src="/icons8-kubernetes-96.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="Cloudflare logo"
                                className="lazy-load"
                                data-src="/icons8-cloudflare-96.png"
                                src="/icons8-cloudflare-96.png"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="technology__list--card">
                              <img
                                alt="Digital Ocean logo"
                                className="lazy-load"
                                data-src="/icons8-digitalocean-100.png"
                                src="/icons8-digitalocean-100.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="technology__img d-none d-lg-block">
                  <span
                    className="circle wow fadeInDown animated"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDuration: "1s",
                      MozAnimationDuration: "1s",
                      animationDuration: "1s",
                    }}
                  />
                  <img
                    alt=""
                    className="wow fadeInUp animated"
                    src="/technology-stack.svg"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDuration: "1s",
                      MozAnimationDuration: "1s",
                      animationDuration: "1s",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="process p__tb--t overflow">
          <div
            className="l__container wow fadeInUp animated"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              WebkitAnimationDuration: "1s",
              MozAnimationDuration: "1s",
              animationDuration: "1s",
            }}
          >
            <div className="section__title text-center m__tb--b">
              <h6>How We Work</h6>
              <h2 className="title">
                Enjoy seamless service with <span>our easy steps!</span>
              </h2>
              <p className="d-none d-lg-inline-block">
                Efficient workflow from requirements gathering to support and
                maintenance
                <a className="more" href="work">
                  See all
                </a>
              </p>
            </div>
            <div className="process__content">
              <div
                className="process__content--card wow fadeInUp animated"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  WebkitAnimationDuration: "1s",
                  MozAnimationDuration: "1s",
                  animationDuration: "1s",
                }}
              >
                <div className="row">
                  <div className="col-md-2">
                    <div className="d-flex align-items-center">
                      <small>
                        01<span className="d-md-none">.</span>
                      </small>
                      <h3 className="d-md-none ms-2">Requirement Gathering</h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="d-none d-md-block">Requirement Gathering</h3>
                  </div>
                  <div className="col-md-6">
                    <p>
                      We start our collaboration by collecting client
                      requirements, listing and compiling them. This helps us
                      build the process from scratch to deliver results aligned
                      with your goals.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="process__content--card wow fadeInUp animated"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  WebkitAnimationDuration: "1s",
                  MozAnimationDuration: "1s",
                  animationDuration: "1s",
                }}
              >
                <div className="row">
                  <div className="col-md-2">
                    <div className="d-flex align-items-center">
                      <small>
                        02<span className="d-md-none">.</span>
                      </small>
                      <h3 className="d-md-none ms-2">Plan &amp; Resources</h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="d-none d-md-block">Plan &amp; Resources</h3>
                  </div>
                  <div className="col-md-6">
                    <p>
                      After gathering requirements, we devise a strategic path
                      and select resources. As the best IT company in Nepal, we
                      offer clients a roadmap, laying the groundwork for a
                      successful project.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="process__content--card wow fadeInUp animated"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  WebkitAnimationDuration: "1s",
                  MozAnimationDuration: "1s",
                  animationDuration: "1s",
                }}
              >
                <div className="row">
                  <div className="col-md-2">
                    <div className="d-flex align-items-center">
                      <small>
                        03<span className="d-md-none">.</span>
                      </small>
                      <h3 className="d-md-none ms-2">Design &amp; Develop</h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="d-none d-md-block">Design &amp; Develop</h3>
                  </div>
                  <div className="col-md-6">
                    <p>
                      In the design and development phase, we turn strategic
                      ideas into digital products that are visually appealing,
                      technically robust, focusing on user experience and
                      functionality.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="process__content--card wow fadeInUp animated"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  WebkitAnimationDuration: "1s",
                  MozAnimationDuration: "1s",
                  animationDuration: "1s",
                }}
              >
                <div className="row">
                  <div className="col-md-2">
                    <div className="d-flex align-items-center">
                      <small>
                        04<span className="d-md-none">.</span>
                      </small>
                      <h3 className="d-md-none ms-2">Quality Assurance</h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="d-none d-md-block">Quality Assurance</h3>
                  </div>
                  <div className="col-md-6">
                    <p>
                      In this phase, we rigorously test and validate to ensure
                      all elements work correctly and meet standards, delivering
                      the desired user experience. Our team tests each aspect
                      for reliability.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="process__content--card wow fadeInUp animated"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  WebkitAnimationDuration: "1s",
                  MozAnimationDuration: "1s",
                  animationDuration: "1s",
                }}
              >
                <div className="row">
                  <div className="col-md-2">
                    <div className="d-flex align-items-center">
                      <small>
                        05<span className="d-md-none">.</span>
                      </small>
                      <h3 className="d-md-none ms-2">Deployment</h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="d-none d-md-block">Deployment</h3>
                  </div>
                  <div className="col-md-6">
                    <p>
                      Once the product meets standards, we deploy it, releasing
                      product or updates on servers. This ensures our products
                      are delivered seamlessly and efficiently.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="process__content--card wow fadeInUp animated"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  WebkitAnimationDuration: "1s",
                  MozAnimationDuration: "1s",
                  animationDuration: "1s",
                }}
              >
                <div className="row">
                  <div className="col-md-2">
                    <div className="d-flex align-items-center">
                      <small>
                        06<span className="d-md-none">.</span>
                      </small>
                      <h3 className="d-md-none ms-2">
                        Support &amp; Maintenance
                      </h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="d-none d-md-block">
                      Support &amp; Maintenance
                    </h3>
                  </div>
                  <div className="col-md-6">
                    <p>
                      In the final stage, we maintain systems to ensure smooth
                      operation, security, and reliability. Optimization keeps
                      performance high and client satisfaction focused on
                      operational excellence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4 d-lg-none">
                <a className="l__button l__button--primary" href="work">
                  <span>Read More</span>
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="numbers p__tb m__tb--t numbersCounter overflow">
          <div className="l__container">
            <div className="row">
              <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-5">
                <div
                  className="numbers__left wow fadeInUp animated"
                  data-wow-duration="1s"
                  style={{
                    visibility: "visible",
                    WebkitAnimationDuration: "1s",
                    MozAnimationDuration: "1s",
                    animationDuration: "1s",
                  }}
                >
                  <h2>Who we are</h2>
                  <p>
                    We are a top IT company in Nepal, committed to providing
                    comprehensive digital solutions to enhance your online
                    presence. Let’s join hands and work together to take your
                    brand to the next level with the best IT services.
                  </p>
                  <div className="text-center">
                    <a className="l__button l__button--primary" href="about">
                      <span>about us</span>
                      <i className="fa-solid fa-chevron-right" />
                    </a>
                  </div>
                  <h4>NUMBERS</h4>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-7">
                <div className="numbers__right">
                  <span
                    className="circle wow fadeInDown d-none d-lg-block animated"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDuration: "1s",
                      MozAnimationDuration: "1s",
                      animationDuration: "1s",
                    }}
                  />
                  <div
                    className="row wow fadeInUp animated"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDuration: "1s",
                      MozAnimationDuration: "1s",
                      animationDuration: "1s",
                    }}
                  >
                    <div className="col-xl-5 col-lg-6 col-md-6">
                      <div className="numbers__card">
                        <h2 className="count" data-count={6}>
                          6
                        </h2>
                        <p>Years of Experience In This Field</p>
                        <span className="icon">
                          <svg
                            fill="none"
                            height={24}
                            viewBox="0 0 24 24"
                            width={24}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 11C13.1 11 14.0417 10.6083 14.825 9.825C15.6083 9.04167 16 8.1 16 7V4H8V7C8 8.1 8.39167 9.04167 9.175 9.825C9.95833 10.6083 10.9 11 12 11ZM4 22V20H6V17C6 15.9833 6.2375 15.0292 6.7125 14.1375C7.1875 13.2458 7.85 12.5333 8.7 12C7.85 11.4667 7.1875 10.7542 6.7125 9.8625C6.2375 8.97083 6 8.01667 6 7V4H4V2H20V4H18V7C18 8.01667 17.7625 8.97083 17.2875 9.8625C16.8125 10.7542 16.15 11.4667 15.3 12C16.15 12.5333 16.8125 13.2458 17.2875 14.1375C17.7625 15.0292 18 15.9833 18 17V20H20V22H4Z"
                              fill="#45B34A"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-6">
                      <div className="numbers__card middle">
                        <h2 className="count" data-count={400}>
                          400
                        </h2>
                        <p>Projects Completed In The Past Years</p>
                        <span className="icon">
                          <svg
                            fill="none"
                            height={24}
                            viewBox="0 0 24 24"
                            width={24}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 21C4.45 21 3.97917 20.8041 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V4.99998C3 4.44998 3.19583 3.97914 3.5875 3.58748C3.97917 3.19581 4.45 2.99998 5 2.99998H13.925L11.925 4.99998H5V19H19V12.05L21 10.05V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8041 19.55 21 19 21H5ZM9 15V10.75L18.175 1.57498C18.375 1.37498 18.6 1.22498 18.85 1.12498C19.1 1.02498 19.35 0.974976 19.6 0.974976C19.8667 0.974976 20.1208 1.02498 20.3625 1.12498C20.6042 1.22498 20.825 1.37498 21.025 1.57498L22.425 2.99998C22.6083 3.19998 22.75 3.42081 22.85 3.66248C22.95 3.90414 23 4.14998 23 4.39998C23 4.64998 22.9542 4.89581 22.8625 5.13748C22.7708 5.37914 22.625 5.59998 22.425 5.79998L13.25 15H9ZM11 13H12.4L18.2 7.19998L17.5 6.49998L16.775 5.79998L11 11.575V13Z"
                              fill="#45B34A"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-6">
                      <div className="numbers__card">
                        <h2 className="count" data-count={80}>
                          80
                        </h2>
                        <p>Skilled Team Members </p>
                        <span className="icon">
                          <svg
                            fill="none"
                            height={24}
                            viewBox="0 0 24 24"
                            width={24}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 20V16C1 15.4333 1.19583 14.9583 1.5875 14.575C1.97917 14.1917 2.45 14 3 14H6.275C6.60833 14 6.925 14.0833 7.225 14.25C7.525 14.4167 7.76667 14.6417 7.95 14.925C8.43333 15.575 9.02917 16.0833 9.7375 16.45C10.4458 16.8167 11.2 17 12 17C12.8167 17 13.5792 16.8167 14.2875 16.45C14.9958 16.0833 15.5833 15.575 16.05 14.925C16.2667 14.6417 16.5208 14.4167 16.8125 14.25C17.1042 14.0833 17.4083 14 17.725 14H21C21.5667 14 22.0417 14.1917 22.425 14.575C22.8083 14.9583 23 15.4333 23 16V20H16V17.725C15.4167 18.1417 14.7875 18.4583 14.1125 18.675C13.4375 18.8917 12.7333 19 12 19C11.2833 19 10.5833 18.8875 9.9 18.6625C9.21667 18.4375 8.58333 18.1167 8 17.7V20H1ZM12 16C11.3667 16 10.7667 15.8542 10.2 15.5625C9.63333 15.2708 9.15833 14.8667 8.775 14.35C8.49167 13.9333 8.1375 13.6042 7.7125 13.3625C7.2875 13.1208 6.825 13 6.325 13C6.69167 12.3833 7.46667 11.8958 8.65 11.5375C9.83333 11.1792 10.95 11 12 11C13.05 11 14.1667 11.1792 15.35 11.5375C16.5333 11.8958 17.3083 12.3833 17.675 13C17.1917 13 16.7333 13.1208 16.3 13.3625C15.8667 13.6042 15.5083 13.9333 15.225 14.35C14.8583 14.8833 14.3917 15.2917 13.825 15.575C13.2583 15.8583 12.65 16 12 16ZM4 13C3.16667 13 2.45833 12.7083 1.875 12.125C1.29167 11.5417 1 10.8333 1 10C1 9.15 1.29167 8.4375 1.875 7.8625C2.45833 7.2875 3.16667 7 4 7C4.85 7 5.5625 7.2875 6.1375 7.8625C6.7125 8.4375 7 9.15 7 10C7 10.8333 6.7125 11.5417 6.1375 12.125C5.5625 12.7083 4.85 13 4 13ZM20 13C19.1667 13 18.4583 12.7083 17.875 12.125C17.2917 11.5417 17 10.8333 17 10C17 9.15 17.2917 8.4375 17.875 7.8625C18.4583 7.2875 19.1667 7 20 7C20.85 7 21.5625 7.2875 22.1375 7.8625C22.7125 8.4375 23 9.15 23 10C23 10.8333 22.7125 11.5417 22.1375 12.125C21.5625 12.7083 20.85 13 20 13ZM12 10C11.1667 10 10.4583 9.70833 9.875 9.125C9.29167 8.54167 9 7.83333 9 7C9 6.15 9.29167 5.4375 9.875 4.8625C10.4583 4.2875 11.1667 4 12 4C12.85 4 13.5625 4.2875 14.1375 4.8625C14.7125 5.4375 15 6.15 15 7C15 7.83333 14.7125 8.54167 14.1375 9.125C13.5625 9.70833 12.85 10 12 10Z"
                              fill="#45B34A"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="p__tb">
          <section className="service-visitor">
            <div className="l__container">
              <div className="wow animated" style={{ visibility: "visible" }}>
                <div className="section__title text-center clearfix">
                  <h6>Testimonials</h6>
                  <h2 className="title">
                    What Our <span>clients says</span>
                  </h2>
                </div>
                <div className="owl-carousel owl-theme testimonial__slide--slider d-none d-md-block owl-loaded owl-drag">
                  <div
                    className="owl-stage-outer owl-height"
                    style={{ height: "474.781px" }}
                  >
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(-2912px, 0px, 0px)",
                        transition: "all",
                        width: 8736,
                      }}
                    >
                      <div
                        className="owl-item cloned"
                        style={{ width: 1436, marginRight: 20 }}
                      >
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 px-2">
                          {testimonials1.map((singleTest) => (
                            <div className="col">
                              <div className="service-visitor-card">
                                <div className="head">
                                  <p>
                                    {singleTest.name}
                                    <span>{singleTest.designation}</span>
                                  </p>
                                </div>
                                <div className="body">
                                  <p>{singleTest.review}</p>
                                </div>
                                <div className="footer">
                                  <ul className="">
                                    <li className="start">
                                      <i
                                        aria-hidden="true"
                                        className="fa fa-star"
                                      />
                                    </li>
                                    <li className="start">
                                      <i
                                        aria-hidden="true"
                                        className="fa fa-star"
                                      />
                                    </li>
                                    <li className="start">
                                      <i
                                        aria-hidden="true"
                                        className="fa fa-star"
                                      />
                                    </li>
                                    <li className="start">
                                      <i
                                        aria-hidden="true"
                                        className="fa fa-star"
                                      />
                                    </li>
                                    <li className="start">
                                      <i
                                        aria-hidden="true"
                                        className="fa fa-star"
                                      />
                                    </li>
                                  </ul>
                                  <p className="mb-0">
                                    <svg
                                      fill="none"
                                      height={22}
                                      viewBox="0 0 22 22"
                                      width={22}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M16.3285 11C16.3288 12.2536 15.8869 13.467 15.0805 14.4268C14.2741 15.3865 13.155 16.031 11.9201 16.2467C10.6853 16.4624 9.41389 16.2356 8.32986 15.6061C7.24583 14.9766 6.41866 13.9848 5.99398 12.8054L2.94629 15.2433C3.89392 17.0446 5.41777 18.4764 7.27452 19.3102C9.13128 20.144 11.2139 20.3316 13.1897 19.8431C15.1656 19.3546 16.9209 18.2182 18.1752 16.6153C19.4295 15.0124 20.1106 13.0354 20.1097 11"
                                        fill="#00AC47"
                                      />
                                      <path
                                        d="M16.3275 11C16.3268 11.8477 16.1236 12.683 15.7347 13.4363C15.3458 14.1896 14.7825 14.839 14.0918 15.3306L17.1051 17.7409C18.0499 16.8903 18.8054 15.8507 19.3229 14.6895C19.8403 13.5283 20.1081 12.2713 20.1088 11"
                                        fill="#4285F4"
                                      />
                                      <path
                                        d="M5.67177 11C5.67315 10.3841 5.78203 9.7731 5.99352 9.19462L2.94583 6.75674C2.25291 8.06379 1.89062 9.52064 1.89062 11C1.89062 12.4794 2.25291 13.9362 2.94583 15.2432L5.99352 12.8054C5.78203 12.2269 5.67315 11.6159 5.67177 11Z"
                                        fill="#FFBA00"
                                      />
                                      <path
                                        d="M11.0004 5.67188C12.1278 5.67223 13.2256 6.03256 14.134 6.70038L16.9252 4.09475C15.8891 3.20139 14.6645 2.55357 13.343 2.19964C12.0214 1.84572 10.637 1.79482 9.29306 2.05075C7.9491 2.30668 6.68029 2.86283 5.58132 3.67769C4.48235 4.49256 3.5816 5.54509 2.94629 6.75675L5.99398 9.19463C6.36565 8.16436 7.04556 7.27355 7.94129 6.64326C8.83701 6.01298 9.9051 5.67382 11.0004 5.67188Z"
                                        fill="#EA4435"
                                      />
                                      <path
                                        d="M20.1094 10.3125V11L18.5625 13.4062H11.3438V9.625H19.4219C19.6042 9.625 19.7791 9.69743 19.908 9.82636C20.0369 9.9553 20.1094 10.1302 20.1094 10.3125Z"
                                        fill="#4285F4"
                                      />
                                    </svg>
                                    <span>(Google Review)</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: 1436, marginRight: 20 }}
                      >
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 px-2">
                          {testimonials2.map((singleTest) => (
                            <div className="col">
                              <div className="service-visitor-card">
                                <div className="head">
                                  <p>
                                    {singleTest.name}
                                    <span>{singleTest.designation}</span>
                                  </p>
                                </div>
                                <div className="body">
                                  <p>{singleTest.review}</p>
                                </div>
                                <div className="footer">
                                  <ul className="">
                                    <li className="start">
                                      <i
                                        aria-hidden="true"
                                        className="fa fa-star"
                                      />
                                    </li>
                                    <li className="start">
                                      <i
                                        aria-hidden="true"
                                        className="fa fa-star"
                                      />
                                    </li>
                                    <li className="start">
                                      <i
                                        aria-hidden="true"
                                        className="fa fa-star"
                                      />
                                    </li>
                                    <li className="start">
                                      <i
                                        aria-hidden="true"
                                        className="fa fa-star"
                                      />
                                    </li>
                                    <li className="start">
                                      <i
                                        aria-hidden="true"
                                        className="fa fa-star"
                                      />
                                    </li>
                                  </ul>
                                  <p className="mb-0">
                                    <svg
                                      fill="none"
                                      height={22}
                                      viewBox="0 0 22 22"
                                      width={22}
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M16.3285 11C16.3288 12.2536 15.8869 13.467 15.0805 14.4268C14.2741 15.3865 13.155 16.031 11.9201 16.2467C10.6853 16.4624 9.41389 16.2356 8.32986 15.6061C7.24583 14.9766 6.41866 13.9848 5.99398 12.8054L2.94629 15.2433C3.89392 17.0446 5.41777 18.4764 7.27452 19.3102C9.13128 20.144 11.2139 20.3316 13.1897 19.8431C15.1656 19.3546 16.9209 18.2182 18.1752 16.6153C19.4295 15.0124 20.1106 13.0354 20.1097 11"
                                        fill="#00AC47"
                                      />
                                      <path
                                        d="M16.3275 11C16.3268 11.8477 16.1236 12.683 15.7347 13.4363C15.3458 14.1896 14.7825 14.839 14.0918 15.3306L17.1051 17.7409C18.0499 16.8903 18.8054 15.8507 19.3229 14.6895C19.8403 13.5283 20.1081 12.2713 20.1088 11"
                                        fill="#4285F4"
                                      />
                                      <path
                                        d="M5.67177 11C5.67315 10.3841 5.78203 9.7731 5.99352 9.19462L2.94583 6.75674C2.25291 8.06379 1.89062 9.52064 1.89062 11C1.89062 12.4794 2.25291 13.9362 2.94583 15.2432L5.99352 12.8054C5.78203 12.2269 5.67315 11.6159 5.67177 11Z"
                                        fill="#FFBA00"
                                      />
                                      <path
                                        d="M11.0004 5.67188C12.1278 5.67223 13.2256 6.03256 14.134 6.70038L16.9252 4.09475C15.8891 3.20139 14.6645 2.55357 13.343 2.19964C12.0214 1.84572 10.637 1.79482 9.29306 2.05075C7.9491 2.30668 6.68029 2.86283 5.58132 3.67769C4.48235 4.49256 3.5816 5.54509 2.94629 6.75675L5.99398 9.19463C6.36565 8.16436 7.04556 7.27355 7.94129 6.64326C8.83701 6.01298 9.9051 5.67382 11.0004 5.67188Z"
                                        fill="#EA4435"
                                      />
                                      <path
                                        d="M20.1094 10.3125V11L18.5625 13.4062H11.3438V9.625H19.4219C19.6042 9.625 19.7791 9.69743 19.908 9.82636C20.0369 9.9553 20.1094 10.1302 20.1094 10.3125Z"
                                        fill="#4285F4"
                                      />
                                    </svg>
                                    <span>(Google Review)</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-nav disabled">
                    <button
                      type="button"
                      role="presentation"
                      className="owl-prev"
                    >
                      <i className="fa-solid fa-circle-arrow-left" />
                      PREV
                    </button>
                    <button
                      type="button"
                      role="presentation"
                      className="owl-next"
                    >
                      NEXT
                      <i className="fa-solid fa-circle-arrow-right" />
                    </button>
                  </div>
                  <div className="owl-dots disabled" />
                </div>
                <div
                  className="owl-carousel owl-theme testimonial__mobile--slider d-md-none owl-loaded owl-drag"
                  style={{}}
                >
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        transition: "all",
                      }}
                    >
                      {testimonials1.map((testimonial) => (
                        <div className="owl-item">
                          <div className="service-visitor-card">
                            <div className="head">
                              <p>
                                {testimonial.name}
                                <span>{testimonial.designation}</span>
                              </p>
                            </div>
                            <div className="body">
                              <p>{testimonial.review}</p>
                            </div>
                            <div className="footer">
                              <ul className="">
                                <li className="start">
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-star"
                                  />
                                </li>
                                <li className="start">
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-star"
                                  />
                                </li>
                                <li className="start">
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-star"
                                  />
                                </li>
                                <li className="start">
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-star"
                                  />
                                </li>
                                <li className="start">
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-star"
                                  />
                                </li>
                              </ul>
                              <p className="mb-0">
                                <svg
                                  fill="none"
                                  height={22}
                                  viewBox="0 0 22 22"
                                  width={22}
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M16.3285 11C16.3288 12.2536 15.8869 13.467 15.0805 14.4268C14.2741 15.3865 13.155 16.031 11.9201 16.2467C10.6853 16.4624 9.41389 16.2356 8.32986 15.6061C7.24583 14.9766 6.41866 13.9848 5.99398 12.8054L2.94629 15.2433C3.89392 17.0446 5.41777 18.4764 7.27452 19.3102C9.13128 20.144 11.2139 20.3316 13.1897 19.8431C15.1656 19.3546 16.9209 18.2182 18.1752 16.6153C19.4295 15.0124 20.1106 13.0354 20.1097 11"
                                    fill="#00AC47"
                                  />
                                  <path
                                    d="M16.3275 11C16.3268 11.8477 16.1236 12.683 15.7347 13.4363C15.3458 14.1896 14.7825 14.839 14.0918 15.3306L17.1051 17.7409C18.0499 16.8903 18.8054 15.8507 19.3229 14.6895C19.8403 13.5283 20.1081 12.2713 20.1088 11"
                                    fill="#4285F4"
                                  />
                                  <path
                                    d="M5.67177 11C5.67315 10.3841 5.78203 9.7731 5.99352 9.19462L2.94583 6.75674C2.25291 8.06379 1.89062 9.52064 1.89062 11C1.89062 12.4794 2.25291 13.9362 2.94583 15.2432L5.99352 12.8054C5.78203 12.2269 5.67315 11.6159 5.67177 11Z"
                                    fill="#FFBA00"
                                  />
                                  <path
                                    d="M11.0004 5.67188C12.1278 5.67223 13.2256 6.03256 14.134 6.70038L16.9252 4.09475C15.8891 3.20139 14.6645 2.55357 13.343 2.19964C12.0214 1.84572 10.637 1.79482 9.29306 2.05075C7.9491 2.30668 6.68029 2.86283 5.58132 3.67769C4.48235 4.49256 3.5816 5.54509 2.94629 6.75675L5.99398 9.19463C6.36565 8.16436 7.04556 7.27355 7.94129 6.64326C8.83701 6.01298 9.9051 5.67382 11.0004 5.67188Z"
                                    fill="#EA4435"
                                  />
                                  <path
                                    d="M20.1094 10.3125V11L18.5625 13.4062H11.3438V9.625H19.4219C19.6042 9.625 19.7791 9.69743 19.908 9.82636C20.0369 9.9553 20.1094 10.1302 20.1094 10.3125Z"
                                    fill="#4285F4"
                                  />
                                </svg>
                                <span>(Google Review)</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                      {testimonials2.map((testimonial) => (
                        <div className="owl-item">
                          <div className="service-visitor-card">
                            <div className="head">
                              <p>
                                {testimonial.name}
                                <span>{testimonial.designation}</span>
                              </p>
                            </div>
                            <div className="body">
                              <p>{testimonial.review}</p>
                            </div>
                            <div className="footer">
                              <ul className="">
                                <li className="start">
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-star"
                                  />
                                </li>
                                <li className="start">
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-star"
                                  />
                                </li>
                                <li className="start">
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-star"
                                  />
                                </li>
                                <li className="start">
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-star"
                                  />
                                </li>
                                <li className="start">
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-star"
                                  />
                                </li>
                              </ul>
                              <p className="mb-0">
                                <svg
                                  fill="none"
                                  height={22}
                                  viewBox="0 0 22 22"
                                  width={22}
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M16.3285 11C16.3288 12.2536 15.8869 13.467 15.0805 14.4268C14.2741 15.3865 13.155 16.031 11.9201 16.2467C10.6853 16.4624 9.41389 16.2356 8.32986 15.6061C7.24583 14.9766 6.41866 13.9848 5.99398 12.8054L2.94629 15.2433C3.89392 17.0446 5.41777 18.4764 7.27452 19.3102C9.13128 20.144 11.2139 20.3316 13.1897 19.8431C15.1656 19.3546 16.9209 18.2182 18.1752 16.6153C19.4295 15.0124 20.1106 13.0354 20.1097 11"
                                    fill="#00AC47"
                                  />
                                  <path
                                    d="M16.3275 11C16.3268 11.8477 16.1236 12.683 15.7347 13.4363C15.3458 14.1896 14.7825 14.839 14.0918 15.3306L17.1051 17.7409C18.0499 16.8903 18.8054 15.8507 19.3229 14.6895C19.8403 13.5283 20.1081 12.2713 20.1088 11"
                                    fill="#4285F4"
                                  />
                                  <path
                                    d="M5.67177 11C5.67315 10.3841 5.78203 9.7731 5.99352 9.19462L2.94583 6.75674C2.25291 8.06379 1.89062 9.52064 1.89062 11C1.89062 12.4794 2.25291 13.9362 2.94583 15.2432L5.99352 12.8054C5.78203 12.2269 5.67315 11.6159 5.67177 11Z"
                                    fill="#FFBA00"
                                  />
                                  <path
                                    d="M11.0004 5.67188C12.1278 5.67223 13.2256 6.03256 14.134 6.70038L16.9252 4.09475C15.8891 3.20139 14.6645 2.55357 13.343 2.19964C12.0214 1.84572 10.637 1.79482 9.29306 2.05075C7.9491 2.30668 6.68029 2.86283 5.58132 3.67769C4.48235 4.49256 3.5816 5.54509 2.94629 6.75675L5.99398 9.19463C6.36565 8.16436 7.04556 7.27355 7.94129 6.64326C8.83701 6.01298 9.9051 5.67382 11.0004 5.67188Z"
                                    fill="#EA4435"
                                  />
                                  <path
                                    d="M20.1094 10.3125V11L18.5625 13.4062H11.3438V9.625H19.4219C19.6042 9.625 19.7791 9.69743 19.908 9.82636C20.0369 9.9553 20.1094 10.1302 20.1094 10.3125Z"
                                    fill="#4285F4"
                                  />
                                </svg>
                                <span>(Google Review)</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="owl-nav disabled">
                    <button
                      type="button"
                      role="presentation"
                      className="owl-prev"
                    >
                      <i className="fa-solid fa-circle-arrow-left" />
                      PREV
                    </button>
                    <button
                      type="button"
                      role="presentation"
                      className="owl-next"
                    >
                      NEXT
                      <i className="fa-solid fa-circle-arrow-right" />
                    </button>
                  </div>
                  <div className="owl-dots disabled" />
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="partner partner__home p__tb overflow">
          <div className="l__container">
            <div className="section__title text-center">
              <h6>Our Valued Partners</h6>
              <h2 className="title">
                Trusted by <span>Top-Rated Companies </span>
              </h2>
            </div>
            <div className="owl-carousel owl-theme home__partner--slider owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-10752px, 0px, 0px)",
                    transition: "all",
                    width: 18432,
                  }}
                >
                  <div
                    className="owl-item cloned"
                    style={{ width: 1436, marginRight: 100 }}
                  >
                    <div className="item">
                      <div className="row row-cols-3 row-cols-sm-3 row-cols-md-6 row-cols-lg-6 g-xl-5 g-4 justify-content-center align-items-center">
                        <div className="col">
                          <div className="partner__card text-center">
                            <img className="lazy-load" src="/client-1.png" />
                          </div>
                        </div>{" "}
                        <div className="col">
                          <div className="partner__card text-center">
                            <img className="lazy-load" src="/client-2.png" />
                          </div>
                        </div>{" "}
                        <div className="col">
                          <div className="partner__card text-center">
                            <img className="lazy-load" src="/client-3.png" />
                          </div>
                        </div>{" "}
                        <div className="col">
                          <div className="partner__card text-center">
                            <img className="lazy-load" src="/client-4.png" />
                          </div>
                        </div>{" "}
                        <div className="col">
                          <div className="partner__card text-center">
                            <img className="lazy-load" src="/client-5.png" />
                          </div>
                        </div>{" "}
                        <div className="col">
                          <div className="partner__card text-center">
                            <img className="lazy-load" src="/client-1.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 1436, marginRight: 100 }}
                  >
                    <div className="item">
                      <div className="row row-cols-3 row-cols-sm-3 row-cols-md-6 row-cols-lg-6 g-xl-5 g-4 justify-content-center align-items-center">
                        <div className="col">
                          <div className="partner__card text-center">
                            <img className="lazy-load" src="/client-1.png" />
                          </div>
                        </div>{" "}
                        <div className="col">
                          <div className="partner__card text-center">
                            <img className="lazy-load" src="/client-5.png" />
                          </div>
                        </div>{" "}
                        <div className="col">
                          <div className="partner__card text-center">
                            <img className="lazy-load" src="/client-4.png" />
                          </div>
                        </div>{" "}
                        <div className="col">
                          <div className="partner__card text-center">
                            <img className="lazy-load" src="/client-3.png" />
                          </div>
                        </div>{" "}
                        <div className="col">
                          <div className="partner__card text-center">
                            <img className="lazy-load" src="/client-2.png" />
                          </div>
                        </div>{" "}
                        <div className="col">
                          <div className="partner__card text-center">
                            <img className="lazy-load" src="/client-1.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav disabled">
                <button type="button" role="presentation" className="owl-prev">
                  <i className="fa-solid fa-circle-arrow-left" />
                  PREV
                </button>
                <button type="button" role="presentation" className="owl-next">
                  NEXT
                  <i className="fa-solid fa-circle-arrow-right" />
                </button>
              </div>
              <div className="owl-dots disabled" />
            </div>
          </div>
        </section>
        {/* <section className="blog__home p__tb overflow">
          <div
            className="l__container wow fadeInUp animated"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              WebkitAnimationDuration: "1s",
              MozAnimationDuration: "1s",
              animationDuration: "1s",
            }}
          >
            <div className="section__title text-center clearfix">
              <h6>Our blogs</h6>
              <h2 className="title">
                our lastest &amp; <span>popular blogs</span>
              </h2>
              <p className="d-none d-lg-inline-block">
                Tailored solutions addressing diverse business challenges
                <a className="more" href="blog">
                  See all
                </a>
              </p>
            </div>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-4">
              <div className="col">
                <div className="blog__card">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="blog__card--img">
                        <img
                          alt="web development cost"
                          className="lazy-load"
                          data-src="/W-02.webp"
                          src="/W-02.webp"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="blog__card--content p-3">
                        <span className="date">Jun 12, 2024</span>
                        <a href="website-design-and-development-cost-in-nepal">
                          <h3 className="title">
                            Best Website Design and Development Cost in Nepal
                          </h3>
                        </a>
                        <p className="text">
                          You must be wondering what may be the cost of Website
                          design. Website development in Nepal especially the
                          business owners and those who want to bring their
                          business to the digital world.
                        </p>
                        <a
                          className="more"
                          href="website-design-and-development-cost-in-nepal"
                        >
                          read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="blog__card">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="blog__card--img">
                        <img
                          alt="best IT company"
                          className="lazy-load"
                          data-src="/W-01.webp"
                          src="/W-01.webp"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="blog__card--content p-3">
                        <span className="date">Jun 12, 2024</span>
                        <a href="best-it-company-in-nepal">
                          <h3 className="title">
                            Best IT Company in Nepal 2024
                          </h3>
                        </a>
                        <p className="text">
                          The number of IT companies found in every corner of
                          Nepal has been living proof that Nepal has over 500+
                          IT companies in Nepal and more than 60% are in
                          Kathmandu itself.
                        </p>
                        <a className="more" href="best-it-company-in-nepal">
                          read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 d-lg-none">
              <a className="l__button l__button--primary" href="blog">
                <span>See all</span>
                <i className="fa-solid fa-chevron-right" />
              </a>
            </div>
          </div>
        </section> */}
      </div>

      <div
        aria-hidden="true"
        aria-labelledby="seoSubscriptionLabel"
        className="modal fade subscription__form"
        id="seoSubscription"
        tabIndex={-1}
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content modalbox overflow-hidden">
            <div className="modal-body modalbody p-0">
              <div className="row">
                <div className="col-md-6">
                  <div className="left-side left-side-img d-none d-md-block">
                    <img alt="" src="/subscription.svg" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-side">
                    <div className="close-button">
                      <button
                        aria-label="Close"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        type="button"
                      />
                    </div>
                    <form onsubmit="event.preventDefault();handlePricingContact(this);">
                      <input
                        name="csrfmiddlewaretoken"
                        type="hidden"
                        defaultValue="WpqDcQ5HhKehVP6zV8nbNy0XSDQHHbgN1N34QK48l6nb4FKDERtM76r0R8nx92CE"
                      />
                      <h5 className="normal">Subscription Form</h5>
                      <p>Please Fill Out the Following Details</p>
                      <div className="mb-3">
                        <input
                          name="name"
                          placeholder="Enter Your Name/Business Name *"
                          required=""
                          type="text"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Phone No. <span>*</span>
                        </label>
                        <div className="iti iti--allow-dropdown iti--separate-dial-code">
                          <div className="iti__flag-container">
                            <div
                              className="iti__selected-flag"
                              role="combobox"
                              aria-controls="iti-1__country-listbox"
                              aria-owns="iti-1__country-listbox"
                              aria-expanded="false"
                              tabIndex={0}
                            >
                              <div className="iti__flag" />
                              <div className="iti__selected-dial-code" />
                              <div className="iti__arrow" />
                            </div>
                            <ul
                              className="iti__country-list iti__hide"
                              id="iti-1__country-listbox"
                              role="listbox"
                              aria-label="List of countries"
                            >
                              <li
                                className="iti__country iti__preferred"
                                tabIndex={-1}
                                id="iti-1__item-us-preferred"
                                role="option"
                                data-dial-code={1}
                                data-country-code="us"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__us" />
                                </div>
                                <span className="iti__country-name">
                                  United States
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__preferred"
                                tabIndex={-1}
                                id="iti-1__item-gb-preferred"
                                role="option"
                                data-dial-code={44}
                                data-country-code="gb"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__gb" />
                                </div>
                                <span className="iti__country-name">
                                  United Kingdom
                                </span>
                                <span className="iti__dial-code">+44</span>
                              </li>
                              <li
                                className="iti__divider"
                                role="separator"
                                aria-disabled="true"
                              />
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-af"
                                role="option"
                                data-dial-code={93}
                                data-country-code="af"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__af" />
                                </div>
                                <span className="iti__country-name">
                                  Afghanistan (‫افغانستان‬‎)
                                </span>
                                <span className="iti__dial-code">+93</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-al"
                                role="option"
                                data-dial-code={355}
                                data-country-code="al"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__al" />
                                </div>
                                <span className="iti__country-name">
                                  Albania (Shqipëri)
                                </span>
                                <span className="iti__dial-code">+355</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-dz"
                                role="option"
                                data-dial-code={213}
                                data-country-code="dz"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__dz" />
                                </div>
                                <span className="iti__country-name">
                                  Algeria (‫الجزائر‬‎)
                                </span>
                                <span className="iti__dial-code">+213</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-as"
                                role="option"
                                data-dial-code={1}
                                data-country-code="as"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__as" />
                                </div>
                                <span className="iti__country-name">
                                  American Samoa
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ad"
                                role="option"
                                data-dial-code={376}
                                data-country-code="ad"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ad" />
                                </div>
                                <span className="iti__country-name">
                                  Andorra
                                </span>
                                <span className="iti__dial-code">+376</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ao"
                                role="option"
                                data-dial-code={244}
                                data-country-code="ao"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ao" />
                                </div>
                                <span className="iti__country-name">
                                  Angola
                                </span>
                                <span className="iti__dial-code">+244</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ai"
                                role="option"
                                data-dial-code={1}
                                data-country-code="ai"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ai" />
                                </div>
                                <span className="iti__country-name">
                                  Anguilla
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ag"
                                role="option"
                                data-dial-code={1}
                                data-country-code="ag"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ag" />
                                </div>
                                <span className="iti__country-name">
                                  Antigua and Barbuda
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ar"
                                role="option"
                                data-dial-code={54}
                                data-country-code="ar"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ar" />
                                </div>
                                <span className="iti__country-name">
                                  Argentina
                                </span>
                                <span className="iti__dial-code">+54</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-am"
                                role="option"
                                data-dial-code={374}
                                data-country-code="am"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__am" />
                                </div>
                                <span className="iti__country-name">
                                  Armenia (Հայաստան)
                                </span>
                                <span className="iti__dial-code">+374</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-aw"
                                role="option"
                                data-dial-code={297}
                                data-country-code="aw"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__aw" />
                                </div>
                                <span className="iti__country-name">Aruba</span>
                                <span className="iti__dial-code">+297</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ac"
                                role="option"
                                data-dial-code={247}
                                data-country-code="ac"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ac" />
                                </div>
                                <span className="iti__country-name">
                                  Ascension Island
                                </span>
                                <span className="iti__dial-code">+247</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-au"
                                role="option"
                                data-dial-code={61}
                                data-country-code="au"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__au" />
                                </div>
                                <span className="iti__country-name">
                                  Australia
                                </span>
                                <span className="iti__dial-code">+61</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-at"
                                role="option"
                                data-dial-code={43}
                                data-country-code="at"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__at" />
                                </div>
                                <span className="iti__country-name">
                                  Austria (Österreich)
                                </span>
                                <span className="iti__dial-code">+43</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-az"
                                role="option"
                                data-dial-code={994}
                                data-country-code="az"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__az" />
                                </div>
                                <span className="iti__country-name">
                                  Azerbaijan (Azərbaycan)
                                </span>
                                <span className="iti__dial-code">+994</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-bs"
                                role="option"
                                data-dial-code={1}
                                data-country-code="bs"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__bs" />
                                </div>
                                <span className="iti__country-name">
                                  Bahamas
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-bh"
                                role="option"
                                data-dial-code={973}
                                data-country-code="bh"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__bh" />
                                </div>
                                <span className="iti__country-name">
                                  Bahrain (‫البحرين‬‎)
                                </span>
                                <span className="iti__dial-code">+973</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-bd"
                                role="option"
                                data-dial-code={880}
                                data-country-code="bd"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__bd" />
                                </div>
                                <span className="iti__country-name">
                                  Bangladesh (বাংলাদেশ)
                                </span>
                                <span className="iti__dial-code">+880</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-bb"
                                role="option"
                                data-dial-code={1}
                                data-country-code="bb"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__bb" />
                                </div>
                                <span className="iti__country-name">
                                  Barbados
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-by"
                                role="option"
                                data-dial-code={375}
                                data-country-code="by"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__by" />
                                </div>
                                <span className="iti__country-name">
                                  Belarus (Беларусь)
                                </span>
                                <span className="iti__dial-code">+375</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-be"
                                role="option"
                                data-dial-code={32}
                                data-country-code="be"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__be" />
                                </div>
                                <span className="iti__country-name">
                                  Belgium (België)
                                </span>
                                <span className="iti__dial-code">+32</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-bz"
                                role="option"
                                data-dial-code={501}
                                data-country-code="bz"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__bz" />
                                </div>
                                <span className="iti__country-name">
                                  Belize
                                </span>
                                <span className="iti__dial-code">+501</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-bj"
                                role="option"
                                data-dial-code={229}
                                data-country-code="bj"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__bj" />
                                </div>
                                <span className="iti__country-name">
                                  Benin (Bénin)
                                </span>
                                <span className="iti__dial-code">+229</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-bm"
                                role="option"
                                data-dial-code={1}
                                data-country-code="bm"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__bm" />
                                </div>
                                <span className="iti__country-name">
                                  Bermuda
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-bt"
                                role="option"
                                data-dial-code={975}
                                data-country-code="bt"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__bt" />
                                </div>
                                <span className="iti__country-name">
                                  Bhutan (འབྲུག)
                                </span>
                                <span className="iti__dial-code">+975</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-bo"
                                role="option"
                                data-dial-code={591}
                                data-country-code="bo"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__bo" />
                                </div>
                                <span className="iti__country-name">
                                  Bolivia
                                </span>
                                <span className="iti__dial-code">+591</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ba"
                                role="option"
                                data-dial-code={387}
                                data-country-code="ba"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ba" />
                                </div>
                                <span className="iti__country-name">
                                  Bosnia and Herzegovina (Босна и Херцеговина)
                                </span>
                                <span className="iti__dial-code">+387</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-bw"
                                role="option"
                                data-dial-code={267}
                                data-country-code="bw"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__bw" />
                                </div>
                                <span className="iti__country-name">
                                  Botswana
                                </span>
                                <span className="iti__dial-code">+267</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-br"
                                role="option"
                                data-dial-code={55}
                                data-country-code="br"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__br" />
                                </div>
                                <span className="iti__country-name">
                                  Brazil (Brasil)
                                </span>
                                <span className="iti__dial-code">+55</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-io"
                                role="option"
                                data-dial-code={246}
                                data-country-code="io"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__io" />
                                </div>
                                <span className="iti__country-name">
                                  British Indian Ocean Territory
                                </span>
                                <span className="iti__dial-code">+246</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-vg"
                                role="option"
                                data-dial-code={1}
                                data-country-code="vg"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__vg" />
                                </div>
                                <span className="iti__country-name">
                                  British Virgin Islands
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-bn"
                                role="option"
                                data-dial-code={673}
                                data-country-code="bn"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__bn" />
                                </div>
                                <span className="iti__country-name">
                                  Brunei
                                </span>
                                <span className="iti__dial-code">+673</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-bg"
                                role="option"
                                data-dial-code={359}
                                data-country-code="bg"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__bg" />
                                </div>
                                <span className="iti__country-name">
                                  Bulgaria (България)
                                </span>
                                <span className="iti__dial-code">+359</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-bf"
                                role="option"
                                data-dial-code={226}
                                data-country-code="bf"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__bf" />
                                </div>
                                <span className="iti__country-name">
                                  Burkina Faso
                                </span>
                                <span className="iti__dial-code">+226</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-bi"
                                role="option"
                                data-dial-code={257}
                                data-country-code="bi"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__bi" />
                                </div>
                                <span className="iti__country-name">
                                  Burundi (Uburundi)
                                </span>
                                <span className="iti__dial-code">+257</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-kh"
                                role="option"
                                data-dial-code={855}
                                data-country-code="kh"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__kh" />
                                </div>
                                <span className="iti__country-name">
                                  Cambodia (កម្ពុជា)
                                </span>
                                <span className="iti__dial-code">+855</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-cm"
                                role="option"
                                data-dial-code={237}
                                data-country-code="cm"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__cm" />
                                </div>
                                <span className="iti__country-name">
                                  Cameroon (Cameroun)
                                </span>
                                <span className="iti__dial-code">+237</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ca"
                                role="option"
                                data-dial-code={1}
                                data-country-code="ca"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ca" />
                                </div>
                                <span className="iti__country-name">
                                  Canada
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-cv"
                                role="option"
                                data-dial-code={238}
                                data-country-code="cv"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__cv" />
                                </div>
                                <span className="iti__country-name">
                                  Cape Verde (Kabu Verdi)
                                </span>
                                <span className="iti__dial-code">+238</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-bq"
                                role="option"
                                data-dial-code={599}
                                data-country-code="bq"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__bq" />
                                </div>
                                <span className="iti__country-name">
                                  Caribbean Netherlands
                                </span>
                                <span className="iti__dial-code">+599</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ky"
                                role="option"
                                data-dial-code={1}
                                data-country-code="ky"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ky" />
                                </div>
                                <span className="iti__country-name">
                                  Cayman Islands
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-cf"
                                role="option"
                                data-dial-code={236}
                                data-country-code="cf"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__cf" />
                                </div>
                                <span className="iti__country-name">
                                  Central African Republic (République
                                  centrafricaine)
                                </span>
                                <span className="iti__dial-code">+236</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-td"
                                role="option"
                                data-dial-code={235}
                                data-country-code="td"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__td" />
                                </div>
                                <span className="iti__country-name">
                                  Chad (Tchad)
                                </span>
                                <span className="iti__dial-code">+235</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-cl"
                                role="option"
                                data-dial-code={56}
                                data-country-code="cl"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__cl" />
                                </div>
                                <span className="iti__country-name">Chile</span>
                                <span className="iti__dial-code">+56</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-cn"
                                role="option"
                                data-dial-code={86}
                                data-country-code="cn"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__cn" />
                                </div>
                                <span className="iti__country-name">
                                  China (中国)
                                </span>
                                <span className="iti__dial-code">+86</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-cx"
                                role="option"
                                data-dial-code={61}
                                data-country-code="cx"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__cx" />
                                </div>
                                <span className="iti__country-name">
                                  Christmas Island
                                </span>
                                <span className="iti__dial-code">+61</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-cc"
                                role="option"
                                data-dial-code={61}
                                data-country-code="cc"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__cc" />
                                </div>
                                <span className="iti__country-name">
                                  Cocos (Keeling) Islands
                                </span>
                                <span className="iti__dial-code">+61</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-co"
                                role="option"
                                data-dial-code={57}
                                data-country-code="co"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__co" />
                                </div>
                                <span className="iti__country-name">
                                  Colombia
                                </span>
                                <span className="iti__dial-code">+57</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-km"
                                role="option"
                                data-dial-code={269}
                                data-country-code="km"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__km" />
                                </div>
                                <span className="iti__country-name">
                                  Comoros (‫جزر القمر‬‎)
                                </span>
                                <span className="iti__dial-code">+269</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-cd"
                                role="option"
                                data-dial-code={243}
                                data-country-code="cd"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__cd" />
                                </div>
                                <span className="iti__country-name">
                                  Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)
                                </span>
                                <span className="iti__dial-code">+243</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-cg"
                                role="option"
                                data-dial-code={242}
                                data-country-code="cg"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__cg" />
                                </div>
                                <span className="iti__country-name">
                                  Congo (Republic) (Congo-Brazzaville)
                                </span>
                                <span className="iti__dial-code">+242</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ck"
                                role="option"
                                data-dial-code={682}
                                data-country-code="ck"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ck" />
                                </div>
                                <span className="iti__country-name">
                                  Cook Islands
                                </span>
                                <span className="iti__dial-code">+682</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-cr"
                                role="option"
                                data-dial-code={506}
                                data-country-code="cr"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__cr" />
                                </div>
                                <span className="iti__country-name">
                                  Costa Rica
                                </span>
                                <span className="iti__dial-code">+506</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ci"
                                role="option"
                                data-dial-code={225}
                                data-country-code="ci"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ci" />
                                </div>
                                <span className="iti__country-name">
                                  Côte d’Ivoire
                                </span>
                                <span className="iti__dial-code">+225</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-hr"
                                role="option"
                                data-dial-code={385}
                                data-country-code="hr"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__hr" />
                                </div>
                                <span className="iti__country-name">
                                  Croatia (Hrvatska)
                                </span>
                                <span className="iti__dial-code">+385</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-cu"
                                role="option"
                                data-dial-code={53}
                                data-country-code="cu"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__cu" />
                                </div>
                                <span className="iti__country-name">Cuba</span>
                                <span className="iti__dial-code">+53</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-cw"
                                role="option"
                                data-dial-code={599}
                                data-country-code="cw"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__cw" />
                                </div>
                                <span className="iti__country-name">
                                  Curaçao
                                </span>
                                <span className="iti__dial-code">+599</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-cy"
                                role="option"
                                data-dial-code={357}
                                data-country-code="cy"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__cy" />
                                </div>
                                <span className="iti__country-name">
                                  Cyprus (Κύπρος)
                                </span>
                                <span className="iti__dial-code">+357</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-cz"
                                role="option"
                                data-dial-code={420}
                                data-country-code="cz"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__cz" />
                                </div>
                                <span className="iti__country-name">
                                  Czech Republic (Česká republika)
                                </span>
                                <span className="iti__dial-code">+420</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-dk"
                                role="option"
                                data-dial-code={45}
                                data-country-code="dk"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__dk" />
                                </div>
                                <span className="iti__country-name">
                                  Denmark (Danmark)
                                </span>
                                <span className="iti__dial-code">+45</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-dj"
                                role="option"
                                data-dial-code={253}
                                data-country-code="dj"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__dj" />
                                </div>
                                <span className="iti__country-name">
                                  Djibouti
                                </span>
                                <span className="iti__dial-code">+253</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-dm"
                                role="option"
                                data-dial-code={1}
                                data-country-code="dm"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__dm" />
                                </div>
                                <span className="iti__country-name">
                                  Dominica
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-do"
                                role="option"
                                data-dial-code={1}
                                data-country-code="do"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__do" />
                                </div>
                                <span className="iti__country-name">
                                  Dominican Republic (República Dominicana)
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ec"
                                role="option"
                                data-dial-code={593}
                                data-country-code="ec"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ec" />
                                </div>
                                <span className="iti__country-name">
                                  Ecuador
                                </span>
                                <span className="iti__dial-code">+593</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-eg"
                                role="option"
                                data-dial-code={20}
                                data-country-code="eg"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__eg" />
                                </div>
                                <span className="iti__country-name">
                                  Egypt (‫مصر‬‎)
                                </span>
                                <span className="iti__dial-code">+20</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-sv"
                                role="option"
                                data-dial-code={503}
                                data-country-code="sv"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__sv" />
                                </div>
                                <span className="iti__country-name">
                                  El Salvador
                                </span>
                                <span className="iti__dial-code">+503</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-gq"
                                role="option"
                                data-dial-code={240}
                                data-country-code="gq"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__gq" />
                                </div>
                                <span className="iti__country-name">
                                  Equatorial Guinea (Guinea Ecuatorial)
                                </span>
                                <span className="iti__dial-code">+240</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-er"
                                role="option"
                                data-dial-code={291}
                                data-country-code="er"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__er" />
                                </div>
                                <span className="iti__country-name">
                                  Eritrea
                                </span>
                                <span className="iti__dial-code">+291</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ee"
                                role="option"
                                data-dial-code={372}
                                data-country-code="ee"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ee" />
                                </div>
                                <span className="iti__country-name">
                                  Estonia (Eesti)
                                </span>
                                <span className="iti__dial-code">+372</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-sz"
                                role="option"
                                data-dial-code={268}
                                data-country-code="sz"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__sz" />
                                </div>
                                <span className="iti__country-name">
                                  Eswatini
                                </span>
                                <span className="iti__dial-code">+268</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-et"
                                role="option"
                                data-dial-code={251}
                                data-country-code="et"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__et" />
                                </div>
                                <span className="iti__country-name">
                                  Ethiopia
                                </span>
                                <span className="iti__dial-code">+251</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-fk"
                                role="option"
                                data-dial-code={500}
                                data-country-code="fk"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__fk" />
                                </div>
                                <span className="iti__country-name">
                                  Falkland Islands (Islas Malvinas)
                                </span>
                                <span className="iti__dial-code">+500</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-fo"
                                role="option"
                                data-dial-code={298}
                                data-country-code="fo"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__fo" />
                                </div>
                                <span className="iti__country-name">
                                  Faroe Islands (Føroyar)
                                </span>
                                <span className="iti__dial-code">+298</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-fj"
                                role="option"
                                data-dial-code={679}
                                data-country-code="fj"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__fj" />
                                </div>
                                <span className="iti__country-name">Fiji</span>
                                <span className="iti__dial-code">+679</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-fi"
                                role="option"
                                data-dial-code={358}
                                data-country-code="fi"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__fi" />
                                </div>
                                <span className="iti__country-name">
                                  Finland (Suomi)
                                </span>
                                <span className="iti__dial-code">+358</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-fr"
                                role="option"
                                data-dial-code={33}
                                data-country-code="fr"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__fr" />
                                </div>
                                <span className="iti__country-name">
                                  France
                                </span>
                                <span className="iti__dial-code">+33</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-gf"
                                role="option"
                                data-dial-code={594}
                                data-country-code="gf"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__gf" />
                                </div>
                                <span className="iti__country-name">
                                  French Guiana (Guyane française)
                                </span>
                                <span className="iti__dial-code">+594</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-pf"
                                role="option"
                                data-dial-code={689}
                                data-country-code="pf"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__pf" />
                                </div>
                                <span className="iti__country-name">
                                  French Polynesia (Polynésie française)
                                </span>
                                <span className="iti__dial-code">+689</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ga"
                                role="option"
                                data-dial-code={241}
                                data-country-code="ga"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ga" />
                                </div>
                                <span className="iti__country-name">Gabon</span>
                                <span className="iti__dial-code">+241</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-gm"
                                role="option"
                                data-dial-code={220}
                                data-country-code="gm"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__gm" />
                                </div>
                                <span className="iti__country-name">
                                  Gambia
                                </span>
                                <span className="iti__dial-code">+220</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ge"
                                role="option"
                                data-dial-code={995}
                                data-country-code="ge"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ge" />
                                </div>
                                <span className="iti__country-name">
                                  Georgia (საქართველო)
                                </span>
                                <span className="iti__dial-code">+995</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-de"
                                role="option"
                                data-dial-code={49}
                                data-country-code="de"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__de" />
                                </div>
                                <span className="iti__country-name">
                                  Germany (Deutschland)
                                </span>
                                <span className="iti__dial-code">+49</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-gh"
                                role="option"
                                data-dial-code={233}
                                data-country-code="gh"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__gh" />
                                </div>
                                <span className="iti__country-name">
                                  Ghana (Gaana)
                                </span>
                                <span className="iti__dial-code">+233</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-gi"
                                role="option"
                                data-dial-code={350}
                                data-country-code="gi"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__gi" />
                                </div>
                                <span className="iti__country-name">
                                  Gibraltar
                                </span>
                                <span className="iti__dial-code">+350</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-gr"
                                role="option"
                                data-dial-code={30}
                                data-country-code="gr"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__gr" />
                                </div>
                                <span className="iti__country-name">
                                  Greece (Ελλάδα)
                                </span>
                                <span className="iti__dial-code">+30</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-gl"
                                role="option"
                                data-dial-code={299}
                                data-country-code="gl"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__gl" />
                                </div>
                                <span className="iti__country-name">
                                  Greenland (Kalaallit Nunaat)
                                </span>
                                <span className="iti__dial-code">+299</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-gd"
                                role="option"
                                data-dial-code={1}
                                data-country-code="gd"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__gd" />
                                </div>
                                <span className="iti__country-name">
                                  Grenada
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-gp"
                                role="option"
                                data-dial-code={590}
                                data-country-code="gp"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__gp" />
                                </div>
                                <span className="iti__country-name">
                                  Guadeloupe
                                </span>
                                <span className="iti__dial-code">+590</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-gu"
                                role="option"
                                data-dial-code={1}
                                data-country-code="gu"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__gu" />
                                </div>
                                <span className="iti__country-name">Guam</span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-gt"
                                role="option"
                                data-dial-code={502}
                                data-country-code="gt"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__gt" />
                                </div>
                                <span className="iti__country-name">
                                  Guatemala
                                </span>
                                <span className="iti__dial-code">+502</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-gg"
                                role="option"
                                data-dial-code={44}
                                data-country-code="gg"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__gg" />
                                </div>
                                <span className="iti__country-name">
                                  Guernsey
                                </span>
                                <span className="iti__dial-code">+44</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-gn"
                                role="option"
                                data-dial-code={224}
                                data-country-code="gn"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__gn" />
                                </div>
                                <span className="iti__country-name">
                                  Guinea (Guinée)
                                </span>
                                <span className="iti__dial-code">+224</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-gw"
                                role="option"
                                data-dial-code={245}
                                data-country-code="gw"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__gw" />
                                </div>
                                <span className="iti__country-name">
                                  Guinea-Bissau (Guiné Bissau)
                                </span>
                                <span className="iti__dial-code">+245</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-gy"
                                role="option"
                                data-dial-code={592}
                                data-country-code="gy"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__gy" />
                                </div>
                                <span className="iti__country-name">
                                  Guyana
                                </span>
                                <span className="iti__dial-code">+592</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ht"
                                role="option"
                                data-dial-code={509}
                                data-country-code="ht"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ht" />
                                </div>
                                <span className="iti__country-name">Haiti</span>
                                <span className="iti__dial-code">+509</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-hn"
                                role="option"
                                data-dial-code={504}
                                data-country-code="hn"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__hn" />
                                </div>
                                <span className="iti__country-name">
                                  Honduras
                                </span>
                                <span className="iti__dial-code">+504</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-hk"
                                role="option"
                                data-dial-code={852}
                                data-country-code="hk"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__hk" />
                                </div>
                                <span className="iti__country-name">
                                  Hong Kong (香港)
                                </span>
                                <span className="iti__dial-code">+852</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-hu"
                                role="option"
                                data-dial-code={36}
                                data-country-code="hu"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__hu" />
                                </div>
                                <span className="iti__country-name">
                                  Hungary (Magyarország)
                                </span>
                                <span className="iti__dial-code">+36</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-is"
                                role="option"
                                data-dial-code={354}
                                data-country-code="is"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__is" />
                                </div>
                                <span className="iti__country-name">
                                  Iceland (Ísland)
                                </span>
                                <span className="iti__dial-code">+354</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-in"
                                role="option"
                                data-dial-code={91}
                                data-country-code="in"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__in" />
                                </div>
                                <span className="iti__country-name">
                                  India (भारत)
                                </span>
                                <span className="iti__dial-code">+91</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-id"
                                role="option"
                                data-dial-code={62}
                                data-country-code="id"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__id" />
                                </div>
                                <span className="iti__country-name">
                                  Indonesia
                                </span>
                                <span className="iti__dial-code">+62</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ir"
                                role="option"
                                data-dial-code={98}
                                data-country-code="ir"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ir" />
                                </div>
                                <span className="iti__country-name">
                                  Iran (‫ایران‬‎)
                                </span>
                                <span className="iti__dial-code">+98</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-iq"
                                role="option"
                                data-dial-code={964}
                                data-country-code="iq"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__iq" />
                                </div>
                                <span className="iti__country-name">
                                  Iraq (‫العراق‬‎)
                                </span>
                                <span className="iti__dial-code">+964</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ie"
                                role="option"
                                data-dial-code={353}
                                data-country-code="ie"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ie" />
                                </div>
                                <span className="iti__country-name">
                                  Ireland
                                </span>
                                <span className="iti__dial-code">+353</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-im"
                                role="option"
                                data-dial-code={44}
                                data-country-code="im"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__im" />
                                </div>
                                <span className="iti__country-name">
                                  Isle of Man
                                </span>
                                <span className="iti__dial-code">+44</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-il"
                                role="option"
                                data-dial-code={972}
                                data-country-code="il"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__il" />
                                </div>
                                <span className="iti__country-name">
                                  Israel (‫ישראל‬‎)
                                </span>
                                <span className="iti__dial-code">+972</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-it"
                                role="option"
                                data-dial-code={39}
                                data-country-code="it"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__it" />
                                </div>
                                <span className="iti__country-name">
                                  Italy (Italia)
                                </span>
                                <span className="iti__dial-code">+39</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-jm"
                                role="option"
                                data-dial-code={1}
                                data-country-code="jm"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__jm" />
                                </div>
                                <span className="iti__country-name">
                                  Jamaica
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-jp"
                                role="option"
                                data-dial-code={81}
                                data-country-code="jp"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__jp" />
                                </div>
                                <span className="iti__country-name">
                                  Japan (日本)
                                </span>
                                <span className="iti__dial-code">+81</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-je"
                                role="option"
                                data-dial-code={44}
                                data-country-code="je"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__je" />
                                </div>
                                <span className="iti__country-name">
                                  Jersey
                                </span>
                                <span className="iti__dial-code">+44</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-jo"
                                role="option"
                                data-dial-code={962}
                                data-country-code="jo"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__jo" />
                                </div>
                                <span className="iti__country-name">
                                  Jordan (‫الأردن‬‎)
                                </span>
                                <span className="iti__dial-code">+962</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-kz"
                                role="option"
                                data-dial-code={7}
                                data-country-code="kz"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__kz" />
                                </div>
                                <span className="iti__country-name">
                                  Kazakhstan (Казахстан)
                                </span>
                                <span className="iti__dial-code">+7</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ke"
                                role="option"
                                data-dial-code={254}
                                data-country-code="ke"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ke" />
                                </div>
                                <span className="iti__country-name">Kenya</span>
                                <span className="iti__dial-code">+254</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ki"
                                role="option"
                                data-dial-code={686}
                                data-country-code="ki"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ki" />
                                </div>
                                <span className="iti__country-name">
                                  Kiribati
                                </span>
                                <span className="iti__dial-code">+686</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-xk"
                                role="option"
                                data-dial-code={383}
                                data-country-code="xk"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__xk" />
                                </div>
                                <span className="iti__country-name">
                                  Kosovo
                                </span>
                                <span className="iti__dial-code">+383</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-kw"
                                role="option"
                                data-dial-code={965}
                                data-country-code="kw"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__kw" />
                                </div>
                                <span className="iti__country-name">
                                  Kuwait (‫الكويت‬‎)
                                </span>
                                <span className="iti__dial-code">+965</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-kg"
                                role="option"
                                data-dial-code={996}
                                data-country-code="kg"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__kg" />
                                </div>
                                <span className="iti__country-name">
                                  Kyrgyzstan (Кыргызстан)
                                </span>
                                <span className="iti__dial-code">+996</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-la"
                                role="option"
                                data-dial-code={856}
                                data-country-code="la"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__la" />
                                </div>
                                <span className="iti__country-name">
                                  Laos (ລາວ)
                                </span>
                                <span className="iti__dial-code">+856</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-lv"
                                role="option"
                                data-dial-code={371}
                                data-country-code="lv"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__lv" />
                                </div>
                                <span className="iti__country-name">
                                  Latvia (Latvija)
                                </span>
                                <span className="iti__dial-code">+371</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-lb"
                                role="option"
                                data-dial-code={961}
                                data-country-code="lb"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__lb" />
                                </div>
                                <span className="iti__country-name">
                                  Lebanon (‫لبنان‬‎)
                                </span>
                                <span className="iti__dial-code">+961</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ls"
                                role="option"
                                data-dial-code={266}
                                data-country-code="ls"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ls" />
                                </div>
                                <span className="iti__country-name">
                                  Lesotho
                                </span>
                                <span className="iti__dial-code">+266</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-lr"
                                role="option"
                                data-dial-code={231}
                                data-country-code="lr"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__lr" />
                                </div>
                                <span className="iti__country-name">
                                  Liberia
                                </span>
                                <span className="iti__dial-code">+231</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ly"
                                role="option"
                                data-dial-code={218}
                                data-country-code="ly"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ly" />
                                </div>
                                <span className="iti__country-name">
                                  Libya (‫ليبيا‬‎)
                                </span>
                                <span className="iti__dial-code">+218</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-li"
                                role="option"
                                data-dial-code={423}
                                data-country-code="li"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__li" />
                                </div>
                                <span className="iti__country-name">
                                  Liechtenstein
                                </span>
                                <span className="iti__dial-code">+423</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-lt"
                                role="option"
                                data-dial-code={370}
                                data-country-code="lt"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__lt" />
                                </div>
                                <span className="iti__country-name">
                                  Lithuania (Lietuva)
                                </span>
                                <span className="iti__dial-code">+370</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-lu"
                                role="option"
                                data-dial-code={352}
                                data-country-code="lu"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__lu" />
                                </div>
                                <span className="iti__country-name">
                                  Luxembourg
                                </span>
                                <span className="iti__dial-code">+352</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-mo"
                                role="option"
                                data-dial-code={853}
                                data-country-code="mo"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__mo" />
                                </div>
                                <span className="iti__country-name">
                                  Macau (澳門)
                                </span>
                                <span className="iti__dial-code">+853</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-mk"
                                role="option"
                                data-dial-code={389}
                                data-country-code="mk"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__mk" />
                                </div>
                                <span className="iti__country-name">
                                  Macedonia (FYROM) (Македонија)
                                </span>
                                <span className="iti__dial-code">+389</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-mg"
                                role="option"
                                data-dial-code={261}
                                data-country-code="mg"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__mg" />
                                </div>
                                <span className="iti__country-name">
                                  Madagascar (Madagasikara)
                                </span>
                                <span className="iti__dial-code">+261</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-mw"
                                role="option"
                                data-dial-code={265}
                                data-country-code="mw"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__mw" />
                                </div>
                                <span className="iti__country-name">
                                  Malawi
                                </span>
                                <span className="iti__dial-code">+265</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-my"
                                role="option"
                                data-dial-code={60}
                                data-country-code="my"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__my" />
                                </div>
                                <span className="iti__country-name">
                                  Malaysia
                                </span>
                                <span className="iti__dial-code">+60</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-mv"
                                role="option"
                                data-dial-code={960}
                                data-country-code="mv"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__mv" />
                                </div>
                                <span className="iti__country-name">
                                  Maldives
                                </span>
                                <span className="iti__dial-code">+960</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ml"
                                role="option"
                                data-dial-code={223}
                                data-country-code="ml"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ml" />
                                </div>
                                <span className="iti__country-name">Mali</span>
                                <span className="iti__dial-code">+223</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-mt"
                                role="option"
                                data-dial-code={356}
                                data-country-code="mt"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__mt" />
                                </div>
                                <span className="iti__country-name">Malta</span>
                                <span className="iti__dial-code">+356</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-mh"
                                role="option"
                                data-dial-code={692}
                                data-country-code="mh"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__mh" />
                                </div>
                                <span className="iti__country-name">
                                  Marshall Islands
                                </span>
                                <span className="iti__dial-code">+692</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-mq"
                                role="option"
                                data-dial-code={596}
                                data-country-code="mq"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__mq" />
                                </div>
                                <span className="iti__country-name">
                                  Martinique
                                </span>
                                <span className="iti__dial-code">+596</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-mr"
                                role="option"
                                data-dial-code={222}
                                data-country-code="mr"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__mr" />
                                </div>
                                <span className="iti__country-name">
                                  Mauritania (‫موريتانيا‬‎)
                                </span>
                                <span className="iti__dial-code">+222</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-mu"
                                role="option"
                                data-dial-code={230}
                                data-country-code="mu"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__mu" />
                                </div>
                                <span className="iti__country-name">
                                  Mauritius (Moris)
                                </span>
                                <span className="iti__dial-code">+230</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-yt"
                                role="option"
                                data-dial-code={262}
                                data-country-code="yt"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__yt" />
                                </div>
                                <span className="iti__country-name">
                                  Mayotte
                                </span>
                                <span className="iti__dial-code">+262</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-mx"
                                role="option"
                                data-dial-code={52}
                                data-country-code="mx"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__mx" />
                                </div>
                                <span className="iti__country-name">
                                  Mexico (México)
                                </span>
                                <span className="iti__dial-code">+52</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-fm"
                                role="option"
                                data-dial-code={691}
                                data-country-code="fm"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__fm" />
                                </div>
                                <span className="iti__country-name">
                                  Micronesia
                                </span>
                                <span className="iti__dial-code">+691</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-md"
                                role="option"
                                data-dial-code={373}
                                data-country-code="md"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__md" />
                                </div>
                                <span className="iti__country-name">
                                  Moldova (Republica Moldova)
                                </span>
                                <span className="iti__dial-code">+373</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-mc"
                                role="option"
                                data-dial-code={377}
                                data-country-code="mc"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__mc" />
                                </div>
                                <span className="iti__country-name">
                                  Monaco
                                </span>
                                <span className="iti__dial-code">+377</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-mn"
                                role="option"
                                data-dial-code={976}
                                data-country-code="mn"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__mn" />
                                </div>
                                <span className="iti__country-name">
                                  Mongolia (Монгол)
                                </span>
                                <span className="iti__dial-code">+976</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-me"
                                role="option"
                                data-dial-code={382}
                                data-country-code="me"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__me" />
                                </div>
                                <span className="iti__country-name">
                                  Montenegro (Crna Gora)
                                </span>
                                <span className="iti__dial-code">+382</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ms"
                                role="option"
                                data-dial-code={1}
                                data-country-code="ms"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ms" />
                                </div>
                                <span className="iti__country-name">
                                  Montserrat
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ma"
                                role="option"
                                data-dial-code={212}
                                data-country-code="ma"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ma" />
                                </div>
                                <span className="iti__country-name">
                                  Morocco (‫المغرب‬‎)
                                </span>
                                <span className="iti__dial-code">+212</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-mz"
                                role="option"
                                data-dial-code={258}
                                data-country-code="mz"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__mz" />
                                </div>
                                <span className="iti__country-name">
                                  Mozambique (Moçambique)
                                </span>
                                <span className="iti__dial-code">+258</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-mm"
                                role="option"
                                data-dial-code={95}
                                data-country-code="mm"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__mm" />
                                </div>
                                <span className="iti__country-name">
                                  Myanmar (Burma) (မြန်မာ)
                                </span>
                                <span className="iti__dial-code">+95</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-na"
                                role="option"
                                data-dial-code={264}
                                data-country-code="na"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__na" />
                                </div>
                                <span className="iti__country-name">
                                  Namibia (Namibië)
                                </span>
                                <span className="iti__dial-code">+264</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-nr"
                                role="option"
                                data-dial-code={674}
                                data-country-code="nr"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__nr" />
                                </div>
                                <span className="iti__country-name">Nauru</span>
                                <span className="iti__dial-code">+674</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-np"
                                role="option"
                                data-dial-code={977}
                                data-country-code="np"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__np" />
                                </div>
                                <span className="iti__country-name">
                                  Nepal (नेपाल)
                                </span>
                                <span className="iti__dial-code">+977</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-nl"
                                role="option"
                                data-dial-code={31}
                                data-country-code="nl"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__nl" />
                                </div>
                                <span className="iti__country-name">
                                  Netherlands (Nederland)
                                </span>
                                <span className="iti__dial-code">+31</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-nc"
                                role="option"
                                data-dial-code={687}
                                data-country-code="nc"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__nc" />
                                </div>
                                <span className="iti__country-name">
                                  New Caledonia (Nouvelle-Calédonie)
                                </span>
                                <span className="iti__dial-code">+687</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-nz"
                                role="option"
                                data-dial-code={64}
                                data-country-code="nz"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__nz" />
                                </div>
                                <span className="iti__country-name">
                                  New Zealand
                                </span>
                                <span className="iti__dial-code">+64</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ni"
                                role="option"
                                data-dial-code={505}
                                data-country-code="ni"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ni" />
                                </div>
                                <span className="iti__country-name">
                                  Nicaragua
                                </span>
                                <span className="iti__dial-code">+505</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ne"
                                role="option"
                                data-dial-code={227}
                                data-country-code="ne"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ne" />
                                </div>
                                <span className="iti__country-name">
                                  Niger (Nijar)
                                </span>
                                <span className="iti__dial-code">+227</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ng"
                                role="option"
                                data-dial-code={234}
                                data-country-code="ng"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ng" />
                                </div>
                                <span className="iti__country-name">
                                  Nigeria
                                </span>
                                <span className="iti__dial-code">+234</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-nu"
                                role="option"
                                data-dial-code={683}
                                data-country-code="nu"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__nu" />
                                </div>
                                <span className="iti__country-name">Niue</span>
                                <span className="iti__dial-code">+683</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-nf"
                                role="option"
                                data-dial-code={672}
                                data-country-code="nf"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__nf" />
                                </div>
                                <span className="iti__country-name">
                                  Norfolk Island
                                </span>
                                <span className="iti__dial-code">+672</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-kp"
                                role="option"
                                data-dial-code={850}
                                data-country-code="kp"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__kp" />
                                </div>
                                <span className="iti__country-name">
                                  North Korea (조선 민주주의 인민 공화국)
                                </span>
                                <span className="iti__dial-code">+850</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-mp"
                                role="option"
                                data-dial-code={1}
                                data-country-code="mp"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__mp" />
                                </div>
                                <span className="iti__country-name">
                                  Northern Mariana Islands
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-no"
                                role="option"
                                data-dial-code={47}
                                data-country-code="no"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__no" />
                                </div>
                                <span className="iti__country-name">
                                  Norway (Norge)
                                </span>
                                <span className="iti__dial-code">+47</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-om"
                                role="option"
                                data-dial-code={968}
                                data-country-code="om"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__om" />
                                </div>
                                <span className="iti__country-name">
                                  Oman (‫عُمان‬‎)
                                </span>
                                <span className="iti__dial-code">+968</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-pk"
                                role="option"
                                data-dial-code={92}
                                data-country-code="pk"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__pk" />
                                </div>
                                <span className="iti__country-name">
                                  Pakistan (‫پاکستان‬‎)
                                </span>
                                <span className="iti__dial-code">+92</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-pw"
                                role="option"
                                data-dial-code={680}
                                data-country-code="pw"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__pw" />
                                </div>
                                <span className="iti__country-name">Palau</span>
                                <span className="iti__dial-code">+680</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ps"
                                role="option"
                                data-dial-code={970}
                                data-country-code="ps"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ps" />
                                </div>
                                <span className="iti__country-name">
                                  Palestine (‫فلسطين‬‎)
                                </span>
                                <span className="iti__dial-code">+970</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-pa"
                                role="option"
                                data-dial-code={507}
                                data-country-code="pa"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__pa" />
                                </div>
                                <span className="iti__country-name">
                                  Panama (Panamá)
                                </span>
                                <span className="iti__dial-code">+507</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-pg"
                                role="option"
                                data-dial-code={675}
                                data-country-code="pg"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__pg" />
                                </div>
                                <span className="iti__country-name">
                                  Papua New Guinea
                                </span>
                                <span className="iti__dial-code">+675</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-py"
                                role="option"
                                data-dial-code={595}
                                data-country-code="py"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__py" />
                                </div>
                                <span className="iti__country-name">
                                  Paraguay
                                </span>
                                <span className="iti__dial-code">+595</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-pe"
                                role="option"
                                data-dial-code={51}
                                data-country-code="pe"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__pe" />
                                </div>
                                <span className="iti__country-name">
                                  Peru (Perú)
                                </span>
                                <span className="iti__dial-code">+51</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ph"
                                role="option"
                                data-dial-code={63}
                                data-country-code="ph"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ph" />
                                </div>
                                <span className="iti__country-name">
                                  Philippines
                                </span>
                                <span className="iti__dial-code">+63</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-pl"
                                role="option"
                                data-dial-code={48}
                                data-country-code="pl"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__pl" />
                                </div>
                                <span className="iti__country-name">
                                  Poland (Polska)
                                </span>
                                <span className="iti__dial-code">+48</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-pt"
                                role="option"
                                data-dial-code={351}
                                data-country-code="pt"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__pt" />
                                </div>
                                <span className="iti__country-name">
                                  Portugal
                                </span>
                                <span className="iti__dial-code">+351</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-pr"
                                role="option"
                                data-dial-code={1}
                                data-country-code="pr"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__pr" />
                                </div>
                                <span className="iti__country-name">
                                  Puerto Rico
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-qa"
                                role="option"
                                data-dial-code={974}
                                data-country-code="qa"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__qa" />
                                </div>
                                <span className="iti__country-name">
                                  Qatar (‫قطر‬‎)
                                </span>
                                <span className="iti__dial-code">+974</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-re"
                                role="option"
                                data-dial-code={262}
                                data-country-code="re"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__re" />
                                </div>
                                <span className="iti__country-name">
                                  Réunion (La Réunion)
                                </span>
                                <span className="iti__dial-code">+262</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ro"
                                role="option"
                                data-dial-code={40}
                                data-country-code="ro"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ro" />
                                </div>
                                <span className="iti__country-name">
                                  Romania (România)
                                </span>
                                <span className="iti__dial-code">+40</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ru"
                                role="option"
                                data-dial-code={7}
                                data-country-code="ru"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ru" />
                                </div>
                                <span className="iti__country-name">
                                  Russia (Россия)
                                </span>
                                <span className="iti__dial-code">+7</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-rw"
                                role="option"
                                data-dial-code={250}
                                data-country-code="rw"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__rw" />
                                </div>
                                <span className="iti__country-name">
                                  Rwanda
                                </span>
                                <span className="iti__dial-code">+250</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-bl"
                                role="option"
                                data-dial-code={590}
                                data-country-code="bl"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__bl" />
                                </div>
                                <span className="iti__country-name">
                                  Saint Barthélemy
                                </span>
                                <span className="iti__dial-code">+590</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-sh"
                                role="option"
                                data-dial-code={290}
                                data-country-code="sh"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__sh" />
                                </div>
                                <span className="iti__country-name">
                                  Saint Helena
                                </span>
                                <span className="iti__dial-code">+290</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-kn"
                                role="option"
                                data-dial-code={1}
                                data-country-code="kn"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__kn" />
                                </div>
                                <span className="iti__country-name">
                                  Saint Kitts and Nevis
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-lc"
                                role="option"
                                data-dial-code={1}
                                data-country-code="lc"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__lc" />
                                </div>
                                <span className="iti__country-name">
                                  Saint Lucia
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-mf"
                                role="option"
                                data-dial-code={590}
                                data-country-code="mf"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__mf" />
                                </div>
                                <span className="iti__country-name">
                                  Saint Martin (Saint-Martin (partie française))
                                </span>
                                <span className="iti__dial-code">+590</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-pm"
                                role="option"
                                data-dial-code={508}
                                data-country-code="pm"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__pm" />
                                </div>
                                <span className="iti__country-name">
                                  Saint Pierre and Miquelon
                                  (Saint-Pierre-et-Miquelon)
                                </span>
                                <span className="iti__dial-code">+508</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-vc"
                                role="option"
                                data-dial-code={1}
                                data-country-code="vc"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__vc" />
                                </div>
                                <span className="iti__country-name">
                                  Saint Vincent and the Grenadines
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ws"
                                role="option"
                                data-dial-code={685}
                                data-country-code="ws"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ws" />
                                </div>
                                <span className="iti__country-name">Samoa</span>
                                <span className="iti__dial-code">+685</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-sm"
                                role="option"
                                data-dial-code={378}
                                data-country-code="sm"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__sm" />
                                </div>
                                <span className="iti__country-name">
                                  San Marino
                                </span>
                                <span className="iti__dial-code">+378</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-st"
                                role="option"
                                data-dial-code={239}
                                data-country-code="st"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__st" />
                                </div>
                                <span className="iti__country-name">
                                  São Tomé and Príncipe (São Tomé e Príncipe)
                                </span>
                                <span className="iti__dial-code">+239</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-sa"
                                role="option"
                                data-dial-code={966}
                                data-country-code="sa"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__sa" />
                                </div>
                                <span className="iti__country-name">
                                  Saudi Arabia (‫المملكة العربية السعودية‬‎)
                                </span>
                                <span className="iti__dial-code">+966</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-sn"
                                role="option"
                                data-dial-code={221}
                                data-country-code="sn"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__sn" />
                                </div>
                                <span className="iti__country-name">
                                  Senegal (Sénégal)
                                </span>
                                <span className="iti__dial-code">+221</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-rs"
                                role="option"
                                data-dial-code={381}
                                data-country-code="rs"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__rs" />
                                </div>
                                <span className="iti__country-name">
                                  Serbia (Србија)
                                </span>
                                <span className="iti__dial-code">+381</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-sc"
                                role="option"
                                data-dial-code={248}
                                data-country-code="sc"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__sc" />
                                </div>
                                <span className="iti__country-name">
                                  Seychelles
                                </span>
                                <span className="iti__dial-code">+248</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-sl"
                                role="option"
                                data-dial-code={232}
                                data-country-code="sl"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__sl" />
                                </div>
                                <span className="iti__country-name">
                                  Sierra Leone
                                </span>
                                <span className="iti__dial-code">+232</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-sg"
                                role="option"
                                data-dial-code={65}
                                data-country-code="sg"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__sg" />
                                </div>
                                <span className="iti__country-name">
                                  Singapore
                                </span>
                                <span className="iti__dial-code">+65</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-sx"
                                role="option"
                                data-dial-code={1}
                                data-country-code="sx"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__sx" />
                                </div>
                                <span className="iti__country-name">
                                  Sint Maarten
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-sk"
                                role="option"
                                data-dial-code={421}
                                data-country-code="sk"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__sk" />
                                </div>
                                <span className="iti__country-name">
                                  Slovakia (Slovensko)
                                </span>
                                <span className="iti__dial-code">+421</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-si"
                                role="option"
                                data-dial-code={386}
                                data-country-code="si"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__si" />
                                </div>
                                <span className="iti__country-name">
                                  Slovenia (Slovenija)
                                </span>
                                <span className="iti__dial-code">+386</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-sb"
                                role="option"
                                data-dial-code={677}
                                data-country-code="sb"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__sb" />
                                </div>
                                <span className="iti__country-name">
                                  Solomon Islands
                                </span>
                                <span className="iti__dial-code">+677</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-so"
                                role="option"
                                data-dial-code={252}
                                data-country-code="so"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__so" />
                                </div>
                                <span className="iti__country-name">
                                  Somalia (Soomaaliya)
                                </span>
                                <span className="iti__dial-code">+252</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-za"
                                role="option"
                                data-dial-code={27}
                                data-country-code="za"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__za" />
                                </div>
                                <span className="iti__country-name">
                                  South Africa
                                </span>
                                <span className="iti__dial-code">+27</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-kr"
                                role="option"
                                data-dial-code={82}
                                data-country-code="kr"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__kr" />
                                </div>
                                <span className="iti__country-name">
                                  South Korea (대한민국)
                                </span>
                                <span className="iti__dial-code">+82</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ss"
                                role="option"
                                data-dial-code={211}
                                data-country-code="ss"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ss" />
                                </div>
                                <span className="iti__country-name">
                                  South Sudan (‫جنوب السودان‬‎)
                                </span>
                                <span className="iti__dial-code">+211</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-es"
                                role="option"
                                data-dial-code={34}
                                data-country-code="es"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__es" />
                                </div>
                                <span className="iti__country-name">
                                  Spain (España)
                                </span>
                                <span className="iti__dial-code">+34</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-lk"
                                role="option"
                                data-dial-code={94}
                                data-country-code="lk"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__lk" />
                                </div>
                                <span className="iti__country-name">
                                  Sri Lanka (ශ්‍රී ලංකාව)
                                </span>
                                <span className="iti__dial-code">+94</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-sd"
                                role="option"
                                data-dial-code={249}
                                data-country-code="sd"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__sd" />
                                </div>
                                <span className="iti__country-name">
                                  Sudan (‫السودان‬‎)
                                </span>
                                <span className="iti__dial-code">+249</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-sr"
                                role="option"
                                data-dial-code={597}
                                data-country-code="sr"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__sr" />
                                </div>
                                <span className="iti__country-name">
                                  Suriname
                                </span>
                                <span className="iti__dial-code">+597</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-sj"
                                role="option"
                                data-dial-code={47}
                                data-country-code="sj"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__sj" />
                                </div>
                                <span className="iti__country-name">
                                  Svalbard and Jan Mayen
                                </span>
                                <span className="iti__dial-code">+47</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-se"
                                role="option"
                                data-dial-code={46}
                                data-country-code="se"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__se" />
                                </div>
                                <span className="iti__country-name">
                                  Sweden (Sverige)
                                </span>
                                <span className="iti__dial-code">+46</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ch"
                                role="option"
                                data-dial-code={41}
                                data-country-code="ch"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ch" />
                                </div>
                                <span className="iti__country-name">
                                  Switzerland (Schweiz)
                                </span>
                                <span className="iti__dial-code">+41</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-sy"
                                role="option"
                                data-dial-code={963}
                                data-country-code="sy"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__sy" />
                                </div>
                                <span className="iti__country-name">
                                  Syria (‫سوريا‬‎)
                                </span>
                                <span className="iti__dial-code">+963</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-tw"
                                role="option"
                                data-dial-code={886}
                                data-country-code="tw"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__tw" />
                                </div>
                                <span className="iti__country-name">
                                  Taiwan (台灣)
                                </span>
                                <span className="iti__dial-code">+886</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-tj"
                                role="option"
                                data-dial-code={992}
                                data-country-code="tj"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__tj" />
                                </div>
                                <span className="iti__country-name">
                                  Tajikistan
                                </span>
                                <span className="iti__dial-code">+992</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-tz"
                                role="option"
                                data-dial-code={255}
                                data-country-code="tz"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__tz" />
                                </div>
                                <span className="iti__country-name">
                                  Tanzania
                                </span>
                                <span className="iti__dial-code">+255</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-th"
                                role="option"
                                data-dial-code={66}
                                data-country-code="th"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__th" />
                                </div>
                                <span className="iti__country-name">
                                  Thailand (ไทย)
                                </span>
                                <span className="iti__dial-code">+66</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-tl"
                                role="option"
                                data-dial-code={670}
                                data-country-code="tl"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__tl" />
                                </div>
                                <span className="iti__country-name">
                                  Timor-Leste
                                </span>
                                <span className="iti__dial-code">+670</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-tg"
                                role="option"
                                data-dial-code={228}
                                data-country-code="tg"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__tg" />
                                </div>
                                <span className="iti__country-name">Togo</span>
                                <span className="iti__dial-code">+228</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-tk"
                                role="option"
                                data-dial-code={690}
                                data-country-code="tk"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__tk" />
                                </div>
                                <span className="iti__country-name">
                                  Tokelau
                                </span>
                                <span className="iti__dial-code">+690</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-to"
                                role="option"
                                data-dial-code={676}
                                data-country-code="to"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__to" />
                                </div>
                                <span className="iti__country-name">Tonga</span>
                                <span className="iti__dial-code">+676</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-tt"
                                role="option"
                                data-dial-code={1}
                                data-country-code="tt"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__tt" />
                                </div>
                                <span className="iti__country-name">
                                  Trinidad and Tobago
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-tn"
                                role="option"
                                data-dial-code={216}
                                data-country-code="tn"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__tn" />
                                </div>
                                <span className="iti__country-name">
                                  Tunisia (‫تونس‬‎)
                                </span>
                                <span className="iti__dial-code">+216</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-tr"
                                role="option"
                                data-dial-code={90}
                                data-country-code="tr"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__tr" />
                                </div>
                                <span className="iti__country-name">
                                  Turkey (Türkiye)
                                </span>
                                <span className="iti__dial-code">+90</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-tm"
                                role="option"
                                data-dial-code={993}
                                data-country-code="tm"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__tm" />
                                </div>
                                <span className="iti__country-name">
                                  Turkmenistan
                                </span>
                                <span className="iti__dial-code">+993</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-tc"
                                role="option"
                                data-dial-code={1}
                                data-country-code="tc"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__tc" />
                                </div>
                                <span className="iti__country-name">
                                  Turks and Caicos Islands
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-tv"
                                role="option"
                                data-dial-code={688}
                                data-country-code="tv"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__tv" />
                                </div>
                                <span className="iti__country-name">
                                  Tuvalu
                                </span>
                                <span className="iti__dial-code">+688</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-vi"
                                role="option"
                                data-dial-code={1}
                                data-country-code="vi"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__vi" />
                                </div>
                                <span className="iti__country-name">
                                  U.S. Virgin Islands
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ug"
                                role="option"
                                data-dial-code={256}
                                data-country-code="ug"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ug" />
                                </div>
                                <span className="iti__country-name">
                                  Uganda
                                </span>
                                <span className="iti__dial-code">+256</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ua"
                                role="option"
                                data-dial-code={380}
                                data-country-code="ua"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ua" />
                                </div>
                                <span className="iti__country-name">
                                  Ukraine (Україна)
                                </span>
                                <span className="iti__dial-code">+380</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ae"
                                role="option"
                                data-dial-code={971}
                                data-country-code="ae"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ae" />
                                </div>
                                <span className="iti__country-name">
                                  United Arab Emirates (‫الإمارات العربية
                                  المتحدة‬‎)
                                </span>
                                <span className="iti__dial-code">+971</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-gb"
                                role="option"
                                data-dial-code={44}
                                data-country-code="gb"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__gb" />
                                </div>
                                <span className="iti__country-name">
                                  United Kingdom
                                </span>
                                <span className="iti__dial-code">+44</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-us"
                                role="option"
                                data-dial-code={1}
                                data-country-code="us"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__us" />
                                </div>
                                <span className="iti__country-name">
                                  United States
                                </span>
                                <span className="iti__dial-code">+1</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-uy"
                                role="option"
                                data-dial-code={598}
                                data-country-code="uy"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__uy" />
                                </div>
                                <span className="iti__country-name">
                                  Uruguay
                                </span>
                                <span className="iti__dial-code">+598</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-uz"
                                role="option"
                                data-dial-code={998}
                                data-country-code="uz"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__uz" />
                                </div>
                                <span className="iti__country-name">
                                  Uzbekistan (Oʻzbekiston)
                                </span>
                                <span className="iti__dial-code">+998</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-vu"
                                role="option"
                                data-dial-code={678}
                                data-country-code="vu"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__vu" />
                                </div>
                                <span className="iti__country-name">
                                  Vanuatu
                                </span>
                                <span className="iti__dial-code">+678</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-va"
                                role="option"
                                data-dial-code={39}
                                data-country-code="va"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__va" />
                                </div>
                                <span className="iti__country-name">
                                  Vatican City (Città del Vaticano)
                                </span>
                                <span className="iti__dial-code">+39</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ve"
                                role="option"
                                data-dial-code={58}
                                data-country-code="ve"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ve" />
                                </div>
                                <span className="iti__country-name">
                                  Venezuela
                                </span>
                                <span className="iti__dial-code">+58</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-vn"
                                role="option"
                                data-dial-code={84}
                                data-country-code="vn"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__vn" />
                                </div>
                                <span className="iti__country-name">
                                  Vietnam (Việt Nam)
                                </span>
                                <span className="iti__dial-code">+84</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-wf"
                                role="option"
                                data-dial-code={681}
                                data-country-code="wf"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__wf" />
                                </div>
                                <span className="iti__country-name">
                                  Wallis and Futuna (Wallis-et-Futuna)
                                </span>
                                <span className="iti__dial-code">+681</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-eh"
                                role="option"
                                data-dial-code={212}
                                data-country-code="eh"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__eh" />
                                </div>
                                <span className="iti__country-name">
                                  Western Sahara (‫الصحراء الغربية‬‎)
                                </span>
                                <span className="iti__dial-code">+212</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ye"
                                role="option"
                                data-dial-code={967}
                                data-country-code="ye"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ye" />
                                </div>
                                <span className="iti__country-name">
                                  Yemen (‫اليمن‬‎)
                                </span>
                                <span className="iti__dial-code">+967</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-zm"
                                role="option"
                                data-dial-code={260}
                                data-country-code="zm"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__zm" />
                                </div>
                                <span className="iti__country-name">
                                  Zambia
                                </span>
                                <span className="iti__dial-code">+260</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-zw"
                                role="option"
                                data-dial-code={263}
                                data-country-code="zw"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__zw" />
                                </div>
                                <span className="iti__country-name">
                                  Zimbabwe
                                </span>
                                <span className="iti__dial-code">+263</span>
                              </li>
                              <li
                                className="iti__country iti__standard"
                                tabIndex={-1}
                                id="iti-1__item-ax"
                                role="option"
                                data-dial-code={358}
                                data-country-code="ax"
                                aria-selected="false"
                              >
                                <div className="iti__flag-box">
                                  <div className="iti__flag iti__ax" />
                                </div>
                                <span className="iti__country-name">
                                  Åland Islands
                                </span>
                                <span className="iti__dial-code">+358</span>
                              </li>
                            </ul>
                          </div>
                          <input
                            className="form-control mobile_code"
                            id="seoPhone"
                            placeholder="Enter your phone"
                            required=""
                            type="number"
                            autoComplete="off"
                          />
                          <input type="hidden" name="phone" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <input
                          name="email"
                          placeholder="Enter Your Email"
                          required=""
                          type="email"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          className="packages"
                          name="package"
                          placeholder="Selected Package"
                          required=""
                          type="text"
                          defaultValue=""
                        />
                      </div>
                      <button
                        className="l__button l__button--primary"
                        type="submit"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;