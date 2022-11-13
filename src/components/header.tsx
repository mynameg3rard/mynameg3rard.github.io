import "../styles/header.css"

export default function Header() {
    return <div className="header">
        <div className="topnav">
            <a className="active" href="#home">GERARD.</a>
            <a href="#contact" className="split" id="last">CONTACT.</a>
            <a href="#projects" className="split">PROJECTS.</a>
            <a href="#experience" className="split">EXPERIENCE.</a>
            <a href="#aboutme" className="split" >ABOUT ME.</a>
        </div>
    </div>
}