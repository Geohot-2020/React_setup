import React from 'react'
import { ClipLoader } from 'react-spinners/ClipLoader'

const override = {
    displ
}

const Spinner = (loading) => {
  return (
    <ClipLoader 
        color='#4338ca'
        loading={loading}
        cssOverride={override}
    />
  )
}

export default Spinner