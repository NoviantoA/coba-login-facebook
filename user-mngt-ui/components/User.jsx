import React from 'react'

// call props from other file
const User = ({user, deleteUser, updateUser}) => {

  return (
    <>
         <tr key={user.id}>
            <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>{user.firstName}</div>
            </td>
            <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>{user.lastName}</div>
            </td>
            <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>{user.email}</div>
            </td>
            <td className='text-right px-6 py-4 whitespace-nowrap'>
                <a onClick={(e, id) => updateUser(e, user.id)} className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4'>Edit</a>
                <a onClick={(e, id) => deleteUser(e, user.id)} className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer'>Delete</a>
            </td>
        </tr>
    </>
  )
}

export default User