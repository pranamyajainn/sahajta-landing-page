import React from "react";

// Shared primitive for the 4-point star "sparkle" seen in all icons.
const Sparkle = () => (
    <path
        d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
        fill="currentColor"
        stroke="none"
        transform="scale(0.5) translate(4, 4)"
    />
);

export const ImageGenIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="6" y="8" width="20" height="16" rx="1.5" />
        <path d="M6 18 L12 12 L18 18 L20 16 L26 22" />
        <Sparkle />
    </svg>
);

export const VoiceAssistantsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 18 A5 5 0 0 1 20 18" />
        <path d="M8 24 A9 9 0 0 1 24 24" />
        <path d="M25 8 A4 4 0 0 1 25 16" />
        <path d="M28 5 A8 8 0 0 1 28 19" />
        <circle cx="16" cy="12" r="3" stroke="none" />
        <g transform="translate(4, -2)"><Sparkle /></g>
    </svg>
);

export const WorkflowAutomationIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="12" y="8" width="8" height="5" rx="1" />
        <rect x="12" y="19" width="8" height="5" rx="1" />
        <path d="M8 10 h4" />
        <path d="M20 10 h4 v7 h-4" />
        <path d="M8 21 h4" />
        <path d="M8 10 v11" />
        <g transform="translate(-2, 0)"><Sparkle /></g>
    </svg>
);

export const VideoGenIcon2 = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="4" y="6" width="24" height="20" rx="1" />
        <line x1="8" y1="6" x2="8" y2="26" />
        <line x1="24" y1="6" x2="24" y2="26" />
        <line x1="4" y1="11" x2="8" y2="11" />
        <line x1="4" y1="16" x2="8" y2="16" />
        <line x1="4" y1="21" x2="8" y2="21" />
        <line x1="24" y1="11" x2="28" y2="11" />
        <line x1="24" y1="16" x2="28" y2="16" />
        <line x1="24" y1="21" x2="28" y2="21" />
        <g transform="translate(6, 6)"><Sparkle /></g>
    </svg>
);

export const ContextualAgentsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 4 C10 4 6 8 6 14 C6 18 8 20 8 23 C8 24 10 26 12 26 L12 22 C14 22 15 21 16 20 C19 20 22 17 22 14 C22 8 19 4 16 4 Z" />
        <path d="M22 14 C24 14 25 15 25 17 C25 18 24 19 22 19" />
        <g transform="translate(4, 4)"><Sparkle /></g>
    </svg>
);

export const RealtimeAgentsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M6 16 A 10 10 0 1 1 26 16 A 10 10 0 0 1 12 25.8 L8 28 L8 24.5 A 10 10 0 0 1 6 16 Z" />
        <line x1="12" y1="12" x2="12" y2="20" />
        <line x1="16" y1="10" x2="16" y2="22" />
        <line x1="20" y1="14" x2="20" y2="18" />
        <g transform="translate(10, -4) scale(0.8)"><Sparkle /></g>
    </svg>
);

export const InternalToolsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="4" y="8" width="24" height="16" rx="1" />
        <line x1="4" y1="12" x2="28" y2="12" />
        <rect x="18" y="18" width="2" height="6" />
        <rect x="22" y="14" width="2" height="10" />
        <rect x="14" y="21" width="2" height="3" />
        <g transform="translate(0, 4) scale(0.8)"><Sparkle /></g>
    </svg>
);

export const ContentCreationIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="10" y="4" width="12" height="24" rx="2" />
        <line x1="14" y1="24" x2="18" y2="24" />
        <g transform="translate(-2, 10)"><Sparkle /></g>
    </svg>
);
