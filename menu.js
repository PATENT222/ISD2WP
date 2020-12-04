/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// main menu 

var i = 0; // Start point
	var images = [];
	var time = 2000;

	// Image List
	images[0] = 'images/a.jpg';
	images[1] = 'images/b.jpg';
	images[2] = 'images/c.jpg';
	images[3] = 'images/d.jpg';

	// Change Image
	function changeImg(){
		document.slide.src = images[i];

		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}

		setTimeout("changeImg()", time);
	}

	window.onload = changeImg;
        
        
        //search bar 
        
         window.addEventListener("load", e => {
           

            // Enable or disable form fields based on another form control
            documentquerySelector("showveg").addEventListener("change", evt => {
                // get the container for the checkboxes
                let topelem = documentquerySelector("toppingitems");
                // TODO: get the checkboxes that do not correspond to vegetarian
                // and turn them on or off based upon the parent checkbox setting
                let cbquery = "input[type='checkbox']:not([data-veg])";
                let thecbs = topelem.querySelectorAll(cbquery);
                for (cb of thecbs) {
                    if (documentquerySelector("showveg").checked) {
                        cb.setAttribute("disabled", "disabled");
                        cb.parentNode.classList.add("disabled");
                        cb.checked = false;
                    }
                    else {
                        cb.removeAttribute("disabled");
                        cb.parentNode.classList.remove("disabled");
                    }
                }
            });
        });