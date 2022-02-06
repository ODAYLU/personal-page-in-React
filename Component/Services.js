var Items = [
    { icon: "fas fa-paint-brush", name: "Web Design", Pragh: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim." },
    { icon: "fas fa-chart-line", name: "Advertising", Pragh: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim." },
    { icon: "fas fa-code", name: "Apps Design", Pragh: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim." },
];
class App4 extends React.Component {
   
    render() {
        const lstItems = Items.map((item) => {
            return (
                <div className="card">
                    <div className="box">
                        <i class={item.icon}></i>
                        <div class="text">{item.name}</div>
                        <p>{item.Pragh}</p>
                    </div>
                </div>

            )
        }
        )
        return (
            <div class="serv-content">
                {lstItems}
            </div>
        );
    }
}

{/* <div class="serv-content">
    <div class="card">
        <div class="box">
            
            <div class="text">Web Design</div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
        </div>
    </div>
    <div class="card">
        <div class="box">
            
            <div class="text">Advertising</div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
        </div>
    </div>
    <div class="card">
        <div class="box">
            <i class="fas fa-code"></i>
            <div class="text">Apps Design</div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
        </div>
    </div>
</div> */}