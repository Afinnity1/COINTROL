	//Jquery ui method for creating accordion listing. We use the .accordion(); action to achieve this.
			// Displays collapsible content panels for presenting information in a limited amount of space.
			$("#accordion").accordion();
		
		// Redirecting action from the navbar section
		document.getElementById("navbar-contact").onclick = function(){
			window.location.href = 'contact us.html'
		}

		document.getElementById("navbar-faq").onclick = function(){
			window.location.href = 'faq.html'
		}

		document.getElementById("navbar-home").onclick = function(){
			window.location.href = 'index.html'
		}

		document.getElementById("navbar-about").onclick = function(){
			window.location.href = 'about us.html'
		}

		// Redirecting action from the contact section
			document.getElementById("con-ab").onclick = function(){
				window.location.href = 'about us.html'
			}

			document.getElementById("con-f").onclick = function(){
				window.location.href = 'faq.html'
			}

			document.getElementById("con-con").onclick = function(){
				window.location.href = 'contact us.html'
			}