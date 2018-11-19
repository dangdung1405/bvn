import React, { Component } from 'react';
import './App.css';

class App extends React.Component {

   render() {
      return (


         <div className="product">

            <div className="all">
               <div className="screen">
                  <div className="left">
                     <div className="top" ><img alt='' src="group-5@3x.png" /></div>
                     <div className="bot">
                        <div className="content">Unsupported Browser on Mobile</div>
                        <div className="text">We do not support OpenMarkets Equix on Mobile browser at the moment. Please download our OpenMarkets Equix Mobile App on  Google play or App store</div>
                        <div className="content">Mobile App Now Available</div>
                        <div className="lsbutton">
                           <a href="#"><button className="button"><img alt='' src="1@3x.png"></img></button></a>
                           <a href="#"><button className="button"><img alt='' src="2@3x.png"></img></button></a>
                        </div>
                     </div>
                  </div>
                  <div className="right">
                     <div className="anh"><img alt='' src="group-6@3x.png"></img></div>
                  </div>

               </div>
               <div className="triangle-bottomright"></div>
            </div>


         </div>

      );
   }
}

export default App;
