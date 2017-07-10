let rgbToHexColor = require('../RgbToHex').rgbToHexColor;
let expect = require('chai').expect;

describe("RGB tp Hex color", function () {
    it('Should return #FF9EAA for (255, 158, 170)', function () {
        expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA');
    });
    it('Should pad values with zeros', function () {
        expect(rgbToHexColor(12, 13, 14) ).to.equal('#0C0D0E');
    });
    it('Should pad values with zeros', function () {
        expect(rgbToHexColor(256,256,256) ).to.equal('#FFFFFF');
    });
    it('Should work at lower limit', function () {
        expect(rgbToHexColor(0, 0, 0) ).to.equal('#000000');
    });
    it('Should undefined for neg values', function () {
        expect(rgbToHexColor(-1, -1, -1) ).to.be.undefined
    });
    it('Should undefined for big values', function () {
        expect(rgbToHexColor(300, 300, 300) ).to.be.undefined
    });
    it('Should undefined for big values', function () {
        expect(rgbToHexColor(2.5, 16.1, 155.241) ).to.be.undefined
    });
    it('Should undefined for big values', function () {
        expect(rgbToHexColor('pesho', 'gosho', []) ).to.be.undefined
    });
    it('Should pad values with zeros', function () {
        expect(rgbToHexColor(2,22,256) ).to.be.undefined
    });
});
