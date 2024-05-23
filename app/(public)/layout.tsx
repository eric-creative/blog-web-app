import type {Metadata} from "next";
import "../globals.css";
import {Gabarito as FontSans} from "next/font/google"
import {cn} from "@/lib/utils"
import {ThemeProvider} from "@/components/theme/theme-provider";
import NavigationBar from "@/components/public/navigation";
import React from "react";
import RecentBlog from "@/components/public/recent-blog";
import Footer from "@/components/public/footer";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: "Electron",
    description: "Codding portal",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased font-extralight",
                fontSans.variable
            )}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className={' relative'}>
                <NavigationBar/>
                <div className={'md:container py-20'}>
                    <RecentBlog />
                    {children}
                </div>
                <Footer />
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
