import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {

    const { _id, title, company } = useLoaderData();

    // console.log(job);
    return (
        <div>
            <h2 className='6xl'>{title}</h2>
            <Link to={`/jobApply/${_id}`} className='btn btn-primary'>Apply now</Link>
        </div>
    );
};

export default JobDetails;