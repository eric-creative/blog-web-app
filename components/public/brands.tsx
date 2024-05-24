import React from "react";

const brandsData = [
    {
        imageSrc:
            "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids.svg",
        lightImageSrc:
            "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids-white.svg",
        altText: "graygrids",
        link: "#",
    },
    {
        imageSrc:
            "https://cdn.tailgrids.com/2.2/assets/images/brands/lineicons.svg",
        lightImageSrc:
            "https://cdn.tailgrids.com/2.2/assets/images/brands/lineIcons-white.svg",
        altText: "lineicons",
        link: "#",
    },
    {
        imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck.svg",
        lightImageSrc:
            "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck-white.svg",
        altText: "uideck",
        link: "#",
    },
    {
        imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui.svg",
        lightImageSrc:
            "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui-white.svg",
        altText: "ayroui",
        link: "#",
    },
];

export default function Brand() {
    return (
        <section className="bg-background pt-5 lg:pt-[120px] dark:bg-dark">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="flex flex-wrap items-center justify-center">
                            {brandsData.map((brand, i) => (
                                <SingleImage key={i} brand={brand} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const SingleImage = ({ brand }:{ brand:any }) => {
    const { link, imageSrc, lightImageSrc, altText } = brand;
    return (
        <>
            <a
                href={link}
                className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
            >
                <img src={imageSrc} alt={altText} className="h-10 w-full dark:hidden" />
                <img
                    src={`${ lightImageSrc }`}
                    alt={altText}
                    className="hidden h-10 w-full dark:block"
                />
            </a>
        </>
    );
};
