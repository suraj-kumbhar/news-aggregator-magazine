import React from 'react'

export const Header = () => {
    return (
        <div style={headerStyle}>
            <h2>News Aggregator Magazine</h2>
        </div>
    )
}

const headerStyle ={
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding:'25px',
    borderRadius: '3px',
    border: 'solid #607d8b',
    height: '100%'
}