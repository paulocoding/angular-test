var OrdersListController = function($scope, ordersFactory){
  $scope.orders = ordersFactory.getOrders();
};
OrdersListController.$inject = ["$scope", "ordersFactory"];
angular.module("ordersApp").controller("OrdersListController",OrdersListController);
