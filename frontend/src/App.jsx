import { useCallback, useState } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const fetchUsers = useCallback(async () => {
    try {
      const users = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/users`);
      const result = await users.json();
      setUsers(result.users);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getUsers = async () => {
    await fetchUsers();
  }

  return (
    <>
      <h3>Sample Page</h3>
      <button onClick={getUsers}>Get Users</button>
      {
        users.length > 0 ? (
          <ul>
            {
              users.map((user) => (
                <li key={ user.id }>{user.name}</li>
              ))
            }
          </ul>
        ) : `No users found`
      }
    </>
  )
}

export default App
