/*=============== LINK ACTIVE ===============*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))

/*=============== SHOW HIDDEN MENU ===============*/
const showMenu = (toggleId, navbarId) =>{
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId)

    if(toggle && navbar){
        toggle.addEventListener('click', ()=>{
            /* Show menu */
            navbar.classList.toggle('show-menu')
            /* Rotate toggle icon */
            toggle.classList.toggle('rotate-icon')
        })
    }
}
showMenu('nav-toggle','nav')

// ==================== show hidden objects ============
function showdiv(id){
    console.log(id)
    // document.getElementById('showDiv').onclick=function(){
        let element =document.getElementById(id)
    // Remove any element-specific value, falling back to stylesheets
    // console.log(document.getElementById('re').style.display)
    if(element.style.display == 'block'){
        document.getElementById(id).style.display='none';
    }else{
        document.getElementById(id).style.display='block';
        
    }
// };
}

// ======================== data list

// main = document.getElementById('body');

let total_ver = 0;


function tables(listArray,html_div,total){
    main = document.getElementById(html_div);
    var somme = 0 ;
    var somme2 = 0 ;
    main = document.getElementById(html_div);
    for (let index = 0; index < listArray.length; index++) {
        somme += listArray[index].value; 
        somme2 += listArray[index].taxe; 
    }
    total_ver += somme
    document.getElementById(total).innerHTML = somme + '.00';
    console.log(somme);
    let showAll = () => {
        // main.innerHTML = '';
        template(listArray);
      }
      let template = (arr) => {
        const tableContentHTML = arr
          .map((item) => {return `<tr><td>${item.name}</td><td>${item.value}.00</td><td>${item.taxe}.00</td><td>${item.date}</td></tr>`})
          .join('');
        let html = `<table>
          <thead><th>الوصف</th><th id="value">المبلغ</th><th>TAXE</th><th>التاريخ</th></thead>
            <tbody>` + tableContentHTML + `<tr><td>TOTAL</td><td>${somme}.00</td><td>${somme2}.00</td></tbody></table>`;
          main.innerHTML += html;
      }
    showAll();

}

list_ja = [
    {name: 'المسعود', value: 55000.00,taxe:150.00,date: "31/01/2024"},
];

list_fv = [
    {name: 'المسعود', value: 130000.00,taxe:330.00,date: "06/02/2024"},
    {name: 'المسعود', value: 600000.00,taxe:1458.00,date: "10/02/2024"},
    {name: 'المسعود', value: 210000.00,taxe:522.00,date: "18/02/2024"},
    {name: 'المسعود', value: 150000.00,taxe:378.00,date: "21/02/2024"},
    {name: 'المسعود', value: 270000.00,taxe:666.00,date: "26/02/2024"},
];

list_ma = [
    {name: 'المسعود', value: 280000.00,taxe:690.00,date: "03/03/2024"},
    {name: 'الهاشمي', value: 10000.00,taxe:42.00,date: "05/03/2024"},
    {name: 'الهاشمي', value: 15000.00,taxe:54.00,date: "18/03/2024"},
    {name: 'المسعود', value: 220000.00,taxe:546.00,date: "21/03/2024"},
];

list_av = [
    {name: 'عطاء الله', value: 220000.00,taxe:546.00,date: "18/04/2024"},
    {name: 'عطاء الله', value: 350000.00,taxe:858.00,date: "27/04/2024"},
    {name: 'عطاء الله', value: 180000.00,taxe:450.00,date: "30/04/2024"},
];

list_may = [
    {name: 'المسعود', value: 120000.00,taxe:24*12+18,date: "06/05/2024"},
    {name: 'المسعود', value: 200000.00,taxe:498.00,date: "12/05/2024"},
    {name: 'ياسين', value: 200000.00,taxe:498.00,date: "12/05/2024"},
    {name: 'المسعود', value: 430000.00,taxe:1050.00,date: "16/05/2024"},
    {name: 'ياسين', value: 195000.00,taxe:486.00,date: "19/05/2024"},
    {name: 'الهاشمي', value: 200000.00,taxe:498.00,date: "19/05/2024"},
    {name: 'علي عيادي', value: 250000.00,taxe:618.00,date: "23/05/2024"},
    {name: 'المسعود', value: 250000.00,taxe:618.00,date: "25/05/2024"},
    {name: 'المسعود', value: 250000.00,taxe:618.00,date: "28/05/2024"},
];


list_jow= [
    {name: 'الدراجي', value: 180000.00,taxe:450.00,date: "05/06/2024"},
    {name: 'المسعود', value: 250000.00,taxe:618.00,date: "05/06/2024"},
    {name: 'المسعود', value: 250000.00,taxe:618.00,date: "09/06/2024"},
    {name: 'عطاء الله', value: 150000.00,taxe:378.00,date: "29/02/2024"},
];

list_je= [
    {name: 'عطاء الله', value: 150000.00,taxe:468.00,date: "01/07/2024"},
    {name: 'عطاء الله', value: 230000.00,taxe:570.00,date: "04/07/2024"},
    {name: 'عطاء الله', value: 100000.00,taxe:258.00,date: "08/07/2024"},
    {name: 'المسعود', value: 175000.00,taxe:438.00,date: "08/07/2024"},
    {name: 'عطاء الله', value: 120000.00,taxe:306.00,date: "11/07/2024"},
    {name: 'عطاء الله', value: 100000.00,taxe:258.00,date: "14/07/2024"},
    {name: 'المسعود', value: 200000.00,taxe:498.00,date: "18/07/2024"},
    {name: 'المسعود', value: 400000.00,taxe:978.00,date: "22/07/2024"},
    {name: 'المسعود', value: 200000.00,taxe:498.00,date: "25/07/2024"},
    {name: 'المسعود', value: 100000.00,taxe:258.00,date: "27/07/2024"},
    {name: 'المسعود', value: 250000.00,taxe:618.00,date: "30/07/2024"},
];

list_ot= [
    {name: 'عطاء الله', value: 195000.00,taxe:486.00,date: "03/08/2024"},
    {name: 'عطاء الله', value: 260000.00,taxe:642.00,date: "05/08/2024"},
    {name: 'عطاء الله', value: 140000.00,taxe:354.00,date: "08/08/2024"},
    {name: 'عطاء الله', value: 130000.00,taxe:330.00,date: "11/08/2024"},
    {name: 'عطاء الله', value: 140000.00,taxe:354.00,date: "14/08/2024"},
    {name: 'عطاء الله', value: 130000.00,taxe:330.00,date: "17/08/2024"},
    {name: 'عطاء الله', value: 120000.00,taxe:306.00,date: "20/08/2024"},
    {name: 'عطاء الله', value: 120000.00,taxe:306.00,date: "22/08/2024"},
];

list_sep= [
    {name: 'المسعود', value: 550000.00,taxe:1338.00,date: "02/09/2024"},
    {name: 'كراء محل', value: 160000.00,taxe:402.00,date: "08/09/2024"},
    {name: 'الهاشمي', value: 180000.00,taxe:450.00,date: "08/09/2024"},
    {name: 'الهاشمي', value: 110000.00,taxe:282.00,date: "11/09/2024"},
    {name: 'الهاشمي', value: 55000.00,taxe:150.00,date: "12/09/2024"},
    {name: 'الهاشمي', value: 110000.00,taxe:282.00,date: "15/09/2024"},
    {name: 'المسعود', value: 230000.00,taxe:570.00,date: "18/09/2024"},
    {name: 'كراء محل', value: 120000.00,taxe:306.00,date: "26/09/2024"},
    {name: 'المسعود', value: 150000.00,taxe:380.00,date: "28/09/2024"},
];

list_ok= [
    {name: 'المسعود', value: 202000.00,taxe:510.00,date: "01/10/2024"},
    {name: 'الهاشمي', value: 50000.00,taxe:138.00,date: "02/10/2024"},
    {name: 'المسعود', value: 250000.00,taxe:618.00,date: "05/10/2024"},
    {name: 'المسعود', value: 170000.00,taxe:426.00,date: "07/10/2024"},
    {name: 'المسعود', value: 150000.00,taxe:378.00,date: "12/10/2024"},
    {name: 'علي عيادي', value: 200000.00,taxe:498.00,date: "12/10/2024"},
    {name: 'المسعود', value: 500000.00,taxe:1218.00,date: "23/10/2024"},
];






tables(list_ja,"ja","total_ja")
tables(list_fv,"fv","total_fv")
tables(list_ma,"ma","total_ma")
tables(list_av,"av","total_av")
tables(list_may,"may","total_may")
tables(list_jow,"jow","total_jow")
tables(list_je,"je","total_je")
tables(list_ot,"ot","total_ot")
tables(list_sep,"sep","total_sep")
tables(list_ok,"ok","total_ok")

document.getElementById("total_versment").innerHTML = total_ver +'.00';







// let showAll = () => {
//   main.innerHTML = '';
//   template(listArray);
// }
// let template = (arr) => {
//   const tableContentHTML = arr
//     .map((item) => {return `<tr><td>${item.name}</td><td>${item.value}</td><td>${item.date}</td></tr>`})
//     .join('');
//   let html = `<table>
//     <thead><th>الوصف</th><th id="value">المبلغ</th><th>التاريخ</th></thead>
//       <tbody>` + tableContentHTML + `</tbody></table>`;
//     main.innerHTML = html;
// }
// showAll();