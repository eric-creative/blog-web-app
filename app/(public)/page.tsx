import Image from "next/image";
import NavigationBar from "@/components/public/navigation";
import HeroSection from "@/components/public/hero-section";
import Brand from "@/components/public/brands";
import Articles from "@/components/public/articles";
import Footer from "@/components/public/footer";
import React from "react";

export default function Home() {
    return (
        <div className={' relative'}>

            <HeroSection/>
            <Brand/>
            {/*<RecentBlog />*/}
            <Articles/>
        </div>
    );
}
