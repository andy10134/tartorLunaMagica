import React, {Component} from 'react';
import html2canvas from 'html2canvas';

// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';

export default class Export extends Component {

  printDocument() {
    let aux = document.getElementById('download-button');
    let aux2 = aux.style.display;
    aux.style.display = "none";
    const input = document.getElementById('divToPrint');
    aux.style.display = aux2;
    html2canvas(input)
    .then((canvas) => {
        var a = document.createElement('a');
        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = 'Consulta.jpg';
        
        a.click();
      });
    ;
  }

  render() {
    return (<div>
      <button id="download-button" className="btn btn-consultar col-5"  onClick={this.printDocument}>
              Descargar Consulta
    </button>
    </div>);
  }
}