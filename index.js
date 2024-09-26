const express = require('express');
const fs = require('fs');
const { jsPDF } = require('jspdf');
const { createCanvas } = require('canvas');

const canvas = createCanvas(300, 300, "image");
const app = express();

app.get('/generate-pdf', (req, res) => {
    
    const fecha = '2021-09-01';
    const nombre = 'Juan Perez';
    const telefono = '7351234567';
    const folio = '1234567890';
    const ordenes = [
        {
            id_orden: "1",
            total_orden: 1000,
            comision_pago: 10
        },
            {
            id_orden: "2",
            total_orden: 2000,
            comision_pago: 5
        },
    ];

    const imagePath = './icono.jpg';
    const image = fs.readFileSync(imagePath);
    const doc = new jsPDF();
    const logo = image.toString('base64'); // Aquí debes poner la imagen en formato base64

    console.log(ordenes.length);


    doc.addImage(logo, 'PNG', 10, 10, 30, 20);

    // Agregar título
    // doc.setFontSize(18);
    // doc.text('Sistema de Agua Potable y Sanamiento de Yautepec', 50, 10);


    // doc.setFontSize(16);
    // doc.text('SAPSY, Morelos', 100, 20);

    // doc.setFontSize(12);
    // doc.text('Calle la Palma No.24 Barrio de Santiago C.P-62730 Yautepec, Morelos', 55, 30);
    // doc.text('Teléfono: (735) 15 56 224 Whatsapp: (735) 12 12 079', 70, 40);

    // doc.setLineWidth(1);
    // doc.setDrawColor('#032963');
    // doc.line(5, 41, 205, 45);
    

    // Datos para la tabla

    doc.setFontSize(12);
    doc.setFont("Helvetica", "");
    doc.setFontSize(12);
    doc.text('Fecha: ' + fecha, 205, 10, null, null, "right");

    doc.text('Cliente: ' + nombre, 205, 15, null, null, "right");

    doc.text('Tel. del Cliente: ' + telefono, 205, 20, null, null, "right");

    doc.setFontSize(20);
    doc.text("Comprobante de pago de comisiones", 7, 39);

    doc.setFontSize(12);
    doc.setTextColor('#00590d');
    doc.text('Folio:    ' + folio, 205, 39, null, null, "right");

    doc.setLineWidth(1);
    doc.setDrawColor('#032963');
    doc.line(5, 41, 205, 41);

    //Lista de ordenes a pagar
    doc.setTextColor("#000");
    doc.setFontSize(15);
    doc.text('No. de Orden', 7, 49);

    doc.setFontSize(15);
    doc.text('Total de la orden', 49, 49);

    doc.setFontSize(15);
    doc.text('Comisión asignada', 100, 49)

    doc.setFontSize(15);
    doc.text('Subtotal de comisión', 155, 49);

    doc.setLineWidth(.3);
    doc.setDrawColor('#bbb');
    doc.line(5, 51, 205, 51);

    console.log(ordenes.length);

    let index = 0; 

    let comisionTotal = 0;

    for(let i = 0; i < ordenes.length; i++)
    {
        if( index === 14)
        {

            doc.addPage("a4", "");

            doc.setFontSize(50);
            doc.setFont("Helvetica", "bold");
            doc.text('SOGOO', 5, 17, 0, 15);

            doc.setTextColor('#001d4d');

            doc.setFontSize(7);
            doc.setFont("Helvetica", "");
            doc.text("José María Izazaga 38, local 020 planta baja, \ncolonia centro, Alcaldía Cuauhtémoc, \nCDMX, C.P. 06050", 7, 23);

            doc.setFontSize(12);
            doc.setFont("Helvetica", "");
            doc.setFontSize(12);
            doc.text('Fecha: ' + fecha, 205, 10, null, null, "right");

            doc.text('Cliente: ' + nombre, 205, 15, null, null, "right");

            doc.text('Tel. del Cliente: ' + telefono, 205, 20, null, null, "right");

            doc.setFontSize(20);
            doc.text("Comprobante de pago de comisiones", 7, 39);

            doc.setFontSize(12);
            doc.setTextColor('#00590d');
            doc.text('Folio:    ' + folio, 205, 39, null, null, "right");

            doc.setLineWidth(1);
            doc.setDrawColor('#032963');
            doc.line(5, 41, 205, 41);

            //Lista de ordenes a pagar
            doc.setTextColor("#000");
            doc.setFontSize(15);
            doc.text('No. de Orden', 7, 49);

            doc.setFontSize(15);
            doc.text('Total de la orden', 49, 49);

            doc.setFontSize(15);
            doc.text('Comisión asignada', 100, 49)

            doc.setFontSize(15);
            doc.text('Subtotal de comisión', 155, 49);

            doc.setLineWidth(.3);
            doc.setDrawColor('#bbb');
            doc.line(5, 51, 205, 51);

            index = 0;
        }
        
        doc.text(ordenes[i].id_orden.toString(), 16, (58 + (13 * index)));

        doc.text("$" + parseFloat(ordenes[i].total_orden) , 60, (58 + (13 * index)));

        doc.text(parseFloat(ordenes[i].comision_pago) + '%', 115, (58 + (13 * index)));
        
        doc.setTextColor("#009600");
        
        doc.text("$"+(parseFloat(ordenes[i].total_orden) * (parseFloat(ordenes[i].comision_pago)/100)).toFixed(2), 170, (58 + (13 * index)));
        doc.setTextColor("#000");

        comisionTotal += parseFloat(ordenes[i].total_orden) * (parseFloat(ordenes[i].comision_pago)/100);

        index++;

    }

    doc.setDrawColor("#7a7a7a");
    doc.line(5, (50 + (13 * index)), 205, (50 + (13 * index)));

    doc.text("Ordenes pagadas:", 150, (58 + (13 * index)), "right");
    doc.setTextColor("#009600");
    doc.text(ordenes.length+' ordenes', 205, (58 + (13 * index)), "right");
    doc.setTextColor("#000");

    doc.text("Total de comisiones:" ,150, (66 + (13 * index)), "right");
    doc.setTextColor("#009600");
    doc.text("$"+comisionTotal.toFixed(2) ,205, (66 + (13 * index)), "right");
    doc.setTextColor("#000");
    
    doc.save('output.pdf');
    res.send('PDF generado');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
