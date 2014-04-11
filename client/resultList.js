var resultsData = [
	{
		added: {'date': '2014-03-29', 'time': '20:15:54'},	
		name: 'Apophis',
		number: 99942,
		href: '#',
		discoveryDate: '2004-06-19',
		discoveryObservatory: 'Kitt Peak',
		discoveryAuthors: [
			'R. A. Tucker',
			'D. J. Tholen',
			'F. Bernardi'
		],
		imagePath: 'img-apophis.jpg', // Put the absolute path here!
		imageDesc: 'Image of Apophis',
		description: 'Apophis was named after blablabla...',
		orbitType: 'Aten',
		classification: 'Potentially Hazardous Asteroid',
		semimajorAxis: 0.9221621,
		eccentricity: 0.1911112,
		inclination: 3.33029,
		perihelionArg: 126.43762,
		ascendingNode: 204.21430,
		meanAnomaly: 98.09800
	},
	{	
		added: {'date': '2014-04-02', 'time': '20:13:24'},
		name: 'Apophislolol',
		number: 99942,
		discoveryDate: '2004-06-19',
		discoveryObservatory: 'Kitt Peak',
		discoveryAuthors: [
			'R. A. Tucker',
			'D. J. Tholen',
			'F. Bernardi'
		],
		imagePath: 'img-apophis.jpg',
		imageDesc: 'Image of Apophis',
		description: 'Apophis was named after blablabla...',
		orbitType: 'Aten',
		classification: 'Potentially Hazardous Asteroid',
		semimajorAxis: 0.9221621,
		eccentricity: 0.1911112,
		inclination: 3.33029,
		perihelionArg: 126.43762,
		ascendingNode: 204.21430,
		meanAnomaly: 98.09800
	} 
	
];

Template.resultList.helpers({
	result: function(){
		return Result.find();
	}
});