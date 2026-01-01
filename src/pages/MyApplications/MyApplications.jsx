import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import ApplicationList from './ApplicationList';
import { myApplicationsPromise } from '../../api/applicationsAPI';


const MyApplications = () => {
    const { user } = useAuth();
    return (
        <div>
            <Suspense fallback={'loading application...'}>
                <ApplicationList
                    myApplicationsPromise={myApplicationsPromise(user.email)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;