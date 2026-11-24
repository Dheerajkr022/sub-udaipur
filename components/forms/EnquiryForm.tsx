"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { enquiryFormSchema, questionTopics } from "@/lib/validations/enquiry";
import {
  Loader2,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Mail,
  User,
  Phone,
  Send,
  Info,
  ShieldCheck,
} from "lucide-react";

type EnquiryFormInput = z.input<typeof enquiryFormSchema>;

interface EnquiryFormProps {
  sourcePage?: string;
  className?: string;
  hideHeader?: boolean;
}

function EnquiryFormContent({ sourcePage = "/", className, hideHeader = false }: EnquiryFormProps) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<EnquiryFormInput>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      sourcePage,
      fullName: "",
      email: "",
      phone: "",
      questionTopic: "General property question",
      message: "",
      privacyAcknowledgement: false,
    },
  });

  useEffect(() => {
    const topicParam = searchParams.get("topic");
    if (topicParam && (questionTopics as readonly string[]).includes(topicParam)) {
      setValue("questionTopic", topicParam as any);
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: EnquiryFormInput) => {
    setSubmitStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit enquiry");
      }

      setSubmitStatus("success");
      reset();
    } catch (err: any) {
      setSubmitStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again or contact us directly.");
    }
  };

  return (
    <div className={`bg-white border border-[#E8E2D8] rounded-xs shadow-sm overflow-hidden ${className || ""}`}>
      {/* Form Header */}
      {!hideHeader && (
        <div className="bg-[#0D2E24] text-white p-5 sm:p-6 border-b border-[#185241]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-[#D4AF67] flex items-center gap-1.5 font-semibold">
              <HelpCircle className="w-3.5 h-3.5 text-[#D4AF67]" />
              UDAIPUR GATEWAY ENQUIRY DESK
            </span>
            <span className="text-[10px] text-[#E8E2D8]/60 font-mono hidden sm:inline">
              General Information
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
            Ask a <span className="text-[#D4AF67] italic font-serif font-normal">Question</span>
          </h3>
          <p className="text-xs sm:text-[13px] text-[#E8E2D8]/80 mt-1 leading-relaxed font-light">
            Send a question about the information shown on this website. Our team is happy to help with general property guidance.
          </p>
        </div>
      )}

      {/* Form Body */}
      <div className="p-5 sm:p-6">
        {submitStatus === "success" ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 bg-[#0D2E24] text-[#D4AF67] rounded-full flex items-center justify-center mx-auto border border-[#B8934E]/40">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-xl text-[#111827]">Enquiry Received</h4>
            <div className="bg-[#FAF8F5] border border-[#E8E2D8] p-4 rounded-xs text-xs sm:text-sm text-[#4B5563] leading-relaxed text-left max-w-md mx-auto">
              <p className="font-medium text-[#111827] mb-2">Thank you!</p>
              <p>
                Your enquiry has been received by Udaipur Gateway. Our team will respond to your general information question. For current availability, rates or reservations, please contact The Ananta Udaipur directly.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSubmitStatus("idle")}
              className="mt-4 px-6 py-2.5 bg-[#0D2E24] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#185241] transition-colors"
            >
              Ask Another Question
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
            {submitStatus === "error" && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xs flex items-start gap-2.5 text-xs text-red-700">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <p>{errorMessage}</p>
              </div>
            )}

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold uppercase font-mono tracking-wider text-[#374151] mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Your full name"
                  {...register("fullName")}
                  className={`w-full pl-9 pr-3 py-2.5 bg-[#FAF8F5] border text-xs sm:text-sm text-[#111827] rounded-xs focus:bg-white focus:outline-none transition-colors ${
                    errors.fullName ? "border-red-400 focus:border-red-500" : "border-[#E8E2D8] focus:border-[#B8934E]"
                  }`}
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-[11px] text-red-500">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase font-mono tracking-wider text-[#374151] mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  {...register("email")}
                  className={`w-full pl-9 pr-3 py-2.5 bg-[#FAF8F5] border text-xs sm:text-sm text-[#111827] rounded-xs focus:bg-white focus:outline-none transition-colors ${
                    errors.email ? "border-red-400 focus:border-red-500" : "border-[#E8E2D8] focus:border-[#B8934E]"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-[11px] text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase font-mono tracking-wider text-[#374151] mb-1">
                Phone Number <span className="text-[10px] text-gray-400 font-normal lowercase">(optional)</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  {...register("phone")}
                  className={`w-full pl-9 pr-3 py-2.5 bg-[#FAF8F5] border text-xs sm:text-sm text-[#111827] rounded-xs focus:bg-white focus:outline-none transition-colors ${
                    errors.phone ? "border-red-400 focus:border-red-500" : "border-[#E8E2D8] focus:border-[#B8934E]"
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-[11px] text-red-500">{errors.phone.message}</p>
              )}
            </div>

            {/* Question Topic Dropdown */}
            <div>
              <label htmlFor="questionTopic" className="block text-xs font-semibold uppercase font-mono tracking-wider text-[#374151] mb-1">
                Question Topic <span className="text-red-500">*</span>
              </label>
              <select
                id="questionTopic"
                {...register("questionTopic")}
                className={`w-full px-3 py-2.5 bg-[#FAF8F5] border text-xs sm:text-sm text-[#111827] rounded-xs focus:bg-white focus:outline-none transition-colors ${
                  errors.questionTopic ? "border-red-400 focus:border-red-500" : "border-[#E8E2D8] focus:border-[#B8934E]"
                }`}
              >
                {questionTopics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
              {errors.questionTopic && (
                <p className="mt-1 text-[11px] text-red-500">{errors.questionTopic.message}</p>
              )}
            </div>

            {/* Message / Free-text Question */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase font-mono tracking-wider text-[#374151] mb-1">
                Your Question / Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Write your question about property facilities, room categories, location, or general information..."
                {...register("message")}
                className={`w-full p-3 bg-[#FAF8F5] border text-xs sm:text-sm text-[#111827] rounded-xs focus:bg-white focus:outline-none transition-colors resize-none ${
                  errors.message ? "border-red-400 focus:border-red-500" : "border-[#E8E2D8] focus:border-[#B8934E]"
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-[11px] text-red-500">{errors.message.message}</p>
              )}
            </div>

            {/* Privacy Acknowledgement Checkbox */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("privacyAcknowledgement")}
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#0D2E24] focus:ring-[#B8934E]"
                />
                <span className="text-xs text-[#52525B] leading-snug">
                  I acknowledge that Udaipur Gateway is an independent information service and I agree to the{" "}
                  <Link href="/privacy" className="text-[#8F6E2E] hover:underline font-medium" target="_blank">
                    Privacy Policy
                  </Link>
                  . <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.privacyAcknowledgement && (
                <p className="mt-1 text-[11px] text-red-500">{errors.privacyAcknowledgement.message}</p>
              )}
            </div>

            {/* Form Notice Box */}
            <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D8] rounded-xs text-[11px] text-[#64748B] leading-relaxed flex items-start gap-2">
              <Info className="w-3.5 h-3.5 text-[#B8934E] shrink-0 mt-0.5" />
              <p className="m-0">
                <strong>Form Notice:</strong> This form sends your question to Udaipur Gateway. It does not contact The Ananta Udaipur, check live room availability, obtain a quote, make a reservation or process payment. For current rates, availability and bookings, contact the property directly.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitStatus === "submitting"}
              className="w-full py-3.5 px-4 bg-[#0D2E24] hover:bg-[#185241] text-white text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] rounded-xs transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {submitStatus === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#D4AF67]" />
                  <span>Submitting Enquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#D4AF67]" />
                  <span>SUBMIT GENERAL ENQUIRY</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export function EnquiryForm(props: EnquiryFormProps) {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center bg-white border border-[#E8E2D8] rounded-xs">
          <Loader2 className="w-6 h-6 animate-spin mx-auto text-[#B8934E]" />
          <p className="text-xs text-gray-400 mt-2">Loading enquiry form...</p>
        </div>
      }
    >
      <EnquiryFormContent {...props} />
    </Suspense>
  );
}
