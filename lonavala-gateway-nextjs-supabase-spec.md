# Lonavala Gateway --- One-Page Website Development Specification

## Next.js + Supabase

> **Purpose:** Build a production-ready, responsive one-page travel
> information and enquiry website for **Lonavala Gateway by Vidhi Tour &
> Travel**, closely following the supplied reference design.
>
> **Primary stack:** Next.js (App Router) + TypeScript + Tailwind CSS +
> Supabase.
>
> **Important:** This is an information/enquiry website, not an online
> booking engine. The enquiry form must never imply that submitting a
> form confirms a hotel booking.

------------------------------------------------------------------------

## 1. Project Overview

Create a premium, trustworthy, fast-loading one-page website for a local
travel agency that provides:

-   Hotel and resort information
-   Villa information
-   Local tours
-   Camping information
-   Cab and transfer assistance
-   Things to do in Lonavala
-   General travel information
-   Property-related enquiry assistance

The page should be designed around the visual hierarchy shown in the
supplied reference image:

1.  Header
2.  Navigation
3.  Breadcrumb
4.  Large destination/property hero section
5.  Enquiry form
6.  Property overview and quick facts
7.  About section
8.  Accommodation cards
9.  Amenities
10. Dining and food
11. Experiences and recreation
12. Location/map
13. Nearby attractions
14. Agency role/disclaimer section
15. How enquiry works
16. Footer

The website should be fully responsive and should work particularly well
on mobile.

------------------------------------------------------------------------

# 2. Brand Information

## Business Name

**Lonavala Gateway**

### Sub-brand / Owner Line

**by Vidhi Tour & Travel**

### Business Positioning

Independent travel agency / travel information and enquiry assistance
platform for Lonavala.

### Suggested tagline

> Independent Travel Agency \| Travel Information & Enquiry Assistance
> in Lonavala

### Contact

-   Phone: `+91 98765 43210`
-   WhatsApp: `+91 98765 43210`
-   Email: `info@lonavalagateway.com`
-   Address:
    `Shop No. 3, Neer Colony, Lonavala Bus Stand, Lonavala, Taluka Maval, Pune, Maharashtra - 410401`

> Keep contact details configurable from Supabase rather than hardcoding
> them throughout components.

------------------------------------------------------------------------

# 3. Design Direction

Recreate the supplied screenshot as a clean, premium travel website.

## Visual Style

-   White background
-   Dark forest-green primary brand color
-   Very light gray section backgrounds where appropriate
-   Rounded cards
-   Thin subtle borders
-   Soft shadows
-   Large destination imagery
-   High information density without looking cluttered
-   Strong visual hierarchy
-   Professional travel-agency appearance
-   No excessive gradients
-   No excessive animations

## Suggested Colors

``` text
Primary Green:       #063B2A
Dark Green:          #042A1F
Secondary Green:     #0A5A40
Light Green:         #EAF4EF
Border:              #E1E7E4
Text:                #17211D
Muted Text:          #65716C
White:               #FFFFFF
Background:          #F8FAF9
Success:             #16805A
Error:               #C83A3A
```

Do not hardcode colors repeatedly. Define them as Tailwind theme
variables/design tokens.

------------------------------------------------------------------------

# 4. Recommended Technology Stack

## Frontend

-   Next.js latest stable version
-   App Router
-   TypeScript
-   Tailwind CSS
-   Server Components by default
-   Client Components only where interaction is required
-   `next/image`
-   `next/font`
-   Accessible semantic HTML

## Backend / Database

-   Supabase
-   PostgreSQL
-   Supabase Row Level Security
-   Supabase Storage if image uploads are required
-   Supabase server-side client for secure operations

## Recommended supporting libraries

-   `lucide-react` for icons
-   `zod` for validation
-   `react-hook-form` for the enquiry form
-   `@supabase/ssr` for Supabase integration
-   Optional toast library for success/error messages

Do not add unnecessary dependencies.

------------------------------------------------------------------------

# 5. Application Architecture

Use this general structure:

``` text
app/
├── layout.tsx
├── page.tsx
├── globals.css
├── sitemap.ts
├── robots.ts
└── api/
    └── enquiry/
        └── route.ts

components/
├── layout/
│   ├── Header.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── sections/
│   ├── Breadcrumbs.tsx
│   ├── HeroSection.tsx
│   ├── EnquiryForm.tsx
│   ├── QuickFacts.tsx
│   ├── AboutSection.tsx
│   ├── AccommodationSection.tsx
│   ├── AmenitiesSection.tsx
│   ├── DiningSection.tsx
│   ├── ExperiencesSection.tsx
│   ├── LocationSection.tsx
│   ├── NearbyAttractions.tsx
│   ├── RoleSection.tsx
│   └── EnquiryProcess.tsx
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   ├── SectionHeading.tsx
│   └── IconText.tsx
└── forms/
    └── EnquiryForm.tsx

lib/
├── supabase/
│   ├── client.ts
│   ├── server.ts
│   └── admin.ts
├── validations/
│   └── enquiry.ts
└── utils.ts

types/
└── database.ts

public/
├── images/
└── icons/
```

------------------------------------------------------------------------

# 6. One-Page URL Structure

The main page should be:

``` text
/
```

Use anchor navigation:

``` text
#home
#hotels
#villas
#tours
#camping
#things-to-do
#about
#contact
```

For the current destination/property page, support:

``` text
/hotels/aamby-valley-city
```

If the requirement is strictly one page, render the complete experience
on `/` and use URL anchors.

------------------------------------------------------------------------

# 7. Header

Create a compact desktop header matching the reference.

## Left side

Logo:

-   Mountain-style logo mark
-   LONAVALA GATEWAY
-   by Vidhi Tour & Travel
-   small descriptor underneath

## Right side

Display:

``` text
Need Travel Assistance?

Phone
+91 98765 43210

WhatsApp Us
```

Phone should be clickable:

``` text
tel:+919876543210
```

WhatsApp should open:

``` text
https://wa.me/919876543210
```

## Mobile Header

On mobile:

-   Logo on left
-   Hamburger button on right
-   Contact shortcuts can be displayed below or inside mobile menu
-   Navigation menu should be keyboard accessible
-   Sticky header is recommended

------------------------------------------------------------------------

# 8. Navigation

Desktop navigation:

``` text
Home
Hotels & Resorts
Villas
Local Tours
Camping
Cabs & Transfers
Things To Do
About Us
Contact Us
```

Navigation should:

-   Scroll smoothly
-   Highlight active section where practical
-   Work on mobile
-   Remain usable on small screens
-   Not cover content when anchor scrolling

Use `scroll-margin-top` on sections.

------------------------------------------------------------------------

# 9. Breadcrumb

Example:

``` text
Home
>
Hotels & Resorts
>
Aamby Valley City
```

Use small typography and muted colors.

On mobile, truncate long breadcrumb labels where necessary.

------------------------------------------------------------------------

# 10. Hero Section

The hero is the most important visual section.

## Desktop Layout

Use a two-column structure:

``` text
┌─────────────────────────────────────────────┬───────────────────┐
│                                             │                   │
│ Destination Hero Image + Overlay            │ Enquiry Form      │
│                                             │                   │
│ Aamby Valley City                           │                   │
│ Lonavala, Maharashtra                       │                   │
│ Description                                 │                   │
│ Feature icons                               │                   │
│                                             │                   │
└─────────────────────────────────────────────┴───────────────────┘
```

However, preserve the screenshot's layout where the large hero/content
area is on the left and the enquiry panel is on the right.

## Hero Content

Badge:

``` text
Resort / Hill City Destination
```

Heading:

``` text
Aamby Valley City
```

Location:

``` text
Lonavala, Maharashtra
```

Description:

``` text
Aamby Valley City is a hill city destination set in the scenic Sahyadri mountains near Lonavala. The property offers a wide range of accommodation options, multiple dining outlets and leisure facilities surrounded by natural beauty and peaceful landscapes.
```

## Hero feature labels

Use icon + label:

-   Accommodation Options
-   Multiple Dining Outlets
-   Leisure & Wellness Facilities
-   Nature & Scenic Surroundings

## Hero Gallery

Use:

-   One large primary image
-   Four smaller supporting images
-   "View All Photos" button

The image gallery should be data-driven.

------------------------------------------------------------------------

# 11. Image Requirements

Use `next/image`.

Every image must have:

-   Meaningful `alt`
-   Responsive dimensions
-   Lazy loading unless above-the-fold
-   Correct object-fit
-   Appropriate quality setting

Recommended structure:

``` text
property/
├── hero
├── gallery
├── accommodations
├── dining
└── experiences
```

Do not use external image URLs directly inside components if the images
are expected to be managed later.

Store image URLs in Supabase or configuration data.

------------------------------------------------------------------------

# 12. Enquiry Form

This is a critical conversion element.

Title:

``` text
Request Information / Enquiry
```

Description:

``` text
Share your travel requirements and our team will assist you with relevant property information.
```

## Fields

### Required

-   Full Name
-   Mobile Number
-   Preferred Travel Date
-   Number of Guests

### Optional

-   Email Address
-   Accommodation Preference
-   Your Requirement

## Accommodation options

Radio buttons:

``` text
Room
Suite
Cottage
Not Sure
```

## Requirement textarea

Placeholder:

``` text
Tell us what information you need...
```

## Submit button

``` text
SEND ENQUIRY
```

Under the button:

``` text
This is an enquiry form.
It does not confirm a booking.
```

------------------------------------------------------------------------

# 13. Form Validation

Use Zod.

Rules:

``` text
Full Name:
- required
- minimum 2 characters
- maximum 100 characters

Mobile:
- required
- valid Indian phone number
- normalize spaces and +91 variations

Email:
- optional
- valid email if supplied

Travel Date:
- required
- must be today or a future date

Guests:
- required
- integer
- minimum 1
- maximum configurable value

Accommodation:
- optional enum

Requirement:
- optional
- maximum 2000 characters
```

Do not trust frontend validation alone.

Validate again inside the API/server action.

------------------------------------------------------------------------

# 14. Enquiry Submission Flow

Recommended flow:

``` text
User fills form
        ↓
React Hook Form validation
        ↓
Zod validation
        ↓
POST /api/enquiry
        ↓
Server-side validation
        ↓
Supabase insert
        ↓
Success response
        ↓
Show confirmation message
```

Success message:

``` text
Thank you! Your enquiry has been received.
Our team will contact you shortly.
```

Error:

``` text
We couldn't submit your enquiry right now.
Please try again or contact us directly.
```

Prevent duplicate submissions by:

-   disabling button while submitting
-   adding basic duplicate protection
-   optionally storing IP/hash metadata server-side if legally
    appropriate
-   never exposing service-role credentials

------------------------------------------------------------------------

# 15. Supabase Database

Create the following core tables.

## Table: enquiries

``` sql
create table public.enquiries (
  id uuid primary key default gen_random_uuid(),

  full_name text not null,
  mobile text not null,
  email text,

  preferred_travel_date date not null,
  guests integer not null,

  accommodation_preference text,

  requirement text,

  source_page text default '/',
  status text default 'new',

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

Recommended status values:

``` text
new
contacted
in_progress
converted
closed
spam
```

Add database constraints where practical.

------------------------------------------------------------------------

# 16. Supabase RLS

Enable Row Level Security:

``` sql
alter table public.enquiries enable row level security;
```

The public frontend must not have permission to read all enquiries.

Recommended architecture:

``` text
Public user
   ↓
API route / Server Action
   ↓
Server-side Supabase client
   ↓
Insert enquiry
```

Never expose the Supabase service role key to the browser.

Environment variables:

``` env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Only the first two may be public.

------------------------------------------------------------------------

# 17. Optional Content Tables

To make the website manageable without code changes, use Supabase tables
for content.

## properties

``` text
id
slug
name
category
location
short_description
description
hero_image
status
created_at
updated_at
```

## property_images

``` text
id
property_id
image_url
alt_text
sort_order
category
created_at
```

## accommodations

``` text
id
property_id
name
description
image_url
features
sort_order
status
```

## amenities

``` text
id
property_id
name
icon
sort_order
status
```

## dining_outlets

``` text
id
property_id
name
description
image_url
sort_order
status
```

## attractions

``` text
id
name
description
distance_text
icon
sort_order
status
```

If content will remain fixed, these can instead be TypeScript data
files.

------------------------------------------------------------------------

# 18. Quick Facts Section

Immediately below the hero/enquiry area, create a six-item information
strip.

Example:

``` text
Property Type
Resort / Hill City

Location
Lonavala, Maharashtra

Setting
Hill & Nature Surroundings

Accommodation
Multiple Categories

Suitable For
Families, Couples, Groups & Corporate

Area
Aamby Valley City, Lonavala Region
```

Use responsive cards.

Desktop:

``` text
6 columns
```

Tablet:

``` text
3 columns
```

Mobile:

``` text
2 columns
```

------------------------------------------------------------------------

# 19. About Section

Heading:

``` text
About Aamby Valley City
```

Content:

``` text
Aamby Valley City is a unique hill city destination spread across a vast area of natural beauty in the Lonavala region. It offers a variety of accommodation categories, dining experiences and leisure facilities for families, couples and groups.

Guests can enjoy the scenic environment, modern amenities and various experiences within the property and around Lonavala.
```

Do not make the paragraph excessively long.

------------------------------------------------------------------------

# 20. Accommodation Section

Heading:

``` text
Accommodation Options
```

Display three cards.

## Card 1

``` text
Hermitage

Hilltop setting with timber & glass design
Private outside deck
Spacious rooms with scenic views
Selected in-room facilities

VIEW INFORMATION
```

## Card 2

``` text
Aussie Suite

Separate living space and bedroom
Large layout with balcony
Comfortable for families & groups
Selected in-room facilities

VIEW INFORMATION
```

## Card 3

``` text
Spanish Cottage

Air conditioning
Private balcony
Additional living space
Private bathroom & amenities

VIEW INFORMATION
```

Cards should be equal height.

On mobile:

-   one column
-   full-width image
-   readable bullet points
-   clear CTA

------------------------------------------------------------------------

# 21. Property Amenities

Use icon-based compact cards.

Example amenities:

``` text
Swimming Pool
Spa & Wellness
Fitness Centre
Wi-Fi
Parking
Room Service
Kids' Pool
Concierge
Laundry
Leisure Facilities
```

Each item:

``` text
Icon
Label
```

Use Lucide icons where suitable.

Do not use emojis as the primary icon system.

------------------------------------------------------------------------

# 22. Dining & Food

Create a horizontal or responsive gallery.

Example outlets:

``` text
Woodpecker Restaurant
Lake Front Café
Mabruk
Soul Food Café
A Café
Girasole
Grill Chaska
Tuk Tuk Street Food Corner
```

Each item should support:

-   Image
-   Name
-   Optional short description

On desktop, display a compact horizontal row.

On mobile, use horizontal scrolling or a 2-column grid.

------------------------------------------------------------------------

# 23. Experiences & Recreation

Use icon cards.

Example:

``` text
Scenic Views
Nature Trails
Swimming Pool
Spa & Wellness
Outdoor Activities
Leisure Areas
Kids' Activities
Peaceful Environment
```

CTA:

``` text
EXPLORE LOCAL EXPERIENCES
```

The CTA can scroll to the local experiences/attractions area.

------------------------------------------------------------------------

# 24. Location Section

Heading:

``` text
Location
```

Content:

``` text
Aamby Valley City, Lonavala, Maharashtra
```

Include a map.

Prefer an embedded Google Maps iframe or a static map preview with a
button.

CTA:

``` text
VIEW ON GOOGLE MAPS
```

If using a Google Maps URL, keep it in Supabase/config rather than
hardcoding it into multiple components.

------------------------------------------------------------------------

# 25. Around Lonavala

Create a nearby attractions list.

Example:

``` text
Tiger Point
Lion's Point
Bhushi Dam
Lonavala Lake
Pawna Lake
Rajmachi
Karla Caves
Bhaja Caves
```

CTA:

``` text
EXPLORE LOCAL TOURS
```

------------------------------------------------------------------------

# 26. Role & Independence Section

This section is important because the website is an independent travel
information platform.

Heading:

``` text
Our Role & Independence
```

Content:

``` text
Lonavala Gateway is operated by Vidhi Tour & Travel, an independent travel agency.

We provide general property information, guidance and enquiry assistance.

We are not the owner, operator or official representative of Aamby Valley City or any other property unless specifically stated.

Property names, trademarks, images and other brand-related intellectual property belong to their respective owners.
```

This text should be clearly visible but not visually dominant.

------------------------------------------------------------------------

# 27. What We Do

Use green check icons.

``` text
Property information & guidance
Accommodation information
General travel assistance
Local sightseeing information
Enquiry assistance
Connecting travellers with relevant service providers where applicable
```

------------------------------------------------------------------------

# 28. What We Don't Do

Use red warning/cross icons.

``` text
We are not the property owner or operator.
We do not represent the property officially unless stated.
We do not guarantee room availability.
We do not guarantee fixed prices.
We do not claim the lowest or best price.
We do not make misleading affiliation claims.
We do not take online booking or payment through this information page.
```

------------------------------------------------------------------------

# 29. How Our Enquiry Works

Create a simple 4-step visual process.

## Step 1

``` text
Submit Enquiry
Share your travel requirements.
```

## Step 2

``` text
We Review
Our team reviews your enquiry.
```

## Step 3

``` text
Information / Assistance
You receive relevant information or assistance.
```

## Step 4

``` text
Make Your Decision
Proceed independently with your arrangements.
```

Final note:

``` text
Submitting an enquiry does not confirm a booking.
```

------------------------------------------------------------------------

# 30. Footer

Use a dark green footer.

## Column 1

Logo + business information:

``` text
LONAVALA GATEWAY
by Vidhi Tour & Travel

Independent travel agency providing travel information,
guidance and enquiry assistance for hotels, villas,
local tours, camping, cabs and experiences in Lonavala.
```

## Column 2 --- Quick Links

``` text
Hotels & Resorts
Villas
Local Tours
Camping
Cabs & Transfers
Things To Do
Contact Us
```

## Column 3 --- Important Links

``` text
Privacy Policy
Terms & Conditions
Cancellation Policy
Refund Policy
Disclaimer
Non-Affiliation
```

## Column 4 --- Contact Us

``` text
+91 98765 43210
+91 98765 43210
info@lonavalagateway.com

Shop No. 3, Neer Colony,
Lonavala Bus Stand,
Lonavala, Taluka Maval,
Pune, Maharashtra - 410401
```

## Column 5 --- Business Information

``` text
Business Name:
Vidhi Tour & Travel

Brand / Website:
Lonavala Gateway

Business Type:
Proprietorship (Individual)

GSTIN:
27BTEPZ1943E1S2
```

## Business Hours

``` text
Mon - Sun
8:00 AM - 8:00 PM
(We are available all days)
```

------------------------------------------------------------------------

# 31. Footer Disclaimer

Show:

``` text
© 2026 Lonavala Gateway by Vidhi Tour & Travel. All Rights Reserved.

This website is for travel information and enquiry assistance only.
```

------------------------------------------------------------------------

# 32. Responsive Design Requirements

## Desktop

Breakpoint:

``` text
>= 1024px
```

Requirements:

-   Maximum content width around 1400px
-   Two-column hero
-   Enquiry form remains visible
-   Multi-column information cards
-   Large gallery
-   Spacious sections

## Tablet

Breakpoint:

``` text
768px - 1023px
```

Requirements:

-   Reduce gaps
-   Hero can become stacked
-   2--3 card grids
-   Enquiry form full width where necessary

## Mobile

Breakpoint:

``` text
< 768px
```

Requirements:

-   Single-column layout
-   Sticky compact header
-   Hamburger navigation
-   Hero image above content
-   Enquiry form below hero
-   1-column accommodation cards
-   2-column amenity grid
-   Horizontal scroll for dining where useful
-   Large touch targets
-   No horizontal overflow

Minimum touch target:

``` text
44px × 44px
```

------------------------------------------------------------------------

# 33. Mobile Sticky Enquiry CTA

Recommended mobile feature:

A fixed bottom CTA:

``` text
ENQUIRE NOW
```

Clicking it should scroll to:

``` text
#enquiry
```

Keep enough bottom padding so content is not hidden behind the fixed
button.

------------------------------------------------------------------------

# 34. Accessibility

The website must meet strong accessibility standards.

Requirements:

-   Semantic HTML
-   Proper heading hierarchy
-   `h1` only once
-   `h2` for major sections
-   `h3` for cards
-   Accessible form labels
-   Keyboard navigation
-   Visible focus states
-   `aria-label` for icon-only buttons
-   Meaningful image alt text
-   Good text contrast
-   Do not communicate information by color alone
-   Accessible mobile menu
-   Accessible modal/gallery if implemented

------------------------------------------------------------------------

# 35. SEO

## Title

``` text
Lonavala Gateway | Hotels, Villas, Tours & Travel Assistance in Lonavala
```

## Meta Description

``` text
Explore hotels, resorts, villas, local tours, camping, cabs and things to do in Lonavala. Get travel information and enquiry assistance from Lonavala Gateway.
```

## Suggested keywords

``` text
Lonavala hotels
Lonavala resorts
Lonavala villas
Lonavala travel
Lonavala tourism
Lonavala sightseeing
Lonavala local tours
Lonavala cabs
Lonavala camping
Aamby Valley City information
Lonavala hotel enquiry
```

Do not keyword-stuff the page.

------------------------------------------------------------------------

# 36. Structured Data

Add appropriate JSON-LD.

Recommended schemas:

``` text
Organization
TravelAgency
WebSite
BreadcrumbList
```

Only add `Hotel` schema when the business genuinely represents the
hotel/property and the data is accurate.

For an independent information/enquiry website, avoid misleading
ownership/official-property claims.

------------------------------------------------------------------------

# 37. Performance

Target:

``` text
Lighthouse Performance: 90+
Lighthouse Accessibility: 95+
Lighthouse Best Practices: 95+
Lighthouse SEO: 95+
```

Optimization requirements:

-   `next/image`
-   WebP/AVIF where possible
-   Correct image dimensions
-   Lazy load below-the-fold images
-   Avoid huge hero images
-   Avoid unnecessary JavaScript
-   Use Server Components
-   Avoid loading large icon libraries
-   Avoid autoplay video
-   Compress images before upload
-   Use Supabase CDN for stored images

------------------------------------------------------------------------

# 38. Security

Never expose:

``` text
SUPABASE_SERVICE_ROLE_KEY
```

to the client.

Use:

``` text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

for client-side Supabase where needed.

Use server-only credentials for privileged operations.

Additional security:

-   Validate all form input
-   Sanitize output
-   Rate-limit enquiry API
-   Add spam protection
-   Do not expose database errors to users
-   Do not allow public enquiry reads
-   Use RLS
-   Use HTTPS in production

------------------------------------------------------------------------

# 39. Anti-Spam Protection

The enquiry form should have basic anti-spam protection.

Recommended:

1.  Honeypot field
2.  Server-side validation
3.  Rate limiting
4.  Optional Cloudflare Turnstile
5.  Duplicate submission detection

Do not make CAPTCHA unnecessarily difficult for genuine users.

------------------------------------------------------------------------

# 40. WhatsApp Integration

Use a configurable WhatsApp number.

Example:

``` text
https://wa.me/919876543210
```

Optional pre-filled message:

``` text
Hi, I would like information about accommodation and travel options in Lonavala.
```

The WhatsApp CTA should appear:

-   Header
-   Enquiry section
-   Mobile sticky CTA if desired
-   Footer

------------------------------------------------------------------------

# 41. Analytics

Add analytics after consent requirements are considered.

Recommended:

-   Google Analytics 4
-   Google Tag Manager
-   Meta Pixel if advertising is planned
-   Microsoft Clarity if required

Track:

``` text
page_view
enquiry_form_start
enquiry_form_submit
enquiry_form_success
phone_click
whatsapp_click
map_click
gallery_open
accommodation_view
local_tours_click
```

Do not send unnecessary personal information to analytics tools.

------------------------------------------------------------------------

# 42. Environment Variables

Create:

``` env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_PHONE_NUMBER=
```

For analytics:

``` env
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

------------------------------------------------------------------------

# 43. Recommended Supabase Storage

Create buckets:

``` text
property-images
accommodation-images
dining-images
experience-images
brand-assets
```

Keep buckets public only where public image delivery is intended.

Do not store private documents in public buckets.

------------------------------------------------------------------------

# 44. Admin Consideration

The first version can be a public one-page website.

If an admin panel is required later, build:

``` text
/admin
```

with:

-   Admin login
-   Enquiry list
-   Enquiry status
-   Enquiry search
-   Enquiry filters
-   Property management
-   Gallery management
-   Accommodation management
-   Dining management
-   Attractions management
-   Contact information management

Admin routes must be protected.

Do not build an admin panel into the public page unless requested.

------------------------------------------------------------------------

# 45. Component Requirements

## Header

Props:

``` ts
{
  businessName: string;
  logoUrl: string;
  phone: string;
  whatsapp: string;
}
```

## Hero

Props:

``` ts
{
  title: string;
  location: string;
  badge: string;
  description: string;
  heroImage: string;
  gallery: GalleryImage[];
  features: Feature[];
}
```

## EnquiryForm

Props:

``` ts
{
  sourcePage?: string;
}
```

## AccommodationCard

Props:

``` ts
{
  name: string;
  image: string;
  features: string[];
  href?: string;
}
```

Use TypeScript interfaces instead of `any`.

------------------------------------------------------------------------

# 46. Data Types

Example:

``` ts
export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  sortOrder: number;
}

export interface Accommodation {
  id: string;
  name: string;
  image: string;
  features: string[];
}

export interface Enquiry {
  id: string;
  fullName: string;
  mobile: string;
  email?: string;
  preferredTravelDate: string;
  guests: number;
  accommodationPreference?: string;
  requirement?: string;
  status: string;
  createdAt: string;
}
```

Avoid using `any`.

------------------------------------------------------------------------

# 47. Error Handling

Create friendly states.

## Form error

``` text
Something went wrong while submitting your enquiry.
Please try again.
```

## Network error

``` text
Please check your internet connection and try again.
```

## Invalid form

Show errors directly below each relevant field.

## Server error

Log the technical error securely on the server, but show only a
user-friendly message.

------------------------------------------------------------------------

# 48. Loading States

When submitting:

``` text
SENDING...
```

Disable the submit button.

For gallery/image-heavy sections:

-   use skeletons where necessary
-   avoid layout shifts
-   reserve image dimensions

------------------------------------------------------------------------

# 49. UI Interaction Details

Use subtle transitions:

``` text
transition-colors
transition-shadow
transition-transform
duration-200
```

Recommended hover behavior:

-   Cards lift slightly
-   Buttons darken/lighten subtly
-   Images can scale very slightly
-   Links show clear hover state

Avoid:

-   excessive bounce animations
-   full-screen animations
-   auto-moving sliders
-   distracting parallax

------------------------------------------------------------------------

# 50. Exact Page Section Order

Implement the final page in this order:

``` text
1. Header
2. Navigation
3. Breadcrumb
4. Hero + Gallery
5. Enquiry Form
6. Quick Facts
7. About Aamby Valley City
8. Accommodation Options
9. Property Amenities
10. Dining & Food
11. Experiences & Recreation
12. Location
13. Around Lonavala
14. Our Role & Independence
15. What We Do
16. What We Don't Do
17. How Our Enquiry Works
18. Footer
```

On desktop, the enquiry form should remain visually prominent near the
hero.

------------------------------------------------------------------------

# 51. Important Legal / Trust Requirements

The website must clearly distinguish:

``` text
Independent travel agency
```

from:

``` text
Property owner
Property operator
Official representative
```

Do not use language such as:

``` text
Official Aamby Valley booking partner
Official Aamby Valley website
Guaranteed rooms
Lowest price guaranteed
Official representative
```

unless there is verified authorization.

Do not collect online payment through this page unless a separate
compliant booking/payment flow is intentionally implemented.

------------------------------------------------------------------------

# 52. Content Management Strategy

Use a hybrid approach.

Keep stable UI text in the code.

Keep frequently changing information in Supabase:

``` text
Contact number
WhatsApp number
Email
Business address
Hero images
Gallery images
Accommodation cards
Amenities
Dining outlets
Attractions
Enquiries
```

This gives the website flexibility without making every UI element
database-dependent.

------------------------------------------------------------------------

# 53. Deployment

Recommended:

``` text
GitHub
   ↓
Vercel
   ↓
Next.js application

Supabase
   ↓
PostgreSQL
   ↓
Storage
```

Set all production environment variables in Vercel.

After deployment:

-   test forms
-   test Supabase insertion
-   test mobile navigation
-   test WhatsApp
-   test phone links
-   test map
-   test all anchor links
-   test image loading
-   test SEO metadata
-   test sitemap
-   test robots.txt

------------------------------------------------------------------------

# 54. Testing Checklist

## Functional

-   [ ] Header loads
-   [ ] Logo loads
-   [ ] Navigation works
-   [ ] Mobile menu works
-   [ ] Breadcrumb works
-   [ ] Hero loads
-   [ ] Gallery works
-   [ ] Enquiry form validates
-   [ ] Enquiry form submits
-   [ ] Supabase receives enquiry
-   [ ] Success state appears
-   [ ] Error state appears
-   [ ] Phone button works
-   [ ] WhatsApp button works
-   [ ] Map button works
-   [ ] All section anchors work
-   [ ] Footer links work

## Responsive

-   [ ] 320px mobile
-   [ ] 375px mobile
-   [ ] 390px mobile
-   [ ] 430px mobile
-   [ ] 768px tablet
-   [ ] 1024px tablet/desktop
-   [ ] 1280px desktop
-   [ ] 1440px desktop
-   [ ] 1920px desktop

## Accessibility

-   [ ] Keyboard navigation
-   [ ] Focus states
-   [ ] Form labels
-   [ ] Alt text
-   [ ] Heading hierarchy
-   [ ] Contrast
-   [ ] Screen-reader friendly buttons
-   [ ] Mobile menu accessibility

## SEO

-   [ ] Title
-   [ ] Meta description
-   [ ] Canonical
-   [ ] Open Graph
-   [ ] Twitter metadata
-   [ ] Sitemap
-   [ ] Robots
-   [ ] JSON-LD
-   [ ] Correct H1

## Security

-   [ ] RLS enabled
-   [ ] Service role key server-only
-   [ ] API validation
-   [ ] Spam protection
-   [ ] Rate limiting
-   [ ] No sensitive errors exposed

------------------------------------------------------------------------

# 55. Suggested Next.js Metadata

``` ts
export const metadata: Metadata = {
  title:
    "Lonavala Gateway | Hotels, Villas, Tours & Travel Assistance in Lonavala",
  description:
    "Explore hotels, resorts, villas, local tours, camping, cabs and things to do in Lonavala. Get travel information and enquiry assistance from Lonavala Gateway.",
  robots: {
    index: true,
    follow: true,
  },
};
```

Add Open Graph image using the final brand/hero image.

------------------------------------------------------------------------

# 56. Suggested API Endpoint

Create:

``` text
POST /api/enquiry
```

Expected payload:

``` json
{
  "fullName": "Rahul Sharma",
  "mobile": "+919876543210",
  "email": "rahul@example.com",
  "preferredTravelDate": "2026-09-20",
  "guests": 4,
  "accommodationPreference": "Suite",
  "requirement": "Need information about rooms and local sightseeing.",
  "sourcePage": "/hotels/aamby-valley-city"
}
```

Response:

### Success

``` json
{
  "success": true,
  "message": "Enquiry submitted successfully."
}
```

### Error

``` json
{
  "success": false,
  "message": "Unable to submit enquiry."
}
```

Never return database internals.

------------------------------------------------------------------------

# 57. Development Phases

## Phase 1 --- Setup

-   [ ] Create Next.js project
-   [ ] Configure TypeScript
-   [ ] Configure Tailwind
-   [ ] Configure Supabase
-   [ ] Configure environment variables
-   [ ] Install only required dependencies

## Phase 2 --- Layout

-   [ ] Header
-   [ ] Navigation
-   [ ] Footer
-   [ ] Global styles
-   [ ] Responsive container system

## Phase 3 --- Main Page

-   [ ] Breadcrumb
-   [ ] Hero
-   [ ] Gallery
-   [ ] Quick facts
-   [ ] About
-   [ ] Accommodation
-   [ ] Amenities
-   [ ] Dining
-   [ ] Experiences
-   [ ] Location
-   [ ] Nearby attractions
-   [ ] Trust/disclaimer sections

## Phase 4 --- Enquiry

-   [ ] Form UI
-   [ ] Zod validation
-   [ ] API route
-   [ ] Supabase insert
-   [ ] Success state
-   [ ] Error state
-   [ ] Spam protection

## Phase 5 --- SEO

-   [ ] Metadata
-   [ ] Open Graph
-   [ ] Sitemap
-   [ ] Robots
-   [ ] JSON-LD
-   [ ] Semantic HTML

## Phase 6 --- QA

-   [ ] Mobile testing
-   [ ] Desktop testing
-   [ ] Accessibility
-   [ ] Performance
-   [ ] Security
-   [ ] Form testing
-   [ ] Browser testing

## Phase 7 --- Deployment

-   [ ] GitHub
-   [ ] Vercel
-   [ ] Supabase production project
-   [ ] Environment variables
-   [ ] Domain
-   [ ] SSL
-   [ ] Analytics
-   [ ] Final QA

------------------------------------------------------------------------

# 58. Acceptance Criteria

The website is considered complete only when:

1.  It visually follows the supplied reference design.
2.  It works on mobile, tablet and desktop.
3.  The enquiry form successfully stores enquiries in Supabase.
4.  The public user cannot read other enquiries.
5.  Supabase service-role credentials are never exposed to the browser.
6.  All form fields have proper validation.
7.  Phone and WhatsApp CTAs work.
8.  The page has complete SEO metadata.
9.  The website does not falsely claim official affiliation with listed
    properties.
10. Images are optimized.
11. No horizontal scrolling occurs on mobile.
12. Lighthouse scores are strong.
13. All important sections are accessible through navigation.
14. The final page feels premium, clean and trustworthy rather than like
    a generic template.

------------------------------------------------------------------------

# 59. Final Design Goal

The finished website should feel like a **premium independent Lonavala
travel information platform**.

The visual priority should be:

``` text
Trust
   ↓
Destination / Property Information
   ↓
Easy Enquiry
   ↓
Travel Assistance
   ↓
Local Discovery
```

The page should make it immediately clear:

> **What is this?**\
> Lonavala travel information and enquiry assistance.

> **What can I find here?**\
> Hotels, resorts, villas, tours, camping, cabs and things to do.

> **What can I do?**\
> Submit an enquiry and get relevant information or assistance.

> **Is this a booking confirmation?**\
> No. It is an enquiry/information service.

The implementation should prioritize clarity, speed, accessibility,
mobile usability, trustworthy communication and a polished
travel-industry visual experience.
