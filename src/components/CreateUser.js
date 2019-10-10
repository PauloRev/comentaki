import React, {useContext} from 'react'

import {AuthContext} from '../auth'

const CreateUser = () => {
  const auth = useContext(AuthContext)
  return (
    <div>
      <h1>Create User</h1>
      {JSON.stringify(auth.createUser)}
      <button onClick={() => {
        auth.createUser.createUser('teste@gmail.com', '123456')
      }}></button>
    </div>
  )
}

export default CreateUser