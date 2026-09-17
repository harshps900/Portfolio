"use client";

import { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Github, Linkedin, Palette, Mail, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const schema = yup.object({
  name: yup.string().required("Please enter your name"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  message: yup.string().required("Message cannot be empty").min(10, "Message is too short"),
}).required();

type FormData = yup.InferType<typeof schema>;

const Contact = forwardRef<HTMLElement>((props, ref) => {
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
    <section id="contact" ref={ref} className="w-full py-20 bg-[#09090b] text-[#f4f4f5] border-b border-zinc-800/60">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto px-6 max-w-6xl space-y-12"
      >
        
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-widest">
            / Contact & Inquiry
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
            Get In Touch
          </h2>
          <p className="text-zinc-400 font-normal text-sm max-w-xl">
            Have a project, job opportunity, or technical inquiry? Send a message below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Clean Contact Form */}
          <div className="lg:col-span-7 bg-[#121215] border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-semibold text-zinc-100">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-400">Name</label>
                  <input 
                    {...register("name")}
                    placeholder="Your Name"
                    className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-emerald-500 transition-colors"
                  />
                  {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-400">Email</label>
                  <input 
                    {...register("email")}
                    placeholder="your@email.com"
                    className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-emerald-500 transition-colors"
                  />
                  {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-400">Message</label>
                <textarea 
                  {...register("message")}
                  rows={5}
                  placeholder="Tell me about your project, idea, or inquiry..."
                  className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-emerald-500 transition-colors resize-none"
                />
                {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-zinc-100 text-zinc-950 hover:bg-white text-sm font-medium transition-all disabled:opacity-50 cursor-pointer shadow-sm"
              >
                {isSubmitting ? "Submitting..." : "Submit Message ➔"}
              </motion.button>

              <AnimatePresence mode="wait">
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800 text-emerald-300 text-center text-xs font-medium"
                  >
                    Message sent successfully! I will get back to you promptly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Direct Contact Info & Social Links */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card */}
            <motion.div whileHover={{ y: -2 }} className="p-6 rounded-2xl bg-[#121215] border border-zinc-800/80 hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.08)] transition-all space-y-3">
              <div className="flex items-center gap-2 text-emerald-400">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-medium uppercase tracking-wider">Direct Email</span>
              </div>
              <a
                href="mailto:harshps900@gmail.com"
                className="text-base sm:text-lg font-semibold text-zinc-100 hover:text-emerald-400 transition-colors block break-all"
              >
                harshps900@gmail.com
              </a>
              <p className="text-zinc-400 text-xs">
                Always open for software roles, contract work, and engineering projects.
              </p>
            </motion.div>

            {/* Social Links Cards */}
            <div className="space-y-3">
              <motion.a 
                whileHover={{ x: 4 }}
                href="https://www.linkedin.com/in/harsh-pal-singh-dev/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#121215] border border-zinc-800/80 hover:border-emerald-500/50 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                  <div>
                    <p className="text-sm font-medium text-zinc-200 group-hover:text-white">LinkedIn</p>
                    <p className="text-xs text-zinc-500">harsh-pal-singh-dev</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
              </motion.a>

              <motion.a 
                whileHover={{ x: 4 }}
                href="https://github.com/harshps900" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#121215] border border-zinc-800/80 hover:border-emerald-500/50 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                  <div>
                    <p className="text-sm font-medium text-zinc-200 group-hover:text-white">GitHub</p>
                    <p className="text-xs text-zinc-500">harshps900</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
              </motion.a>

              <motion.a 
                whileHover={{ x: 4 }}
                href="https://www.behance.net/educationtime" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#121215] border border-zinc-800/80 hover:border-emerald-500/50 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Palette className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                  <div>
                    <p className="text-sm font-medium text-zinc-200 group-hover:text-white">Behance</p>
                    <p className="text-xs text-zinc-500">educationtime</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
              </motion.a>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
