import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';


const JobPage = () => {
    const { id } = useParams();
    const job = useLoaderData();

    // useEffect(() => {
    //     const fetchJob = async() => {
    //         try {
    //             const res = await fetch(`/api/jobs/${id}`);
    //             const data = await res.json();
    //             setJob(data);
    //         } catch (error) {
    //             console.log('error fetching data', error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }

    //     fetchJob();
    // }, [])
    return 
        <h1>{job.title}</h1>
    
};

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
};


export { JobPage as default, jobLoader };