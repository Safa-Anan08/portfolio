"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { gsap } from "gsap";

export default function ContactFooter() {
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
  });

  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-left-card", {
        x: -80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".contact-form", {
        x: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const showToast = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setToast(true);

    setTimeout(() => setToast(false), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (!formData.name || !formData.email) {
      showToast("Please fill Name & Email", "error");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        showToast("Thank you for contacting 🎉 🎉🎉   Will contact you soon ✨", "success");

        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
        });
      } else {
        showToast("Failed to send message", "error");
      }
    } catch {
      showToast("Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    {
      title: "EMAIL",
      subtitle: "safaanan8@gmail.com",
      icon: <Mail size={22} />,
      link: "mailto:safaanan8@gmail.com",
    },
    {
      title: "LINKEDIN",
      subtitle: "Safa Anan",
      icon: <FaLinkedinIn size={18} />,
      link: "https://linkedin.com",
    },
    {
      title: "WHATSAPP",
      subtitle: "Safa Anan",
      icon: <FaWhatsapp size={18} />,
      link: "https://wa.me/8801533380769",
    },
  ];

  const services = [
    "Mobile App",
    "Website Design",
    "Branding",
    "Webflow development",
    "App design",
    "Wordpress",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f6f3ea] py-18 px-4 md:px-10"
    >
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8d77ab]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5E5547]">
            Get in Touch
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[4px] text-[#7B7264]">
            Contact Me
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[340px_1fr]">

          {/* LEFT */}
          <div className="space-y-6">
            {socials.map((item, i) => (
              <div
                key={i}
                className="contact-left-card group relative flex items-center gap-4 rounded-3xl border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur-xl"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#8d77ab]">
                  {item.icon}
                </div>

                <div className="relative z-10 flex-1">
                  <h3 className="text-[11px] tracking-[3px] text-[#7B7264]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#5E5547]">
                    {item.subtitle}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    className="mt-3 flex items-center gap-2 text-sm font-medium text-[#5E5547]"
                  >
                    Write me <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="contact-form rounded-[36px] border border-white/40 bg-white/60 px-6 py-10 md:px-12 md:py-14 backdrop-blur-2xl shadow-xl">

            <form onSubmit={handleSubmit} className="space-y-10">

              <div className="grid gap-10 md:grid-cols-2">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="border-b border-gray-400 bg-transparent pb-3 outline-none"
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="border-b border-gray-400 bg-transparent pb-3 outline-none"
                />
              </div>

              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className="w-full border-b border-gray-400 bg-transparent pb-3 outline-none"
              />

              <div className="flex flex-wrap gap-3">
                {services.map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() =>
                      setFormData((p) => ({ ...p, service: s }))
                    }
                    className={`rounded-full border border-gray-400 px-4 py-2 text-sm text-gray-700 ${
                      formData.service === s
                        ? "bg-[#8d77ab] text-white"
                        : "bg-[#f9f6e6]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-[#8d77ab] px-7 py-3 text-white"
              >
                {loading ? "Sending..." : "Send Me"}
              </button>

            </form>
          </div>

        </div>
      </div>

      {/* CENTER TOAST */}
      {toast && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setToast(false)}
          />

          <div className="relative w-[320px] rounded-2xl bg-white p-6 text-center shadow-xl">

            <h3
              className={`text-lg font-semibold ${
                toastType === "error"
                  ? "text-red-500"
                  : "text-[#5E5547]"
              }`}
            >
              {toastMessage}
            </h3>

            <button
              onClick={() => setToast(false)}
              className="mt-5 w-full rounded-xl bg-[#8d77ab] py-2 text-white"
            >
              OK
            </button>

          </div>
        </div>
      )}
    </section>
  );
}