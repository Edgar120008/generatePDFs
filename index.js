const express = require('express');
const fs = require('fs');
const { jsPDF } = require('jspdf');
require('jspdf-autotable');

const app = express();

app.get('/generate-pdf', (req, res) => {
    const imagePath = './icono.jpg';
    const image = fs.readFileSync(imagePath);
    const doc = new jsPDF();
    const logo = image.toString('base64'); // Aquí debes poner la imagen en formato base64


    doc.addImage(logo, 'PNG', 10, 10, 30, 20);

    // Agregar título
    doc.setFontSize(18);
    doc.text('Sistema de Agua Potable y Sanamiento de Yautepec', 50, 10);

    doc.setFontSize(16);
    doc.text('SAPSY, Morelos', 100, 20);

    doc.setFontSize(12);
    doc.text('Calle la Palma No.24 Barrio de Santiago C.P-62730 Yautepec, Morelos', 55, 30);
    doc.text('Teléfono: (735) 15 56 224 Whatsapp: (735) 12 12 079', 70, 40);
    

    // Datos para la tabla
    const tableData = [
        ['Cliente:', 'Nombre del Cliente'],
        ['Dirección:', 'Dirección del Cliente'],
        ['Teléfono:', 'Teléfono del Cliente'],
        ['Información de Pago:', ''],
        ['Fecha:', '01/01/2024'],
        ['Monto:', '$100.00'],
        ['Método de Pago:', 'Tarjeta de Crédito']
    ];

    // Agregar tabla
    doc.autoTable({
        startY: 50,
        head: [['Descripción', 'Detalles']],
        body: tableData,
    });

    doc.save('output.pdf');
    res.send('PDF generado');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
