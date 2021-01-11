//Add link to change requests
var a = document.createElement('a');
var linkText = document.createTextNode("Click here for recent change requests");
a.appendChild(linkText);
a.title = "SNOW LINK";
a.style = "position:relative;left:730px;top:55px;z-index:10;color:blue";
a.href = "https://liveperson.service-now.com/nav_to.do?uri=%2Fchange_request_list.do%3Fsysparm_query%3Dstart_dateONLast%202%20hours@javascript:gs.beginningOfLast2Hours()@javascript:gs.endOfLast2Hours()%26sysparm_first_row%3D1%26sysparm_view%3Dclose_view";
document.body.appendChild(a);

//Get and initialize Fav Icon
var link = document.querySelector("link[rel~='icon']");
link.href = 'https://livepersone2e.s3.amazonaws.com/emoji-sleep.ico';

//Update Fav Icon via setInterval.
setInterval(alertCount, 1000); //every 1s

function alertCount(){
	//Identify the number of failing scenarios
	var e2eAlerts = document.getElementsByClassName("table2_part2");
	var e2eAlertsCount = e2eAlerts.length/7;

	//Identify the failing scenario names
	var e2eAlertsScenarios = [];
	var scenarioLocation = 3;
	for (let i = 0 ; i < e2eAlertsCount ; i++) {
		e2eAlertsScenarios.push(e2eAlerts[scenarioLocation].textContent);
		scenarioLocation = scenarioLocation + 7;
	}
	console.log("E2Es failing (" + e2eAlertsCount + "): " + e2eAlertsScenarios);

	//Pick the FavIcon
	if (e2eAlertsCount == 0) {
		link.href = 'https://livepersone2e.s3.amazonaws.com/emoji-sleep.ico';
	} else if (e2eAlertsCount > 0 && e2eAlertsCount < 10) {
		if (link.href != 'https://livepersone2e.s3.amazonaws.com/emoji-fear.ico') {
			link.href = 'https://livepersone2e.s3.amazonaws.com/emoji-fear.ico';
		} else {
			link.href = 'https://livepersone2e.s3.amazonaws.com/'+ e2eAlertsCount + '.ico';
		}
	} else {
		if (link.href != 'https://livepersone2e.s3.amazonaws.com/three-lines.ico') {
			link.href = 'https://livepersone2e.s3.amazonaws.com/three-lines.ico';
		} else {
			link.href = 'https://livepersone2e.s3.amazonaws.com/emoji-fear.ico';
		}
	}
}


//Update Fav Icon via requestAnimationFrame. This pauses immediately when in 
//background.

// function cycleFavIcon() {
// 	if (link.href != 'https://livepersone2e.s3.amazonaws.com/three-lines.ico') {
// 		link.href = 'https://livepersone2e.s3.amazonaws.com/three-lines.ico';
// 	} else {
// 		link.href = 'https://livepersone2e.s3.amazonaws.com/emoji-fear.ico';
// 	}
// 	window.requestAnimationFrame(cycleFavIcon);
// }
// cycleFavIcon();


//Update Fav Icon via MutationObserver
//Not started