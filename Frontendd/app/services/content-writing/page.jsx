import React from "react";

const page = () => {
  return (
    <div>
      <div style={{ minHeight: "50vh" }}>
        <div className="site-main">
          <section className="service__banner-">
            <div className="l__container overflow">
              <div className="service__banner--content">
                <div className="row flex-column-reverse flex-md-row">
                  <div className="col-lg-7 col-md-6">
                    <div className="left">
                      <div className="badge" />
                      <div className="section__title  clearfix">
                        <h1 className="title">
                          Delivering your message with compelling content
                        </h1>
                      </div>
                      <div className="title-desc">
                        <p>
                          Enhance Engagement through Compelling Narratives,
                          Impeccable Quality, and Tailored Content Solutions. At
                          Blue Fox, we offer top-notch content writing services
                          to bring your ideas to life! Elevate your brand's
                          story with our expertise in crafting captivating and
                          impactful content.
                        </p>
                        <button
                          data-bs-toggle="modal"
                          data-bs-target="#enquiryModal"
                          data-id="cd84a968-0906-4a1f-82ba-3ffa330bb2ae"
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
                        src="/Blog_post-bro.svg"
                        className=""
                        alt="content-writing"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* why us */}
          <section
            className="choose choose-two overflow p__tb"
            style={{ backgroundColor: "transparent" }}
          >
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
                <h6>Content Writing for your Needs</h6>
                <h2 className="title">
                  Content Writing <span>strategy &amp; research</span>
                </h2>
              </div>
              <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3">
                <div className="col">
                  <div className="choose__card text-center">
                    <div className="choose__card--shape">
                      <img
                        className="lazy-load"
                        data-src="-shape.svg"
                        alt=""
                        src="-shape.svg"
                      />
                    </div>
                    <div className="choose__card--img choose__card--img-two">
                      <img
                        className="lazy-load"
                        data-src="/Business_deal-pana.svg"
                        alt="Customer Centric Approach"
                        src="/Business_deal-pana.svg"
                      />
                    </div>
                    <div className="choose__card--content choose__card--content-two">
                      <h3>Customer Centric Approach</h3>
                      <p>
                        Putting your audience first with a personalized touch to
                        meet their needs and expectations
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="choose__card text-center">
                    <div className="choose__card--shape">
                      <img
                        className="lazy-load"
                        data-src="-shape.svg"
                        alt=""
                        src="-shape.svg"
                      />
                    </div>
                    <div className="choose__card--img choose__card--img-two">
                      <img
                        className="lazy-load"
                        data-src="/Mobile_Marketing-pana.svg"
                        alt="Keyword Research and SEO Integration Concept."
                        src="/Mobile_Marketing-pana.svg"
                      />
                    </div>
                    <div className="choose__card--content choose__card--content-two">
                      <h3>Keyword Research and SEO Integration</h3>
                      <p>
                        Strategically optimizing content to rank higher and
                        reach your audience through targeted keywords
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="choose__card text-center">
                    <div className="choose__card--shape">
                      <img
                        className="lazy-load"
                        data-src="-shape.svg"
                        alt=""
                        src="-shape.svg"
                      />
                    </div>
                    <div className="choose__card--img choose__card--img-two">
                      <img
                        className="lazy-load"
                        data-src="/Website_Creator-pana.svg"
                        alt="Interactive and Shareable Content Concept."
                        src="/Website_Creator-pana.svg"
                      />
                    </div>
                    <div className="choose__card--content choose__card--content-two">
                      <h3>Interactive and Shareable Content</h3>
                      <p>
                        Engaging content that resonates, sparks interaction, and
                        encourages easy sharing across platforms
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* goal */}
          <section className="goal p__tb">
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
                <h6>Get Started</h6>
                <h2>Goals Of Content Writing</h2>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-5 d-none d-md-block">
                  <div className="goal__img">
                    <img
                      className="lazy-load"
                      data-src="/Blog_post-bro.svg"
                      alt=""
                      src="/Blog_post-bro.svg"
                    />
                  </div>
                </div>
                <div className="col-lg-6  col-md-7">
                  <ul className="goal__list">
                    <li>
                      <div className="goal__list--card">
                        <div className="goal__list--card-img">
                          <img
                            className="lazy-load"
                            data-src="/engagement.png"
                            alt="Audience Engagement Concept."
                            src="/engagement.png"
                          />
                        </div>
                        <div className="goal__list--card-content">
                          <h3>Audience Engagement</h3>
                          <p>
                            The primary goal of website content writing services
                            is to generate compelling and relevant content to
                            capture the attention of the reader and encourage
                            their interaction. The reason for this is that
                            engaged audiences are more likely to stay on the
                            website and convert into customers or followers.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="goal__list--card">
                        <div className="goal__list--card-img">
                          <img
                            className="lazy-load"
                            data-src="/file_eeQx1Nx.png"
                            alt="Provide Valuable Information Concept."
                            src="/file_eeQx1Nx.png"
                          />
                        </div>
                        <div className="goal__list--card-content">
                          <h3>Provide Valuable Information</h3>
                          <p>
                            Another primary goal of website content writing
                            services is to provide valuable information clearly
                            and concisely. Regardless of whether the content is
                            about education, other information, or promotion,
                            the goal here is to provide value to the audience.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="goal__list--card">
                        <div className="goal__list--card-img">
                          <img
                            className="lazy-load"
                            data-src="/seo.png"
                            alt="Search Engine Optimization (SEO) and Visibility Concept."
                            src="/seo.png"
                          />
                        </div>
                        <div className="goal__list--card-content">
                          <h3>
                            Search Engine Optimization (SEO) and Visibility
                          </h3>
                          <p>
                            Content writing is an integral aspect to enhance the
                            visibility of search engines. By using relevant
                            keywords and creating high-quality content, the
                            writer can boost the SEO viability of the website
                            and increase its ranking on the search engine result
                            pages.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* service */}
          <section className="service__content overflow p__tb">
            <div
              className="l__container wow fadeInUp"
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
              <div className="section__title text-center">
                <h6>Services</h6>
                <h2>
                  Content Writing <span>Services</span>
                </h2>
              </div>
              <div className="row g-4">
                <div className="col-md-6">
                  <div
                    className="service__content--card wow fadeInUp"
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
                    <h3>SEO Content Writing</h3>
                    <p>
                      In SEO content writing, we provide specialized content
                      designed to engage and provide value to your customers
                      while implementing targeted keywords. This type of content
                      is designed to improve the visibility of your website in
                      the Search Engine Result Pages and attract organic traffic
                      to your website. In SEO content writing, we strategically
                      place keywords while providing quality content and
                      optimizing the metadata. Furthermore, we also factor in
                      mobile friendliness, and internal linking to boost the
                      overall SEO performance.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="service__content--card wow fadeInUp"
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
                    <h3>Technical Content Writing</h3>
                    <p>
                      Our technical content writing service is all about
                      providing you with precise, clear, and technical documents
                      as per the needs of your company. This includes content
                      such as product documentation, technical blog posts,
                      troubleshooting guides, and FAQs, along with the terms and
                      conditions of your company. The goal here is to convey
                      related information precisely to your customers and
                      audiences. Some of the key features in our technical
                      writing include industry terminology, the creation of
                      documents, and adherence to industry standards.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="service__content--card wow fadeInUp"
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
                    <h3>Blog Writing</h3>
                    <p>
                      In this content writing service, we provide content for
                      the blog section of your website. The content in this
                      section is generally written in an informal tone.
                      Furthermore, the goal of blog writing is to provide
                      information regarding the topics associated with your
                      services. Along with this, another goal of blog writing is
                      to provide promotional materials for your products and
                      services. Some of the key aspects of Blog writing include
                      information, tone, Search Engine Optimization, and
                      modifiability.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="service__content--card wow fadeInUp"
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
                    <h3>Content Rewriting</h3>
                    <p>
                      While writing new content is important, revising existing
                      content and re-writing it as per the updated content
                      standard is equally important. Therefore, with our content
                      rewriting services, we revise your existing content while
                      maintaining its original meaning and intent. Furthermore,
                      we also ensure that your revised content is free from
                      plagiarism and has improved readability. Along with this,
                      we also ensure that the re-written content is optimized
                      for SEO performance and has updated information.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="service__content--card wow fadeInUp"
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
                    <h3>Social Media Content Writing</h3>
                    <p>
                      Content writing isn't just for websites; it also involves
                      creating engaging content for social media platforms. Our
                      service excels at providing tailored social media content
                      designed to inform, entertain, and convert your audience
                      into leads. We create captivating captions, engaging
                      Facebook posts, targeted copywriting, compelling
                      descriptions, and professional messaging. If you need text
                      that impresses and connects with your audience, trust us
                      to fulfill all your social media content needs
                      effectively.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="service__content--card wow fadeInUp"
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
                    <h3>Company Profile Writing</h3>
                    <p>
                      This form of content writing offers a comprehensive
                      overview of your organization, providing key details like
                      mission, vision, goals, values, services, and history. At
                      Blue Fox, we craft clear, concise content to showcase your
                      company's essential information to customers. Designed to
                      introduce your business effectively, our content serves as
                      an invaluable tool for engaging clients, partners, and
                      investors. Our company profile writing includes
                      introductions, overviews, mission/vision statements,
                      services, achievements, and company structure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* choose us */}
          <section className="choose p__tb">
            <div className="l__container overflow">
              <div className="ttm-row">
                <div className="row">
                  <div
                    className="col-lg-8 col-md-12 wow fadeInUp"
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
                    <div className="section__title clearfix">
                      <h6>Why choose us</h6>
                      <h2 className="title">
                        We help you expand <span>your business</span> through
                        tech
                      </h2>
                    </div>
                    <div className="title-desc">
                      <p>
                        Blue Fox has a team of highly skilled content and
                        copywriters to provide you with the content of your
                        choice. Therefore, we are the right choice for all your
                        content needs. Along with our exceptional and responsive
                        content writing services, some of our additional perks
                        are as follows
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 p-2 p-md-3">
                    <div
                      className="choose__card text-center wow fadeInUp"
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
                      <div className="choose__card--shape">
                        <img src="-shape.svg" alt="" />
                      </div>
                      <div className="choose__card--img">
                        <img
                          className="lazy-load"
                          data-src="/Programmer-amico.svg"
                          alt="Client Centric Approach Concept."
                          src="/Programmer-amico.svg"
                        />
                      </div>
                      <div className="choose__card--content">
                        <h3>Client Centric Approach</h3>
                        <p>
                          We create tailored content that resonates with your
                          audience, driving engagement and ensuring effective
                          communication.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 p-2 p-md-3">
                    <div
                      className="choose__card text-center wow fadeInUp"
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
                      <div className="choose__card--shape">
                        <img src="-shape.svg" alt="" />
                      </div>
                      <div className="choose__card--img">
                        <img
                          className="lazy-load"
                          data-src="/UI_UX.svg"
                          alt="Content Writing Versatility Concept."
                          src="/UI_UX.svg"
                        />
                      </div>
                      <div className="choose__card--content">
                        <h3>Versatility</h3>
                        <p>
                          Our experts excel in various content forms, from blogs
                          and website content to social media and technical
                          writing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 p-2 p-md-3">
                    <div
                      className="choose__card text-center wow fadeInUp"
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
                      <div className="choose__card--shape">
                        <img src="-shape.svg" alt="" />
                      </div>
                      <div className="choose__card--img">
                        <img
                          className="lazy-load"
                          data-src="/SEO_analytics_team-amico.svg"
                          alt="Consistent Quality Concept."
                          src="/SEO_analytics_team-amico.svg"
                        />
                      </div>
                      <div className="choose__card--content">
                        <h3>Consistent Quality</h3>
                        <p>
                          Our experts perform keyword research and optimize
                          content with top SEO practices to boost your
                          platform's visibility.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 p-2 p-md-3">
                    <div
                      className="choose__card text-center wow fadeInUp"
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
                      <div className="choose__card--shape">
                        <img src="-shape.svg" alt="" />
                      </div>
                      <div className="choose__card--img">
                        <img
                          className="lazy-load"
                          data-src="/Website_Creator-pana.svg"
                          alt="Strategic SEO integration Concept."
                          src="/Website_Creator-pana.svg"
                        />
                      </div>
                      <div className="choose__card--content">
                        <h3>Strategic SEO integration</h3>
                        <p>
                          We ensure that we maintain high standards consistently
                          without compromising the deadlines.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* roadmap */}
          <section className="roadmap p__tb overflow">
            <div
              className="l__container wow fadeInUp"
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
              <div className="section__title">
                <h2>Roadmap</h2>
              </div>
              <div className="row p-2">
                <div className="col-xl-3 col-lg-4 col-md-4 d-none d-md-block">
                  <div
                    className="roadmap__box--img wow zoomIn"
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
                    <div className="roadmap__box--img-circular">
                      <div className="circular">
                        <img
                          className="lazy-load"
                          data-src="/circular.png"
                          alt=""
                          src="/circular.png"
                        />
                        <div className="number">
                          <span className="text">01</span>
                          <span className="text">02</span>
                          <span className="text">03</span>
                          <span className="text">04</span>
                        </div>
                      </div>
                      <div className="box">
                        <div className="block">
                          <div className="img">
                            <span className="icon">
                              <img
                                className="lazy-load"
                                data-src="/define.svg"
                                alt="Identification Concept."
                                src="/define.svg"
                              />
                            </span>
                            <img
                              className="lazy-load"
                              data-src="/block-1.png"
                              alt="Identification Concept."
                              src="/block-1.png"
                            />
                          </div>
                          <div className="img">
                            <span className="icon">
                              <img
                                className="lazy-load"
                                data-src="/business.svg"
                                alt="Determining Concept."
                                src="/business.svg"
                              />
                            </span>
                            <img
                              className="lazy-load"
                              data-src="/block-2.png"
                              alt="Determining Concept."
                              src="/block-2.png"
                            />
                          </div>
                          <div className="img">
                            <span className="icon">
                              <img
                                className="lazy-load"
                                data-src="/research-and-development.svg"
                                alt="Research Concept."
                                src="/research-and-development.svg"
                              />
                            </span>
                            <img
                              className="lazy-load"
                              data-src="/block-3.png"
                              alt="Research Concept."
                              src="/block-3.png"
                            />
                          </div>
                          <div className="img">
                            <span className="icon">
                              <img
                                className="lazy-load"
                                data-src="/target.svg"
                                alt="Define Concept."
                                src="/target.svg"
                              />
                            </span>
                            <img
                              className="lazy-load"
                              data-src="/block-4.png"
                              alt="Define Concept."
                              src="/block-4.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-8 col-md-8">
                  <div
                    className="roadmap__box wow fadeInUp"
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
                    <div className="roadmap__box--content">
                      <div className="content">
                        <h3 className="title">
                          <span>1.</span>Identification
                        </h3>
                        <p className="text">
                          We define content objectives and identify your target
                          audience to align our content with your goals
                        </p>
                      </div>
                      <div className="content">
                        <h3 className="title">
                          <span>2.</span>Determining
                        </h3>
                        <p className="text">
                          We select relevant, engaging topics that resonate with
                          your customers and meet your goals
                        </p>
                      </div>
                      <div className="content">
                        <h3 className="title">
                          <span>3.</span>Research
                        </h3>
                        <p className="text">
                          We conduct thorough research to identify key keywords
                          and gather information on chosen topics
                        </p>
                      </div>
                      <div className="content">
                        <h3 className="title">
                          <span>4.</span>Define
                        </h3>
                        <p className="text">
                          We determine content structure and formatting to
                          effectively inform and engage your audience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-8 col-md-8">
                  <div
                    className="roadmap__box wow fadeInUp"
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
                    <div className="roadmap__box--content">
                      <div className="content">
                        <h3 className="title">
                          <span>5.</span>Write
                        </h3>
                        <p className="text">
                          After defining the content format, we write and refine
                          it through multiple editing phases
                        </p>
                      </div>
                      <div className="content">
                        <h3 className="title">
                          <span>6.</span>SEO Compatibility
                        </h3>
                        <p className="text">
                          We optimize the content for search engines, ensuring
                          adherence to best SEO practices
                        </p>
                      </div>
                      <div className="content">
                        <h3 className="title">
                          <span>7.</span>Image and Links
                        </h3>
                        <p className="text">
                          We enhance content engagement by strategically placing
                          relevant images and complementary links
                        </p>
                      </div>
                      <div className="content">
                        <h3 className="title">
                          <span>8.</span>Upload
                        </h3>
                        <p className="text">
                          We upload and regularly update finalized content on
                          relevant platforms as needed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-4 d-none d-md-block">
                  <div
                    className="roadmap__box--img right wow zoomIn"
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
                    <div className="roadmap__box--img-circular">
                      <div className="circular">
                        <img
                          className="lazy-load"
                          data-src="/circular-1.png"
                          alt=""
                          src="/circular-1.png"
                        />
                        <div className="number">
                          <span className="text">05</span>
                          <span className="text">06</span>
                          <span className="text">07</span>
                          <span className="text">08</span>
                        </div>
                      </div>
                      <div className="box">
                        <div className="block">
                          <div className="img">
                            <span className="icon">
                              <img
                                className="lazy-load"
                                data-src="/writing-development.svg"
                                alt="Write Concept."
                                src="/writing-development.svg"
                              />
                            </span>
                            <img
                              className="lazy-load"
                              data-src="/block-5.png"
                              alt="Write Concept."
                              src="/block-5.png"
                            />
                          </div>
                          <div className="img">
                            <span className="icon">
                              <img
                                className="lazy-load"
                                data-src="/puzzle.svg"
                                alt="SEO Compatibility Concept."
                                src="/puzzle.svg"
                              />
                            </span>
                            <img
                              className="lazy-load"
                              data-src="/block-6.png"
                              alt="SEO Compatibility Concept."
                              src="/block-6.png"
                            />
                          </div>
                          <div className="img">
                            <span className="icon">
                              <img
                                className="lazy-load"
                                data-src="/landscape.svg"
                                alt="Image and Links Concept."
                                src="/landscape.svg"
                              />
                            </span>
                            <img
                              className="lazy-load"
                              data-src="/block-7.png"
                              alt="Image and Links Concept."
                              src="/block-7.png"
                            />
                          </div>
                          <div className="img">
                            <span className="icon">
                              <img
                                className="lazy-load"
                                data-src="/upload.svg"
                                alt="Upload Concept."
                                src="/upload.svg"
                              />
                            </span>
                            <img
                              className="lazy-load"
                              data-src="/block-8.png"
                              alt="Upload Concept."
                              src="/block-8.png"
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
          {/* faq */}
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
                            Why is content writing important for business?
                          </h3>
                          <div
                            className="accordion__content"
                            style={{ display: "none" }}
                          >
                            <p>
                              Content writing is important for business because
                              it helps a business to express its brand messages,
                              engage audiences, and improve online visibility.
                              All of these lead to higher customer engagement
                              and customer retention.
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
                            What is the significance of a consistent tone in
                            content writing?
                          </h3>
                          <div
                            className="accordion__content"
                            style={{ display: "none" }}
                          >
                            <p>
                              A consistent tone in content writing helps
                              establish and reinforce a brand's identity. It
                              ensures a consistent and recognizable voice across
                              various platforms, building trust with the
                              audience and enhancing brand recognition.
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
                            How does SEO impact content writing?
                          </h3>
                          <div
                            className="accordion__content"
                            style={{ display: "none" }}
                          >
                            <p>
                              Search Engine Optimization, or SEO, impacts
                              content writing in several different ways. By
                              incorporating relevant keywords and following the
                              SEO guidelines, a content writer can enhance the
                              overall ranking of a website and boost its organic
                              traffic.
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
                            What is the importance of proofreading in content
                            writing?
                          </h3>
                          <div
                            className="accordion__content"
                            style={{ display: "none" }}
                          >
                            <p>
                              Proofreading is crucial in content writing to
                              ensure accuracy, clarity, and professionalism.
                              Errors can diminish the credibility of the content
                              and the brand. By thoroughly proofreading, writers
                              can catch grammatical mistakes, typos, and
                              inconsistencies, delivering polished and
                              error-free content.
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
                            How frequently should I update my content?
                          </h3>
                          <div
                            className="accordion__content"
                            style={{ display: "none" }}
                          >
                            <p>
                              The specific frequency for updating your content
                              varies depending on several factors. These include
                              factors such as industry trends, business changes,
                              and content nature. Regardless, generally, the
                              optimum time for updating is weekly, bi-weekly, or
                              monthly.
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
                            What makes high-quality content?
                          </h3>
                          <div
                            className="accordion__content"
                            style={{ display: "none" }}
                          >
                            <p>
                              A high quality content is a type of content that
                              is informative, well-researched, and customized
                              for your target audience. Furthermore,
                              high-quality content is free from errors and
                              aligns with the voice and objective of your brand.
                              Additionally, it also aligns with the best SEO
                              practices as well.
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
                            How important is SEO in content writing?
                          </h3>
                          <div
                            className="accordion__content"
                            style={{ display: "none" }}
                          >
                            <p>
                              SEO is extremely important in content writing as
                              integrating the best practices in content writing
                              helps a content gain more visibility. Furthermore,
                              by integrating SEO into content writing, we can
                              enhance the website ranking in the search engine
                              result pages.
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
      </div>
    </div>
  );
};

export default page;
