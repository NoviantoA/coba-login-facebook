import { signOut, useSession } from 'next-auth/react'
import React from 'react'

const Navbar = () => {

  const {data: session, status } = useSession()

  return (
    <div className='bg-gray-800'>
        <div className='h-16 px-8 flex items-center'>
            <p className='text-white font-bold flex-auto'>User Management System</p>
            {session && (
              <div className='flex items-center sm:space-x-2 justify-end'>
                {/* jika menggunakan <Image></Image> setting di next.cnfig.js->images*/}
                <img onClick={signOut} src={session.user.image} className="rounded-full cursor-pointer" height="30" width="30" layout="fixed" title="Click to Logout" />
                {/* cek apakah session sudah berakhir if statement */}
                <p className='text-white font-bold'>{session?.user.name}</p>
              </div>
            )}
        </div>
    </div>
  )
}

export default Navbar