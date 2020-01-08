const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      // calls alert with each element passed
      // calls alert properly on object values
      // returns the original collection
      if (Array.isArray(collection) == true) {
        for (const element of collection){
          cb(element, collection)
        }
      } else {
        for (let key in collection) {
          cb(key, collection[key], collection)
        }
      }
      return collection;
    },

    map: function() {
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
