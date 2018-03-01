function goHome(){


}
goHome.prototype.isClicked = function(x, y) {
  var xMaximum = (width/2)+374; // righter-most x
  var yMaximum = height; // bottom-most y
  // return NOT whether the Block WASN'T clicked
  return !(x < (width/2)-374|| x > xMaximum || y < height-250 || y > yMaximum);
          }
