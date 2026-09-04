"use client";

import Header from "@/common/Header";
import Footer from "@/common/Footer";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Mail, Github, Linkedin,Instagram} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const schema = yup.object({
  name: yup.string().required("Please enter your name"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message cannot be empty").min(10, "Message too short"),
}).required();

type FormData = yup.InferType<typeof schema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xzdkjdzo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setIsSuccess(true);
        reset();
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 8000);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f7f4eb] text-[#000000] pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-5xl space-y-16">
          
          {/* Header Banner */}
          <div className="space-y-4 pt-8 text-center md:text-left">
            <p className="text-zinc-600 font-mono tracking-widest text-sm uppercase font-bold">
              / GET IN TOUCH
            </p>
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-display tracking-tight text-[#000000] uppercase leading-none">
              CONTACT
            </h1>
            <p className="text-zinc-700 font-sans text-base sm:text-lg max-w-2xl leading-relaxed">
              Great products aren&apos;t built by code alone — they&apos;re built through collaboration, creativity, and attention to detail. If you have an idea worth bringing to life, I&apos;d love to help make it happen.
            </p>
          </div>

          {/* Quote Banner */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#000000] text-[#f7f4eb] space-y-4 shadow-xl">
            <p className="text-[#bda682] font-mono text-xs tracking-widest uppercase font-bold">LET&apos;S CONNECT</p>
            <blockquote className="text-2xl sm:text-4xl font-display tracking-wide leading-snug">
              &ldquo;Have a project, job opportunity, or just want to say hi? Drop a message below&rdquo;
            </blockquote>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Form with Dashed Borders */}
            <div className="lg:col-span-7 bg-[#f7f4eb] border-2 border-dashed border-black/30 rounded-3xl p-8 sm:p-12 space-y-6">
              <h2 className="text-3xl font-display text-[#000000]">
                SEND A MESSAGE
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-zinc-700 uppercase tracking-wider">Name</label>
                  <input
                    {...register("name")}
                    placeholder="Your Name"
                    className="w-full bg-transparent border-2 border-dashed border-black/30 rounded-2xl px-5 py-4 text-[#000000] placeholder:text-zinc-400 outline-none focus:border-black transition-colors"
                  />
                  {errors.name && <p className="text-red-500 text-xs font-mono font-bold">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-zinc-700 uppercase tracking-wider">Email</label>
                  <input
                    {...register("email")}
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-2 border-dashed border-black/30 rounded-2xl px-5 py-4 text-[#000000] placeholder:text-zinc-400 outline-none focus:border-black transition-colors"
                  />
                  {errors.email && <p className="text-red-500 text-xs font-mono font-bold">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-zinc-700 uppercase tracking-wider">Message</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell me about your project, idea, or inquiry..."
                    className="w-full bg-transparent border-2 border-dashed border-black/30 rounded-2xl px-5 py-4 text-[#000000] placeholder:text-zinc-400 outline-none focus:border-black transition-colors resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-xs font-mono font-bold">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-[#000000] text-[#f7f4eb] font-display text-xl tracking-wider hover:bg-[#bda682] hover:text-[#000000] transition-colors duration-300 disabled:opacity-50 cursor-pointer shadow-lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit ➔"}
                </button>

                <AnimatePresence mode="wait">
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-5 rounded-2xl bg-[#000000] text-[#bda682] text-center font-mono text-sm border border-[#bda682]"
                    >
                      Message sent successfully! I will respond promptly.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            {/* Direct Email & Social Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-3xl bg-[#000000] text-[#f7f4eb] space-y-4 shadow-xl">
                <div className="flex items-center gap-3 text-[#bda682]">
                  <Mail className="w-5 h-5" />
                  <span className="font-mono text-xs uppercase tracking-widest font-bold">DIRECT EMAIL</span>
                </div>
                <div className="pt-1">
                  <a
                    href="mailto:harshpalsingh565@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl font-mono font-bold text-[#f7f4eb] hover:text-[#bda682] transition-colors break-all block underline decoration-[#bda682]/50 underline-offset-4"
                  >
                    harshpalsingh565@gmail.com
                  </a>
                </div>
                <p className="text-zinc-400 text-xs font-sans">
                  Always responsive for project inquiries, freelance work, and engineering roles.
                </p>
              </div>

              <div className="space-y-4 font-display text-lg">
                <a
                  href="https://www.linkedin.com/in/harsh-pal-singh-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-2xl bg-[#f7f4eb] border-2 border-dashed border-black/30 hover:border-black flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <Linkedin className="w-6 h-6 text-[#000000] group-hover:text-[#bda682] transition-colors" />
                    <span>LINKEDIN ➔</span>
                  </div>
                </a>

                <a
                  href="https://github.com/harshps900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-2xl bg-[#f7f4eb] border-2 border-dashed border-black/30 hover:border-black flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <Github className="w-6 h-6 text-[#000000] group-hover:text-[#bda682] transition-colors" />
                    <span>GITHUB ➔</span>
                  </div>
                </a>

                {/* <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-2xl bg-[#f7f4eb] border-2 border-dashed border-black/30 hover:border-black flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    {/* < className="w-6 h-6 text-[#000000] group-hover:text-[#bda682] transition-colors" /> */}
                    {/* <span>Behance ➔</span>
                  </div>
                </a> */} 
              </div>

            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
