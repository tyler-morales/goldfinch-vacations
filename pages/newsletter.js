import React from 'react'
import Layout from '../components/Layout'

export default function newsletter() {
  return (
    <Layout>
      <section className="mt-24 ">
        <h1 className="text-3xl font-bold text-center dark:text-white">
          Sign up for our Newsletter
        </h1>
        <div className="grid grid-cols-1 gap-20 mt-16 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold dark:text-white">
              Why Sign up?
            </h2>
            <ul className="flex flex-col gap-4 dark:text-white">
              <li>
                📨 &nbsp; We value your inbox so we only newsletter when
                absoutly necessary
              </li>
              <li>
                🚫 &nbsp; We respet your privacy. We will NEVER sell your
                information to third parties
              </li>
              <li>
                💫 &nbsp; Be the first to get notified for pricing promotions
              </li>
            </ul>
          </div>
          <form className="flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm dark:text-white" htmlFor="firstName">
                First Name
              </label>
              <input
                className="p-4 rounded-md "
                type="text"
                name="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm dark:text-white" htmlFor="firstName">
                Last Name
              </label>
              <input
                className="p-4 rounded-md "
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm dark:text-white" htmlFor="firstName">
                Email
              </label>
              <input
                className="p-4 rounded-md"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <button className="w-full p-3 font-bold transition-all rounded-md shadow-md hover:-translate-y-1 md:text-lg bg-secondary">
              Join Newsletter
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}
