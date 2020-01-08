const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      // calls alert with each element passed
      // calls alert properly on object values
      // returns the original collection
      if (Array.isArray(collection) == true) {
        // iterates over a collection of elements
        for (const element of collection) { 
          // passes each element in turn to a callback function
          cb(element, collection)
        }
      } else {
        for (let key in collection) {
          // if collection is a js obj, callback's argument will be value, key, collection
          cb(key, collection[key], collection)
        }
      }
      return collection;
    },

    map: function(collection, cb) {
      // successfully returns a correctly populated array
      // successfully returns a correctly populated array from modified object values
    },

    reduce: function() {
      //returns the correct reduced value when passed an accumulator
      //returns the correct reduced value when not passed an accumulator
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
