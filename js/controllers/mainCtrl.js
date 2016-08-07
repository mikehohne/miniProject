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
    var invoiceOrder = [{
              itemSequenceNumber: 1,
              productID: id,
              quantity: q,
              productionDays: 4,
              partnerItemReference: "MyItemReferenceID",
              itemFile: "http://www.yourdomain.com/files/printReadyArtwork1.pdf"
          }];
    $scope.count++;
    $scope.orderProducts += name + " " + id;
    invoiceOrder.productID = id;
    if (q === undefined) {
      return alert("Please choose a quantity");
    }
    invoiceOrder.quantity = q;

    console.log(invoiceOrder);
    console.log($scope.orderProducts);

};





});
