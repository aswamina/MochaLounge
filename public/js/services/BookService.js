(function () {

    var bookService = function ($http) {

        var getBooks = function () {
            return $http.get('/getBooks').then(function (response) {
                return response.data;
            });
        };

        var getBooksOnSale = function () {
            return $http.get('/getBooksOnSale').then(function (response) {
                return response.data;
            });
        };

        return {
            getBooks: getBooks,
            getBooksOnSale: getBooksOnSale
        };
    };

    var module = angular.module('BookClub');
    module.factory('BookService', bookService);

}());