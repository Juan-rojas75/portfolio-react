// AnotherComponent.js
import React, { Component } from 'react';
import Navbar from '../../components/navbar.jsx';

export default class PageHome extends Component {
  handleFirstButtonClick = () => {
    alert('Primera acción ejecutada!');
  };
  
  render() {
    return (
      <div className=''>
        <section className='flex justify-center gap-40'>
            <img width="500px" src="https://img.freepik.com/foto-gratis/hombre-sonriendo-brazos-cruzados_1187-2903.jpg?t=st=1718837779~exp=1718841379~hmac=149eb947ee666f62dac97fa276c57a42b0fa0365cdfc60d00f1238aac345e6ed&w=360" alt="" />
            <div className='absolute md:relative md:flex md:flex-col md:gap-2'>
                <span className='font-rubik text-red-500 font-semibold text-lg'>Hi there, i'm</span>
                <span className='font-rubik font-bold text-2xl'>Juan Rojas</span>
            </div>
        </section>
      </div>
    );
  }
}