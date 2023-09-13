import AboutImage from '../assets/images/aboutMainImage.png'
import steveJobs from '../assets/images/steveJobs.png'
import apj from '../assets/images/apj.png'
import billGates from '../assets/images/billGates.png'
import einstein from '../assets/images/einstein.png'
import nelsonMandela from '../assets/images/nelsonMandela.png'


const AboutUs = () => {
  return (
    <div className="flex flex-col text-white px-20 pt-10">
        <div className="flex items-center gap-5 mx-10">
            <section className="w-1/2 space-y-10">
                <h1 className="font-semibold text-5xl text-orange-500">
                    Affordable and Quality Education
                </h1>
                <p className="text-xl text-gray-300">
                    Our goal is to provide the affordable and quality education to the world. We are providing the platform for the aspiring teachers and students to share their skills, creativity and knowdledge to each other to empower and contribute in the growth and wellness of mankind.
                </p>
            </section>
            <div className="w-1/2">
                <img src={AboutImage} className='drop-shadow-2xl' alt='about main image'/>
            </div>
        </div>

        {/* Carousel */}
        <div className="carousel w-1/2 py-5 mx-auto">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='flex flex-col items-center justify-center gap-2 px-[15%]'>
                    <img src={apj} className="w-40 rounded-full border-2 border-gray-200" />
                    <p className='text-center text-gray-300'>" Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work."</p>
                    <h1 className='text-xl font-semibold'>APJ Abdul Kalam</h1>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <div className='flex flex-col items-center justify-center gap-2 px-[15%]'>
                        <img src={steveJobs} className="w-40 rounded-full border-2 border-gray-200" />
                        <p className='text-center text-gray-300'>“Your time is limited, so don't waste it living someone else's life.”</p>
                        <h1 className='text-xl font-semibold'>Steve Jobs</h1>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <div className='flex flex-col items-center justify-center gap-2 px-[15%]'>
                    <img src={nelsonMandela} className="w-40 rounded-full border-2 border-gray-200" />
                    <p className='text-center text-gray-300'>“Education is the most powerful weapon which you can use to change the world.”</p>
                    <h1 className='text-xl font-semibold'>Nelson Mandela</h1>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <div className='flex flex-col items-center justify-center gap-2 px-[15%]'>
                    <img src={einstein} className="w-40 rounded-full border-2 border-gray-200" />
                    <p className='text-center text-gray-300'>"Life is like riding a bicycle. To keep your balance, you must keep moving.”</p>
                    <h1 className='text-xl font-semibold'>Albert Einstein</h1>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <div className='flex flex-col items-center justify-center gap-2 px-[15%]'>
                    <img src={billGates} className="w-40 rounded-full border-2 border-gray-200" />
                    <p className='text-center text-gray-300'>“We all need people who will give us feedback. That’s how we improve.”</p>
                    <h1 className='text-xl font-semibold'>Bill Gates</h1>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs