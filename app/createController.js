 angular.module("bookApp").controller('createController' ,function ($scope ,$http, $location) {
           $scope.add = function (bk) {        
        $http.post('http://localhost:4000/api/books', bk).success(function (data) {
            alert("Added successfully!!");                
        //    $scope.bk.push(data);
          $location.path('/getTable.html');
            ClearFields();                
        }).error(function (data) {
            $scope.error = "An error has occured while adding! " + data;                
        });
    };
});







