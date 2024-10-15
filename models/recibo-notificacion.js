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
    let index = 0; 
    let total = 0;
    const importe = [
        {
            concepto: "consumo",
            mes: 12.10,
            vencido: 3.50
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
        },
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
        },
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
        },
        {
            concepto: "cuota fija",
            mes: 234.00,
            vencido: 43.00
        }
    ];

    const imagePath = './assets/icono.jpg';
    const image = fs.readFileSync(imagePath);
    const logo = image.toString('base64');

    const imagePathBBVA = './assets/BBVA.png';
    const imageBBVA = fs.readFileSync(imagePathBBVA);
    const logoBBVA = imageBBVA.toString('base64');

    const imagePathHSBC = './assets/HSBC.jpg';
    const imageHSBC = fs.readFileSync(imagePathHSBC);
    const logoHSBC = imageHSBC.toString('base64');

    const imagePathSAPSY = './assets/sapsy_logo2.webp';
    const imageSAPSY = fs.readFileSync(imagePathSAPSY);
    
    const doc = new jsPDF();
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

    doc.setLineWidth(2);
    doc.setDrawColor('#5e5e5e');
    doc.line(205, 41, 205, 41);

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
    doc.text('Ultimos pagos', 148, 146);

    doc.setLineWidth(1);
    doc.setDrawColor('#5e5e5e');
    doc.line(5, 150, 205, 150);

    doc.setLineWidth(1);
    doc.setDrawColor('#5e5e5e');
    doc.line(110, 139, 110, 230);

    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Concepto', 10, 156);
    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Mes', 50, 156);
    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Vencido', 80, 156);

    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Fecha', 120, 156);
    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Recibo', 150, 156);
    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Imp. Pagado', 180, 156);

// 
// 
    doc.setLineWidth(1);
    doc.setDrawColor('#5e5e5e');
    doc.line(5, 230, 205, 230);

    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Datos de facturacion', 87, 236);

    doc.setLineWidth(1);
    doc.setDrawColor('#5e5e5e');
    doc.line(5, 240, 205, 240);

    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Periodo facturado', 90, 247);

    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Fecha Vencimiento:', 40, 253);
    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('INMEDIATO', 150, 253);

    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Meses vencidos:', 40, 260);
    doc.setFontSize(13);

    for(let i = 0; i < importe.length; i++){
        
        if(index ===10){

            doc.addPage("a4", "");

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
            doc.text('Ultimos pagos', 148, 146);

            doc.setLineWidth(1);
            doc.setDrawColor('#5e5e5e');
            doc.line(5, 150, 205, 150);

            doc.setLineWidth(1);
            doc.setDrawColor('#5e5e5e');
            doc.line(110, 139, 110, 230);

            doc.setFontSize(12);
            doc.setFont("Helvetica", "");
            doc.text('Concepto', 10, 156);
            doc.setFontSize(12);
            doc.setFont("Helvetica", "");
            doc.text('Mes', 50, 156);
            doc.setFontSize(12);
            doc.setFont("Helvetica", "");
            doc.text('Vencido', 80, 156);

            doc.setFontSize(13);
            doc.setFont("Helvetica", "");
            doc.text('Fecha', 120, 156);
            doc.setFontSize(13);
            doc.setFont("Helvetica", "");
            doc.text('Recibo', 150, 156);
            doc.setFontSize(13);
            doc.setFont("Helvetica", "");
            doc.text('Imp. Pagado', 180, 156);
// 
// 
            doc.setLineWidth(1);
            doc.setDrawColor('#5e5e5e');
            doc.line(5, 230, 205, 230);

            doc.setFontSize(13);
            doc.setFont("Helvetica", "");
            doc.text('Datos de facturacion', 87, 236);

            doc.setLineWidth(1);
            doc.setDrawColor('#5e5e5e');
            doc.line(5, 240, 205, 240);

            doc.setFontSize(13);
            doc.setFont("Helvetica", "");
            doc.text('Periodo facturado', 90, 247);

            doc.setFontSize(13);
            doc.setFont("Helvetica", "");
            doc.text('Fecha Vencimiento:', 40, 253);
            doc.setFontSize(13);
            doc.setFont("Helvetica", "");
            doc.text('INMEDIATO', 150, 253);

            doc.setFontSize(13);
            doc.setFont("Helvetica", "");
            doc.text('Meses vencidos:', 40, 260);
            doc.setFontSize(13);
            // doc.setFont("Helvetica", "");
            // doc.text('INMEDIATO', 150, 253);

            // doc.setFontSize(13);
            // doc.setFont("Helvetica", "");
            // doc.text('Total a pagar: ' + '$' + parseFloat(total), 90, 270);
            // doc.setFontSize(13);
            // doc.setFont("Helvetica", "");
            // doc.text('INMEDIATO', 150, 253);

            index = 0;
        }

        doc.text(importe[i].concepto, 10, (162 + (index * 7)));

        doc.text("$" + parseFloat(importe[i].mes), 51, (162 + (index * 7)));

        doc.text("$" + parseFloat(importe[i].vencido), 85, (162 + (index * 7)));

        total += parseFloat(importe[i].mes) + parseFloat(importe[i].vencido);

        index++;
    }

    doc.setLineWidth(1);
    doc.setDrawColor('#5e5e5e');
    doc.line(5, 230, 205, 230);

    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Datos de facturacion', 87, 236);

    doc.setLineWidth(1);
    doc.setDrawColor('#5e5e5e');
    doc.line(5, 240, 205, 240);

    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Periodo facturado', 90, 247);

    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Fecha Vencimiento:', 40, 253);
    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('INMEDIATO', 150, 253);

    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Meses vencidos:', 40, 260);
    doc.setFontSize(13);

    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Total a pagar: ' + '$' + parseFloat(total), 150, 260);

    doc.setLineWidth(1);
    doc.setDrawColor('#5e5e5e');
    doc.line(5, 264, 205, 264);

    doc.addImage(logoBBVA, 'PNG', 5, 267, 20, 10);
    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Convenio CIE: 2225646', 27, 270);
    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Referencia: 00002812488241795286', 27, 280);
    // doc.setFontSize(13);    

    doc.addImage(logoHSBC, 'PNG', 105, 265, 25, 20);
    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Servicio: 7317', 127, 270);
    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Clave para SPEI:021180550300073173', 127, 275);
    doc.setFontSize(12);
    doc.setFont("Helvetica", "");
    doc.text('Concepto de pago:00002812488238075269', 127, 280);

    doc.addImage(logo, 'PNG', 50, 285, 10, 10);
    doc.setFontSize(13);
    doc.setFont("Helvetica", "");
    doc.text('Sistema de Agua y Saneamiento Yautepec, Morelos ® 2024', 60, 292);
 
    
    doc.save('./templates/output2.pdf');
    res.send('PDF generado');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
