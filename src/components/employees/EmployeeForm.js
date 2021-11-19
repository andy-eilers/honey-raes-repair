import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeForm = () => {
    const [employee, updateEmployee] = useState({
        name: "",
        specialty: ""
    })

    const history = useHistory()

    const hireEmployee = (event) => {
        event.preventDefault()

        const newEmployee = {
            name: employee.name,
            specialty: employee.specialty
        }

    const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEmployee)
    }

    return fetch("http://localhost:8088/employees", fetchOption)
        .then(() => {
            history.push("/employees")
        })
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">Hire Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee Name:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.name = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name of Employee"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Employee Specialty:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.specialty = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Employee Specialty"
                        />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={hireEmployee}>
                Finish Hiring
            </button>
        </form>
    )
}