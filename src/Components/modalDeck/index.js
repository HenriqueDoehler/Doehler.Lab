import './styles.css'

function ModalDeck({description}) {
    return (
        <>
          <box className="container-Mdeck">
            <span className='text-card'>{description}</span>
         </box>
        </>
    )
}
export default ModalDeck