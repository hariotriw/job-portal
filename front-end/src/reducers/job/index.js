import { GET_JOB_LISTS, DETAIL_JOB } from "../../actions/JobAction";

const initialState = {
    getJobListsLoading: false,
    getJobListsResult: false,
    getJobListsError: false,

    detailJobLoading: false,
    detailJobResult: false,
    detailJobError: false,
    
}

const JobReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_JOB_LISTS:
            return {
                ...state,
                getJobListsLoading: action.payload.loading,
                getJobListsResult: action.payload.data,
                getJobListsError: action.payload.errorMessage
            }
        case DETAIL_JOB:
            return {
                ...state,
                detailJobLoading: action.payload.loading,
                detailJobResult: action.payload.data,
                detailJobError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default JobReducer