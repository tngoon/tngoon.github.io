var getIndex = function(key, max) {
	var hash=0;
	if(key.length == 0) return hash;
	for (i=0; i<key.length; i++) {
		hash=(hash<<5) - hash;
		hash=hash + str.charCodeAt(i);
		hash=hash & hash;
	}
	return Math.abs(hash % max);
};

var insert = function (key, value) {
	if(typeof(key) === "undefined") {
		throw("key is undefined")
	}
	var hashIndex = getIndex(key, max);
	storage[hashIndex] = value;
}

var retrieve = function(key) {
	var hashIndex = getIndex(key, max)
	return storage[hashIndex];
}