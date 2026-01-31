import React from 'react';

const AddJob = () => {
    return (
        <div>
            <h2>Please add job</h2>
            <form>
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
                        <input className="btn" type="radio" name="jobType" aria-label="On-site" />
                        <input className="btn" type="radio" name="jobType" aria-label="Remote" />
                        <input className="btn" type="radio" name="jobType" aria-label="Hybrid" />
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
                    <input type="date" className="input" />
                </fieldset>

                {/* salary range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input name='salaryMin' type="text" className="input" placeholder="Minimum Salary" />
                        </div>

                        <div>
                            <label className="label">Maximum Salary</label>
                            <input name='salaryMax' type="text" className="input" placeholder="Minimum Salary" />
                        </div>

                        <div>
                            <label className="label">Currency</label>
                            <select defaultValue="Select a Currency" className="select" name='category'>
                                <option disabled={true}>Select a Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EU</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                {/*  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                    <legend className="fieldset-legend">Basic Job Info</legend>

                </fieldset>
            </form>
        </div>
    );
};

export default AddJob;