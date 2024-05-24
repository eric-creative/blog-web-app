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

            <DialogContent className="sm:max-w-[725px] !p-0 border-none !rounded-sm">
                <form className={'flex rounded-sm'} >
                    <Button className={'h-full'}><SearchIcon /></Button>
                    <input id="name" placeholder={'Search here...'} className="w-full p-3 outline-none"/>
                </form>
            </DialogContent>
        </Dialog>
    )
}
