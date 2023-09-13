import { MdOutlineArrowBack } from 'react-icons/md'
import { Link, useNavigate } from "react-router-dom"

import pageNotFound from '../assets/images/PageNotFound.png'

const NotFound = () => {
    const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-3 bg-slate-900">
        <img className='w-1/3' src={pageNotFound} alt="Page Not Found" />
        <Link to="/" onClick={() => navigate(-1)} className='flex items-center justify-center gap-2 px-5 py-2 bg-orange-500 hover:bg-orange-600 rounded-md text-white font-semibold'><MdOutlineArrowBack size={22}/> Go Back</Link>
    </div>
  )
}

export default NotFound