"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
const Testimonial = () => {
  return (
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
                  <Slider>
                    {/* <div
                      className="owl-item cloned"
                      style={{ width: 1436, marginRight: 20 }}
                    >
                      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 px-2">
                        <div className="col">
                          <div className="service-visitor-card">
                            <div className="head">
                              <img
                                alt="Ganesh Prasad Joshi."
                                className="lazy-load"
                                data-src="/testimonial-1623385122.jpg"
                                src="/testimonial-1623385122.jpg"
                              />
                              <p>
                                Ganesh Prasad Joshi
                                <span>
                                  CEO/ Founder Chaitanya Institute of Management
                                </span>
                              </p>
                            </div>
                            <div className="body">
                              <p>
                                Softbenz is one of the best IT companies in
                                Nepal promoting digital branding. They have
                                carried out my website design and website
                                development aspect perfectly by solving all the
                                queries instantly. I would choose Softbenz in
                                the future for any website development needs.
                              </p>
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
                        <div className="col">
                          <div className="service-visitor-card">
                            <div className="head">
                              <img
                                alt="Man Bahadur"
                                className="lazy-load "
                                data-src="/50955.webp"
                                src="/50955.webp"
                              />
                              <p>
                                Man Bahadur
                                <span>MD, Gharsansar</span>
                              </p>
                            </div>
                            <div className="body">
                              <p>
                                This IT Company is highly professional and
                                provides customized solutions to all your
                                business problems at a very reasonable price.
                                Besides that, it is one of the best innovative
                                and probably growing IT solutions. The team
                                members are here to turn your business problem
                                into future possibilities.
                              </p>
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
                        <div className="col">
                          <div className="service-visitor-card">
                            <div className="head">
                              <img
                                alt="Sushil Singh"
                                className="lazy-load"
                                data-src="/WhatsApp_Image_2024-06-18_at_1.09.19_PM.jpeg"
                                src="/WhatsApp_Image_2024-06-18_at_1.09.19_PM.jpeg"
                              />
                              <p>
                                Sushil Singh
                                <span>Founder/ CEO, Visit Nepal</span>
                              </p>
                            </div>
                            <div className="body">
                              <p>
                                Having only recently begun work with the team
                                from Softbenz Infosys, my experience, in
                                summary, has exceeded all of my expectations.
                                The team led by Aarav and Rajan are always a
                                pleasure to work with and incredibly flexible in
                                meeting ever-changing needs. The entire team is
                                very polite, helpful and knowledgeable. They
                                have a very personable approach.
                              </p>
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
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: 1436, marginRight: 20 }}
                    >
                      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 px-2">
                        <div className="col">
                          <div className="service-visitor-card">
                            <div className="head">
                              <img
                                alt="Bibek Regmi"
                                className="lazy-load"
                                data-src="/bibek_regmi.jpeg"
                                src="/bibek_regmi.jpeg"
                              />
                              <p>
                                Bibek Regmi
                                <span>Managing Director, NLPRC</span>
                              </p>
                            </div>
                            <div className="body">
                              <p>
                                Softbenz Infosys Pvt. Ltd is the best website
                                design and development company in nepal with
                                highly qualified IT staff having an amazing
                                sense of understanding, cooperation, and support
                                to the clients during the project design.&nbsp;
                                The company offers follow-up services even after
                                the completion of projects.
                              </p>
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
                        <div className="col">
                          <div className="service-visitor-card">
                            <div className="head">
                              <img
                                alt="Shreeram Dhakal"
                                className="lazy-load"
                                data-src="/shreeram_dhakal.jpeg"
                                src="/shreeram_dhakal.jpeg"
                              />
                              <p>
                                Shreeram Dhakal
                                <span>
                                  Chairman, NIMS Group Clinic Pvt. Ltd.
                                </span>
                              </p>
                            </div>
                            <div className="body">
                              <p>
                                Softbenz has been a game-changer for us at NIMS
                                Group Clinic Pvt Ltd. Their Social Media
                                Marketing and Website Development services have
                                transformed our online presence. Their
                                innovative strategies boosted our engagement and
                                patient interactions. We're incredibly grateful
                                for their expertise, and Highly recommend their
                                services.
                              </p>
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
                        <div className="col">
                          <div className="service-visitor-card">
                            <div className="head">
                              <img
                                alt="Sulav Prasad Pudasaini"
                                className="lazy-load"
                                data-src="/WhatsApp_Image_2024-06-18_at_1.22.46_PM.jpeg"
                                src="/WhatsApp_Image_2024-06-18_at_1.22.46_PM.jpeg"
                              />
                              <p>
                                Sulav Prasad Pudasaini
                                <span>
                                  Founder/ CEO, Eduzeit Education Network
                                </span>
                              </p>
                            </div>
                            <div className="body">
                              <p>
                                Softbenz has very unique team, work
                                professionally and understands the need of
                                customers in the very sight. Its very worthy to
                                be the part of its customer due to its time
                                relevant services. Very thankful for its
                                reliable support.
                              </p>
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
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: 1436, marginRight: 20 }}
                    >
                      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 px-2">
                        <div className="col">
                          <div className="service-visitor-card">
                            <div className="head">
                              <img
                                alt="Ganesh Prasad Joshi."
                                className="lazy-load"
                                data-src="/testimonial-1623385122.jpg"
                                src="/testimonial-1623385122.jpg"
                              />
                              <p>
                                Ganesh Prasad Joshi
                                <span>
                                  CEO/ Founder Chaitanya Institute of Management
                                </span>
                              </p>
                            </div>
                            <div className="body">
                              <p>
                                Softbenz is one of the best IT companies in
                                Nepal promoting digital branding. They have
                                carried out my website design and website
                                development aspect perfectly by solving all the
                                queries instantly. I would choose Softbenz in
                                the future for any website development needs.
                              </p>
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
                        <div className="col">
                          <div className="service-visitor-card">
                            <div className="head">
                              <img
                                alt="Man Bahadur"
                                className="lazy-load"
                                data-src="/50955.webp"
                                src="/50955.webp"
                              />
                              <p>
                                Man Bahadur
                                <span>MD, Gharsansar</span>
                              </p>
                            </div>
                            <div className="body">
                              <p>
                                This IT Company is highly professional and
                                provides customized solutions to all your
                                business problems at a very reasonable price.
                                Besides that, it is one of the best innovative
                                and probably growing IT solutions. The team
                                members are here to turn your business problem
                                into future possibilities.
                              </p>
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
                        <div className="col">
                          <div className="service-visitor-card">
                            <div className="head">
                              <img
                                alt="Sushil Singh"
                                className="lazy-load"
                                data-src="/WhatsApp_Image_2024-06-18_at_1.09.19_PM.jpeg"
                                src="/WhatsApp_Image_2024-06-18_at_1.09.19_PM.jpeg"
                              />
                              <p>
                                Sushil Singh
                                <span>Founder/ CEO, Visit Nepal</span>
                              </p>
                            </div>
                            <div className="body">
                              <p>
                                Having only recently begun work with the team
                                from Softbenz Infosys, my experience, in
                                summary, has exceeded all of my expectations.
                                The team led by Aarav and Rajan are always a
                                pleasure to work with and incredibly flexible in
                                meeting ever-changing needs. The entire team is
                                very polite, helpful and knowledgeable. They
                                have a very personable approach.
                              </p>
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
                      </div>
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: 1436, marginRight: 20 }}
                    >
                      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 px-2">
                        <div className="col">
                          <div className="service-visitor-card">
                            <div className="head">
                              <img
                                alt="Bibek Regmi"
                                className="lazy-load"
                                data-src="/bibek_regmi.jpeg"
                                src="/bibek_regmi.jpeg"
                              />
                              <p>
                                Bibek Regmi
                                <span>Managing Director, NLPRC</span>
                              </p>
                            </div>
                            <div className="body">
                              <p>
                                Softbenz Infosys Pvt. Ltd is the best website
                                design and development company in nepal with
                                highly qualified IT staff having an amazing
                                sense of understanding, cooperation, and support
                                to the clients during the project design.&nbsp;
                                The company offers follow-up services even after
                                the completion of projects.
                              </p>
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
                        <div className="col">
                          <div className="service-visitor-card">
                            <div className="head">
                              <img
                                alt="Shreeram Dhakal"
                                className="lazy-load"
                                data-src="/shreeram_dhakal.jpeg"
                                src="/shreeram_dhakal.jpeg"
                              />
                              <p>
                                Shreeram Dhakal
                                <span>
                                  Chairman, NIMS Group Clinic Pvt. Ltd.
                                </span>
                              </p>
                            </div>
                            <div className="body">
                              <p>
                                Softbenz has been a game-changer for us at NIMS
                                Group Clinic Pvt Ltd. Their Social Media
                                Marketing and Website Development services have
                                transformed our online presence. Their
                                innovative strategies boosted our engagement and
                                patient interactions. We're incredibly grateful
                                for their expertise, and Highly recommend their
                                services.
                              </p>
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
                        <div className="col">
                          <div className="service-visitor-card">
                            <div className="head">
                              <img
                                alt="Sulav Prasad Pudasaini"
                                className="lazy-load"
                                data-src="/WhatsApp_Image_2024-06-18_at_1.22.46_PM.jpeg"
                                src="/WhatsApp_Image_2024-06-18_at_1.22.46_PM.jpeg"
                              />
                              <p>
                                Sulav Prasad Pudasaini
                                <span>
                                  Founder/ CEO, Eduzeit Education Network
                                </span>
                              </p>
                            </div>
                            <div className="body">
                              <p>
                                Softbenz has very unique team, work
                                professionally and understands the need of
                                customers in the very sight. Its very worthy to
                                be the part of its customer due to its time
                                relevant services. Very thankful for its
                                reliable support.
                              </p>
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
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: 1436, marginRight: 20 }}
                    >
                      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 px-2">
                        <div className="col">
                          <div className="service-visitor-card">
                            <div className="head">
                              <img
                                alt="Ganesh Prasad Joshi."
                                className="lazy-load"
                                data-src="/testimonial-1623385122.jpg"
                                src="/testimonial-1623385122.jpg"
                              />
                              <p>
                                Ganesh Prasad Joshi
                                <span>
                                  CEO/ Founder Chaitanya Institute of Management
                                </span>
                              </p>
                            </div>
                            <div className="body">
                              <p>
                                Softbenz is one of the best IT companies in
                                Nepal promoting digital branding. They have
                                carried out my website design and website
                                development aspect perfectly by solving all the
                                queries instantly. I would choose Softbenz in
                                the future for any website development needs.
                              </p>
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
                        <div className="col">
                          <div className="service-visitor-card">
                            <div className="head">
                              <img
                                alt="Man Bahadur"
                                className="lazy-load"
                                data-src="/misc-testimonials/50955.webp"
                                src="/misc-testimonials/50955.webp"
                              />
                              <p>
                                Man Bahadur
                                <span>MD, Gharsansar</span>
                              </p>
                            </div>
                            <div className="body">
                              <p>
                                This IT Company is highly professional and
                                provides customized solutions to all your
                                business problems at a very reasonable price.
                                Besides that, it is one of the best innovative
                                and probably growing IT solutions. The team
                                members are here to turn your business problem
                                into future possibilities.
                              </p>
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
                        <div className="col">
                          <div className="service-visitor-card">
                            <div className="head">
                              <img
                                alt="Sushil Singh"
                                className="lazy-load"
                                data-src="/WhatsApp_Image_2024-06-18_at_1.09.19_PM.jpeg"
                                src="/WhatsApp_Image_2024-06-18_at_1.09.19_PM.jpeg"
                              />
                              <p>
                                Sushil Singh
                                <span>Founder/ CEO, Visit Nepal</span>
                              </p>
                            </div>
                            <div className="body">
                              <p>
                                Having only recently begun work with the team
                                from Softbenz Infosys, my experience, in
                                summary, has exceeded all of my expectations.
                                The team led by Aarav and Rajan are always a
                                pleasure to work with and incredibly flexible in
                                meeting ever-changing needs. The entire team is
                                very polite, helpful and knowledgeable. They
                                have a very personable approach.
                              </p>
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
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: 1436, marginRight: 20 }}
                    >
                      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 px-2">
                        <div className="col">
                          <div className="service-visitor-card">
                            <div className="head">
                              <img
                                alt="Bibek Regmi"
                                className="lazy-load"
                                data-src="/bibek_regmi.jpeg"
                                src="/bibek_regmi.jpeg"
                              />
                              <p>
                                Bibek Regmi
                                <span>Managing Director, NLPRC</span>
                              </p>
                            </div>
                            <div className="body">
                              <p>
                                Softbenz Infosys Pvt. Ltd is the best website
                                design and development company in nepal with
                                highly qualified IT staff having an amazing
                                sense of understanding, cooperation, and support
                                to the clients during the project design.&nbsp;
                                The company offers follow-up services even after
                                the completion of projects.
                              </p>
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
                        <div className="col">
                          <div className="service-visitor-card">
                            <div className="head">
                              <img
                                alt="Shreeram Dhakal"
                                className="lazy-load"
                                data-src="/shreeram_dhakal.jpeg"
                                src="/shreeram_dhakal.jpeg"
                              />
                              <p>
                                Shreeram Dhakal
                                <span>
                                  Chairman, NIMS Group Clinic Pvt. Ltd.
                                </span>
                              </p>
                            </div>
                            <div className="body">
                              <p>
                                Softbenz has been a game-changer for us at NIMS
                                Group Clinic Pvt Ltd. Their Social Media
                                Marketing and Website Development services have
                                transformed our online presence. Their
                                innovative strategies boosted our engagement and
                                patient interactions. We're incredibly grateful
                                for their expertise, and Highly recommend their
                                services.
                              </p>
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
                        <div className="col">
                          <div className="service-visitor-card">
                            <div className="head">
                              <img
                                alt="Sulav Prasad Pudasaini"
                                className="lazy-load"
                                data-src="/WhatsApp_Image_2024-06-18_at_1.22.46_PM.jpeg"
                                src="/WhatsApp_Image_2024-06-18_at_1.22.46_PM.jpeg"
                              />
                              <p>
                                Sulav Prasad Pudasaini
                                <span>
                                  Founder/ CEO, Eduzeit Education Network
                                </span>
                              </p>
                            </div>
                            <div className="body">
                              <p>
                                Softbenz has very unique team, work
                                professionally and understands the need of
                                customers in the very sight. Its very worthy to
                                be the part of its customer due to its time
                                relevant services. Very thankful for its
                                reliable support.
                              </p>
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
                      </div>
                    </div> */}
                  </Slider>
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
                  <div className="owl-item">
                    <div className="service-visitor-card">
                      <div className="head">
                        <img
                          alt="Ganesh Prasad Joshi."
                          className="lazy-load"
                          data-src="/testimonial-1623385122.jpg"
                          src="/testimonial-1623385122.jpg"
                        />
                        <p>
                          Ganesh Prasad Joshi
                          <span>
                            CEO/ Founder Chaitanya Institute of Management
                          </span>
                        </p>
                      </div>
                      <div className="body">
                        <p>
                          Softbenz is one of the best IT companies in Nepal
                          promoting digital branding. They have carried out my
                          website design and website development aspect
                          perfectly by solving all the queries instantly. I
                          would choose Softbenz in the future for any website
                          development needs.
                        </p>
                      </div>
                      <div className="footer">
                        <ul className="">
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
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
                  <div className="owl-item">
                    <div className="service-visitor-card">
                      <div className="head">
                        <img
                          alt="Man Bahadur"
                          className="lazy-load"
                          data-src="/misc-testimonials/50955.webp"
                          src="/misc-testimonials/50955.webp"
                        />
                        <p>
                          Man Bahadur
                          <span>MD, Gharsansar</span>
                        </p>
                      </div>
                      <div className="body">
                        <p>
                          This IT Company is highly professional and provides
                          customized solutions to all your business problems at
                          a very reasonable price. Besides that, it is one of
                          the best innovative and probably growing IT solutions.
                          The team members are here to turn your business
                          problem into future possibilities.
                        </p>
                      </div>
                      <div className="footer">
                        <ul className="">
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
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
                  <div className="owl-item">
                    <div className="service-visitor-card">
                      <div className="head">
                        <img
                          alt="Sushil Singh"
                          className="lazy-load"
                          data-src="/WhatsApp_Image_2024-06-18_at_1.09.19_PM.jpeg"
                          src="/WhatsApp_Image_2024-06-18_at_1.09.19_PM.jpeg"
                        />
                        <p>
                          Sushil Singh
                          <span>Founder/ CEO, Visit Nepal</span>
                        </p>
                      </div>
                      <div className="body">
                        <p>
                          Having only recently begun work with the team from
                          Softbenz Infosys, my experience, in summary, has
                          exceeded all of my expectations. The team led by Aarav
                          and Rajan are always a pleasure to work with and
                          incredibly flexible in meeting ever-changing needs.
                          The entire team is very polite, helpful and
                          knowledgeable. They have a very personable approach.
                        </p>
                      </div>
                      <div className="footer">
                        <ul className="">
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
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
                  <div className="owl-item">
                    <div className="service-visitor-card">
                      <div className="head">
                        <img
                          alt="Bibek Regmi"
                          className="lazy-load"
                          data-src="/bibek_regmi.jpeg"
                          src="/bibek_regmi.jpeg"
                        />
                        <p>
                          Bibek Regmi
                          <span>Managing Director, NLPRC</span>
                        </p>
                      </div>
                      <div className="body">
                        <p>
                          Softbenz Infosys Pvt. Ltd is the best website design
                          and development company in nepal with highly qualified
                          IT staff having an amazing sense of understanding,
                          cooperation, and support to the clients during the
                          project design.&nbsp; The company offers follow-up
                          services even after the completion of projects.
                        </p>
                      </div>
                      <div className="footer">
                        <ul className="">
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
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
                  <div className="owl-item">
                    <div className="service-visitor-card">
                      <div className="head">
                        <img
                          alt="Shreeram Dhakal"
                          className="lazy-load"
                          data-src="/shreeram_dhakal.jpeg"
                          src="/shreeram_dhakal.jpeg"
                        />
                        <p>
                          Shreeram Dhakal
                          <span>Chairman, NIMS Group Clinic Pvt. Ltd.</span>
                        </p>
                      </div>
                      <div className="body">
                        <p>
                          Softbenz has been a game-changer for us at NIMS Group
                          Clinic Pvt Ltd. Their Social Media Marketing and
                          Website Development services have transformed our
                          online presence. Their innovative strategies boosted
                          our engagement and patient interactions. We're
                          incredibly grateful for their expertise, and Highly
                          recommend their services.
                        </p>
                      </div>
                      <div className="footer">
                        <ul className="">
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
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
                  <div className="owl-item">
                    <div className="service-visitor-card">
                      <div className="head">
                        <img
                          alt="Sulav Prasad Pudasaini"
                          className="lazy-load"
                          data-src="/WhatsApp_Image_2024-06-18_at_1.22.46_PM.jpeg"
                          src="/WhatsApp_Image_2024-06-18_at_1.22.46_PM.jpeg"
                        />
                        <p>
                          Sulav Prasad Pudasaini
                          <span>Founder/ CEO, Eduzeit Education Network</span>
                        </p>
                      </div>
                      <div className="body">
                        <p>
                          Softbenz has very unique team, work professionally and
                          understands the need of customers in the very sight.
                          Its very worthy to be the part of its customer due to
                          its time relevant services. Very thankful for its
                          reliable support.
                        </p>
                      </div>
                      <div className="footer">
                        <ul className="">
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
                          </li>
                          <li className="start">
                            <i aria-hidden="true" className="fa fa-star" />
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
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
