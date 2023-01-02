import * as React from 'react';

export function Home() {

    return (
        <div className="flex">
        
            <div className="flex flex-col h-screen w-3/4 bg-center  bg-cover justify-center items-center" style={{ backgroundImage: 'url(monopoly.jpg)' }}></div>

            <div className="flex justify-center items-center" >
                <h1 className="text-red-500 absolute right-0 mr-12 mb-60 font-bold " >Entrar na Sala</h1>

                <input className="border-black border-2 py-2 px-4 rounded absolute right-0 mr-12 mb-32" type="text" placeholder="Código"/>

                <button className="bg-red-500 border-black border-2 text-white font-bold py-2 px-4 rounded absolute right-0 mr-12">
                    Criar sala
                </button>
            </div>


        
        </div>
    )
  
}
