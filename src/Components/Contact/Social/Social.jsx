import {FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import Form from '../ContactForm/Form'
import { Card } from 'flowbite-react'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { CiFacebook } from 'react-icons/ci'

export default function Social() {
  return (
    <div>
    <div className='flex lg:flex-row md:flex sm:flex-col xs:flex-col xxs:flex-col justify-center items-center gap-9 mt-6'>
        <Form/>
        <div >
        <div className='flex lg:flex md:flex sm:flex xs:flex-col xxs:flex-col gap-8 mb-7'>
        <Card className='bg-[#1eb34675] shadow-2xl  text-center'>
        <FaWhatsapp color='#ffff' size={30}className='flex justify-center items-center m-auto' />
            <h2 className=' text-[#375840] font-cairo' >+201090955882</h2>

            </Card>
            <Card className='bg-[#1eb34675] shadow-2xl  text-center'>
            <CiFacebook color='#ffff' size={30}className='flex justify-center items-center m-auto' />
            <h2 className=' text-[#375840] font-cairo' >+201090955882</h2>

            </Card>

        </div>
        <div className='flex lg:flex md:flex sm:flex xs:flex-col xxs:flex-col gap-8 '>
        <Card className='bg-[#1eb34675] shadow-2xl  text-center'>
        <FaInstagram color='#ffff' size={30}className='flex justify-center items-center m-auto' />
            <h2 className=' text-[#375840] font-cairo' >+201090955882</h2>

            </Card>
            <Card className='bg-[#1eb34675] shadow-2xl  text-center'>
            <MdOutlineAlternateEmail color='#ffff' size={30}className='flex justify-center items-center m-auto' />
            <h2 className=' text-[#375840] font-cairo' >+201090955882</h2>

            </Card>

        </div>
        </div>

</div>

<div className="map-container flex justify-center m-auto items-center mt-10 w-full xxs:w-52 xs:w-64">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29138.07501507667!2d32.92070587569268!3d24.092372397551106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14367b5ab1a30e5f%3A0xfb109fe337cabccb!2z2KPYs9mI2KfZhtiMINmF2K3Yp9mB2LjYqSDYo9iz2YjYp9mG!5e0!3m2!1sar!2seg!4v1733029451955!5m2!1sar!2seg"
  width="1000"
  height="250"
  style={{ border: "0" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Google Maps"
></iframe>
    </div>
    </div>

  )
}
