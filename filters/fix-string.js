module.exports = function (value) {
    if (!value) return ''
    value = value.toString().replace(/_/g, " ");

    return value.charAt(0).toUpperCase() + value.slice(1)
}