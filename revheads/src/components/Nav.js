import "./Nav.css"
const Nav = () => {
    
    return(
    <div className="nav">
        <div className="nav_selections">
            <div className="home">
                <span className="home_selection">Home</span>
            </div>
            <div className="other_selections">
                <span>Ferrari</span>
                <span>Bugatti</span>
                <span>Porsche</span>
                <span>BMW</span>
            </div>
        </div>
        <span></span>
    </div>
    )
}

export default Nav