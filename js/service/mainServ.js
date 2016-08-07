angular.module('pflApp').service('mainServ',function($http){
  this.getProductsServ = function(){
    return $http({
      method: 'GET',
      url: 'api.php?endPoint=products&method=get'
    }).then(function(response){
      console.log(response);
      return response.data
    })
  };


  this.detailProductServ = function(id){
    return $http({
      method:'GET',
      url: 'api.php?endPoint=products/' + id + '&method=get'
    }).then(function(response){
      return response.data.results;
    })
  }

  this.postProductServ = function(){
    return $http({
      method: 'GET',
      url: 'api.php?endPoint=orders/&method=post'
    }).then(function(response){
      console.log(response);
    });
  }
});
