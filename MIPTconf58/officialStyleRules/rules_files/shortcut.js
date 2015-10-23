document.addEventListener('keydown', function(e){
	//console.log('keydown');
	var keys = [];
	if(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
		if(e.metaKey) {
			keys.push('Cmd');
		}
		if(e.shiftKey) {
			keys.push('Shift');
		}
		if(e.ctrlKey)
		{
			keys.push('Ctrl');
		}
		if(e.altKey) {
			keys.push('Alt');
		}
	}
	if(e.which)
	{
		//console.log(e.which);
		keys.push(String.fromCharCode(e.which));
	}
	//console.log(JSON.stringify(keys));
	//console.log(keys.join('+'));
	if(keys.length >= 2 && keys[keys.length-1] != '') {
		window.postMessage({type: 'dolphin_shortcuts', keys:keys}, '*');
	}
});

window.oncontextmenu = function(event)
{
	var target = event.target.getAttribute('obj_url');
	window.postMessage({type: 'dolphin_clickTarget', target:target}, '*');	
};

