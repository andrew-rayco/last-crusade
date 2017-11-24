var counter = 0
function incCounter() {
  counter++
  console.log("Counter:", counter)
}

function runLater(callback, timeInMs) {
  var p = new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log(timeInMs)
      resolve(callback())
    }, timeInMs)
  });
  return p
}

runLater(incCounter, 1000).then(() => {
  return runLater(incCounter, 2000)
}).then(() => {
  return runLater(incCounter, 3000)
}).then(() => {
  console.log('Finito!')
})
