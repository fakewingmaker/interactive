
// When the images are loaded, do this stuff
var loadFile = function(event) {
	
	// go through each uploaded image and do the following...
	for (var i = 0; i < event.target.files.length; ++i) {
		
		// create a new image element
		var image = document.createElement("img");

		// Put the new image in the console, just to make sure it's working.
        console.log(image);

        // give that new image element the source, which is the current image
        image.src = URL.createObjectURL(event.target.files[i]);

        // add that new image element to the document
        $('div').append(image);


        // $(image).css("height","200px");
        // $(image).css('padding','.25rem');
        // $('#fileList').css('justify-content','center');
 
	};

	var node = document.getElementById('file');
	var clone = node.cloneNode(true);

	$('body').append(clone);
	//search how to clean up the processed action

	// var input = document.createElement('input');
	// input.setAttribute('type','file');
	// input.setAttribute('accept','image/*');
	// input.setAttribute('name','files');
	// $('body').append(input);

};