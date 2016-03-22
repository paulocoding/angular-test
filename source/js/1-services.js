(function(){
	//
	//	Orders Factory
	//
	var ordersFactory = function(){

		//
		// Would be replaced with an http request on a live app
		//

		var orders = [
	    { orderNo: 1101, productID: 'A45', customer: 'C101', date: '23-12-2015', sent: false},
	    { orderNo: 1102, productID: 'A32', customer: 'C102', date: '22-12-2015', sent: true},
	    { orderNo: 1103, productID: 'B12345', customer: 'C105', date: '13-12-2015', sent: false},
	    { orderNo: 1104, productID: 'E2315', customer: 'C102', date: '02-12-2015', sent: false},
	    { orderNo: 1105, productID: 'B12345', customer: 'C104', date: '10-12-2015', sent: false},
	    { orderNo: 1106, productID: 'B14', customer: 'C101', date: '11-12-2015', sent: true},
	    { orderNo: 1107, productID: 'B12345', customer: 'C104', date: '14-12-2015', sent: true},
	    { orderNo: 1108, productID: 'B12345', customer: 'C103', date: '20-12-2015', sent: false},
	    { orderNo: 1109, productID: 'B14', customer: 'C105', date: '21-12-2015', sent: true},
	    { orderNo: 1110, productID: 'B12345', customer: 'C102', date: '26-12-2015', sent: true}
	  ];
		var factory = {};
		factory.getOrders = function(){
			return orders;
		};
		return factory;
	};
	angular.module('ordersApp').factory('ordersFactory', ordersFactory);

	//
	//	customers Factory
	//
	var customersFactory = function(){

		//
		// Would be replaced with an http request on a live app
		//

		var customers = [
			{id: 'C101', name: 'John Doe', address:'132 South Road, Dublin'},
			{id: 'C102', name: 'Jane Lake', address:'14 Middle Road, Dublin'},
			{id: 'C103', name: 'Anna Bella', address:'15A South Lane, Cork'},
			{id: 'C104', name: 'Rick Smith', address:'30 North Road, Dublin'},
			{id: 'C105', name: 'Jake Mick', address:'13 South Lane, Dublin'}
		];

		var factory={};
		factory.getCustomers = function(){
			return customers;
		};
		factory.getCustomer = function(customerid){
			for (var i = 0; i<customers.length; i++){
				if(customers[i].id === customerid){
					return customers[i];
				}
			}
			return false;
		};
		return factory;
	};
	angular.module('ordersApp').factory('customersFactory', customersFactory);

	//
	//	Products Factory
	//
	var productsFactory = function(){

		//
		// Would be replaced with an http request on a live app
		//

		var products = [
			{id: 'A45', name: 'Clock', stock:4},
			{id: 'A32', name: 'Clock', stock:12},
			{id: 'B12345', name: 'Book', stock:2},
			{id: 'B21435', name: 'Book', stock:24},
			{id: 'E2315', name: 'Tablet', stock:62},
			{id: 'B14', name: 'Phone', stock:42}
		];

		var factory={};
		factory.getProducts = function(){
			return products;
		};
		factory.getProduct = function(productid){
			for (var i = 0; i<products.length; i++){
				if(products[i].id === productid){
					return products[i];
				}
			}
			return false;
		};
		return factory;
	};
	angular.module('ordersApp').factory('productsFactory', productsFactory);



}());
