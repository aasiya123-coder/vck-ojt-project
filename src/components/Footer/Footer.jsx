import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <p>&copy;{new Date().getFullYear()}
                Vivekanand College. All right reserved.
            </p>
        </footer>
    )
}

export default Footer;