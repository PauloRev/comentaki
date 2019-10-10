import React, {useContext, useState} from 'react';

import {AuthContext} from '../auth';

const FormDisplayName = ({ displayName, user }) => {
  const [newDisplayName, setNewDisplayName] = useState(displayName)

  const handleDisplayName = e => {
    setNewDisplayName(e.target.value)
  }

  const save = e => {
    e.preventDefault()
    if(newDisplayName !== '') {
      user.updateProfile({ displayName: newDisplayName })
    }
  }

  return (
    <form>
      <input type="text" value={newDisplayName} onChange={handleDisplayName} />
      <button onClick={save}>Save display name</button>
    </form>
  )
}

const UserInfo = () => {
  const auth = useContext(AuthContext)

  if(auth.user === null) {
    return null
  }

  const {displayName} = auth.user
  const [alternativeDisplayName] = auth.user.email.split('@')
  const dn = displayName || alternativeDisplayName

  return (
    <>
      <p>Olá, {dn}!</p>
      <FormDisplayName displayName={dn} user={auth.user} />
    </>
  )
}

export default UserInfo;