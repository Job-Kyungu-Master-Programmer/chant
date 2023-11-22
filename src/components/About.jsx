import capture from '../assets/capture008.png'
import { MdOutlineSettingsSuggest } from "react-icons/md";


const About = () => {
  return (
        <div className="about">
           <div className="about__image">
              {/* Image background  */}
           </div>
           <div className="about__details">
              <div className="details__version">
                 <span className="details-v">V1.1.0</span>
              </div>
              <div className="details__details">
                  <h1 className="details__title">Taberkin ?</h1>
                  <div className="details__content">
                      Taberkin, est une application web et mobile, cette application comprends des fonctionnalités telles que : lire un cantique, rechercher un cantique rapidement, etc. 
                      À la place du PDF, nous avons trouvé mieux de créer ce logiciel qui va faciliter la tâche à tous nos bien-aimés.
                  </div>
                  <div className="details__content">
                     Cette application peut être téléchargée directement sur : Play Store (pour les appareils IOS) , ou sur : Google Play (pour les appareils Android), 
                     Vous avez aussi la capacité de télécharger sur votre tablette ou ordinateur. 
                  </div>
                  <div className="details__content">
                     Pour ceux qui utilisent les ordinateurs (pc) , si vous n'avez pas trouvé l'application Desktop, 
                     vous pouvez poursuivre le téléchargement comme suit : veuillez cliquer sur cette icône de téléchargement  encerclez en rouge et le logiciel sera directement téléchargé sur votre pc. 
                     <img src={capture} alt="une capture d'ecran" className="details__img" />
                  </div>
              </div>
              <div className="details__sug">
               <span className="details__sug-title">
                 <MdOutlineSettingsSuggest className='details__sug-icon'  />
                   Suggestion
               </span>
               <p className="details__sug-content">
                Si vous avez des suggestions ou si vous avez trouvé une erreur,
                n'hésitez pas à nous contacter afin de nous en informer, car tout cela sera le bienvenu. 
                : <a href="tel:+79966178726" className="details__sug-link">WhatsApp</a>  
               </p> 
              </div>
           </div>
        </div>
  )
}

export default About