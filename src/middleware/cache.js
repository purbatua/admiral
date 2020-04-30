const mcache = require('memory-cache')

/**
 * Express.js middleware to cache route
 * responses in memory.
 */
export default (duration) => {
  return (req, res, next) => {
    var key = '__express__' + req.originalUrl || req.url
    var cached_response = mcache.get(key)
    if (cached_response) {
      res.send(cached_response)
      return
    } else {
      res.sendResponse = res.send
      res.send = (body) => {
        mcache.put(key, body, duration);
        res.sendResponse(body)
      }
      next()
    }
  }
}