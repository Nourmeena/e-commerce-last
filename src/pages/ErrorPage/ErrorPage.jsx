import React from 'react'
import ButtonCommon from '../../components/ButtonCommon/ButtonCommon'

const ErrorPage = () => {
  return (
    <div>
      <div className='d-flex flex-column justify-content-center align-items-center gap-5 p-5 m-5'>
        <h1 style={{fontSize:"80px"}}>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <ButtonCommon name="Back to home page" to="/" />
      </div>
    </div>
  );
}

export default ErrorPage
