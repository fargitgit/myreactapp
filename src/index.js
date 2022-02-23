import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import TodoList  from './TodoList';
// import IncreDecre  from './IncreDecre';
// import MaterialUI from './MaterialUI';
// import Form from "./Form";
// import Counter from './Counter';
// import App from './App';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

// import TodoList from './Todo/TodoList';
// import Accordian  from './Accordian/Accordian';
// import Accordian from './SimpleAccordian/Accordian';
// import Test from './Test';
// import GoogleKeep from './GoogleKeep/GoogleKeep';
// import Main from './Useconext/Main';

// import UseEffect from './UseEffect/UseEffect';
// import CovidData from './CovidData/CovidData';
// import Pokemon from './Pokemon/Pokemon';

import RouterApp from './Router/RouterApp';
import {BrowserRouter} from 'react-router-dom';
ReactDOM.render(
  <>
    {/* <div className="owl_container">
        <OwlCarousel className='owl-theme' loop margin={10} items={6} autoplay autoplayTimeout={2000} >
            <App/>
        </OwlCarousel>
    </div> */}
    {/* <Counter /> */}
    {/* <Form /> */}
    {/* <TodoList /> */}
    {/* <IncreDecre /> */}
    {/* <TodoList /> */}
    {/* <Accordian /> */}
    {/* <Test /> */}
    {/* <GoogleKeep /> */}
    {/* <Main /> */}
    {/* <UseEffect /> */}
    {/* <CovidData /> */} 
    {/* <Pokemon /> */}
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  </>
  , document.getElementById('root')
)