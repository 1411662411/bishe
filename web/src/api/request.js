import axios from 'axios'
// create an axios instance
const service = axios.create({
	baseURL: "http://www.baidu.com/", // url
	timeout: 5000, // request timeout
	withCredentials: true,
})

// request interceptor


// respone interceptor
service.interceptors.response.use(
	res => {
		return res.data;
	},
	error => {

	})
export default service
