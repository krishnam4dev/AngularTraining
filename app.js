(function(){
	var app=angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.setTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	var gems = [
	{
		name: 'Dodecahedron',
		price: 12.95,
		description: 'Dode gem description',
		canPurchase: true,
		images:[
		{
			full:'images/gem-01-full.jpg',
			thumb:'images/gem-01-thumb.jpg'
		},
		{
			full:'dodecahedron-02-full.jpg',
			thumb:'dodecahedron-03-thumb.jpg'
		}],
		reviews:[
		{
			stars: 5,
			body:"I love this product!",
			author: "joe@thomas.com"
		},
		{
			stars: 1,
			body:"This product sucks",
			author: "tim@hater.com"
		}]
		
	},
	{
		name: "Pentagonal Gem",
		price: 5.95,
		description: "Pent gem details. Given new deatils.",
		canPurchase: true,
		images:[
		{
			full:'images/gem-02-full.jpg',
			thumb:'images/gem-02-thumb.jpg'
		},
		{
			full:'dodecahedron-02-full.jpg',
			thumb:'dodecahedron-02-thumb.jpg'
		}]
	},
	{
		name: "Hexagonal Gem",
		price: 15.95,
		description: "Hex gem details. Given new deatils.",
		canPurchase: true,
		images:[
		{
			full:'images/gem-03-full.jpg',
			thumb:'images/gem-03-thumb.jpg'
		},
		{
			full:'gem-01-full.jpg',
			thumb:'dodecahedron-01-thumb.jpg'
		}]
	}
	];

})();