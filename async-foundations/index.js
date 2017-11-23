function greet (name, formatter) {
  return 'hello, ' + formatter(name)
}

function formatUpperCase(name) {
  return name.toUpperCase()
}

greet('Tim', formatUpperCase)
