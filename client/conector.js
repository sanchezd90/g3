var ngApp = angular.module('QuickstartersApp', []);

ngApp.controller('controlado', function($scope, $http) {

    $scope.mostrarMensaje = function() {


        $http
            .post("http://localhost:4000/", $scope.formData)
            .then(function successCallback(response) {

                $scope.mensaje = response.data;
                console.log(response);
            })



    }


    $scope.RegistrarInmueble = function() {




        $http
            .post("http://localhost:4000/insertarInmueble", $scope.formData)
            .then(function successCallback(response) {

                $scope.message = response.data;
                console.log(response);
            })



    }









})