import Pricing_form_social from "@/components/Pricing_form_social";
import React from "react";

const page = () => {
  return (
    <div>
      <div style={{ minHeight: "50vh" }}>
        <section className="overflow">
          <div className="l__container">
            <section
              className="section-packages seo-packages m__tb--b"
              style={{ backgroundSize: "contain" }}
            >
              <div className="section__title text-center p__tb--b ">
                <h6>Subscription Plan</h6>
                <h1 className="title">Social Media Packages</h1>
              </div>
              <div className="package smm">
                <div className="row g-3">
                  <div className="col-lg-3 col-md-6">
                    <div className="package__price">
                      <div className="package__price--head">
                        <h2 className="title">Starter</h2>
                        <h3 className="price">
                          <sup>Rs</sup>
                          <span>15,000/ </span>
                          <small>mon</small>
                        </h3>
                        <p className="text">
                          For marketing newbies and small house teams
                        </p>
                      </div>
                      <div className="package__price--body">
                        <div className="content">
                          <ul>
                            <li>Platform( Facebook, Instagram)</li>
                            <li>Copywriting</li>
                            <li>Post Scheduling</li>
                            <li>5 Graphical banners</li>
                            <li>1 free festive post</li>
                          </ul>
                        </div>
                      </div>
                      <div className="package__price--footer">
                        <div className="text-center">
                          <button
                            className="l__button l__button--primary"
                            data-bs-toggle="modal"
                            data-bs-target="#seoSubscription"
                            data-name="Starter"
                          >
                            Select Plan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="package__price">
                      <div className="package__price--head">
                        <h2 className="title">Basic</h2>
                        <h3 className="price">
                          <sup>Rs</sup>
                          <span>28,000/ </span>
                          <small>mon</small>
                        </h3>
                        <p className="text">
                          For new but established companies seeking to grow
                        </p>
                      </div>
                      <div className="package__price--body">
                        <div className="content">
                          <ul>
                            <li>Platform( Facebook, Instagram)</li>
                            <li>Page Setup and Optimization</li>
                            <li>Planning and Strategy</li>
                            <li>Profile/Cover image creation</li>
                            <li>Monthly Content Calendar</li>
                            <li>10 graphical banners</li>
                            <li>2 GIF/Reels</li>
                            <li>1 Free Festive Post</li>
                            <li>Ad budget $20 (included)</li>
                            <li>Scheduling the post</li>
                            <li>Monitor and Analysis</li>
                            <li>Monthly Performance Report</li>
                            <li>Ads Management</li>
                          </ul>
                        </div>
                      </div>
                      <div className="package__price--footer">
                        <div className="text-center">
                          <button
                            className="l__button l__button--primary"
                            data-bs-toggle="modal"
                            data-bs-target="#seoSubscription"
                            data-name="Basic"
                          >
                            Select Plan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                    <div className="package__price package__price--radius mt-5 mt-md-0">
                      <div className="best-value">
                        <span className="ms-2">
                          <img src="/star.svg" alt="star" />
                        </span>
                        <p>best value</p>
                        <span className="ms-2">
                          <img src="/star.svg" alt="star" />
                        </span>
                      </div>
                      <div className="package__price--head">
                        <h2 className="title">Standard</h2>
                        <h3 className="price">
                          <sup>Rs</sup>
                          <span>38,000/ </span>
                          <small>mon</small>
                        </h3>
                        <p className="text">
                          For those looking to grow their business/brand
                        </p>
                      </div>
                      <div className="package__price--body">
                        <div className="content">
                          <ul className="expandible">
                            <li>
                              Platform( Facebook, Instagram, as per your need)
                            </li>
                            <li>Page Setup and Optimization</li>
                            <li>Competitor Analysis</li>
                            <li>Planning and Strategy</li>
                            <li>Profile/Cover image creation</li>
                            <li>Keyword-based content</li>
                            <li>Monthly Content Calendar</li>
                            <li>15 graphical banners</li>
                            <li>4 GIF/Reels</li>
                            <li>Voice-over for Reels</li>
                            <li>2 Free Festive Post</li>
                            <li>Ad budget $30 (included)</li>
                            <li style={{ display: "none" }}>
                              Scheduling the post
                            </li>
                            <li style={{ display: "none" }}>
                              Monitor and Analysis
                            </li>
                            <li style={{ display: "none" }}>
                              Monthly Performance Report
                            </li>
                            <li style={{ display: "none" }}>Ads Management</li>
                            <span className="showmore">See More</span>
                          </ul>
                        </div>
                      </div>
                      <div className="package__price--footer">
                        <div className="text-center">
                          <button
                            className="l__button l__button--primary"
                            data-bs-toggle="modal"
                            data-bs-target="#seoSubscription"
                            data-name="Standard"
                          >
                            Select Plan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mt-4">
                    <div className="package__price">
                      <div className="package__price--head">
                        <h2 className="title">Premium</h2>
                        <h3 className="price">
                          <sup>Rs</sup>
                          <span>55,000/ </span>
                          <small>mon</small>
                        </h3>
                        <p className="text">
                          For those looking to grow their business/brand
                        </p>
                      </div>
                      <div className="package__price--body">
                        <div className="content">
                          <ul className="expandible">
                            <li>
                              Platform( Facebook, Instagram, Linkedin, as per
                              your need)
                            </li>
                            <li>Page Setup and Optimization</li>
                            <li>Competitor Analysis</li>
                            <li>Planning and Strategy</li>
                            <li>Profile/Cover image creation</li>
                            <li>Keyword-based content</li>
                            <li>Monthly Content Calendar</li>
                            <li>20 graphical banners</li>
                            <li>6 GIF/Reels</li>
                            <li>Voice-over for Reels</li>
                            <li>3 Free Festive Post</li>
                            <li>Ad budget $50 (included)</li>
                            <li style={{ display: "none" }}>
                              Scheduling the post
                            </li>
                            <li style={{ display: "none" }}>
                              Monitoring and Analysis
                            </li>
                            <li style={{ display: "none" }}>
                              Monthly Performance Report
                            </li>
                            <li style={{ display: "none" }}>A/B Testing</li>
                            <li style={{ display: "none" }}>
                              Pixel for Remarketing
                            </li>
                            <li style={{ display: "none" }}>Ads Management</li>
                            <span className="showmore">See More</span>
                          </ul>
                        </div>
                      </div>
                      <div className="package__price--footer">
                        <div className="text-center">
                          <button
                            className="l__button l__button--primary"
                            data-bs-toggle="modal"
                            data-bs-target="#seoSubscription"
                            data-name="Premium"
                          >
                            Select Plan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="note mt-4">
                  <p className="">
                    <strong>*Note :</strong> All of the above packages are
                    exclusive of VAT.
                    <br />
                    Contract: Minimum 3 months.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="package__form p__tb">
          <div className="l__container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section__title text-center">
                  <h6>Request for a quotation</h6>
                  <h2>
                    Create Your <span>Custom Package</span>
                  </h2>
                </div>
                <Pricing_form_social />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
