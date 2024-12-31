import React from "react";
import Form_Contact from "@/components/Form_Contact";
const page = () => {
  return (
    <div>
      <div style={{ minHeight: "50vh" }}>
        <div className="site-main">
          <div className="l__container">
            <section className="contact overflow">
              <div className="section__title text-center">
                <h1 className="text-black">contact us</h1>
              </div>
            </section>
          </div>
          <section className="contact__form">
            <div className="l__container">
              <div className="contact__form-- overflow">
                <div className="row">
                  <div className="col-12"></div>
                  <div className="col-lg-7">
                    <h2 className="title">Get In Touch</h2>
                    <h6 className="subtitle">
                      We are Here For You. Can we Help ?
                    </h6>
                    <Form_Contact />
                  </div>
                  <div className="col-lg-5">
                    <div className="contact__form--img d-none d-lg-block">
                      <img src="/contact.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="contact__form--info">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
                    <div className="col">
                      <div className="contact__form--info--">
                        <div className="icon">
                          <img src="/phone.svg" alt="" />
                        </div>
                        <div className="content">
                          <h3>Our Phone Number</h3>
                          <h4>
                            <a href="tel:9817303073">9817303073</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="contact__form--info--">
                        <div className="icon">
                          <img src="/mail.svg" alt="" />
                        </div>
                        <div className="content">
                          <h3>our Email</h3>
                          <h4>
                            <a href="mailto:bluefoxpvtltd@gmail.com">
                              bluefoxpvtltd@gmail.com
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="contact__form--info--">
                        <div className="icon">
                          <img src="/office.svg" alt="" />
                        </div>
                        <div className="content">
                          <h3>Our Office</h3>
                          <h4>Itahari-6, Paruhang Chowk, Nepal</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sticky__social d-none d-sm-block">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/bluefoxpvtltd"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={29}
                        height={29}
                        viewBox="0 0 29 29"
                        fill="none"
                      >
                        <path
                          d="M14.5 0C6.4923 0 0 6.53149 0 14.5875C0 21.8674 5.30173 27.9014 12.2349 29V18.8052H8.55151V14.5875H12.2349V11.3736C12.2349 7.71466 14.3999 5.697 17.7106 5.697C19.2971 5.697 20.9589 5.98149 20.9589 5.98149V9.56892H19.126C17.3278 9.56892 16.7651 10.6952 16.7651 11.8492V14.5846H20.7835L20.1411 18.8023H16.7651V28.9971C23.6983 27.9044 29 21.8689 29 14.5875C29 6.53149 22.5077 0 14.5 0Z"
                          fill="#F6F6F6"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/bluefoxpvtltd"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={27}
                        height={27}
                        viewBox="0 0 27 27"
                        fill="none"
                      >
                        <path
                          d="M26.913 7.96918C26.8979 6.8355 26.6853 5.7131 26.2848 4.65218C25.9375 3.7573 25.407 2.94458 24.7273 2.26596C24.0475 1.58734 23.2334 1.05774 22.3371 0.710999C21.288 0.317865 20.1798 0.10529 19.0595 0.0823263C17.6172 0.0179622 17.1599 0 13.4985 0C9.83713 0 9.36784 1.00371e-07 7.93597 0.0823263C6.81621 0.105458 5.70849 0.318031 4.65993 0.710999C3.76341 1.0575 2.94922 1.58702 2.26944 2.26567C1.58966 2.94432 1.05926 3.75716 0.712183 4.65218C0.317605 5.69867 0.105138 6.8048 0.0839627 7.92278C0.0194913 9.36423 0 9.82077 0 13.4761C0 17.1313 -1.11709e-08 17.5983 0.0839627 19.0293C0.106453 20.149 0.317859 21.2536 0.712183 22.3029C1.05985 23.1977 1.59064 24.0102 2.27064 24.6885C2.95065 25.3669 3.76492 25.8962 4.66143 26.2426C5.70711 26.6515 6.81503 26.8793 7.93747 26.9162C9.38133 26.9805 9.83863 27 13.5 27C17.1614 27 17.6307 27 19.0625 26.9162C20.1828 26.8942 21.2911 26.6821 22.3401 26.289C23.2362 25.9419 24.0501 25.4121 24.7298 24.7335C25.4095 24.055 25.9401 23.2425 26.2878 22.3478C26.6821 21.3 26.8935 20.1954 26.916 19.0742C26.9805 17.6343 27 17.1777 27 13.521C26.997 9.86567 26.997 9.40165 26.913 7.96918V7.96918ZM13.4895 20.3885C9.66021 20.3885 6.55808 17.2915 6.55808 13.4686C6.55808 9.64564 9.66021 6.54868 13.4895 6.54868C15.3278 6.54868 17.0909 7.27773 18.3908 8.57547C19.6907 9.8732 20.4209 11.6333 20.4209 13.4686C20.4209 15.3038 19.6907 17.0639 18.3908 18.3617C17.0909 19.6594 15.3278 20.3885 13.4895 20.3885V20.3885ZM20.6968 7.90631C20.4845 7.90651 20.2742 7.8649 20.078 7.78388C19.8819 7.70286 19.7036 7.58401 19.5535 7.43414C19.4034 7.28426 19.2843 7.1063 19.2031 6.91044C19.122 6.71459 19.0803 6.50467 19.0805 6.29272C19.0805 6.08091 19.1223 5.87119 19.2035 5.67551C19.2847 5.47983 19.4037 5.30203 19.5537 5.15226C19.7037 5.0025 19.8818 4.88369 20.0778 4.80264C20.2738 4.72159 20.4839 4.67987 20.6961 4.67987C20.9082 4.67987 21.1183 4.72159 21.3143 4.80264C21.5103 4.88369 21.6884 5.0025 21.8384 5.15226C21.9884 5.30203 22.1074 5.47983 22.1886 5.67551C22.2698 5.87119 22.3116 6.08091 22.3116 6.29272C22.3116 7.18483 21.5889 7.90631 20.6968 7.90631Z"
                          fill="white"
                        />
                        <path
                          d="M13.5 18C15.9853 18 18 15.9853 18 13.5C18 11.0147 15.9853 9 13.5 9C11.0147 9 9 11.0147 9 13.5C9 15.9853 11.0147 18 13.5 18Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.link/xgrexh" target="_blank">
                      <svg
                        fill="#fff"
                        height={27}
                        width={27}
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 308 308"
                        xmlSpace="preserve"
                        stroke="#fff"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g id="XMLID_468_">
                            {" "}
                            <path
                              id="XMLID_469_"
                              d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"
                            />{" "}
                            <path
                              id="XMLID_470_"
                              d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"
                            />{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@bluefoxpvt"
                      target="_blank"
                    >
                      <svg
                        fill="#fff"
                        width={27}
                        height={27}
                        viewBox="0 0 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#fff"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <title>tiktok</title>{" "}
                          <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z" />{" "}
                        </g>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="customer wow fadeInUp animated"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  WebkitAnimationDuration: "1s",
                  MozAnimationDuration: "1s",
                  animationDuration: "1s",
                }}
              >
                <div className="row">
                  <div className="col-md-4">
                    <div className="customer__card">
                      <h3>For Sales</h3>
                      <p>
                        <a href="tel:9802755604">9802755604</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="customer__card">
                      <h3>For Career</h3>
                      <p>
                        <a href="tel:9802755603">9802755603</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="customer__card">
                      <h3>For Support</h3>
                      <p>
                        <a href="tel:9817303073">9817303073</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="l__container">
            <section
              className="map p__tb--b wow zoomIn animated"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                WebkitAnimationDuration: "1s",
                MozAnimationDuration: "1s",
                animationDuration: "1s",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.0833394609763!2d87.27561023858863!3d26.66549257209264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d74c533b773%3A0x9feb33f6bd3009fd!2sBlue%20Fox%20Pvt%20Ltd!5e0!3m2!1sen!2sbd!4v1735115058254!5m2!1sen!2sbd"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
