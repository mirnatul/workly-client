import axios from 'axios';
import useAuth from './useAuth';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
});

const useAxiosSecure = () => {
    const { user } = useAuth();
    // console.log(user?.accessToken);

    axiosInstance.interceptors.request.use(config => {
        // do something before request is sent
        config.headers.authorization = `Bearer ${user?.accessToken}`;
        return config;
    }, error => {
        // do something with request error
        return Promise.reject(error);
    });

    return axiosInstance;
};

export default useAxiosSecure;