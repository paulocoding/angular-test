(function(){
  //
  //  Orders list view controller
  //
  var OrdersListController = function($scope, ordersFactory){
    $scope.orders = ordersFactory.getOrders();
    $scope.sendOrder = function(order){
      order.sent = true;
    };
  };
  OrdersListController.$inject = ["$scope", "ordersFactory"];
  angular.module("ordersApp").controller("OrdersListController",OrdersListController);



  //
  //  Customer view controller
  //

  var customerController = function($scope, $routeParams, customersFactory){
    $scope.customer = customersFactory.getCustomer($routeParams.customerID);
  };
  customerController.$inject = ["$scope", "$routeParams","customersFactory"];
  angular.module("ordersApp").controller("customerController", customerController);


  //
  //  Product view controller
  //

  var productController = function($scope, $routeParams, productsFactory){
    $scope.product = productsFactory.getProduct($routeParams.productID);
  };
  productController.$inject = ["$scope", "$routeParams","productsFactory"];
  angular.module("ordersApp").controller("productController", productController);
}());
