angular.module('pflApp',['ui.router']).config(function($stateProvider, $urlRouterProvider){

$stateProvider
.state('home', {
  url: '/',
  templateUrl: './../templates/home.html',
  controller: 'mainCtrl'
}).state('checkout', {
  url:'/checkout',
  templateUrl: './../templates/checkout.html',
  controller: 'cartCtrl'
}).state('productsPage', {
  url:'/productsPage',
  templateUrl: './../templates/productsPage.html',
  controller: 'mainCtrl'
})

$urlRouterProvider.otherwise('/');

});
