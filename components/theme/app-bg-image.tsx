import Image from "next/image";

export default function AppBgImg() {
    return <Image
        src={'/images/background.jpg'}
        fill
        alt={'maua background images'}
        sizes="100vw"
        style={{
            objectFit: 'cover',
            zIndex: -1
        }}
    />
}