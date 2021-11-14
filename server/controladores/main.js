var ngApp = angular.module('QuickstartersApp', []);
  
 ngApp.controller('myController', function ($scope, $http) {

    $scope.msg = '¡BIENVENIDO A QUICKSTARTERS INMOBILIARIA! ';

    $scope.getData = function () {
                   return 'qubernet';
                }
                $scope.createTodo = function () {
                    $http
                    .post("http://localhost:4000/upload", $scope.formData)
                    .then(function successCallback(response)  {
                     // $scope.formData = {};
                      $scope.todos = response.data;
                      console.log(response);
                    })
                   
                  };
 })


 onload = function () {
             document.getElementById('lbtnTest').onclick = function () {
                 alert("hola")
                 var appElement = document.querySelector('[ng-controller=myController]');
  
                var $scope = angular.element(appElement).scope();
                 
             console.log($scope.
