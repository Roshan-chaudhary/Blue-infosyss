"use client";
import { MuiTelInput } from "mui-tel-input";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
const Hover_Testimonial = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNum: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => console.log(formData), [formData]);
  const handleChange = (field) => (event) => {
    const value = event.target ? event.target.value : event; // For MuiTelInput
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phoneNum, subject, message } = formData;

    if (!name || !email || !phoneNum || !subject || !message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);
      setStatus(null);

      // Simulate email sending with EmailJS
      const response = await emailjs.send(
        "service_fty7kym",
        "template_bx1c16n",
        { name, email, phoneNum, subject, message },
        "XvpIimULRPrM9_PGj"
      );

      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phoneNum: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus(
        "An error occurred while sending the message. Please try again."
      );
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form" id="enqForm" method="POST" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form__group">
            <input
              className="form-control"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange("name")}
              required
              type="text"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form__group">
            <input
              className="form-control"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange("email")}
              required
              type="email"
            />
          </div>
        </div>
        <div className="col-md-6">
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
            <select
              className="w-full outline rounded outline-[#86b6fe93] focus:outline-[#86b7fe] px-[10px] outline-[1px] h-[44px]"
              name="subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  subject: e.target.value,
                })
              }
              required
            >
              <option value="">---Service---</option>
              <option value="Website Development">Website Development</option>
              <option value="App Development">App Development</option>
              <option value="System/Software Development">
                System/Software Development
              </option>
              <option value="UI/UX">UI/UX</option>
              <option value="Search Engine Optimization (SEO)">
                Search Engine Optimization (SEO)
              </option>
              <option value="Social Media Marketing (SMM)">
                Social Media Marketing (SMM)
              </option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Content Writing">Content Writing</option>
              <option value="Pay Per Click">Pay Per Click</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form__group">
            <textarea
              className="form-control"
              name="message"
              placeholder="Write a Message *"
              value={formData.message}
              onChange={handleChange("message")}
              required
              rows="5"
            />
          </div>
        </div>
        <div className="col-md-12">
          <button
            className="l__button l__button--primary"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
        {status && (
          <div className="col-md-12 mt-3">
            <p className="form__status text-blue-500">{status}</p>
          </div>
        )}
      </div>
    </form>
  );
};

export default Hover_Testimonial;
