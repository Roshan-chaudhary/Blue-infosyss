import Pricing_form from "@/components/Pricing_form";
import React from "react";

const page = () => {
  return (
    <div>
      <div style={{ minHeight: "50vh" }}>
        <section className="overflow">
          <div className="l__container">
            <div
              className="section-packages  seo-packages m__tb--b"
              style={{ backgroundSize: "contain" }}
            >
              <div className="section__title text-center p__tb--b">
                <h6>Subscription Plan</h6>
                <h1 className="title">SEO Package</h1>
              </div>
              <div className="package seo">
                <div className="row g-4 g-lg-3">
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <div className="package__price">
                      <div className="package__price--head">
                        <h2 className="title">Standard</h2>
                        <h3 className="price">
                          <sup>Rs</sup>
                          <span>34,000/ </span>
                          <small>mon</small>
                        </h3>
                        <p className="text">Preferred For Small Businesses</p>
                      </div>
                      <div className="package__price--body">
                        <div className="content analysis">
                          <h4>Initial website analysis</h4>
                          <ul>
                            <li className="tick">
                              Upto 10 Keyword Ranking
                              <ul className="hover_points">
                                <li>3 Primary Keywords</li>
                                <li>7 Secondary Keywords</li>
                              </ul>
                            </li>
                            <li className="tick">Site Audit</li>
                            <li className="tick">Competitor Analysis</li>
                            <li className="tick">Google Analytics Setup</li>
                            <li className="tick">
                              Google Search Console Setup
                            </li>
                            <li className="tick">Robots.Txt Creation</li>
                            <li className="tick">Sitemap Creation</li>
                          </ul>
                        </div>
                        <div className="content setup">
                          <h4>On Page Setup</h4>
                          <ul>
                            <li className="tick">Keyword Research</li>
                            <li className="close">Keyword Mapping</li>
                            <li className="tick">
                              Few Major Pages Meta And Heading Tag Optimization
                            </li>
                            <li className="tick">URL Optimization</li>
                            <li className="tick">Image Optimization</li>
                            <li className="tick">
                              2 SEO Optimized Blog Articles
                            </li>
                            <li className="tick">
                              Few Existing Content Optimization
                            </li>
                          </ul>
                        </div>
                        <div className="content technical">
                          <h4>Technical SEO</h4>
                          <ul>
                            <li className="tick">Canonical URL Addition</li>
                            <li className="tick">Custom 404 Page Setup</li>
                            <li className="tick">OG Tags</li>
                            <li className="tick">Page Redirection</li>
                            <li className="tick">Sitemap</li>
                            <li className="tick">Robots.Txt</li>
                            <li className="tick">
                              Browser Compatibility Check
                            </li>
                            <li className="tick">Page Speed Optimization</li>
                            <li className="close">Broken Link Fixing</li>
                            <li className="close">Site Architecture</li>
                            <li className="close">Mobile Friendliness</li>
                            <li className="close">
                              Solve Keyword Cannibalization
                            </li>
                            <li className="close">Hreflang Tags</li>
                            <li className="close">
                              Competitor Backlink Research
                            </li>
                            <li className="close">
                              Other Webmaster Optimization
                            </li>
                          </ul>
                        </div>
                        <div className="content off">
                          <h4>Off Page SEO</h4>
                          <ul>
                            <li className="close">Link Building</li>
                            <li className="close">Guest Blogging</li>
                            <li className="close">Directory Submission</li>
                            <li className="tick">Quora Posting</li>
                            <li className="tick">Reddit Posting</li>
                            <li className="close">Schema Implementation</li>
                            <li className="close">Conversion Tracking</li>
                            <li className="close">
                              Infographic Creation And Sharing
                            </li>
                          </ul>
                        </div>
                        <div className="content">
                          <h4>Local SEO</h4>
                          <ul>
                            <li className="tick">
                              GMB Setup &amp; Optimization
                            </li>
                            <li className="close">GMB Posting</li>
                            <li className="tick">Google Map Creation</li>
                            <li className="close">Local Citation</li>
                          </ul>
                        </div>
                        <div className="content report">
                          <h4>Monthly Report</h4>
                          <ul>
                            <li className="tick">Work Done Report</li>
                            <li className="tick">On Page Report</li>
                            <li className="close">Backlink Report</li>
                            <li className="tick">Traffic By Country</li>
                            <li className="tick">Traffic Comparison</li>
                            <li className="tick">Top 10 Performing Pages</li>
                            <li className="tick">Top 10 Keywords</li>
                            <li className="tick">
                              Clicks, Impression, Position
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="package__price--footer">
                        <h3 className="type">No Dedicated Project Manager</h3>
                        {/* <h3 class="time">Contract: <span>Minimum 6 Month</span></h3> */}
                        <div className="text-center mt-4">
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
                  <div className="col-lg-3 col-md-6 mb-3 mb-md-0">
                    <div
                      className="package__price package__price--radius mt-3 mt-md-0"
                      data-aos="fade-up"
                      data-aos-duration={800}
                      data-aos-delay={200}
                    >
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
                        <h2 className="title">Professional</h2>
                        <h3 className="price">
                          <sup>Rs</sup>
                          <span>56,000/ </span>
                          <small>mon</small>
                        </h3>
                        <p className="text">
                          Preferred For Mid Size Businesses
                        </p>
                      </div>
                      <div className="package__price--body">
                        <div className="content analysis">
                          <h4>Initial website analysis</h4>
                          <ul>
                            <li className="tick">
                              Upto 20 Keyword Ranking
                              <ul className="hover_points">
                                <li>8 Primary Keywords</li>
                                <li>12 Secondary Keywords</li>
                              </ul>
                            </li>
                            <li className="tick">Site Audit</li>
                            <li className="tick">Competitor Analysis</li>
                            <li className="tick">Google Analytics Setup</li>
                            <li className="tick">
                              Google Search Console Setup
                            </li>
                            <li className="tick">Robots.Txt Creation</li>
                            <li className="tick">Sitemap Creation</li>
                          </ul>
                        </div>
                        <div className="content setup">
                          <h4>On Page Setup</h4>
                          <ul>
                            <li className="tick">Keyword Research</li>
                            <li className="tick">Keyword Mapping</li>
                            <li className="tick">
                              Major Pages Meta And Heading Tag Optimization
                            </li>
                            <li className="tick">URL Optimization</li>
                            <li className="tick">Image Optimization</li>
                            <li className="tick">
                              4 SEO Optimized Blog Articles
                            </li>
                            <li className="tick">
                              Existing Major Page Content Optimization
                            </li>
                          </ul>
                        </div>
                        <div className="content technical">
                          <h4>Technical SEO</h4>
                          <ul>
                            <li className="tick">Canonical URL Addition</li>
                            <li className="tick">Custom 404 Page Setup</li>
                            <li className="tick">OG Tags</li>
                            <li className="tick">Page Redirection</li>
                            <li className="tick">Sitemap</li>
                            <li className="tick">Robots.Txt</li>
                            <li className="tick">
                              Browser Compatibility Check
                            </li>
                            <li className="tick">Page Speed Optimization</li>
                            <li className="tick">Broken Link Fixing</li>
                            <li className="tick">Site Architecture</li>
                            <li className="tick">Mobile Friendliness</li>
                            <li className="tick">
                              Solve Keyword Cannibalization
                            </li>
                            <li className="close">Hreflang Tags</li>
                            <li className="close">
                              Competitor Backlink Research
                            </li>
                            <li className="tick">
                              Bing Webmaster Optimization
                            </li>
                          </ul>
                        </div>
                        <div className="content off">
                          <h4>Off Page SEO</h4>
                          <ul>
                            <li className="tick">Link Building</li>
                            <li className="close">Guest Blogging</li>
                            <li className="tick">Few Directory Submission</li>
                            <li className="tick">Few Weekly Post On Quora</li>
                            <li className="tick">Few Weekly Post On Reddit</li>
                            <li className="tick">Schema Implementation</li>
                            <li className="close">Conversion Tracking</li>
                            <li className="tick">
                              Few Infographic Creation And Sharing
                            </li>
                          </ul>
                        </div>
                        <div className="content local">
                          <h4>Local SEO</h4>
                          <ul>
                            <li className="tick">
                              GMB Setup &amp; Optimization
                            </li>
                            <li className="tick">GMB Posting</li>
                            <li className="tick">Google Map Creation</li>
                            <li className="tick">Few Local Citation</li>
                          </ul>
                        </div>
                        <div className="content report">
                          <h4>Monthly Report</h4>
                          <ul>
                            <li className="tick">Work Done Report</li>
                            <li className="tick">On Page Report</li>
                            <li className="tick">Backlink Report</li>
                            <li className="tick">Traffic By Country</li>
                            <li className="tick">Traffic Comparison</li>
                            <li className="tick">Top 10 Performing Pages</li>
                            <li className="tick">Top 10 Keywords</li>
                            <li className="tick">
                              Clicks, Impression, Position
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="package__price--footer">
                        <h3 className="type">Dedicated Project Manager</h3>
                        {/* <h3 class="time">Contract: <span>Minimum 6 Month</span></h3> */}
                        <div className="text-center mt-4">
                          <button
                            className="l__button l__button--primary"
                            data-bs-toggle="modal"
                            data-bs-target="#seoSubscription"
                            data-name="Professional"
                          >
                            Select Plan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div
                      className="package__price"
                      data-aos="fade-up"
                      data-aos-duration={800}
                      data-aos-delay={300}
                    >
                      <div className="package__price--head">
                        <h2 className="title">Premium</h2>
                        <h3 className="price">
                          <sup>Rs</sup>
                          <span>88,000/ </span>
                          <small>mon</small>
                        </h3>
                        <p className="text">Preferred For Large Businesses</p>
                      </div>
                      <div className="package__price--body">
                        <div className="content analysis">
                          <h4>Initial website analysis</h4>
                          <ul>
                            <li className="tick">
                              Upto 40 Keyword Ranking
                              <ul className="hover_points">
                                <li>18 Primary Keywords</li>
                                <li>22 Secondary Keywords</li>
                              </ul>
                            </li>
                            <li className="tick">Site Audit</li>
                            <li className="tick">Competitor Analysis</li>
                            <li className="tick">Google Analytics Setup</li>
                            <li className="tick">
                              Google Search Console Setup
                            </li>
                            <li className="tick">Robots.Txt Creation</li>
                            <li className="tick">Sitemap Creation</li>
                          </ul>
                        </div>
                        <div className="content setup">
                          <h4>On Page Setup</h4>
                          <ul>
                            <li className="tick">Keyword Research</li>
                            <li className="tick">Keyword Mapping</li>
                            <li className="tick">
                              Major Pages Meta And Heading Tag Optimization
                            </li>
                            <li className="tick">URL Optimization</li>
                            <li className="tick">Image Optimization</li>
                            <li className="tick">
                              6 SEO Optimized Blog Articles
                            </li>
                            <li className="tick">
                              Existing Major Page Content Optimization
                            </li>
                          </ul>
                        </div>
                        <div className="content technical">
                          <h4>Technical SEO</h4>
                          <ul>
                            <li className="tick">Canonical URL Addition</li>
                            <li className="tick">Custom 404 Page Setup</li>
                            <li className="tick">OG Tags</li>
                            <li className="tick">Page Redirection</li>
                            <li className="tick">Sitemap</li>
                            <li className="tick">Robots.Txt</li>
                            <li className="tick">
                              Browser Compatibility Check
                            </li>
                            <li className="tick">Page Speed Optimization</li>
                            <li className="tick">Broken Link Fixing</li>
                            <li className="tick">Site Architecture</li>
                            <li className="tick">Mobile Friendliness</li>
                            <li className="tick">
                              Solve Keyword Cannibalization
                            </li>
                            <li className="close">Hreflang Tags</li>
                            <li className="close">
                              Competitor Backlink Research
                            </li>
                            <li className="tick">
                              Bing Webmaster Optimization
                            </li>
                          </ul>
                        </div>
                        <div className="content off">
                          <h4>Off Page SEO</h4>
                          <ul>
                            <li className="tick">Link Building</li>
                            <li className="tick">Guest Blogging</li>
                            <li className="tick">Few Directory Submission</li>
                            <li className="tick">Active On Quora</li>
                            <li className="tick">Active On Reddit</li>
                            <li className="tick">Schema Implementation</li>
                            <li className="tick">Conversion Tracking</li>
                            <li className="tick">
                              Monthly 1 Infographic Creation And Sharing
                            </li>
                          </ul>
                        </div>
                        <div className="content">
                          <h4>Local SEO</h4>
                          <ul>
                            <li className="tick">
                              GMB Setup &amp; Optimization
                            </li>
                            <li className="tick">GMB Posting</li>
                            <li className="tick">Google Map Creation</li>
                            <li className="tick">Local Citation</li>
                          </ul>
                        </div>
                        <div className="content report">
                          <h4>Monthly Report</h4>
                          <ul>
                            <li className="tick">Work Done Report</li>
                            <li className="tick">On Page Report</li>
                            <li className="tick">Backlink Report</li>
                            <li className="tick">Traffic By Country</li>
                            <li className="tick">Traffic Comparison</li>
                            <li className="tick">Top 10 Performing Pages</li>
                            <li className="tick">Top 10 Keywords</li>
                            <li className="tick">
                              Clicks, Impression, Position
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="package__price--footer">
                        <h3 className="type">Dedicated Project Manager</h3>
                        {/* <h3 class="time">Contract: <span>Minimum 6 Month</span></h3> */}
                        <div className="text-center mt-4">
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
                  <div className="col-lg-3 col-md-6">
                    <div
                      className="package__price"
                      data-aos="fade-up"
                      data-aos-duration={800}
                      data-aos-delay={400}
                    >
                      <div className="package__price--head">
                        <h2 className="title">Premium Plus</h2>
                        <a
                          href=""
                          className="l__button l__button--primary mb-2"
                        >
                          contact sales
                        </a>
                        <p className="text">
                          Preferred For Highly Competitive Businesses
                        </p>
                      </div>
                      <div className="package__price--body">
                        <div className="content analysis">
                          <h4>Initial website analysis</h4>
                          <ul>
                            <li className="tick">
                              Upto 60 Keyword Ranking
                              <ul className="hover_points">
                                <li>25 Primary Keywords</li>
                                <li>35 Secondary Keywords</li>
                              </ul>
                            </li>
                            <li className="tick">Site Audit</li>
                            <li className="tick">Competitor Analysis</li>
                            <li className="tick">Google Analytics Setup</li>
                            <li className="tick">
                              Google Search Console Setup
                            </li>
                            <li className="tick">Robots.Txt Creation</li>
                            <li className="tick">Sitemap Creation</li>
                          </ul>
                        </div>
                        <div className="content setup">
                          <h4>On Page Setup</h4>
                          <ul>
                            <li className="tick">Keyword Research</li>
                            <li className="tick">Keyword Mapping</li>
                            <li className="tick">
                              Major Pages Meta And Heading Tag Optimization
                            </li>
                            <li className="tick">URL Optimization</li>
                            <li className="tick">Image Optimization</li>
                            <li className="tick">
                              8 SEO Optimized Blog Articles
                            </li>
                            <li className="tick">
                              Existing Major Page Content Optimization
                            </li>
                          </ul>
                        </div>
                        <div className="content technical">
                          <h4>Technical SEO</h4>
                          <ul>
                            <li className="tick">Canonical URL Addition</li>
                            <li className="tick">Custom 404 Page Setup</li>
                            <li className="tick">OG Tags</li>
                            <li className="tick">Page Redirection</li>
                            <li className="tick">Sitemap</li>
                            <li className="tick">Robots.Txt</li>
                            <li className="tick">
                              Browser Compatibility Check
                            </li>
                            <li className="tick">Page Speed Optimization</li>
                            <li className="tick">Broken Link Fixing</li>
                            <li className="tick">Site Architecture</li>
                            <li className="tick">Mobile Friendliness</li>
                            <li className="tick">
                              Solve Keyword Cannibalization
                            </li>
                            <li className="tick">Hreflang Tags</li>
                            <li className="tick">
                              Competitor Backlink Research
                            </li>
                            <li className="tick">
                              Bing And Other Webmaster Optimization
                            </li>
                          </ul>
                        </div>
                        <div className="content off">
                          <h4>Off Page SEO</h4>
                          <ul>
                            <li className="tick">Link Building</li>
                            <li className="tick">Guest Blogging</li>
                            <li className="tick">Few Directory Submission</li>
                            <li className="tick">Active On Quora</li>
                            <li className="tick">Active On Reddit</li>
                            <li className="tick">Schema Implementation</li>
                            <li className="tick">Conversion Tracking</li>
                            <li className="tick">
                              Monthly 1 Infographic Creation And Sharing
                            </li>
                          </ul>
                        </div>
                        <div className="content">
                          <h4>Local SEO</h4>
                          <ul>
                            <li className="tick">
                              GMB Setup &amp; Optimization
                            </li>
                            <li className="tick">GMB Posting</li>
                            <li className="tick">Google Map Creation</li>
                            <li className="tick">Local Citation</li>
                          </ul>
                        </div>
                        <div className="content report">
                          <h4>Monthly Report</h4>
                          <ul>
                            <li className="tick">Work Done Report</li>
                            <li className="tick">On Page Report</li>
                            <li className="tick">Backlink Report</li>
                            <li className="tick">Traffic By Country</li>
                            <li className="tick">Traffic Comparison</li>
                            <li className="tick">Top 10 Performing Pages</li>
                            <li className="tick">Top 10 Keywords</li>
                            <li className="tick">
                              Clicks, Impression, Position
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="package__price--footer">
                        <h3 className="type">Dedicated Project Manager</h3>
                        {/* <h3 class="time">Contract: <span>Minimum 6 Month</span></h3> */}
                        <div className="text-center mt-4">
                          <button
                            data-bs-toggle="modal"
                            data-bs-target="#enquiryModal"
                            className="l__button l__button--primary"
                          >
                            Quick Enquiry
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
                    Contract: Minimum 6 months.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="package__form p__tb">
          <div className="l__container">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="section__title text-center">
                  <h6>Request for a quotation</h6>
                  <h2>
                    Create Your <span>Custom Package</span>
                  </h2>
                </div>
                <Pricing_form />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
