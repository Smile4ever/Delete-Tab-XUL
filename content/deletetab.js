window.addEventListener("keyup", function (event) {
	if (event.defaultPrevented) {
		return;
	}

	if (event.key == "Delete"){
		// order is important here
		if(window.content.document.hasFocus() && window.content.document.activeElement.tagName == "BODY"){
			// don't allow for double actions for a single event
			event.preventDefault();
			if(window.content.location.href.indexOf("zoho.com") == -1){
				gBrowser.removeCurrentTab();
			}
		}
	}
}, true);
