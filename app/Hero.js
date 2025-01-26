import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='flex lg:flex-row flex-col items-center justify-evenly gap-10 w-full min-h-screen p-4'>
            <div className=''>
                <p className="text-6xl font-bold text-center">Bornebyte</p>
                <p className="text-lg text-gray-600 text-center">A portfolio website.</p>
            </div>
            <Image src={"/shubham2.jpg"} alt="Logo" priority width={400} height={400} className='rounded-2xl' />
        </div>
    )
}

export default Hero