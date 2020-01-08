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
      let newArray = [];
      if (Array.isArray(collection)===true) {
        for (const element of collection) {
          let newVal = cb(element, collection)
          newArray.push(newVal)
        }
      } else {
        for (let key in collection) {
          let newVal = cb(collection[key])
          newArray.push(newVal)
        }
      }
      return newArray;
    },

    reduce: function(c = [], callback = () => {}, acc) {
			let collection = c.slice(0)

			if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}

			let len = collection.length;

			for (let i = 0; i < len; i++) {
				acc = callback(acc, collection[i], collection)
			}
			return acc;
		},

    find: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      for (let idx = 0; idx < collection.length; idx++)
        if (predicate(collection[idx])) return collection[idx]

      return undefined
    },
    filter: function() {

    },

    size: function() {
      
    },
    
    first: function() {

    },

    last: function() {

    },

    compact: function() {

    },

    sortBy: function() {

    },

    flatten: function() {

    },

    uniq: function() {

    },

    keys: function() {

    },

    values: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
