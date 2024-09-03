import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchRestaurant } from '../redux/restaurantSlice';

function Header() {
    const dispatch=useDispatch();
    return (
        <>

            <Navbar variant='dark'>
                <Container>
                    <Link to='/' style={{textDecoration:'none',overflow:"hidden"}}>
                    <div className='d-flex justify-content-between align-items-center'>
                    <Navbar.Brand >
                        <img
                            alt=""
                            src="https://cdn-icons-png.flaticon.com/512/1376/1376387.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top me-3"
                        />{' '}
                        Food <span className='text-warning'>Circle</span>
                        
                    </Navbar.Brand>
                    <input onChange={(e)=>dispatch(searchRestaurant(e.target.value))} type="text" className='form-control ms-5 w-100' placeholder='Search by neighborhood' />
                    </div>
                    </Link>
                </Container>
            </Navbar>
        </>
    )
}

export default Header