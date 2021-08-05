import React from 'react'


const Home = () => (
  <>
    <div id='container' className='uk-container'>
      <div id='titleCard' className='uk-card uk-card-body'>
        <h1 id='title' className='uk-heading-large uk-heading-divider'>
          Cee Topics
        </h1>
        <h2 id='subtitle' className='uk-heading-bullet'>
          Civil Engineering topics demonstrated visually
        </h2>
      </div>
      <div id='card' className='uk-card uk-card-primary uk-card-hover uk-card-body uk-light'>
        <h3 className='main-buttons'>Structures</h3>
      </div>
      <div id='card' className='uk-card uk-card-primary uk-card-hover uk-card-body uk-light'>
        <h3 className='main-buttons'>Hydraulics</h3>
      </div>
      <div id='card' className='uk-card uk-card-primary uk-card-hover uk-card-body uk-light'>
        <h3 className='main-buttons'>Steel</h3>
      </div>
      <div id='card' className='uk-card uk-card-secondary uk-card-hover uk-card-body'>
        <h3 className='main-buttons'>Information</h3>
      </div>
    </div>
  </>
)

export default Home
