function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) { 
		return "Nieprawidlowe dane";
	} 
	return a*h/2;
}; 

console.log ( getTriangleArea(10, 6) );
console.log ( getTriangleArea(-3, 6) );
console.log ( getTriangleArea(3, 0) );

var triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(3, 12),
	triangle3Area = getTriangleArea(14, 28);

console.log (triangle1Area, triangle2Area, triangle3Area);
