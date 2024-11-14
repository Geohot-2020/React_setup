import React, { useEffect, useState } from 'react'



const JobPage = () => {
  return (
    const [job, setJob] = useState(null);

    useEffect(() => {
        const fetchJob = async() => {
            try {
                const res = await fetch('api');
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