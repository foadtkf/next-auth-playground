import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

const ProtectedPage = async ({ params }) => {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect(`/signin?callbackUrl=/protected/server/${params.id}`)
  }
  return (
    <section className='py-24'>
      <div className='container'>Hello from animated card{params.id}..</div>
    </section>
  )
}

export default ProtectedPage
