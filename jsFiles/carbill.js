function carBill(){


}



carBill.prototype.isClicked = function(x, y) {
//CASH CLICK
    var xMaximum = (width/4)+187; // righter-most x
    var yMaximum = 675; // bottom-most y
    // return NOT whether the Block WASN'T clicked
    return !(x < (width/4)-187|| x > xMaximum || y < 550 || y > yMaximum);

  }
