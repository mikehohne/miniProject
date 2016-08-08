angular.module('pflApp').controller('mainCtrl', function($scope,mainServ){
  // initializing variables

  var template = [];
  $scope.needInfo;
  $scope.products;
  $scope.cart = {};

  // show and hide boolean values here

  $scope.isProducts = true;
  $scope.isCheckedOut = false;
  $scope.hasCheckedOut = false;

// making an api call to api.php

  $scope.getProducts = function(){
    var templateId;
    mainServ.getProductsServ()
    .then(function(response){
      for(var i = 0; i < response.results.data.length; i++){

        // looping to see which products have template fields and pushing them to an array

        if(response.results.data[i].hasTemplate === true){
          template.push(response.results.data[i]);
          response.results.data.splice(i,1);
        }
      }

      $scope.needInfo = template;
      templateId = template[0].productID;
      $scope.products = response.results.data;
    });
    // $scope.getDetailProducts(templateId);
  }

  // getting products that have template fields for customization

  $scope.getDetailProducts = function(id){
    mainServ.detailProductServ(id)
    .then(function(response){
    });
  }

  // adding products to an object


  $scope.addToOrder = function(name,q,id){
    if (q === undefined || q < 0) {
      return alert("Please choose a quantity more than 0");
    }
    $scope.cart[id] = {
      name: name,
      quantity: q,
      productId: id
    };

    // creating a count variable for the cart

    $scope.count = Object.keys($scope.cart).length;
  };



// This would be for making an order with invoiceOrder data above;
  $scope.postOrder = function(data){
    mainServ.postProductServ(data)
    .then(function(response){
    })
  };

  // show and hide functions

  $scope.checkingOut = function(){
    $scope.isCheckedOut = true;
  }

  $scope.checkedOut = function(){
    $scope.orderNumber = 4515872800;
    $scope.hasCheckedOut = true;
    $scope.checkedOut = false;
  }

});
