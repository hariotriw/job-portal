import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStatus, getDataUser } from "../actions/AuthenticationAction";
import {  } from "../actions/JobAction";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { Button } from "react-bootstrap";

const Katalog = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
    let [image, setImage] = useState("https://via.placeholder.com/150")
    let newArr = []

	const { getDataUserResult, loginStatusResult } = useSelector((state) => state.AuthReducer)
	const {  } = useSelector((state) => state.JobReducer)

	useEffect(() => {
		dispatch(loginStatus())
		dispatch(getDataUser())
	}, [dispatch])

    // console.log(getDataUserResult);

    useEffect(() => {
		// if(getDataUserResult){
		// 	if(getDataUserResult.role === "admin") {
				
		// 	} else if(getDataUserResult.role === "user") {
		// 		// nanti ubah ke navigate katalog
		// 		// navigate('/katalog')
		// 		navigate('/')
		// 	} else {
		// 		navigate('/login')
		// 	}
		// }
	}, [getDataUserResult])


	return (
		<div className="container-fluid p-0 ">
				Katalog
		</div>
	);
}

export default Katalog