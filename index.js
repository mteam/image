var Drawable = require('drawable');

function Image(source) {
  this.source = source.getContent ? source.getContent() : source;

  this.width = this.source.width;
  this.height = this.source.height;
}

module.exports = Image;

Image.prototype = Object.create(Drawable);

Image.prototype.draw = function(ctx, x, y) {
  ctx.drawImage(this.source, x, y);
};

Image.prototype.drawRect = function(ctx, rect, x, y) {
  ctx.drawImage(
    this.source,
    rect.left, rect.top, rect.width, rect.height,
    x, y, rect.width, rect.height
  );
};
