import React from 'react'

const AuthCard = ({children}) => {
  const styleObject = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding:'2rem',
    margin:'1rem',
    maxWidth: '600px'
  }
  return (
    <section style={styleObject}>
        {children}
    </section>
  )
}

export default AuthCard
