import {useState} from 'react'
import axios from 'axios'
import Layout from '../components/Layout'

export default function Newsletter() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('/api/newsletter', {
        firstName,
        lastName,
        email,
      })

      console.log('Success')
      setSuccess(true)
      setFirstName('')
      setLastName('')
      setEmail('')
    } catch (e) {
      console.error('Error', e)
    }
  }

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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm dark:text-white" htmlFor="firstName">
                First Name
              </label>
              <input
                className="p-4 rounded-md "
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
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
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm dark:text-white" htmlFor="firstName">
                Email
              </label>
              <input
                required
                className="p-4 rounded-md"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button className="w-full p-3 font-bold transition-all rounded-md shadow-md hover:-translate-y-1 md:text-lg bg-secondary">
              Join Newsletter
            </button>
            {success && (
              <div className="mt-4 text-center text-green">
                🎉 Success! Thanks for signing up!
              </div>
            )}
          </form>
        </div>
      </section>
    </Layout>
  )
}
