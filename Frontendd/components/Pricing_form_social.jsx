"use client";
import { MuiTelInput } from "mui-tel-input";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Pricing_form_social = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNum: "",
    number_of_graphics: "",
    business_category: "",
    number_of_videos: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phoneNum,
      number_of_videos,
      business_category,
      number_of_graphics,
    } = formData;

    if (
      !name ||
      !phoneNum ||
      !number_of_videos ||
      !business_category ||
      !number_of_graphics ||
      !email
    ) {
      setStatus("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);
      // Simulate API submission
      const response = await emailjs.send(
        "service_fty7kym",
        "template_nqyyp6l",
        {
          name,
          email,
          phoneNum,
          number_of_videos,
          business_category,
          number_of_graphics,
        },
        "XvpIimULRPrM9_PGj"
      );

      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phoneNum: "",
          number_of_graphics: "",
          business_category: "",
          number_of_videos: "",
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setStatus("Failed to submit the form. Please try again.");
      console.error(error);
    }
  };

  return (
    <form className="form" method="POST" id="seofForm" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form__group mb-4">
            <label htmlFor="" className="form-label">
              Name/Business Name <span>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              value={formData.name}
              onChange={(e) => handleChange("name")(e.target.value)}
              required
              placeholder="Choose your name or business name"
            />
          </div>
          <div className="form__group mb-4">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              value={formData.email}
              onChange={(e) => handleChange("email")(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form__group mb-4">
            <label htmlFor="" className="form-label">
              No. of Graphics <span>*</span>
            </label>
            <select
              name="number_of_graphics"
              className="form-select"
              value={formData.number_of_graphics}
              onChange={(e) =>
                handleChange("number_of_graphics")(e.target.value)
              }
              required
            >
              <option value="">Select no. of Graphics</option>
              <option value="1 - 2">1 - 2</option>
              <option value="3 - 4">3 - 4</option>
              <option value="5 - 8">5 - 8</option>
              <option value="More than 8">More than 8</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form__group mb-4">
            <label htmlFor="" className="form-label">
              Phone No. <span>*</span>
            </label>
            <MuiTelInput
              value={formData.phoneNum}
              onChange={handleChange("phoneNum")}
              label="Phone Number *"
              fullWidth
              defaultCountry="NP"
              required
              sx={{ height: "44px" }}
            />
          </div>
          <div className="form__group mb-4">
            <label htmlFor="" className="form-label">
              Business Category <span>*</span>
            </label>
            <select
              name="business_category"
              className="form-select"
              value={formData.business_category}
              onChange={(e) =>
                handleChange("business_category")(e.target.value)
              }
              required
            >
              <option value="">Choose a Category</option>
              <option value="Travels and Trekking">Travels and Trekking</option>
              <option value="Consultancy">Consultancy</option>
              <option value="E-Commerce">E-Commerce</option>
              <option value="Hospitals and Healthcare">
                Hospitals and Healthcare
              </option>
              <option value="Educational Institutional">
                Educational Institutional
              </option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="form__group mb-4">
            <label htmlFor="" className="form-label">
              No. of Videos/GIFs
            </label>
            <input
              type="number"
              className="form-control"
              value={formData.number_of_videos}
              onChange={(e) => handleChange("number_of_videos")(e.target.value)}
              placeholder="Enter number of Videos"
            />
          </div>
        </div>
        <div className="col-md-12">
          <button
            className="l__button l__button--primary"
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>
      </div>
      {status && <p className="form-status text-blue-500 mt-3">{status}</p>}
    </form>
  );
};

export default Pricing_form_social;
