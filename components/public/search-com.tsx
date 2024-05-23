import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {SearchIcon} from "lucide-react";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export function SearchCom() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'ghost'} size={'icon'} className={'rounded-full'}><SearchIcon/></Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[725px] !p-0 border-none rounded-sm">
                <form>
                    <input id="name" placeholder={'Search here...'} className="w-full p-3 outline-none"/>
                </form>
                <div className={'w-full flex flex-col h-[447px]'}>
                    <div className={'w-full p-3 text-sm font-extralight'}>
                        <h2>Search results for ....</h2>
                    </div>
                    <div className={'w-full p-3 flex flex-col font-extralight h-full overflow-y-auto'}>

                        {/*search result*/}
                        <div className={'flex w-full gap-5'}>
                            <div className="h-[300px] w-[300px]">
                                <AspectRatio ratio={8 / 8} className={''}>
                                    <Image src="/images/img02.jpg" fill alt="Image"
                                           className="rounded-md object-cover"/>
                                </AspectRatio>
                            </div>
                            <div className={'w-full'}>
                                <Link href={'/'}>
                                    <h2 className={'text-5xl hover:underline'}>
                                        Understanding CSS Basics: Easy and Fun for Beginners
                                    </h2>
                                </Link>
                            </div>
                        </div>

                        <div className={'flex w-full gap-5'}>
                            <div className="h-[300px] w-[300px]">
                                <AspectRatio ratio={8 / 8} className={''}>
                                    <Image src="/images/img02.jpg" fill alt="Image"
                                           className="rounded-md object-cover"/>
                                </AspectRatio>
                            </div>
                            <div className={'w-full'}>
                                <Link href={'/'}>
                                    <h2 className={'text-5xl hover:underline'}>
                                        JavaScript for Beginners: Making Your First Interactive Web Page
                                    </h2>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
