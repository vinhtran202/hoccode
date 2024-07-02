import React, { useRef } from "react";
import { useGlobalState } from "../GlobalStateProvider.jsx";
import emailjs from "emailjs-com";
import { useAuth0 } from "@auth0/auth0-react";

const ContactUs = () => {
  const { state, setState } = useGlobalState();
  const formRef = useRef(null);
  const { logout, isAuthenticated } = useAuth0();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          const formData = new FormData(formRef.current);
          setState({
            ...state,
            contactInfo: {
              name: formData.get("user_name"),
              email: formData.get("user_email"),
              message: formData.get("message"),
            },
          });
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send email.");
        }
      );
  };

  return (
    isAuthenticated && (
      <div className="w-full max-w-lg m-auto mt-5">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          <input
            type="text"
            name="user_name"
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            placeholder="Your name..."
          />
          <input
            type="email"
            name="user_email"
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            placeholder="Your email..."
          />
          <textarea
            name="message"
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            placeholder="Your message..."
          />
          <input
            type="submit"
            value="Send"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          />
        </form>
      </div>
    )
  );
};

export default ContactUs;
