import { useTranslation } from 'react-i18next'
import br from '../../image/icons/brazil.svg'
import eua from '../../image/icons/us.svg'
import './styles.css'


const languageOptions = [
{
    value: "ptBR",
    flag: br
},
{
    value: "en",
    flag: eua
}

]

export default function LanguageSwitcher()  {
    const {i18n} = useTranslation()
    return (
<div>
    {languageOptions.map(languageOptions => (
        
        <button className='btnFlags'
        key={languageOptions.value}
         onClick={() => {
            i18n.changeLanguage(languageOptions.value)
        }}>
            <img src={languageOptions.flag} alt='flag' />
        </button>
    ))}
</div>
    )
}