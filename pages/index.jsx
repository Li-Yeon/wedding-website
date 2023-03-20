import Head from 'next/head'
import Image from 'next/image'

// Assets
import banner_image from '../public/frame.png';
import banner_image_lg from '../public/frame-lg.png';
import photo1 from '../public/photo1.jpeg';
import photo2 from '../public/photo2.jpeg';
import photo3 from '../public/photo3.jpeg';
import photo4 from '../public/photo4.jpeg';
import photo5 from '../public/photo5.jpeg';



// Packages
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  return (
    <>
      <Head>
        <title>L | A</title>
        <link rel="shortcut icon" href='favicon.ico' />
      </Head>
      <div>

        <div className='main-banner w-full relative'>


          <div className="md:hidden w-full flex justify-center">
            <Image
              src={banner_image}
              alt="banner_image"
            />
          </div>

          <div className="md:block absolute hidden top-0 left-0 z-10">
            <Image
              src={banner_image_lg}
              alt="banner_image_lg"
            />
          </div>


          <div className="flex items-center w-full flex-col md:pt-10">

            <p className='font-Nato text-lg font-[300] mt-1 text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-900'>SAVE THE DATE</p>
            <p className='font-Nato text-4xl font-[400] mt-5 text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-900'>Leon & Aya</p>
            <p className='font-Nato text-xs mt-5 text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-900 text-center max-w-[200px]'>We are happy to see you among us on this meaningful day</p>

            <p className='font-Vibes text-4xl mt-8 text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-900'>Friday</p>
            <p className='font-Nato text-lg  text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-900'>24.03.2023</p>
            <p className='font-Nato text-sm  text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-900'>AT 2PM</p>

            <p className='font-Nato text-center text-sm mt-8 text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-900 max-w-[200px]'>Diocesan Shrine of Our Lady of the Abandoned Parish,</p>

            <p className='font-Vibes text-2xl mt-6 text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-900'>Followed by dinner and dancing at</p>
            <p className='font-Nato text-center text-sm mt-1 text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-900'>Madison Galeries | Muntinlupa City</p>

            <div className='flex mx-5 mt-5 gap-5'>

              <a href="https://forms.gle/EXwRCGMXHEWxVsu78" target="_blank" rel="noreferrer"
                className='w-[100px] py-2 bg-gradient-to-bl from-yellow-400 to-yellow-700'>
                <p className='font-Nato text-center text-md text-white'>RSVP</p>
              </a>

              <a href="#galleries" className=' w-[100px] py-2 bg-gradient-to-br from-yellow-400 to-yellow-700'>
                <p className='font-Nato text-center text-md text-white'>Galleries</p>
              </a>

            </div>

          </div>

          <div id="galleries" className='mt-10'>
            <p className='font-Display text-center text-4xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-900'>Galleries</p>

            <Carousel autoPlay infiniteLoop interval={2000} className="mt-3 max-w-[600px] max-h-[600px] mx-auto" stopOnHover>
              <div>
                <Image src={photo1} />
              </div>
              <div>
                <Image src={photo2} />
              </div>
              <div>
                <Image src={photo3} />
              </div>
              <div>
                <Image src={photo4} />
              </div>
              <div>
                <Image src={photo5} />
              </div>
            </Carousel>
          </div>

        </div>

      </div>
    </>

  )
}