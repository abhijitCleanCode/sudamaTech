import React, { useState } from 'react';
import { images } from '../constants';
import { client } from '../client';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-center mb-8">Contact US</h2>

      <div className="flex justify-evenly items-center flex-wrap w-[60%] mx-auto my-8 space-y-4 ">
        <div className="flex items-center bg-pink-50 p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl w-full md:w-auto">
          <img src={images.email} alt="email" className="w-10 h-10 mr-4" />
          <a href="mailto:sudamasolutionstechnologies@gmail.com" className="font-medium break-all">sudamasolutionstechnologies@gmail.com</a>
        </div>

        <div className="flex items-center bg-blue-50 p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl w-full md:w-auto">
          <img src={images.mobile} alt="phone" className="w-10 h-10 mr-4" />
          <a href="tel:+91 (123) 456-7890" className="font-medium">+91 99570 52223</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="w-[60%] mx-auto flex flex-col space-y-4">
          <div className="flex flex-col">
            <input
              className="p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex flex-col">
            <input
              className="p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex flex-col">
            <textarea
              className="p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              rows="5"
            />
          </div>
          <button
            type="button"
            className="p-3 bg-secondary text-white rounded-lg font-medium"
            onClick={handleSubmit}
          >
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-3xl font-bold text-center">
            Thank you for getting in touch!
          </h3>
        </div>
      )}

      <div className="mx-auto text-center py-5 font-semiboldbold text-lg">
        <p>Copyright &copy; 2024 Sudama Solutions Technologies Pvt Ltd. All rights reserved.</p>
      </div>

      <br />
    </>
  );
};

export default Footer;
