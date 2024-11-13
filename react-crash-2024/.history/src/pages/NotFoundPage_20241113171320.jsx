import React from 'react'

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <i class="fas fa-exclamation-triangle text-yellow-400 fa-4x mb-4"></i>
      <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
      <p class="text-xl mb-5">This page does not exist</p>
      <a
        href="/index.html"
        class="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
        >Go Back</a
      >
    </section>
  )
}

export default NotFoundPage