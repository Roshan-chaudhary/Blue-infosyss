import React from "react";

const page = () => {
  const teamMembers = [
    {
      name: "Bipin Chapagain",
      designation: "CEO",
      imageUrl: "/ceo.jpeg",
    },
    {
      name: "Sandesh Paudel",
      designation: "CTO",
      imageUrl: "/cto.jpeg",
    },
    {
      name: "Binaya Marahatha",
      designation: "Full Stack & Flutter Developer",
      imageUrl: "/full-flutter.jpeg",
    },
    {
      name: "Abdullah Al Mridul",
      designation: "Full Stack Developer (Bangladesh)",
      imageUrl: "/abdullah.png",
    },
    {
      name: "Rohan Karki",
      designation: "Frontend Developer",
      imageUrl: "/frontend-dev.jpeg",
    },
    {
      name: "Bharat Chaudhary",
      designation: "Frontend Developer",
      imageUrl: "/frontend-dev2.jpeg",
    },
    {
      name: "Bijay Giri",
      designation: "Flutter Developer",
      imageUrl: "/flutter.jpeg",
    },
    {
      name: "Bipesh Karki",
      designation: "React Native",
      imageUrl: "/react-native.jpeg",
    },
    {
      name: "Manish Karki",
      designation: "Admin Officer",
      imageUrl: "/manish-karki.jpeg",
    },
    {
      name: "Anjana Chaudhary",
      designation: "Accountant",
      imageUrl: "/accountent.jpeg",
    },
  ];
  return (
    <div>
      <div style={{ minHeight: "50vh" }}>
        <section className="about m__tb--b">
          <div className="l__container">
            <div className="about__banner overflow">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-7">
                  <div className="left">
                    <div className="section__title  m__tb--b">
                      <h6>LET'S MEET</h6>
                      <h1 className="title">
                        Our awesome <span>team of talented</span> people
                      </h1>
                    </div>
                    <div className="content">
                      We have highly experienced professionals who are looking
                      forward to turn your business problem into future
                      possibilities through digital transformation. Our team
                      comprises of qualified, skilled and tactful individuals
                      who are passionate to provide quality output for clients.
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-5">
                  <div className="right">
                    <img
                      src="/Consulting-rafiki.svg"
                      className="img-fluid"
                      alt="Team"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team p__tb--b overflow">
          <div className="container">
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-5 gx-4">
              {teamMembers.map((teamMember, idx) => (
                <div key={idx} className="col">
                  <div
                    className="team__card wow fadeInUp animated"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDuration: "1s",
                      MozAnimationDuration: "1s",
                      animationDuration: "1s",
                    }}
                  >
                    <div className="team__card--img">
                      <img
                        className="lazy-load grayscale hover:grayscale-0 transition-all"
                        alt="None"
                        src={teamMember.imageUrl}
                      />
                    </div>
                    <div className="team__card--wrapper">
                      <div className="team__card--wrapper-content">
                        <h3 className="name text-white">{teamMember.name}</h3>
                        <span className="designation text-black">
                          {teamMember.designation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
