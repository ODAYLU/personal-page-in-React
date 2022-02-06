const BrowserRouter = ReactRouterDOM.BrowserRouter;
const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;
const NavLink = ReactRouterDOM.NavLink;

class Routing extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="routingStyling ">
                    <ul className="header ">
                        <li><NavLink activeClassName="SelectedBtn" exact to="/">Web Design</NavLink></li>
                        <li><NavLink activeClassName="SelectedBtn" to="/stuff">Advertising</NavLink></li>
                        <li><NavLink activeClassName="SelectedBtn" to="/contacts">Apps Design</NavLink></li>
                    </ul>
                    <div className="content">
                        <Switch>
                            <Route path="/stuff" component={Stuff}></Route>
                            <Route path="/contacts" component={Contacts}></Route>
                            <Route path="/" ><Home /></Route>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

function Home() {
    return (
        <div class="serv-content">
            <div className="card">
                    <div className="box">
                        <i class="fas fa-paint-brush"></i>
                        <div class="text">Web Design</div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                    </div>
                </div>
        </div>
    );
}
function Stuff() {
    return (
        <div class="serv-content">
        <div className="card">
                <div className="box">
                    <i class="fas fa-chart-line"></i>
                    <div class="text">Advertising</div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                </div>
            </div>
    </div>
    );
}
function Contacts() {
    return (
        <div class="serv-content">
            <div className="card">
                    <div className="box">
                        <i class="fas fa-code"></i>
                        <div class="text">Apps Design</div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                    </div>
                </div>
        </div>
    );
}
