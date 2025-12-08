import React, { Suspense } from 'react';
import Banner from './Banner';
import Jobs from './Jobs';


const jobsPromise = fetch('http://localhost:3000/jobs')
    .then(res => res.json());

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<div>Loading jobs...</div>}>
                <Jobs jobsPromise={jobsPromise}></Jobs>
            </Suspense>
        </div>
    );
};

export default Home;