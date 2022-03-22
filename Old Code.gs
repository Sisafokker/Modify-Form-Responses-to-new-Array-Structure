// function onOpen() {
//   var menu = [{name: "Copiar Data", functionName: "mySplit"},
//     {name: "Eliminar Data", functionName: "myDelete"}];
//   ss.addMenu("<< COLEGIO >>", menu);
// }

// function onEdit(){
// mySplit();
// }

// // set GLOBALS
// var ss = SpreadsheetApp.getActiveSpreadsheet();  
// var sh0 = ss.getSheets()[0];
// var sh1 = ss.getSheets()[1];


// function mySplit() {
//   // ESTA SECCION HAY QUE MODIFICARLA AL CAMBIAR EL MENU!! TEMA VARIABLES, COLUMNAS, ETC!
//   // get data from sheet 1
//   var data = sh0.getDataRange().getValues();
  
//   // create array to hold data
//   var aMain = new Array();
//   Logger.log(data.length);
  
//   // itterate through data and add to array
//   for(var i=1, dLen=data.length; i<dLen; i++) {
//     //for(var j=1; j<4; j++) {
//       //aMain.push([data[i][0],data[i][j],data[i][4]);
//       // for(var j=8; j<85; j++) {         // Define la cantidad de columnas.
//       //   if(data[i][j] !== ""){
//       //   aMain.push([data[i][0],data[i][1],data[i][2],data[i][j],data[0][j],
//       //               data[i][3],data[i][4],data[i][5],data[i][6],data[i][7]]); /// OJO Cantidad de variables de aca!
     
//         for(var j=3; j<=92; j++) {         // Define la cantidad de columnas.
//             if (isNaN(data[i][j]) || data[i][j] == 0){    // Si data[i][j] NO es un numero OR data[i][j] igual a 0 
//               continue;}
//           else {
//             aMain.push([data[i][0],data[i][1],data[i][2],data[i][j],data[0][j],
//                     data[i][33],data[i][14],data[i][42],data[i][51],data[i][88],data[i][92]]); // Columnas de las OBSERVACIONES
//             /// OJO Cantidad de variables de aca!
//           }              
//     } 
   
//   Logger.log(aMain.length);
//   // add array of data to second sheet
//   //sh1.getRange(2, 1, aMain.length, 3).setValues(aMain);
//   sh1.getRange(2, 1, aMain.length, 11).setValues(aMain);  // OJO cantidad de variables debe coincidir con la enumerada arriba en aMain.push
//                                                           //getRange(row, column, numRows, numColumns)
 
//   // set first sheet as active sheet  
//   ss.setActiveSheet(sh0); 
// }
// }


// function myDelete() {
//  var data = sh1.getDataRange().getValues(); 
//  var range = sh1.getRange(2, 1, data.length-1, 11); // OJO cantidad de variables debe coincidir con la enumerada arriba en aMain.push
//  range.clear();
  
//   // set first sheet as active sheet  
//   ss.setActiveSheet(sh0); 
// }

