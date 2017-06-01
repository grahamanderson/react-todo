list = [
        {fruit: 'pear'},
        {nut: 'pecan'},
        {car: 'chevy'}
        ]

newList = list.map((item) => {
  console.log(item.key)
})


// return state.map((todo) => {





//   var kvArray = [{key: 1, value: 10},
//                  {key: 2, value: 20},
//                  {key: 3, value: 30}];
//
//   var reformattedArray = kvArray.map(function(obj) {
//      var rObj = {};
//      rObj[obj.key] = obj.value;
//      return rObj;
//   });
//
// console.log(reformattedArray)
