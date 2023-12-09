// import { getServerSession } from 'next-auth/next'
// import React from 'react'
// import { authOptions } from '../api/auth/[...nextauth]/route'
// import { redirect } from 'next/navigation'
// import { SessionProvider } from 'next-auth/react'

export default async function PrivateLayout({ children }) {
  // const session = await getServerSession(authOptions)

  // console.log(session)

  // if (!session?.user) redirect('/login')

  return <>{children}</>
}
