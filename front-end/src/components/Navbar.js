import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginStatus, getDataUser, logoutAction } from "../actions/AuthenticationAction";
import Swal from 'sweetalert2';


const Navbar = () => {
    const navigate = useNavigate()
	const dispatch = useDispatch()
    
	const { getDataUserLoading, getDataUserResult, getDataUserError, loginStatusResult,
        logoutActionResult } = useSelector((state) => state.AuthReducer)

	useEffect(() => {
		dispatch(loginStatus())
		dispatch(getDataUser())
	}, [dispatch])

	const logoutHandler = (event) => {
        event.preventDefault()
        // console.log('handle submit');
        dispatch(logoutAction())
	}

    useEffect(() => {
		// console.log(logoutActionResult);
		// console.log(loginActionError);
		if(logoutActionResult.logoutStatus === true){
            // console.log('lalalala');
			// console.log(logoutActionResult);
			Swal.fire({  
				icon: 'success', 
				text: 'Berhasil logout'
				});  
			// navigate('/')
            window.location.reload()
		}		
	}, [logoutActionResult, dispatch])

    

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                    <Link to="/" className='navbar-brand'>Home</Link>
                    <button type='button' className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbarCollapse'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarCollapse'>
                        <div className='navbar-nav ms-auto'>
                            {/* ----- General ----- */}
                            {/* <Link to="#" className='nav-item nav-link active'>Katalog</Link> */}
                            {/* ----- end General ----- */}

                            { getDataUserResult ? 
                                <>
                                    {/* ----- General ----- */}
                                    <Link to="/" className='nav-item nav-link active'>Katalog</Link>
                                    {/* ----- end General ----- */}
                                </>
                            // <p className='nav-item nav-link'>silahkan refresh page . . .</p>
                                : 
                                <>
                                {/* <Link to="/" className='nav-item nav-link active'>Katalogue</Link> */}
                                </>
                            }
                            

                            
                        </div>
                        <div className='navbar-nav ms-auto'>
                            
                            {/* { console.log(loginStatusResult.status)} */}
                            { loginStatusResult.status ===true ? 
                            /* ----- Login ----- */
                                <button className="btn btn-secondary my-2 my-sm-0 text-white ms-auto me-3" type="button"
                                onClick={(event) => logoutHandler(event)}>Logout</button>
                                : 
                                /* ----- Not Login ----- */
                            <Link to="/login" className='nav-item nav-link'>Login</Link>}
                            
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar