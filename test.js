var expect = require('expect.js'),
    sham = require('sham'),
    Image = require('./index');

describe('Image', function() {

  it('should create instance from asset', function() {
    var source = {};

    var asset = sham.mock();

    asset.spy('getContent')
      .return(source);

    var image = new Image(asset);

    expect(image.source).to.be(source);
  });

  it('should draw', function() {
    var source = {},
        image = new Image(source);

    var context = sham.mock();

    context.spy('drawImage')
      .args(source, 10, 20)
      .called();

    image.draw(context, 10, 20);

    context.check();
  });

  it('should draw rect', function() {
    var source = {},
        image = new Image(source),
        rect = { left: 10, top: 20, width: 30, height: 40 };

    var context = sham.mock();
    
    context.spy('drawImage')
      .args(source, 10, 20, 30, 40, 50, 60, 30, 40)
      .called();

    image.drawRect(context, rect, 50, 60);

    context.check();
  });

});