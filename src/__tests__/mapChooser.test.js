import mapChooser from '../mapChooser'

describe("mapChooser",function () {
  it("returns an image file name based on input given to it", function () {
    let expected = "portland.png"
    let actual = mapChooser("portland")
    expect(actual).toEqual(expected)
  })

  it("when file name not is passed to it", function () {
    let expected = "default.png"
    let actual = mapChooser()
    expect(actual).toEqual(expected)
  })

})