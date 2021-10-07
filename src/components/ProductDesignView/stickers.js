function importAll(r) {
  let stickers = []
  r.keys().forEach(function(item) {
    stickers.push(r(item))
  })
  return stickers
}

export const stickersObject = importAll(
  require.context('../../assets/DesignView/stickers', false, /\.(png|jpe?g|svg)$/)
)