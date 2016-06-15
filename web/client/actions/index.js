const contentful = require('contentful')

const client = contentful.createClient({
  space: window.CONTENTFUL_SPACE,
  accessToken: window.CONTENTFUL_ACCESS_TOKEN,
  secure: true
})
window.client = client

export const REQUEST_PACKAGE = 'REQUEST_PACKAGE'
export function requestPackage () {
  return {
    type: REQUEST_PACKAGE
  }
}

export const RECEIVE_PACKAGE = 'RECEIVE_PACKAGE'
export function receivePackage (pkg, entries) {
  return {
    type: RECEIVE_PACKAGE,
    pkg: pkg,
    entries: entries,
    receivedAt: new Date()
  }
}

export const RECEIVE_PACKAGE_FAIL = 'RECEIVE_PACKAGE_FAIL'
export function receivePackageFail (msg) {
  return {
    type: RECEIVE_PACKAGE_FAIL,
    pkg: null,
    entries: [],
    receivedAt: new Date(),
    error: msg
  }
}

export function fetchPackage () {
  return dispatch => {
    dispatch(requestPackage())

    const opts = {
      content_type: 'package',
      order: '-fields.published_at',
      limit: 1,
      include: 1
    }

    const preview = window.location.search.match(/\?preview=(.*)/)
    if (preview && preview[1]) {
      opts['sys.id'] = preview[1]
    } else {
      // opts['fields.published_at[lt]'] = new Date()
    }

    return client.entries(opts).then(packages => {
      const pkg = Object.assign({}, packages[0])
      client.entries({
        content_type: '2wKn6yEnZewu2SCCkus4as',
        order: 'fields.weight',
        'fields.package.sys.id': pkg.sys.id
      }).then(entries => {
        return dispatch(receivePackage(pkg, entries))
      })
    })
  }
}

export const MARK_AS_READ = 'MARK_AS_READ'
export function markAsRead (id) {
  return {
    type: MARK_AS_READ,
    id
  }
}
