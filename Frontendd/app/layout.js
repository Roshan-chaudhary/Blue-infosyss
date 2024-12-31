import Head from "next/head";
import "./globals.css";
import "./styles/animate.min.css";
import "./styles/bootstrap.min.css";
import "./styles/brands.css";
import "./styles/fancybox.css";
import "./styles/fontawesome.css";
import "./styles/intlTelInput.css";
import "./styles/owl.carousel.min.css";
import "./styles/owl.theme.default.min.css";
import "./styles/solid.css";
import "./styles/style.css";
import Script from "next/script";
import Link from "next/link";
import Hover_Testimonial from "@/components/Hover_Testimonial";
export const metadata = {
  title: "Blue Fox | Think Digital",
  description: "Blue Fox Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="/jquery.min.js" />
        <Script src="/jquery-3.min.js" />
        <Script src="/api.js" />
        <Script src="/bootstrap.bundle.min.js" />
        <Script src="/email-decode.min.js" />
        <Script src="/fancybox.js" />
        <Script src="/intlTelInput-jquery.min.js" />
        <Script src="/js.js" />
        <Script src="/owl.carousel.min.js" />
        <Script src="/sweetalert.js" />
        <Script src="/wow.js" />
        <Script src="/console.js" />
        <Script src="/main.js" />
        <Script
          async=""
          src="https://www.clarity.ms/s/0.7.58/clarity.js"
        ></Script>
        <Script
          async=""
          src="https://connect.facebook.net/en_US/fbevents.js"
        ></Script>
        <Script
          async=""
          src="https://www.clarity.ms/tag/ax76cj54v4?ref=gtm2"
        ></Script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </head>
      <body className={` antialiased`}>
        <header className="header" id="myHeader">
          <nav className="navbar navbar-expand-lg navbar-light bg-light navbar__custom">
            <div className="l__container flex flex-wrap items-center justify-between">
              <Link className="navbar-brand" href="/">
                <img alt="logo" src="/logo.svg" />
              </Link>
              <div className="d-flex d-lg-none">
                <a className="navbar-toggler" href="tel:9817303073">
                  <img alt="phone" src="/phone.png" />
                </a>
                <a
                  className="navbar-toggler"
                  data-bs-target="#enquiryModal"
                  data-bs-toggle="modal"
                  data-id=""
                  href=""
                >
                  <img alt="enquiry" src="/enquiry.png" />
                </a>
                <button
                  aria-controls="offcanvasNavbarExample-expand-lg"
                  className="navbar-toggler"
                  data-bs-target="#offcanvasNavbarExample-expand-lg"
                  data-bs-toggle="offcanvas"
                  type="button"
                >
                  <span
                    className="navbar-toggler-icon"
                    data-bs-target="#offcanvasNavbarExample-expand-lg"
                  >
                    <i className="fa-solid fa-bars" />
                  </span>
                </button>
              </div>
              <div
                aria-hidden="true"
                aria-labelledby="offcanvasNavbarExample-expand-lgLabel"
                className="offcanvas offcanvas-start"
                data-bs-hideresize="true"
                id="offcanvasNavbarExample-expand-lg"
                style={{ visibility: "hidden" }}
                tabIndex={-1}
              >
                <div className="offcanvas-header">
                  <a className="offcanvas-title" href="" id="offcanvasLabel">
                    <img className="!filter-none" alt="logo" src="/logo.svg" />
                  </a>
                  <button
                    aria-label="Close"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    type="button"
                  />
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-lg-center menu__inner flex-grow-1">
                    <li className="menu__inner--item">
                      <Link className="menu__inner--item--link" href="/">
                        <span data-hover="Home">Home</span>
                      </Link>
                    </li>
                    <li className="menu__inner--item d-none d-lg-block">
                      <Link className="menu__inner--item--link" href="#">
                        <span data-hover="About">About</span>
                        <i className="fa-solid fa-chevron-down" />
                      </Link>
                      <div className="submenu megamenu__normal">
                        <ul className="submenu__list">
                          <li className="item">
                            <Link href="/about">
                              Introduction
                              <span>
                                Blue Fox Pvt Ltd. is a revenue-based project
                                company specializing in the IT sector.
                              </span>
                            </Link>
                          </li>
                          <li className="item">
                            <Link href="/work">
                              How We Work
                              <span>
                                We work in a team that ensures learning
                                opportunities for members.
                              </span>
                            </Link>
                          </li>
                          <li className="item">
                            <Link href="/team">
                              Our Team
                              <span>
                                We celebrate events to create some joyful
                                moments together.
                              </span>
                            </Link>
                          </li>
                          <li className="item">
                            <Link href="/activities">
                              Our Activities
                              <span>
                                We have experienced professionals to turn your
                                business problem into future possibilities.
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="menu__inner--item nav-item mb-0 d-lg-none">
                      <div
                        className="accordion accordion-flush"
                        id="accordionParent"
                      >
                        <div className="accordion-item">
                          <Link
                            aria-controls="flush-collapseOne"
                            aria-expanded="false"
                            className="menu__inner--item--link accordion-button collapsed"
                            data-bs-target="#flush-collapseOne"
                            data-bs-toggle="collapse"
                            href="#"
                            type="button"
                          >
                            <span data-hover="About">About</span>
                          </Link>
                          <div
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionParent"
                            id="flush-collapseOne"
                          >
                            <ul className="accordion-item-ul">
                              <li className="">
                                <Link className="nav-link" href="/about">
                                  Introduction
                                </Link>
                              </li>
                              <li className="">
                                <Link className="nav-link" href="/work">
                                  How We Work
                                </Link>
                              </li>
                              <li className="">
                                <Link className="nav-link" href="/team">
                                  Our Team
                                </Link>
                              </li>
                              <li className="">
                                <Link className="nav-link" href="/activities">
                                  Our Activities
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu__inner--item menu__dropdown d-none d-lg-none">
                      <Link
                        className="menu__inner--item--link"
                        href="/services"
                      >
                        <span data-hover="Service">Service</span>
                        <i className="fa-solid fa-chevron-down" />
                      </Link>
                      <div className="submenu megamenu__normal">
                        <div className="accordion custom__accordion">
                          <div className="accordion__item">
                            <a
                              className="accordion__title"
                              href="javascript:void(0)"
                            >
                              Development
                              <i className="fas fa-chevron-down" />
                            </a>
                            <div
                              className="accordion__content menu__drop"
                              style={{ display: "none" }}
                            >
                              <div className="">
                                <a href="website-design-in-nepal">
                                  <div className="textbox__type">
                                    <img alt="" src="/Mask_group.svg" />
                                    <div>
                                      <h5>Website Development</h5>
                                      <p>
                                        Specialized Custom Website Development
                                        Services
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="">
                                <a href="mobile-app-development">
                                  <div className="textbox__type">
                                    <img alt="" src="/Mask_group_D3xoMhf.svg" />
                                    <div>
                                      <h5>App Development</h5>
                                      <p>
                                        Building Custom Apps for Seamless User
                                        Experience
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="">
                                <a href="system-software-development">
                                  <div className="textbox__type">
                                    <img alt="" src="/Mask_group_BKktSAc.svg" />
                                    <div>
                                      <h5>System/Software Development</h5>
                                      <p>
                                        Cutting-edge System/Software Development
                                        Solutions
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="">
                                <a href="ui-ux-design">
                                  <div className="textbox__type">
                                    <img alt="" src="/Mask_group_kx0r4jm.svg" />
                                    <div>
                                      <h5>UI/UX</h5>
                                      <p>
                                        Design UI/UX interfaces for effortless
                                        user interaction
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="accordion__item">
                            <a
                              className="accordion__title"
                              href="javascript:void(0)"
                            >
                              Marketing
                              <i className="fas fa-chevron-down" />
                            </a>
                            <div
                              className="accordion__content menu__drop"
                              style={{ display: "none" }}
                            >
                              <div className="">
                                <a href="seo-in-nepal">
                                  <div className="textbox__type">
                                    <img alt="" src="/Mask_group_n0wKmHg.svg" />
                                    <div>
                                      <h5>Search Engine Optimization (SEO)</h5>
                                      <p>
                                        Enhance Search Engine Ranking with
                                        Effective SEO
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="">
                                <a href="social-media-marketing">
                                  <div className="textbox__type">
                                    <img alt="" src="/Mask_group_gAGxJ1v.svg" />
                                    <div>
                                      <h5>Social Media Marketing (SMM)</h5>
                                      <p>
                                        Boost online presence, engage audience
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="">
                                <a href="graphics-design">
                                  <div className="textbox__type">
                                    <img alt="" src="" />
                                    <div>
                                      <h5>Graphic Design</h5>
                                      <p>Bringing Ideas to Visual Life</p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="">
                                <a href="content-writing">
                                  <div className="textbox__type">
                                    <img alt="" src="" />
                                    <div>
                                      <h5>Content Writing</h5>
                                      <p>Creating Content that Resonates</p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="">
                                <a href="google-ads-ppc-marketing">
                                  <div className="textbox__type">
                                    <img alt="" src="" />
                                    <div>
                                      <h5>Pay Per Click</h5>
                                      <p>Optimized Pay-Per-Click Campaigns</p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="">
                                <a href="digital-marketing">
                                  <div className="textbox__type">
                                    <img alt="" src="" />
                                    <div>
                                      <h5>Digital Marketing</h5>
                                      <p>
                                        Designing Digital Paths That Echo with
                                        Audiences
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu__inner--item nav-item mb-0 d-lg-none">
                      <div
                        className="accordion accordion-flush"
                        id="accordionParent"
                      >
                        <div className="accordion-item">
                          <Link
                            aria-controls="flush-collapseTwo"
                            aria-expanded="false"
                            className="menu__inner--item--link accordion-button collapsed"
                            data-bs-target="#flush-collapseTwo"
                            data-bs-toggle="collapse"
                            href="/services"
                            type="button"
                          >
                            <span data-hover="Services">Services</span>
                          </Link>
                          <div
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionParent"
                            id="flush-collapseTwo"
                          >
                            <div className="accordion-item-service">
                              <h3>Development</h3>
                              <ul className="list">
                                <li>
                                  <Link href="/services/website-design-in-nepal">
                                    <img
                                      alt=""
                                      src="/Website_developlent.svg"
                                    />
                                    Website Development
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services/mobile-app-development">
                                    <img alt="" src="/App_Development.svg" />
                                    App Development
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services/system-software-development">
                                    <img alt="" src="/Programmer-amico.svg" />
                                    System/Software Development
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services/ui-ux-design">
                                    <img alt="" src="/UI_UX.svg" />
                                    UI/UX
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="accordion-item-service">
                              <h3>Marketing</h3>
                              <ul className="list">
                                <li>
                                  <Link href="/services/seo-in-nepal">
                                    <img
                                      alt=""
                                      src="/SEO_analytics_team-amico.svg"
                                    />
                                    Search Engine Optimization (SEO)
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services/social-media-marketing">
                                    <img
                                      alt=""
                                      src="/Mobile_Marketing-pana.svg"
                                    />
                                    Social Media Marketing (SMM)
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services/graphics-design">
                                    <img
                                      alt="Graphic Design Service."
                                      src="/Website_Creator-pana.svg"
                                    />
                                    Graphic Design
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services/content-writing">
                                    <img alt="" src="/Content Writing.svg" />
                                    Content Writing
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services/google-ads-ppc-marketing">
                                    <img alt="" src="/Pay Per Click.svg" />
                                    Pay Per Click
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services/digital-marketing">
                                    <img alt="" src="/Digital Marketing.svg" />
                                    Digital Marketing
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      className="menu__inner--item d-none d-lg-inline-block"
                      style={{ position: "static" }}
                    >
                      <Link
                        className="menu__inner--item--link"
                        href="/services"
                      >
                        <span data-hover="Service">Service</span>
                        <i className="fa-solid fa-chevron-down" />
                      </Link>
                      <div className="megamenu">
                        <div className="menu__drop">
                          <div className="box" id="boxid">
                            <h4 className="navlist active">
                              Development
                              <p>
                                Creating digital experiences through coding,
                                design, and user interaction principles.
                              </p>
                            </h4>
                            <h4 className="navlist">
                              Marketing
                              <p>
                                Promotion of products or services via online
                                channels and strategies.
                              </p>
                            </h4>
                          </div>
                          <div className="textbox">
                            <div className="textboxcontainer active">
                              <div className="row">
                                <div className="col-md-6">
                                  <Link href="/services/website-design-in-nepal">
                                    <div className="textbox__type">
                                      <img
                                        alt=""
                                        src="/Website_developlent.svg"
                                      />
                                      <div>
                                        <h5>Website Development</h5>
                                        <p>
                                          Specialized Custom Website Development
                                          Services
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="col-md-6">
                                  <Link href="/services/mobile-app-development">
                                    <div className="textbox__type">
                                      <img alt="" src="/App_Development.svg" />
                                      <div>
                                        <h5>App Development</h5>
                                        <p>
                                          Building Custom Apps for Seamless User
                                          Experience
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="col-md-6">
                                  <Link href="/services/system-software-development">
                                    <div className="textbox__type">
                                      <img alt="" src="/Programmer-amico.svg" />
                                      <div>
                                        <h5>System/Software Development</h5>
                                        <p>
                                          Cutting-edge System/Software
                                          Development Solutions
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="col-md-6">
                                  <Link href="/services/ui-ux-design">
                                    <div className="textbox__type">
                                      <img alt="" src="/UI_UX.svg" />
                                      <div>
                                        <h5>UI/UX</h5>
                                        <p>
                                          Design UI/UX interfaces for effortless
                                          user interaction
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="textboxcontainer">
                              <div className="row">
                                <div className="col-md-6">
                                  <Link href="/services/seo-in-nepal">
                                    <div className="textbox__type">
                                      <img
                                        alt=""
                                        src="/SEO_analytics_team-amico.svg"
                                      />
                                      <div>
                                        <h5>
                                          Search Engine Optimization (SEO)
                                        </h5>
                                        <p>
                                          Enhance Search Engine Ranking with
                                          Effective SEO
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="col-md-6">
                                  <Link href="/services/social-media-marketing">
                                    <div className="textbox__type">
                                      <img
                                        alt=""
                                        src="/Mobile_Marketing-pana.svg"
                                      />
                                      <div>
                                        <h5>Social Media Marketing (SMM)</h5>
                                        <p>
                                          Boost online presence, engage audience
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="col-md-6">
                                  <Link href="/services/graphics-design">
                                    <div className="textbox__type">
                                      <img
                                        alt="Graphic Design Service."
                                        src="/Website_Creator-pana.svg"
                                      />
                                      <div>
                                        <h5>Graphic Design</h5>
                                        <p>Bringing Ideas to Visual Life</p>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="col-md-6">
                                  <Link href="/services/content-writing">
                                    <div className="textbox__type">
                                      <img alt="" src="/Content Writing.svg" />
                                      <div>
                                        <h5>Content Writing</h5>
                                        <p>Creating Content that Resonates</p>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="col-md-6">
                                  <Link href="/services/google-ads-ppc-marketing">
                                    <div className="textbox__type">
                                      <img alt="" src="/Pay Per Click.svg" />
                                      <div>
                                        <h5>Pay Per Click</h5>
                                        <p>Optimized Pay-Per-Click Campaigns</p>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="col-md-6">
                                  <Link href="/services/digital-marketing">
                                    <div className="textbox__type">
                                      <img
                                        alt=""
                                        src="/Digital Marketing.svg"
                                      />
                                      <div>
                                        <h5>Digital Marketing</h5>
                                        <p>
                                          Designing Digital Paths That Echo with
                                          Audiences
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu__inner--item d-none d-lg-block">
                      <Link className="menu__inner--item--link" href="#">
                        <span data-hover="Pricing">Pricing</span>
                        <i className="fa-solid fa-chevron-down" />
                      </Link>
                      <div className="submenu megamenu__normal">
                        <ul className="submenu__list">
                          <li className="item">
                            <Link href="/pricing/seo">
                              SEO Package
                              <span>
                                Typically offer a range of services including
                                keyword research
                              </span>
                            </Link>
                          </li>
                          <li className="item">
                            <Link href="/pricing/social-media">
                              Social Media Package
                              <span>
                                Typically offer a range of services tailored to
                                clients' needs, including content creation
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="menu__inner--item nav-item mb-0 d-lg-none">
                      <div
                        className="accordion accordion-flush"
                        id="accordionParent"
                      >
                        <div className="accordion-item">
                          <Link
                            aria-controls="flush-collapseThree"
                            aria-expanded="false"
                            className="menu__inner--item--link accordion-button collapsed"
                            data-bs-target="#flush-collapseThree"
                            data-bs-toggle="collapse"
                            href="#"
                            type="button"
                          >
                            <span data-hover="Pricing">Pricing</span>
                          </Link>
                          <div
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionParent"
                            id="flush-collapseThree"
                          >
                            <ul className="">
                              <li className="">
                                <Link className="nav-link" href="/pricing/seo">
                                  SEO Package
                                </Link>
                              </li>
                              <li className="">
                                <Link
                                  className="nav-link"
                                  href="/pricing/social-media"
                                >
                                  {" "}
                                  Social Media Package
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu__inner--item">
                      <Link
                        className="menu__inner--item--link"
                        href="/portfolio"
                      >
                        <span data-hover="Our Work">Our Work</span>
                      </Link>
                    </li>
                    <li className="menu__inner--item">
                      <Link className="menu__inner--item--link" href="/career">
                        <span data-hover="Career">Career</span>
                      </Link>
                    </li>
                    <li className="menu__inner--item">
                      <Link className="menu__inner--item--link" href="/contact">
                        <span data-hover="Contact">Contact</span>
                      </Link>
                    </li>
                  </ul>
                  <div className="navbar__right d-none d-lg-flex">
                    <div className="call d-none d-xl-flex">
                      <i className="fa-solid fa-phone" />
                      <a href="tel:9817303073">9817303073</a>
                    </div>
                    <button
                      className="l__button l__button--border"
                      data-bs-target="#enquiryModal"
                      data-bs-toggle="modal"
                      data-id=""
                    >
                      Quick Enquiry
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <section className="cta p__tb overflow">
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
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-7">
                <div className="cta__wrap mb-4 mb-md-0">
                  <h2 className="heading">
                    Let's connect and{" "}
                    <span className="text-color-primary">
                      transform your vision into a digital reality.
                    </span>{" "}
                  </h2>
                  <div className="sub-heading">
                    We are available from 9:00 AM to 6:00 PM, Sunday to Friday.
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5">
                <div className="cta__wrap--one text-center">
                  <h6 className="">Reach out now!</h6>
                  <p className="call-us">
                    <a href="tel:9817303073">9817303073</a>
                  </p>
                  <div className="contact-us-button mt-20">
                    <button
                      className="l__button l__button--primary"
                      data-bs-target="#enquiryModal"
                      data-bs-toggle="modal"
                      data-id=""
                    >
                      <span>Let's start conversation</span>
                      <i className="fa-solid fa-chevron-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer p__tb--t">
          <div className="l__container">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="footer__widget mb-4 mb-md-0">
                      <h3 className="">Development services</h3>
                      <ul>
                        <li>
                          <Link href="/services/website-design-in-nepal">
                            Website Development
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/mobile-app-development">
                            App Development
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/system-software-development">
                            System/Software Development
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/ui-ux-design">UI/UX</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="footer__widget mb-4 mb-md-0">
                      <h3 className="">Marketing services</h3>
                      <ul>
                        <li>
                          <Link href="/services/seo-in-nepal">
                            Search Engine Optimization (SEO)
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/social-media-marketing">
                            Social Media Marketing (SMM)
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/graphics-design">
                            Graphic Design
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/content-writing">
                            Content Writing
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/google-ads-ppc-marketing">
                            Pay Per Click
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/digital-marketing">
                            Digital Marketing
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-5 col-sm-6">
                    <div className="footer__widget mb-4 mb-md-0">
                      <h3 className="">quick links</h3>
                      <ul>
                        <li>
                          <Link href="/about">about us</Link>
                        </li>
                        <li>
                          <Link href="/services">Our Services</Link>
                        </li>
                        <li>
                          <Link href="/contact">contact us</Link>
                        </li>
                        <li>
                          <Link href="#">blog</Link>
                        </li>
                        <li>
                          <Link href="/career">career</Link>
                        </li>
                        <li>
                          <Link href="/portfolio">our work</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-7 col-sm-6">
                    <div className="footer__aside footer__widget">
                      <h3 className="">Connect with us</h3>
                      <ul>
                        <li>
                          <span>
                            <svg
                              fill="none"
                              height={26}
                              viewBox="0 0 26 26"
                              width={26}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_1968_375)">
                                <path
                                  d="M24.4034 18.3576C24.3604 18.3219 19.4886 14.8509 18.1732 15.0678C17.5386 15.1799 17.1763 15.613 16.4491 16.4791C16.248 16.7203 16.0424 16.9575 15.8324 17.1909C15.3728 17.0411 14.9245 16.8587 14.4909 16.6449C12.2529 15.5553 10.4447 13.7471 9.35513 11.5091C9.14133 11.0755 8.95886 10.6272 8.80912 10.1676C9.048 9.94906 9.38275 9.66712 9.52575 9.54688C10.3878 8.82375 10.8201 8.46056 10.9322 7.82519C11.1621 6.50975 7.67812 1.63963 7.64237 1.59575C7.48371 1.37073 7.27707 1.18375 7.03736 1.0483C6.79766 0.912851 6.53087 0.832313 6.25625 0.8125C4.84412 0.8125 0.8125 6.04175 0.8125 6.92331C0.8125 6.9745 0.886438 12.1777 7.30275 18.7046C13.8223 25.1136 19.0255 25.1875 19.0767 25.1875C19.9574 25.1875 25.1875 21.1559 25.1875 19.7437C25.1675 19.4691 25.0868 19.2023 24.9512 18.9626C24.8156 18.7229 24.6285 18.5163 24.4034 18.3576ZM18.9865 23.5576C18.2812 23.4975 13.91 22.9214 8.45 17.5581C3.06069 12.0713 2.49925 7.69275 2.44319 7.01431C3.50819 5.34271 4.79439 3.82283 6.26681 2.496C6.29931 2.5285 6.34238 2.57725 6.39762 2.64062C7.52686 4.18212 8.49963 5.83234 9.3015 7.56681C9.04074 7.82915 8.76511 8.07628 8.476 8.307C8.02766 8.64862 7.61595 9.03581 7.2475 9.46237C7.18516 9.54985 7.14078 9.64882 7.11693 9.75356C7.09308 9.85829 7.09024 9.96672 7.10856 10.0726C7.28051 10.8174 7.54386 11.5381 7.89262 12.2184C9.14216 14.7843 11.2156 16.8574 13.7816 18.1066C14.4617 18.4558 15.1825 18.7195 15.9274 18.8914C16.0333 18.9098 16.1417 18.9069 16.2464 18.8831C16.3512 18.8592 16.4502 18.8148 16.5376 18.7525C16.9657 18.3825 17.3542 17.9692 17.6971 17.5191C17.9522 17.2153 18.2926 16.8098 18.4218 16.6953C20.1607 17.4963 21.8146 18.4703 23.3586 19.6024C23.426 19.6593 23.4739 19.7031 23.5056 19.7316C22.1787 21.2045 20.6585 22.4909 18.9865 23.556V23.5576Z"
                                  fill="#43A047"
                                />
                                <path
                                  d="M13.8125 7.3125C15.105 7.31379 16.3443 7.82782 17.2582 8.74178C18.1722 9.65574 18.6862 10.895 18.6875 12.1875C18.6875 12.403 18.7731 12.6097 18.9255 12.762C19.0778 12.9144 19.2845 13 19.5 13C19.7155 13 19.9222 12.9144 20.0745 12.762C20.2269 12.6097 20.3125 12.403 20.3125 12.1875C20.3106 10.4642 19.6251 8.81201 18.4066 7.59344C17.188 6.37488 15.5358 5.68944 13.8125 5.6875C13.597 5.6875 13.3903 5.7731 13.238 5.92548C13.0856 6.07785 13 6.28451 13 6.5C13 6.71549 13.0856 6.92215 13.238 7.07452C13.3903 7.2269 13.597 7.3125 13.8125 7.3125Z"
                                  fill="#43A047"
                                />
                                <path
                                  d="M13.8125 3.25C16.182 3.2528 18.4537 4.19532 20.1292 5.87082C21.8047 7.54632 22.7472 9.81799 22.75 12.1875C22.75 12.403 22.8356 12.6097 22.988 12.762C23.1403 12.9144 23.347 13 23.5625 13C23.778 13 23.9847 12.9144 24.137 12.762C24.2894 12.6097 24.375 12.403 24.375 12.1875C24.3718 9.38714 23.2579 6.7024 21.2778 4.72225C19.2976 2.74209 16.6129 1.62823 13.8125 1.625C13.597 1.625 13.3903 1.7106 13.238 1.86298C13.0856 2.01535 13 2.22201 13 2.4375C13 2.65299 13.0856 2.85965 13.238 3.01202C13.3903 3.1644 13.597 3.25 13.8125 3.25Z"
                                  fill="#43A047"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1968_375">
                                  <rect fill="white" height={26} width={26} />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          <a href="tel:9817303073" className=" mr-[10px]">
                            9817303073
                          </a>
                          <a href="tel:9802755603">9802755603</a>
                          <a href="tel:" />
                        </li>
                        <li>
                          <span>
                            <svg
                              fill="none"
                              height={26}
                              viewBox="0 0 26 26"
                              width={26}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M23.7148 3.85938H2.28516C1.02771 3.85938 0 4.88257 0 6.14453V19.8555C0 21.1179 1.02837 22.1406 2.28516 22.1406H23.7148C24.9723 22.1406 26 21.1174 26 19.8555V6.14453C26 4.88226 24.9718 3.85938 23.7148 3.85938ZM23.3639 5.38281L13.5903 15.1884C13.2925 15.4871 12.7077 15.4873 12.4097 15.1884L2.63605 5.38281H23.3639ZM1.52344 19.5754V6.42459L8.07752 13L1.52344 19.5754ZM2.63605 20.6172L9.15302 14.079L11.3308 16.2639C12.2232 17.1592 13.7772 17.1588 14.6693 16.2639L16.847 14.0791L23.3639 20.6172H2.63605ZM24.4766 19.5754L17.9225 13L24.4766 6.42459V19.5754Z"
                                fill="#43A047"
                              />
                            </svg>
                          </span>
                          <a
                            className="mail"
                            href="mailto:bluefoxpvtltd@gmail.com"
                          >
                            bluefoxpvtltd@gmail.com
                          </a>
                        </li>
                        <li>
                          <span>
                            <svg
                              fill="none"
                              height={26}
                              viewBox="0 0 26 26"
                              width={26}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.3445 17.1785C20.1112 12.8371 19.7634 13.3787 19.8431 13.2655C20.8504 11.8448 21.3828 10.1726 21.3828 8.42969C21.3828 3.80758 17.6321 0 13.0039 0C8.39084 0 4.625 3.80006 4.625 8.42969C4.625 10.1715 5.16856 11.8874 6.20887 13.3273L8.66323 17.1786C6.03911 17.5818 1.57812 18.7836 1.57812 21.4297C1.57812 22.3943 2.20771 23.7689 5.20705 24.8401C7.30137 25.5881 10.0703 26 13.0039 26C18.4896 26 24.4297 24.4526 24.4297 21.4297C24.4297 18.7831 19.9739 17.5827 17.3445 17.1785ZM7.48139 12.4894C7.47302 12.4763 7.46427 12.4635 7.45514 12.4509C6.58947 11.26 6.14844 9.84857 6.14844 8.42969C6.14844 4.62018 9.21593 1.52344 13.0039 1.52344C16.784 1.52344 19.8594 4.62155 19.8594 8.42969C19.8594 9.85085 19.4267 11.2144 18.6078 12.3739C18.5344 12.4707 18.9173 11.876 13.0039 21.1549L7.48139 12.4894ZM13.0039 24.4766C7.01202 24.4766 3.10156 22.7153 3.10156 21.4297C3.10156 20.5656 5.11088 19.1448 9.56337 18.591L12.3615 22.9817C12.4303 23.0897 12.5253 23.1786 12.6375 23.2402C12.7498 23.3018 12.8758 23.334 13.0039 23.334C13.1319 23.334 13.2579 23.3018 13.3702 23.2402C13.4824 23.1786 13.5774 23.0897 13.6462 22.9817L16.4443 18.591C20.8969 19.1448 22.9062 20.5656 22.9062 21.4297C22.9062 22.7044 19.031 24.4766 13.0039 24.4766Z"
                                fill="#0B7BE5"
                              />
                              <path
                                d="M13.0039 4.62109C10.9038 4.62109 9.19531 6.32963 9.19531 8.42969C9.19531 10.5297 10.9038 12.2383 13.0039 12.2383C15.104 12.2383 16.8125 10.5297 16.8125 8.42969C16.8125 6.32963 15.104 4.62109 13.0039 4.62109ZM13.0039 10.7148C11.7439 10.7148 10.7188 9.68972 10.7188 8.42969C10.7188 7.16965 11.7439 6.14453 13.0039 6.14453C14.2639 6.14453 15.2891 7.16965 15.2891 8.42969C15.2891 9.68972 14.2639 10.7148 13.0039 10.7148Z"
                                fill="#0B7BE5"
                              />
                            </svg>
                          </span>
                          <a>Itahari-6, Paruhang Chowk, Nepal</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <ul className="footer__link">
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/terms-and-conditions">
                      terms &amp; condition
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="l__container">
              <div className="row">
                <div className="col-md-6">
                  <p>© 2024 Blue Fox Pvt Ltd. All Rights Reserved.</p>
                </div>
                <div className="col-md-6">
                  <ul className="icon">
                    <li>
                      <a
                        href="https://www.tiktok.com/@bluefoxpvt"
                        target="_blank"
                      >
                        <i className="fa-brands fa-tiktok" />
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.link/xgrexh" target="_blank">
                        <i className="fa-brands fa-whatsapp" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/bluefoxpvtltd"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/bluefoxpvtltd"
                        target="_blank"
                      >
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div
          aria-labelledby="enquiryModalLabel"
          className="modal fade"
          id="enquiryModal"
          tabIndex={-1}
          style={{ display: "none" }}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  aria-label="Close"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  type="button"
                />
                <section className="banner">
                  <div className="banner__enquiry">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-lg-6">
                        <div className="banner__enquiry--form">
                          <div className="section__title">
                            <span>Have a Project in Mind</span>
                            <h2>tell us a bit more</h2>
                          </div>
                          <Hover_Testimonial />
                        </div>
                      </div>
                      <div className="col-lg-5 offset-lg-1">
                        <div className="banner__enquiry--info d-none d-lg-block">
                          <div className="banner__enquiry--info-card">
                            <div className="section__title">
                              <span>We would love to hear from you</span>
                              <h2>get in touch</h2>
                            </div>
                            <ul>
                              <li>
                                <span className="icon">
                                  <img alt="" src="/call.svg" />
                                </span>
                                <div>
                                  <h6>Our Phone Number</h6>
                                  <p>
                                    <a href="tel:9817303073">9817303073</a>
                                  </p>
                                </div>
                              </li>
                              <li>
                                <span className="icon">
                                  <img alt="" src="/envolove.svg" />
                                </span>
                                <div>
                                  <h6>Our Email</h6>
                                  <p>
                                    <a href="mailto:bluefoxpvtltd@gmail.com">
                                      bluefoxpvtltd@gmail.com
                                    </a>
                                  </p>
                                </div>
                              </li>
                              <li>
                                <span className="icon">
                                  <img alt="" src="/location.svg" />
                                </span>
                                <div>
                                  <h6>Office Address</h6>
                                  <p>Itahari-6, Paruhang Chowk, Nepal</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="mb__whatsapp">
          <a href="https://wa.link/cyfhz1" target="_blank">
            <img alt="whatsapp" className="logo" src="/whatsapp.svg" />
          </a>
        </div>
      </body>
    </html>
  );
}
