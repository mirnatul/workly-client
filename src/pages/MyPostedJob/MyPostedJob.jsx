import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobLists from './JobLists';
import useJobAPI from '../../api/useJobAPI';
// import { jobsCreatedByPromise } from '../../api/jobsAPI';

const MyPostedJob = () => {
    const { user } = useAuth();
    const { jobsCreatedByPromise } = useJobAPI();


    return (
        <div>
            <h2>My Posted Job</h2>
            <Suspense fallback={'loading posted jobs...'}>
                <JobLists jobsCreatedByPromise={jobsCreatedByPromise(user.email, user.accessToken)}></JobLists>
            </Suspense>
        </div>
    );
};

export default MyPostedJob;