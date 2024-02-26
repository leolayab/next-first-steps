import type { Metadata } from "next";

export const metadata : Metadata = {
    title: 'Contact page',
    description: 'SEO Contact Page',
    keywords: ['Contact', 'People', 'First page', '...']
};
export default function contactPage(){
    return(
        <span className="text-7xl">Contact Page...</span>
    );
}