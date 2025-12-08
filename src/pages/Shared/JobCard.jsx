import React from 'react';
import { Link } from 'react-router';

const JobCard = ({ job }) => {
    const { _id, title, company, location, type, company_logo, jobType, description } = job;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className='flex'>
                <figure>
                    <img
                        src={company_logo}
                        alt="logo" />
                </figure>
                <div>
                    <h3 className='text-4xl'>{company}</h3>
                    <p>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/jobs/${_id}`} className="btn btn-primary">Show Details</Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;