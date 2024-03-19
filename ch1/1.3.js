function square(x) {
  return x * x;
}

function sumSquare(x, y) {
  return square(x) + square(y);
}

function f(x, y, z) {
  return x <= y && x <= z
    ? sumSquare(y, z)
    : y <= x && y <= z
    ? sumSquare(x, z)
    : sumSquare(x, y);
}

f(4, 7, 2);

/* 
function f(x, y, z) {
  return condition 
    ? expressionIfTrue 
    : condition 
      ? expressionIfTrue 
      : expressionIfFalse;
}
*/

//alternatively:

function square(x) {
  return x * x;
}

function f(x, y, z) {
  return (
    square(x) +
    square(y) +
    square(z) -
    square(x > y ? (y > z ? z : y) : x > z ? z : x)
  );
}

f(4, 7, 2);
