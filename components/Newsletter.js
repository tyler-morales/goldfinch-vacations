import {useState} from 'react'
import Layout from './Layout'
import axios from 'axios'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState('')

  const submitNewsletter = async (e) => {
    e.preventDefault()
    setSuccess(true)

    try {
      const response = await axios.post('/api/newsletter', {email})
      console.log('Success')
      setEmail('')
    } catch (e) {
      console.error('Error', e)
    }
  }
  return (
    <section className="m-auto">
      <Layout>
        <h2 className="text-3xl font-bold dark:text-white">
          Join our quarterly newsletter
        </h2>
        <ul className="flex flex-col gap-4 mt-8 dark:text-white">
          <li>
            📨 &nbsp; We value your inbox so we only newsletter when absoutly
            necessary
          </li>
          <li>
            🚫 &nbsp; We respet your privacy. We will NEVER sell your
            information to third parties
          </li>
          <li>💫 &nbsp; Be the first to get notified for pricing promotions</li>
        </ul>

        {/* form */}
        <form onSubmit={submitNewsletter} className="mt-12">
          <div className="relative flex flex-col items-center justify-end gap-4 md:flex-row md:gap-0">
            <input
              type="email"
              required
              value={email}
              className="block w-full p-4 text-lg rounded-md md:p-6"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="w-full p-3 font-bold rounded-md md:w-auto md:mr-6 md:absolute md:text-lg bg-secondary">
              {success ? 'Joined' : 'Join Newsletter'}
            </button>
          </div>
          {success && (
            <div className="mt-4 text-center text-green">
              🎉 Success! Thanks for signing up!
            </div>
          )}
        </form>
      </Layout>
    </section>
  )
}
