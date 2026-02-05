import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"

const CustomerService = () => {

    const [ticket, setTicket] = useState([])
    const [form, setForm] = useState({
        name: "",
        email: "",
        category: "",
        description: "",
        status: "",
    })

    const fetchTicket = () => {
        axios.get("http://localhost:3000/api/tickets")
        .then((res) => {
            setTicket(res.data)
        })
    }

        useEffect(() => {
        fetchTicket();
        }, []);

    const raiseTicket = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/api/tickets", form)
        .then((res) => {
            console.log(res.data);
            fetchTicket();
        })
    }

        const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name] : e.target.value
        });
  };

  return (
    <div>
        <h1>Customer Support Ticket System</h1>
        <form onSubmit={raiseTicket}>
        <input type="text" placeholder='Name' name='name' value={form.name} onChange={handleChange}/>
        <input type="text" placeholder='email' name='email' value={form.email} onChange={handleChange}/>
        <input type="text" placeholder='category' name='category' value={form.category} onChange={handleChange}/>
        <input type="text" placeholder='description' name='description' value={form.description} onChange={handleChange}/>
        <input type="text" placeholder='status' name='status' value={form.status} onChange={handleChange}/>
        <button type='submit'>Issue Ticket</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {ticket.map((list) => (
                <tr key={list.id}>
                    <td>{list.name}</td>
                    <td>{list.email}</td>
                    <td>{list.category}</td>
                    <td>{list.description}</td>
                    <td>{list.status}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default CustomerService