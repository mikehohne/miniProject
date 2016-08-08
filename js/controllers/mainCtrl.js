angular.module('pflApp').controller('mainCtrl', function($scope,mainServ){
  $scope.productName;
  var template = [];
  $scope.needInfo;
  $scope.products;
  $scope.cart = {};

  $scope.isCheckedOut = false;
  $scope.hasCheckedOut = false;




  $scope.getProducts = function(){
    var templateId;
    mainServ.getProductsServ()
    .then(function(response){
      for(var i = 0; i < response.results.data.length; i++){
        if(response.results.data[i].hasTemplate === true){
          template.push(response.results.data[i]);
          response.results.data.splice(i,1);
        }
      }

      console.log(template);
      // console.log(template);
      $scope.needInfo = template;
      templateId = template[0].productID;
      $scope.products = response.results.data;
    });
    // console.log(templateId);
    // $scope.getDetailProducts(templateId);
  }


  $scope.getDetailProducts = function(id){
    mainServ.detailProductServ(id)
    .then(function(response){
      console.log(response);
    });
  }


  $scope.addToOrder = function(name,q,id){
    if (q === undefined || q < 0) {
      return alert("Please choose a quantity more than 0");
    }
    $scope.cart[name] = {
      name: name,
      quantity: q,
      productId: id
    };
    console.log($scope.cart);
  };



// This would be for making an order with invoiceOrder data above;
  $scope.postOrder = function(data){
    mainServ.postProductServ(data)
    .then(function(response){
    })
  };

  $scope.checkingOut = function(){
    $scope.isCheckedOut = true;
  }

  $scope.hasCheckedOut = function(){
    $scope.orderNumber = 4515872800;
    $scope.hasCheckedOut = true;
  }

});
