var OrdersListController = function($scope, ordersFactory){
  $scope.orders = ordersFactory.getOrders();
  $scope.sendOrder = function(order){
    order.sent = true;
  };
};
OrdersListController.$inject = ["$scope", "ordersFactory"];
angular.module("ordersApp").controller("OrdersListController",OrdersListController);


var customerController = function($scope, $routeParams, customersFactory){
  $scope.customer = customersFactory.getCustomer($routeParams.customerID);
};
customerController.$inject = ["$scope", "$routeParams","customersFactory"];
angular.module("ordersApp").controller("customerController", customerController);
