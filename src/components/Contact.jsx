import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

// Replace with your deployed Apps Script URL once you set it up
const SHEETS_URL = import.meta.env.VITE_SHEETS_URL || ""

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Save to Google Sheets if URL is configured
    if (SHEETS_URL) {
      try {
        await fetch(SHEETS_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
        });
      } catch (_) { /* non-blocking */ }
    }

    // Also send via EmailJS
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID  || process.env.serviceId,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || process.env.templateId,
      {
        from_name:  form.name,
        to_name:    "Saumy Sharma",
        from_email: form.email,
        to_email:   "saumysharma007@gmail.com",
        message:    form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || process.env.secret
    ).then(() => {
      setLoading(false);
      alert("Thank you for your message. I will get back to you soon!");
      setForm({ name: "", email: "", message: "" });
    }, () => {
      setLoading(false);
      alert("Something went wrong. Please try again later.");
    });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.5, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Enquiry</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to discuss?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
            />
          </label>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 py-3 px-8 outline-none
                       w-fit text-white font-bold shadow-md shadow-primary rounded-xl
                       hover:from-purple-500 hover:to-indigo-500 transition-all duration-200"
          >
            {loading ? "Sending…" : "Send Message"}
          </button>
        </form>

        {/* Direct contact info */}
        <div className="mt-10 p-5 rounded-xl bg-white/[0.03] border border-purple-500/20">
          <p className="text-secondary text-[13px] font-semibold uppercase tracking-wider mb-3">Direct Contact</p>
          <a
            href="mailto:saumysharma007@gmail.com"
            className="flex items-center gap-3 text-white hover:text-purple-300 transition-colors group"
          >
            <span className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <span className="text-[14px] font-medium break-all">saumysharma007@gmail.com</span>
          </a>
        </div>

        <div className="mt-8">
          <p className={styles.sectionHeadText}>Connect With Me</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="https://drive.google.com/file/d/1keBbvYzpu1JOj9Mjzojxx5v_bp6Vf8md/view?usp=sharing"
               target="_blank" rel="noopener noreferrer"
               className="bg-gradient-to-r from-pink-500 to-blue-500 py-3 px-6 rounded-lg text-white font-semibold hover:shadow-lg transition-shadow duration-300">
              Resume
            </a>
            <a href="https://github.com/saumy007?tab=repositories"
               target="_blank" rel="noopener noreferrer"
               className="bg-gradient-to-r from-pink-500 to-blue-500 py-3 px-6 rounded-lg text-white font-semibold hover:shadow-lg transition-shadow duration-300">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/saumy-sharma/"
               target="_blank" rel="noopener noreferrer"
               className="bg-gradient-to-r from-pink-500 to-blue-500 py-3 px-6 rounded-lg text-white font-semibold hover:shadow-lg transition-shadow duration-300">
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
