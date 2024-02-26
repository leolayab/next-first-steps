import type { Metadata } from "next";

export const metadata : Metadata = {
    title: 'Pricing page',
    description: 'SEO Pricing Page',
    keywords: ['Pricing', 'Best price', 'First page', '...']
};
export default function pricingPage(){
    return(
        <span className="text-7xl">Pricing Page...</span>
    );
}