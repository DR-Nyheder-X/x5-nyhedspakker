import request from 'request'

export default function proxyMiddleware (token) {
  return (req, res, next) => {
    const url = `https://public-api.wordpress.com/rest/v1.1${req.url}`

    console.log(`PROXY GET: ${url}`)

    request({
      url,
      headers: { 'Authorization': `Bearer ${token}` }
    }, (err, resp, body) => {
      if (err) {
        console.error(err)
        return res.end(err)
      }

      if (resp.statusCode < 200 || resp.statusCode > 299) {
        console.error(resp.statusCode)
        return res.end(body || '' + resp.statusCode)
      }

      res.end(body)
    })
  }
}

