class Bird {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.5
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      pos.x = mouseX;
      pos.y = mouseY;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("red");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };
  