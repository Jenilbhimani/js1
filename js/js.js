let test =function(gmail)
{
	var avg ,splitted,part1,part2;
	splitted=gmail.split("@");
	part1=splitted[0];
	avg=part1.length/2;
	part1=part1.substring(0,(part1.length-avg));
	part2=splitted[1];
	return part1+"work@"+part2;
}
console.log(test("jenilbhimani@gmail.com"))

0