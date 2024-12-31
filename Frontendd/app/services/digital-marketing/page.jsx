"use client";
import React, { useState } from "react";

const page = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <div>
      <section className="service__banner-">
        <div className="l__container">
          <div className="service__banner--content overflow">
            <div className="row  flex-column-reverse flex-md-row">
              <div className="col-lg-7 col-md-6">
                <div className="left">
                  <div className="badge">Unleash your Social Power</div>
                  <div className="section__title  clearfix">
                    <h1 className="title">
                      Revolutionize your brand's impact in the digital sphere!
                    </h1>
                  </div>
                  <div className="title-desc">
                    <p>
                      At Blue Fox, we elevate your online presence, drive
                      traffic, and boost conversion. Get tailored strategies for
                      success in this digital age. Let's Transform Your Brand
                      Together!
                    </p>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#enquiryModal"
                      data-id="14511bc2-47a1-416f-8363-fefe1d921e82"
                      className="l__button l__button--border"
                    >
                      <span>lets start conversation</span>
                      <i className="fa-solid fa-chevron-right" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="right">
                  <img
                    src="/E_learning_Cgov5FC.svg"
                    className=""
                    alt="Digital Marketing Service."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service__design--bg  p__tb">
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
            <h6>Services</h6>
            <h2 className="title">
              What we Offer <span>For Your Business</span>
            </h2>
          </div>
          <div
            className="service__design--bg-white wow fadeInUp animated"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              WebkitAnimationDuration: "1s",
              MozAnimationDuration: "1s",
              animationDuration: "1s",
            }}
          >
            <div className="row service__design--bg-card">
              <div className="col-lg-8 col-md-8">
                <div className="content">
                  <h3 className="text-center text-md-start">
                    Social Media Marketing (SMM)
                  </h3>
                  <div className="img d-md-none">
                    <img
                      className="lazy-load"
                      data-src="/Mobile_Marketing-pana.svg"
                      alt="Social Media Marketing Service."
                      src="/Mobile_Marketing-pana.svg"
                    />
                  </div>
                  <p>
                    Social media marketing involves the use of social media
                    platforms to promote products, services, or brands to a wide
                    audience. It encompasses creating and sharing content on
                    social networks such as Facebook, Instagram, Twitter,
                    LinkedIn, and TikTok to achieve marketing and branding
                    goals. This form of marketing leverages the interconnected
                    nature of social media to engage with customers directly,
                    fostering brand loyalty and customer relationships through
                    interactive content, user-generated posts, and responsive
                    communication. A crucial aspect of social media marketing is
                    its ability to provide detailed analytics and insights into
                    consumer behavior and campaign performance. Through these
                    analytics, businesses can track metrics such as engagement
                    rates, reach, conversion rates, and customer demographics.
                    This data-driven approach enables marketers to refine their
                    strategies, tailor content to specific audiences, and
                    optimize their efforts for better results.
                  </p>
                  <div className="text-center text-md-start">
                    <a
                      href="/services/social-media-marketing"
                      className="more--"
                    >
                      Learn more
                      <span>
                        <i className="fa-solid fa-chevron-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="img d-none d-md-block">
                  <img
                    className="lazy-load"
                    data-src="/Mobile_Marketing-pana.svg"
                    alt="Social Media Marketing Service."
                    src="/Mobile_Marketing-pana.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              <div
                className="service__design--bg-white wow fadeInUp animated"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  WebkitAnimationDuration: "1s",
                  MozAnimationDuration: "1s",
                  animationDuration: "1s",
                }}
              >
                <div className="service__design--bg-card service__design--bg-card--">
                  <div className="row">
                    <div className="col-lg-12 col-md-8">
                      <div className="content">
                        <h3 className="text-center text-md-start">
                          Content Writing
                        </h3>
                        <div className="img d-md-none">
                          <img
                            className="lazy-load"
                            data-src="/Blog_post-bro.svg"
                            alt="content-writing"
                            src="/Blog_post-bro.svg"
                          />
                        </div>
                        <p>
                          Enhance Engagement through Compelling Narratives,
                          Impeccable Quality, and Tailored Content Solutions. At
                          Blue Fox, we offer top-notch content writing in Nepal
                          to bring your ideas to life! Elevate your brand's
                          story with our expertise in crafting captivating and
                          impactful content.
                        </p>
                        <div className="text-center text-md-start">
                          <a
                            href="/services/content-writing"
                            className="more--"
                          >
                            Learn more
                            <span>
                              <i className="fa-solid fa-chevron-right" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-4">
                      <div className="img d-none d-md-block">
                        <img
                          className="lazy-load"
                          data-src="/Blog_post-bro.svg"
                          alt="content-writing"
                          src="/Blog_post-bro.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6">
              <div
                className="service__design--bg-white wow fadeInUp animated"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  WebkitAnimationDuration: "1s",
                  MozAnimationDuration: "1s",
                  animationDuration: "1s",
                }}
              >
                <div className="service__design--bg-card service__design--bg-card--">
                  <div className="row">
                    <div className="col-lg-12 col-md-8">
                      <div className="content">
                        <h3 className="text-center text-md-start">
                          Search Engine Optimization (SEO)
                        </h3>
                        <div className="img d-md-none">
                          <img
                            className="lazy-load"
                            data-src="/SEO_analytics_team-amico.svg"
                            alt="SEO Service."
                            src="/SEO_analytics_team-amico.svg"
                          />
                        </div>
                        <p>
                          Tired of investing time and money in a website that
                          gets no traffic? Blue Fox, Nepal's premier SEO agency,
                          solves your online visibility challenges and drives
                          customers to your site. Our seasoned SEO experts in
                          Nepal are adept at boosting your rankings and gaining
                          a competitive advantage. With a proven track record of
                          success, we specialize in tailored SEO strategies that
                          deliver measurable results. Contact us for a
                          complimentary consultation and let's elevate your
                          online presence together!
                        </p>
                        <div className="text-center text-md-start">
                          <a href="/services/seo-in-nepal" className="more--">
                            Learn more
                            <span>
                              <i className="fa-solid fa-chevron-right" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-4">
                      <div className="img d-none d-md-block">
                        <img
                          className="lazy-load"
                          data-src="/SEO_analytics_team-amico.svg"
                          alt="SEO Service."
                          src="/SEO_analytics_team-amico.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 ">
              <div
                className="service__design--bg-white wow fadeInUp animated"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  WebkitAnimationDuration: "1s",
                  MozAnimationDuration: "1s",
                  animationDuration: "1s",
                }}
              >
                <div className="service__design--bg-card service__design--bg-card--">
                  <div className="row">
                    <div className="col-lg-12 col-md-8">
                      <div className="content">
                        <h3 className="text-center text-md-start">
                          Pay Per Click
                        </h3>
                        <div className="img d-md-none">
                          <img
                            className="lazy-load"
                            data-src="/Revenue-pana.svg"
                            alt="paid Ads Service."
                            src="/Revenue-pana.svg"
                          />
                        </div>
                        <p>
                          Ignite your brand's potential with Blue Fox's premier
                          PPC marketing services! Pay only for clicks that
                          matter, ensuring a budget-friendly campaign. Utilize
                          real-time analytics and strategic management for
                          superior ROI. Shape your online narrative and start
                          your success journey today with Blue Fox! Our expert
                          team optimizes campaigns for growth, refining ad
                          placements and enhancing performance. With tailored
                          strategies, we drive impactful outcomes aligned with
                          your business goals, ensuring sustained digital
                          success. Trust Blue Fox to propel your brand forward
                          in the competitive digital landscape.
                        </p>
                        <div className="text-center text-md-start">
                          <a
                            href="/services/google-ads-ppc-marketing"
                            className="more--"
                          >
                            Learn more
                            <span>
                              <i className="fa-solid fa-chevron-right" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-4">
                      <div className="img d-none d-md-block">
                        <img
                          className="lazy-load"
                          data-src="/Revenue-pana.svg"
                          alt="paid Ads Service."
                          src="/Revenue-pana.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="service__design--bg-white wow fadeInUp animated"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  WebkitAnimationDuration: "1s",
                  MozAnimationDuration: "1s",
                  animationDuration: "1s",
                }}
              >
                <div className="service__design--bg-card service__design--bg-card--">
                  <div className="row">
                    <div className="col-lg-12 col-md-8">
                      <div className="content">
                        <h3 className="text-center text-md-start">
                          Graphic Design
                        </h3>
                        <div className="img d-md-none">
                          <img
                            className="lazy-load"
                            data-src="/Website_Creator-pana.svg"
                            alt=""
                            src="/Website_Creator-pana.svg"
                          />
                        </div>
                        <p>
                          Elevate your brand with captivating logos and
                          comprehensive branding solutions with the best graphic
                          design services from Blue Fox. Our creative brilliance
                          is ideal for transforming your ideas into visual
                          masterpieces with tailored designs for your digital
                          needs.
                        </p>
                        <div className="text-center text-md-start">
                          <a
                            href="/services/graphics-design"
                            className="more--"
                          >
                            Learn more
                            <span>
                              <i className="fa-solid fa-chevron-right" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-4">
                      <div className="img d-none d-md-block">
                        <img
                          className="lazy-load"
                          data-src="/Website_Creator-pana.svg"
                          alt=""
                          src="/Website_Creator-pana.svg"
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
      <div className="p__tb">
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
                    <h3>Strategy</h3>
                  </div>
                  <div className="body">
                    <p>
                      We start with strategy sessions, exploring your brand and
                      goals to create a digital success roadmap.
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
                    <h3>Planning</h3>
                  </div>
                  <div className="body">
                    <p>
                      After mapping our roadmap, we plan each step with tasks
                      and timelines, ensuring client collaboration.
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
                    <h3>Execution</h3>
                  </div>
                  <div className="body">
                    <p>
                      After detailed planning, we execute strategies to create
                      impactful content and launch targeted campaigns.
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
                    <h3>Optimization</h3>
                  </div>
                  <div className="body">
                    <p>
                      In the final phase, we optimize content based on
                      data-driven insights to evolve your digital presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="agency p__tb overflow ">
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
            <h2>
              Expect Great Things from your <span>Digital Agency</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div
                className="agency__graph--img wow zoomIn animated"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  WebkitAnimationDuration: "1s",
                  MozAnimationDuration: "1s",
                  animationDuration: "1s",
                }}
              >
                <img
                  className="lazy-load"
                  data-src="/Ride_Sharing.svg"
                  alt=""
                  src="/Ride_Sharing.svg"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="agency__content">
                <h6 className="title">
                  Believe it because you have seen it. Here are real numbers
                  from just one successful victorious partner.
                </h6>
                <ul className="radio">
                  <li>
                    <h3>Before Digital Marketing</h3>
                  </li>
                  <li>
                    <label className="switch">
                      <input
                        type="checkbox"
                        id="toggle__change"
                        defaultValue="on"
                        onChange={(e) => setToggled(e.target.checked)}
                      />
                      <span className="slider" />
                    </label>
                  </li>
                  <li>
                    <h3>After Digital Marketing</h3>
                  </li>
                </ul>
                <div className="agency__text">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="agency__text--item">
                        <div
                          className="marketing__numbers"
                          style={{ height: 40, overflow: "hidden" }}
                        >
                          <span
                            className="before__marketing"
                            style={{ top: "50%" }}
                          >
                            {toggled ? "406" : "103"}
                          </span>
                        </div>
                        Annual Organic Trafic
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="agency__text--item">
                        <div
                          className="marketing__numbers"
                          style={{ height: 40, overflow: "hidden" }}
                        >
                          <span
                            className="before__marketing"
                            style={{ top: "50%" }}
                          >
                            {toggled ? "15" : "2"}
                          </span>
                        </div>
                        Ranking Keywords
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="agency__text--item">
                        <div
                          className="marketing__numbers"
                          style={{ height: 40, overflow: "hidden" }}
                        >
                          <span
                            className="before__marketing"
                            style={{ top: "50%" }}
                          >
                            {toggled ? "30%" : "6%"}
                          </span>
                        </div>
                        Return on Investment
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="agency__graph--img wow zoomIn  d-none d-md-block animated"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  WebkitAnimationDuration: "1s",
                  MozAnimationDuration: "1s",
                  animationDuration: "1s",
                }}
              >
                <img
                  className="lazy-load"
                  data-src="/E_Commerce-06_uTDmGl6.svg"
                  alt=""
                  src="/E_Commerce-06_uTDmGl6.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="choose-two overflow p__tb">
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
            <h6>Solution Oriented</h6>
            <h2 className="title">
              How we Run <span>Our Business</span>
            </h2>
          </div>
          <div className="choose row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
            <div className="col">
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
                <div className="choose__card--img choose__card--img-two">
                  <img
                    className="lazy-load"
                    data-src="/Website_designer-pana.svg"
                    alt="Result Driven Concept."
                    src="/Website_designer-pana.svg"
                  />
                </div>
                <div className="choose__card--content choose__card--content-two">
                  <h3 className="text-center">Result Driven</h3>
                  <p>
                    We deliver measurable success with finely-tuned strategies
                    aligned with your business goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
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
                <div className="choose__card--img choose__card--img-two">
                  <img
                    className="lazy-load"
                    data-src="/Business_deal-pana.svg"
                    alt="Collaboration Concept."
                    src="/Business_deal-pana.svg"
                  />
                </div>
                <div className="choose__card--content choose__card--content-two">
                  <h3 className="text-center">Collaboration</h3>
                  <p>
                    We leverage your insights with our expertise to propel your
                    business through synergistic partnership
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
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
                <div className="choose__card--img choose__card--img-two">
                  <img
                    className="lazy-load"
                    data-src="/Process-pana.svg"
                    alt="Innovation Concept."
                    src="/Process-pana.svg"
                  />
                </div>
                <div className="choose__card--content choose__card--content-two">
                  <h3 className="text-center">Innovation</h3>
                  <p>
                    Here, we embrace fresh ideas, tech, and creativity to keep
                    your brand ahead, evolving with trends
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="state overflow p__tb">
        <div
          className="l__container wow zoomIn animated"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            WebkitAnimationDuration: "1s",
            MozAnimationDuration: "1s",
            animationDuration: "1s",
          }}
        >
          <div className="row">
            <div className="col-lg-3">
              <div className="section__title text-center">
                <h6>Our Statistics</h6>
                <h2>
                  Pay for <span>Qualified Traffic</span>
                </h2>
              </div>
              <div className="title-desc">
                <p>
                  At Blue Fox, we ensure that you receive qualified traffic to
                  optimize your investment and boost conversions. Experience
                  effective and efficient and effective results with our
                  tailored strategies.
                </p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4">
                <div className="col">
                  <div className="state__item">
                    <main
                      id=""
                      className="progress-circle"
                      role="progressbar"
                      aria-valuenow=""
                      aria-valuemin={0}
                      style={{ "--value": 90 }}
                      aria-valuemax={100}
                    ></main>
                    <h3>Client Retention Rate</h3>
                  </div>
                </div>
                <div className="col">
                  <div className="state__item">
                    <main
                      id=""
                      className="progress-circle"
                      role="progressbar"
                      aria-valuenow=""
                      aria-valuemin={0}
                      style={{ "--value": 25 }}
                      aria-valuemax={100}
                    ></main>
                    <h3>Average increase in lead generation</h3>
                  </div>
                </div>
                <div className="col">
                  <div className="state__item">
                    <main
                      id=""
                      className="progress-circle"
                      role="progressbar"
                      aria-valuenow=""
                      aria-valuemin={0}
                      style={{ "--value": 50 }}
                      aria-valuemax={100}
                    ></main>
                    <h3>Average increase in website traffic</h3>
                  </div>
                </div>
                <div className="col">
                  <div className="state__item">
                    <main
                      id=""
                      className="progress-circle"
                      role="progressbar"
                      aria-valuenow=""
                      aria-valuemin={0}
                      style={{ "--value": 89 }}
                      aria-valuemax={100}
                    ></main>
                    <h3>Successful Digital Marketing Campaigns</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq p__tb">
        <div className="l__container">
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
            <div className="col-md-6">
              <aside>
                <div className="section__title">
                  <h6>FAQs</h6>
                  <h2 className="title">
                    Frequently <span>Asked </span>Questions
                  </h2>
                  <p className=" d-none d-lg-inline-block">
                    Welcome to our FAQ section! Here you'll find quick answers
                    to the most common questions about our products and
                    services.
                  </p>
                </div>
                <img
                  data-src="/faq.svg"
                  className="lazy-load img-fluid wow zoomIn d-none d-md-block animated"
                  data-wow-duration="1s"
                  alt=""
                  style={{
                    visibility: "visible",
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
                        What services does your digital marketing agency
                        provide?
                      </h3>
                      <div
                        className="accordion__content"
                        style={{ display: "none" }}
                      >
                        <p>
                          At Blue Fox, we provide services such as Social Media
                          Marketing (SMM), Content Writing/ Marketing, Search
                          Engine Optimization (SEO), Pay-per-click (PPC), and
                          Graphic Design.
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
                        Can you customize a digital marketing strategy to fit my
                        business goals and budget?
                      </h3>
                      <div
                        className="accordion__content"
                        style={{ display: "none" }}
                      >
                        <p>
                          Yes absolutely. At Blue Fox, we provide you with
                          customized and complete digital marketing services.
                          Therefore, we can provide you with customized digital
                          marketing strategies to fit your business goals and
                          budget.
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
                        How will digital marketing benefit my business over
                        traditional methods?
                      </h3>
                      <div
                        className="accordion__content"
                        style={{ display: "none" }}
                      >
                        <p>
                          Digital marketing allows you to reach a wider range of
                          customers, target your advertising, and get measurable
                          results. Furthermore, digital marketing is also
                          cost-effective when compared to traditional marketing.
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
                        How long does it take to see results from digital
                        marketing efforts?
                      </h3>
                      <div
                        className="accordion__content"
                        style={{ display: "none" }}
                      >
                        <p>
                          The time required to see the results varies depending
                          on your business goals, strategy, and industry.
                          Depending on these factors, some campaigns provide you
                          with quick results, while others can take a while.
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
                        Is digital marketing suitable for small businesses?
                      </h3>
                      <div
                        className="accordion__content"
                        style={{ display: "none" }}
                      >
                        <p>
                          Yes, it is. Digital marketing is highly effective for
                          any size of business. This includes both small and
                          large-scale businesses. It provides targeted reach and
                          allows you to connect with your specific audience.
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
                        How do you ensure that digital marketing strategies
                        align with our brand identity and values?
                      </h3>
                      <div
                        className="accordion__content"
                        style={{ display: "none" }}
                      >
                        <p>
                          Our digital marketing process involves a thorough
                          understanding of your brand, values, and goals. We
                          tailor our strategies to align with your brand
                          identity and ensure a consistent, authentic
                          representation across all of your digital channels.
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
                        How do you determine the target audience for our digital
                        marketing campaigns?
                      </h3>
                      <div
                        className="accordion__content"
                        style={{ display: "none" }}
                      >
                        <p>
                          We employ a data-driven approach, utilizing analytics,
                          market research, and customer profiling to identify
                          and target your specific audience.
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
                        What is digital marketing, and why do I need it for my
                        business?
                      </h3>
                      <div
                        className="accordion__content"
                        style={{ display: "none" }}
                      >
                        <p>
                          Digital marketing includes activities and strategies
                          designed to promote and grow your business.
                          Implementing digital marketing in your business allows
                          you to reach a wider range of audience, increase brand
                          visibility, and drive conversions.
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
                        What sets your digital marketing agency apart from
                        others?
                      </h3>
                      <div
                        className="accordion__content"
                        style={{ display: "none" }}
                      >
                        <p>
                          At Blue Fox, we use a holistic and data-driven
                          approach to digital marketing. Furthermore, we also
                          offer a complete range of services and personalized
                          strategies and provide you with a commitment to
                          measurable results.
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
                        Do you conduct competitor analysis as part of your
                        digital marketing strategy?
                      </h3>
                      <div
                        className="accordion__content"
                        style={{ display: "none" }}
                      >
                        <p>
                          Yes, we do conduct competitor analysis as a part of
                          our digital marketing strategy. We assess competitor
                          strengths and weaknesses to identify opportunities and
                          create strategies to provide your business with a
                          competitive edge in the digital platform.
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
                        How can I measure the success of my digital marketing
                        campaigns?
                      </h3>
                      <div
                        className="accordion__content"
                        style={{ display: "none" }}
                      >
                        <p>
                          We use various analytical and performance measurement
                          tools to measure the success of digital marketing
                          campaigns. These insights help us to analyze the
                          effectiveness of digital marketing campaigns.
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
                        Can you assist with improving our website's search
                        engine ranking through SEO?
                      </h3>
                      <div
                        className="accordion__content"
                        style={{ display: "none" }}
                      >
                        <p>
                          Yes, we can. Our digital marketing service includes
                          SEO services as well. We employ the best practices to
                          optimize your website for search engines. Furthermore,
                          we focus on both on-page and off-page SEO factors to
                          enhance your online visibility and rankings.
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
  );
};

export default page;
