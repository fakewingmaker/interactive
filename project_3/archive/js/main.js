console.log("Hello missed connections");

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

    // first, if there's an error we're going to log that.
    if (err) {
        console.log("Error loading rows");
        console.error(err);
        return;
    }

    // if no error, we're going to run two more functions.
    consoleLogRows();
    showRows();
}

// consoleLogRows simply logs each row to the console, 
// so you can see it's data and fields.
function consoleLogRows() {
    
    console.log("consoleLogRows()");
    
    rows.forEach((row) => {
        console.log("Row:", row);
    });

}



// showRows is what puts the content onto the HTML page
function showRows() {
    console.log("showRows()");
    rows.forEach((row) => {

        const smalldiv = document.createElement("div");
        smalldiv.classList.add("smalldiv");

        const title = document.createElement("div");
        title.classList.add("text");
        title.innerText = row.fields.title;
        smalldiv.appendChild(title);

        const location = document.createElement("div");
        location.classList.add("text");
        location.innerText = row.fields.location;
        smalldiv.appendChild(location);

        const message = document.createElement("div");
        message.classList.add("text");
        message.innerText = row.fields.message;
        smalldiv.appendChild(message);

        const connect = document.createElement("div");
        connect.classList.add("text");
        connect.innerText = row.fields.connect;
        smalldiv.appendChild(connect);

        // document.body.appendChild(smalldiv);

        document.getElementById("bigdiv").appendChild(smalldiv);

        // <div class="smalldiv">
        //     <b class="text">title 1</b>
        //     <b class="text">location 1</b>
        //     <b class="text">message 1</b>
        //     <b class="text">connection 1</b>
        // </div>
        // uncomment this code to add the description column from the table.
        // const div = document.createElement("div");
        // div.innerText = row.fields.Description;
        // document.body.appendChild(div);

        // uncomment this code to add the images from the table.
        // const image = document.createElement("img");
        // image.src = row.fields.icon[0].url;
        // document.body.appendChild(image);
    })
}
