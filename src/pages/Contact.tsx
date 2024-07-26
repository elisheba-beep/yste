import { useState } from "react";
import Wrapper from "../components/Wrapper";

export default function Contact() {
  // initial form data
  const initialFormData = {
    fullname: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (event: {
    target: { name: string; value: string | number };
  }) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (event: { preventDefault: any }) => {
    event.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    let noErr = 0;
    for (let i = 0; i < Object.values(newErrors).length; i++) {
      if (Object.values(newErrors)[i].length != 0) {
        noErr++;
      }
    }
    if (noErr === 0) {
      alert(
        `Full name: ${formData.fullname}, Email: ${formData.email}, Message: ${formData.message}`
      );
      console.log("Form submitted successfully!");
      resetForm();
    } else {
      console.log(`Form submission failed
             due to validation errors.`);
    }
    console.log(Object.values(newErrors));
    console.log(noErr);
  };
  // validate form
  const validateForm = (data: {
    fullname: string;
    email: string;
    phoneNumber: string;
    subject?: string;
    message: string;
    username?: string;
  }) => {
    const errors = {
      fullname: "",
      email: "",
      phoneNumber: "",
      message: "",
    };

    if (!data.fullname.trim()) {
      errors.fullname = "Name is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }

    if (!data.phoneNumber) {
      errors.phoneNumber = "Password is required";
    } else if (data.phoneNumber.length !== 11) {
      errors.phoneNumber = `Phone number must be 11 characters long`;
    }

    if (!data.message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  // reset form
  const resetForm = () => {
    setFormData(initialFormData);
  };
  return (
    <Wrapper>
      <div className="flex w-full font-primaryRegular gap-4">
        {/* contact info */}
        <div className="w-1/2">
          <h3 className="font-primaryBold">CONTACT INFO</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

          <div className="flex my-4 gap-2">
            {/* office */}
            <div>
              <h3 className="font-primaryBold">OFFICE</h3>
              <p>730 Glenstone Ave 65802, Springfield, US</p>
              <p>+123 222 333 44</p>
              <p>info@yourinfo.com</p>
            </div>
            {/* management */}
            <div>
              <h3 className="font-primaryBold">MANAGEMENT</h3>
              <p>730 Glenstone Ave 65802, Springfield, US</p>
              <p>+123 666 777 88</p>
              <p>info@yourinfo.com</p>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="w-1/2">
          <h3 className="font-primaryBold">ANY QUESTIONS?</h3>
          <p>Use the form below to get in touch with us</p>

          <form onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <div>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="Your full name*"
                  className="border-gray-200 my-2 outline-none border-2 rounded-md p-2"
                />
                {errors.fullname && (
                  <p className="text-red-500 font-primaryRegular">
                    {errors.fullname}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Write your email here*"
                  className="border-gray-200 my-2 outline-none border-2 rounded-md p-2"
                />
                {errors.email && (
                  <p className="text-red-500 font-primaryRegular">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <input
              type="tel"
              name="phoneNumber"
              pattern="\d{11,14}"
              min={11}
              max={14}
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone number*"
              className="border-gray-200 my-2 outline-none border-2 rounded-md p-2 w-full"
            />
            {errors.phoneNumber && (
              <span className="text-red-500 font-primaryRegular">
                {errors.phoneNumber}
              </span>
            )}
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Write your subject here"
              className="border-gray-200 my-2 outline-none border-2 rounded-md p-2 w-full"
            />
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here*"
              className="border-gray-200 my-2 outline-none border-2 rounded-md p-2 w-full"
            />
            {errors.message && (
              <span className="text-red-500 font-primaryRegular">
                {errors.message}
              </span>
            )}
            <div>
              <button
                type="submit"
                className="rounded-3xl w-1/6 h-10 bg-white text-black border-2 border-gray-700 hover:text-white hover:bg-black my-4"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        <div></div>
      </div>
    </Wrapper>
  );
}
