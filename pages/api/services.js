import axios from "axios"

export const addPaymentApi = (data) => {
    return axios.post(`http://localhost:8080/api/payment/:id/:student_id`, data);
}