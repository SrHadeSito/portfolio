'use strict'

window.addEventListener('load', () => {
	new fullpage('#wrapper', {
	//Navigation
		menu: '#menu',
		navigation: true,
		navigationPosition: 'right',
        anchors: ['index', 'about-us', 'services', 'projects', 'contact'],

	//Scrolling
		autoScrolling: true,
		scrollBar: true,
		loopBottom: true,

	//Design
		verticalCentered: true,
		responsiveSlides: true,
		fitToSectionDelay: 100,

	//Custom selectors
		sectionSelector: '.fp-section',
		slideSelector: '.slide',
		responsiveWidth: 900,
		paddingTop: '0px',
		paddingBottom: '0px'
	});
});