import './styles.css'
import { useTranslation } from 'react-i18next';

function RainModal() {
   const { t } = useTranslation()

 return(
    <div className="container-rain">
     <h1 className='h1-text'>{t("welcome")}  {t("tech1")}</h1> <br />
     <h2 className='h1-text'>{t("performance")}</h2>
    </div>
 )   
}

export default RainModal