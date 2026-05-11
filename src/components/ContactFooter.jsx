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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
      });
    } else {
      alert("Failed to send message");
    }
  };

  const socials = [
    {
      title: "EMAIL",
      subtitle: "safaanan8@gmail.com",
      icon: <Mail size={22} />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=safaanan8@gmail.com",
    },
    {
      title: "LINKEDIN",
      subtitle: "Safa Anan",
      icon: <FaLinkedinIn size={18} />,
      link: "https://www.linkedin.com/in/safa-anan8",
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
    "Graphic design",
    "Wordpress",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f6f3ea] py-24 px-4 md:px-10"
    >
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8d77ab]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
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
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#8d77ab]/10 to-[#c5c7bc]/10 opacity-0 group-hover:opacity-100 transition" />

                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#8d77ab] shadow-md">
                  {item.icon}
                </div>

                <div className="relative z-10 flex-1">
                  <h3 className="text-[11px] tracking-[3px] text-[#7B7264]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-[#5E5547] break-all">
                    {item.subtitle}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center gap-2 text-sm font-medium text-[#5E5547] hover:text-[#8d77ab]"
                  >
                    Write me <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="contact-form rounded-[36px] border border-white/40 bg-white/60 px-6 py-10 md:px-12 md:py-14 backdrop-blur-2xl shadow-xl">

            <div className="mb-12 text-center">
              <p className="text-sm text-[#7B7264]">
                Have a nice project? Reach out and let's chat.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">

              <div className="grid gap-10 md:grid-cols-2">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-b border-[#c5c7bc] bg-transparent pb-3 outline-none focus:border-[#8d77ab]"
                  placeholder="Name"
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-b border-[#c5c7bc] bg-transparent pb-3 outline-none focus:border-[#8d77ab]"
                  placeholder="Email"
                />
              </div>

              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full border-b border-[#c5c7bc] bg-transparent pb-3 outline-none focus:border-[#8d77ab]"
                placeholder="Company"
              />

              <div className="flex flex-wrap gap-3">
                {services.map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, service: s })
                    }
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      formData.service === s
                        ? "bg-[#8d77ab] text-white"
                        : "bg-[#f9f6e6] hover:bg-[#8d77ab] hover:text-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                className="rounded-full bg-[#8d77ab] px-7 py-3 text-white"
              >
                Send Me
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}