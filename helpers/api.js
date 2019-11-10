module.exports = function(req, res, next) {

    // response to JSON + Header
    res.sendJSON = function(data, status = 200) {
        res.setHeader('Content-Type', 'application/json')
        res.status(status)
        res.json(data)
    }

    // Asynchronus
    res.sendAPI = function (promise) {
        promise
        .then(item => res.sendJSON(item))
        .catch(error => res.sendJSON(error, 400))
    }

    next()
}