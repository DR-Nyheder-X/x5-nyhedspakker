const Imgix = require('imgix-core-js')
const cli = new Imgix('drex.imgix.net', 'uwBCNsfiYVsoK8cO')

export default function imgix (imageUrl, blendImage, opts = {}) {
  return cli
  .path('https:' + imageUrl)
  .toUrl(Object.assign({
    w: 621,
    h: 621,
    sat: '-100',
    blend: `http://np.drdinstem.me/imgix/${blendImage}.jpg`,
    bm: 'multiply',
    bs: 'inherit'
  }, opts))
  .toString()
}

