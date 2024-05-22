import type {Metadata} from "next";
import "../globals.css";
import {Anek_Gurmukhi as FontSans} from "next/font/google"
import {cn} from "@/lib/utils"
import {ThemeProvider} from "@/components/theme/theme-provider";
import NavigationBar from "@/components/public/navigation";
import React from "react";
import RecentBlog from "@/components/public/recent-blog";

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
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
            )}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className={' md:container'}>
                <NavigationBar/>
                <RecentBlog />
                {children}
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
