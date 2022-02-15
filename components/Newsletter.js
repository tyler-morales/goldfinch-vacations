import {useState} from 'react'
import Layout from './Layout'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState('')

  const submitNewsletter = (e) => {
    e.preventDefault()
    setSuccess(true)
    setEmail('')
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
          <div className="relative flex items-center justify-end ">
            <input
              type="email"
              required
              value={email}
              className="block w-full p-6 text-lg rounded-md"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="absolute p-3 mr-6 text-lg font-bold rounded-md bg-secondary">
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
