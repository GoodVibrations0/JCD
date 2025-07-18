import React from 'react'

interface Props{
  balance : number
}

const HomePage = (props: Props) => {
  return(
    <div className='HomePage'>
      <h1 className='smear-text'>Welcome</h1>
      <div className='card'>
      <p>
          {props.balance <=0 ?`Wherever You get your Podcasts` : `First`}
      </p>
      </div>
    </div>
  )
}

export default HomePage