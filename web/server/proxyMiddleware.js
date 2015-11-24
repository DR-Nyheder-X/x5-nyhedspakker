import request from 'request'

export default function proxyMiddleware (token) {
  return (req, res, next) => {
    request({
      url: `https://public-api.wordpress.com/rest/v1.1${req.url}`,
      headers: { 'Authorization': `Bearer ${token}` }
    }, (err, resp, body) => {
      if (err) { return res.end(err) }
      res.end(body)
    })
  }
}

