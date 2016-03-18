var OrdersListController = function($scope){
  $scope.orders = [
    { orderNo: 1101, productName: "Clock A45", client: "C101", date: "23-12-2015"},
    { orderNo: 1102, productName: "Clock A32", client: "C102", date: "22-12-2015"},
    { orderNo: 1103, productName: "Book B12345", client: "C105", date: "13-12-2015"},
    { orderNo: 1104, productName: "Tablet E2315", client: "C102", date: "02-12-2015"},
    { orderNo: 1105, productName: "Book B12345", client: "C104", date: "10-12-2015"},
    { orderNo: 1106, productName: "Phone B14", client: "C101", date: "11-12-2015"},
    { orderNo: 1107, productName: "Book B12345", client: "C104", date: "14-12-2015"},
    { orderNo: 1108, productName: "Book B12345", client: "C103", date: "20-12-2015"},
    { orderNo: 1109, productName: "Phone B14", client: "C105", date: "21-12-2015"},
    { orderNo: 1110, productName: "Book B12345", client: "C102", date: "26-12-2015"}
  ];
};
OrdersListController.$inject = ["$scope"];
angular.module("ordersApp").controller("OrdersListController",OrdersListController);
