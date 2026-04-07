"use client";

import { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Send, User, Mail, MessageSquare, Github, Linkedin, Palette, MapPin, AtSign, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const schema = yup.object({
    name: yup.string().required("Please enter your name"),
    email: yup.string().email("Invalid email").required("Email is required"),
    subject: yup.string().required("Please select inquiry type"),
    message: yup.string().required("Message cannot be empty").min(10, "Too short"),
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
        <section id="contact" ref={ref} className="w-full py-40 bg-[#020617] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6"
                    >
                        Let&apos;s build <br /> something <span className="text-emerald-500">together</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-emerald-500 font-black tracking-widest uppercase text-xs"
                    >
                        Available for meaningful collaborations
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Form Part */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-zinc-900/30 border border-white/5 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Full Name</label>
                                    <input 
                                        {...register("name")}
                                        placeholder="Enter your name"
                                        className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-zinc-700 outline-none focus:border-emerald-500/50 transition-colors"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs font-bold">{errors.name.message}</p>}
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Email Address</label>
                                    <input 
                                        {...register("email")}
                                        placeholder="Enter your email"
                                        className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-zinc-700 outline-none focus:border-emerald-500/50 transition-colors"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs font-bold">{errors.email.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Inquiry Type</label>
                                <select 
                                    {...register("subject")}
                                    className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-emerald-500/50 transition-colors appearance-none"
                                >
                                    <option value="">Select Inquiry Type</option>
                                    <option value="Project Collaboration">Project Collaboration</option>
                                    <option value="Full-time Role">Full-time Role</option>
                                    <option value="Freelance">Freelance</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Message</label>
                                <textarea 
                                    {...register("message")}
                                    rows={5}
                                    placeholder="Tell me about your project or inquiry..."
                                    className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-zinc-700 outline-none focus:border-emerald-500/50 transition-colors resize-none"
                                />
                                {errors.message && <p className="text-red-500 text-xs font-bold">{errors.message.message}</p>}
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full py-5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-black text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                            >
                                {isSubmitting ? "Sending Inquiry..." : "Send Inquiry"}
                            </button>

                            <AnimatePresence mode="wait">
                                {isSuccess && (
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.9 }} 
                                        animate={{ opacity: 1, scale: 1 }} 
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-center space-y-2 backdrop-blur-xl"
                                    >
                                        <p className="text-sm font-black uppercase tracking-widest">Inquiry Received</p>
                                        <p className="text-lg font-bold">We have received the details, we will contact you in email.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>

                    {/* Info Part */}
                    <div className="lg:col-span-5 space-y-6">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-blue-900/10 border border-blue-500/20 p-8 rounded-3xl"
                        >
                            <AtSign size={32} className="text-emerald-500 mb-6" />
                            <h4 className="text-xl font-black text-white mb-2">Direct Channel</h4>
                            <p className="text-zinc-500 font-medium">harshpalsingh565@gmail.com</p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-6">
                            <a 
                                href="https://github.com/harshps900" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl space-y-4 hover:border-emerald-500/50 transition-colors group"
                            >
                                <Github size={24} className="text-zinc-600 group-hover:text-emerald-500 transition-colors" />
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">GitHub</p>
                                    <p className="text-white font-bold text-sm">harshps900</p>
                                </div>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/harsh-pal-singh-dev/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl space-y-4 hover:border-blue-500/50 transition-colors group"
                            >
                                <Linkedin size={24} className="text-zinc-600 group-hover:text-blue-500 transition-colors" />
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">LinkedIn</p>
                                    <p className="text-white font-bold text-sm">Harsh Pal Singh</p>
                                </div>
                            </a>
                            <a 
                                href="https://www.behance.net/educationtime" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl space-y-4 hover:border-pink-500/50 transition-colors group"
                            >
                                <Palette size={24} className="text-zinc-600 group-hover:text-pink-500 transition-colors" />
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Behance</p>
                                    <p className="text-white font-bold text-sm">educationtime</p>
                                </div>
                            </a>
                            <div className="p-8 bg-emerald-900/10 border border-emerald-500/10 rounded-3xl space-y-4">
                                <Phone size={24} className="text-emerald-500" />
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Phone</p>
                                    <p className="text-white font-bold text-sm">7748982114</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

Contact.displayName = "Contact";

export default Contact;
