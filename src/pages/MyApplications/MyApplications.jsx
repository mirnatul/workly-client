import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import ApplicationList from './ApplicationList';
import { myApplicationsPromise } from '../../api/applicationsAPI';


const MyApplications = () => {
    const { user } = useAuth();
    console.log('token', user.accessToken);


    return (
        <div>
            <Suspense fallback={'loading application...'}>
                <ApplicationList
                    myApplicationsPromise={myApplicationsPromise(user.email, user.accessToken)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;