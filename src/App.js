import React, { useCallback, useState } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css';
import Burger from './components/Burger';
import Info from './components/Info';
import Menu from './components/Menu';
import particlesOptions from "./particles.json";

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    const [open, setOpen] = useState(false);
    const [consultado, setConsultado ] = useState(false);
      
    let styles = {'overflowY': 'hidden'}

    if(open){
        styles = {'overflowY': 'scroll'}
    }

    return (
        <div className="App">
            <div className="container-fluid">
                <div className="hero" style={styles}>
                    <Burger open={open} setOpen={setOpen}></Burger>
                    <Menu open={open} setOpen={setOpen} consultado={consultado} setConsultado={setConsultado}></Menu>
                    <Info open={open} consultado={consultado}></Info>
                    <Particles options={particlesOptions} init={particlesInit}>
                    </Particles>
                </div>
            </div>
        </div>
    );
}

export default App;
