import React from 'react'
import contact from '../public/contact.svg'
import Image from 'next/image'


const Contact = () => {

    return (
        <section>
            <div className=' flex justify-center items-center mt-20 mb-10 p-5'>
                <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <p className=' text-5xl font-bold'>Get In Touch</p>
                        <p className=' text-lg pb-5 pt-2'>Send us a note and we will be in touch shortly.</p>
                        <Image src={contact} alt='contact' height='100%' />
                    </div>
                    <div className='shadow-md rounded-md p-5'>
                        <form action="">
                            <div className='pb-4 pt-4'>
                                <label htmlFor="">Name</label><br />
                                <input className=' bg-gray-50 p-3 border border-gray-400 w-full rounded-md' type="text" name='name' required placeholder='Enter name'/>
                            </div>
                            <div className='pb-4 pt-4'>
                                <label htmlFor="">Email</label><br />
                                <input className=' bg-gray-50 p-3 border border-gray-400 w-full rounded-md' type="text" name='email' placeholder='Enter email' />
                            </div>
                            <div className='pb-4 pt-4'>
                                <label htmlFor="">Subject</label><br />
                                <input className=' bg-gray-50 p-3 border border-gray-400 w-full rounded-md' type="text" name='subject' placeholder='Enter subject' />
                            </div>
                            <div className='pb-4 pt-4'>
                                <label htmlFor="">Message</label><br />
                                <input className=' bg-gray-50 p-3 border border-gray-400 w-full rounded-md' type="text" name='message' placeholder='Enter message' />
                            </div>
                            <input className=' bg-green-600 border-none py-3 px-4 w-40  rounded-3xl text-white font-bold transform hover:scale-105 duration-150 cursor-pointer' type="button" value='Submit' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact