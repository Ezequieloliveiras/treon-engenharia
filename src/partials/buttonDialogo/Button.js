import './index.css'

function ButtonDialogo() {
    const handleWhatsAppClick = () => {
        const phoneNumber = '+5527996213588'
        const message = encodeURIComponent('Olá, estou entrando em contato pelo site.')

        // Gere o link do WhatsApp com o número de telefone e mensagem pré-definida
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`
        window.open(whatsappURL)
    }
    return (
        <>
            <a href="#" class="animated-button1"
                style={{
                    bottom: '70px',
                    position: 'absolute',
                    left: '50%',
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

export default ButtonDialogo