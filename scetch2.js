class CubePeace {
  constructor(
    name,
    x = 0,
    y = 0,
    z = 0,
    width = 80,
    colorTop,
    colorLeft,
    colorRight,
    colorBottom,
    colorFront,
    colorBack,
    rotation = 0
  ) {
    (this.name = name), (this.x = x);
    this.y = y;
    this.z = z;
    this.width = width;
    this.colorTop = colorTop;
    this.colorLeft = colorLeft;
    this.colorRight = colorRight;
    this.colorBottom = colorBottom;
    this.colorFront = colorFront;
    this.colorBack = colorBack;
    this.rotation = rotation;
    this.rendered = 0;
    this.axis = new p5.Vector(this.x, this.y, this.z);
  }

  drawPeace(x, y, z) {
    push();
    rotate(this.rotation, this.axis);
    if (this.colorBack !== "black") {
      fill(this.colorBack);
      strokeWeight(4);
      stroke(50);
      beginShape();
      vertex(x, y, z);
      vertex(x + this.width, y, z);
      vertex(x + this.width, y + this.width, z);
      vertex(x, y + this.width, z);
      vertex(x, y, z);
      endShape();
    }

    if (this.colorTop !== "black") {
      fill(this.colorTop);
      strokeWeight(4);
      stroke(50);
      beginShape();
      vertex(x, y, z);
      vertex(x + this.width, y, z);
      vertex(x + this.width, y, z + this.width);
      vertex(x, y, z + this.width);
      vertex(x, y, z);
      endShape();
    }

    if (this.colorLeft !== "black") {
      fill(this.colorLeft);
      strokeWeight(4);
      stroke(50);
      beginShape();
      vertex(x, y, z);
      vertex(x, y + this.width, z);
      vertex(x, y + this.width, z + this.width);
      vertex(x, y, z + this.width);
      vertex(x, y, z);
      endShape();
    }

    if (this.colorFront !== "black") {
      fill(this.colorFront);
      strokeWeight(4);
      stroke(50);
      beginShape();
      vertex(x, y, z + this.width);
      vertex(x + this.width, y, z + this.width);
      vertex(x + this.width, y + this.width, z + this.width);
      vertex(x, y + this.width, z + this.width);
      vertex(x, y, z + this.width);
      endShape();
    }

    if (this.colorBottom !== "black") {
      fill(this.colorBottom);
      strokeWeight(4);
      stroke(50);
      beginShape();
      vertex(x, y + this.width, z);
      vertex(x + this.width, y + this.width, z);
      vertex(x + this.width, y + this.width, z + this.width);
      vertex(x, y + this.width, z + this.width);
      vertex(x, y + this.width, z);
      endShape();
    }

    if (this.colorRight !== "black") {
      fill(this.colorRight);
      strokeWeight(4);
      stroke(50);
      beginShape();
      vertex(x + this.width, y, z);
      vertex(x + this.width, y + this.width, z);
      vertex(x + this.width, y + this.width, z + this.width);
      vertex(x + this.width, y, z + this.width);
      vertex(x + this.width, y, z);
      endShape();
    }
    pop();
    // console.log("p:", p);
  }
  rotatePeace(angle, axis) {
    this.rotation = angle;
    this.axis = axis;
  }
}

class Rubik {
  constructor(
    x = 0,
    y = 0,
    z = 0,
    peaceWidth = 80,
    sides = 3,
    colorTop = "#ffffff",
    colorFront = "#DDF247",
    colorBack = " #FFA800",
    colorLeft = "#101010",
    colorRight = "#bce0cb",
    colorBottom = "#f5dddd"
  ) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.peaceWidth = peaceWidth;
    this.sides = sides;
    this.colorTop = colorTop;
    this.colorBottom = colorBottom;
    this.colorFront = colorFront;
    this.colorBack = colorBack;
    this.colorLeft = colorLeft;
    this.colorRight = colorRight;
    this.axisFront = new p5.Vector(0, 0, 1);
    this.axisTop = new p5.Vector(0, 1, 0);
    this.axisSide = new p5.Vector(1, 0, 0);
    this.peaces = {
      // TOP
      // Top side - back
      leftBackTopCorner: new CubePeace(
        "leftBackTopCorner",
        x,
        y,
        z,
        peaceWidth,
        this.colorTop,
        this.colorLeft,
        "black",
        "black",
        "black",
        this.colorBack,
        0
      ),
      middleBackTop: new CubePeace(
        "middleBackTop",
        x + this.peaceWidth,
        y,
        z,
        peaceWidth,
        this.colorTop,
        "black",
        "black",
        "black",
        "black",
        this.colorBack,
        0
      ),
      rightBackTop: new CubePeace(
        "rightBackTop",
        x + this.peaceWidth * 2,
        y,
        z,
        peaceWidth,
        this.colorTop,
        "black",
        this.colorRight,
        "black",
        "black",
        this.colorBack,
        0
      ),
      // Top side - middle
      leftMiddleTopCorner: new CubePeace(
        "leftMiddleTopCorner",
        x,
        y,
        z + this.peaceWidth,
        peaceWidth,
        this.colorTop,
        this.colorLeft,
        "black",
        "black",
        "black",
        "black",
        0
      ),
      middleMiddleTop: new CubePeace(
        "middleMiddleTop",
        x + this.peaceWidth,
        y,
        z + this.peaceWidth,
        peaceWidth,
        this.colorTop,
        "black",
        "black",
        "black",
        "black",
        "black",
        0
      ),
      rightMiddleTop: new CubePeace(
        "rightMiddleTop",
        x + this.peaceWidth * 2,
        y,
        z + this.peaceWidth,
        peaceWidth,
        this.colorTop,
        "black",
        this.colorRight,
        "black",
        "black",
        "black",
        0
      ),
      // Top side - front
      leftFrontTopCorner: new CubePeace(
        "leftFrontTopCorner",
        x,
        y,
        z + this.peaceWidth * 2,
        peaceWidth,
        this.colorTop,
        this.colorLeft,
        "black",
        "black",
        this.colorFront,
        "black",
        0
      ),
      middleFrontTop: new CubePeace(
        "middleFrontTop",
        x + this.peaceWidth,
        y,
        z + this.peaceWidth * 2,
        peaceWidth,
        this.colorTop,
        "black",
        "black",
        "black",
        this.colorFront,
        "black",
        0
      ),
      rightFrontTop: new CubePeace(
        "rightFrontTop",
        x + this.peaceWidth * 2,
        y,
        z + this.peaceWidth * 2,
        peaceWidth,
        this.colorTop,
        "black",
        this.colorRight,
        "black",
        this.colorFront,
        "black",
        0
      ),
      // Middle
      // Middle side - back
      leftBackMiddleCorner: new CubePeace(
        "leftBackMiddleCorner",
        x,
        y + this.peaceWidth,
        z,
        peaceWidth,
        "black",
        this.colorLeft,
        "black",
        "black",
        "black",
        this.colorBack,
        0
      ),
      middleBackMiddle: new CubePeace(
        "middleBackMiddle",
        x + this.peaceWidth,
        y + this.peaceWidth,
        z,
        peaceWidth,
        "black",
        "black",
        "black",
        "black",
        "black",
        this.colorBack,
        0
      ),
      rightBackMiddle: new CubePeace(
        "rightBackMiddle",
        x + this.peaceWidth * 2,
        y + this.peaceWidth,
        z,
        peaceWidth,
        "black",
        "black",
        this.colorRight,
        "black",
        "black",
        this.colorBack,
        0
      ),
      // Middle side - middle
      leftMiddleMiddleCorner: new CubePeace(
        "leftMiddleMiddleCorner",
        x,
        y + this.peaceWidth,
        z + this.peaceWidth,
        peaceWidth,
        "black",
        this.colorLeft,
        "black",
        "black",
        "black",
        "black",
        0
      ),
      middleMiddleMiddle: new CubePeace(
        "middleMiddleMiddle",
        x + this.peaceWidth,
        y + this.peaceWidth,
        z + this.peaceWidth,
        peaceWidth,
        "black",
        "black",
        "black",
        "black",
        "black",
        "black",
        0
      ),
      rightMiddleMiddle: new CubePeace(
        "rightMiddleMiddle",
        x + this.peaceWidth * 2,
        y + this.peaceWidth,
        z + this.peaceWidth,
        peaceWidth,
        "black",
        "black",
        this.colorRight,
        "black",
        "black",
        "black",
        0
      ),
      // Middle side - front
      leftFrontMiddleCorner: new CubePeace(
        "leftFrontMiddleCorner",
        x,
        y + this.peaceWidth,
        z + this.peaceWidth * 2,
        peaceWidth,
        "black",
        this.colorLeft,
        "black",
        "black",
        this.colorFront,
        "black",
        0
      ),
      middleFrontMiddle: new CubePeace(
        "middleFrontMiddle",
        x + this.peaceWidth,
        y + this.peaceWidth,
        z + this.peaceWidth * 2,
        peaceWidth,
        "black",
        "black",
        "black",
        "black",
        this.colorFront,
        "black",
        0
      ),
      rightFrontMiddle: new CubePeace(
        "rightFrontMiddle",
        x + this.peaceWidth * 2,
        y + this.peaceWidth,
        z + this.peaceWidth * 2,
        peaceWidth,
        "black",
        "black",
        this.colorRight,
        "black",
        this.colorFront,
        "black",
        0
      ),
      // Bottom
      // Bottom side - back
      leftBackBottomCorner: new CubePeace(
        "leftBackBottomCorner",
        x,
        y + this.peaceWidth * 2,
        z,
        peaceWidth,
        "black",
        this.colorLeft,
        "black",
        this.colorBottom,
        "black",
        this.colorBack,
        0
      ),
      middleBackBottom: new CubePeace(
        "middleBackBottom",
        x + this.peaceWidth,
        y + this.peaceWidth * 2,
        z,
        peaceWidth,
        "black",
        "black",
        "black",
        this.colorBottom,
        "black",
        this.colorBack,
        0
      ),
      rightBackBottom: new CubePeace(
        "rightBackBottom",
        x + this.peaceWidth * 2,
        y + this.peaceWidth * 2,
        z,
        peaceWidth,
        "black",
        "black",
        this.colorRight,
        this.colorBottom,
        "black",
        this.colorBack,
        0
      ),
      // Bottom side - middle
      leftMiddleBottomCorner: new CubePeace(
        "leftMiddleBottomCorner",
        x,
        y + this.peaceWidth * 2,
        z + this.peaceWidth,
        peaceWidth,
        "black",
        this.colorLeft,
        "black",
        this.colorBottom,
        "black",
        "black",
        0
      ),
      middleMiddleBottom: new CubePeace(
        "middleMiddleBottom",
        x + this.peaceWidth,
        y + this.peaceWidth * 2,
        z + this.peaceWidth,
        peaceWidth,
        "black",
        "black",
        "black",
        this.colorBottom,
        "black",
        "black",
        0
      ),
      rightMiddleBottom: new CubePeace(
        "rightMiddleBottom",
        x + this.peaceWidth * 2,
        y + this.peaceWidth * 2,
        z + this.peaceWidth,
        peaceWidth,
        "black",
        "black",
        this.colorRight,
        this.colorBottom,
        "black",
        "black",
        0
      ),
      // Bottom side - front
      leftFrontBottomCorner: new CubePeace(
        "leftFrontBottomCorner",
        x,
        y + this.peaceWidth * 2,
        z + this.peaceWidth * 2,
        peaceWidth,
        "black",
        this.colorLeft,
        "black",
        this.colorBottom,
        this.colorFront,
        "black",
        0
      ),
      middleFrontBottom: new CubePeace(
        "middleFrontBottom",
        x + this.peaceWidth,
        y + this.peaceWidth * 2,
        z + this.peaceWidth * 2,
        peaceWidth,
        "black",
        "black",
        "black",
        this.colorBottom,
        this.colorFront,
        "black",
        0
      ),
      rightFrontBottom: new CubePeace(
        "rightFrontBottom",
        x + this.peaceWidth * 2,
        y + this.peaceWidth * 2,
        z + this.peaceWidth * 2,
        peaceWidth,
        "black",
        "black",
        this.colorRight,
        this.colorBottom,
        this.colorFront,
        "black",
        0
      ),
    };
    // збс
    this.sideLeft = [
      this.peaces.leftBackTopCorner,
      this.peaces.leftMiddleTopCorner,
      this.peaces.leftFrontTopCorner,

      this.peaces.leftBackMiddleCorner,
      this.peaces.leftMiddleMiddleCorner,
      this.peaces.leftFrontMiddleCorner,

      this.peaces.leftBackBottomCorner,
      this.peaces.leftMiddleBottomCorner,
      this.peaces.leftFrontBottomCorner,
    ];
    //збс
    this.sideRight = [
      this.peaces.rightFrontTop,
      this.peaces.rightMiddleTop,
      this.peaces.rightBackTop,

      this.peaces.rightFrontMiddle,
      this.peaces.rightMiddleMiddle,
      this.peaces.rightBackMiddle,

      this.peaces.rightFrontBottom,
      this.peaces.rightMiddleBottom,
      this.peaces.rightBackBottom,
    ];
    // збс
    this.sideTop = [
      this.peaces.leftBackTopCorner,
      this.peaces.middleBackTop,
      this.peaces.rightBackTop,

      this.peaces.leftMiddleTopCorner,
      this.peaces.middleMiddleTop,
      this.peaces.rightMiddleTop,

      this.peaces.leftFrontTopCorner,
      this.peaces.middleFrontTop,
      this.peaces.rightFrontTop,
    ];
    //збс
    this.sideBottom = [
      this.peaces.leftFrontBottomCorner,
      this.peaces.middleFrontBottom,
      this.peaces.rightFrontBottom,

      this.peaces.leftMiddleBottomCorner,
      this.peaces.middleMiddleBottom,
      this.peaces.rightMiddleBottom,

      this.peaces.leftBackBottomCorner,
      this.peaces.middleBackBottom,
      this.peaces.rightBackBottom,
    ];
    //збс
    this.sideFront = [
      this.peaces.leftFrontTopCorner,
      this.peaces.middleFrontTop,
      this.peaces.rightFrontTop,

      this.peaces.leftFrontMiddleCorner,
      this.peaces.middleFrontMiddle,
      this.peaces.rightFrontMiddle,

      this.peaces.leftFrontBottomCorner,
      this.peaces.middleFrontBottom,
      this.peaces.rightFrontBottom,
    ];
    // збс
    this.sideBack = [
      this.peaces.rightBackTop,
      this.peaces.middleBackTop,
      this.peaces.leftBackTopCorner,

      this.peaces.rightBackMiddle,
      this.peaces.middleBackMiddle,
      this.peaces.leftBackMiddleCorner,

      this.peaces.rightBackBottom,
      this.peaces.middleBackBottom,
      this.peaces.leftBackBottomCorner,
    ];
  }
  drawByList() {
    this.sideTop.forEach(side => {
      // console.log("draw top peace:", side);
      side.drawPeace(side.x, side.y, side.z);
    });
    this.sideLeft.forEach(side => {
      // console.log("draw left peace:", side);
      side.drawPeace(side.x, side.y, side.z);
    });
    this.sideFront.forEach(side => {
      // console.log("draw left peace:", side);
      side.drawPeace(side.x, side.y, side.z);
    });
  }

  rotateTop(angl) {
    const tempAxis = this.axisTop;
    console.log("top before:");
    for (let i = 0; i < 7; i += 3) {
      console.log(
        "-->",
        this.sideTop[i],
        this.sideTop[i + 1],
        this.sideTop[i + 2]
      );
    }

    var newTopSideState = [
      this.sideTop[2],
      this.sideTop[5],
      this.sideTop[8],
      this.sideTop[1],
      this.sideTop[4],
      this.sideTop[7],
      this.sideTop[0],
      this.sideTop[3],
      this.sideTop[6],
    ];

    console.log("left before top:");
    for (let i = 0; i < 7; i += 3) {
      console.log(
        "-->",
        this.sideLeft[i],
        this.sideLeft[i + 1],
        this.sideLeft[i + 2]
      );
    }
    this.sideTop = newTopSideState;
    this.sideTop.forEach((item, _) => {
      item.rotatePeace(angl, tempAxis);
    });
    console.log("top after:");
    for (let i = 0; i < 7; i += 3) {
      console.log(
        "-->",
        this.sideTop[i],
        this.sideTop[i + 1],
        this.sideTop[i + 2]
      );
    }

    this.sideLeft[0] = this.sideTop[0];
    this.sideLeft[1] = this.sideTop[3];
    this.sideLeft[2] = this.sideTop[6];

    this.sideRight[0] = this.sideTop[8];
    this.sideRight[1] = this.sideTop[5];
    this.sideRight[2] = this.sideTop[2];

    this.sideFront[0] = this.sideTop[6];
    this.sideFront[1] = this.sideTop[7];
    this.sideFront[2] = this.sideTop[8];

    this.sideBack[0] = this.sideTop[2];
    this.sideBack[1] = this.sideTop[1];
    this.sideBack[2] = this.sideTop[0];
    console.log("left after top:");
    for (let i = 0; i < 7; i += 3) {
      console.log(
        "-->",
        this.sideLeft[i],
        this.sideLeft[i + 1],
        this.sideLeft[i + 2]
      );
    }
  }
  rotateLeft(angl) {
    const tempAxis = this.axisSide;
    console.log("left before:");
    for (let i = 0; i < 9; i += 3) {
      console.log(
        "-->",
        this.sideLeft[i],
        this.sideLeft[i + 1],
        this.sideLeft[i + 2]
      );
    }
    console.log("top before left:");
    for (let i = 0; i < 9; i += 3) {
      console.log(
        "-->",
        this.sideTop[i],
        this.sideTop[i + 1],
        this.sideTop[i + 2]
      );
    }
    this.sideLeft.forEach((item, _) => {
      item.rotatePeace(angl, tempAxis);
    });

    const newLeftSideState = [
      this.sideLeft[2],
      this.sideLeft[5],
      this.sideLeft[8],
      this.sideLeft[1],
      this.sideLeft[4],
      this.sideLeft[7],
      this.sideLeft[0],
      this.sideLeft[3],
      this.sideLeft[6],
    ];

    this.sideLeft = newLeftSideState;

    console.log("left after:");
    for (let i = 0; i < 9; i += 3) {
      console.log(
        "-->",
        this.sideLeft[i],
        this.sideLeft[i + 1],
        this.sideLeft[i + 2]
      );
    }

    // checked
    this.sideTop[0] = this.sideLeft[0];
    this.sideTop[3] = this.sideLeft[1];
    this.sideTop[6] = this.sideLeft[2];

    this.sideBottom[0] = this.sideLeft[8];
    this.sideBottom[3] = this.sideLeft[7];
    this.sideBottom[6] = this.sideLeft[6];

    this.sideFront[0] = this.sideLeft[2];
    this.sideFront[3] = this.sideLeft[5];
    this.sideFront[6] = this.sideLeft[8];

    this.sideBack[2] = this.sideLeft[0];
    this.sideBack[5] = this.sideLeft[3];
    this.sideBack[8] = this.sideLeft[6];
    console.log("top after left:");
    for (let i = 0; i < 9; i += 3) {
      console.log(
        "-->",
        this.sideTop[i],
        this.sideTop[i + 1],
        this.sideTop[i + 2]
      );
    }
    console.log("back after left:");
    for (let i = 0; i < 9; i += 3) {
      console.log(
        "-->",
        this.sideBack[i],
        this.sideBack[i + 1],
        this.sideBack[i + 2]
      );
    }
    console.log("botom after left:");
    for (let i = 0; i < 9; i += 3) {
      console.log(
        "-->",
        this.sideBottom[i],
        this.sideBottom[i + 1],
        this.sideBottom[i + 2]
      );
    }
    console.log("front after left:");
    for (let i = 0; i < 9; i += 3) {
      console.log(
        "-->",
        this.sideFront[i],
        this.sideFront[i + 1],
        this.sideFront[i + 2]
      );
    }
  }

  rotateFront(angl) {
    const tempAxis = this.axisFront;

    const newFrontSideState = [
      this.sideFront[2],
      this.sideFront[5],
      this.sideFront[8],
      this.sideFront[1],
      this.sideFront[4],
      this.sideFront[7],
      this.sideFront[0],
      this.sideFront[3],
      this.sideFront[6],
    ];

    this.sideFront = newFrontSideState;
    this.sideFront.forEach((item, _) => {
      item.rotatePeace(angl, tempAxis);
    });

    // checked
    this.sideTop[6] = this.sideFront[0];
    this.sideTop[7] = this.sideFront[1];
    this.sideTop[8] = this.sideFront[2];

    this.sideBottom[0] = this.sideFront[6];
    this.sideBottom[1] = this.sideFront[7];
    this.sideBottom[2] = this.sideFront[8];

    this.sideLeft[2] = this.sideFront[0];
    this.sideLeft[5] = this.sideFront[3];
    this.sideLeft[8] = this.sideFront[6];

    this.sideRight[0] = this.sideFront[2];
    this.sideRight[3] = this.sideFront[5];
    this.sideRight[6] = this.sideFront[8];
  }

  drawRubik() {
    for (let yH = 0; yH < 3; yH++) {
      for (let i = 0; i < 3; i++) {
        const marginZ = i * 90;
        const marginY = yH * 90;
        var colorFrontC;
        var colorBackC;
        var colorBottomC;
        var colorTopC;

        if (i == 2) {
          colorFrontC = this.colorFront;
          colorBackC = "black";
        } else if (i == 1) {
          colorFrontC = "black";
          colorBackC = "black";
        } else {
          colorFrontC = "black";
          colorBackC = this.colorBack;
        }
        if (yH == 2) {
          colorBottomC = this.colorBottom;
          colorTopC = "black";
        } else if (yH == 1) {
          colorBottomC = "black";
          colorTopC = "black";
        } else {
          colorBottomC = "black";
          colorTopC = this.colorTop;
        }

        const topLeftBackCorner = new CubePeace(
          this.x,
          this.y,
          this.z,
          90,
          colorTopC,
          this.colorLeft,
          "black",
          colorBottomC,
          colorFrontC,
          colorBackC
        );
        const topBackMiddle = new CubePeace(
          this.x,
          this.y,
          this.z,
          90,
          colorTopC,
          this.colorLeft,
          "black",
          colorBottomC,
          colorFrontC,
          colorBackC
        );
        const topRightBackCorner = new CubePeace(
          this.x,
          this.y,
          this.z,
          90,
          colorTopC,
          "black",
          this.colorRight,
          colorBottomC,
          colorFrontC,
          colorBackC
        );

        topLeftBackCorner.drawPeace(
          topLeftBackCorner.x,
          topLeftBackCorner.y + marginY,
          topLeftBackCorner.z + marginZ
        );
        topBackMiddle.drawPeace(
          topBackMiddle.x + topBackMiddle.width,
          topBackMiddle.y + marginY,
          topBackMiddle.z + marginZ
        );
        topRightBackCorner.drawPeace(
          topRightBackCorner.x + 2 * topRightBackCorner.width,
          topRightBackCorner.y + marginY,
          topRightBackCorner.z + marginZ
        );
      }
    }
  }
}

var cubik = new Rubik(-120, -120, -120);
var rotatTop = 0;
var rotatBottom = 0;
var rotatLeft = 0;
var rotatRight = 0;
var rotatFront = 0;
var rotatBack = 0;
var KeyA = 65;
var KeyS = 83;
var KeyD = 68;
var KeyF = 70;
console.log(cubik);

function setup() {
  createCanvas(1000, 600, WEBGL);
  cam = camera(0, 0, 1000);
  angleMode(DEGREES);
}

function draw() {
  background(color(90));
  strokeWeight(20);
  stroke("blue");
  line(0, 0, 0, 0, 0, 1000);
  stroke("red");
  line(0, 0, 0, 0, 1000, 0);
  stroke("green");
  line(0, 0, 0, 1000, 0, 0);

  cubik.drawByList();

  orbitControl();
  rotateY(3.5);
  rotateZ(2.5);
}

function keyPressed() {
  if (rotatTop === 360) {
    rotatTop = 0;
  }
  if (rotatBottom === 360) {
    rotatBottom = 0;
  }
  if (rotatLeft === 360) {
    rotatLeft = 0;
  }
  if (rotatFront === 360) {
    rotatFront = 0;
  }
  if (keyCode === KeyA) {
    rotatTop += 90;
    cubik.rotateTop(rotatTop);
  } else if (keyCode === KeyD) {
    rotatLeft += 90;
    cubik.rotateLeft(rotatLeft);
  } else if (keyCode === KeyF) {
    rotatFront += 90;
    cubik.rotateFront(rotatFront);
  }
}
