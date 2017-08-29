// angular.module("bookApp").controller('editController' ,function ($scope ,$http) {
//             $scope.bookArray = [];
//             $http.put("http://localhost:4000/api/books")
//             .then(function mySuccess(response) {
//                 $scope.bookArray = response.data;
//             },  
//              function myError(response) {
//                  $scope.bookArray = response.statusText;
//             });
// });




 angular.module("bookApp").controller('editController' ,function ($scope ,$http,$location, $routeParams) {

$scope.id = $routeParams.id;



 $scope.edit = function () {                 
        $http.get('http://localhost:4000/api/book/'+ $scope.id).success(function (data) {
          //  alert("Updated successfully!!");   
                 
         //    $http.get("http://localhost:4000/api/books").success(function (data) {
            
         $scope.btitle = data.title;
         $scope.byear = data.year;
         $scope.bfav = data.favorite; 
               // ClearFields();  
                             


        }).error(function (data) {
            $scope.error = "An Error has occured while updating! " + data;                
        });
    };

$scope.edit();

// $scope.edit($routeParams.id);

$scope.save = function () {        

    var db= {
        id :parseInt($scope.id),
        title : $scope.btitle,
        year : $scope.byear,
        favorite : $scope.bfav


    } ;       
        $http.put('http://localhost:4000/api/books',db).success(function (data) {
            alert("Updated successfully!!");   
                 
         //    $http.get("http://localhost:4000/api/books").success(function (data) {
            
        // $scope.books = data; 
                //ClearFields();  
            $location.path('/getTable.html');           
        }).error(function (data) {
            $scope.error = "An Error has occured while updating! " + data;                
        });
    };



 });