angular.module('pflApp').controller('mainCtrl', function($scope,mainServ){
  $scope.productName;
  var template = [];
  $scope.needInfo;
  $scope.products;
  $scope.orderProducts = "";
  $scope.count = 0;




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
      // console.log(template);
      $scope.needInfo = template;
      templateId = template[0].productID;
      console.log(template);
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






  $scope.addToCart = function(id,name,q){
    var q = 0;
    var invoiceOrder =  [{
              productID: id,
              quantity: q,
              productName: name,
              productionDays: 4
          }];
    $scope.count++;
    if (q === undefined) {
      return alert("Please choose a quantity");
    }


    console.log(invoiceOrder);
    console.log($scope.orderProducts);

};

$scope.postOrder = function(data){
  var data = {
    name:"test",
    email: "test@gmail.com"
  }
  JSON.stringify(data)
  console.log(data);
  mainServ.postProductServ(data)
  .then(function(response){
    console.log(response);
  })
};






});
