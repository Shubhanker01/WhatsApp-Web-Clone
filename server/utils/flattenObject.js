function flattenObject(obj, prefix = '', res = {}) {
    for (const key in obj) {
        const value = obj[key]
        const prefKey = prefix ? `${prefix}.${key}` : key
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            flattenObject(value, prefKey, res)
        } else {
            res[prefKey] = value
        }
    }
    return res
}

module.exports = { flattenObject }
