import {ModeToggle} from "@/components/theme/theme-button";
import {Button} from "@/components/ui/button";
import {DiscordLogoIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";
import Link from "next/link";
import {FingerprintIcon, SearchIcon} from "lucide-react";
import {SearchCom} from "@/components/public/search-com";


export default function NavigationBar() {

    return (
        <div className={'md:w-full h-auto top-0 border-b border-primary-foreground flex flex-col justify-between items-center'}>
            <div className={'md:w-full flex justify-end items-center gap-2'}>
                <Button variant={'outline'} size={'icon'} className={''}><GitHubLogoIcon /></Button>
                <Button variant={'outline'} size={'icon'} className={''}><InstagramLogoIcon /></Button>
                <Button variant={'outline'} size={'icon'} className={''}><DiscordLogoIcon /></Button>
                <Button variant={'outline'} size={'icon'} className={''}><LinkedInLogoIcon /></Button>
            </div>
            <div className={'w-full flex justify-between items-center gap-2 py-5 px-5'}>
                <Link href={'/'} className={'flex justify-center items-center gap-4'}>
                    <FingerprintIcon size={50} />
                    <div className={'flex flex-col justify-start items-start gap-1'}>
                        <h1 className={'uppercase text-lg md:text-xl tracking-widest'}>electron.</h1>
                        <p className={'text-xs tracking-wider'}>Codding with Electron</p>
                    </div>
                </Link>
                <div className={'w-full text-sm hidden md:flex justify-end items-center gap-4'}>
                    <Link href={'/'}>Blogs</Link>
                    <Link href={'/'}>Tags</Link>
                    <Link href={'/'}>About</Link>
                    <SearchCom />
                    <ModeToggle />
                </div>

            </div>
        </div>
    )
}