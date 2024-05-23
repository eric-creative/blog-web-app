import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {BellRingIcon} from "lucide-react";
import Image from "next/image";

const Footer = () => {
    return (
        <div className={'w-full h-auto flex bg-background flex-col justify-center items-center'} >
            <div className={'relative w-full h-56'}>
                <Image src={'/images/footer.png'} alt={'footer image'} fill className={' object-fit '} />
            </div>
            <div className={'w-full flex justify-center gap-10 bg-primary-foreground p-10'}>

                <div className={'flex flex-col gap-2'}>
                    <h3 className={'text-xl font-bold'}>SUBSCRIBE TO OUR NEWS LATTER</h3>
                    <form className={'flex flex-col gap-2'}>
                        <input
                            type={'email'}
                            placeholder={'Email address'}
                            className={'px-5 bg-transparent p-3 w-full border outline-none rounded-full'}
                        />
                        <Button variant={'destructive'} className={'rounded-full flex gap-3 justify-center items-center'}>
                            <BellRingIcon />
                            SUBSCRIBE
                        </Button>
                    </form>
                </div>

                <div className={'flex flex-col gap-2'}>
                    <h3 className={'text-xl font-bold'}>ABOUT</h3>
                    <Link href={'/'}>About me</Link>
                    <Link href={'/'}>How to work with me</Link>
                    <Link href={'/'}>What I us</Link>
                </div>

                <div className={'flex flex-col gap-2'}>
                    <h3 className={'text-xl font-bold'}>Portfolio</h3>
                    <Link href={'/'}>Online courses</Link>
                    <Link href={'/'}>My books and other publications</Link>
                    <Link href={'/'}>Open Source</Link>
                    <Link href={'/'}>Tutorials</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;