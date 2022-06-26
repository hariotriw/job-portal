import axios from "axios";

export const GET_JOB_LISTS = "GET_JOB_LISTS"
export const DETAIL_JOB = "DETAIL_JOB"

// export const getDataUser = (user) => {
    export const getJobLists = ({description, location, fulltime, currentPage}) => {
        const access_token = localStorage.getItem('access_token')
        console.log(currentPage)
        const BASE_URL = 'http://localhost:3001/api/jobs'
        let newUrl = ''
        let countUrl = ''
        let imaxPage = 0
        let itotalData = 0
        // console.log(description);
        // console.log(location);
        // console.log(fulltime);

        if(description !== undefined && location !== undefined && fulltime !== undefined) {
            // console.log('ada data');
            newUrl = `${BASE_URL}?`
            countUrl = `${BASE_URL}?`
            if(description){
                let url_desc = `description=${description}`
                // console.log('ada description')
                // console.log(description)
                newUrl = `${newUrl}${url_desc}&`
                countUrl = `${countUrl}${url_desc}&`
            }
            if(location){
                let url_loc = `location=${location}`
                // console.log('ada location')
                // console.log(location)
                newUrl = `${newUrl}${url_loc}&`
                countUrl = `${countUrl}${url_loc}&`
            }
            if(fulltime !== undefined){
                let url_time = `fulltime=${fulltime}`
                // console.log('ada fulltime')
                // console.log(fulltime)
                newUrl = `${newUrl}${url_time}`
                countUrl = `${countUrl}${url_time}`
            }
            if(currentPage !== undefined){
                let url_page = `&page=${currentPage}`
                // console.log('ada currentPage')
                // console.log(currentPage)
                newUrl = `${newUrl}${url_page}`
            }
            console.log(newUrl);
        } else {
            // console.log('tidak ada data');
            // let url_page = `page=${currentPage}`
            // newUrl = `${BASE_URL}?${url_page}`
            newUrl = `${BASE_URL}?page=${currentPage}`
            countUrl = BASE_URL
            // console.log(newUrl);
        }
        // console.log(`count url: ${countUrl}`)

        // axios({
        //     method: 'GET',
        //     url: countUrl,
        //     timeout: 120000,
        //     headers: { 'access-token': access_token}
        // })
        //     .then((response) => {
        //         // berhasil get API
        //         // console.log('berhasil dapat data');
        //         imaxPage = Math.ceil(response.data.length / 10)
        //         itotalData = response.data.length
        //         console.log(`banyak page: ${imaxPage}`);
        //         console.log(`banyak data: ${itotalData}`);
        //     })

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
            
            // setHeader('ACCESS-TOKEN', access_token)
            // console.log(access_token);
            // get API
            
            axios({
                method: 'GET',
                url: countUrl,
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