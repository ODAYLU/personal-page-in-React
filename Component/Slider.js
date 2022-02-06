
var ItemsSlider = [
    { img: "images/profile-1.jpeg", name: "Someone name", Pragh: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { img: "images/profile-2.jpeg", name: "Someone name", Pragh: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { img: "images/profile-3.jpeg", name: "Someone name", Pragh: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { img: "images/profile-4.jpeg", name: "Someone name", Pragh: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { img: "images/profile-5.jpeg", name: "Someone name", Pragh: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
];
class App6 extends React.Component {
    render() {
    let counter = 0;
        const lstItems = ItemsSlider.map((item) => {
            return (
                <div class={`card carousel-item ${++counter == 1 ? "active" : ""}`}>
                    <div class="box">
                        <img src={item.img} alt="" />
                        <div class="text">{item.name}</div>
                        <p>{item.Pragh}</p>
                    </div>
                </div>

            )
        })
        return (
            <section class="section-padding pb-0 bg-transparent" id="reviews">
                <div class="container">
                    <div class="row">

                        <div class="col-12">
                            <h2 class="text-center mb-lg-5 mb-4">Our Patients</h2>
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    {lstItems}
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon btn btn-dark rounded-circle" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon btn btn-dark rounded-circle" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


function CardData() {
    const rtn = [{
        title: "CARNATIONS",
        desc: "Carnations require well-drained, neutral to slightly alkaline soil, and full sun. Numerous cultivars have been selected for garden planting.[4] Typical examples include 'Gina Porto', 'Helen', 'Laced Romeo', and 'Red Rocket'.",
        url: "images/profile-1.jpeg"
      }, {
        title: "STREET",
        desc: "A street is a public thoroughfare (usually paved) in a built environment.",
        url: "images/profile-2.jpeg"
      }, {
        title: "CAMERA",
        desc: "Camera captures memories for you and saves them permanently.",
        url: "images/profile-3.jpeg",
        title: "BREAKFAST",
        desc: "Breakfast provides many benefits to our health and wellbeing.",
        url: "images/profile-4.jpeg"
      }]
    return rtn;
  }
  
  class Cards extends React.Component {
    render() {
      const cardData = CardData();
      return (
        <section>
        {
          cardData.map((card, i) => {
            return (
              <div className="card" id="card" style={this.props.cardStyle} key={i}>
                <p className="title">{card.title}</p>
                <p className="desc">{card.desc}</p>
                <a href="#"><img src={card.url} /></a>
              </div>
            )
          })
        }
        </section>
      )
    }
  }
  
  const Card = (props) => (
    <div className="card">
      <img src={ props.imgUrl } 
        alt={ props.alt || 'Image' } />
      <div className="card-content">
        <h2>{ props.title }</h2>
        <p>{ props.content }</p>
      </div>
    </div>
  );
  
  const CardContainer = (props) => (
    <div className="cards-container">
      {
        props.cards.map((card) => (
          <Card title={ card.title }
            content={ card.content }
            imgUrl={ card.imgUrl } />
        ))
      }
    </div>
  );
  
  class App extends React.Component {
    render () {
      const cardsData = [
        {id: 1, title: 'Someone name', content: 'Clark Kent', imgUrl: 'images/profile-1.jpeg'},
        {id: 2, title: 'Someone name', content: 'Bruce Wayne', imgUrl: 'images/profile-2.jpeg'},
        {id: 3, title: 'Someone name', content: 'Peter Parker', imgUrl: 'images/profile-3.jpeg'},
        {id: 4, title: 'Someone name', content: 'Tony Stark', imgUrl: 'images/profile-4.jpeg'},
        {id: 5, title: 'Someone name', content: 'Reed Richards', imgUrl: 'images/profile-5.jpeg'},
        {id: 6, title: 'Someone name', content: 'Wade Wilson', imgUrl: 'images/profile-1.jpeg'},
        {id: 7, title: 'Someone name', content: 'Peter Quill', imgUrl: 'images/profile-2.jpeg'},
        {id: 8, title: 'Someone name', content: 'Steven Rogers', imgUrl: 'images/profile-3.jpeg'},
        {id: 9, title: 'Someone name', content: 'Bruce Banner', imgUrl: 'images/profile-4.jpeg'},
        {id: 10, title: 'Someone name', content: 'Vincent Strange', imgUrl: 'images/profile-5.jpeg'},
      ]
      
      return(
        <div className="container">
          <h1 style={{ 'text-align': 'center' }}>
            My Team 
          </h1>
          
          <CardContainer cards={ cardsData } />
        </div>
      );
    }
  }
  
  ReactDOM.render(<App/>, document.querySelector('#app'));
  
  


