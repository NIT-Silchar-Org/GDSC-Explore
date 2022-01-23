import GDSCexplore from '../public/gdscexplore.svg'
import Image from 'next/image'

export default function NewFooter() {

    return (
        <>
            <div className="container mt-10 py-10  bg-[#F9F9F9]">
                <div className="w-full flex justify-center">
                     <h1 className='text-xl'>email us at <a className="text-blue-600" href="mailto:example@gmail.com">example@gmail.com</a></h1>
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

                            <div className='flex justify-center'>
                                <input className="p-2 w-full rounded-md border-2 border-[#0176FA]" type="text"/>
                                <input className="p-2 w-full rounded-md border-2 border-[#0176FA] ml-2" type="text"/>

                            </div>
                            <input className="p-2 w-full rounded-md border-2 border-[#0176FA] mt-3" type="text"/>

                            <textarea className='p-2 w-full rounded-md border-2 border-[#0176FA] mt-3' rows="8">

                            </textarea>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}