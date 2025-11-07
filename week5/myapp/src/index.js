import GreetingElement from './myGreetingApp';
import AppColor from './AddbackgroundColor';
import GreetingElementwithProp from './mygreetingprop';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<GreetingElementwithProp msg="Hi its Monday"/>
<GreetingElementwithProp msg="Morning its Tuesday"/>
<GreetingElementwithProp msg="Good Morning its Wednesday"/>
<GreetingElementwithProp msg="Namaste its Thursday"/>
<GreetingElementwithProp msg="Tashi Dhelek its Friday"/>
<GreetingElementwithProp msg="Hello its Saturday"/>
<GreetingElementwithProp msg="Hey its Sunday"/>

<AppColor heading="This is first element" lbl="Name :"color="green"/>
<AppColor heading="This is second element" lbl="Name :"color="blue"/>
<AppColor heading="This is third third element" lbl="Name :"color="Yellow"/> 


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
