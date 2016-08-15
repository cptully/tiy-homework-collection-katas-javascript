/**
* Created by chris on 8/13/16.
*/
var ints = [];


// Given an ArrayList of Integers, return true if the ArrayList is length 1
// or more, and the first element and the last element are equal.
function sameFirstLast6(ints) {
    return (ints[0] == 6) || (ints[ints.length - 1] == 6);
}



//first last 6
ints.push(1);
ints.push(2);
ints.push(6);
var result = sameFirstLast6(ints);
console.log("sameFirstLast6(%s) -> %s", ints, result);
ints.push(0, 6);
ints.pop();
ints.push(3);
result = sameFirstLast6(ints);
console.log("sameFirstLast6(%s) -> %s", ints, result);
ints.push(0, 13);
result = sameFirstLast6(ints);
console.log("sameFirstLast6(%s) -> %s", ints, result);
ints = [];
ints.push(6);
result = sameFirstLast6(ints);
console.log("sameFirstLast6(%s) -> %s", ints, result);
ints.push(0, 1);
result = sameFirstLast6(ints);
console.log("sameFirstLast6(%s) -> %s", ints, result);
ints.push(7);
result = sameFirstLast6(ints);
console.log("sameFirstLast6(%s) -> %s", ints, result);


// Given an ArrayList of ints, return true if 6 appears as either the first or
// last element in the ArrayList. The ArrayList will be length 1 or more.
function sameFirstLast(ints) {
    return ints[0] === ints[ints.length - 1];
}

console.log("\n\n");
ints =[];
ints.push(1);
ints.push(2);
ints.push(3);
result = sameFirstLast(ints);
console.log("sameFirstLast(%s) -> %s", ints, result);
ints.push(1);
result = sameFirstLast(ints);
console.log("sameFirstLast(%s) -> %s", ints, result);
ints.splice(2, 1);
result = sameFirstLast(ints);
console.log("sameFirstLast(%s) -> %s", ints, result);
ints.push(5, 6, 7);
result = sameFirstLast(ints);
console.log("sameFirstLast(%s) -> %s", ints, result);
ints.unshift(5);
result = sameFirstLast(ints);
console.log("sameFirstLast(%s) -> %s", ints, result);
ints.push(5);
result = sameFirstLast(ints);
console.log("sameFirstLast(%s) -> %s", ints, result);

// Given an ArrayList of Integers length 3, return an ArrayList with the elements
// "rotated left" so [1, 2, 3] yields [2, 3, 1].
function rotateLeft3(ints) {
    var temp = ints.shift();
    ints.push(temp);
    return ints;
}

// Given an ArrayList of Integers length 3, return an ArrayList with the elements
// "rotated left" so [1, 2, 3] yields [2, 3, 1].
//function rotateLeft(ints) {
//    Collections.rotate(ints, ints.length - 1);
//}
console.log("\n\n");
ints = [];
ints.push(1, 2, 3);
console.log("rotateLeft3(%s)", ints);
rotateLeft3(ints);
console.log("-> %s", ints);
ints = [];
ints.push(5, 11, 9);
console.log("rotateLeft3(%s)", ints);
rotateLeft3(ints);
console.log(" -> %s", ints);
ints = [];
ints.push(7, 0, 0);
console.log("rotateLeft3(%s)", ints);
rotateLeft3(ints);
console.log(" -> %s", ints);
ints = [];
ints.push(6, 3, 9);
console.log("rotateLeft3(%s)", ints);
rotateLeft3(ints);
console.log(" -> %s", ints);
ints = [];
ints.push(77, 55, 2, 7);
console.log("rotateLeft3(%s)", ints);
rotateLeft3(ints);
console.log(" -> %s", ints);
ints = [];
ints.push(1000, 3000, 5000, 8000, 9000);
console.log("rotateLeft3(%s)", ints);
rotateLeft3(ints);
console.log(" -> %s", ints);

function reverseArray(ints){
    ints.reverse();
}

console.log("\n\n");
ints = [];
ints.push(1, 2, 3);
console.log("reverse(%s)", ints);
reverseArray(ints);
console.log(" -> %s", ints);
ints = [];
ints.push(5, 11, 9);
console.log("reverse(%s)", ints);
reverseArray(ints);
console.log(" -> %s", ints);
ints = [];
ints.push(0, 0, 7);
console.log("reverse(%s)", ints);
reverseArray(ints);
console.log(" -> %s", ints);
ints = [];
ints.push(1, 2, 3, 4, 5);
console.log("reverse(%s)", ints);
reverseArray(ints);
console.log(" -> %s", ints);
ints = [];
ints.push(1, 2, 3, 4, 5, 6);
console.log("reverse(%s)", ints);
reverseArray(ints);
console.log(" -> %s", ints);
ints = [];
ints.push(11, 12);
console.log("reverse(%s)", ints);
reverseArray(ints);
console.log(" -> %s", ints);
ints = [];
ints.push(11);
console.log("reverse(%s)", ints);
reverseArray(ints);
console.log(" -> %s", ints);
ints = [];
console.log("reverse(%s)", ints);
reverseArray(ints);
console.log(" -> %s", ints);

// Given an ArrayList of Integers of at least length 2, return the sum of the
// first elements in the ArrayList and the second from last element. If the
// ArrayList length is less than 2, just sum up the elements that exist,
// returning 0 if the array is length 0.
function sumFirstPenultimate(ints) {
    if (ints.length >= 2) {
        return ints[0] + ints[ints.length - 2];
    } else if (ints.length == 1) {
        return ints[0];
    }
    return 0;
}
// sumFirstPenultimate([1, 2, 3]) -> 3
// sumFirstPenultimate([1, 1]) -> 2
// sumFirstPenultimate([1, 1, 1, 1]) -> 2
// sumFirstPenultimate([1, 2, 3, 4]) -> 4
console.log("\n\n");
ints = [];
ints.push(1, 2, 3);
var number  = sumFirstPenultimate(ints);
console.log("sumFirstPenultimate(%s) -> %s", ints, number);
ints = [];
ints.push(1, 1);
number  = sumFirstPenultimate(ints);
console.log("sumFirstPenultimate(%s) -> %s", ints, number);
ints = [];
ints.push(1, 1, 1, 1);
number  = sumFirstPenultimate(ints);
console.log("sumFirstPenultimate(%s) -> %s", ints, number);
ints = [];
ints.push(1, 2, 3, 4);
number  = sumFirstPenultimate(ints);
console.log("sumFirstPenultimate(%s) -> %s", ints, number);
ints = [];
ints.push(1);
number  = sumFirstPenultimate(ints);
console.log("sumFirstPenultimate(%s) -> %s", ints, number);
ints = [];
number  = sumFirstPenultimate(ints);
console.log("sumFirstPenultimate(%s) -> %s", ints, number);


// Modify and return the given HashMap as follows: if the key "a" has a value,
// set the key "b" to have that value, and set the key "a" to have the value "".
// Basically "b" is a bully, taking the value of "a".
// **** Implemented with Map()
function mapBullyMap(hash) {
    //var newHash = new Map();
    var newHash = hash;

    if (newHash.has("a")) {
        newHash.set("b", hash.get("a"));
        newHash.set("a", "");
    }
    if (newHash.has("c")) {
        newHash.delete("c");
    }


    return newHash;
}

//mapBullyMap({"b": "dirt", "a": "candy"}) -> {"b": "candy", "a": ""}
//mapBullyMap({"a": "candy"}) -> {"b": "candy", "a": ""}
//mapBullyMap({"b": "carrot", "c": "meh", "a": "candy"}) -> {"b": "candy", "c": "meh", "a": ""}
console.log("\n\n");
var hashMap = new Map();
hashMap.set("b", "dirt");
hashMap.set("a", "candy");
console.log("mapBullyMap(", hashMap, ") -> ");
var newHash = mapBullyMap(hashMap);
console.log(newHash);
hashMap.clear();
hashMap.set("a", "candy");
console.log("mapBullyMap(", hashMap, ") -> ");
newHash = mapBullyMap(hashMap);
console.log(newHash);
hashMap.set("b", "carrot");
hashMap.set("a", "candy");
hashMap.set("c", "meh");
console.log("mapBullyMap(", hashMap, ") -> ");
newHash = mapBullyMap(hashMap);
console.log(newHash);
hashMap.set("a", "");
hashMap.set("c", "meh");
hashMap.set("b", "carrot");
console.log("mapBullyMap(", hashMap, ") -> ");
newHash = mapBullyMap(hashMap);
console.log(newHash);
hashMap.set("a", "candy");
hashMap.set("c", "meh");
hashMap.set("b", "carrot");
hashMap.set("d", "cars");
console.log("mapBullyMap(", hashMap, ") -> ");
newHash = mapBullyMap(hashMap);
console.log(newHash);
hashMap.set("c", "meh");
hashMap.set("b", "carrot");
console.log("mapBullyMap(", hashMap, ") -> ");
newHash = mapBullyMap(hashMap);
console.log(newHash);

// Modify and return the given HashMap as follows: if the key "a" has a value,
// set the key "b" to have that value, and set the key "a" to have the value "".
// Basically "b" is a bully, taking the value of "a".
// **** Implemented with {}
function mapBully(hash) {
    var newHash = hash;

    if (newHash.hasOwnProperty("a")) {
        newHash.b = newHash.a;
        newHash.a = ""
    }
    if (newHash.hasOwnProperty("c")) {
        delete newHash.c;
    }
    return newHash;
}

//mapBully({"b": "dirt", "a": "candy"}) -> {"b": "candy", "a": ""}
//mapBully({"a": "candy"}) -> {"b": "candy", "a": ""}
//mapBully({"b": "carrot", "c": "meh", "a": "candy"}) -> {"b": "candy", "c": "meh", "a": ""}
console.log("\n\n");
var hash = {"b": "dirt", "a": "candy"};
console.log("mapBully(", hash, ") -> ");
var newHash = mapBully(hash);
console.log(newHash);
hash = {"a": "candy"};
console.log("mapBully(", hash, ") -> ");
newHash = mapBully(hash);
console.log(newHash);
hash = {"b": "carrot", "a": "candy", "c": "meh"};
console.log("mapBully(", hash, ") -> ");
newHash = mapBully(hash);
console.log(newHash);
hash = {"b": "carrot", "a": "", "c": "meh"};
console.log("mapBully(", hash, ") -> ");
newHash = mapBully(hash);
console.log(newHash);
hash = {"b": "carrot", "a": "candy", "c": "meh", "d": "cars"};
console.log("mapBully(", hash, ") -> ");
newHash = mapBully(hash);
console.log(newHash);
hash = {"b": "carrot", "c": "meh"};
console.log("mapBully(", hash, ") -> ");
newHash = mapBully(hash);
console.log(newHash);


// Modify and return the given HashMap as follows: if the key "a" has a value,
// set the key "b" to have that same value. In all cases remove the key "c",
// leaving the rest of the map unchanged.
function mapShare(hash) {
    if (hash.hasOwnProperty("a")) {
        hash.b = hash.a;
    }

    if (hash.hasOwnProperty("c")) {
        delete hash.c;
    }
    return hash;
}


//mapShare({"b": "bbb", "c": "ccc", "a": "aaa"}) -> {"b": "aaa", "a": "aaa"}
//mapShare({"b": "xyz", "c": "ccc"}) -> {"b": "xyz"}
//mapShare({"d": "hi", "c": "meh", "a": "aaa"}) -> {"d": "hi", "b": "aaa", "a": "aaa"}
console.log("\n\n");
hash = {"b": "bbb", "a": "aaa", "c": "ccc"};
console.log("mapShare(", hash, ") -> ");
newHash = mapShare(hash);
console.log(newHash);
hash = {"b": "xyz", "c": "ccc"};
console.log("mapShare(", hash, ") -> ");
newHash = mapShare(hash);
console.log(newHash);
hash = {"a": "aaa", "c": "meh", "d": "hi"};
console.log("mapShare(", hash, ") -> ");
newHash = mapShare(hash);
console.log(newHash);
hash = {"a": "", "b": "carrot", "c": "meh"};
console.log("mapShare(", hash, ") -> ");
newHash = mapShare(hash);
console.log(newHash);
hash = {"b": "carrot", "c": "meh", "d": "cars"};
console.log("mapShare(", hash, ") -> ");
newHash = mapShare(hash);
console.log(newHash);
hash = {"b": "carrot", "c": "meh"};
console.log("mapShare(", hash, ") -> ");
newHash = mapShare(hash);
console.log(newHash);

// Modify and return the given HashMap as follows: for this problem the HashMap
// may or may not contain the "a" and "b" keys. If both keys are present,
// append their 2 string values together and store the result under the key "ab".
function mapAB(hash) {
    if (hash.hasOwnProperty("a")) {
        if (hash.hasOwnProperty("b")) {
            hash.ab = hash.a + hash.b;
        }
    }
    return hash;
}

// mapAB({"b": "There", "a": "Hi"}) -> {"b": "There", "a": "Hi", "ab": "HiThere"}
// mapAB({"a": "Hi"}) -> {"a": "Hi"}
// mapAB({"b": "There"}) -> {"b": "There"}
console.log("\n\n");
hash = {"b": "There", "a": "Hi"};
console.log("mapAB(", hash, ") -> ");
newHash = mapAB(hash);
console.log(newHash);
hash = {"a": "Hi"};
console.log("mapAB(", hash, ") -> ");
newHash = mapAB(hash);
console.log(newHash);
hash = {"b": "There"};
console.log("mapAB(", hash, ") -> ");
newHash = mapAB(hash);
console.log(newHash);
hash = {"b": "There", "a": "Hi", "c": "Play"};
console.log("mapAB(", hash, ") -> ");
newHash = mapAB(hash);
console.log(newHash);
hash = {"b": "", "a": "Hi"};
console.log("mapAB(", hash, ") -> ");
newHash = mapAB(hash);
console.log(newHash);
hash = {"b": "There", "d": "Hi"};
console.log("mapAB(", hash, ") -> ");
newHash = mapAB(hash);
console.log(newHash);

// Given an ArrayList of strings, return a HashMap containing a key for every
// different string in the ArrayList, and the value is that string's length.
function wordLen(wordList) {
    var hash = {};

    for (var i = 0; i < wordList.length; i++){
        if (!(hash.hasOwnProperty(wordList[i]))) {
            hash[wordList[i]] = wordList[i].length;
        }
    }
    return hash;
}


//function logMapElements(value, key, map) {
//    console.log("m[" + key + "] = " + value);
//}
//new Map([["foo", 3], ["bar", {}], ["baz", undefined]]).forEach(logMapElements);
// logs:
// "m[foo] = 3"
// "m[bar] = [object Object]"
// "m[baz] = undefined"


// wordLen(["a", "bb", "a", "bb"]) -> {"a": 1, "bb": 2}
// wordLen(["this", "and", "that", "and"]) -> {"that": 4, "this": 4, "and": 3}
// wordLen(["code", "code", "code", "bug"]) -> {"bug": 3, "code": 4}
console.log("\n\n");
var wordList = ["a", "bb", "a", "bb"];
console.log("wordLen(", wordList, ") -> ");
newHash = wordLen(wordList);
console.log(newHash);
wordList = ["this", "and", "that", "and"];
console.log("wordLen(", wordList, ") -> ");
newHash = wordLen(wordList);
console.log(newHash);
wordList = ["code", "code", "code", "bug"];
console.log("wordLen(", wordList, ") -> ");
newHash = wordLen(wordList);
console.log(newHash);
wordList = ["this", "and", "that", "sand castle", "pork"];
console.log("wordLen(", wordList, ") -> ");
newHash = wordLen(wordList);
console.log(newHash);
wordList = ["science", "mathematics", "engineering", "english"];
console.log("wordLen(", wordList, ") -> ");
newHash = wordLen(wordList);
console.log(newHash);
wordList = [];
console.log("wordLen(", wordList, ") -> ");
newHash = wordLen(wordList);
console.log(newHash);


// indexWords(["aardvark", "apple", "zamboni", "phone"]) -> {"a": ["aardvark", "apple"], "p": ["phone"], "z": ["zamboni"]}
// indexWords(["elephant"]) -> {"e": ["elephant"]}
// indexWords([]) -> {}
// indexWords([""]) -> {}

// Given an ArrayList of words, return a HashMap> containing a keys for every
// word's first letter. The value for the key will be an ArrayList of all
// words in the list that start with that letter. An empty string has no first
// letter so don't add a key for it.
function indexWords(wordList) {
    var hash = {};
    var list = [];
    var index;

    for (var i = 0; i < wordList.length; i++) {
        if (wordList[i].length != 0) {
            index = wordList[i].substring(0, 1);

            if (hash.hasOwnProperty(index)) {
                list = hash[index];
                list.push(wordList[i]);
            } else {
                list = [wordList[i]];
                hash[index] = list;
            }
        }
    }
    return hash;
}
console.log("\n\n");
wordList = ["aardvark", "apple", "zamboni", "phone"];
console.log("indexWords(%s) -> ", wordList.toString());
var indexHash = indexWords(wordList);
console.log(indexHash);
wordList = ["elephant"];
console.log("indexWords(%s) -> ", wordList.toString());
indexHash = indexWords(wordList);
console.log(indexHash);
wordList = [];
console.log("indexWords(%s) -> ", wordList.toString());
indexHash = indexWords(wordList);
console.log(indexHash);
wordList = [""];
console.log("indexWords(%s) -> ", wordList.toString());
indexHash = indexWords(wordList);
console.log(indexHash);
wordList = ["presystematic", "pleione", "senatorship", "parietes", "bimane",
"chivvying", "halafian", "carat", "unallegorical", "clubman", "bisulphite", "preinvestigating",
"marie", "theritas", "counterchanging"];
console.log("indexWords(%s) -> \n", wordList.toString());
indexHash = indexWords(wordList);
console.log(indexHash);
wordList = ["superphysiposed", "kursk", "zophori", "replating", "meteoritic",
"finished", "talaria", "befogging", "cyclonal", "overpuissant", "unthematic",
"realpolitik", "direct", "reincline", "preoblige", "nontanning", "cheeseboard",
"slouchily", "useable", "pierre"];
console.log("indexWords(%s) -> \n", wordList.toString());
indexHash = indexWords(wordList);
console.log(indexHash);
wordList = ["Tiger", "Emu", "goat", "chicken", "penguin", "dog", "cat", "parakeet",
"mouse", "moose", "angel fish", "trout", "donkey", "horse", "mule", "stork", "crane", "coy",
"panda", "rat", "raccoon", "ferret", "wolf", "fox", "mongoose", "merekat", "bandicoot"];
console.log("indexWords(%s) -> \n", wordList.toString());
indexHash = indexWords(wordList);
console.log(indexHash);
