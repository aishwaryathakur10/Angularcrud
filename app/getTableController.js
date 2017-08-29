angular.module("bookApp").controller('getTableController' ,function ($scope ,$http) {
            // $scope.bookArray = [];
            
                 $http.get("http://localhost:4000/api/books")
                .then(function(response)
                {
                $scope.bookArray=response.data;
            //  bookService.gtB();
                })
            

    $scope.deleterecord = function (id) {     
        $http.delete('http://localhost:4000/api/book/' + id).success(function (data) {
            alert("Deleted successfully!!");
            $http.get('http://localhost:4000/api/books').success(function (data) {
          // window.location.href('/#/getbooks')           



                    //  $scope.bdk = data;                   
            });
        // }).error(function (data) {
        //     $scope.error = "An error has occured while deleting! " + data;                
        // });
    });
    }


});