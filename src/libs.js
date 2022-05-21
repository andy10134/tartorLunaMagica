import horoscopos from './horoscopo.json';

export default function getSign(fecha) {
    let aux,dia,mes;

    aux = fecha.split("-");

    dia = parseInt(aux[2]);
    mes = parseInt(aux[1]); 

    if((dia>=21&&mes===3)||(dia<=20&&mes===4))
        aux = 'aries';
    if((dia>=24&&mes===9)||(dia<=23&&mes===10))
        aux = 'libra';
    if((dia>=21&&mes===4)||(dia<=21&&mes===5))
        aux = 'taurus';
    if((dia>=24&&mes===10)||(dia<=22&&mes===11))
        aux = 'scorpio';
    if((dia>=22&&mes===5)||(dia<=21&&mes===6))
        aux = 'gemini';
    if((dia>=23&&mes===11)||(dia<=21&&mes===12))
        aux = 'sagittarius';
    if((dia>=21&&mes===6)||(dia<=23&&mes===7))
        aux = 'cancer';
    if((dia>=22&&mes===12)||(dia<=20&&mes===1))
        aux = 'capricorn';
    if((dia>=24&&mes===7)||(dia<=23&&mes===8))
        aux = 'leo';
    if((dia>=21&&mes===1)||(dia<=19&&mes===2))
        aux = 'aquarius';
    if((dia>=24&&mes===8)||(dia<=23&&mes===9))
        aux = 'virgo';
    if((dia>=20&&mes===2)||(dia<=20&&mes===3))
        aux = 'pisces';
  
    let response = {
        signo: aux,
        horoscopo: horoscopos[aux]
    }
    return response;
}
