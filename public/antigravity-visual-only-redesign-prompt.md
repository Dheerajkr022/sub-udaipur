# Antigravity Prompt: Visual-Only Redesign --- Lonavala Gateway / Aamby Valley City

## Objective

Redesign the **existing Aamby Valley City landing page on the Lonavala
Gateway website** to closely match the visual direction in the
client-provided reference screenshots.

This is a **front-end visual redesign only**. The existing website
already works. Improve its appearance and responsive layout without
changing what the website does.

**Existing website:** https://lonavala-nine.vercel.app/

## Non-negotiable rule: preserve the existing implementation

Do not rebuild the application from scratch. First inspect the existing
repository, identify the current landing page and its components,
styles, data sources, and integrations, and then modify only what is
required for the visual redesign.

**Do not change any of the following:**

-   Business logic, calculations, conditions, or state transitions.
-   Page copy, headings, descriptions, labels, button text,
    accommodation names, amenity names, dining names, or other existing
    content.
-   Form fields, required/optional status, validation rules, submit
    behavior, success/error states, or enquiry flow.
-   API endpoints, request/response shapes, server actions, database
    queries, Supabase configuration, tables, authentication,
    authorization, or Row Level Security (RLS).
-   Data models, schemas, types, property records, room details, prices,
    availability handling, or admin-managed content.
-   Routes, URLs, query parameters, links, navigation destinations, or
    existing redirects.
-   WhatsApp, phone, email, analytics, tracking pixels, SEO metadata,
    structured data, or other integrations.
-   Existing image sources, uploaded assets, or content-management
    behavior, unless a purely presentational image treatment is needed.
    Never replace real content with invented data.
-   Dependencies, framework configuration, environment variables,
    deployment configuration, or build setup unless absolutely
    required---and do not make such changes for styling convenience.

Do not remove working features or replace real functionality with static
mockups. Do not add a new booking engine, payment flow, availability
system, backend, or new feature.

If a visual improvement appears to require changing logic or content,
**keep the existing behavior and choose a styling-only alternative**.

## Reference design direction

Use the screenshots supplied with this task as the visual reference. The
target is a premium, luxury hill-station/resort aesthetic for Aamby
Valley City, presented by Lonavala Gateway.

### Visual identity

-   Deep forest-green and near-black green backgrounds.
-   Warm champagne gold / muted gold for accents, borders, icons,
    dividers, and calls to action.
-   White and warm ivory typography with strong contrast.
-   Large, elegant editorial serif headings paired with a clean,
    readable sans-serif for body copy and interface labels.
-   Large scenic imagery featuring hills, lakes, cottages, resort
    interiors, dining, wellness, golf, and outdoor experiences. Use
    existing approved assets wherever possible.
-   Dark image overlays or bottom gradients behind text so text remains
    legible.
-   Fine gold outlines, restrained rounded corners, subtle shadows, and
    polished spacing.
-   Premium, calm, cinematic, sophisticated presentation. Avoid a
    generic SaaS dashboard appearance, excessive gradients, loud colors,
    cartoon icons, or overly playful UI.
-   Use consistent line icons where suitable. Do not let icons replace
    or alter existing text.

### Overall page composition

Retain the current page's content and section order. Restyle each
existing section to fit the reference design. The screenshots show these
design patterns where the corresponding sections already exist:

1.  **Header / navigation**
    -   Premium dark-green header.
    -   Existing Lonavala Gateway logo and tagline remain unchanged.
    -   Keep all current navigation links, phone/WhatsApp actions, menu
        behavior, and destinations.
    -   Gold or ivory icon treatments with accessible tap targets.
2.  **Aamby Valley City hero**
    -   Full-width scenic background or image-led hero.
    -   Dark overlay for text readability.
    -   Existing eyebrow text, heading, description, and links must
        remain exactly as they are.
    -   Use a refined serif heading with selected gold emphasis only if
        this can be done without changing the wording.
    -   Present the existing stay/enquiry search panel as a premium
        translucent dark panel with subtle borders, clear field
        separation, and a prominent gold CTA.
    -   Preserve the current fields, defaults, validation, and submit
        behavior.
3.  **Accommodation options**
    -   Premium image cards in a responsive grid.
    -   Use a large photo, dark lower gradient, existing accommodation
        title and description, existing details/features, and the
        existing action.
    -   Gold or dark-green category badges and thin gold borders.
    -   Keep every existing accommodation and its existing data. Do not
        add, delete, rename, reorder, or fabricate accommodation
        entries.
    -   Match the reference's editorial image-card look while keeping
        cards readable on mobile.
4.  **Amenities and facilities**
    -   Use consistent image-led cards or tiles, with existing names,
        images, icons, and links.
    -   Maintain the same content and behavior. Use the reference's
        deep-green background, gold accents, and clean two-column
        desktop grid where appropriate.
5.  **Dining and food**
    -   Use rich, warm dining photography with dark overlays and elegant
        card styling.
    -   Preserve all current restaurant names, text, links, and any
        disclaimer.
6.  **Experiences, recreation, and nearby attractions**
    -   Create visually consistent cards or tiles with scenic imagery,
        clear labels, and existing navigation actions.
    -   Preserve all current activities, attraction information, and
        destinations.
7.  **Location / map**
    -   Restyle the surrounding section to match the dark-green/gold
        visual system.
    -   Do not replace, reposition incorrectly, or break the existing
        map, map embed, directions link, or location data.
8.  **Enquiry process, property information, amenities list, and other
    informational sections**
    -   Keep every existing section and all its copy.
    -   Improve hierarchy, spacing, typography, separators, list
        styling, and responsive behavior.
    -   Use the premium visual language consistently without hiding
        useful information.
9.  **Footer and floating actions**
    -   Use a dark-green footer with existing branding, links, contact
        information, and legal details.
    -   Preserve all floating WhatsApp/contact buttons and their
        existing destinations and behavior.

Only style sections that actually exist in the current application. Do
not create duplicate sections simply because a reference screenshot
contains them.

## Technical implementation requirements

1.  Inspect the project structure and identify the current framework,
    styling system, page entry point, reusable components, assets, and
    form/integration code before editing.
2.  Work inside the existing project and use its current framework,
    libraries, conventions, and design system where practical. Do not
    migrate frameworks or introduce a new UI library just to implement
    the design.
3.  Prefer reusable presentational components and shared style tokens
    for colors, typography, spacing, borders, shadows, and card
    treatments.
4.  Separate presentation from behavior. Keep event handlers, state,
    hooks, validation, data fetching, form submission, API calls, and
    integrations unchanged.
5.  If existing components combine logic and presentation, make the
    smallest safe changes possible. Do not rewrite the component's
    business logic.
6.  Use existing image assets and URLs. Preserve image meaning and data
    associations. If new image assets are not provided, do not invent
    local file paths or use broken image URLs.
7.  Ensure all content is responsive:
    -   **Mobile:** polished single-column or compact grids, readable
        text, properly sized controls, no horizontal overflow, and
        comfortable touch targets.
    -   **Tablet:** balanced two-column layouts where appropriate.
    -   **Desktop:** spacious layouts, well-proportioned cards, clear
        section hierarchy, and consistent maximum content width.
8.  Preserve semantic HTML, keyboard navigation, visible focus states,
    accessible contrast, meaningful alt text, and reduced-motion
    preferences.
9.  Avoid unnecessary animations. Any decorative transitions must be
    subtle and must not interfere with existing interactions.
10. Do not add placeholder content, fake availability, sample prices,
    fake testimonials, or mock data.
11. Do not remove existing SEO content or metadata. Keep heading
    semantics sensible while preserving the exact wording of existing
    copy.
12. Do not reformat or refactor unrelated files.

## Required workflow

### Phase 1 --- Audit before editing

-   Identify the landing page and all components used by it.
-   Locate the current styles and assets.
-   Identify all interactive elements and integrations, especially the
    enquiry form, date/guest/room controls, accommodation actions,
    contact links, map, and responsive menu.
-   Record the current behavior so it can be verified after the
    redesign.
-   Note any uncertainty before making a risky change.

### Phase 2 --- Implement the visual redesign

-   Update styles and presentational markup only where necessary.
-   Match the provided references' dark forest-green, gold, scenic,
    premium visual direction.
-   Keep all existing content, data, behavior, and section order.
-   Reuse existing components and assets wherever possible.
-   Do not stop after producing a plan or mockup: implement the changes
    in the repository.

### Phase 3 --- Verify and fix

-   Run the project's existing lint, type-check, tests, and production
    build commands where available.
-   Resolve issues caused by the visual changes.
-   Test the landing page at mobile, tablet, and desktop viewport sizes.
-   Check for overflow, clipped text, broken images, poor contrast,
    misaligned cards, and unusable form controls.
-   Verify that the enquiry form still validates and submits exactly as
    before.
-   Verify the date/guest/room controls, navigation, accommodation
    buttons, map/directions, phone/WhatsApp actions, and footer links
    still work.
-   Confirm that API calls, database interactions, tracking, and routes
    have not been changed.
-   Review the final page side by side with the supplied reference
    screenshots.

## Acceptance checklist

Before finishing, confirm all of the following:

-   [ ] The result is an update to the existing website, not a separate
    replacement application.
-   [ ] Only visual design and responsive presentation have changed.
-   [ ] Existing copy is unchanged, including headings, labels,
    descriptions, and button text.
-   [ ] Existing sections and content have not been removed, added, or
    reordered.
-   [ ] Existing data and images remain correctly associated with their
    content.
-   [ ] Forms, validation, state, API calls, database behavior, routes,
    and integrations remain unchanged.
-   [ ] No mock data, fake functionality, or broken image paths were
    introduced.
-   [ ] The page works on mobile, tablet, and desktop.
-   [ ] Existing lint/type-check/build/tests pass where configured.
-   [ ] Any issue that could not be verified is explicitly reported
    instead of being claimed as working.

## Final report

After implementing the redesign, provide a concise report containing:

1.  Files changed and the visual updates made.
2.  Confirmation that content and behavior were preserved.
3.  Checks/tests/build commands run and their results.
4.  Any issue that remains unresolved.

**Final instruction:** Treat this as a visual skin/theme redesign of the
current Lonavala Gateway Aamby Valley City page---not a content rewrite,
feature update, or application rebuild. When in doubt, preserve the
existing implementation.
