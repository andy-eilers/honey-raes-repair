import React, { useEffect, useState } from "react"
//Declaring EmployeeList function
export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    // Event Listener to track changes in state to customer array
    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
            .then(res =>res.json())
            .then((employeeArray) => {
                setEmployees(employeeArray)
            })
        },
        []
    )
    //map to list customer array
    return (
        <>
        {
            employees.map(
                (employeeObject) => {
                    return <div key={`employee--${employeeObject.id}`}>{employeeObject.name}</div>

                }
            )
        }
        </>
    )
}