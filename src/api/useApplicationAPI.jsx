import useAxiosSecure from '../hooks/useAxiosSecure';

const useApplicationAPI = () => {
    const axiosSecure = useAxiosSecure();

    const myApplicationsPromise = email => {
        return axiosSecure.get(`/applications?email=${email}`)
            .then(res => res.data);
    }

    return {
        myApplicationsPromise
    }
};

export default useApplicationAPI;