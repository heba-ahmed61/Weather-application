import React from 'react'
import './Weather.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';





const Weather = (props) =>{

    return(
        <React.Fragment>
        {  props.tempreature &&
            <div className="today">
            <div className="day">
                <p>Today</p>
                </div>
                <div className="temp">
                <span>{props.tempreature}</span>
                <span className="details">c</span>
                </div>
                <div className="dsecription">
                <p>{props.description}</p>
                </div>


            </div>
        }
        {
            props.error && <div>

            <p className="error-message">{props.error}</p>
            
            </div>
        }

    {
            props.description && 
            <OwlCarousel

            items={1}
            dots={false}
            loop={true}
            nav={false}
            autoplay={true}
            autoplayTimeout={1000}

            
            >


                <div className="item">
                <div className="item-icon ">
                <i class="fas fa-sun"></i>  </div>

                <div className="info">
                <p>Sunrise</p>
                <p>{props.sunrise}</p>
                </div>
                </div>

                <div className="item">
                <div className="item-icon ">
                <i class="fas fa-wind"></i>                </div>

                <div className="info">
                <p>WindSpeed </p>
                <p>{props.wind}</p>
                </div>
                </div>




                <div className="item">
                <div className="item-icon ">
                <i class="fas fa-temperature-low "></i>
                </div>

                <div className="info">
                <p>Min-Temp </p>
                <p>{props.minTemp}</p>
                </div>
                </div>

                <div className="item">
                <div className="item-icon ">
                <i class="fas fa-temperature-high"></i>
                </div>

                <div className="info">
                <p>Max-Temp </p>
                <p>{props.maxTemp}</p>
                </div>
                </div>



                


                
            

            

                



                



            </OwlCarousel>
        }










    
                
                            

                        
                            
                            
                            

                
                        

                        





























        
        


            
        </React.Fragment>
    )
        
}
export default Weather;