const Switch = ReactRouterDOM.Switch;
const BrowserRouter = ReactRouterDOM.BrowserRouter;

const Route = ReactRouterDOM.Route;
const NavLink = ReactRouterDOM.NavLink;
class RouteClass extends React.Component {
  render() {
    return (
      <div class="container">
        <BrowserRouter>
          <ul class="portfolio-sorting list-inline text-center">
            <li>
              <a>
                <NavLink
                  class="active"
                  style={{ padding: "15px 10px" }}
                  exact
                  to="/"
                >
                  All
                </NavLink>
              </a>
            </li>
            <li>
              <a>
                <NavLink to="/WebDesign" style={{ padding: "15px 10px" }}>
                  WebDesign
                </NavLink>
              </a>
            </li>
            <li>
              <a>
                <NavLink to="/Mobile" style={{ padding: "15px 10px" }}>
                  Mobile
                </NavLink>
              </a>
            </li>
            <li>
              <a>
                <NavLink to="/Illustration" style={{ padding: "15px 10px" }}>
                  Illustration
                </NavLink>
              </a>
            </li>
          </ul>
          <Switch>
            <Route path="/WebDesign">
              <WebDesign />
            </Route>
            <Route path="/Mobile">
              <Mobile />
            </Route>
            <Route path="/Illustration">
              <Illustration />
            </Route>
            <Route path="/">
              <All />
            </Route>
          </Switch>
        </BrowserRouter>

        <div class="text-center">
          <a class="btn btn-gray" href="#" id="loadMore">
            Load More
          </a>
        </div>
      </div>
    );
  }
}
class WebDesign extends React.Component {
  render() {
    return (
      <div id="grid" class="row">
        <div
          class="col-lg-3 col-md-4 col-xs-6"
          style={{ display: "block" }}
          data-groups='["webdesign"]'
        >
          <div class="portfolio-item">
            <img src="portfolio-1.jpg" class="img-res" alt="" />
            <h4 class="portfolio-item-title">Portfolio item</h4>
            <a href="portfolio-item.html">
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

class Mobile extends React.Component {
  render() {
    return (
      <div id="grid" class="row">
        <div
          class="col-lg-3 col-md-4 col-xs-6"
          style={{ display: "block" }}
          data-groups='["mobileapp"]'
        >
          <div class="portfolio-item">
            <img src="portfolio-2.jpg" class="img-res" alt="" />
            <h4 class="portfolio-item-title">Portfolio item</h4>
            <a href="portfolio-item.html">
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

class Illustration extends React.Component {
  render() {
    return (
      <div id="grid" class="row">
        <div
          class="col-lg-3 col-md-4 col-xs-6"
          style={{ display: "block" }}
          data-groups='["illustration"]'
        >
          <div class="portfolio-item">
            <img src="portfolio-3.jpg" class="img-res" alt="" />
            <h4 class="portfolio-item-title">Portfolio item</h4>
            <a href="portfolio-item.html">
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
class All extends React.Component {
  render() {
    return (
      <div id="grid" class="row">
        <div
          class="col-lg-3 col-md-4 col-xs-6"
          style={{ display: "block" }}
          data-groups='["webdesign"]'
        >
          <div class="portfolio-item">
            <img src="portfolio-1.jpg" class="img-res" alt="" />
            <h4 class="portfolio-item-title">Portfolio item</h4>
            <a href="portfolio-item.html">
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-4 col-xs-6"
          style={{ display: "block" }}
          data-groups='["mobileapp"]'
        >
          <div class="portfolio-item">
            <img src="portfolio-2.jpg" class="img-res" alt="" />
            <h4 class="portfolio-item-title">Portfolio item</h4>
            <a href="portfolio-item.html">
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-4 col-xs-6"
          style={{ display: "block" }}
          data-groups='["illustration"]'
        >
          <div class="portfolio-item">
            <img src="portfolio-3.jpg" class="img-res" alt="" />
            <h4 class="portfolio-item-title">Portfolio item</h4>
            <a href="portfolio-item.html">
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
