
var LoginController = function($window, $scope, $rootScope, $location, loginService, $interval, $document)
{
    $scope.loginForm = {username:"admin", password:"admin"}; //todo:remove the hard coded login values
    $scope.nowTimestamp = new Date();
    $scope.validationErrorMessage = "";

    // reset the logged in user
    $rootScope.user = null;
    $rootScope.users = [];


    var timestampPromise = $interval(function(){
        $scope.nowTimestamp = new Date();
    }, 1000);

    $scope.selectLoginUser = function(event, user){

        var cards = event.currentTarget.parentElement.childNodes;
        for (var i = 0; i < cards.length; i++)
        {
            var card = cards[i];
            card.className = "";
            if( card.style !== undefined )
            {
                card.style.display = "none";
            }

        }

        event.currentTarget.className = "selected md-whiteframe-z2";
        event.currentTarget.style.display = "block";
    };


    $scope.cancelLogin = function(event){

        event.cancelBubble = true;
        event.preventDefault();
        var cards = document.querySelectorAll('#loginUsers > md-card');
        for (var i = 0; i < cards.length; i++)
        {
            var card = cards[i];
            card.className = "";
            if( card.style !== undefined )
            {
                card.style.display = "block";
            }

        }
    };

    $scope.loadUserList = function()
    {
        var userListSrv = loginService.listUsers();
        userListSrv.then(
            function(response, status, headers, config)
            {
                $rootScope.users = response.data;
            },
            function(response){
                // todo: error handler
                $scope.message = response.data;
            }
        );
    };

    $scope.handleLogin = function(event, username){
        //$scope.validationErrorMessage = "Event Caught, Service not implemented yet";
        //console.log("username=" +event.detail.username);
        //console.log("password=" +event.detail.password);

        var loginQ = loginService.login(username, this.loginForm.password);
        loginQ.then(
            function(response, status, headers, config)
            {
                //$rootScope.username = $scope.loginForm.username;

                $rootScope.user = response.data;
                $location.path('/home');
                //$location.path('/photos');

            }, function(reason){
                // todo: error handler
                $scope.message = reason;
            }
        );


    };


    // On startup, load users
    $scope.$on('$viewContentLoaded', function() {
      $scope.loadUserList();
    });
};

LoginController.$inject = ['$window','$scope', '$rootScope', '$location', 'loginService', '$interval', '$document'];
module.exports = LoginController;
