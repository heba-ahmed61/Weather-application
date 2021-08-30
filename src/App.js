import React , {Component} from 'react'
import './App.css';import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';
import './App.css';





const API_KEY ="0da11ebac1bcfce50ac5ee125a9c70e1"
class App extends Component{


  constructor(props){
    super(props);
    this.state={

      tempreature:'',
      description:'',
      wind:'',
      sunrise:'',
      minTemp:'',
      maxTemp:'',
      error:''

    }
  }


  /* getweather function starts*/

  getWeather = async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY }`)
    const data = await api.json();
    console.log(data);
    if(city && country){

      this.setState({

        tempreature:data.main.temp,
        description:data.weather[0].description,
        wind:data.wind.speed,
        sunrise:data.sys.sunrise,
        minTemp:data.main.temp_min,
        maxTemp:data.main.temp_max,
        error:''
  
  
      })

    } else{

      this.setState({

        tempreature:'',
        description:'',
        wind:'',
        sunrise:'',
        minTemp:'',
        maxTemp:'',
        error:'Enter City And Country'


      })
    }
    

    
  }

    /* getweather function ends*/



  render(){

    return(
      <div className="app">
      <div className="layout"></div>
      <Form getWeather={this.getWeather}/>
      <Weather
      tempreature={this.state.tempreature}
      description={this.state.description}
      sunrise={this.state.sunrise}
      wind={this.state.wind}
      error={this.state.error}
      minTemp={this.state.minTemp}
      maxTemp={this.state.maxTemp}
      cloudsSpeed={this.state.cloudsSpeed}

      
      />




    


      </div>
    )
  }
}


export default App;
