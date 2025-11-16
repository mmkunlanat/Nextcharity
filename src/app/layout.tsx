import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './globals.css'


export const metadata: Metadata = {
title: 'Clothing Store',
description: 'Simple clothing e-commerce built with Next.js',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>
<Navbar />
<main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
{children}
</main>
<Footer />
</body>
</html>
)
}