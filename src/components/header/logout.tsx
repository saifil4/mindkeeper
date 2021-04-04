import React from 'react'
import { Button } from 'react-bootstrap';

const LogOut = () => {
    const handleLogOut = () => {

    }
    return (
        <div>
            <Button onClick={handleLogOut} variant="danger">Log Out</Button>
        </div>
    )
}
export default LogOut;
