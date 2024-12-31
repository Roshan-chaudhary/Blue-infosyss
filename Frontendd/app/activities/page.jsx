import React from "react";

const page = () => {
  const activities = [
    { name: "Blue Fox Anniversary", image: "/blue-fox-ann.jpeg" },
    { name: "IIC Quest 2024", image: "/iic-quest1.jpeg" },
    { name: "IIC Quest 2024", image: "/iic-q.jpeg" },
    { name: "Aces Tech Fest 7.0", image: "/aces-open.jpeg" },
    { name: "Sushma Godawari College UX/UI Workshop", image: "/ui-ux.jpeg" },
    { name: "Aces Intern Fest 7.0", image: "/aces-intern.jpeg" },
    { name: "Aces Tech Fest 7.0 Closing", image: "/tech-fest-close.jpeg" },
    { name: "Aces Tech Fest 7.0", image: "/aces-tech.jpeg" },
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
                    <div
                      className="section__title  m__tb--b"
                      data-aos="fade-down"
                      data-aos-duration={1200}
                    >
                      <h6>OUR CULTURE</h6>
                      <h1 className="title">
                        Building a <span>Culture Worth</span> Joining
                      </h1>
                    </div>
                    <div className="content">
                      <p>
                        "Let's Create Happiness Together" embodies the spirit of
                        collaboration and positivity, serving as a rallying cry
                        for a diverse range of initiatives. Whether in a
                        business context, community program, or personal
                        relationship, this phrase invites everyone to contribute
                        to a collective sense of joy and fulfillment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-5">
                  <div className="right">
                    <img
                      src="/Revenue-pana.svg"
                      className="img-fluid"
                      alt="None"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="activities__list p__tb--b">
          <div className="l__container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
              {activities.map((activity) => (
                <div className="col">
                  <div
                    className="activity__card wow fadeInUp animated"
                    data-wow-duration="1s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDuration: "1s",
                      MozAnimationDuration: "1s",
                      animationDuration: "1s",
                    }}
                  >
                    <a onclick="showFancyBox(`/api/147a06c3-b02c-47ad-a58b-6ff0acc0d540/activity-images/`, 'Birthday at Blue Fox')">
                      <div className="activity__card--img">
                        <img
                          className="lazy-load"
                          alt="Birthday Celebration"
                          src={activity.image}
                        />
                      </div>
                      <div className="activity__card--content">
                        <h3 className="title">{activity.name}</h3>
                      </div>
                    </a>
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
