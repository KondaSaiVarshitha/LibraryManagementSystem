import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [title, settitle] = useState(selectedEmployee.title);
    const [author, setauthor] = useState(selectedEmployee.author);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [price, setprice] = useState(selectedEmployee.price);
    const [yearofpublish, setyearofpublish] = useState(selectedEmployee.yearofpublish);

    const handleUpyearofpublish = e => {
        e.preventDefault();

        if (!title || !author || !email || !price || !yearofpublish) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            title,
            author,
            email,
            price,
            yearofpublish
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Upyearofpublishd!',
            text: `${employee.title} ${employee.author}'s data has been upyearofpublishd.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpyearofpublish}>
                <h1>Edit Book</h1>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    value={title}
                    onChange={e => settitle(e.target.value)}
                />
                <label htmlFor="author">Author</label>
                <input
                    id="author"
                    type="text"
                    name="author"
                    value={author}
                    onChange={e => setauthor(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="price">price ($)</label>
                <input
                    id="price"
                    type="number"
                    name="price"
                    value={price}
                    onChange={e => setprice(e.target.value)}
                />
                <label htmlFor="yearofpublish">yearofpublish</label>
                <input
                    id="yearofpublish"
                    type="yearofpublish"
                    name="yearofpublish"
                    value={yearofpublish}
                    onChange={e => setyearofpublish(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Upyearofpublish" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit