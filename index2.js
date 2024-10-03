const express = require('express');
const fs = require('fs');
const { jsPDF } = require('jspdf');
const { createCanvas } = require('canvas');

const canvas = createCanvas(300, 300, "image");
const app = express();

app.get('/generate-pdf', (req, res) => {
    
    const contrato = 6;
    const recibo = "000000002";
    const s = '003';
    const r = '15';
    const folio = '1234567890';
    const nombre = 'Juan Perez';
    const calle = 'Calle la Palma No.24 Barrio de Santiago C.P-62730 Yautepec, Morelos';
    const colonia = 'Barrio de Santiago';
    const cp = '62730';
    const RFC = 'PEPJ000101HDFRRL09';
    const Giro = 'Servicios de Agua Potable y Alcantarillado';
    const servicio = 'Medido';
    const medidior = '1234567890';
    const lectura_anterior = '0000000001';
    const lectura_actual = '0000000002';
    const consumo = '1';
    const uso = 'Domestico H';
    const promedio = '1';
    const importe = [
        {
            concepto: "consumo",
            mes: 12.00,
            vencido: 3.00
        },
        {
            concepto: "drenaje",
            mes: 658.00,
            vencido: 32.00
        },
        {
            concepto: "cuota fija",
            mes: 234.00,
            vencido: 43.00
        }
    ];

    const imagePath = './assets/icono.jpg';
    const image = fs.readFileSync(imagePath);
    const doc = new jsPDF();
    const logo = image.toString('base64'); // Aquí debes poner la imagen en formato base64

    // console.log(ordenes.length);


    doc.addImage(logo, 'PNG', 10, 10, 30, 20);

    // Agregar título
    doc.setFontSize(18);
    doc.text('Sistema de Agua Potable y Sanamiento de Yautepec', 50, 10);


    doc.setFontSize(16);
    doc.text('SAPSY, Morelos', 100, 17);

    doc.setFontSize(10);
    doc.text('Calle la Palma No.24 Barrio de Santiago C.P-62730 Yautepec, Morelos', 65, 23);
    doc.text('Teléfono: (735) 15 56 224 Whatsapp: (735) 12 12 079', 80, 28);

    doc.setFontSize(14);
    doc.setFont("Helvetica", "");
    doc.text('RECIBO - NOTIFICACION', 75, 38);

    // Datos del usuario

    doc.setLineWidth(1);
    doc.setDrawColor('#5e5e5e');
    doc.line(5, 41, 205, 41);

    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Datos del usuario', 85, 48);

    doc.setLineWidth(1);
    doc.setDrawColor('#5e5e5e');
    doc.line(5, 51, 205, 51);

    doc.setFontSize(12);
    doc.setFont("Helvetica", "");
    doc.text('Contrato: ' + contrato, 15, 57);
    doc.setFontSize(12);
    doc.setFont("Helvetica", "");
    doc.text('Recibo: ' + recibo, 55, 57);
    doc.setFontSize(12);
    doc.setFont("Helvetica", "");
    doc.text('S: ' + s, 105, 57);
    doc.setFontSize(12);
    doc.setFont("Helvetica", "");
    doc.text('R: ' + r, 135, 57);
    doc.setFontSize(12);
    doc.setFont("Helvetica", "");
    doc.text('Folio: ' + folio, 165, 57);

    doc.setFontSize(12);
    doc.setFont("Helvetica", "");
    doc.text('Nombre: ' + nombre, 35, 67);
    doc.setFontSize(12);
    doc.setFont("Helvetica", "");
    doc.text('Calle: ' + calle, 35, 74);
    doc.setFontSize(12);
    doc.setFont("Helvetica", "");
    doc.text('Colonia: ' + colonia, 35, 81);

    doc.setFontSize(12);
    doc.setFont("Helvetica", "");
    doc.text('CP: ' + cp, 15, 90);
    doc.setFontSize(12);
    doc.setFont("Helvetica", "");
    doc.text('RFC: ' + RFC, 50, 90);
    doc.setFontSize(12);
    doc.setFont("Helvetica", "");
    doc.text('Giro: ' + Giro, 115, 90);

    // Informacion Comercial
    
    doc.setLineWidth(1);
    doc.setDrawColor('#5e5e5e');
    doc.line(5, 95, 205, 95);

    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Informacion Comercial', 85, 102);

    doc.setLineWidth(1);
    doc.setDrawColor('#5e5e5e');
    doc.line(5, 106, 205, 106);

    doc.setFontSize(12);
    doc.setFont("Helvetica", "");
    doc.text('Servicio: ' + servicio, 55, 113);
    doc.setFontSize(12);
    doc.setFont("Helvetica", "");
    doc.text('Uso: ' + uso, 125, 113);
    doc.setFontSize(12);
    doc.setFont("Helvetica", "");
    doc.text('Medidor: ' + medidior, 55, 120);
    doc.setFontSize(12);
    doc.setFont("Helvetica", "");
    doc.text('Promedio: ' + promedio, 125, 120);
    doc.setFontSize(12);
    doc.setFont("Helvetica", "");
    doc.text('LEC.ANT: ' + lectura_anterior, 55, 127);
    doc.setFontSize(12);
    doc.setFont("Helvetica", "");
    doc.text('LEC.ACT: ' + lectura_actual, 125, 127);
    doc.setFontSize(12);
    doc.setFont("Helvetica", "");
    doc.text('Consumo: ' + consumo, 100, 134);

    // Datos para la tabla

    doc.setLineWidth(1);
    doc.setDrawColor('#5e5e5e');
    doc.line(5, 139, 205, 139);

    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Importe facturado', 40, 146);
    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Ultimos pagos', 150, 146);

    doc.setLineWidth(1);
    doc.setDrawColor('#5e5e5e');
    doc.line(5, 150, 205, 150);
    
    doc.save('output2.pdf');
    res.send('PDF generado');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
