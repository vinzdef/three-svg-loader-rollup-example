const Three = require('three')
const SVGLoader = require('three-svg-loader')

const svgLoader = new SVGLoader()
console.log('INSTANCE', svgLoader)
console.log('CONSTRUCTOR', SVGLoader)
console.log('PROTOTYPE', SVGLoader.prototype)

module.exports = svgLoader
