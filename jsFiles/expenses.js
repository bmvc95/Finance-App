function Expenses(){




}
Expenses.prototype.isClicked = function(x, y) {
//ASSETS CLICK
    var xMaximum = (width/2)+374; // righter-most x
    var yMaximum = 850; // bottom-most y
    // return NOT whether the Block WASN'T clicked
    return !(x < (width/2)-374|| x > xMaximum || y < 600 || y > yMaximum)
  }
