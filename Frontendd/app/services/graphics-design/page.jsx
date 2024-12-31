import React from "react";

const page = () => {
  return (
    <div>
      <div style={{ minHeight: "50vh" }}>
        <div className="site-main">
          <section className="service__banner-">
            <div className="l__container">
              <div className="service__banner--content overflow">
                <div className="row flex-column-reverse flex-md-row">
                  <div className="col-lg-7 col-md-6">
                    <div className="left">
                      <div className="section__title clearfix">
                        <h1 className="title">
                          Designs that speak louder than words
                        </h1>
                      </div>
                      <div className="title-desc">
                        <p>
                          Elevate your brand with captivating logos and
                          comprehensive branding solutions with the best graphic
                          design services from Blue Fox. Our creative brilliance
                          is ideal for transforming your ideas into visual
                          masterpieces with tailored designs for your digital
                          needs.
                        </p>
                        <button
                          data-bs-toggle="modal"
                          data-bs-target="#enquiryModal"
                          data-id="e14a3274-7be4-473d-bc0f-8504a4ba6a32"
                          className="l__button l__button--border"
                        >
                          <span>lets start conversation</span>
                          <i className="fa-solid fa-chevron-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                    <div className="right">
                      <img
                        src="/Website_Creator-pana.svg"
                        className=""
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="service__info">
            <div className="l__container">
              <div className="row row-cols-1 row-cols-md-3 g-4 img-blue">
                <div className="col">
                  <div className="service__info--card">
                    <div className="service__info--card-head">
                      <img src="/interface.png" alt="gdinfo/interface.png" />
                      <h2 className="title">Engaging Visual Interfaces</h2>
                    </div>
                    <div className="service__info--content">
                      <p>
                        Engage your audience with interactive and visual
                        interfaces.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="service__info--card">
                    <div className="service__info--card-head">
                      <img
                        src="/premium_TS4fdpx.png"
                        alt="gdinfo/premium_TS4fdpx.png"
                      />
                      <h2 className="title">Premium Quality Creations</h2>
                    </div>
                    <div className="service__info--content">
                      <p>
                        Elevate your brand with premium-quality design
                        expertise.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="service__info--card">
                    <div className="service__info--card-head">
                      <img src="/design.png" alt="gdinfo/design.png" />
                      <h2 className="title">Design Delight</h2>
                    </div>
                    <div className="service__info--content">
                      <p>
                        Experience captivating designs that delight the eye.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* design */}
          <section className="service__design p__tb overflow">
            <div className="l__container">
              <div
                className="section__title text-center clearfix wow fadeInUp animated"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  WebkitAnimationDuration: "1s",
                  MozAnimationDuration: "1s",
                  animationDuration: "1s",
                }}
              >
                <h6>Services</h6>
                <h2 className="title">Graphic Design</h2>
              </div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                <div className="col">
                  <div
                    className="service__design--card wow fadeInUp animated"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDuration: "1s",
                      MozAnimationDuration: "1s",
                      animationDuration: "1s",
                    }}
                  >
                    <a href="#" className="d-block">
                      <img
                        className="lazy-load"
                        data-src="/Website_developlent.svg"
                        alt="Branding Concept."
                        src="/Website_developlent.svg"
                      />
                      <h3>Branding</h3>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="service__design--card wow fadeInUp animated"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDuration: "1s",
                      MozAnimationDuration: "1s",
                      animationDuration: "1s",
                    }}
                  >
                    <a href="#" className="d-block">
                      <img
                        className="lazy-load"
                        data-src="/Programmer-amico.svg"
                        alt="Flyer and Brochure Concept."
                        src="/Programmer-amico.svg"
                      />
                      <h3>Flyer and Brochure</h3>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="service__design--card wow fadeInUp animated"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDuration: "1s",
                      MozAnimationDuration: "1s",
                      animationDuration: "1s",
                    }}
                  >
                    <a href="#" className="d-block">
                      <img
                        className="lazy-load"
                        data-src="/UI_UX.svg"
                        alt="Motion Graphics and Animation Concept."
                        src="/UI_UX.svg"
                      />
                      <h3>Motion Graphics and Animation</h3>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="service__design--card wow fadeInUp animated"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDuration: "1s",
                      MozAnimationDuration: "1s",
                      animationDuration: "1s",
                    }}
                  >
                    <a href="#" className="d-block">
                      <img
                        className="lazy-load"
                        data-src="/SEO_analytics_team-amico.svg"
                        alt="Social Media Banners Concept."
                        src="/SEO_analytics_team-amico.svg"
                      />
                      <h3>Social Media Banners</h3>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="service__design--card wow fadeInUp animated"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDuration: "1s",
                      MozAnimationDuration: "1s",
                      animationDuration: "1s",
                    }}
                  >
                    <a href="#" className="d-block">
                      <img
                        className="lazy-load"
                        data-src="/Mobile_Marketing-pana.svg"
                        alt="Illustrations Concept."
                        src="/Mobile_Marketing-pana.svg"
                      />
                      <h3>Illustrations</h3>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="service__design--card wow fadeInUp animated"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDuration: "1s",
                      MozAnimationDuration: "1s",
                      animationDuration: "1s",
                    }}
                  >
                    <a href="#" className="d-block">
                      <img
                        className="lazy-load"
                        data-src="/Website_Creator-pana.svg"
                        alt="Print Designs Concept."
                        src="/Website_Creator-pana.svg"
                      />
                      <h3>Print Designs</h3>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* flow */}
          <section className="flow overflow">
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
                <h6>work flow</h6>
                <h2 className="title">
                  how we <span>get started</span>
                </h2>
              </div>
              <div className="row row-cols-xl-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 gx-5 gy-4">
                <div className="col">
                  <div
                    className="flow__card wow fadeInUp animated"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDuration: "1s",
                      MozAnimationDuration: "1s",
                      animationDuration: "1s",
                    }}
                  >
                    <div className="head">
                      <span>01</span>
                      <h3>Gather Information and Plan</h3>
                    </div>
                    <div className="body">
                      <p>
                        This involves understanding the project goals, target
                        audience, and brand guidelines. Research and create a
                        mood board to visually explore design directions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="flow__card wow fadeInUp animated"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDuration: "1s",
                      MozAnimationDuration: "1s",
                      animationDuration: "1s",
                    }}
                  >
                    <div className="head">
                      <span>02</span>
                      <h3>Concept and Design</h3>
                    </div>
                    <div className="body">
                      <p>
                        Freely brainstorm creative concepts, then explore with
                        rough sketches and mockups. Iterate on the strongest
                        idea using valuable client feedback.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="flow__card wow fadeInUp animated"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDuration: "1s",
                      MozAnimationDuration: "1s",
                      animationDuration: "1s",
                    }}
                  >
                    <div className="head">
                      <span>03</span>
                      <h3>Execution and Delivery</h3>
                    </div>
                    <div className="body">
                      <p>
                        In graphic design, execution &amp; delivery is where the
                        vision becomes reality and the polished final product is
                        handed to the client.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="flow__card wow fadeInUp animated"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDuration: "1s",
                      MozAnimationDuration: "1s",
                      animationDuration: "1s",
                    }}
                  >
                    <div className="head">
                      <span>04</span>
                      <h3>Feedback and Refinement</h3>
                    </div>
                    <div className="body">
                      <p>
                        The company encourages open and honest feedback from the
                        client. This might involve asking specific questions
                        about what resonates or what needs improvement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* portfolio */}
          <section className="portfolio__tab p__tb overflow">
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
                <h6>our portfolio</h6>
                <h2 className="title">
                  Graphic Design <span> portfolio</span>
                </h2>
              </div>
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="l__button l__button--border active"
                    id="pills-1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-72b61f55-4d25-4422-bc6c-bab7d87e2f7e"
                    type="button"
                    role="tab"
                    aria-controls="pills-1"
                    aria-selected="true"
                  >
                    Logo Design
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="l__button l__button--border "
                    id="pills-2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-7d849a8d-becb-4225-bac8-0b458a0e123f"
                    type="button"
                    role="tab"
                    aria-controls="pills-2"
                    aria-selected="true"
                  >
                    Brochure/ Flyer
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="l__button l__button--border "
                    id="pills-3-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-84f02b03-8fa6-49df-9d42-b38907690a37"
                    type="button"
                    role="tab"
                    aria-controls="pills-3"
                    aria-selected="true"
                  >
                    Social Media Design
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="l__button l__button--border "
                    id="pills-4-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-f83c175f-fb07-4008-acda-b9feba673670"
                    type="button"
                    role="tab"
                    aria-controls="pills-4"
                    aria-selected="true"
                  >
                    Branding
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane tab-pane_graphic fade show active"
                  id="pills-72b61f55-4d25-4422-bc6c-bab7d87e2f7e"
                  role="tabpanel"
                  aria-labelledby="pills-1-tab"
                  tabIndex="0 wow fadeInUp"
                  data-wow-duration="1s"
                >
                  <div className="work__slide logo-item">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 g-md-3 g-lg-4">
                      <div className="col">
                        <div
                          className="work__section--card"
                          data-aos="fade-up"
                          data-aos-duration={800}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="replaceCurrentImage('/final_size-11_720.jpg')"
                        >
                          <div className="work__section--card-img">
                            <img
                              className="lazy-load"
                              data-src="/final_size-11_720.jpg"
                              alt="Infinity"
                              src="/final_size-11_720.jpg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="work__section--card"
                          data-aos="fade-up"
                          data-aos-duration={800}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="replaceCurrentImage('/final_size-10_UhZi454.webp')"
                        >
                          <div className="work__section--card-img">
                            <img
                              className="lazy-load"
                              data-src="/final_size-10_UhZi454.webp"
                              alt="Kwabahal"
                              src="/final_size-10_UhZi454.webp"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="work__section--card"
                          data-aos="fade-up"
                          data-aos-duration={800}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="replaceCurrentImage('/final_size-09.webp')"
                        >
                          <div className="work__section--card-img">
                            <img
                              className="lazy-load"
                              data-src="/final_size-09.webp"
                              alt="None"
                              src="/final_size-09.webp"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="work__section--card"
                          data-aos="fade-up"
                          data-aos-duration={800}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="replaceCurrentImage('/final_size-14.jpg')"
                        >
                          <div className="work__section--card-img">
                            <img
                              className="lazy-load"
                              data-src="/final_size-14.jpg"
                              alt="None"
                              src="/final_size-14.jpg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="work__section--card"
                          data-aos="fade-up"
                          data-aos-duration={800}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="replaceCurrentImage('/final_size-13_720.jpg')"
                        >
                          <div className="work__section--card-img">
                            <img
                              className="lazy-load"
                              data-src="/final_size-13_720.jpg"
                              alt="Provision"
                              src="/final_size-13_720.jpg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="work__section--card"
                          data-aos="fade-up"
                          data-aos-duration={800}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="replaceCurrentImage('/final_size-12.webp')"
                        >
                          <div className="work__section--card-img">
                            <img
                              className="lazy-load"
                              data-src="/final_size-12.webp"
                              alt="None"
                              src="/final_size-12.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane tab-pane_graphic fade "
                  id="pills-7d849a8d-becb-4225-bac8-0b458a0e123f"
                  role="tabpanel"
                  aria-labelledby="pills-2-tab"
                  tabIndex="0 wow fadeInUp"
                  data-wow-duration="1s"
                >
                  <div className="work__slide image-item">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 g-md-3 g-lg-4">
                      <div className="col">
                        <div
                          className="work__section--card"
                          data-aos="fade-up"
                          data-aos-duration={800}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="replaceCurrentImage('/Flyer-11.webp')"
                        >
                          <div className="work__section--card-img">
                            <img
                              className="lazy-load"
                              data-src="/Flyer-11.webp"
                              alt="Eduzeit"
                              src="/Flyer-11.webp"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="work__section--card"
                          data-aos="fade-up"
                          data-aos-duration={800}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="replaceCurrentImage('/Flyer-14.webp')"
                        >
                          <div className="work__section--card-img">
                            <img
                              className="lazy-load"
                              data-src="/Flyer-14.webp"
                              alt="Venus Hospital"
                              src="/Flyer-14.webp"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="work__section--card"
                          data-aos="fade-up"
                          data-aos-duration={800}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="replaceCurrentImage('/Flyer-13.webp')"
                        >
                          <div className="work__section--card-img">
                            <img
                              className="lazy-load"
                              data-src="/Flyer-13.webp"
                              alt="KR Jyotish"
                              src="/Flyer-13.webp"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="work__section--card"
                          data-aos="fade-up"
                          data-aos-duration={800}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="replaceCurrentImage('/Flyer-12.webp')"
                        >
                          <div className="work__section--card-img">
                            <img
                              className="lazy-load"
                              data-src="/Flyer-12.webp"
                              alt="Infinity"
                              src="/Flyer-12.webp"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="work__section--card"
                          data-aos="fade-up"
                          data-aos-duration={800}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="replaceCurrentImage('/10-10_StEnd1w.webp')"
                        >
                          <div className="work__section--card-img">
                            <img
                              className="lazy-load"
                              data-src="/10-10_StEnd1w.webp"
                              alt="NIMS"
                              src="/10-10_StEnd1w.webp"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="work__section--card"
                          data-aos="fade-up"
                          data-aos-duration={800}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="replaceCurrentImage('/Flyer-09.webp')"
                        >
                          <div className="work__section--card-img">
                            <img
                              className="lazy-load"
                              data-src="/Flyer-09.webp"
                              alt="Horion"
                              src="/Flyer-09.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane tab-pane_graphic fade "
                  id="pills-84f02b03-8fa6-49df-9d42-b38907690a37"
                  role="tabpanel"
                  aria-labelledby="pills-3-tab"
                  tabIndex="0 wow fadeInUp"
                  data-wow-duration="1s"
                >
                  <div className="work__slide image-item">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 g-md-3 g-lg-4">
                      <div className="col">
                        <div
                          className="work__section--card"
                          data-aos="fade-up"
                          data-aos-duration={800}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="replaceCurrentImage('/Get_Trained__1.webp')"
                        >
                          <div className="work__section--card-img">
                            <img
                              className="lazy-load"
                              data-src="/Get_Trained__1.webp"
                              alt="Edu-Zeit"
                              src="/Get_Trained__1.webp"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="work__section--card"
                          data-aos="fade-up"
                          data-aos-duration={800}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="replaceCurrentImage('/AIMS__Goals.webp')"
                        >
                          <div className="work__section--card-img">
                            <img
                              className="lazy-load"
                              data-src="/AIMS__Goals.webp"
                              alt="Aims Education"
                              src="/AIMS__Goals.webp"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="work__section--card"
                          data-aos="fade-up"
                          data-aos-duration={800}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="replaceCurrentImage('/Global_Education_Admission_Open_2.webp')"
                        >
                          <div className="work__section--card-img">
                            <img
                              className="lazy-load"
                              data-src="/Global_Education_Admission_Open_2.webp"
                              alt="Global Educational Academy"
                              src="/Global_Education_Admission_Open_2.webp"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="work__section--card"
                          data-aos="fade-up"
                          data-aos-duration={800}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="replaceCurrentImage('/VENUS__Emergency_care_anytime_COPY.webp')"
                        >
                          <div className="work__section--card-img">
                            <img
                              className="lazy-load"
                              data-src="/VENUS__Emergency_care_anytime_COPY.webp"
                              alt="Venus"
                              src="/VENUS__Emergency_care_anytime_COPY.webp"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="work__section--card"
                          data-aos="fade-up"
                          data-aos-duration={800}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="replaceCurrentImage('/Nisulka-02.webp')"
                        >
                          <div className="work__section--card-img">
                            <img
                              className="lazy-load"
                              data-src="/Nisulka-02.webp"
                              alt="Secured Securities Free Demate and MeroShare Account Open Concept."
                              src="/Nisulka-02.webp"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="work__section--card"
                          data-aos="fade-up"
                          data-aos-duration={800}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="replaceCurrentImage('/Hardik_IVF_Friday_Fertility_02.webp')"
                        >
                          <div className="work__section--card-img">
                            <img
                              className="lazy-load"
                              data-src="/Hardik_IVF_Friday_Fertility_02.webp"
                              alt="Hardik IVF and Fertility Center"
                              src="/Hardik_IVF_Friday_Fertility_02.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane tab-pane_graphic fade "
                  id="pills-f83c175f-fb07-4008-acda-b9feba673670"
                  role="tabpanel"
                  aria-labelledby="pills-4-tab"
                  tabIndex="0 wow fadeInUp"
                  data-wow-duration="1s"
                >
                  <div className="work__slide image-item">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 g-md-3 g-lg-4">
                      <div className="col">
                        <div
                          className="work__section--card"
                          data-aos="fade-up"
                          data-aos-duration={800}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="replaceCurrentImage('/Final_B-02.webp')"
                        >
                          <div className="work__section--card-img">
                            <img
                              className="lazy-load"
                              data-src="/Final_B-02.webp"
                              alt="Hardik"
                              src="/Final_B-02.webp"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="work__section--card"
                          data-aos="fade-up"
                          data-aos-duration={800}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="replaceCurrentImage('/b.svg')"
                        >
                          <div className="work__section--card-img">
                            <img
                              className="lazy-load"
                              data-src="/b.svg"
                              alt="Insta Follow"
                              src="/b.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="work__section--card"
                          data-aos="fade-up"
                          data-aos-duration={800}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onclick="replaceCurrentImage('/Final_B-03.webp')"
                        >
                          <div className="work__section--card-img">
                            <img
                              className="lazy-load"
                              data-src="/Final_B-03.webp"
                              alt="NIMS"
                              src="/Final_B-03.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* why us */}
          <div className="mb-3">
            <section className="choose p__tb">
              <div className="l__container overflow">
                <div className="ttm-row">
                  <div className="row">
                    <div
                      className="col-lg-8 col-md-12 wow fadeInUp animated"
                      data-wow-duration="1s"
                      style={{
                        visibility: "visible",
                        WebkitAnimationDuration: "1s",
                        MozAnimationDuration: "1s",
                        animationDuration: "1s",
                      }}
                    >
                      <div className="section__title clearfix">
                        <h6>Why choose us</h6>
                        <h2 className="title">
                          We help you expand <span>your business</span> through
                          tech
                        </h2>
                      </div>
                      <div className="title-desc">
                        <p>
                          We have a team of Nepal's best graphics designers to
                          provide you with the best graphic design service.
                          Therefore, we are the right choice for all your
                          graphic design needs. Along with our graphics design
                          services, some of our additional perks are as follows:
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 p-2 p-md-3">
                      <div
                        className="choose__card text-center wow fadeInUp animated"
                        data-wow-duration="1s"
                        style={{
                          visibility: "visible",
                          WebkitAnimationDuration: "1s",
                          MozAnimationDuration: "1s",
                          animationDuration: "1s",
                        }}
                      >
                        <div className="choose__card--shape">
                          <img
                            src="/static/site-assets/images/service-shape.svg"
                            alt=""
                          />
                        </div>
                        <div className="choose__card--img">
                          <img
                            className="lazy-load"
                            data-src="/Revenue-pana.svg"
                            alt="Custom Illustration and Infographics Concept."
                            src="/Revenue-pana.svg"
                          />
                        </div>
                        <div className="choose__card--content">
                          <h3>Custom Illustration and Infographics</h3>
                          <p>
                            Discover a world of creativity with our custom
                            illustration and infographic services. Elevate your
                            brand identity with uniquely crafted visuals and
                            turn complex information into engaging stories that
                            leave a lasting impact.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 p-2 p-md-3">
                      <div
                        className="choose__card text-center wow fadeInUp animated"
                        data-wow-duration="1s"
                        style={{
                          visibility: "visible",
                          WebkitAnimationDuration: "1s",
                          MozAnimationDuration: "1s",
                          animationDuration: "1s",
                        }}
                      >
                        <div className="choose__card--shape">
                          <img
                            src="/static/site-assets/images/service-shape.svg"
                            alt=""
                          />
                        </div>
                        <div className="choose__card--img">
                          <img
                            className="lazy-load"
                            data-src="/Blog_post-bro.svg"
                            alt="Digital Design Concept."
                            src="/Blog_post-bro.svg"
                          />
                        </div>
                        <div className="choose__card--content">
                          <h3>Digital Design</h3>
                          <p>
                            Embrace the digital era with our premium digital
                            design services. From web graphics to social media
                            visuals, we tailor designs that seamlessly integrate
                            your brand into the online landscape.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 p-2 p-md-3">
                      <div
                        className="choose__card text-center wow fadeInUp animated"
                        data-wow-duration="1s"
                        style={{
                          visibility: "visible",
                          WebkitAnimationDuration: "1s",
                          MozAnimationDuration: "1s",
                          animationDuration: "1s",
                        }}
                      >
                        <div className="choose__card--shape">
                          <img
                            src="/static/site-assets/images/service-shape.svg"
                            alt=""
                          />
                        </div>
                        <div className="choose__card--img">
                          <img
                            className="lazy-load"
                            data-src="/Website_Creator-pana.svg"
                            alt="Brand Identity Development Concept."
                            src="/Website_Creator-pana.svg"
                          />
                        </div>
                        <div className="choose__card--content">
                          <h3>Brand Identity Development</h3>
                          <p>
                            Develop a distinctive brand identity with our expert
                            guidance. We specialize in crafting logos and brand
                            elements that leave a lasting impression from
                            scratch to completion to set your brand apart from
                            the competition.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 p-2 p-md-3">
                      <div
                        className="choose__card text-center wow fadeInUp animated"
                        data-wow-duration="1s"
                        style={{
                          visibility: "visible",
                          WebkitAnimationDuration: "1s",
                          MozAnimationDuration: "1s",
                          animationDuration: "1s",
                        }}
                      >
                        <div className="choose__card--shape">
                          <img
                            src="/static/site-assets/images/service-shape.svg"
                            alt=""
                          />
                        </div>
                        <div className="choose__card--img">
                          <img
                            className="lazy-load"
                            data-src="/Mobile_Marketing-pana.svg"
                            alt="Creative Design Solutions Concept."
                            src="/Mobile_Marketing-pana.svg"
                          />
                        </div>
                        <div className="choose__card--content">
                          <h3>Creative Design Solutions</h3>
                          <p>
                            Elevate your brand with our creative prowess,
                            offering premium design solutions that go beyond the
                            conventional, ensuring your visuals stand out in a
                            crowded market.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* enquiry */}
          {/*  other service */}
          <section className="service-other p__tb overflow">
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
                <h6>other services</h6>
                <h2 className="title">
                  One Solution For All Your <span>Digital needs</span>
                </h2>
              </div>
              <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 gy-lg-5 gy-4 gx-4">
                <div className="col">
                  <div className="service__home--card  pe-lg-4 pe-auto  text-center text-md-start">
                    <a href="/services/website-design-in-nepal">
                      <div className="service__home--card-icon">
                        <img
                          className="lazy-load"
                          data-src="/Website_developlent.svg"
                          alt=""
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
                  <div className="service__home--card  pe-lg-4 pe-auto  text-center text-md-start">
                    <a href="/services/mobile-app-development">
                      <div className="service__home--card-icon">
                        <img
                          className="lazy-load"
                          data-src="/App_Development.svg"
                          alt=""
                          src="/App_Development.svg"
                        />
                      </div>
                      <div className="service__home--card-content">
                        <h3>App Development</h3>
                        <p>
                          Innovative and user-friendly mobile application
                          designed to engage users.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="service__home--card  pe-lg-4 pe-auto  text-center text-md-start">
                    <a href="/services/system-software-development">
                      <div className="service__home--card-icon">
                        <img
                          className="lazy-load"
                          data-src="/Programmer-amico.svg"
                          alt=""
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
                  <div className="service__home--card  pe-lg-4 pe-auto  text-center text-md-start">
                    <a href="/services/ui-ux-design">
                      <div className="service__home--card-icon">
                        <img
                          className="lazy-load"
                          data-src="/UI_UX.svg"
                          alt=""
                          src="/UI_UX.svg"
                        />
                      </div>
                      <div className="service__home--card-content">
                        <h3>UI/UX</h3>
                        <p>
                          Design eye-catching UI/UX interfaces for effortless
                          user interaction
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="service__home--card  pe-lg-4 pe-auto  text-center text-md-start">
                    <a href="/services/seo-in-nepal">
                      <div className="service__home--card-icon">
                        <img
                          className="lazy-load"
                          data-src="/SEO_analytics_team-amico.svg"
                          alt=""
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
                  <div className="service__home--card  pe-lg-4 pe-auto  text-center text-md-start">
                    <a href="/services/social-media-marketing">
                      <div className="service__home--card-icon">
                        <img
                          className="lazy-load"
                          data-src="/Mobile_Marketing-pana.svg"
                          alt=""
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
                  <div className="service__home--card  pe-lg-4 pe-auto  text-center text-md-start">
                    <a href="/services/content-writing">
                      <div className="service__home--card-icon">
                        <img
                          className="lazy-load"
                          data-src="/Blog_post-bro.svg"
                          alt=""
                          src="/Blog_post-bro.svg"
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
                <div className="col">
                  <div className="service__home--card  pe-lg-4 pe-auto  text-center text-md-start">
                    <a href="/services/google-ads-ppc-marketing">
                      <div className="service__home--card-icon">
                        <img
                          className="lazy-load"
                          data-src="/Revenue-pana.svg"
                          alt=""
                          src="/Revenue-pana.svg"
                        />
                      </div>
                      <div className="service__home--card-content">
                        <h3>Pay Per Click</h3>
                        <p>
                          Maximize your ROI and drive targeted traffic to your
                          digital assets
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  partner */}
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
          </section>
          {/*  partner */}
          <section className="faq p__tb">
            <div className="l__container">
              <div
                className="row wow fadeInUp"
                data-wow-duration="1s"
                style={{
                  visibility: "hidden",
                  WebkitAnimationName: "none",
                  MozAnimationName: "none",
                  animationName: "none",
                  WebkitAnimationDuration: "1s",
                  MozAnimationDuration: "1s",
                  animationDuration: "1s",
                }}
              >
                <div className="col-md-6">
                  <aside>
                    <div className="section__title">
                      <h6>FAQs</h6>
                      <h2 className="title">
                        Frequently <span>Asked </span>Questions
                      </h2>
                      <p className=" d-none d-lg-inline-block">
                        Welcome to our FAQ section! Here you'll find quick
                        answers to the most common questions about our products
                        and services.
                      </p>
                    </div>
                    <img
                      data-src="/faq.svg"
                      className="lazy-load img-fluid wow zoomIn d-none d-md-block"
                      data-wow-duration="1s"
                      alt=""
                      style={{
                        visibility: "hidden",
                        WebkitAnimationName: "none",
                        MozAnimationName: "none",
                        animationName: "none",
                        WebkitAnimationDuration: "1s",
                        MozAnimationDuration: "1s",
                        animationDuration: "1s",
                      }}
                      src="/faq.svg"
                    />
                  </aside>
                </div>
                <div className="col-md-6">
                  <div className="faq__accordion">
                    <ul className="accordion custom__accordion">
                      <div className="col-lg-12">
                        <li className="accordion__item">
                          <h3
                            className="accordion__title"
                            href="javascript:void(0)"
                          >
                            <i className="fa-solid fa-chevron-down" />
                            How can I get started with your graphic design
                            services?
                          </h3>
                          <div
                            className="accordion__content"
                            style={{ display: "none" }}
                          >
                            <p>
                              Getting started is easy! Simply reach out to us
                              through our contact page or inquiry form. We'll
                              schedule a consultation to discuss your project
                              and determine the best approach to meet your
                              design needs.
                            </p>
                          </div>
                        </li>
                      </div>
                      <div className="col-lg-12">
                        <li className="accordion__item">
                          <h3
                            className="accordion__title"
                            href="javascript:void(0)"
                          >
                            <i className="fa-solid fa-chevron-down" />
                            What sets your graphic design services apart from
                            others?
                          </h3>
                          <div
                            className="accordion__content"
                            style={{ display: "none" }}
                          >
                            <p>
                              Our approach combines creativity, strategic
                              thinking, and attention to detail. We prioritize
                              client satisfaction, ensuring that every design
                              aligns with their vision and goals.
                            </p>
                          </div>
                        </li>
                      </div>
                      <div className="col-lg-12">
                        <li className="accordion__item">
                          <h3
                            className="accordion__title"
                            href="javascript:void(0)"
                          >
                            <i className="fa-solid fa-chevron-down" />
                            Can you work with existing brand elements or create
                            a design from scratch?
                          </h3>
                          <div
                            className="accordion__content"
                            style={{ display: "none" }}
                          >
                            <p>
                              As one of the best graphics design service
                              providers in Nepal, we at Blue Fox can work with
                              both existing brand guidelines and create new
                              brand designs from scratch. We are ready to adapt
                              and meet your every need.
                            </p>
                          </div>
                        </li>
                      </div>
                      <div className="col-lg-12">
                        <li className="accordion__item">
                          <h3
                            className="accordion__title"
                            href="javascript:void(0)"
                          >
                            <i className="fa-solid fa-chevron-down" />
                            How long does it take to complete a graphic design
                            project?
                          </h3>
                          <div
                            className="accordion__content"
                            style={{ display: "none" }}
                          >
                            <p>
                              The specific duration that it takes to complete a
                              graphic design project varies depending on the
                              complexity and scope of the project. That said, we
                              closely work with our clients to establish
                              realistic timelines to ensure timely delivery
                              without compromising the quality of the project.
                            </p>
                          </div>
                        </li>
                      </div>
                      <div className="col-lg-12">
                        <li className="accordion__item">
                          <h3
                            className="accordion__title"
                            href="javascript:void(0)"
                          >
                            <i className="fa-solid fa-chevron-down" />
                            What graphic design services do you offer?
                          </h3>
                          <div
                            className="accordion__content"
                            style={{ display: "none" }}
                          >
                            <p>
                              We provide a comprehensive range of graphic design
                              services, including logo design, brand identity
                              development, digital design, custom illustration,
                              infographics, and more.
                            </p>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Modal */}
        <div
          className="modal fade portfolio_img"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body position-relative">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIB-hLO_dkzektjO0TP4Q1D_l_bfA98nMI178NeDR3OcpLJBDkLS8S37KbNw&s"
                  id="portfolioPrevImage"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
      </div>
    </div>
  );
};

export default page;
