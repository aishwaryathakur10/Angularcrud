var app = angular.module("bookApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider 
    .when("/getbooks", {
        templateUrl : "getTable.html" ,
        controller :"getTableController"
        
    })
     .when("/createnew", {
        templateUrl : "create.html",
        controller : "createController"
    })
    .when("/editbook/:id" , {
        templateUrl : "edit.html",
        controller :"editController"
    })
//    .when("/deleteBook", {
//        templateUrl : "getTable.html",
//        controller :"deleteController"
//    })
    // .when("/viewBook", {
    //     templateUrl : "getBook.html",
    //     controller :"getBookController"
    // })
    
    .otherwise({redirectTo:'/getbooks'
})
    });
