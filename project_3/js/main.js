// load the airtable library
var Airtable = require('airtable');

// configure the site to point to your Airtable
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyPtYeg6TUClWYGY'
});
var base = Airtable.base('appd78TQNgGYvvIvb');

// set up a blank array for all your rows
const rows = [];

// this line of code says to get all the info from AirTable
// put your table name in the quotes
base('bill1').select({
    // If you want to sort the records, include that here:
    //  sort: [
    //     {field: 'Title', direction: 'asc'}
    // ],
}).eachPage(gotPageofRows, gotAllRows);

// Here, we're going to get batches of rows from the airtable, 
// and add each row to our rows array.
function gotPageofRows(records, fetchNextPage) {
    console.log("gotPageofRows()");
    rows.push(...records);
    fetchNextPage();
}



// once we've got all rows in our array, the following code runs.
function gotAllRows(err) {
    console.log("gotAllRows()");
    if (err) {
        console.log("Error loading rows");
        console.error(err);
        return;
    }
    consoleLogRows();

    // here, we want to show the first record only, 
    // which happens with the showRow function.
    showRow(rows[index]);
}

//if i want to filter out all the date that's expired, write a conditional statement
//show rows -> check the date -> if the date has past -> skip the row and show the next one 

var index = 0;

// consoleLogRows simply logs each row to the console, 
// so you can see it's data and fields.

// function showRows() {
//     console.log("showRows()");
    
//     var today = new Date;
//     if (today < row.fields.time) {

//         // here's where you show the row
//         const slide = document.getElementById("slide");
//         const div = document.getElementById("slide-text");

//         //setting up background image in relation to the airtable information;
//         const img = document.getElementById("img");

//         if (row.fields.location == "Beinecke plaza"){
//          img.src = "pic/Beinecke.jpeg";
//         }

//         else if (row.fields.location == "YUAG sidewalk"){
//          img.src = "pic/yuag.jpeg";
//         }

//         else if (row.fields.location == "art school (chapel)"){
//          img.src = "pic/chapel.png";
//         }

//         else if (row.fields.location == "art school (edgewood)"){
//         img.src = "pic/edgewood.jpeg";
//         }

//         else if (row.fields.location == "Cross Campus Lawn"){
//         img.src = "pic/crosscampus.jpeg";
//         }

//         else if (row.fields.location == "Haas Library"){
//         img.src = "pic/haas.jpeg";
//         }

//         else if (row.fields.location == "Bass Library"){
//         img.src = "pic/bass.jpeg";
//         }

//         else if (row.fields.location == "Sterling Library"){
//         img.src = "pic/sterling.jpeg";
//         }

//         else if (row.fields.location == "HQ"){
//         img.src = "pic/hq.jpeg";
//         }

//         else if (row.fields.location == "Rudolph Hall"){
//         img.src = "pic/rudolph.jpeg";
//         }

//         else if (row.fields.location == "Union Station"){
//         img.src = "pic/unionstation.jpeg";
//         }

//         else if (row.fields.location == "Science Hill"){
//         img.src = "pic/sciencehill.jpeg";
//         }

//         else if (row.fields.location == "Yale Farm"){
//         img.src = "pic/farm.jpeg";
//         }


//         slide.style.backgroundColor = row.fields.Color;

//         const span = document.getElementById("title");
//         span.innerHTML = row.fields.title;

//         const i = document.getElementById("location");
//         i.innerHTML = row.fields.location;

//         const h2 = document.getElementById("message");
//         h2.innerHTML = row.fields.message;

//         const h3 = document.getElementById("connect");
//         h3.innerHTML = row.fields.how_to_connect;

//         const h4 = document.getElementById("date");
//         h4.innerHTML = row.fields.time;

//     } 

//     else {
//         //show the next row
//         index = index + 1;
//         showRows(index);
//     }
// }

function consoleLogRows() {
    console.log("consoleLogRows()");
    rows.forEach((row) => {
        console.log("Row:", row);
    });
}

// showRows is what puts the content onto the HTML page.
// it only displays a single row.
function showRow(row) {

    console.log("showRow()");

    const slide = document.getElementById("slide");
    const div = document.getElementById("slide-text");

    //setting up background image in relation to the airtable information;
    const img = document.getElementById("img");

    if (row.fields.location == "Beinecke plaza"){
        img.src = "pic/Beinecke.png";
    }

    else if (row.fields.location == "YUAG sidewalk"){
        img.src = "pic/yuag.png";
    }

    else if (row.fields.location == "Art School (Chapel)"){
        img.src = "pic/chapel.png";
    }

    else if (row.fields.location == "Art School (Edgewood)"){
        img.src = "pic/edgewood.png";
    }

    else if (row.fields.location == "Cross Campus Lawn"){
        img.src = "pic/crosscampus.png";
    }

    else if (row.fields.location == "Haas Library"){
        img.src = "pic/haas.png";
    }

    else if (row.fields.location == "Bass Library"){
        img.src = "pic/bass.png";
    }

    else if (row.fields.location == "Sterling Library"){
        img.src = "pic/sterling.png";
    }

    else if (row.fields.location == "Humanities Quadrangle"){
        img.src = "pic/hq.png";
    }

    else if (row.fields.location == "Rudolph Hall"){
        img.src = "pic/rudolph.png";
    }

    else if (row.fields.location == "Union Station"){
        img.src = "pic/unionstation.png";
    }

    else if (row.fields.location == "Science Hill"){
        img.src = "pic/sciencehill.png";
    }

    else if (row.fields.location == "Yale Farm"){
        img.src = "pic/farm.png";
    }


    slide.style.backgroundColor = row.fields.Color;

    const span = document.getElementById("title");
    span.innerHTML = row.fields.title;

    const i = document.getElementById("location");
    i.innerHTML = row.fields.location;

    const h2 = document.getElementById("message");
    h2.innerHTML = row.fields.message;

    const h3 = document.getElementById("connect");
    h3.innerHTML = row.fields.connect;

    const h4 = document.getElementById("date");
    h4.innerHTML = row.fields.time;

}

// 1. make an image in the html
// if location = xx, display 


// what's the difference between innerText & innerHTML?

//     const div = document.getElementById("slide-text");
//     div.innerHTML = row.fields.title + row.fields.location + row.fields.message + row.fields.how_to_connect;
// }

// This sets up an event.
// When you click on a slide, you replace the content with the message
// form the next row. 
// Some additional logic ensures that when you reach the last row,
// you loop back to the beginning.
document.getElementById("slide-text").addEventListener("click", () => {
    console.log(index);
    if (index < rows.length - 1) {
        index = index + 1;
        showRow(rows[index]);
    } else {
        index = 0;
        showRow(rows[index]);
    }
})



// function with expiration date check:
// function showRows() {
//     console.log("showRows()");

//     var today = new Date;
//     if (today <= row.fields.expirationDate){

// // where to show the rows
//     }

//     else {
//         //show the next row
//         index = index + 1;
//         showRows(index);
//     }
// }

