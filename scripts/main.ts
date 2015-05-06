requirejs.config({
	baseUrl: 'scripts/js'
	});

requirejs(['app'], (a) => {console.log('loaded', a);});