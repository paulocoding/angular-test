var OrdersListController = function($scope, ordersFactory){
  $scope.orders = ordersFactory.getOrders();
  $scope.sendOrder = function(order){
    order.sent = true;
  };
};
OrdersListController.$inject = ["$scope", "ordersFactory"];
angular.module("ordersApp").controller("OrdersListController",OrdersListController);
