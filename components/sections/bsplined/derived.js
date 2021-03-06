module.exports = {
  degree: 2,
  activeDistance: 9,

  setup() {
    this.size(600, 300);
    this.points = [
      {x:135,y:-210},
      {x:135,y:105},
      {x:135,y:-110},
      {x:105,y:230}
    ];
    this.knots = this.formKnots(this.points);
    this.draw();
  },

  draw() {
    this.clear();
    this.grid(25);
    var p = this.points[0];
    this.points.forEach(n => {
      this.stroke(200);
      this.line(n.x, n.y, p.x, p.y);
      p = n;
      this.stroke(0);
      this.circle(p.x, p.y, 4);
    });
    this.drawSplineData();
  },

  drawSplineData() {
    if (this.points.length <= this.degree) return;
    var mapped = this.points.map(p => [p.x, p.y]);
    this.drawCurve(mapped);
    this.drawKnots(mapped);
  }
};
