export function StructuredData() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Sahajta AI Solution Pvt Ltd',
        alternateName: 'Sahajta AI',
        description: 'AI-powered MVP development studio for founders and early-stage startups. Ships production-grade AI products in 24–48 hours.',
        url: 'https://sahajta.com',
        logo: 'https://sahajta.com/sahajta-logo.png',
        foundingDate: '2025',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Bengaluru',
            addressRegion: 'Karnataka',
            addressCountry: 'IN',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            email: 'hello@sahajta.com',
            contactType: 'sales',
        },
        founder: [
            { '@type': 'Person', name: 'Pranamya Jain', jobTitle: 'Co-Founder & Solutions Architect' },
            { '@type': 'Person', name: 'Shubhang Sethi', jobTitle: 'Co-Founder & CEO' },
        ],
        knowsAbout: [
            'AI MVP Development',
            'Large Language Models',
            'Agentic Workflows',
            'RAG Systems',
            'Next.js Development',
            'AI Product Engineering',
            'n8n Automation',
            'Website Design and Development',
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'AI Development Services',
            itemListElement: [
                { '@type': 'Offer', name: 'AI Automation & Agents', price: '40000', priceCurrency: 'INR' },
                { '@type': 'Offer', name: 'Website Design & Development', price: '35000', priceCurrency: 'INR' },
                { '@type': 'Offer', name: 'AI Feature Integration', price: '75000', priceCurrency: 'INR' },
                { '@type': 'Offer', name: 'MVP Engineering', description: 'Scoped per project' },
            ],
        },
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What kind of businesses does Sahajta AI work with?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Sahajta AI works with seed to Series B founders, product leads, and indie builders who need production-grade AI shipped fast. If you have a real problem and a budget, they can help.',
                },
            },
            {
                '@type': 'Question',
                name: 'How fast can Sahajta AI ship an MVP?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The SLA is 24–48 hours to a live product environment for scoped projects. Larger integrations are broken into daily deployable milestones.',
                },
            },
            {
                '@type': 'Question',
                name: 'Do clients own the code after the project?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Full IP transfer. You get the repo, the docs, and zero vendor lock-in.',
                },
            },
            {
                '@type': 'Question',
                name: 'What does an engagement with Sahajta AI look like?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Discovery call → architecture review → SLA agreement → daily builds → handover. No retainers unless you want ongoing support.',
                },
            },
            {
                '@type': 'Question',
                name: 'How much does AI MVP development cost?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Projects are scoped and priced per engagement. AI Automation starts from ₹40K, Website Design from ₹35K, AI Feature Integration from ₹75K, and MVP Engineering is scoped per project.',
                },
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
