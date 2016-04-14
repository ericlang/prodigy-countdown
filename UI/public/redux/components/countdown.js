
class Countdown extends  React.Component{

    constructor(props){
        super(props);
        this.getCountdown().then(function(json){
            this.state = json;
            alert(this.state);
        })

    }

    componentDidMount() {
        setInterval(this.tickCountdown, 1000);
    }

    tickCountdown() {
        var countdown = this.getCountdown();
        alert(countdown);
        this.state = countdown;
    }

    getCountdown() {
       return new Promise(function(resolve, reject) {
           $.get("/countdown", function (result) {
               var json = JSON.stringify(result);

               resolve(json);
           });

        });

    }
    render() {
        return <h1>Hola {this.state}</h1>;
    }
}


ReactDOM.render(<Countdown />,   document.getElementById('example'));