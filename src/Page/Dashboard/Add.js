import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {

    const [title, settitle] = useState('');
    const [author, setauthor] = useState('');
    const [email, setEmail] = useState('');
    const [price, setprice] = useState('');
    const [yearofpublish, setyearofpublish] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!title || !author || !email || !price || !yearofpublish) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            title,
            author,
            email,
            price,
            yearofpublish
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${title} ${author}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Book</h1>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    ref={textInput}
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
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add