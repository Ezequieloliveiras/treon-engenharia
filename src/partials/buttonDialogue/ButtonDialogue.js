import './index.css'

function ButtonDialogue() {
    const handleWhatsAppClick = () => {
        const phoneNumber = '+5527996213588'
        const message = encodeURIComponent('Olá, estou entrando em contato através do site.')

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`
        window.open(whatsappURL)
    }
    return (
        <>
            <a className="animated-button1"
                style={{
                    bottom: '0px',
                    position: 'absolute',
                    left: '50%',
                    right: '50%',
                    width:'500px',
                    transform: 'translate(-50%, -50%)'
                }}

                onClick={handleWhatsAppClick}
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Converse com um Engenheiro
            </a>
        </>
    )
}

export default ButtonDialogue