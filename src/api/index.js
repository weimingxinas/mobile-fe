import axios from 'axios';
const baseURL = 'https://www.easy-mock.com/mock/5ad2352a2589533dee1316c2/api';
export default {
    getFoodList () {
        return axios.get(`${baseURL}/food`);
    },
    getFoodType () {
        return axios.get(`${baseURL}/foodtype`);
    },
    orderList (params) {
        return axios.post(`${baseURL}/foodtype`, params);
    }
};
