(function(){
  //
  //  Navigation controller
  //
  var navController = function($scope){
    $scope.menuActive = [true, false, false];
    $scope.menu = function(item){
      $scope.menuActive = [false, false, false];
      $scope.menuActive[item]=true;
    };

  };
  navController.$inject =['$scope'];
  angular.module('ordersApp').controller('navController',navController);

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
    $scope.newStock = 0;
    $scope.warnings = false;
    $scope.success = false;

    $scope.addStock = function(){
      $scope.warnings = [];
      $scope.success = '';
      var valid = true;
      var newStock = $scope.newStock;
      if (isNaN(parseFloat(newStock)) || !isFinite(newStock) || newStock< 1){
        $scope.warnings.push('You must add 1 or more units.');
        valid = false;
      }
      if (valid){
        productsFactory.addStock($scope.product, newStock);
        $scope.success = newStock+' units added to stock.';
        $scope.newStock = 0;
      }
    };
  };
  productController.$inject = ['$scope', '$routeParams','productsFactory'];
  angular.module('ordersApp').controller('productController', productController);

  //
  //  Customers View Controller
  //
  var customersListController = function($scope, customersFactory){
    $scope.customers = customersFactory.getCustomers();
  };
  customersListController.$inject = ['$scope', 'customersFactory'];
  angular.module('ordersApp').controller('customersListController', customersListController);


  //
  //  Products View Controller
  //
  var productsListController = function($scope, productsFactory){
    $scope.products = productsFactory.getProducts();
  };
  productsListController.$inject = ['$scope', 'productsFactory'];
  angular.module('ordersApp').controller('productsListController', productsListController);

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
      } else if(productsFactory.getProduct($scope.productID).stock<$scope.quantity){
        $scope.warnings.push('We don\'t have that much stock. Currently we have '+ productsFactory.getProduct($scope.productID).stock +' units in stock.');
        valid = false;
      }
      if (!customersFactory.getCustomer($scope.customerID)) {
        $scope.warnings.push('Please select a valid Customer.');
        valid = false;
      }
      if(valid) {
        ordersFactory.addOrder($scope.productID, $scope.quantity, $scope.customerID);
        productsFactory.getProduct($scope.productID).stock-=$scope.quantity;
        $location.path('/');
      }
    };
  };
  newOrderController.$inject = ['$scope', 'productsFactory','customersFactory', 'ordersFactory', '$location'];
  angular.module('ordersApp').controller('newOrderController', newOrderController);

  var newCustomerController = function($scope, customersFactory, $location){
    $scope.id = customersFactory.nextID();
    $scope.name = '';
    $scope.address = '';
    $scope.warnings = false;
    $scope.addCustomer = function(){
      $scope.warnings = [];
      var valid = true;
      var name = $scope.name;
      var address = $scope.address;
      if(name === ''){
        valid = false;
        $scope.warnings.push('Please fill in the Customer\'s name.');
      }
      if(address === ''){
        valid = false;
        $scope.warnings.push('Please fill in the Customer\'s address.');
      }
      if(valid){
        customersFactory.newCustomer(name, address);
        $location.path('/customers/');
      }
    };
  };
  newCustomerController.$inject = ['$scope', 'customersFactory', '$location'];
  angular.module('ordersApp').controller('newCustomerController', newCustomerController);

  var newProductController = function($scope, productsFactory, $location){
    $scope.productID = '';
    $scope.name = '';
    $scope.stock = 1;
    $scope.warnings = false;
    $scope.addProduct = function(){
      $scope.warnings = [];
      var valid = true;
      var productID = $scope.productID;
      var name = $scope.name;
      var stock = $scope.stock;
      if(productID === ''){
        valid = false;
        $scope.warnings.push('Please fill in the Product ID.');
      }
      if(productsFactory.getProduct(productID)){
        valid = false;
        $scope.warnings.push('We already have a product with this ID.');
      }
      if(name === ''){
        valid = false;
        $scope.warnings.push('Please fill in the Product name.');
      }
      if (isNaN(parseFloat(stock)) || !isFinite(stock) || stock< 0){
        $scope.warnings.push('Stock must be 0 or higher.');
        valid = false;
      }

      if(valid){
        productsFactory.newProduct(productID, name, stock);
        $location.path('/products/');
      }

    };
  };
  newProductController.$inject = ['$scope','productsFactory', '$location'];
  angular.module('ordersApp').controller('newProductController', newProductController);

}());
