class PaintBercak {
  static get inputProperties() {
    return ["--spot-size", "--spot-count"];
  }

  randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  paint(ctx, geom, properties) {
    const size = parseInt(properties.get("--spot-size")) || 20;
    const count = parseInt(properties.get("--spot-count")) || 10;

    for (let i = 0; i < count; i++) {
      const x = Math.random() * geom.width;
      const y = Math.random() * geom.height;

      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = this.randomColor();
      ctx.fill();
    }
  }
}

registerPaint("paint-bercak", PaintBercak);
