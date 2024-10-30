const express = require('express');
const fs = require('fs');
const { jsPDF } = require('jspdf');
const { createCanvas } = require('canvas');

const canvas = createCanvas(300, 300, "image");
const app = express();

app.get('/generate-pdf', (req, res) => {

    const Fecha = new Date();
    const FechaActual = Fecha.getDate() + "/" + (Fecha.getMonth() + 1) + "/" + Fecha.getFullYear();
    const dia = Fecha.getDate();
    const nombresDeMeses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    const mes = nombresDeMeses[Fecha.getMonth()];
    const anio = Fecha.getFullYear();
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
    doc.setDrawColor('#000000');
    doc.line(5, 32, 205, 32);

    ///////////////////////////////////////////////////////////////

    doc.setFontSize(11);
    doc.text('Solicitud Contrato', 130, 38);
    doc.text('Padron No.', 130, 45);
    
    doc.setLineWidth(0.2);
    doc.setDrawColor('#000000');
    doc.line(163, 38, 205, 38);
    doc.setLineWidth(0.2);
    doc.setDrawColor('#000000');
    doc.line(150, 45, 205, 45);

    doc.setFontSize(11);
    doc.text('AL C.   C.ALEJANDRO RODRIGUEZ SALGADO', 15, 55);

    doc.setLineWidth(0.2);
    doc.setDrawColor('#000000');
    doc.line(27, 56, 105, 56);

    doc.setFontSize(11);
    doc.text('PRESENTE', 15, 65);

    doc.setLineWidth(0.2);
    doc.setDrawColor('#000000');
    doc.line(15, 75, 150, 75);

    doc.setFontSize(11);
    doc.text('señalado como domicilio', 155, 75);
    
    doc.setLineWidth(0.2);
    doc.setDrawColor('#000000');
    doc.line(15, 85, 100, 85);
    
    doc.setFontSize(11);
    doc.text('de la colonia', 105, 85);
    
    doc.setLineWidth(0.2);
    doc.setDrawColor('#000000');
    doc.line(130, 85, 200, 85);

    doc.setFontSize(11);
    doc.text('entre las calles de ', 15, 95);

    doc.setLineWidth(0.2);
    doc.setDrawColor('#000000');
    doc.line(50, 95, 200, 95);
    
    doc.setFontSize(11);
    doc.text('y las de ', 15, 105);
    
    doc.setLineWidth(0.2);
    doc.setDrawColor('#000000');
    doc.line(30, 105, 200, 105);
    
    doc.setFontSize(11);
    doc.text('de esta ciudad, atentamente solicito a usted, se sirva acordar que se me conecte el servicio de', 15, 115);

    doc.setLineWidth(0.2);
    doc.setDrawColor('#000000');
    doc.line(15, 125, 100, 125);
    
    doc.setFontSize(11);
    doc.text('para uso ', 105, 125);
    
    doc.setLineWidth(0.2);
    doc.setDrawColor('#000000');
    doc.line(125, 125, 200, 125);

    doc.setFontSize(11);
    doc.text('con un diametro de ', 15, 135);

    doc.setLineWidth(0.2);
    doc.setDrawColor('#000000');
    doc.line(50, 135, 80, 135);

    doc.setFontSize(11);
    doc.text('La conexion es en', 85, 135);

    doc.setLineWidth(0.2);
    doc.setDrawColor('#000000');
    doc.line(120, 135, 200, 135);

    doc.setFontSize(11);
    doc.text('Al suscribir la presente solicitud, me obligo a cubrir el importe de los materiales y los gastos ineherentes para', 15, 145);
    doc.text('la instalacion asi como los correspondientes derechos de conexion.', 15, 155);

    doc.setFontSize(11);
    doc.text('A la vez me obligo a liquidar oportunamente ante esta oficina la cuota mensual que se asigne conforme a la', 15, 165);
    doc.text('calificacion en que quede incluido el servicio que se me concede de acuerdo con las tarifas en vigor, asi como', 15, 175);
    doc.text('las que en lo futuro se llegaran a expedir.', 15, 185);

    doc.setLineWidth(0.5);
    doc.setDrawColor('#000000');
    doc.line(120, 195, 130, 195);
    doc.setLineWidth(0.5);
    doc.setDrawColor('#000000');
    doc.line(130, 195, 130, 185);
    
    doc.setLineWidth(0.5);
    doc.setDrawColor('#000000');
    doc.line(140, 195, 140, 185);
    doc.setLineWidth(0.5);
    doc.setDrawColor('#000000');
    doc.line(140, 195, 170, 195)
    doc.setLineWidth(0.5);
    doc.setDrawColor('#000000');
    doc.line(170, 195, 170, 185);
    
    doc.setLineWidth(0.5);
    doc.setDrawColor('#000000');
    doc.line(180, 195, 190, 195);
    doc.setLineWidth(0.5);
    doc.setDrawColor('#000000');
    doc.line(180, 195, 180, 185);

    doc.setFontSize(11);
    doc.text('Croquis de la Instalacion', 60, 205);

    doc.setLineWidth(0.5);
    doc.setDrawColor('#000000');
    doc.line(120, 210, 130, 210);
    doc.setLineWidth(0.5);
    doc.setDrawColor('#000000');
    doc.line(130, 210, 130, 220);

    doc.setLineWidth(0.5);
    doc.setDrawColor('#000000');
    doc.line(140, 210, 140, 220);
    doc.setLineWidth(0.5);
    doc.setDrawColor('#000000');
    doc.line(140, 210, 170, 210)
    doc.setLineWidth(0.5);
    doc.setDrawColor('#000000');
    doc.line(170, 210, 170, 220);

    doc.setLineWidth(0.5);
    doc.setDrawColor('#000000');
    doc.line(180, 210, 190, 210);
    doc.setLineWidth(0.5);
    doc.setDrawColor('#000000');
    doc.line(180, 210, 180, 220);

    doc.setFontSize(11);
    doc.text('Yautepec, Morelos', 55, 230);
    doc.text('a', 90, 230);
    doc.text('' + dia, 95, 230);
    doc.text('de', 105, 230);
    doc.text('' + mes, 115, 230);
    doc.text('del', 135, 230);
    doc.text('' + anio, 145, 230);
    doc.setLineWidth(0.2);
    doc.setDrawColor('#000000');
    doc.line(53, 232, 88, 232);
    doc.setLineWidth(0.2);
    doc.setDrawColor('#000000');
    doc.line(95, 232, 100, 232);
    doc.setLineWidth(0.2);
    doc.setDrawColor('#000000');
    doc.line(113, 232, 130, 232);
    doc.setLineWidth(0.2);
    doc.setDrawColor('#000000');
    doc.line(145, 232, 155, 232);

    doc.setFontSize(11);
    doc.text('Atentamente', 100, 240);
    doc.setLineWidth(0.2);
    doc.setDrawColor('#000000');
    doc.line(70, 250, 155, 250);
    doc.setFontSize(11);
    doc.text('Firma del Solicitante Propietario', 85, 255);
    
    doc.setFontSize(11);
    doc.text('AUTORIZO', 40, 260);
    doc.setLineWidth(0.2);
    doc.setDrawColor('#000000');
    doc.line(30, 265, 70, 265);
    doc.setFontSize(11);
    doc.text('ELABORO', 150, 260);
    doc.setLineWidth(0.2);
    doc.setDrawColor('#000000');
    doc.line(140, 265, 180, 265);
    
    doc.setFontSize(11);
    doc.text('Fecha de Conexion', 15, 275);
    doc.setLineWidth(0.2);
    doc.setDrawColor('#000000');
    doc.line(50, 275, 180, 275);

    doc.setFontSize(9);
    doc.text('Impresion: ' + FechaActual, 15, 285);
    
    doc.save('./templates/output3.pdf');
    res.send('PDF generado');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});