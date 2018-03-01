function Checking(){


}
  Checking.prototype.isClicked = function(x, y) {
//CASH CLICK
      var xMaximum = width-52; // righter-most x
      var yMaximum = 475; // bottom-most y
      // return NOT whether the Block WASN'T clicked
      return !(x < width-426|| x > xMaximum || y < 350 || y > yMaximum);

}
