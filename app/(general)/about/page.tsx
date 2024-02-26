import type { Metadata } from "next";

export const metadata : Metadata = {
    title: 'About page',
    description: 'SEO About Page',
    keywords: ['About', 'Product', 'First page', '...']
};
export default function AboutPage() {
    return (
        <span className="text-7xl">About Page...</span>
    );
  }