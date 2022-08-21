import reactLogo from "./images/logo192.png"

function Nav(props){
    return(
        <nav className={props.darkMode?"dark":""}>
            <div className="brand">
                <img src={reactLogo} className="react-logo"/>
                <h1>React Facts</h1>
            </div>
            <div className="toggler">
                <p className="toggler-light">Light</p>
                <div className="toggler-slider" onClick={props.toggleDarkMode}>
                    <div className="toggler-slider-circle"></div>
                </div>
                <p className="toggler-dark">Dark</p>
            </div>
        </nav>
    );
}

export default Nav;