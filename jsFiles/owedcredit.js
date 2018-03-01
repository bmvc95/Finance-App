function owedCredit(){


}
owedCredit.prototype.isClicked = function(x, y) {
//CASH CLICK
    var xMaximum = width-52; // righter-most x
    var yMaximum = 675; // bottom-most y
    // return NOT whether the Block WASN'T clicked
    return !(x < width-426|| x > xMaximum || y < 550 || y > yMaximum);
    image(othersImage1, width-426, 550,374,125);

}
