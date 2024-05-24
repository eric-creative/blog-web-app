import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {BellRingIcon, FingerprintIcon} from "lucide-react";
import Image from "next/image";
import {DiscordLogoIcon, GitHubLogoIcon} from "@radix-ui/react-icons";

const Footer = () => {
    return (
        <div className={'h-auto flex bg-background flex-col justify-center items-center'}>
            <div className={'relative w-full h-56 border-b border-[#18181a]'}>
                <Image src={'/images/footer.png'} alt={'footer image'} fill className={' object-fit '}/>
            </div>
            <footer className=" bg-[#18181a] w-full">
                    <div className="px-6 pb-10 pt-16">
                        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                            <div className="space-y-4">
                                <div>
                                    <a href="/">
                                        <div className="flex items-center space-x-2 text-2xl font-medium">
                                            <FingerprintIcon size={50} className={'text-white'}/>
                                            <span className="text-white">ELECTRON</span>
                                        </div>

                                    </a>
                                </div>
                                <div className="max-w-md pr-16 text-md text-gray-200">Enhance productivity and
                                    efficiency with cutting-edge artificial intelligence solutions for your business
                                    operations.
                                </div>
                                <div className="flex space-x-4">
                                    <a href="https://github.com/PetitMaestro" target="_blank" className="text-gray-200 hover:text-gray-200">
                                        <span className="sr-only">GitHub</span>
                                        <GitHubLogoIcon className={'h-6 w-6'} />
                                    </a>
                                    <a href="https://discord.com/eric_kweyunga" target="_blank" className="text-gray-200 hover:text-gray-200">
                                        <span className="sr-only">Discord</span>
                                        <DiscordLogoIcon className={'h-6 w-6'} />
                                    </a>
                                </div>
                            </div>
                            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div></div>
                                    <div>
                                        <h3 className="text-md font-semibold leading-6 text-white">Our Solutions</h3>
                                        <ul role="list" className="mt-6 space-y-4">
                                            <li>
                                                <a href="/aiplatform"
                                                   className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                                >
                                                    Web Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/aialgorithms"
                                                   className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                                >
                                                    Remote Computer Assistance
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/industryapplications"
                                                   className="text-md leading-6 text-gray-300 hover:text-gray-50"
                                                >
                                                    Hosting Service Webinar
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <h3 className="text-md font-semibold leading-6 text-white">Resources</h3>
                                        <ul role="list" className="mt-6 space-y-4">
                                            {/*<li>*/}
                                            {/*    <a href="/pricing"*/}
                                            {/*       className="text-md leading-6 text-gray-300 hover:text-gray-50">Pricing*/}
                                            {/*    </a>*/}
                                            {/*</li>*/}
                                            <li>
                                                <a href="/blog"
                                                   className="text-md leading-6 text-gray-300 hover:text-gray-50">Blog
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/terms"
                                                   className="text-md leading-6 text-gray-300 hover:text-gray-50">Terms
                                                    of Service
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/privacy"
                                                   className="text-md leading-6 text-gray-300 hover:text-gray-50">Privacy
                                                    Policy
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-10 md:mt-0">
                                        <h3 className="text-md font-semibold leading-6 text-white">Company</h3>
                                        <ul role="list" className="mt-6 space-y-4">
                                            <li>
                                                <a href="/about"
                                                   className="text-md leading-6 text-gray-300 hover:text-gray-50">About
                                                    Us
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/contact"
                                                   className="text-md leading-6 text-gray-300 hover:text-gray-50">Contact
                                                    Us
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 border-t border-primary/20 pt-8 sm:mt-20 lg:mt-24">
                            <div className="text-md text-center text-white">
                                Copyright &copy; electronics 2024
                            </div>
                        </div>
                    </div>
            </footer>
        </div>
    );
};

export default Footer;