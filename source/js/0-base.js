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
    .when('/new-order/',
    {
      controller: 'newOrderController',
      templateUrl: '/app/views/new-order.html'
    })
    .otherwise(
    {
      redirectTo: '/'
    });
});
