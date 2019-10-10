import React, {useContext, useState} from 'react'

import {AuthContext} from '../auth'

const CreateUser = () => {
  const auth = useContext(AuthContext)

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleForm = input => e => {
    setForm({
      ...form,
      [input]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    auth.createUser.createUser(form.email, form.password)
  }

  if(auth.user !== null) {
    return null
  }

  return (
    <div>
      <h1>Criar conta</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" value={form.email} onChange={handleForm('email')} placeholder="Seu e-mail" />
        <input type="password" value={form.password} onChange={handleForm('password')} placeholder="Sua senha" />
        <button type="submit">Criar conta</button>
      </form>
    </div>
  )
}

export default CreateUser