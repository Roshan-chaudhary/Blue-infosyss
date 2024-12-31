"use client";
import { MuiTelInput } from "mui-tel-input";
import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
const Form_Contact = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNum: "",
    subject: "",
    message: "",
  });

  const handleChange = (field) => (value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message, phoneNum, subject } = formData;
    try {
      setLoading(true);
      const response = await emailjs.send(
        "service_fty7kym",
        "template_bx1c16n",
        { name, email, phoneNum, subject, message },
        "XvpIimULRPrM9_PGj"
      );
      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setStatus("Failed to send message. Please try again later.");
      console.log(error);
    }
  };

  //   useEffect(() => console.log(formData), [formData]);
  return (
    <form
      className="form"
      method="POST"
      encType="multipart/form-data"
      id="publicContact"
      onSubmit={handleSubmit}
    >
      <input
        type="hidden"
        name="csrfmiddlewaretoken"
        defaultValue="10ffnxUApEvI5vi4ncumYrpSoabBzYBMiECkmj8oWc7gVRL6ujtpemepdtiyT5Cv"
      />
      <div className="row">
        <div className="col-md-6">
          <div className="form__group">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name *"
              name="full_name"
              value={formData.name}
              onChange={(e) => handleChange("name")(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form__group">
            <input
              type="email"
              className="form-control"
              placeholder="Email *"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange("email")(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-md-6 mb-sm-3 md-xs-3">
          <div className="form__group">
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
        </div>
        <div className="col-md-6">
          <div className="form__group">
            <input
              type="text"
              className="form-control"
              placeholder="Subject *"
              name="subject"
              value={formData.subject}
              onChange={(e) => handleChange("subject")(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form__group">
            <textarea
              className="form-control"
              placeholder="Message *"
              name="message"
              value={formData.message}
              onChange={(e) => handleChange("message")(e.target.value)}
              required
            />
          </div>
        </div>
        {status && <p className=" text-blue-500">{status}</p>}
        <div className="col-md-12">
          <button
            disabled={loading}
            type="submit"
            className="l__button l__button--primary"
          >
            {loading ? "Sending" : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form_Contact;
