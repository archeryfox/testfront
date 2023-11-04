import './App.css';
import {Component} from "react";
let baseUrl = process.env.REACT_APP_BASE_URL_API
alert(baseUrl)
class App extends Component {
    constructor() {
        super();
        this.state = {
            mydata: []
        }
        fetch(baseUrl + "WeatherForecast")
            .then(response => response.json())
            .then((data) => {
                this.setState({mydata: data})
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                {
                    this.state.mydata.map(el => {
                        return (
                            <div style={{
                                margin: 3 + 'em',
                                border: `solid navy`,
                                padding: 1 + 'em'
                            }}>{el.date}<br/>
                                {el.temperatureC}
                                <br/>{el.summary}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default App;
