import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import './Header.css';

function Header() {

    const history = useHistory();

    function handleLogin(){
        history.push('/login');
    }
    return (
        <div className='header'>
            <h2>ToDo List</h2>
            <Button onClick={handleLogin} variant="contained" color="primary" id='btnLogin'>Sign in</Button>
        </div>
    );
} export default Header;