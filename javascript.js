function resize(elem, percent) { 
	elem.style.fontSize = percent; }


	// Filtering - Homepage	
	filterSelection("all")
	function filterSelection(c) {
	  var x, i;
	  x = document.getElementsByClassName("columnf");
	  if (c == "all") c = "";
	  for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	  }
	}
	
	function w3AddClass(element, name) {
	  var i, arr1, arr2;
	  arr1 = element.className.split(" ");
	  arr2 = name.split(" ");
	  for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
	  }
	}
	
	function w3RemoveClass(element, name) {
	  var i, arr1, arr2;
	  arr1 = element.className.split(" ");
	  arr2 = name.split(" ");
	  for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
		  arr1.splice(arr1.indexOf(arr2[i]), 1);     
		}
	  }
	  element.className = arr1.join(" ");
	}

	// Add active class to the current button (highlight it)
	var btnContainer = document.getElementById("myBtnContainer");
	var btn = btnContainer.getElementsByClassName("btn");
	for (var i = 0; i < btn.length; i++) {
	  btn[i].addEventListener("click", function(){
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	  });
	}



	// Tabs - case study
	function openCityC(evt, cityName) {
      var i, tabcontentC, tablinksC;
      tabcontentC = document.getElementsByClassName("tabcontentC");
      for (i = 0; i < tabcontentC.length; i++) {
        tabcontentC[i].style.display = "none";
      }
      tablinksC = document.getElementsByClassName("tablinksC");
      for (i = 0; i < tablinksC.length; i++) {
        tablinksC[i].className = tablinksC[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }


	// Video
	document.getElementById('vid').play();



	// Sticky menu
	let timVine = document.getElementById("tim-vine");
	let navbar = document.getElementById("main-nav");

	let navPos = navbar.getBoundingClientRect().top;

	window.addEventListener("scroll", e => {
	let scrollPos = window.scrollY;
	if (scrollPos > navPos) {
		navbar.classList.add('sticky');
		header.classList.add('navbarOffsetMargin');
	} else {
		navbar.classList.remove('sticky');
		header.classList.remove('navbarOffsetMargin');
	}
	});


	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
  	}
	