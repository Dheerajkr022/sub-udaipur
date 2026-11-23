"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { enquiryFormSchema } from "@/lib/validations/enquiry";
import {
  Loader2, CheckCircle2, AlertCircle, Calendar, BedDouble, Users,
  User, Smile, Send, Clock, Headset, ShieldCheck,
  ChevronDown, Plus, Minus, Building2, Mail, Phone,
  ArrowRight
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
      <div className={`bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-8 text-center max-w-xl mx-auto text-[#111827] shadow-xl ${className}`}>
        <div className="w-14 h-14 rounded-full bg-[#F5F1E8] border border-[#C5A059]/30 flex items-center justify-center mx-auto mb-4 text-[#C5A059] shadow-sm">
          <CheckCircle2 className="h-7 w-7 text-[#C5A059]" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-[#111827] mb-2">Thank You!</h3>
        <p className="text-[13px] sm:text-[14px] text-[#4B5563] leading-relaxed mb-5">
          Your stay details request has been received.<br />
          Our concierge team will get in touch with you shortly with available options and rates.
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="px-6 py-3 rounded-full bg-[#C5A059] hover:bg-[#B38F48] text-white text-xs font-bold tracking-wider hover:opacity-90 transition-all cursor-pointer shadow-md"
        >
          SUBMIT ANOTHER REQUEST
        </button>
      </div>
    );
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className={`w-full max-w-xl mx-auto ${className}`}>
      {/* Eyebrow & Header Section */}
      {!hideHeader && (
        <div className="mb-2 sm:mb-4 text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#C5A059] uppercase">
              PLAN YOUR STAY
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-[#C5A059]/60"></span>
          </div>
          <h2 className="text-xl sm:text-3xl font-serif text-[#111827] tracking-tight">
            Get Stay <span className="text-[#C5A059] italic font-serif">Details</span>
          </h2>
          <p className="hidden sm:block text-[12px] text-[#6B7280] leading-relaxed mt-1 max-w-md">
            Share your travel dates and preferences. Our team will assist you with the best options and enquiry support.
          </p>
        </div>
      )}

      {/* Main Glassmorphic Card */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border border-[#E5E7EB] rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-xl space-y-2 sm:space-y-3 relative overflow-hidden"
      >
        {submitStatus === "error" && (
          <div className="p-2.5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2">
            <AlertCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
            <p className="text-[11px] text-red-700 font-medium">{errorMessage}</p>
          </div>
        )}

        {/* 1. Stay Dates (Check-in & Check-out) */}
        <div className="grid grid-cols-2 gap-2">
          {/* Check-in Date */}
          <div className="relative">
            <div
              onClick={(e) => {
                try {
                  (e.currentTarget.querySelector('input[type="date"]') as HTMLInputElement)?.showPicker?.();
                } catch { }
              }}
              className={`relative bg-[#F8F9FA] hover:bg-gray-100/80 border ${errors.checkInDate ? 'border-red-400' : 'border-[#E5E7EB] hover:border-gray-300'} rounded-xl p-2 sm:p-2.5 flex items-center justify-between transition-all cursor-pointer group`}
            >
              <div className="flex items-center gap-1.5 min-w-0 pointer-events-none">
                <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0 group-hover:text-[#C5A059] transition-colors" />
                <div className="min-w-0">
                  <div className="text-[9px] sm:text-[10px] font-medium text-gray-500 leading-tight">
                    Check-in Date <span className="text-red-500">*</span>
                  </div>
                  <div className="text-[11px] sm:text-[12px] font-semibold text-[#111827] truncate mt-0.5">
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
              <p className="text-[9px] text-red-500 mt-0.5 pl-1">{errors.checkInDate.message}</p>
            )}
          </div>

          {/* Check-out Date */}
          <div className="relative">
            <div
              onClick={(e) => {
                try {
                  (e.currentTarget.querySelector('input[type="date"]') as HTMLInputElement)?.showPicker?.();
                } catch { }
              }}
              className={`relative bg-[#F8F9FA] hover:bg-gray-100/80 border ${errors.checkOutDate ? 'border-red-400' : 'border-[#E5E7EB] hover:border-gray-300'} rounded-xl p-2 sm:p-2.5 flex items-center justify-between transition-all cursor-pointer group`}
            >
              <div className="flex items-center gap-1.5 min-w-0 pointer-events-none">
                <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0 group-hover:text-[#C5A059] transition-colors" />
                <div className="min-w-0">
                  <div className="text-[9px] sm:text-[10px] font-medium text-gray-500 leading-tight">
                    Check-out Date <span className="text-red-500">*</span>
                  </div>
                  <div className="text-[11px] sm:text-[12px] font-semibold text-[#111827] truncate mt-0.5">
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
              <p className="text-[9px] text-red-500 mt-0.5 pl-1">{errors.checkOutDate.message}</p>
            )}
          </div>
        </div>

        {/* 2. Room Preference */}
        <div className="relative">
          <div className={`relative bg-[#F8F9FA] hover:bg-gray-100/80 border ${errors.accommodationPreference ? 'border-red-400' : 'border-[#E5E7EB] hover:border-gray-300'} rounded-xl p-2 sm:p-2.5 flex items-center justify-between transition-all cursor-pointer group`}>
            <div className="flex items-center gap-2 min-w-0 pointer-events-none">
              <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0 group-hover:text-[#C5A059] transition-colors" />
              <div className="min-w-0">
                <div className="text-[9px] sm:text-[10px] font-medium text-gray-500 leading-tight">
                  Room Preference <span className="text-red-500">*</span>
                </div>
                <div className="text-[11px] sm:text-[12px] font-semibold text-[#111827] truncate mt-0.5">
                  {accommodationPreference || "Select Room Type"}
                </div>
              </div>
            </div>
            <ChevronDown className="w-3 h-3 text-gray-400 shrink-0 pointer-events-none ml-1" />
            <select
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer bg-white text-[#111827]"
              {...register("accommodationPreference")}
            >
              <option value="" disabled>Select Room Type</option>
              {accommodations.map((a) => (
                <option key={a.name} value={a.name} className="bg-white text-[#111827]">
                  {a.name}
                </option>
              ))}
            </select>
          </div>
          {errors.accommodationPreference && (
            <p className="text-[9px] text-red-500 mt-0.5 pl-1">{errors.accommodationPreference.message}</p>
          )}
        </div>

        {/* 3. Guests & Rooms */}
        <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl grid grid-cols-3 divide-x divide-gray-200 p-1">
          {/* Adults */}
          <div className="flex flex-col items-center justify-center px-1 py-0.5">
            <div className="flex items-center gap-1 mb-0.5">
              <User className="w-3 h-3 text-gray-400" />
              <span className="text-[10px] font-medium text-gray-600">
                Adults <span className="text-red-500">*</span>
              </span>
            </div>
            <div className="flex items-center justify-center gap-1.5 w-full">
              <button
                type="button"
                onClick={() => setValue("adults", Math.max(1, adults - 1))}
                className="w-5 h-5 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Decrease adults"
              >
                <Minus className="w-2.5 h-2.5" />
              </button>
              <span className="w-3.5 text-center font-bold text-[#111827] text-[12px]">
                {adults}
              </span>
              <button
                type="button"
                onClick={() => setValue("adults", Math.min(50, adults + 1))}
                className="w-5 h-5 rounded-full bg-[#C5A059] hover:bg-[#B38F48] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Increase adults"
              >
                <Plus className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>

          {/* Children */}
          <div className="flex flex-col items-center justify-center px-1 py-0.5">
            <div className="flex items-center gap-1 mb-0.5">
              <Smile className="w-3 h-3 text-gray-400" />
              <span className="text-[10px] font-medium text-gray-600">Children</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 w-full">
              <button
                type="button"
                onClick={() => setValue("children", Math.max(0, children - 1))}
                className="w-5 h-5 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Decrease children"
              >
                <Minus className="w-2.5 h-2.5" />
              </button>
              <span className="w-3.5 text-center font-bold text-[#111827] text-[12px]">
                {children}
              </span>
              <button
                type="button"
                onClick={() => setValue("children", Math.min(50, children + 1))}
                className="w-5 h-5 rounded-full bg-[#C5A059] hover:bg-[#B38F48] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Increase children"
              >
                <Plus className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>

          {/* Rooms */}
          <div className="flex flex-col items-center justify-center px-1 py-0.5">
            <div className="flex items-center gap-1 mb-0.5">
              <BedDouble className="w-3 h-3 text-gray-400" />
              <span className="text-[10px] font-medium text-gray-600">
                Rooms <span className="text-red-500">*</span>
              </span>
            </div>
            <div className="flex items-center justify-center gap-1.5 w-full">
              <button
                type="button"
                onClick={() => setValue("rooms", Math.max(1, rooms - 1))}
                className="w-5 h-5 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Decrease rooms"
              >
                <Minus className="w-2.5 h-2.5" />
              </button>
              <span className="w-3.5 text-center font-bold text-[#111827] text-[12px]">
                {rooms}
              </span>
              <button
                type="button"
                onClick={() => setValue("rooms", Math.min(50, rooms + 1))}
                className="w-5 h-5 rounded-full bg-[#C5A059] hover:bg-[#B38F48] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Increase rooms"
              >
                <Plus className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 4. Full Name & Mobile Number (Side-by-side) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {/* Full Name */}
          <div>
            <div className={`relative bg-[#F8F9FA] hover:bg-gray-100/80 border ${errors.fullName ? 'border-red-400' : 'border-[#E5E7EB] focus-within:border-[#C5A059]'} rounded-xl p-2 sm:p-2.5 flex items-center gap-2 transition-all`}>
              <User className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[9px] sm:text-[10px] font-medium text-gray-500 leading-tight">
                  Full Name <span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full bg-transparent border-none text-[12px] text-[#111827] placeholder:text-gray-400 focus:outline-none mt-0.5"
                  {...register("fullName")}
                />
              </div>
            </div>
            {errors.fullName && (
              <p className="text-[9px] text-red-500 mt-0.5 pl-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <div className={`relative bg-[#F8F9FA] hover:bg-gray-100/80 border ${errors.mobile ? 'border-red-400' : 'border-[#E5E7EB] focus-within:border-[#C5A059]'} rounded-xl p-2 sm:p-2.5 flex items-center gap-2 transition-all`}>
              <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[9px] sm:text-[10px] font-medium text-gray-500 leading-tight">
                  Mobile Number <span className="text-red-500">*</span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] font-bold text-[#C5A059] shrink-0 border-r border-gray-300 pr-1.5">+91</span>
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    className="w-full bg-transparent border-none text-[12px] text-[#111827] placeholder:text-gray-400 focus:outline-none"
                    {...register("mobile")}
                  />
                </div>
              </div>
            </div>
            {errors.mobile && (
              <p className="text-[9px] text-red-500 mt-0.5 pl-1">{errors.mobile.message}</p>
            )}
          </div>
        </div>

        {/* 5. Email Address */}
        <div>
          <div className={`relative bg-[#F8F9FA] hover:bg-gray-100/80 border ${errors.email ? 'border-red-400' : 'border-[#E5E7EB] focus-within:border-[#C5A059]'} rounded-xl p-2 sm:p-2.5 flex items-center gap-2 transition-all`}>
            <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-[9px] sm:text-[10px] font-medium text-gray-500 leading-tight">
                Email Address <span className="text-red-500">*</span>
              </div>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full bg-transparent border-none text-[12px] text-[#111827] placeholder:text-gray-400 focus:outline-none mt-0.5"
                {...register("email")}
              />
            </div>
          </div>
          {errors.email && (
            <p className="text-[9px] text-red-500 mt-0.5 pl-1">{errors.email.message}</p>
          )}
        </div>

        {/* 6. Optional Special Request Toggle */}
        <div>
          {!showNotes ? (
            <button
              type="button"
              onClick={() => setShowNotes(true)}
              className="text-[10px] sm:text-[11px] text-[#C5A059] hover:text-[#B38F48] hover:underline flex items-center gap-1 cursor-pointer py-0.5 font-medium"
            >
              <Plus className="w-3 h-3" /> Add special request or meal plan (optional)
            </button>
          ) : (
            <div className="bg-[#F8F9FA] border border-[#E5E7EB] focus-within:border-[#C5A059] rounded-xl p-2 transition-all">
              <textarea
                rows={2}
                maxLength={300}
                placeholder="Special requests, meal plans, or occasions..."
                className="w-full bg-transparent border-none text-[12px] text-[#111827] placeholder:text-gray-400 focus:outline-none resize-none leading-relaxed"
                {...register("requirement")}
              />
            </div>
          )}
        </div>

        {/* 7. Action CTA Button */}
        <div className="pt-0.5">
          <button
            type="submit"
            disabled={submitStatus === "submitting"}
            className="w-full py-2.5 sm:py-3.5 px-4 rounded-full bg-[#C5A059] hover:bg-[#B38F48] disabled:opacity-50 text-white font-bold text-[12px] sm:text-[14px] tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer group"
          >
            {submitStatus === "submitting" ? (
              <Loader2 className="h-4 w-4 animate-spin text-white" />
            ) : (
              <Send className="w-3.5 h-3.5 -rotate-45 group-hover:translate-x-0.5 transition-transform" />
            )}
            <span>{submitStatus === "submitting" ? "SENDING DETAILS..." : "Check availability"}</span>
            {submitStatus !== "submitting" && <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
          </button>
        </div>

        {/* Footnote */}
        <div className="flex items-center justify-center gap-1.5 pt-0.5 text-[9px] sm:text-[11px] text-gray-500 text-center">
          <div className="w-3.5 h-3.5 rounded-full bg-[#C5A059] text-white flex items-center justify-center text-[9px] font-bold shrink-0">
            i
          </div>
          <span>Request for details • Availability & rates confirmed on enquiry.</span>
        </div>

        {/* 3 Trust Badges (Desktop Only) */}
        <div className="hidden sm:grid grid-cols-3 gap-2 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
            <div className="text-left min-w-0">
              <div className="text-[11px] font-semibold text-[#111827] leading-tight truncate">Quick Response</div>
              <div className="text-[9px] text-[#6B7280] truncate">Within 24 Hours</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Headset className="w-4 h-4 text-[#C5A059] shrink-0" />
            <div className="text-left min-w-0">
              <div className="text-[11px] font-semibold text-[#111827] leading-tight truncate">Personal Concierge</div>
              <div className="text-[9px] text-[#6B7280] truncate">Dedicated Support</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
            <div className="text-left min-w-0">
              <div className="text-[11px] font-semibold text-[#111827] leading-tight truncate">Secure & Private</div>
              <div className="text-[9px] text-[#6B7280] truncate">Your data is safe</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export function EnquiryForm(props: EnquiryFormProps) {
  return (
    <Suspense fallback={
      <div className={`bg-white border border-[#E5E7EB] rounded-[28px] p-8 max-w-xl mx-auto w-full min-h-[400px] flex items-center justify-center shadow-lg ${props.className || ''}`}>
        <Loader2 className="w-10 h-10 animate-spin text-[#C5A059]" />
      </div>
    }>
      <EnquiryFormContent {...props} />
    </Suspense>
  );
}
