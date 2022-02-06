class Header extends React.Component{
    render(){
        return(
            <div>
                <div class="max-width">
                    <div class="logo"><a href="#">Portfo<span>lio.</span></a></div>
                    <ul class="menu">
                        <li><a href="#home" class="menu-btn">Home</a></li>
                        <li><a href="#about" class="menu-btn">About</a></li>
                        <li><a href="#services" class="menu-btn">Services</a></li>
                        <li><a href="#skills" class="menu-btn">Skills</a></li>
                        <li><a href="#teams" class="menu-btn">Teams</a></li>
                        <li><a href="#contact" class="menu-btn">Contact</a></li>
                    </ul>
                    <div class="menu-btn">
                        <i class="fas fa-bars"></i>
                    </div>
                </div>

            </div>
        );
    }
}