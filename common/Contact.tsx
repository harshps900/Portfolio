"use client";

import { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Github, Linkedin, Palette, AtSign, Phone } from "lucide-react";
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
        <section id="contact" ref={ref} className="w-full py-12 md:py-20 lg:py-24 bg-[#fbfaf7] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <div className="mb-10">
                    <h2 
                        className="text-6xl md:text-8xl font-bold text-[#1c1b1a] tracking-tighter leading-none mb-6 font-serif-luxury"
                    >
                        Let&apos;s build <br /> something <span className="text-gold-gradient text-glow-gold font-serif-luxury font-bold">together</span>
                    </h2>
                    <p 
                        className="text-[#bda682] font-mono tracking-[0.25em] text-[10px] uppercase font-bold"
                    >
                        Available for collaborations and commissions
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    {/* Form Part */}
                    <div 
                        className="lg:col-span-7 bg-white border border-zinc-200/80 rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(189,166,130,0.06)]"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">Full Name</label>
                                    <input 
                                        {...register("name")}
                                        placeholder="Enter your name"
                                        className="w-full bg-zinc-50/50 border border-zinc-200/80 rounded px-6 py-4 text-[#1c1b1a] placeholder:text-zinc-400 outline-none focus:border-[#bda682]/60 transition-colors"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs font-bold">{errors.name.message}</p>}
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">Email Address</label>
                                    <input 
                                        {...register("email")}
                                        placeholder="Enter your email"
                                        className="w-full bg-zinc-50/50 border border-zinc-200/80 rounded px-6 py-4 text-[#1c1b1a] placeholder:text-zinc-400 outline-none focus:border-[#bda682]/60 transition-colors"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs font-bold">{errors.email.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">Inquiry Type</label>
                                <select 
                                    {...register("subject")}
                                    className="w-full bg-zinc-50/50 border border-zinc-200/80 rounded px-6 py-4 text-[#1c1b1a] outline-none focus:border-[#bda682]/60 transition-colors appearance-none"
                                >
                                    <option value="">Select Inquiry Type</option>
                                    <option value="Project Collaboration">Project Collaboration</option>
                                    <option value="Full-time Role">Full-time Role</option>
                                    <option value="Freelance">Freelance</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">Message</label>
                                <textarea 
                                    {...register("message")}
                                    rows={5}
                                    placeholder="Tell me about your project or inquiry..."
                                    className="w-full bg-zinc-50/50 border border-zinc-200/80 rounded px-6 py-4 text-[#1c1b1a] placeholder:text-zinc-400 outline-none focus:border-[#bda682]/60 transition-colors resize-none"
                                />
                                {errors.message && <p className="text-red-500 text-xs font-bold">{errors.message.message}</p>}
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full py-5 rounded bg-[#bda682] hover:bg-[#bda682]/90 text-white font-black text-xs uppercase tracking-widest hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 shadow-lg shadow-[#bda682]/10 cursor-pointer"
                            >
                                {isSubmitting ? "Sending Inquiry..." : "Send Inquiry"}
                            </button>

                            <AnimatePresence mode="wait">
                                {isSuccess && (
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.95 }} 
                                        animate={{ opacity: 1, scale: 1 }} 
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="p-6 rounded bg-[#bda682]/10 border border-[#bda682]/20 text-[#bda682] text-center space-y-2 backdrop-blur-xl"
                                    >
                                        <p className="text-xs font-mono tracking-widest uppercase">Inquiry Received</p>
                                        <p className="text-sm font-bold">Details successfully transmitted. I will correspond shortly.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>

                    {/* Info Part */}
                    <div className="lg:col-span-5 space-y-6">
                        
                        {/* Direct Channel */}
                        <div 
                            className="bg-[#bda682]/5 border border-[#bda682]/20 p-8 rounded-3xl"
                        >
                            <AtSign size={32} className="text-[#bda682] mb-6" />
                            <h4 className="text-xl font-bold text-[#1c1b1a] mb-2 font-serif-luxury">Direct Channel</h4>
                            <p className="text-zinc-600 font-mono text-sm hover:text-[#bda682] transition-colors">harshpalsingh565@gmail.com</p>
                        </div>

                        {/* Social grid */}
                        <div className="grid grid-cols-2 gap-6">
                            <a 
                                href="https://github.com/harshps900" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-8 bg-white border border-zinc-200/80 rounded-3xl space-y-4 hover:border-[#bda682]/40 transition-colors group shadow-sm hover:shadow"
                            >
                                <Github className="w-6 h-6 text-zinc-400 group-hover:text-[#bda682] transition-colors" />
                                <div>
                                    <p className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">GitHub</p>
                                    <p className="text-[#1c1b1a] font-bold text-xs font-mono">harshps900</p>
                                </div>
                            </a>
                            
                            <a 
                                href="https://www.linkedin.com/in/harsh-pal-singh-dev/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-8 bg-white border border-zinc-200/80 rounded-3xl space-y-4 hover:border-[#bda682]/40 transition-colors group shadow-sm hover:shadow"
                            >
                                <Linkedin className="w-6 h-6 text-zinc-400 group-hover:text-[#bda682] transition-colors" />
                                <div>
                                    <p className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">LinkedIn</p>
                                    <p className="text-[#1c1b1a] font-bold text-xs font-mono">Harsh Pal Singh</p>
                                </div>
                            </a>
                            
                            <a 
                                href="https://www.behance.net/educationtime" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-8 bg-white border border-zinc-200/80 rounded-3xl space-y-4 hover:border-[#bda682]/40 transition-colors group shadow-sm hover:shadow"
                            >
                                <Palette className="w-6 h-6 text-zinc-400 group-hover:text-[#bda682] transition-colors" />
                                <div>
                                    <p className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">Behance</p>
                                    <p className="text-[#1c1b1a] font-bold text-xs font-mono">educationtime</p>
                                </div>
                            </a>

                            <div className="p-8 bg-[#bda682]/5 border border-[#bda682]/15 rounded-3xl space-y-4 shadow-sm">
                                <Phone className="w-6 h-6 text-[#bda682]" />
                                <div>
                                    <p className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">Phone</p>
                                    <p className="text-[#1c1b1a] font-bold text-xs font-mono">7748982114</p>
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
