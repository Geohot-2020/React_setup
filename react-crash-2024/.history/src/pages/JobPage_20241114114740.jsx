import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

useParams

const JobPage = () => {
  return (
    const {id} = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = use

    useEffect(() => {
        const fetchJob = async() => {
            try {
                const res = await fetch('/api/job/${id}');
                const data = await res.json();
                setJob(data);
            } catch (error) {
                console.log('error fetching data', error);
            } finally {
                setLoading(false);
            }
        }
    })
  )
};


export default JobPage