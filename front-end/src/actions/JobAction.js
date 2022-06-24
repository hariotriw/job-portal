import axios from "axios";

export const GET_JOB_LISTS = "GET_JOB_LISTS"
export const DETAIL_JOB = "DETAIL_JOB"

// export const getDataUser = (user) => {
    export const getJobLists = () => {
        return (dispatch) => {
    
            // loading
            dispatch({
                type: GET_JOB_LISTS,
                payload: {
                    loading: true,
                    data: false,
                    errorMessage: false
                }
            })
    
            // console.log('get_data_user');
            const access_token = localStorage.getItem('access_token')
            // setHeader('ACCESS-TOKEN', access_token)
            // console.log(access_token);
            // get API
            axios({
                method: 'GET',
                url: 'http://localhost:3001/api/jobs',
                timeout: 120000,
                headers: { 'access-token': access_token}
            })
                .then((response) => {
                    // berhasil get API
                    // console.log('berhasil dapat data');
                    dispatch({
                        type: GET_JOB_LISTS,
                        payload: {
                            loading: false,
                            data: response.data,
                            errorMessage: false
                        }
                    })
                })
                .catch((response) => {
                    // console.log('gagal dapat data');
                    // console.log(response);
                    // gagal get API
                    dispatch({
                        type: GET_JOB_LISTS,
                        payload: {
                            loading: false,
                            data: false,
                            errorMessage: response.errorMessage
                        }
                    })
                })
    
        }
    
    }

    export const detailJob = (id) => {
        console.log(id);
        return (dispatch) => {
    
            // loading
            dispatch({
                type: DETAIL_JOB,
                payload: {
                    loading: true,
                    data: false,
                    errorMessage: false
                }
            })
    
            // console.log('get_data_user');
            const access_token = localStorage.getItem('access_token')
            // setHeader('ACCESS-TOKEN', access_token)
            // console.log(access_token);
            // get API
            axios({
                method: 'GET',
                url: `http://localhost:3001/api/jobs/detail/${id}`,
                timeout: 120000,
                headers: { 'access-token': access_token}
            })
                .then((response) => {
                    // berhasil get API
                    // console.log('berhasil dapat data');
                    dispatch({
                        type: DETAIL_JOB,
                        payload: {
                            loading: false,
                            data: response.data,
                            errorMessage: false
                        }
                    })
                })
                .catch((response) => {
                    // console.log('gagal dapat data');
                    // console.log(response);
                    // gagal get API
                    dispatch({
                        type: DETAIL_JOB,
                        payload: {
                            loading: false,
                            data: false,
                            errorMessage: response.errorMessage
                        }
                    })
                })
    
        }
    
    }