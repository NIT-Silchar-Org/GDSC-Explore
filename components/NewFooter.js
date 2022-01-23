import GDSCexplore from '../public/gdscexplore.svg'
import Image from 'next/image'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
export default function NewFooter() {
    const form = useRef();
    const handleSubmit =(e)=>{
        e.preventDefault(); 
        emailjs.sendForm(`service_iq7dkit`, 'template_v7hhzqq',form.current, 'user_TXDZPKa1yU4rtXRwO1Kcv')
        .then((result) => {
            alert("Message Sent, We will get back to you shortly", result.text);
            e.target.reset()
            
        })
        .catch((error)=>{
            alert("An error occurred, Please try again", error.text);
            console.log(error);
        })
       
    }

    return (
        <>
            <div className="container mt-10 py-10  bg-[#F9F9F9]">
                <div className="w-full flex justify-center">
                     <h1 className='text-xl'>email us at <a className="text-blue-600" href="mailto:gsdc.explore@gmail.com">gsdc.explore@gmail.com</a></h1>
                </div>

                <div className="container my-6">
                    <h1 className='text-3xl text-center my-8'>Contact Us</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className='w-full p-5 flex justify-center md:justify-start items-center'>

                                <div className='md:ml-[10vw]'>
                                    <Image src={GDSCexplore} height={150} width={150} />
                                    <h1 className='text-center text-lg -mt-4'>Website Developers</h1>
                                </div>



                        </div>
                        <div className='w-full px-6 py-4 md:pr-[5vw]'>
                            <form ref={form} onSubmit={handleSubmit}>
                            <div className='flex justify-center'>
                                <input className="p-2 w-full rounded-md border-2 border-[#0176FA]" type="text" placeholder='First Name' name='first_name' required/>
                                <input className="p-2 w-full rounded-md border-2 border-[#0176FA] ml-2" type="text" placeholder='Last Name' name='last_name' required/>

                            </div>
                            <input className="p-2 w-full rounded-md border-2 border-[#0176FA] mt-3" type="email" placeholder='Email' name="email" required  />

                            <textarea className='p-2 w-full rounded-md border-2 border-[#0176FA] mt-3' rows="8" placeholder='Your query' name='message' required>
                                
                            </textarea>

                            <button className='text-white bg-[#3C64B1] hover:shadow-xl ease-in-out duration-300 p-2 px-8 text-xl rounded-md mt-4' type='submit'>Submit</button>

                            </form>

                            

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
} 