import { Facebook, Github, Instagram, Mail, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className='flex lg:flex-row flex-col items-center justify-evenly gap-10 w-full min-h-screen p-4'>
            <div className=''>
                <p className="text-6xl font-bold text-center">Bornebyte</p>
                <p className="text-lg text-gray-600 text-center">A portfolio website.</p>
                <div className='flex w-full items-center justify-center text-2xl gap-4 my-4'>
                    <Link href={"https://facebook.com/bornebyte"} target='_blank' className='text-blue-500'><Facebook /> </Link>
                    <Link href={"https://instagram.com/bornebyte"} target='_blank' className='text-pink-500'><Instagram /> </Link>
                    <Link href={"https://threads.net/bornebyte"} target='_blank' className='text-blue-500'><Twitter /> </Link>
                    <Link href={"https://github.com/bornebyte"} target='_blank' className='text-white'><Github /> </Link>
                    <Link href={"mailto:shahshubham1888@gmail.com"} target='_blank' className='text-white'><Mail /> </Link>
                </div>
            </div>
            <Image src={"/shubham2.jpg"} alt="Logo" priority width={400} height={400} className='rounded-2xl' />
        </div>
    )
}
// <p className="text-lg text-gray-600 text-center">I&apos;m a computer science student passionate about tech, math, and self-improvement. I enjoy exploring complex ideas and building practical solutions. Always learning, always evolving. Let&apos;s connect! Let me know if you&apos;d like any tweaks!</p>
export default Hero