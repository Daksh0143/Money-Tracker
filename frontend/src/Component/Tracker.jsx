import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {useNavigate} from "react-router-dom"

const Tracker = () => {
    const [data, setData] = useState([])
    const [totalIncome, setTotalIncome] = useState(0)
    const [totalExpense, setTotalExpense] = useState(0)
    const navigate=useNavigate()

    const handleButton=()=>{
        navigate("/")
    }

    useEffect(() => {

        axios.get("http://localhost:1134/api/v1/money/get-money", {
            withCredentials: true
        }).then((result) => {
            
            setData(result.data.data)
            let income = result.data.data.reduce((acc, current) => {
                if (current.category === "Income") {
                    return acc + current.amount
                }
                return acc
            }, 0)

            let expense = result.data.data.reduce((acc, current) => {
                if (current.category !== "Income") {
                    return acc + current.amount
                }
                return acc
            }, 0)

            setTotalIncome(income)
            setTotalExpense(expense)
        }).catch((err) => {
            console.log(err)
        });


    }, [])
    return (
        <>
            <div className='h-40 min-w-full bg-cyan-950'>
                <h1 className='text-5xl text-center font-bold pt-12 flex justify-center text-green-50'>Money Tracker</h1>
            </div>
            <table className="table-auto text-center w-full mb-4">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-3xl font-bold text-center">Category</th>
                        <th className="px-4 py-2 text-3xl font-bold text-center">Amount</th>
                        <th className="px-4 py-2 text-3xl font-bold text-center">Info</th>
                        <th className="px-4 py-2 text-3xl font-bold text-center">Date</th>
                    </tr>
                </thead>
                <tbody>

                    {data.map((element, index) => {
                        return (
                            <tr key={index}>
                                <td className='text-2xl'>{element.category}</td>
                                <td className='text-2xl'>{element.amount}</td>
                                <td className='text-2xl'>{element.info}</td>
                                <td className='text-2xl'>{element.createdAt.substring(0, 10)}</td>
                            </tr>
                        )
                    })}

                </tbody>
                <tr className='px-4 py-2 text-3xl font-bold text-center'>
                    <td colSpan={1}>Total</td>
                    <td colSpan="text-2xl text-left">{totalIncome-totalExpense}</td>

                </tr>

            </table>
            <button onClick={handleButton} className='flex mx-auto  px-auto text-center m-10 font-bold text-3xl bg-green-400 border-2 border-violet-500 rounded-lg text-green-50 '> Home Page</button>
        </>
    )
}

export default Tracker