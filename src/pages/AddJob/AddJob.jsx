import React from 'react';
import useAuth from './../../hooks/useAuth';
import axios from 'axios';

const AddJob = () => {
    const { user } = useAuth();

    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);

        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency };

        // process requirements and responsibilities into arrays
        newJob.requirements = newJob.requirements.split(',').map(req => req.trim());
        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim());

        newJob.status = "active"

        console.log(newJob);

        // save job to the database
        axios.post('http://localhost:3000/jobs', newJob)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Job added successfully');
                    form.reset();
                }
            })
            .catch(err => {
                console.error('Error adding job:', err);
                alert('Failed to add job. Please try again.');
            });
    }


    return (
        <div>
            <h2>Please add job</h2>
            <form onSubmit={handleAddJob}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="fieldset-legend">Basic Job Info</legend>

                    <label className="label">Job Title</label>
                    <input name='title' type="text" className="input" placeholder="job title" />

                    <label className="label">Company</label>
                    <input name='company' type="text" className="input" placeholder="company" />

                    <label className="label">Location</label>
                    <input name='location' type="text" className="input" placeholder="location" />

                    <label className="label">Company logo</label>
                    <input name='company_logo' type="url" className="input" placeholder="logo url" />
                </fieldset>


                {/*  job type*/}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="fieldset-legend">Job type</legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                        <input className="btn" type="radio" name="jobType" aria-label="On-site" value="On-Site" />
                        <input className="btn" type="radio" name="jobType" aria-label="Remote" value="Remote" />
                        <input className="btn" type="radio" name="jobType" aria-label="Hybrid" value="Hybrid" />
                    </div>
                </fieldset>

                {/* job categary */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="fieldset-legend">Job category</legend>
                    <select defaultValue="Job Category" className="select" name='category'>
                        <option disabled={true}>Job Category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Sales</option>
                    </select>
                </fieldset>

                {/* application deadline */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="fieldset-legend">Application deadline</legend>
                    <input name='deadline' type="date" className="input" />
                </fieldset>

                {/* salary range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input name='min' type="text" className="input" placeholder="Minimum Salary" />
                        </div>

                        <div>
                            <label className="label">Maximum Salary</label>
                            <input name='max' type="text" className="input" placeholder="Minimum Salary" />
                        </div>

                        <div>
                            <label className="label">Currency</label>
                            <select defaultValue="Select a Currency" className="select" name='currency'>
                                <option disabled={true}>Select a Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EU</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                {/* Job Description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="fieldset-legend">Job Description</legend>
                    <textarea name='description' className="textarea" placeholder="Job Description"></textarea>
                </fieldset>


                {/* Job Requirements */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="fieldset-legend">Job Requirements</legend>
                    <textarea name='requirements' className="textarea" placeholder="Job Requirements (seperated by comma)"></textarea>
                </fieldset>

                {/* Job Responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="fieldset-legend">Job Responsibilities</legend>
                    <textarea name='responsibilities' className="textarea" placeholder="Job Responsibilities (seperated by comma)"></textarea>
                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="fieldset-legend">HR related Info</legend>

                    <label className="label">HR Name</label>
                    <input name='hr_name' type="text" className="input" placeholder="HR Name" />

                    <label className="label">HR Email</label>
                    <input name='hr_email' type="email" className="input" placeholder="HR Email" defaultValue={user.email} />
                </fieldset>

                <input type="submit" className='btn' value="Add Job" />
            </form>
        </div>
    );
};

export default AddJob;