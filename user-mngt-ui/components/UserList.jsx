import React, {useState, useEffect} from 'react'
import UpdateUser from './UpdateUser'
import User from './User'

// call props in other file
const UserList = ({user}) => {

        // call api
        const USER_API_BASE_URL = "http://localhost:8080/api/v1/users"
    
        const [users, setUsers] = useState(null)
        const [loading, setLoading] = useState(true)
        const [userId, setUserId] = useState(null)
        const [responseUser, setResponseUser] = useState(null)
    
        // hook data
        useEffect(() => {
            // fetch data
          const fetchData = async() => {
            setLoading(true)
            try {
                const response = await fetch(USER_API_BASE_URL, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                // callback response
                const users = await response.json()
                setUsers(users)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
          }
          fetchData()
          // use props to load data
        }, [user, responseUser])

        const deleteUser = (e, id) => {
            e.preventDefault();
            fetch(USER_API_BASE_URL + "/" + id, {
                method: "DELETE"
            }).then((res) => {
                if(users){
                    setUsers((prevElemet) => {
                        return prevElemet.filter((user) => user.id !== id)
                    })
                }
            })
        }

        const updateUser = (e, id) => {
            e.preventDefault()
            setUserId(id)
        }

  return (
    <>
    <div className='container mx-auto my-8'>
        <div className='flex shadow border-b'>
            <table className='min-w-full'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>First Name</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>Last Name</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>Email</th>
                        <th className='text-right font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>Action</th>
                    </tr>
                </thead>
                {!loading && (
                <tbody className='bg-white'>
                     {/* parsing data use if statement */}
                    {users?.map((user) => (
                   <User user={user} key={user.id} deleteUser={deleteUser} updateUser={updateUser}/>
                   ))}
                </tbody>
                )}
            </table>
        </div>
    </div>
    <UpdateUser userId={userId} setResponseUser={setResponseUser}/>
    </>
  )
}

export default UserList