import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';



const JobPage = () => {
    const { id } = useParams();
    const job = useLoaderData();

    return ();
    
};

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
};


export { JobPage as default, jobLoader };