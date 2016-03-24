angular.module('ordersApp', ['ngRoute']);
angular.module('ordersApp').config(function($routeProvider){
  $routeProvider
    .when('/',
    {
      controller: 'OrdersListController',
      templateUrl: '/app/views/orders.html'
    })
    .when('/customer/:customerID',
    {
      controller: 'customerController',
      templateUrl: '/app/views/customer.html'
    })
    .when('/product/:productID',
    {
      controller: 'productController',
      templateUrl: '/app/views/product.html'
    })
    .when('/customers/',
    {
      controller: 'customersListController',
      templateUrl: '/app/views/customers.html'
    })
    .when('/products/',
    {
      controller: 'productsListController',
      templateUrl: '/app/views/products.html'
    })
    .when('/new-order/',
    {
      controller: 'newOrderController',
      templateUrl: '/app/views/new-order.html'
    })
    .when('/new-customer/',
    {
      controller: 'newCustomerController',
      templateUrl: '/app/views/new-customer.html'
    })
    .when('/new-product/',
    {
      controller: 'newProductController',
      templateUrl: '/app/views/new-product.html'
    })
    .otherwise(
    {
      redirectTo: '/'
    });
});
