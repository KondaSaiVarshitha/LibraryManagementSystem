import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <h1>Library Management System</h1>
            <div style={{ marginTop: '10px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Book</button>
            </div>
        </header>
    )
}

export default Header