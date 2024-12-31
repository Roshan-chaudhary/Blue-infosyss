import React from "react";

const page = () => {
  return (
    <div>
      <div style={{ minHeight: "50vh" }}>
        <section className="">
          <div className="l__container">
            <div
              className="portfolio__page m__tb--b"
              style={{ backgroundSize: "contain", minHeight: 500 }}
            >
              <div className="section__title text-center m__tb--b">
                <h6>Our Portfolio</h6>
                <h1 className="title">
                  Some of our <span>Recent Work</span>
                </h1>
              </div>
              <div className="tabs__head">
                <ul className="nav nav-pills">
                  <li className="nav-item">
                    <a
                      href="?category=all&child=all"
                      className="l__button l__button--border active"
                    >
                      All
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="?category=website-development&child=all"
                      className="l__button l__button--border "
                    >
                      Website Development
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="?category=mobile-application&child=all"
                      className="l__button l__button--border "
                    >
                      Mobile Application
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="?category=graphics-design&child=all"
                      className="l__button l__button--border "
                    >
                      Graphics Design
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="?category=graphics-design&child=all"
                      className="l__button l__button--border "
                    >
                      UI/UX
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content tabs__body px-3 px-lg-4">
                <div className="tab-pane fade show active">
                  <div className="tabs__body--content">
                    <div className="row">
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/Laparoscopic2.webp"
                              alt="venus hospital"
                              src="/Laparoscopic2.webp"
                            />
                          </div>
                          <div className="content">
                            <h3>venus hospital</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/final_size-10.webp"
                              alt="None"
                              src="/final_size-10.webp"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/man_ko_santi_720.webp"
                              alt="None"
                              src="/man_ko_santi_720.webp"
                            />
                          </div>
                          <div className="content">
                            <h3>Nightvision smm post</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/20000mah_powerbank.jpg"
                              alt="MC Dodo"
                              src="/20000mah_powerbank.jpg"
                            />
                          </div>
                          <div className="content">
                            <h3>MC Dodo</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/Hardik_IVF_Friday_Fertility_02_coLMHfF.webp"
                              alt="None"
                              src="/Hardik_IVF_Friday_Fertility_02_coLMHfF.webp"
                            />
                          </div>
                          <div className="content">
                            <h3>Hardik IVF</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/final_size-11_720_nN5fyIi.jpg"
                              alt="None"
                              src="/final_size-11_720_nN5fyIi.jpg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/Flyer-11.webp"
                              alt="Eduzeit"
                              src="/Flyer-11.webp"
                            />
                          </div>
                          <div className="content">
                            <h3>Edu Zeit</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/final_size-12_MPwqW4y.webp"
                              alt="None"
                              src="/final_size-12_MPwqW4y.webp"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/Flyer-13_Y4qWrGa.webp"
                              alt="KR Jyotish"
                              src="/Flyer-13_Y4qWrGa.webp"
                            />
                          </div>
                          <div className="content">
                            <h3>KR Jyotish</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/egg_freezing.webp"
                              alt="Hardik ivf Center"
                              src="/egg_freezing.webp"
                            />
                          </div>
                          <div className="content">
                            <h3>Hardik ivf Center</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/final_size-14_SXMDUxf.jpg"
                              alt="None"
                              src="/final_size-14_SXMDUxf.jpg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/memenavya__.webp"
                              alt="None"
                              src="/memenavya__.webp"
                            />
                          </div>
                          <div className="content">
                            <h3>Navya</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/AIMS__Goals_wt7mV2N.webp"
                              alt="None"
                              src="/AIMS__Goals_wt7mV2N.webp"
                            />
                          </div>
                          <div className="content">
                            <h3>AIMS Education</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/24-7.webp"
                              alt="None"
                              src="/24-7.webp"
                            />
                          </div>
                          <div className="content">
                            <h3>Venus smm post</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/Nisulka_Khata-01.webp"
                              alt="None"
                              src="/Nisulka_Khata-01.webp"
                            />
                          </div>
                          <div className="content">
                            <h3>Secured Securities</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/Flyer-09_jKFr2uy.webp"
                              alt="Horion"
                              src="/Flyer-09_jKFr2uy.webp"
                            />
                          </div>
                          <div className="content">
                            <h3>Horion</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/Global_Education_Admission_Open_2_mxNu98B.webp"
                              alt="None"
                              src="/Global_Education_Admission_Open_2_mxNu98B.webp"
                            />
                          </div>
                          <div className="content">
                            <h3>ACCA at seekshya</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/Get_Trained_.webp"
                              alt="EduZeit"
                              src="/Get_Trained_.webp"
                            />
                          </div>
                          <div className="content">
                            <h3>EduZeit</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/Flyer-10.webp"
                              alt="NIMS"
                              src="/Flyer-10.webp"
                            />
                          </div>
                          <div className="content">
                            <h3>NIMS</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/final_size-13_720_yBLBU4U.jpg"
                              alt="None"
                              src="/final_size-13_720_yBLBU4U.jpg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/Flyer-14_ZPWPyeV.webp"
                              alt="Venus Hospital"
                              src="/Flyer-14_ZPWPyeV.webp"
                            />
                          </div>
                          <div className="content">
                            <h3>Venus</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/final_size-09_Wf877yY.webp"
                              alt="None"
                              src="/final_size-09_Wf877yY.webp"
                            />
                          </div>
                          <div className="content">
                            <h3>Infinity</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 graphics mb-3">
                        <div className="portfolio-item__inner">
                          <div className="thumb">
                            <img
                              className="lazy-load"
                              data-src="/Flyer-12_scsavTE.webp"
                              alt="Infinity"
                              src="/Flyer-12_scsavTE.webp"
                            />
                          </div>
                          <div className="content">
                            <h3>Infinity</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
