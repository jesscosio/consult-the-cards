import React from 'react';

export default function Header() {

    const headerStyle = {
        textAlign: 'center',
        textTransform: 'uppercase'
    };
    return (
        <div style={headerStyle}>
            <h1>Tarot</h1>
        </div>
    )
}