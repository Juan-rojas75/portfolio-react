// AnotherComponent.js
import React, { Component } from 'react';
import ProjectCard from '../../components/card';

export default class PageProject extends Component {
  handleFirstButtonClick = () => {
    alert('Primera acción ejecutada!');
  };
  
  render() {
    return (
      <div className=''>
        <section className='flex flex-col items-center justify-center gap-2'>
            <div className='flex flex-col md:relative md:flex md:flex-col md:gap-2 border border-red-100'>
                <span className="font-rubik font-bold text-4xl">
                    What have I created?
                </span>
                <div className='flex flex-row flex-wrap gap-20 justify-center m-10'>
                <ProjectCard
                    title="Mi Proyecto Genial"
                    description="Este es un proyecto increíble que he estado desarrollando."
                    isDeployed={true}
                    deployedUrl="https://miproyectogenial.com"
                    repoUrl="https://github.com/miusuario/miproyectogenial"
                  />
                    <div className='border border-pink-400 rounded-md py-2 px-8'>
                        <span className='font-rubik font-bold text-lg'>TITULO 1</span>
                        <p className='font-rubik text-base'>DESCRIPCION</p>
                    </div>
                    <div className='border border-pink-400 rounded-md py-2 px-8'>
                        <span className='font-rubik font-bold text-lg'>TITULO 1</span>
                        <p className='font-rubik text-base'>DESCRIPCION</p>
                    </div>
                    <div className='border border-pink-400 rounded-md py-2 px-8'>
                        <span className='font-rubik font-bold text-lg'>TITULO 1</span>
                        <p className='font-rubik text-base'>DESCRIPCION</p>
                    </div>
                    <div className='border border-pink-400 rounded-md py-2 px-8'>
                        <span className='font-rubik font-bold text-lg'>TITULO 1</span>
                        <p className='font-rubik text-base'>DESCRIPCION</p>
                    </div>
                </div>
            </div>
            <img width="500px" src={process.env.PUBLIC_URL + "/fotos/Hacia arriba.png"} alt="" />
        </section>
      </div>
    );
  }
}