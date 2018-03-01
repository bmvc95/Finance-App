function Asset(){


}
Asset.prototype.isClicked = function(x, y) {
//ASSETS CLICK
    var xMaximum = (width/2)+374; // righter-most x
    var yMaximum = 600; // bottom-most y
    // return NOT whether the Block WASN'T clicked
    return !(x < (width/2)-374|| x > xMaximum || y < 350 || y > yMaximum)
  }
