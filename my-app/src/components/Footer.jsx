function Footer() {
    return (
        <footer>
            <div>
                <ul>
                    <li><a href="#">Github</a></li>
                    <li><a href="#">Linkedin</a></li>
                    <li><a href="#">Behance</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
                <ul>
                    <li><a href="/contact" onClick={(e) => handleNavClick(e, "/contact")} className="underline">To Get in touch</a></li>
                    <li>&nbsp;</li>
                    <li><a href="#">Email</a></li>
                    <li><a href="#">Schedule a Meeting</a></li>
                </ul>
                <ul>
                    <li><span className="underline">Located at</span></li>
                    <li>&nbsp;</li>
                    <li>British Columbia, Canada</li>
                    <li>Fortaleza, Brazil</li>
                </ul>
            </div>
            <a href="/"><img src="public/assets/images/logo-luanabastos.svg" alt="Luana's Logo" /></a>
        </footer>
    )
}

export default Footer;