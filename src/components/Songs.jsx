import React from 'react'
// import axios from 'axios'
import { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import Song from './Song'
// import Maps from './Maps'

const users = [
  {
    id: 1,
    name: "Jeancy s",
    author: "typicode"
  },
  {
    id: 2,
    name: "Matthew",
    author: "typicode"
  },
  {
    id: 3,
    name: "Rechercher un cantique Rechercher un cantique",
    author: "typicode"
  },
  {
    id: 4,
    name: "Nehemi s",
    author: "typicode"
  },
  {
    id: 5,
    name: "Orange",
    author: "typicode"
  },
  {
    id: 6,
    name: "frrrffr",
    author: "typicode"
  },
  {
    id: 7,
    name: "Manger tres bien",
    author: "typicode"
  },
  {
    id: 8,
    name: "Orleans",
    author: "typicode"
  },
  {
    id: 9,
    name: "Nouvelle-ecosse",
    author: "typicode"
  },
  {
    id: 10,
    name: "Premier",
    author: "typicode"
  },
  {
    id: 11,
    name: "Walos",
    author: "typicode"
  },
  {
    id: 12,
    name: "Daria",
    author: "typicode"
  },
  {
    id: 13,
    name: "Kyss",
    author: "typicode"
  },
  {
    id: 14,
    name: "Philo",
    author: "typicode"
  },
  {
    id: 15,
    name: "Antroppolique",
    author: "typicode"
  },
]

const Songs = () => {
  const [showLyric, setShowLyrics] = useState(false)
  const [searcha, setSearcha] = useState('')
  // const [cantique, setCantique] = useState([])
  //  const url = 'http://localhost:3002/authors'
  //  useEffect(() => {
      //  axios.get(url)
      //  .then(response => {
      //      setCantique(response.data)
      //  })
  //  },[])

  const handlerSearch = (e) => {
      console.log(e.target.value)
      setSearcha(e.target.value)
  }

  return (
    <div>
        <div className="songs">
          <div className="songs__btn__head">
          <div className='songs__open__close__lyrics' onClick={() => setShowLyrics(!showLyric)}>
                   {showLyric ? (
                       <MdOutlineArrowForwardIos className='songs__open__close__lyrics__icon icon__blue' />
                   ) : (
                    <MdArrowBackIos className='songs__open__close__lyrics__icon'/>
                   )}
           </div>
          </div>
             <div className="songs__container">
                 <div className={showLyric ? "songs__close__lyrics" : "songs__song"}>
                 <div className="songs__inputs">
                    <IoSearchOutline className='songs__icon' />
                    <input type="search" value={searcha} onChange={handlerSearch} className="songs__input" placeholder='Rechercher un cantique, *en minuscule' />
                 </div>
                    <div  className="songs__list" onClick={() => setShowLyrics(false)}>
                      {users.filter(user => user.name.includes(searcha)).map(({id,name,author}) => (
                          <div className="songs__song__item" key={id}>
                            <NavLink className='songs__link' to={`/songs/${id}`}>
                              <span className="songs__numerote">001.</span>
                              <span className="songs__name">{name}</span>
                            </NavLink>
                          </div> 
                        )
                      )}
                    </div>
                 </div>
                 <div className="songs__lyrics">
                      <Routes>
                        <Route path=':id' element={<Song lyrics={users} />} />
                     </Routes>
                 </div>
             </div>
        </div>
    </div>
  )
}

export default Songs