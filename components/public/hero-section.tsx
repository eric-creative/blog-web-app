'use client'

import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Link1Icon} from "@radix-ui/react-icons";
import Link from "next/link";
import {ReactTyped} from "react-typed";

const HeroSection = () => {
    const descriptions = "The old bookstore";
    const title = 'hello world'
    return (
        <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

            <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                <img
                    className="h-full w-full object-cover border !border-primary"
                    src="https://imgs.search.brave.com/M6E-9VkJeZbSe0QGhukOqc8L97vrLNMeJKNWYZR_Uu4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MzQ2NjU0ODI0MDMt/YTkwOWQwZDk3YzY3/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRGOGZI/QnliMmR5WVcxdFpY/SjhaVzU4TUh4OE1I/eDhmREE9.jpeg"
                    alt="Winding mountain road"
                />
            </div>
            <div
                className=" h-[360px] w-full max-w-lg border border-secondary bg-gray-100 dark:bg-black/80 md:max-w-2xl md:z-10 md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-3 xl:ml-12">
                <div className="flex flex-col gap-4 p-12 md:px-16 relative h-full">
                    <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
                        <ReactTyped loopCount={1} strings={[title]} typeSpeed={50} backSpeed={0} loop></ReactTyped>
                    </h2>
                    <p className="text-lg font-medium lg:text-xl">
                        <ReactTyped backDelay={5000} strings={[descriptions]} typeSpeed={50} backSpeed={0} loop></ReactTyped>
                    </p>
                    <div className=" bottom-10 absolute">
                        <Link href={'/'}>
                            <Button variant={'link'} className={'flex gap-2'}>
                                Read more
                                <Link1Icon/>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;