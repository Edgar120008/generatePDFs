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

    const imagePath = './assets/icono.jpg';
    const image = fs.readFileSync(imagePath);
    const logo = image.toString('base64');

    const doc = new jsPDF();

    doc.addImage(logo, 'PNG', 15, 10, 20, 20);

    doc.setFontSize(18);
    doc.text('Sistema de Agua Potable y Sanamiento de Yautepec', 50, 10);
    
    doc.setFontSize(16);
    doc.text('SAPSY, Morelos', 100, 17);
    
    doc.setFontSize(10);
    doc.text('Calle la Palma No.24 Barrio de Santiago C.P-62730 Yautepec, Morelos', 65, 23);
    doc.text('Teléfono: (735) 15 56 224 Whatsapp: (735) 12 12 079', 80, 28);
    
    doc.setLineWidth(2);
    doc.setDrawColor('#5e5e5e');
    doc.line(25, 0, 4, 2);


    doc.save('./templates/output3.pdf');
    res.send('PDF generado');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});