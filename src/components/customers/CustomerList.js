import React, { useEffect, useState } from "react"
//Declaring CustomerList function
export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    //new state variable
    const [totalCustomerMessage, updateMessage] = useState("")
    // Event Listener to track changes in state to customer array
    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
            .then(res =>res.json())
            .then((customerArray) => {
                setCustomers(customerArray)
            })
        },
        []
    )
    //useEffect takes two parameters
    useEffect(

    )
    //map to list customer array
    return (
        <>
        {
            customers.map(
                (customerObject) => {
                    return <div key={`customer--${customerObject.id}`}>{customerObject.name}</div>

                }
            )
        }
        </>
    )
}