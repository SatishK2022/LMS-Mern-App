import axiosInstance from "axios"
import { useState } from "react"
import { toast } from 'react-hot-toast'

const ContactUs = () => {
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: ""
    })

    function handleInputChange(e) {
        const {name, value} = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        if (!userInput.name || !userInput.email || !userInput.message) {
            toast.error("All Fields are Mandatory!")
            return;
        }
        if (!isEmail(userInput.email)) {
            toast.error("Invalid Email!")
            return;
        }
        try {
            const response = axiosInstance.post("/contact", userInput);
            toast.promise(response, {
                loading: "Submitting you query...",
                success: "Form Submitted Successfully!",
                error: "Faild to Submit the Form"
            });
            const responseData = await response;
            if (responseData?.data) {
                setUserInput({
                    name: "",
                    email: "",
                    message: ""
                })
            }
        } catch (error) {
            toast.error("Operation Faild...")
        }

    }

  return (
    <div className="h-screen flex items-center justify-center ">
        <form onSubmit={onFormSubmit} noValidate className="flex flex-col items-center justify-center gap-2 rounded w-80">
            <h1 className="text-3xl font-semibold text-gray-300 mb-2">Contact Form</h1>
            <div className="w-full gap-2 flex flex-col font-semibold">
                <label htmlFor="name" className="text-xl font-semibold">Name</label>
                <input 
                    className="border border-gray-500 outline-none rounded px-2 py-2 bg-transparent focus:border-orange-500" 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="Enter Your Name"
                    onChange={handleInputChange}
                    value={userInput.name}
                />
            </div>
            <div className="w-full gap-2 flex flex-col font-semibold">
                <label htmlFor="email" className="text-xl font-semibold">Email</label>
                <input 
                    className="border border-gray-500 outline-none rounded px-2 py-2 bg-transparent focus:border-orange-500" 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    onChange={handleInputChange}
                    value={userInput.email}
                />
            </div>
            <div className="w-full gap-2 flex flex-col font-semibold">
                <label htmlFor="message" className="text-xl font-semibold">Message</label>
                <textarea  
                    className="border border-gray-500 outline-none rounded px-2 py-2 bg-transparent focus:border-orange-500 resize-none h-28" 
                    type="email" 
                    id="message"
                    name="message"
                    placeholder="Enter Your Message"
                    onChange={handleInputChange}
                    value={userInput.message}
                />
            </div>
            <button type="submit" className="w-full py-2 bg-orange-500 hover:bg-orange-600 rounded text-white font-semibold mt-2">Submit</button>
        </form>
    </div>
  )
}

export default ContactUs