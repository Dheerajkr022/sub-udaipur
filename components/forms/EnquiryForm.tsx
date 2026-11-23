"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { enquiryFormSchema } from "@/lib/validations/enquiry";
import {
  Loader2,
  CheckCircle2,
  AlertCircle,
  Calendar,
  BedDouble,
  User,
  Smile,
  Send,
  Clock,
  Headset,
  ShieldCheck,
  ChevronDown,
  Plus,
  Minus,
  Building2,
  Mail,
  Phone,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { accommodations } from "@/components/sections/AccommodationSection";

type EnquiryFormInput = z.input<typeof enquiryFormSchema>;

interface EnquiryFormProps {
  sourcePage?: string;
  className?: string;
  hideHeader?: boolean;
}

function formatDisplayDate(dateStr: string) {
  if (!dateStr) return "Select date";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return dateStr;
  }
}

function EnquiryFormContent({ sourcePage = "/", className, hideHeader = false }: EnquiryFormProps) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showNotes, setShowNotes] = useState(false);
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<EnquiryFormInput>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      sourcePage,
      adults: 2,
      children: 0,
      rooms: 1,
      requirement: "",
      checkInDate: "",
      checkOutDate: "",
      accommodationPreference: "",
      fullName: "",
      mobile: "",
      email: "",
    },
  });

  const checkInDate = watch("checkInDate") || "";
  const checkOutDate = watch("checkOutDate") || "";
  const accommodationPreference = watch("accommodationPreference") || "";
  const adults = watch("adults") || 2;
  const children = watch("children") || 0;
  const rooms = watch("rooms") || 1;

  useEffect(() => {
    const roomParam = searchParams.get("room") || searchParams.get("accommodation");
    if (roomParam) {
      const match = accommodations.find(
        (a) => a.name.toLowerCase() === roomParam.toLowerCase()
      );
      if (match) {
        setValue("accommodationPreference", match.name);
      }
    }

    const inDate = searchParams.get("checkInDate");
    if (inDate) setValue("checkInDate", inDate);

    const outDate = searchParams.get("checkOutDate");
    if (outDate) setValue("checkOutDate", outDate);

    const aParam = searchParams.get("adults");
    if (aParam) setValue("adults", parseInt(aParam) || 2);

    const cParam = searchParams.get("children");
    if (cParam) setValue("children", parseInt(cParam) || 0);

    const rParam = searchParams.get("rooms");
    if (rParam) setValue("rooms", parseInt(rParam) || 1);

    const handleStaySelection = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.room) {
        setValue("accommodationPreference", customEvent.detail.room);
      }
      if (customEvent.detail?.checkInDate) setValue("checkInDate", customEvent.detail.checkInDate);
      if (customEvent.detail?.checkOutDate) setValue("checkOutDate", customEvent.detail.checkOutDate);
      if (customEvent.detail?.adults) setValue("adults", customEvent.detail.adults);
      if (customEvent.detail?.children !== undefined) setValue("children", customEvent.detail.children);
      if (customEvent.detail?.rooms) setValue("rooms", customEvent.detail.rooms);
    };

    window.addEventListener("select-stay", handleStaySelection);
    return () => window.removeEventListener("select-stay", handleStaySelection);
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

      if (response.ok && result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.message || "Unable to submit enquiry.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Please check your internet connection and try again.");
    }
  };

  if (submitStatus === "success") {
    return (
      <div className={`bg-white border border-[#E8E2D8] rounded-xs p-6 sm:p-8 text-center max-w-xl mx-auto text-[#18181B] shadow-sm ${className}`}>
        <div className="w-12 h-12 rounded-full bg-[#0D2E24] text-[#D4AF67] flex items-center justify-center mx-auto mb-4 border border-[#B8934E]/30">
          <CheckCircle2 className="h-6 w-6 text-[#D4AF67]" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-[#111827] mb-2">Enquiry Received</h3>
        <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed mb-6 font-light">
          Your stay details request has been received.<br />
          Our concierge team will get in touch with you shortly with available options and rates.
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="px-6 py-2.5 rounded-xs bg-[#0D2E24] hover:bg-[#185241] text-white text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className={`w-full max-w-xl mx-auto ${className}`}>
      {/* Outer Luxury Card */}
      <div className="bg-white border border-[#E8E2D8] rounded-xs shadow-sm overflow-hidden">
        {/* Card Luxury Header */}
        <div className="bg-[#0D2E24] p-4 sm:p-5 text-white border-b border-[#185241]">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF67] flex items-center gap-1.5">
              <Sparkles className="w-2.5 h-2.5" />
              CONCIERGE DESK
            </span>
            <span className="text-[10px] font-mono text-white/60">
              The Ananta Udaipur
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-serif font-bold text-white">
            Plan Your Stay & Inclusions
          </h2>
          <p className="text-xs text-white/70 mt-1 font-light leading-relaxed">
            Submit your preferences for personalised villa options, seasonal rates and amenities guidance.
          </p>
        </div>

        {/* Main Form Fields */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 sm:p-5 space-y-3 bg-[#FAF8F5]">
          {submitStatus === "error" && (
            <div className="p-2.5 bg-red-50 border border-red-200 rounded-xs flex items-start gap-2">
              <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
              <p className="text-xs text-red-700 font-medium">{errorMessage}</p>
            </div>
          )}

          {/* 1. Stay Dates (Check-in & Check-out) */}
          <div className="grid grid-cols-2 gap-2">
            {/* Check-in */}
            <div className="relative">
              <div
                onClick={(e) => {
                  try {
                    (e.currentTarget.querySelector('input[type="date"]') as HTMLInputElement)?.showPicker?.();
                  } catch {}
                }}
                className={`relative bg-white border ${
                  errors.checkInDate ? "border-red-400" : "border-[#E8E2D8] hover:border-[#B8934E]/60"
                } rounded-xs p-2.5 flex items-center justify-between transition-colors cursor-pointer group`}
              >
                <div className="flex items-center gap-2 min-w-0 pointer-events-none">
                  <Calendar className="w-3.5 h-3.5 text-[#B8934E] shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[9px] font-mono uppercase tracking-wider text-[#71717A] leading-tight">
                      Check-in <span className="text-red-500">*</span>
                    </div>
                    <div className="text-xs font-semibold text-[#111827] truncate mt-0.5">
                      {formatDisplayDate(checkInDate)}
                    </div>
                  </div>
                </div>
                <ChevronDown className="w-3 h-3 text-gray-400 shrink-0 pointer-events-none ml-1" />
                <input
                  type="date"
                  min={today}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  {...register("checkInDate")}
                />
              </div>
              {errors.checkInDate && (
                <p className="text-[10px] text-red-600 mt-0.5 pl-1">{errors.checkInDate.message}</p>
              )}
            </div>

            {/* Check-out */}
            <div className="relative">
              <div
                onClick={(e) => {
                  try {
                    (e.currentTarget.querySelector('input[type="date"]') as HTMLInputElement)?.showPicker?.();
                  } catch {}
                }}
                className={`relative bg-white border ${
                  errors.checkOutDate ? "border-red-400" : "border-[#E8E2D8] hover:border-[#B8934E]/60"
                } rounded-xs p-2.5 flex items-center justify-between transition-colors cursor-pointer group`}
              >
                <div className="flex items-center gap-2 min-w-0 pointer-events-none">
                  <Calendar className="w-3.5 h-3.5 text-[#B8934E] shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[9px] font-mono uppercase tracking-wider text-[#71717A] leading-tight">
                      Check-out <span className="text-red-500">*</span>
                    </div>
                    <div className="text-xs font-semibold text-[#111827] truncate mt-0.5">
                      {formatDisplayDate(checkOutDate)}
                    </div>
                  </div>
                </div>
                <ChevronDown className="w-3 h-3 text-gray-400 shrink-0 pointer-events-none ml-1" />
                <input
                  type="date"
                  min={checkInDate || today}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  {...register("checkOutDate")}
                />
              </div>
              {errors.checkOutDate && (
                <p className="text-[10px] text-red-600 mt-0.5 pl-1">{errors.checkOutDate.message}</p>
              )}
            </div>
          </div>

          {/* 2. Room Preference */}
          <div className="relative">
            <div
              className={`relative bg-white border ${
                errors.accommodationPreference
                  ? "border-red-400"
                  : "border-[#E8E2D8] hover:border-[#B8934E]/60"
              } rounded-xs p-2.5 flex items-center justify-between transition-colors cursor-pointer group`}
            >
              <div className="flex items-center gap-2 min-w-0 pointer-events-none">
                <Building2 className="w-3.5 h-3.5 text-[#B8934E] shrink-0" />
                <div className="min-w-0">
                  <div className="text-[9px] font-mono uppercase tracking-wider text-[#71717A] leading-tight">
                    Residence Preference <span className="text-red-500">*</span>
                  </div>
                  <div className="text-xs font-semibold text-[#111827] truncate mt-0.5">
                    {accommodationPreference || "Select Villa or Cottage"}
                  </div>
                </div>
              </div>
              <ChevronDown className="w-3 h-3 text-gray-400 shrink-0 pointer-events-none ml-1" />
              <select
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer bg-white text-[#111827]"
                {...register("accommodationPreference")}
              >
                <option value="" disabled>
                  Select Villa or Cottage
                </option>
                {accommodations.map((a) => (
                  <option key={a.name} value={a.name} className="bg-white text-[#111827]">
                    {a.name} ({a.badge})
                  </option>
                ))}
              </select>
            </div>
            {errors.accommodationPreference && (
              <p className="text-[10px] text-red-600 mt-0.5 pl-1">
                {errors.accommodationPreference.message}
              </p>
            )}
          </div>

          {/* 3. Guests & Rooms */}
          <div className="bg-white border border-[#E8E2D8] rounded-xs grid grid-cols-3 divide-x divide-[#E8E2D8] p-1.5">
            {/* Adults */}
            <div className="flex flex-col items-center justify-center p-1">
              <div className="flex items-center gap-1 mb-1">
                <User className="w-3 h-3 text-[#B8934E]" />
                <span className="text-[10px] font-mono uppercase text-[#71717A]">
                  Adults <span className="text-red-500">*</span>
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 w-full">
                <button
                  type="button"
                  onClick={() => setValue("adults", Math.max(1, adults - 1))}
                  className="w-5 h-5 rounded-xs bg-[#FAF8F5] border border-[#E8E2D8] hover:border-[#B8934E] text-[#111827] flex items-center justify-center cursor-pointer text-xs"
                  aria-label="Decrease adults"
                >
                  <Minus className="w-2.5 h-2.5" />
                </button>
                <span className="w-4 text-center font-bold text-xs text-[#111827]">
                  {adults}
                </span>
                <button
                  type="button"
                  onClick={() => setValue("adults", Math.min(50, adults + 1))}
                  className="w-5 h-5 rounded-xs bg-[#0D2E24] text-white flex items-center justify-center cursor-pointer text-xs"
                  aria-label="Increase adults"
                >
                  <Plus className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex flex-col items-center justify-center p-1">
              <div className="flex items-center gap-1 mb-1">
                <Smile className="w-3 h-3 text-[#B8934E]" />
                <span className="text-[10px] font-mono uppercase text-[#71717A]">Children</span>
              </div>
              <div className="flex items-center justify-center gap-2 w-full">
                <button
                  type="button"
                  onClick={() => setValue("children", Math.max(0, children - 1))}
                  className="w-5 h-5 rounded-xs bg-[#FAF8F5] border border-[#E8E2D8] hover:border-[#B8934E] text-[#111827] flex items-center justify-center cursor-pointer text-xs"
                  aria-label="Decrease children"
                >
                  <Minus className="w-2.5 h-2.5" />
                </button>
                <span className="w-4 text-center font-bold text-xs text-[#111827]">
                  {children}
                </span>
                <button
                  type="button"
                  onClick={() => setValue("children", Math.min(50, children + 1))}
                  className="w-5 h-5 rounded-xs bg-[#0D2E24] text-white flex items-center justify-center cursor-pointer text-xs"
                  aria-label="Increase children"
                >
                  <Plus className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>

            {/* Rooms */}
            <div className="flex flex-col items-center justify-center p-1">
              <div className="flex items-center gap-1 mb-1">
                <BedDouble className="w-3 h-3 text-[#B8934E]" />
                <span className="text-[10px] font-mono uppercase text-[#71717A]">
                  Rooms <span className="text-red-500">*</span>
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 w-full">
                <button
                  type="button"
                  onClick={() => setValue("rooms", Math.max(1, rooms - 1))}
                  className="w-5 h-5 rounded-xs bg-[#FAF8F5] border border-[#E8E2D8] hover:border-[#B8934E] text-[#111827] flex items-center justify-center cursor-pointer text-xs"
                  aria-label="Decrease rooms"
                >
                  <Minus className="w-2.5 h-2.5" />
                </button>
                <span className="w-4 text-center font-bold text-xs text-[#111827]">
                  {rooms}
                </span>
                <button
                  type="button"
                  onClick={() => setValue("rooms", Math.min(50, rooms + 1))}
                  className="w-5 h-5 rounded-xs bg-[#0D2E24] text-white flex items-center justify-center cursor-pointer text-xs"
                  aria-label="Increase rooms"
                >
                  <Plus className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 4. Full Name & Mobile Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <div
                className={`relative bg-white border ${
                  errors.fullName ? "border-red-400" : "border-[#E8E2D8] focus-within:border-[#B8934E]"
                } rounded-xs p-2 flex items-center gap-2`}
              >
                <User className="w-3.5 h-3.5 text-[#B8934E] shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-[9px] font-mono uppercase tracking-wider text-[#71717A] leading-tight">
                    Full Name <span className="text-red-500">*</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Guest name"
                    className="w-full bg-transparent border-none text-xs text-[#111827] placeholder:text-gray-400 focus:outline-none mt-0.5"
                    {...register("fullName")}
                  />
                </div>
              </div>
              {errors.fullName && (
                <p className="text-[10px] text-red-600 mt-0.5 pl-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <div
                className={`relative bg-white border ${
                  errors.mobile ? "border-red-400" : "border-[#E8E2D8] focus-within:border-[#B8934E]"
                } rounded-xs p-2 flex items-center gap-2`}
              >
                <Phone className="w-3.5 h-3.5 text-[#B8934E] shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-[9px] font-mono uppercase tracking-wider text-[#71717A] leading-tight">
                    Mobile Number <span className="text-red-500">*</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[10px] font-mono font-bold text-[#B8934E] border-r border-gray-200 pr-1.5">
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="10-digit mobile"
                      className="w-full bg-transparent border-none text-xs text-[#111827] placeholder:text-gray-400 focus:outline-none"
                      {...register("mobile")}
                    />
                  </div>
                </div>
              </div>
              {errors.mobile && (
                <p className="text-[10px] text-red-600 mt-0.5 pl-1">{errors.mobile.message}</p>
              )}
            </div>
          </div>

          {/* 5. Email Address */}
          <div>
            <div
              className={`relative bg-white border ${
                errors.email ? "border-red-400" : "border-[#E8E2D8] focus-within:border-[#B8934E]"
              } rounded-xs p-2 flex items-center gap-2`}
            >
              <Mail className="w-3.5 h-3.5 text-[#B8934E] shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[9px] font-mono uppercase tracking-wider text-[#71717A] leading-tight">
                  Email Address <span className="text-red-500">*</span>
                </div>
                <input
                  type="email"
                  placeholder="contact@example.com"
                  className="w-full bg-transparent border-none text-xs text-[#111827] placeholder:text-gray-400 focus:outline-none mt-0.5"
                  {...register("email")}
                />
              </div>
            </div>
            {errors.email && (
              <p className="text-[10px] text-red-600 mt-0.5 pl-1">{errors.email.message}</p>
            )}
          </div>

          {/* 6. Special Request */}
          <div>
            {!showNotes ? (
              <button
                type="button"
                onClick={() => setShowNotes(true)}
                className="text-xs text-[#B8934E] hover:underline flex items-center gap-1 cursor-pointer py-1 font-mono tracking-wider uppercase"
              >
                <Plus className="w-3 h-3" /> Add special request or meal plan (optional)
              </button>
            ) : (
              <div className="bg-white border border-[#E8E2D8] focus-within:border-[#B8934E] rounded-xs p-2">
                <textarea
                  rows={2}
                  maxLength={300}
                  placeholder="Special requests, anniversary celebrations, meal plans..."
                  className="w-full bg-transparent border-none text-xs text-[#111827] placeholder:text-gray-400 focus:outline-none resize-none leading-relaxed"
                  {...register("requirement")}
                />
              </div>
            )}
          </div>

          {/* 7. Action CTA Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={submitStatus === "submitting"}
              className="w-full py-3.5 px-5 rounded-xs bg-[#0D2E24] hover:bg-[#185241] disabled:opacity-50 text-white font-medium text-xs sm:text-[13px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all duration-300 shadow-xs cursor-pointer group"
            >
              {submitStatus === "submitting" ? (
                <Loader2 className="h-4 w-4 animate-spin text-[#D4AF67]" />
              ) : (
                <Send className="w-3.5 h-3.5 text-[#D4AF67] group-hover:translate-x-0.5 transition-transform" />
              )}
              <span>{submitStatus === "submitting" ? "TRANSMITTING ENQUIRY..." : "REQUEST STAY DETAILS"}</span>
              {submitStatus !== "submitting" && (
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF67] group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </div>

          {/* Footnote */}
          <div className="flex flex-col items-center justify-center gap-1 pt-1 text-[10px] text-[#71717A] text-center font-light">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8934E]" />
              <span>Submitting an enquiry does not confirm a reservation or booking</span>
            </div>
            <span className="text-[9px] text-[#71717A]/80">Independent travel information & enquiry assistance service</span>
          </div>

          {/* 3 Trust Badges */}
          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#E8E2D8]">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#B8934E] shrink-0" />
              <div className="text-left min-w-0">
                <div className="text-[10px] font-bold text-[#111827] truncate">Quick Response</div>
                <div className="text-[9px] text-[#71717A] truncate">Within 24 Hours</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Headset className="w-3.5 h-3.5 text-[#B8934E] shrink-0" />
              <div className="text-left min-w-0">
                <div className="text-[10px] font-bold text-[#111827] truncate">Concierge Care</div>
                <div className="text-[9px] text-[#71717A] truncate">Dedicated Support</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B8934E] shrink-0" />
              <div className="text-left min-w-0">
                <div className="text-[10px] font-bold text-[#111827] truncate">Secure & Private</div>
                <div className="text-[9px] text-[#71717A] truncate">Your data is safe</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export function EnquiryForm(props: EnquiryFormProps) {
  return (
    <Suspense
      fallback={
        <div
          className={`bg-white border border-[#E8E2D8] rounded-xs p-8 max-w-xl mx-auto w-full min-h-[400px] flex items-center justify-center shadow-xs ${
            props.className || ""
          }`}
        >
          <Loader2 className="w-8 h-8 animate-spin text-[#B8934E]" />
        </div>
      }
    >
      <EnquiryFormContent {...props} />
    </Suspense>
  );
}
