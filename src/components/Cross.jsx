import crossChristian from '../assets/cross-Christian.jpeg'

const Cross = () => {
  return (
         <div className="cross">
              <img src={crossChristian} alt="" className="cross__image" />
              <h1 className="cross__title">Psaumes 150</h1>
             <p className="cross__content">
                Louez l'Éternel! Louez Dieu dans son sanctuaire! Louez-le dans l'étendue, où éclate sa puissance!
                Louez-le pour ses hauts faits! Louez-le selon l'immensité de sa grandeur!
                Louez-le au son de la trompette! Louez-le avec le luth et la harpe!
             </p>
             <p className="cross__content">
                Louez-le avec le tambourin et avec des danses! Louez-le avec les instruments à cordes et le chalumeau!
                Louez-le avec les cymbales sonores! Louez-le avec les cymbales retentissantes!
                Que tout ce qui respire loue l'Éternel! Louez l'Éternel!
             </p>
         </div>
      )
}

export default Cross