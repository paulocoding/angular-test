(function(){
	//
	//	Orders Factory
	//
	var ordersFactory = function(){
		var orders = [
	    { orderNo: 1101, productName: 'Clock A45', customer: 'C101', date: '23-12-2015', sent: false},
	    { orderNo: 1102, productName: 'Clock A32', customer: 'C102', date: '22-12-2015', sent: true},
	    { orderNo: 1103, productName: 'Book B12345', customer: 'C105', date: '13-12-2015', sent: false},
	    { orderNo: 1104, productName: 'Tablet E2315', customer: 'C102', date: '02-12-2015', sent: false},
	    { orderNo: 1105, productName: 'Book B12345', customer: 'C104', date: '10-12-2015', sent: false},
	    { orderNo: 1106, productName: 'Phone B14', customer: 'C101', date: '11-12-2015', sent: true},
	    { orderNo: 1107, productName: 'Book B12345', customer: 'C104', date: '14-12-2015', sent: true},
	    { orderNo: 1108, productName: 'Book B12345', customer: 'C103', date: '20-12-2015', sent: false},
	    { orderNo: 1109, productName: 'Phone B14', customer: 'C105', date: '21-12-2015', sent: true},
	    { orderNo: 1110, productName: 'Book B12345', customer: 'C102', date: '26-12-2015', sent: true}
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

}());
