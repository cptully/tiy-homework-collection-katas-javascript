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

/*
// Modify and return the given HashMap as follows: if the key "a" has a value,
// set the key "b" to have that value, and set the key "a" to have the value "".
// Basically "b" is a bully, taking the value of "a".
function mapBully(hash) {
    if (hash.hasOwnProperty("a")) {
        if (hash.hasOwnProperty("b")) {
            hash.set("b", hash.get("a"));
            hash.set("a", "");
        } else {
            hash.put("b", hash.get("a"));
            hash.set("a", "");
        }
    }
    return hash;
}

function printHash(hash) {
    var buffer = ""
    for (var x in hash)
    {
        buffer = buffer + "{"+ x + hash[x] + "}";
    }

    return buffer;
}

//mapBully({"b": "dirt", "a": "candy"}) -> {"b": "candy", "a": ""}
//mapBully({"a": "candy"}) -> {"b": "candy", "a": ""}
//mapBully({"b": "carrot", "c": "meh", "a": "candy"}) -> {"b": "candy", "c": "meh", "a": ""}
console.log("\n\n");
var hash = new Map();
hash.set("b", "dirt");
hash.set("a", "candy");
console.log("mapBully(%s) -> ", printHash(hash));
var newHash = mapBully(hash);
console.log("%s", newHash.toString());
var hash = new Map();
hash.set("a", "candy");
console.log("mapBully(%s) -> ", hash.toString());
newHash = mapBully(hash);
console.log("%s", newHash.toString());
hash.set("b", "carrot");
hash.set("a", "candy");
hash.set("c", "meh");
console.log("mapBully(%s) -> ", hash.toString());
newHash = mapBully(hash);
console.log("%s", newHash.toString());
hash.set("a", "");
hash.set("c", "meh");
hash.set("b", "carrot");
console.log("mapBully(%s) -> ", hash.toString());
newHash = mapBully(hash);
console.log("%s", newHash.toString());
hash.set("a", "candy");
hash.set("c", "meh");
hash.set("b", "carrot");
hash.set("d", "cars");
console.log("mapBully(%s) -> ", hash.toString());
newHash = mapBully(hash);
console.log("%s", newHash.toString());
hash.set("c", "meh");
hash.set("b", "carrot");
console.log("mapBully(%s) -> ", hash.toString());
newHash = mapBully(hash);
console.log("%s", newHash.toString());

/*
//mapShare({"b": "bbb", "c": "ccc", "a": "aaa"}) -> {"b": "aaa", "a": "aaa"}
//mapShare({"b": "xyz", "c": "ccc"}) -> {"b": "xyz"}
//mapShare({"d": "hi", "c": "meh", "a": "aaa"}) -> {"d": "hi", "b": "aaa", "a": "aaa"}
console.log("\n\n");
hash.put("b", "bbb");
hash.put("a", "aaa");
hash.put("c", "ccc");
console.log("mapShare(%s) -> ", hash.toString());
newHash = mapShare(hash);
console.log("%s", newHash.toString());
hash = [];
hash.put("b", "xyz");
hash.put("c", "ccc");
console.log("mapShare(%s) -> ", hash.toString());
newHash = mapShare(hash);
console.log("%s", newHash.toString());
hash = [];
hash.put("a", "aaa");
hash.put("c", "meh");
hash.put("d", "hi");
console.log("mapShare(%s) -> ", hash.toString());
newHash = mapShare(hash);
console.log("%s", newHash.toString());
hash = [];
hash.put("a", "");
hash.put("c", "meh");
hash.put("b", "carrot");
console.log("mapShare(%s) -> ", hash.toString());
newHash = mapShare(hash);
console.log("%s", newHash.toString());
hash = [];
hash.put("a", "candy");
hash.put("c", "meh");
hash.put("b", "carrot");
hash.put("d", "cars");
console.log("mapShare(%s) -> ", hash.toString());
newHash = mapShare(hash);
console.log("%s", newHash.toString());
hash = [];
hash.put("c", "meh");
hash.put("b", "carrot");
console.log("mapShare(%s) -> ", hash.toString());
newHash = mapShare(hash);
console.log("%s", newHash.toString());

// mapAB({"b": "There", "a": "Hi"}) -> {"b": "There", "a": "Hi", "ab": "HiThere"}
// mapAB({"a": "Hi"}) -> {"a": "Hi"}
// mapAB({"b": "There"}) -> {"b": "There"}
console.log("\n\n");
hash = [];
hash.put("b", "There");
hash.put("a", "Hi");
console.log("mapAB(%s) -> ", hash.toString());
newHash = mapAB(hash);
console.log("%s", newHash.toString());
hash = [];
hash.put("a", "Hi");
console.log("mapAB(%s) -> ", hash.toString());
newHash = mapAB(hash);
console.log("%s", newHash.toString());
hash = [];
hash.put("b", "There");
console.log("mapAB(%s) -> ", hash.toString());
newHash = mapAB(hash);
console.log("%s", newHash.toString());
hash = [];
hash.put("b", "There");
hash.put("a", "Hi");
hash.put("c", "Play");
console.log("mapAB(%s) -> ", hash.toString());
newHash = mapAB(hash);
console.log("%s", newHash.toString());
hash = [];
hash.put("b", " - ");
hash.put("a", "Hi");
console.log("mapAB(%s) -> ", hash.toString());
newHash = mapAB(hash);
console.log("%s", newHash.toString());
hash = [];
hash.put("b", "There");
hash.put("d", "Hi");
console.log("mapAB(%s) -> ", hash.toString());
newHash = mapAB(hash);
console.log("%s", newHash.toString());

// wordLen(["a", "bb", "a", "bb"]) -> {"a": 1, "bb": 2}
// wordLen(["this", "and", "that", "and"]) -> {"that": 4, "this": 4, "and": 3}
// wordLen(["code", "code", "code", "bug"]) -> {"bug": 3, "code": 4}
console.log("\n\n");
ArrayList<String> wordList = new ArrayList<>();
wordList.add("a", "bb", "a", "bb"));
console.log("wordLen(%s) -> ", wordList.toString());
newHash = wordLen(wordList);
console.log("%s", newHash.toString());
wordList = [];
wordList.add("this", "and", "that", "and"));
console.log("wordLen(%s) -> ", wordList.toString());
newHash = wordLen(wordList);
console.log("%s", newHash.toString());
wordList = [];
wordList.add("code", "code", "code", "bug"));
console.log("wordLen(%s) -> ", wordList.toString());
newHash = wordLen(wordList);
console.log("%s", newHash.toString());
wordList = [];
wordList.add("this", "and", "that", "sand castle", "pork"));
console.log("wordLen(%s) -> ", wordList.toString());
newHash = wordLen(wordList);
console.log("%s", newHash.toString());
wordList = [];
wordList.add("science", "mathematics", "engineering", "english"));
console.log("wordLen(%s) -> ", wordList.toString());
newHash = wordLen(wordList);
console.log("%s", newHash.toString());
wordList = [];
console.log("wordLen(%s) -> ", wordList.toString());
newHash = wordLen(wordList);
console.log("%s", newHash.toString());

// indexWords(["aardvark", "apple", "zamboni", "phone"]) -> {"a": ["aardvark", "apple"], "p": ["phone"], "z": ["zamboni"]}
// indexWords(["elephant"]) -> {"e": ["elephant"]}
// indexWords([]) -> {}
// indexWords([""]) -> {}
console.log("\n\n");
wordList = [];
wordList.add("aardvark", "apple", "zamboni", "phone"));
console.log("indexWords(%s) -> ", wordList.toString());
HashMap<String, ArrayList<String>> indexHash;
indexHash = indexWords(wordList);
console.log("%s", indexHash.toString());
wordList = [];
wordList.add("elephant");
console.log("indexWords(%s) -> ", wordList.toString());
indexHash = indexWords(wordList);
console.log("%s", indexHash.toString());
wordList = [];
console.log("indexWords(%s) -> ", wordList.toString());
indexHash = indexWords(wordList);
console.log("%s", indexHash.toString());
wordList = [];
wordList.add("");
console.log("indexWords(%s) -> ", wordList.toString());
indexHash = indexWords(wordList);
console.log("%s", indexHash.toString());
wordList = [];
wordList.add("presystematic", "pleione", "senatorship", "parietes", "bimane",
"chivvying", "halafian", "carat", "unallegorical", "clubman", "bisulphite", "preinvestigating",
"marie", "theritas", "counterchanging"));
console.log("indexWords(%s) -> \n", wordList.toString());
indexHash = indexWords(wordList);
console.log("%s", indexHash.toString());
wordList = [];
wordList.add("superphysiposed", "kursk", "zophori", "replating", "meteoritic",
"finished", "talaria", "befogging", "cyclonal", "overpuissant", "unthematic",
"realpolitik", "direct", "reincline", "preoblige", "nontanning", "cheeseboard",
"slouchily", "useable", "pierre"));
console.log("indexWords(%s) -> \n", wordList.toString());
indexHash = indexWords(wordList);
console.log("%s", indexHash.toString());
wordList = [];
wordList.add("Tiger", "Emu", "goat", "chicken", "penguin", "dog", "cat", "parakeet",
"mouse", "moose", "angel fish", "trout", "donkey", "horse", "mule", "stork", "crane", "coy",
"panda", "rat", "raccoon", "ferret", "wolf", "fox", "mongoose", "merekat", "bandicoot"));
console.log("indexWords(%s) -> \n", wordList.toString());
indexHash = indexWords(wordList);
console.log("%s", indexHash.toString());
*/
/**
* Created by chris on 8/13/16.
*/
