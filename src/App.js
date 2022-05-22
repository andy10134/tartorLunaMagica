import React, { useCallback, useState, useEffect } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css';
import Burger from './components/Burger';
import Info from './components/Info';
import Menu from './components/Menu';
import TarotForm from './components/TarotForm';
import particlesOptions from "./particles.json";

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    
    const [datos, setDatos] = useState({
        fullname: '',
        dateOfBirth: '',
        gender: ''
    })
    
    const [open, setOpen] = useState(false);
    const [consultado, setConsultado ] = useState('');
    const [horoscopo, setHoroscopo ] = useState('');
    const [cartas, setCartas ] = useState(null);

    useEffect(() => {
        if(consultado !== '' ){
            fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3")
            .then(response => response.json())
            .then(response => {
                setCartas(response.cards)
            });
        }
    }, [consultado]);
    

    let styles = {'overflowY': 'hidden'}

    if(open && consultado){
        styles = {'overflowY': 'scroll'}
    }

    return (
        <div className="App" id="divToPrint">
            <div className="container-fluid">
                <div className="hero" style={styles}>
                    <Burger open={open} setOpen={setOpen}></Burger>
                    <Menu open={open} setOpen={setOpen} consultado={consultado} cartas={cartas}>
                        <TarotForm setConsultado={setConsultado} setHoroscopo={setHoroscopo} datos={datos} setDatos={setDatos}></TarotForm>
                    </Menu>
                    <Info open={open} consultado={consultado} horoscopo={horoscopo} datos={datos}></Info>
                    <Particles options={particlesOptions} init={particlesInit}>
                    </Particles>
                </div>
            </div>
        </div>
    );
}

export default App;
