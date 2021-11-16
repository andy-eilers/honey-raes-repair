//Imports react and required listing from outside modules
import React from "react"
//no ".js" needed in React
import { CustomerList } from "./customers/CustomerList";
import { EmployeeList } from "./employees/EmployeeList";
//exporting Repairs to browser in HTML
export const Repairs = () => {
    return (
        /*Fragmenting elements, React can only read one element, so headings
        are encapsulated in one fragmented element*/
        <>
        <h1>Honey Rae's Repair Shop</h1>
        <h2>Customer List</h2>
        <CustomerList />
        <h2>Employee List</h2>
        <EmployeeList />
        </>
    )
}