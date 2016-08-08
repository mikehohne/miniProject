angular.module('pflApp').controller('mainCtrl', function($scope,mainServ){
  $scope.productName;
  var template = [];
  $scope.needInfo;
  $scope.products;
  $scope.cart = {};

  $scope.isCheckedOut = false;




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


  $scope.addToOrder = function(id,q){
    if (q === undefined || q < 0) {
      return alert("Please choose a quantity more than 0");
    }
    $scope.cart[id] = {
      quantity: q
    };
  };



  $scope.addTemplateToOrder = function(id,q,userName,email,userPhone){
    if(q === undefined){
      return alert("please put in a ")
    }
    $scope.cart[id] = q;
    $scope.cart.userName = userName;
    $scope.cart.email = email;
    $scope.cart.userPhoner = userPhone;
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

});
