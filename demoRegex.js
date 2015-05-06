//kyle lowtharp
//demoRegex
//CMP237 final

var myValues = [$1.25, .25, $.25, $1.25.25, $1.2523, $13431241425];

var regex = /\w/[1.25]/

myValues.forEach(function(value) {
	if (regex.test(value))
	print(value);
})
