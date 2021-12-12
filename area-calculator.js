const calculateRectangleArea = function(length,width) {
  let recArea = length * width
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    return recArea;
  }
}

console.log(calculateRectangleArea(10, 5))
console.log(calculateRectangleArea(1.5, 2.5))
console.log(calculateRectangleArea(10, -5))

const calculateTriangleArea = function(base,height) {
  let triArea = base * height / 2
  if(base < 0 || height < 0) {
    return undefined;
  } else {
    return triArea;
  }
}

console.log(calculateTriangleArea(10, 5));
console.log(calculateTriangleArea(3, 2.5));
console.log(calculateTriangleArea(10, -5));

const calculateCircleArea = function(radius) {
  let cirArea = Math.PI * (radius * radius)
  if(radius < 0) {
    return undefined
  } else {
    return cirArea;
  }
}

console.log(calculateCircleArea(10));
console.log(calculateCircleArea(3.5));
console.log(calculateCircleArea(-1));