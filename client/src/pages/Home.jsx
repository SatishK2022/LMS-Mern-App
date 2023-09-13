import { Link } from "react-router-dom";

import homePageMainImage from "../assets/images/homePageMainImage.png"

const Home = () => {
    return (
        <div className="pt-10 flex items-center flex-col sm:flex-row justify-center text-white gap-10 mx-8 sm:mx-16 h-[90vh]">
            <div className="w-full sm:w-1/2 space-y-6">
                <h1 className="text-4xl sm:text-5xl font-semibold">Find out Best <span className="text-orange-500 font-bold">Online Courses</span></h1>
                <p className="">We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost.</p>

                <div className="space-x-6">
                    <Link to="/courses">
                        <button className="py-3 px-5 bg-orange-500 font-semibold rounded-md text-base cursor-pointer hover:bg-orange-600 transition duration-300">Explore Courses</button>
                    </Link>
                    <Link to="/contact">
                        <button className="py-3 px-5 border-2 border-orange-500 font-semibold rounded-md text-base cursor-pointer hover:bg-orange-500 transition duration-300">Contact Us</button>
                    </Link>
                </div>
            </div>
            <div className="w-full sm:w-1/2 flex items-center justify-center">
                <img className="w-4/5" src={homePageMainImage} alt="Home page" />
            </div>
        </div>
    )
}

export default Home;