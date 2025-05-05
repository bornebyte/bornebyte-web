import { Facebook, Github, Instagram, Mail, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className='flex lg:flex-row flex-col items-center justify-evenly gap-10 w-full min-h-screen p-4'>
            <div className=''>
                <p className="text-6xl font-bold text-center">Bornebyte</p>
                <p className="text-lg text-gray-600 text-center">A personal website.</p>
            </div>
            <Image src={"/shubham2.jpg"} alt="Logo" priority width={400} height={400} className='rounded-2xl' />
        </div>
    )
}
// <p className="text-lg text-gray-600 text-center">I&apos;m a computer science student passionate about tech, math, and self-improvement. I enjoy exploring complex ideas and building practical solutions. Always learning, always evolving. Let&apos;s connect! Let me know if you&apos;d like any tweaks!</p>
export default Hero