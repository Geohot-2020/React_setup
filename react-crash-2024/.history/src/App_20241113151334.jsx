import React from 'react'

const App = () => {
  return (
    <>
     <nav CL="bg-indigo-700 border-b border-indigo-500">
      <div CL="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div CL="flex h-20 items-center justify-between">
          <div
            CL="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/* <!-- Logo --> */}
            <a CL="flex flex-shrink-0 items-center mr-4" href="/index.html">
              <img
                CL="h-10 w-auto"
                src="images/logo.png"
                alt="React Jobs"
              />
              <span CL="hidden md:block text-white text-2xl font-bold ml-2"
                >React Jobs</span
              >
            </a>
            <div CL="md:ml-auto">
              <div CL="flex space-x-2">
                <a
                  href="/index.html"
                  CL="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Home</a
                >
                <a
                  href="/jobs.html"
                  CL="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Jobs</a
                >
                <a
                  href="/add-job.html"
                  CL="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Add Job</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    {/* <!-- Hero --> */}
    <section CL="bg-indigo-700 py-20 mb-4">
      <div
        CL="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div CL="text-center">
          <h1
            CL="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            Become a React Dev
          </h1>
          <p CL="my-4 text-xl text-white">
            Find the React job that fits your skills and needs
          </p>
        </div>
      </div>
    </section>

    {/* <!-- Developers and Employers --> */}
    <section CL="py-4">
      <div CL="container-xl lg:container m-auto">
        <div CL="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div CL="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 CL="text-2xl font-bold">For Developers</h2>
            <p CL="mt-2 mb-4">
              Browse our React jobs and start your career today
            </p>
            <a
              href="/jobs.html"
              CL="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Jobs
            </a>
          </div>
          <div CL="bg-indigo-100 p-6 rounded-lg shadow-md">
            <h2 CL="text-2xl font-bold">For Employers</h2>
            <p CL="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <a
              href="/add-job.html"
              CL="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Add Job
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Browse Jobs --> */}
    <section CL="bg-blue-50 px-4 py-10">
      <div CL="container-xl lg:container m-auto">
        <h2 CL="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div CL="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Job Listing 1 --> */}
          <div CL="bg-white rounded-xl shadow-md relative">
            <div CL="p-4">
              <div CL="mb-6">
                <div CL="text-gray-600 my-2">Full-Time</div>
                <h3 CL="text-xl font-bold">Senior React Developer</h3>
              </div>

              <div CL="mb-5">
               We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript...
              </div>

              <h3 CL="text-indigo-500 mb-2">$70 - $80K / Year</h3>

              <div CL="border border-gray-100 mb-5"></div>

              <div CL="flex flex-col lg:flex-row justify-between mb-4">
                <div CL="text-orange-700 mb-3">
                  <i CL="fa-solid fa-location-dot text-lg"></i>
                  Boston, MA
                </div>
                <a
                  href="job.html"
                  CL="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Job Listing 2 --> */}
          <div CL="bg-white rounded-xl shadow-md relative">
            <div CL="p-4">
              <div CL="mb-6">
                <div CL="text-gray-600 my-2">Remote</div>
                <h3 CL="text-xl font-bold">Front-End Engineer (React)</h3>
              </div>

              <div CL="mb-5">
               Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion...
              </div>

              <h3 CL="text-indigo-500 mb-2">$70K - $80K / Year</h3>

              <div CL="border border-gray-100 mb-5"></div>

              <div CL="flex flex-col lg:flex-row justify-between mb-4">
                <div CL="text-orange-700 mb-3">
                  <i CL="fa-solid fa-location-dot text-lg"></i>
                  Miami, FL
                </div>
                <a
                  href="job.html"
                  CL="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Job Listing 3 --> */}
          <div CL="bg-white rounded-xl shadow-md relative">
            <div CL="p-4">
              <div CL="mb-6">
                <div CL="text-gray-600 my-2">Remote</div>
                <h3 CL="text-xl font-bold">React.js Developer</h3>
              </div>

              <div CL="mb-5">
                Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference...
              </div>

              <h3 CL="text-indigo-500 mb-2">$70K - $80K / Year</h3>

              <div CL="border border-gray-100 mb-5"></div>

              <div CL="flex flex-col lg:flex-row justify-between mb-4">
                <div CL="text-orange-700 mb-3">
                  <i CL="fa-solid fa-location-dot text-lg"></i>
                  Brooklyn, NY
                </div>
                <a
                  href="job.html"
                  CL="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section CL="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        CL="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
    </>
  )
}

export default App