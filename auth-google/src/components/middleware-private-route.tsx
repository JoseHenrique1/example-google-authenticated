import React, { use, useEffect } from 'react'

import { useNavigate } from 'react-router'

interface props {
  children: React.ReactNode
}
const MiddlewarePrivateRoute = ({children}: props) => {
  const navigate = useNavigate()

  async function checkAuth() {
    const response = await fetch('http://localhost:5000/me', {
      credentials: 'include',
    });
    const data = await response.json();
    console.log("data", JSON.stringify(data, null, 2));
    
    if (!data.token) {
      navigate("/")
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  

  return (
    <>
      { children}
    </>
  )
}

export {MiddlewarePrivateRoute}

