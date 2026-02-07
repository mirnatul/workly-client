import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobLists from './JobLists';
import { jobsCreatedByPromise } from '../../api/jobsAPI';

const MyPostedJob = () => {
    const { user } = useAuth();


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