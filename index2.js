const express = require('express');
const fs = require('fs');
const { jsPDF } = require('jspdf');
const { createCanvas } = require('canvas');

const canvas = createCanvas(300, 300, "image");
const app = express();

app.get('/generate-pdf', (req, res) => {

    const Fecha = new Date();
    const FechaActual = Fecha.getDate() + "/" + (Fecha.getMonth() + 1) + "/" + Fecha.getFullYear();
    const constrato = "000000002";
    const s = '003';
    const r = '15';
    const folio = '1234567890';
    const med = '123456';
    const nombre = 'Juan Perez';
    const calle = 'Calle la Palma No.24';
    const colonia = 'Barrio de Santiago';
    const lectura= '123456';
    const num_Orden = '123456';

    const imagePath = './assets/icono.jpg';
    const image = fs.readFileSync(imagePath);
    const logo = image.toString('base64');

    const doc = new jsPDF();

    doc.addImage(logo, 'PNG', 15, 10, 20, 20);

    doc.setLineWidth(3);
    doc.setDrawColor('#800040');
    doc.line(130, 1, 130, 35);
    doc.setFontSize(20);
    doc.setFont("Helvetica", "");
    doc.text('Orden de Trabajo', 133, 10);
    doc.setFontSize(20);
    doc.setFont("Helvetica", "");
    doc.text('Depto. Rezago', 133, 20);
    doc.setFontSize(20);
    doc.setFont("Helvetica", "");
    doc.text('Limitacion de Servicio', 133, 30);

    doc.setFontSize(14);
    doc.setFont("Helvetica", "");
    doc.text('Fecha: '+ FechaActual, 15, 40);

    doc.setFontSize(14);
    doc.setFont("Helvetica", "");
    doc.text('Contrato: '+ constrato, 15, 50);
    doc.text('S: '+ s, 65, 50);
    doc.text('R: '+ r, 85, 50);
    doc.text('F: '+ folio, 105, 50);
    doc.text('Med: '+ med, 145, 50);

    doc.setFontSize(14);
    doc.setFont("Helvetica", "");
    doc.text('Nombre: '+ nombre, 15, 60);

    doc.setFontSize(14);
    doc.setFont("Helvetica", "");
    doc.text('Direccion: '+ calle+ ', ' + colonia, 15, 70);

    doc.setFontSize(14);    
    doc.setFont("Helvetica", "");
    doc.text('Fecha: ', 15, 80);
    doc.setLineWidth(0.5);
    doc.setDrawColor('#000000');
    doc.line(32, 80, 57, 80);
    doc.text('Lectura: ', 65, 80);
    doc.setLineWidth(0.5);
    doc.setDrawColor('#000000');
    doc.line(84, 80, 115, 80);



    doc.save('./templates/output3.pdf');
    res.send('PDF generado');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});