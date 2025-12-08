import React, { use } from 'react';
import JobCard from '../Shared/JobCard';

const Jobs = ({ jobsPromise }) => {

    const jobs = use(jobsPromise);
    // console.log(jobs);
    return (
        <div>
            <p>Jobs of the day</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default Jobs;