import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'ZORIVA — Intelligence for a Better Tomorrow',description:'We build practical AI, intelligent automation, and industrial intelligence that move businesses forward.',metadataBase:new URL('https://zoriva-website.vercel.app'),openGraph:{title:'ZORIVA — Intelligence for a Better Tomorrow',description:'Practical intelligence. Meaningful impact.',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
