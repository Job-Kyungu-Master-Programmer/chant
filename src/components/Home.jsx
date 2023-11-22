import React from 'react'
import Cross from './Cross'
import Preview from './Preview'

const Home = () => {
  return (
    <div>
        <div className="home">
             <div className="home__preview">
                <Preview />
             </div>
             <div className="home__cross">
                <Cross />
             </div>
        </div>
    </div>
  )
}

export default Home