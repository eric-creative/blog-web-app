'use client'
import React from 'react';
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ReactTyped} from "react-typed";

function RecentBlog() {
    return (
        <div className={'flex flex-col items-center justify-center md:gap-10'}>
            {
                articles.map((article, idx) => {
                    return (
                        <div
                            key={idx}
                            className={'md:w-full h-auto flex flex-col md:flex-row gap-3 justify-between md:items-start'}>
                            <div className="md:w-[260px] flex justify-center items-center border">
                                <AspectRatio ratio={8 / 8} className={''}>
                                    <Image
                                        src="/images/img02.jpg"
                                        fill
                                        alt="Image"
                                        className="rounded-md object-cover"
                                    />
                                </AspectRatio>
                            </div>
                            <div className={'md:w-full h-full py-2 md:p-5 flex flex-col gap-3 md:gap-5'}>
                                <div className={'h-auto w-full flex gap-5'}>
                                    {
                                        article?.categories?.map((category, index) => {
                                            return (
                                                <Button
                                                    variant={'outline'}
                                                    size={'sm'}
                                                    className={'rounded'}
                                                    key={'index'}
                                                >
                                                    {category?.name}
                                                </Button>
                                            )
                                        })
                                    }
                                </div>
                                <div className={'h-auto w-full flex flex-col gap-2'}>
                                    <Link href={'/'}>
                                        <h2 className={'text-xl md:text-3xl text-ellipsis hover:underline transition-all ease-in-out duration-1000'}>
                                            {article?.title}
                                        </h2>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

const articles = [
    {
        id: 203948597,
        title: "Understanding CSS Basics: Easy and Fun for Beginners",
        content: "",
        categories: [
            {
                id: 203948596,
                name: "HTML",
                created_at: "23/12/2024",
                edited_at: "16/01/2025"
            },
            {
                id: 203948596,
                name: "CSS",
                created_at: "23/12/2024",
                edited_at: "16/01/2025"
            },
            {
                id: 203948596,
                name: "JAVA SCRIPT",
                created_at: "23/12/2024",
                edited_at: "16/01/2025"
            }
        ],
        created_at: "24/12/2024",
        edited_at: "17/01/2025"
    },
    {
        id: 203948598,
        title: "JavaScript for Beginners: Making Your First Interactive Web Page",
        content: "",
        categories: [
            {
                id: 203948596,
                name: "HTML",
                created_at: "23/12/2024",
                edited_at: "16/01/2025"
            },
            {
                id: 203948596,
                name: "CSS",
                created_at: "23/12/2024",
                edited_at: "16/01/2025"
            },
            {
                id: 203948596,
                name: "JAVA SCRIPT",
                created_at: "23/12/2024",
                edited_at: "16/01/2025"
            }
        ],
        created_at: "25/12/2024",
        edited_at: "18/01/2025"
    },

]

export default RecentBlog;