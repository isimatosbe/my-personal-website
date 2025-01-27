import rights from '../data/footer.json'

export default function Footer({ lang }) {
    return (
        <footer className="footer">
            Copyright © {(new Date().getFullYear())} Isidro Matos Bellido. {rights[lang]}
        </footer>
    )
}