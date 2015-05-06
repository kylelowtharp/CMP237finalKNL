//kyle lowtharp
//CMP237 final
//array.js question

var values = [{ kyle: 21, troy: 22, lisa: 26}, {kyle: 22, troy: 27, lisa: 25}];

print(JSON.stringify(values.filter(function(entry) {
	if (entry.kyle == 21)
		return this;
})))
