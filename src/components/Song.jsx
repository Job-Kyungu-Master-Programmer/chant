import React from 'react'
// import { useParams } from 'react-router-dom'
import { GiMusicalNotes } from "react-icons/gi";


const Song = ( { lyrics } ) => {
  // const id = useParams().id
  // const songLyrics = lyrics.find(lyr => lyr.id === Number (id))
  return (
    <div className='lyrics'>
           <div className="lyrics__header">
               <span className="lyrics__numerote">001 .</span>
              <h1 className="lyrics__title">A Celui qui nous lavés (CV 17)</h1>
              <GiMusicalNotes className='lyrics__icon' />
           </div>
           <div className="lyrics__song">
               <div className="lyrics__list">
               <div className="lyrics__couplet">
                    <span className="lyrics__num">1 .</span>
                    A Celui qui nous a lavés,
                    Qui nous a tant aimés,
                    Par Son Sang nous a rachetés,
                    Soit gloire, gloire, gloire,
                    Louange à jamais !
                  </div>
                  <div className="lyrics__ref">
                    <span className="lyrics__choeur">Choeur : </span>
                    A Celui qui nous a lavés,
                    Qui nous a tant aimés,
                    Par Son Sang nous a rachetés,
                    Soit gloire, gloire, gloire,
                    Louange à jamais !
                  </div>
                  <div className="lyrics__couplet">
                    <span className="lyrics__num">1 .</span>
                    A Celui qui nous a lavés,
                    Qui nous a tant aimés,
                    Par Son Sang nous a rachetés,
                    Soit gloire, gloire, gloire,
                    Louange à jamais !
                  </div>
                  <div className="lyrics__couplet">
                    <span className="lyrics__num">1 .</span>
                    A Celui qui nous a lavés,
                    Qui nous a tant aimés,
                    Par Son Sang nous a rachetés,
                    Soit gloire, gloire, gloire,
                    Louange à jamais !
                  </div>
                  <div className="lyrics__couplet">
                    <span className="lyrics__num">1 .</span>
                    A Celui qui nous a lavés,
                    Qui nous a tant aimés,
                    Par Son Sang nous a rachetés,
                    Soit gloire, gloire, gloire,
                    Louange à jamais ! ARch
                  </div>
               </div>
           </div>
    </div>
  )
}

export default Song