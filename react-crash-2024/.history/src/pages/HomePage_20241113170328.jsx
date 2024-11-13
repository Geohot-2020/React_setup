import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
ViewAll

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <JobListings />
    </>
  )
}

export default HomePage