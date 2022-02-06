class App2 extends React.Component{
    HandelClick = () => {
        alert("Hello");
    }
    render(){
        return(
            <div>
           
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">Hello, my name is</div>
                <div class="text-2">Prakash Shahi</div>
                <div class="text-3">And I'm a <span class="typing"></span></div>
                <a onClick = {this.HandelClick}>Hire me</a>
            </div>
        </div>
   
            </div>
        );
    }
}