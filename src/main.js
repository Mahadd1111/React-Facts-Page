function Main(props){
    return(
        <div className={props.darkMode?"main-content dark":"main-content"}>
            <h1>Reasons I Love React!</h1>
            <ul className="list-items">
                <li><span>It Looks cool so I'm a cool developer.</span></li>
                <li><span>I have to type less so I'm more healthy and live longer.</span></li>
                <li><span>Hopefully this makes me alot of money!</span></li>
            </ul>
        </div>
    );
}

export default Main;