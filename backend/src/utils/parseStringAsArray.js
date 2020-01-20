module.exports = function parseAsArray(arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim());
}