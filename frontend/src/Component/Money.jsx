import React, { useState } from 'react'
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"
import axios from "axios"

const Money = () => {
    
    const [category, setCategory] = useState()
    const [amount, setAmount] = useState()
    const [info, setInfo] = useState()

    const navigate=useNavigate()

    const handleButton=()=>{
        navigate("/tracker")
    }
    const handleMoneyTracker = async (e) => {
        e.preventDefault()
        try {
            const data = await axios.post("http://localhost:1134/api/v1/money/post-money",
                { category, amount, info },
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

            toast.success("Enter Data Successfully")
            navigate("/tracker")
            setCategory("")
            setAmount("")
            setInfo("")
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error)
        }
    }
    return (
        <>
            <div className='h-40 min-w-full bg-cyan-950'>
                <h1 className='text-5xl text-center font-bold pt-12 flex justify-center text-green-50'>Money Tracker</h1>
            </div>
            <form onSubmit={handleMoneyTracker} className='m-10 align-middle max-w-screen-md mx-auto p-4 bg-cyan-200 border-2 border-solid border-blue-700 rounded-md'>
                <label className='font-bold text-4xl m-2 '>Category</label><br />
                <select className='m-2 w-full text-3xl' value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select </option>
                    <option value="Expense">Expense</option>
                    <option value="Income">Income</option>
                </select><br />
                <label className='font-bold  text-4xl m-2 '>Amount</label><br />
                <input type='number' placeholder='Enter a Amont' className='m-3 w-full' value={amount} onChange={(e) => setAmount(e.target.value)} /><br />
                <label className='font-bold text-4xl m-2 '>Info</label><br />
                <input type='text' placeholder='Enter a Info' className='m-3 w-full' value={info} onChange={(e) => setInfo(e.target.value)} />
                <button type='submit' className='m-3 w-full bg-cyan-600 text-3xl font-bold border-2 border-solid border-blue-950 rounded-lg'>Submit</button>
            </form>
            <button onClick={handleButton} className='flex mx-auto  px-auto text-center m-10 font-bold text-3xl bg-green-400 border-2 border-violet-500 rounded-lg text-green-50 ' >Go to Tracker</button>
        </>
    )
}

export default Money