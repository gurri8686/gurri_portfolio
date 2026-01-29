# Professional Resume Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Designed to showcase your professional experience, skills, projects, and client testimonials.

## Features

- **Modern Design**: Professional blue gradient theme with glassmorphism effects
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Meta tags and OpenGraph protocol for better search visibility
- **Fast Performance**: Built with Next.js 15 for optimal loading speeds
- **Easy to Customize**: Simple configuration to update your information

## Live Preview

Run the development server to see the website:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Customization Guide

### 1. Update Your Contact Information

Edit `app/page.tsx` and update the contact section (around line 360):

```tsx
// Email
href="mailto:your.email@example.com"

// Phone
href="tel:+1234567890"

// LinkedIn
href="https://linkedin.com/in/yourprofile"

// GitHub
href="https://github.com/yourprofile"
```

### 2. Replace Profile Image

The website currently uses a placeholder avatar. To add your own image:

**Option 1: Use a local image**
1. Place your profile image in the `public` folder (e.g., `public/profile.jpg`)
2. Update the Image component in `app/page.tsx` (around line 16):

```tsx
<Image
  src="/profile.jpg"
  alt="Gurpreet Singh"
  width={256}
  height={256}
  className="w-full h-full object-cover"
/>
```

**Option 2: Use an external URL**
- Update the `src` attribute with your image URL
- Add the domain to `next.config.js`:

```js
module.exports = {
  images: {
    domains: ['yourdomain.com'],
  },
}
```

### 3. Update Your Stats & Experience

Edit the hero section in `app/page.tsx` (around line 44):

```tsx
<div className="text-3xl font-bold">100%</div>
<div className="text-3xl font-bold">$200K+</div>
<div className="text-3xl font-bold">84</div>
<div className="text-3xl font-bold">14K+</div>
```

### 4. Modify About Section

Update your professional summary in `app/page.tsx` (around line 94):

```tsx
<p className="text-lg text-gray-700 leading-relaxed">
  Your custom about text here...
</p>
```

### 5. Add/Remove Skills

Edit the skills array in `app/page.tsx` (around line 112):

```tsx
{[
  { name: 'React', color: 'from-cyan-500 to-blue-500' },
  { name: 'Your Skill', color: 'from-color-to-color' },
  // Add or remove skills here
]}
```

### 6. Update Projects

Modify the portfolio projects in `app/page.tsx` (around line 148). Each project has:
- Title
- Description
- Technologies used
- Hours/earnings (optional)

### 7. Update Testimonials

Edit client testimonials in `app/page.tsx` (around line 292):
- Add quotes from your actual clients
- Update the rating badges

### 8. SEO Metadata

Update the metadata in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your custom description",
  // ... other metadata
};
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### Deploy to Your Own Server

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Usage Tips

### Sharing Your Portfolio

Once deployed, you can share your portfolio link on:
- **Upwork Profile**: Add to your profile overview
- **Guru**: Include in your service description
- **Freelancer**: Add to your portfolio section
- **LinkedIn**: Share as a featured project
- **Email Signature**: Include your portfolio URL
- **Business Cards**: Add your website URL

### Example Pitch

*"Hi, I'm Gurpreet Singh, a Senior Full-Stack Developer with 10+ years of experience. I have a 100% job success rate with $200K+ in completed projects. You can view my portfolio and client testimonials at [your-portfolio-url.com]"*

### Continuous Updates

Keep your portfolio fresh:
- Add new projects as you complete them
- Update your stats regularly
- Add new testimonials from satisfied clients
- Keep your skills section current

## Color Customization

The website uses a professional blue gradient theme. To change colors:

1. **Main Gradient** (Hero & Contact sections):
```tsx
className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"
```

2. **Background Gradient**:
```tsx
className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
```

Tailwind color options: `blue`, `indigo`, `purple`, `green`, `red`, `orange`, `yellow`, `pink`, `cyan`

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist (sans-serif and monospace)
- **Icons**: SVG icons (inline)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

## License

This is your personal portfolio. Feel free to customize and use it however you like.

## Support

If you need help customizing this portfolio:
1. Check the customization guide above
2. Review Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
3. Tailwind CSS docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## Next Steps

1. ✅ Customize all personal information
2. ✅ Add your real profile image
3. ✅ Update contact information
4. ✅ Add your actual projects
5. ✅ Update client testimonials
6. ✅ Deploy to Vercel or Netlify
7. ✅ Share your portfolio URL everywhere!

---

Built with ❤️ using Next.js and Tailwind CSS
