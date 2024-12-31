import React from "react";

const page = () => {
  return (
    <div>
      <div style={{ minHeight: "50vh" }}>
        <section className="banner">
          <div className="l__container">
            <div className="banner__career overflow">
              <div className="row flex-column-reverse flex-md-row">
                <div className="col-md-6">
                  <div className="banner__career--content">
                    <div className="section__title">
                      <h6>CAREER</h6>
                      <h1>
                        Join our dynamic team dedicated to{" "}
                        <span>innovation and excellence.</span>
                      </h1>
                    </div>
                    <p>
                      Blue Fox is here to provide you a learning platform not
                      only on technical aspects but also on emotional and social
                      arenas. We invite you to be a part of our amazing success
                      story through exciting growth opportunities. Our company
                      can proudly say that we as employers feel employees as
                      valuable assets, who are provided guidance and support in
                      a dynamic environment.
                    </p>
                    <div className="step">
                      <div className="row row-cols-1 row-cols-sm-3 g-4 img-blue">
                        <div className="col">
                          <div className="step__card">
                            <div className="icon">
                              <img src="/icons8-office-100.png" alt="None" />
                            </div>
                            <h2>Flexible Work Culture</h2>
                          </div>
                        </div>
                        <div className="col">
                          <div
                            className="step__card"
                            data-aos="fade-up"
                            data-aos-duration={800}
                            data-aos-delay={200}
                          >
                            <div className="icon">
                              <img src="/icons8-handshake-96.png" alt="None" />
                            </div>
                            <h2>Awesome work environment</h2>
                          </div>
                        </div>
                        <div className="col">
                          <div
                            className="step__card"
                            data-aos="fade-up"
                            data-aos-duration={800}
                            data-aos-delay={100}
                          >
                            <div className="icon">
                              <img src="/icons8-weekend-100.png" alt="None" />
                            </div>
                            <h2>2 Days Weekend</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="banner__career--img ">
                    <img src="/Our_Culture-07.svg" alt="None" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="career p__tb wow fadeInUp animated"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            WebkitAnimationDuration: "1s",
            MozAnimationDuration: "1s",
            animationDuration: "1s",
          }}
        >
          <div className="l__container overflow">
            <div className="section__title text-center">
              <h6>open roles</h6>
              <h2>career opportunities</h2>
            </div>
            <div className="row g-4">
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="career__card">
                  <div className="tags">
                    <span> Internship </span>
                  </div>
                  <h3>UX/UI Design</h3>
                  <div className="date">
                    <span>
                      <i className="fa-regular fa-calendar-days" />
                    </span>
                    Post Date: 2024/12/19
                  </div>
                  <p>
                    Join our team as a UX/UI Designer and craft intuitive and
                    visually stunning designs for web and mobile applications.
                    Collaborate with cross-functional teams to understand user
                    needs and translate them into engaging experiences. If
                    you're passionate about user-centered design and have a
                    knack for creativity, we'd love to see your portfolio!
                  </p>
                  <button
                    className="l__button l__button--border"
                    data-bs-target="#enquiryModal"
                    data-bs-toggle="modal"
                    data-id
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="career__card">
                  <div className="tags">
                    <span> Internship </span>
                  </div>
                  <h3>React Developer</h3>
                  <div className="date">
                    <span>
                      <i className="fa-regular fa-calendar-days" />
                    </span>
                    Post Date: 2024/12/19
                  </div>
                  <p>
                    Join our team as a React Developer to build dynamic and
                    responsive web applications. Collaborate with designers and
                    backend engineers to create seamless user experiences. If
                    you have expertise in React.js, JavaScript, and a passion
                    for innovative web solutions, we'd love to have you onboard.
                  </p>
                  <button
                    className="l__button l__button--border"
                    data-bs-target="#enquiryModal"
                    data-bs-toggle="modal"
                    data-id
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="career__card">
                  <div className="tags">
                    <span> Internship </span>
                  </div>
                  <h3>Node/Next.js Developer</h3>
                  <div className="date">
                    <span>
                      <i className="fa-regular fa-calendar-days" />
                    </span>
                    Post Date: 2024/12/19
                  </div>
                  <p>
                    Be part of our team as a Node/Next.js Developer and work on
                    backend and server-side rendered applications. Help us
                    develop scalable and efficient solutions, ensuring top-notch
                    performance and security. If you have experience in Node.js,
                    Next.js, and API integration, this role is perfect for you!
                  </p>
                  <button
                    className="l__button l__button--border"
                    data-bs-target="#enquiryModal"
                    data-bs-toggle="modal"
                    data-id
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="career__card">
                  <div className="tags">
                    <span> Internship </span>
                  </div>
                  <h3>Flutter Developer</h3>
                  <div className="date">
                    <span>
                      <i className="fa-regular fa-calendar-days" />
                    </span>
                    Post Date: 2024/12/19
                  </div>
                  <p>
                    Join us as a Flutter Developer and design cross-platform
                    mobile applications with superior performance and intuitive
                    UI/UX. Work with our team to bring innovative app ideas to
                    life. If you love Flutter and Dart, and want to shape the
                    future of mobile app development, apply now!
                  </p>
                  <button
                    className="l__button l__button--border"
                    data-bs-target="#enquiryModal"
                    data-bs-toggle="modal"
                    data-id
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="career__card">
                  <div className="tags">
                    <span> Internship </span>
                  </div>
                  <h3>React Native Developer</h3>
                  <div className="date">
                    <span>
                      <i className="fa-regular fa-calendar-days" />
                    </span>
                    Post Date: 2024/12/19
                  </div>
                  <p>
                    Become a React Native Developer on our team and help create
                    high-quality mobile applications. Focus on delivering smooth
                    and engaging user experiences for both iOS and Android
                    platforms. If you're skilled in React Native and have a
                    passion for mobile technology, join us to make an impact!
                  </p>
                  <button
                    className="l__button l__button--border"
                    data-bs-target="#enquiryModal"
                    data-bs-toggle="modal"
                    data-id
                  >
                    Apply Now
                  </button>
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
