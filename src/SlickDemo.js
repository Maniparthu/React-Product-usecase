import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick"; 
import React, { Component } from 'react'   
export class SlickDemo extends Component {  
    render() {  
        var settings = {  
          dots: true,  
          infinite: true,  
          speed: 500,  
          centerMode: true,  
          slidesToShow: 1,  
          slidesToScroll: 1  
          };  

          const wdt={  
            width: '37%'  
        }  
        const img = 
        {  
            height: '300px'  ,
            width:'1500px'
        }  
          return (  
            <div>  
            <div class='container' >        
            <div className="row title" style={{marginBottom: "20px"}} >        
            <div class="col-sm-12 btn btn-info">        
            Slick Carousel In React Application     
            </div>        
            </div>    
            </div>  
            <Slider {...settings} >  
              <div style={wdt}>  
              <img  style={img} src={"./images/iphone.jpeg"}  alt="imagenotfound"/>  
              </div>  
              <div style={wdt}>  
              <img style={{"height":"40px"}}   src={"./images/iphone.jpeg"}   alt="imagenotfound"/>  
              </div>  
              <div style={wdt}>  
              <img  style={img}  src={"./images/iphone.jpeg"}   alt="imagenotfound" />  
              </div>  
              <div style={wdt}>  
              <img  style={img}  src={"public/images/iphone.jpeg"}   alt="imagenotfound"/>  
              </div >  
              <div style={wdt}>  
              <img  style={img}  src={"public/images/iphone.jpeg"}   alt="imagenotfound"/>  
              </div>  
              <div style={wdt}>  
              <img  style={img}  src={"public/images/iphone.jpeg"}   alt="imagenotfound" />  
              </div>  
            </Slider>  
            </div>  
          );  
        }  
      }  
  
export default SlickDemo 