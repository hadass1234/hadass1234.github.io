window.addEventListener('scroll', () => {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (scrollTop / docHeight) * 100 + '%';
});

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

	/// Add active class to the current button (highlight it)
	var btnContainer = document.getElementById("myBtnContainer");
	if (btnContainer) {
		var btn = btnContainer.getElementsByClassName("btn");
		for (var i = 0; i < btn.length; i++) {
			btn[i].addEventListener("click", function(){
				var current = document.getElementsByClassName("active");
				current[0].className = current[0].className.replace(" active", "");
				this.className += " active";
			});
		}
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


	// Video (document.getElementById('vid').play();) 
	var vid = document.getElementById('vid');
	if (vid) vid.play();



	// Sticky menu
	let timVine = document.getElementById("tim-vine");
	let navbar = document.getElementById("main-nav");

	if (navbar) {
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
}


	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
  	}

	// hero headline
function initWordReveal() {
    const h1 = document.querySelector('.hero-headline');
    if (!h1) return;

    const sub = document.querySelector('.hero-sub-anim');
    const btns = document.querySelector('.hero-btns-anim');

    if (sub) sub.style.opacity = '0';
    if (btns) btns.style.opacity = '0';

    function wrapWords(node) {
        if (node.nodeType === 3) {
            const words = node.textContent.split(/(\s+)/);
            const frag = document.createDocumentFragment();
            words.forEach(word => {
                if (word.trim()) {
                    const span = document.createElement('span');
                    span.className = 'word';
                    span.textContent = word;
                    frag.appendChild(span);
                } else {
                    frag.appendChild(document.createTextNode(word));
                }
            });
            node.parentNode.replaceChild(frag, node);
        } else if (node.nodeType === 1 && !node.classList.contains('hero-sub-anim') && !node.classList.contains('hero-btns-anim')) {
            Array.from(node.childNodes).forEach(wrapWords);
        }
    }

    Array.from(h1.childNodes).forEach(wrapWords);

    const allWords = h1.querySelectorAll('.word');
    const mainWords = Array.from(allWords).filter(w => !w.closest('.hero-sub-anim'));

    mainWords.forEach((word, i) => {
        setTimeout(() => {
            word.style.opacity = '1';
            word.style.transform = 'translateY(0)';
        }, i * 55); // slightly slower stagger
    });

    const total = mainWords.length * 55;

    if (sub) {
        setTimeout(() => {
            sub.style.transition = 'opacity 1s ease, transform 1s ease';
            sub.style.transform = 'translateY(0)';
            sub.style.opacity = '1';
        }, total + 120);
    }

    if (btns) {
        setTimeout(() => {
            btns.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            btns.style.transform = 'translateY(0)';
            btns.style.opacity = '1';
        }, total + 350);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWordReveal);
} else {
    initWordReveal();
}
// audio player
function toggleAudio() {
    const audio = document.getElementById('audioPlayer');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    if (!audio) return;

    if (audio.paused) {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        audio.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }

    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        document.getElementById('audioProgress').style.width = progress + '%';
        const mins = Math.floor(audio.currentTime / 60);
        const secs = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
        const durMins = Math.floor(audio.duration / 60);
        const durSecs = Math.floor(audio.duration % 60).toString().padStart(2, '0');
        document.getElementById('audioTime').textContent = mins + ':' + secs + ' / ' + durMins + ':' + durSecs;
    });

    audio.addEventListener('ended', () => {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        document.getElementById('audioProgress').style.width = '0%';
        document.getElementById('audioTime').textContent = '0:00';
    });
}

// show audio duration on load
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audioPlayer');
    if (!audio) return;
    audio.addEventListener('loadedmetadata', () => {
        const durMins = Math.floor(audio.duration / 60);
        const durSecs = Math.floor(audio.duration % 60).toString().padStart(2, '0');
        document.getElementById('audioTime').textContent = '0:00 / ' + durMins + ':' + durSecs;
    });
});

// card scroll reveal
const cards = document.querySelectorAll('.card-reveal');
if (cards.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    cards.forEach(card => observer.observe(card));
}
