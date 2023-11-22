import img1 from '../assets/img1.png'
import { BsExclamationOctagon } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";



const Preview = () => {
  return (
    <div className='preview'>
        <div className="preview__container">
            <div className="preview__image">
               <img src={img1} alt="logo Taberkin" className="preview__img" />
               <div className="preview__text">
                <h1 className="preview__title">Cantique Du Pelerin</h1>
                    <p className="preview__content">
                    Nous vous saluons tous dans le Nom de notre Seigneur et Sauveur Jésus-Christ.
                    Et nous vous souhaitons le,la bienvenu(e) sur cette plateforme par ce verset biblique : 
                    </p>
                    <div className="preview__content">
                        <strong>Colossiens 3:11 </strong>
                        <em>Il n'y a ici ni Grec ni Juif, ni circoncis ni incirconcis, ni barbare ni Scythe, ni esclave ni libre; mais Christ est tout et en tous.</em>
                    </div>
               </div>
            </div>
            <div className="preview__banner">
                <div className="preview__announce">Espérance chrétienne</div>
                <p className="preview__content">
                Les cantiques ayant trait au retour du Seigneur pour enlever son Église, sont essentiels pour nourrir l'espérance du chrétien. Nous désirons fortifier cette « espérance », qui est une certitude.
                </p>
            </div>
            <div className="preview__infos">
                <div className="preview__icon">
                   <BsExclamationOctagon className="preview__icon" />
                </div>
                <p className="preview__content">
                    <em>Taberkin</em> espère ne pas avoir enfreint de droits d'auteurs ou autres copyrights. Au cas où il n'en serait pas ainsi, nous prions les intéressés de bien vouloir nous en excuser, et de bien vouloir accepter notre contribution au libre partage, avec nos auditeurs ou lecteurs, de chants utiles pour leur vie chrétienne (édification, expression de la joie, de l'espérance, de la foi) et pour la gloire de notre Seigneur.
                </p>
            </div>
             <div className="preview__bottom">
                <span className="preview__bottom__span">
                    <a href="mailto:joblodo97@gmail.com" className="preview__bottom__link">
                        <TfiEmail className='preview__bottom__icon' />
                        <em>Contactez-nous</em>
                    </a>
                </span>
                <span className="preview__bottom__span">Copyright © 2023 - 2024</span>
            </div>
        </div>
    </div>
  )
}

export default Preview