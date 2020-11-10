/* eslint-disable @typescript-eslint/no-var-requires */
var fs = require('fs')
var p = JSON.parse(fs.readFileSync('package.json'))
var v = JSON.parse(fs.readFileSync('npm-shrinkwrap.json'))

updateDependencies(p.dependencies, v.dependencies)
updateDependencies(p.devDependencies, v.dependencies)

fs.writeFileSync('package-lockdown.json', JSON.stringify(p, null, 2))

function updateDependencies(list, v) {
  for (var d in list) list[d] = v[d].version
}
