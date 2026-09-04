"use client";

import { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Github, Linkedin, Palette, Mail, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const schema = yup.object({
    name: yup.string().required("Please enter your name"),
    email: yup.string().email("Invalid email").required("Email is required"),
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
        <section id="contact" ref={ref} className="w-full py-20 md:py-28 bg-[#f7f4eb] text-[#11140e] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl space-y-16">
                
                {/* Section Header */}
                <div className="space-y-4 text-center md:text-left">
                    <p className="text-[#bda682] font-mono tracking-widest text-sm uppercase font-bold">
                        / CONTACT & COLLABORATION
                    </p>
                    <h2 className="text-6xl sm:text-8xl md:text-9xl font-display tracking-tight text-[#11140e] uppercase leading-none">
                        GET IN <span className="text-[#bda682]">TOUCH</span>
                    </h2>
                    <p className="text-zinc-700 font-sans text-base sm:text-lg max-w-2xl leading-relaxed">
                        Great products aren&apos;t built by code alone — they&apos;re built through collaboration, creativity, and attention to detail. If you have an idea worth bringing to life, I&apos;d love to help make it happen.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-4">
                    
                    {/* Dashed Border Contact Form */}
                    <div className="lg:col-span-7 bg-[#f7f4eb] border-2 border-dashed border-[#11140e]/30 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
                        <h3 className="text-3xl font-display text-[#11140e]">
                            SEND A MESSAGE
                        </h3>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-wider">Name</label>
                                    <input 
                                        {...register("name")}
                                        placeholder="Your Name"
                                        className="w-full bg-transparent border-2 border-dashed border-[#11140e]/30 rounded-2xl px-5 py-4 text-[#11140e] placeholder:text-zinc-400 outline-none focus:border-[#11140e] transition-colors"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs font-mono font-bold">{errors.name.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-wider">Email</label>
                                    <input 
                                        {...register("email")}
                                        placeholder="your@email.com"
                                        className="w-full bg-transparent border-2 border-dashed border-[#11140e]/30 rounded-2xl px-5 py-4 text-[#11140e] placeholder:text-zinc-400 outline-none focus:border-[#11140e] transition-colors"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs font-mono font-bold">{errors.email.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-wider">Message</label>
                                <textarea 
                                    {...register("message")}
                                    rows={5}
                                    placeholder="Tell me about your project, idea, or inquiry..."
                                    className="w-full bg-transparent border-2 border-dashed border-[#11140e]/30 rounded-2xl px-5 py-4 text-[#11140e] placeholder:text-zinc-400 outline-none focus:border-[#11140e] transition-colors resize-none"
                                />
                                {errors.message && <p className="text-red-500 text-xs font-mono font-bold">{errors.message.message}</p>}
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full py-4 rounded-2xl bg-[#181c12] text-[#f7f4eb] font-display text-xl tracking-wider hover:bg-[#bda682] hover:text-[#181c12] transition-colors duration-300 disabled:opacity-50 cursor-pointer shadow-lg"
                            >
                                {isSubmitting ? "Submitting..." : "Submit Message ➔"}
                            </button>

                            <AnimatePresence mode="wait">
                                {isSuccess && (
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.95 }} 
                                        animate={{ opacity: 1, scale: 1 }} 
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="p-5 rounded-2xl bg-[#181c12] text-[#bda682] text-center font-mono text-sm border border-[#bda682]"
                                    >
                                        Message sent successfully! I will respond promptly.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>

                    {/* Direct Contact Info & Social Links */}
                    <div className="lg:col-span-5 space-y-8">
                        
                        {/* Direct Email Card */}
                        <div className="p-8 rounded-3xl bg-[#181c12] text-[#f7f4eb] space-y-4 shadow-xl">
                            <div className="flex items-center gap-3 text-[#bda682]">
                                <Mail className="w-6 h-6" />
                                <span className="font-mono text-xs uppercase tracking-widest font-bold">DIRECT EMAIL</span>
                            </div>
                            <h4 className="text-2xl sm:text-3xl font-display tracking-wide break-all text-[#f7f4eb]">
                                harshps900@gmail.com
                            </h4>
                            <p className="text-zinc-400 text-xs font-sans">
                                Always responsive for project inquiries, freelance work, and engineering roles.
                            </p>
                        </div>

                        {/* Social Links Cards */}
                        <div className="space-y-4">
                            <a 
                                href="https://www.linkedin.com/in/harsh-pal-singh-dev/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-6 rounded-2xl bg-[#f7f4eb] border-2 border-dashed border-[#11140e]/30 hover:border-[#11140e] flex items-center justify-between transition-colors group"
                            >
                                <div className="flex items-center gap-4">
                                    <Linkedin className="w-6 h-6 text-[#11140e] group-hover:text-[#bda682] transition-colors" />
                                    <div>
                                        <p className="font-display text-xl text-[#11140e]">LINKEDIN</p>
                                        <p className="text-xs font-mono text-zinc-500">harsh-pal-singh-dev</p>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-[#11140e] transition-colors" />
                            </a>

                            <a 
                                href="https://github.com/harshps900" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-6 rounded-2xl bg-[#f7f4eb] border-2 border-dashed border-[#11140e]/30 hover:border-[#11140e] flex items-center justify-between transition-colors group"
                            >
                                <div className="flex items-center gap-4">
                                    <Github className="w-6 h-6 text-[#11140e] group-hover:text-[#bda682] transition-colors" />
                                    <div>
                                        <p className="font-display text-xl text-[#11140e]">GITHUB</p>
                                        <p className="text-xs font-mono text-zinc-500">harshps900</p>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-[#11140e] transition-colors" />
                            </a>

                            <a 
                                href="https://www.behance.net/educationtime" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-6 rounded-2xl bg-[#f7f4eb] border-2 border-dashed border-[#11140e]/30 hover:border-[#11140e] flex items-center justify-between transition-colors group"
                            >
                                <div className="flex items-center gap-4">
                                    <Palette className="w-6 h-6 text-[#11140e] group-hover:text-[#bda682] transition-colors" />
                                    <div>
                                        <p className="font-display text-xl text-[#11140e]">BEHANCE</p>
                                        <p className="text-xs font-mono text-zinc-500">educationtime</p>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-[#11140e] transition-colors" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
});

Contact.displayName = "Contact";

export default Contact;

