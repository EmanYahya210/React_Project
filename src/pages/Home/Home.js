import React from 'react'
import './Home.css'
import BGvideo from '../../Video/BGvideo.mp4'

function Home() {
  return (
    <div className='home'>
      <video autoPlay loop muted>
        <source src={BGvideo} type='video/mp4' />
      </video>
       <div className='HomeDes'>
        <h1 className='Title'>Sharing experiences is the secret of progress</h1>
        <p>This is the first app I make using React</p>
      </div>
    </div>
  )
}

export default Home