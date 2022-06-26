import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStatus, getDataUser } from "../actions/AuthenticationAction";
import { getJobLists } from "../actions/JobAction";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { Button } from "react-bootstrap";
import { Form } from 'react-bootstrap'


const ListJob = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
    
    let [description, setDescription] = useState('')
    let [location, setLocation] = useState('')
    let [fulltime, setFulltime] = useState(false)
    let [currentPage, setCurrentPage] = useState(1)
    let [minPage, setMinPage] = useState(0)

	const { getDataUserResult, loginStatusResult } = useSelector((state) => state.AuthReducer)
	const { getJobListsLoading, getJobListsResult, getJobListsError } = useSelector((state) => state.JobReducer)


	useEffect(() => {
		dispatch(loginStatus())
		// dispatch(getDataUser())
		dispatch(getJobLists({currentPage}))
	}, [dispatch])

    // console.log(getDataUserResult);

    useEffect(() => {
        // console.log(loginStatusResult);
		if(loginStatusResult){
			if(loginStatusResult.status === true) {
				// console.log('sudah login');
			} else if(loginStatusResult.status === false) {
				// nanti ubah ke navigate katalog
				// navigate('/katalog')
				navigate('/login')
			} else {
				navigate('/login')
			}
		}
	}, [loginStatusResult])

    useEffect(() => {
        // console.log(getJobListsResult);
		
	}, [getJobListsResult])

    const searchHandle = (e) => {
        e.preventDefault()
        dispatch(getJobLists({description, location, fulltime, currentPage}))
		// console.log(description)
		// console.log(location)
		// console.log(fulltime)
    }

    const resetHandle = (e) => {
        setDescription('')
        setLocation('')
        dispatch(getJobLists({currentPage}))
        // setFulltime(false)
		// console.log(description)
		// console.log(location)
		// console.log(fulltime)
    }
    
    const flagChangeHandle = (e) => {
        // e.preventDefault()
		setFulltime(prevCheck => !prevCheck)
        // console.log(fulltime);
    }


	return (
		<div className="container-fluid p-0 ">
            <div className="row m-0 p-0 justify-content-center">
                <div className="col-8 m-0 p-0 ">
                    <div className="search">
                        <form className="forms-sample addForm" id="addForm" >
                            {/* <Form.Control type="hidden" id="inputProductName" name="UserId" value="1" placeholder="Product Name" hidden/> */}
                            <div className="row m-0 p-0">
                                <div className="col-3 m-0 p-0 ">
                                    {/* <div className="row m-0 p-0 ">
                                        <p>job description</p>
                                    </div> */}
                                    <div className="row m-0 p-0 ">
                                        <Form.Group className="my-3">
                                            <label className="mb-1" htmlFor="inputJobDescription">Job Description </label>
                                            <Form.Control type="text" id="inputJobDescription" name="description" placeholder="Job Description" value={description}  onChange={(event) => setDescription(event.target.value)}/>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="col-3 m-0 p-0 ">
                                    {/* <div className="row m-0 p-0 ">job location</div> */}
                                    <div className="row m-0 p-0 ">
                                        <Form.Group className="my-3">
                                            <label className="mb-1" htmlFor="inputLocation">Location</label>
                                            <Form.Control type="text" className="form-control" id="inputLocation" name="location" placeholder="Location" value={location}  onChange={(event) => setLocation(event.target.value)} required/>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="col-6 m-0 p-0 ">
                                    {/* <div className="row m-0 p-0 "></div> */}
                                    <div className="row m-0 p-0 mt-2">
                                        <Form.Group className="my-3">
                                            <label className="mb-1" htmlFor="inputLocation"> </label>
                                            {/* <Form.Control type="text" className="form-control" id="inputLocation" name="location" placeholder="Location" value={location}  onChange={(event) => setLocation(event.target.value)} required/> */}
                                            <div className="row m-0 p-0 ">
                                                <div className="col-4 m-0 p-0 ">
                                                    <div className="form-check form-switch m-0 p-0">
                                                        <input className="form-check-input ms-0 me-auto d-flex" type="checkbox" id="flexSwitchCheckChecked"  onChange={(e) => flagChangeHandle(e)}/>
                                                        <label className="form-check-label ms-2" htmlFor="flexSwitchCheckChecked">Full Time</label>
                                                    </div>
                                                </div>
                                                <div className="col-6 m-0 p-0 ">
                                                    <button type="button" className="btn btn-primary px-4" onClick={(e) => searchHandle(e)}>Search</button>
                                                    <button type="button" className="btn btn-secondary px-4 ms-2" onClick={(e) => resetHandle(e)}>Reset</button>
                                                </div>
                                                {/* <div className="col-4 m-0 p-0 ">
                                                </div> */}
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>  
                            </div>
                        </form>
                    </div>
                    <hr />
                    <div className="lists-job">
                        <h3>Available Job</h3>
                        { getJobListsResult ?
                            getJobListsResult.length === 0 ? 
                            <div className="row mt-5 text-center">
                                <p>no available job with the selected parameters</p> 
                            </div>
                                :
                            getJobListsResult.map((job, i) => {
                                // console.log(job)
                                return (
                                    job ?
                                    
                                    <div className="row mx-0 my-3 p-0 ">
                                        <div className="card">
                                            <div className="card-body">
                                                {/* <Link to={`/detail/${job.id}`} className='no-link text-dark d-flex'> */}
                                                    <div className="row m-0 p-0 d-flex ms-1 me-auto">
                                                        <p className="fw-bold m-0 p-0 ">{job.title}</p>
                                                        <p className="m-0 p-0 ">{job.company}</p>
                                                        <p className="m-0 p-0 ">at <b>{job.location}</b></p>
                                                    </div>
                                                    <div className="row m-0 p-0 d-flex ms-auto me-1 text-end">
                                                        <p className="m-0 p-0 ">{job.type}</p>
                                                        <p className="m-0 p-0 ">
                                                        {job ? 
											                job.created_at !== null ? job.created_at.slice(0,16) : 'tanggal null'
                                                        : 'tanggal'}
                                                        
                                                        </p>                                                   
                                                        {/* <img src={job.company_logo} alt="Admin" className="rounded-circle" width={50} /> */}
                                                    </div>
                                                {/* </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    ''
                                )
                            })
                        : 'retrieving data...' }

                    </div>
                </div>
            </div>
		</div>
	);
}

export default ListJob