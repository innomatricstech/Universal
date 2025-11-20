// // src/components/Contact/Contact.jsx
// import React, { useEffect, useRef, useState } from "react";
// import Button from "../common/Button/Button";
// import { FiMapPin, FiPhoneCall, FiMail, FiMap } from "react-icons/fi";
// import emailjs from "@emailjs/browser";
// import "./Contact.css";

// const ContactPage = () => {
//   const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_iz40ben";
//   const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_fcb7s4u";
//   const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "7nUEqtIS6zt-0J7X8";

//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [statusMsg, setStatusMsg] = useState(null);
//   const formRef = useRef(null);

//   useEffect(() => {
//     try { if (PUBLIC_KEY) emailjs.init(PUBLIC_KEY); } catch (err) { console.warn("EmailJS init failed:", err); }

//     window.scrollTo(0, 0);
//     const reveals = Array.from(document.querySelectorAll(".reveal"));
//     if ("IntersectionObserver" in window && reveals.length) {
//       const obs = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) { entry.target.classList.add("reveal--active"); obs.unobserve(entry.target); }
//         });
//       }, { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
//       reveals.forEach((r) => obs.observe(r));
//       return () => obs.disconnect();
//     } else {
//       reveals.forEach((r) => r.classList.add("reveal--active"));
//     }
//   }, [PUBLIC_KEY]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((p) => ({ ...p, [name]: value }));
//   };

//   const validate = () => {
//     if (!formData.name.trim()) return "Please enter your name.";
//     if (!formData.email.trim()) return "Please enter your email.";
//     if (!formData.subject) return "Please select a subject.";
//     if (!formData.message.trim()) return "Please enter a message.";
//     if (formData.phone && !/^[0-9+\-()\s]{7,20}$/.test(formData.phone.trim())) return "Please enter a valid phone number.";
//     return null;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isSubmitting) return;

//     const v = validate();
//     if (v) { setStatusMsg({ type: "error", text: v }); return; }

//     setIsSubmitting(true); setStatusMsg(null);

//     const templateParams = {
//       name: formData.name.trim(),
//       email: formData.email.trim(),
//       phone: formData.phone.trim() || "N/A",
//       subject: formData.subject,
//       message: formData.message.trim(),
//     };

//     try {
//       // we already called emailjs.init(publicKey) in useEffect — use send with 3 args
//       await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
//       setStatusMsg({ type: "success", text: "Message sent successfully — we will contact you soon." });
//       setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
//       formRef.current?.querySelector("input[name='name']")?.focus();
//     } catch (err) {
//       console.error("EmailJS Error:", err);
//       setStatusMsg({ type: "error", text: "Failed to send message. Try again later or email universalventuresglobal@gmail.com" });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="cv-contact-wrapper">
//       <div className="cv-contact-inner">
//         <div className="cv-grid">
//           <aside className="cv-left-card reveal">
//             <h2 className="cv-brand">UNIVERSAL VENTURES</h2>
//             <p className="cv-lead">Business-first solutions & partnerships. Reach out and let's talk.</p>

//             <div className="cv-info">
//               <div className="cv-info-row">
//                 <FiMapPin className="cv-ic" />
//                 <div>
//                   <h4>OUR OFFICE</h4>
//                   <p>Prestige Trade Tower<br/>Level 11, The Executive Centre<br/>High Grounds, Palace Road<br/>Bangalore 560001</p>
//                 </div>
//               </div>

//               <div className="cv-info-row">
//                 <FiPhoneCall className="cv-ic" />
//                 <div>
//                   <h4>CONTACT</h4>
//                   <p>9972437119 · 9663107119</p>
//                 </div>
//               </div>

//               <div className="cv-info-row">
//                 <FiMail className="cv-ic" />
//                 <div>
//                   <h4>EMAIL</h4>
//                   <p>universalventuresglobal@gmail.com</p>
//                 </div>
//               </div>
//             </div>

//             <hr className="cv-divider" />
//             <h4 className="cv-map-title"><FiMap style={{ marginRight: 8 }} /> FIND US ON THE MAP</h4>
//             <div className="cv-map-box">
//               <iframe
//                 title="office-map"
//                 width="100%"
//                 height="200"
//                 style={{ border: 0 }}
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.256242912509!2d77.58003617602823!3d12.9976582147737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae163ef1eba8b1%3A0xd67660d29f4a9585!2sPrestige%20Trade%20Tower!5e0!3m2!1sen!2sin!4v1705617777000!5m2!1sen!2sin"
//                 loading="lazy"
//                 allowFullScreen
//               />
//             </div>

//             <p className="cv-response-time">We typically reply within 1–2 business days.</p>
//           </aside>

//           <section className="cv-right-card reveal">
//             <h3 className="cv-title">Send Your Inquiry</h3>
//             <p className="cv-sub">Choose a service and tell us how we can help.</p>

//             <form ref={formRef} className="cv-form" onSubmit={handleSubmit} noValidate>
//               <div className="cv-row-2">
//                 <label className="cv-field">
//                   <span className="cv-label">Full Name</span>
//                   <input name="name" value={formData.name} onChange={handleChange} required disabled={isSubmitting} placeholder="Your name" />
//                 </label>

//                 <label className="cv-field">
//                   <span className="cv-label">Email address</span>
//                   <input name="email" type="email" value={formData.email} onChange={handleChange} required disabled={isSubmitting} placeholder="you@company.com" />
//                 </label>
//               </div>

//               <div className="cv-row-2">
//                 <label className="cv-field">
//                   <span className="cv-label">Phone (optional)</span>
//                   <input name="phone" type="tel" value={formData.phone} onChange={handleChange} disabled={isSubmitting} placeholder="+91 9XXXXXXXXX" />
//                 </label>

//                 <label className="cv-field">
//                   <span className="cv-label">Service required</span>
//                   <select name="subject" value={formData.subject} onChange={handleChange} required disabled={isSubmitting}>
//                     <option value="">-- Select --</option>
//                     <option value="business">Business Inquiry</option>
//                     <option value="support">Customer Support</option>
//                     <option value="partnership">Partnership</option>
//                   </select>
//                 </label>
//               </div>

//               <label className="cv-field">
//                 <span className="cv-label">Message</span>
//                 <textarea name="message" rows={5} value={formData.message} onChange={handleChange} required disabled={isSubmitting} placeholder="Tell us about your project or enquiry" />
//               </label>

//               <div className="cv-actions">
//                 <Button type="submit" variant="primary" size="large" disabled={isSubmitting}>
//                   {isSubmitting ? "Sending..." : "Send Inquiry"}
//                 </Button>

//                 <div className="cv-alt-email">or email <a href="mailto:universalventuresglobal@gmail.com">universalventuresglobal@gmail.com</a></div>
//               </div>

//               {statusMsg && (
//                 <div className={`cv-status ${statusMsg.type === "success" ? "cv-success" : "cv-error"}`} role="status">
//                   {statusMsg.text}
//                 </div>
//               )}
//             </form>

//             <p className="cv-privacy">We respect your privacy. Your message is only used to respond to this inquiry.</p>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;
