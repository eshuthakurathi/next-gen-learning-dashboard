# 🚀 Next-Gen Learning Dashboard

A futuristic student learning dashboard built using Next.js App Router, Supabase, Tailwind CSS, and Framer Motion.

This project was designed around the idea of creating a premium-feeling frontend experience focused on:

* smooth animations
* responsive Bento-grid layouts
* server-rendered data fetching
* scalable component structure
* zero-layout-shift interactions

---

# ✨ Features

* Dark futuristic UI
* Bento-style responsive dashboard
* Dynamic course cards from Supabase
* React Server Component data fetching
* Animated loading skeletons
* Error handling UI
* Framer Motion stagger animations
* Spring-based hover interactions
* Animated progress bars
* Sidebar layout animations using `layoutId`
* Mobile bottom navigation
* Tablet adaptive sidebar
* Dynamic Lucide React icons
* Reusable component architecture
* Semantic HTML structure
* Responsive layouts across desktop, tablet, and mobile

---

# 🛠 Tech Stack

| Technology         | Usage                         |
| ------------------ | ----------------------------- |
| Next.js App Router | Framework & Server Components |
| Supabase           | PostgreSQL database & backend |
| Tailwind CSS       | Styling                       |
| Framer Motion      | Animations                    |
| Lucide React       | Icons                         |
| TypeScript         | Type safety                   |

---

# 📁 Project Structure

```bash id="4g4w4x"
app/
 ├── globals.css
 ├── layout.tsx
 ├── loading.tsx
 ├── page.tsx

components/
 ├── ActivityCard.tsx
 ├── CourseCard.tsx
 ├── DashboardContent.tsx
 ├── HeroCard.tsx
 ├── Sidebar.tsx

lib/
 └── supabase/
      └── server.ts

public/

.env.example
next.config.ts
eslint.config.mjs
package.json
```

---

# ⚡ Architecture Decisions

## Why Next.js App Router?

The App Router enables React Server Components, allowing course data to be fetched securely on the server while reducing unnecessary client-side JavaScript.

Benefits:

* improved performance
* reduced client bundle size
* better scalability
* cleaner data architecture

---

## Server / Client Component Split

### Server Components

Used for:

* Supabase data fetching
* rendering server-driven UI
* reducing hydration overhead

### Client Components

Used only where interactivity is required:

* Framer Motion animations
* sidebar interactions
* animated progress bars
* hover effects
* navigation state

This separation keeps the application performant while maintaining a highly interactive UI.

---

# 🗄 Supabase Integration

Course data is fetched dynamically from a Supabase PostgreSQL database.

## Database Schema

```sql id="q2jmb5"
create table courses (
  id uuid primary key default gen_random_uuid(),
  title text,
  progress integer,
  icon_name text,
  created_at timestamp default now()
);
```

Mock seed data was inserted manually to simulate real dashboard content.

---

# 🎞 Animation Strategy

Framer Motion was used heavily to create smooth and responsive interactions.

Implemented interactions:

* staggered page load animations
* spring hover scaling
* animated progress indicators
* sidebar active-state transitions
* subtle gradient hover effects

To avoid layout shifts:

* animations rely primarily on `transform` and `opacity`
* spring physics were tuned for natural movement
* transitions avoid repaint-heavy properties where possible

---

# 📱 Responsive Design

## Desktop (>1024px)

* full sidebar
* multi-column Bento layout

## Tablet (768px–1024px)

* icon-only sidebar
* 2-column responsive grid

## Mobile (<768px)

* bottom navigation bar
* single-column scrolling layout

The layout was tested to avoid:

* horizontal scrolling
* overflow issues
* unstable spacing across breakpoints

---

# 🧩 Loading & Error Handling

## Loading States

Skeleton loaders with subtle pulsing animations were implemented using:

* `loading.tsx`
* Suspense boundaries

## Error Handling

Graceful fallback UI was implemented for:

* database failures
* rendering issues
* missing course data

---

# 🔐 Environment Variables

Create a `.env.local` file in the project root:

```env id="97b2d0"
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

# 📦 Installation

Clone the repository:

```bash id="tdx9zn"
git clone <your-repository-url>
```

Install dependencies:

```bash id="9q95zh"
npm install
```

Run development server:

```bash id="33nmz6"
npm run dev
```

---

# 🚀 Deployment

The application is deployed using Vercel.

Production build:

```bash id="y5b9y8"
npm run build
```

---

# 📌 Challenges Faced

* Preventing layout shifts during animations
* Maintaining responsiveness across breakpoints
* Structuring reusable components cleanly
* Managing Server/Client Component separation
* Balancing animation quality with performance

---

# ✅ Final Notes

This project was built to simulate a modern frontend application rather than a static UI mockup.

Special focus was given to:

* interaction quality
* responsive behavior
* animation performance
* clean architecture
* real database integration
* smooth user experience
