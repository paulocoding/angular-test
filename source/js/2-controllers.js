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
  OrdersListController.$inject = ['$scope', 'ordersFactory'];
  angular.module('ordersApp').controller('OrdersListController',OrdersListController);


  //
  //  New Order controller
  //

  var newOrderController = function($scope, productsFactory, customersFactory, ordersFactory, $location){
    $scope.orderNo = ordersFactory.getNextOrderNo();
    $scope.products = productsFactory.getProducts();
    $scope.customers = customersFactory.getCustomers();
    $scope.productID = '';
    $scope.quantity = 1;
    $scope.customerID = '';
    $scope.warnings = false;
    $scope.addOrder = function(){
      // validating form:
      $scope.warnings = [];
      var valid = true;
      if(!productsFactory.getProduct($scope.productID)){
        $scope.warnings.push('Please select a valid product.');
        valid = false;
      }
      if (isNaN(parseFloat($scope.quantity)) || !isFinite($scope.quantity) || $scope.quantity< 0 || $scope.quantity>20) {
        $scope.warnings.push('Quantity must be between 1 and 20.');
        valid = false;
      }
      if (!customersFactory.getCustomer($scope.customerID)) {
        $scope.warnings.push('Please select a valid Customer.');
        valid = false;
      }
      if(valid) {
        ordersFactory.addOrder($scope.productID, $scope.quantity, $scope.customerID);
        $location.path('/');
      }
    };
  };
  newOrderController.$inject = ['$scope', 'productsFactory','customersFactory', 'ordersFactory', '$location'];
  angular.module('ordersApp').controller('newOrderController', newOrderController);


  //
  //  Customer view controller
  //

  var customerController = function($scope, $routeParams, customersFactory){
    $scope.customer = customersFactory.getCustomer($routeParams.customerID);
  };
  customerController.$inject = ['$scope', '$routeParams','customersFactory'];
  angular.module('ordersApp').controller('customerController', customerController);


  //
  //  Product view controller
  //

  var productController = function($scope, $routeParams, productsFactory){
    $scope.product = productsFactory.getProduct($routeParams.productID);
  };
  productController.$inject = ['$scope', '$routeParams','productsFactory'];
  angular.module('ordersApp').controller('productController', productController);


}());
