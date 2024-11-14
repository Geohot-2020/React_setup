import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

useParams

const JobPage = () => {
  return (
    const {id} = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        const fetchJob = async() => {
            try {
                const res = await fetch('/api/job');
                const data = await res.json();
                setJobs(data);
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