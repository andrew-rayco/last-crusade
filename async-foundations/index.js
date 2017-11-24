var newPromise = new Promise((resolve, reject) => {
  resolve(5)
})

newPromise.then((data) => {
  var p = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('first promise:', data)
      resolve(data * 2)
    }, 3000)
  })
  return p
}).then((data2) => {
  var p = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('data2', data2)
      resolve(data2 + 20)
    }, 3000)
  });
  return p
}).then((data3) => {
  console.log(data3)
})
