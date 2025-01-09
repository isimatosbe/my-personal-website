import NavBar from '../components/navBar.jsx'
import Header from '../components/header.jsx'

export default function Projects() {
    return (
        <>
            <NavBar />
            <Header />
            <h2 className="bold">Projects</h2>
            <hr />
            <p>This section of the website will serve as a showcase of some projects I deem interesting to showcase.</p>
            <ul>
                <li>
                    <a href='https://github.com/isimatosbe/my-personal-website'><span className="code">my-personal-website</span></a>
                    <p>The first project that will be included in this section is the design and iterations needed to create this website.</p>
                </li>
            </ul>
        </>
    )
}