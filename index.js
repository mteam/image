module.exports = Image;

function Image(source) {
  this.source = source.content ? source.content : source;

  this.width = this.source.width;
  this.height = this.source.height;
}

Image.prototype = {

  draw: function(ctx, x, y) {
    ctx.drawImage(this.source, x, y);
  },

  drawRect: function(ctx, rect, x, y) {
    ctx.drawImage(
      this.source,
      rect.left, rect.top, rect.width, rect.height,
      x, y, rect.width, rect.height
    );
  }

};
