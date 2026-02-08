import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import ApplicationList from './ApplicationList';
import useApplicationAPI from '../../api/useApplicationAPI';
// import { myApplicationsPromise } from '../../api/applicationsAPI';



const MyApplications = () => {
    const { user } = useAuth();
    const { myApplicationsPromise } = useApplicationAPI();

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