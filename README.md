# My Portfolio

A beautiful and creative personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Modern and elegant design with dark neon-purple theme
- Smooth animations and transitions with Framer Motion
- Fully responsive design for all devices
- Interactive components and hover effects
- Project showcase with detailed views
- Contact form with validation
- Clean and minimal folder structure

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Typography**: Poppins

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd void-shaper-io
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Build the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global styles
│   ├── page.tsx           # Home page
│   ├── projects/
│   │   ├── page.tsx       # Projects listing
│   │   └── [id]/page.tsx  # Project detail
│   └── contact/
│       └── page.tsx       # Contact page
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── Timeline.tsx       # Timeline component
│   ├── FloatingParticles.tsx # Background particles
│   ├── ProjectCard.tsx    # Project card
│   └── ContactForm.tsx    # Contact form
└── README.md
```

## Customization

### Colors

The theme colors are defined in `tailwind.config.ts`. You can customize the purple, pink, and blue neon colors to match your preferences.

### Content

Update the project information, timeline events, and other content in the respective page components.

### Styling

Modify the styles in `app/globals.css` and component files to adjust the appearance.

## License

This project is licensed under the MIT License.
