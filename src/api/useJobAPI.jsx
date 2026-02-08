import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useJobAPI = () => {

    const axiosSecure = useAxiosSecure();

    const jobsCreatedByPromise = email => {
        return axiosSecure.get(`/jobs/applications?email=${email}`)
            .then(res => res.data);
    }

    return {
        jobsCreatedByPromise
    }
};

export default useJobAPI;