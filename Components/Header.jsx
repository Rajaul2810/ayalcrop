import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import headerImage from '../public/header.svg'

const Header = () => {
    return (
        <section className=' h-screen w-full'>
            <div className=" grid place-content-center bg-cover bg-center bg-[url('../public/bg2.jpg')] h-full bg-opacity-10">
                <div className=' -pt-60 p-5'>
                    <h1 className=' text-yellow-600 text-6xl font-extrabold'>AyAl Corp Limited</h1>
                    <p className=' pt-5 pb-5 '>is the One-stop solution for your Technology, Security, Mailing and Digital marketing needs.</p>
                    <Link href='/contact'>
                        <button className=' bg-green-600 border-none py-3 px-4 w-40  rounded-3xl text-white font-bold transform hover:scale-105 duration-150'>Contact</button>

                    </Link>

                </div>
            </div>
        </section>
    )
}

export default Header