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
    this.sideRight = [
      this.peaces.rightBackTopCorner,
      this.peaces.rightMiddleTopCorner,
      this.peaces.rightFrontTopCorner,
      this.peaces.rightBackMiddleCorner,
      this.peaces.rightMiddleMiddleCorner,
      this.peaces.rightFrontMiddleCorner,
      this.peaces.rightBackBottomCorner,
      this.peaces.rightMiddleBottomCorner,
      this.peaces.rightFrontBottomCorner,
    ];
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
    this.sideFront = [
      this.peaces.leftFrontTopCorner,
      this.peaces.middleFrontTopCorner,
      this.peaces.rightFrontTopCorner,
      this.peaces.leftFrontMiddleCorner,
      this.peaces.middleFrontMiddleCorner,
      this.peaces.rightFrontMiddleCorner,
      this.peaces.leftFrontBottomCorner,
      this.peaces.middleFrontBottomCorner,
      this.peaces.rightFrontBottomCorner,
    ];
    this.sideBack = [
      this.peaces.leftBackTopCorner,
      this.peaces.middleBackTopCorner,
      this.peaces.rightBackTopCorner,
      this.peaces.leftBackMiddleCorner,
      this.peaces.middleBackMiddleCorner,
      this.peaces.rightBackMiddleCorner,
      this.peaces.leftBackBottomCorner,
      this.peaces.middleBackBottomCorner,
      this.peaces.rightBackBottomCorner,
    ];
  }
  drawByList() {
    const lbtc = this.peaces.leftBackTopCorner;
    const mbt = this.peaces.middleBackTop;
    const rbt = this.peaces.rightBackTop;
    const lmtc = this.peaces.leftMiddleTopCorner;
    const mmt = this.peaces.middleMiddleTop;
    const rmt = this.peaces.rightMiddleTop;
    const lft = this.peaces.leftFrontTopCorner;
    const lftc = this.peaces.middleFrontTop;
    const mft = this.peaces.rightFrontTop;

    lbtc.drawPeace(lbtc.x, lbtc.y, lbtc.z);
    mbt.drawPeace(mbt.x, mbt.y, mbt.z);
    rbt.drawPeace(rbt.x, rbt.y, rbt.z);
    lmtc.drawPeace(lmtc.x, lmtc.y, lmtc.z);
    mmt.drawPeace(mmt.x, mmt.y, mmt.z);
    rmt.drawPeace(rmt.x, rmt.y, rmt.z);
    lft.drawPeace(lft.x, lft.y, lft.z);
    lftc.drawPeace(lftc.x, lftc.y, lftc.z);
    mft.drawPeace(mft.x, mft.y, mft.z);

    const lbmc = this.peaces.leftBackMiddleCorner;
    const mbm = this.peaces.middleBackMiddle;
    const rbm = this.peaces.rightBackMiddle;
    const lmmc = this.peaces.leftMiddleMiddleCorner;
    const mmm = this.peaces.middleMiddleMiddle;
    const rmm = this.peaces.rightMiddleMiddle;
    const lfm = this.peaces.leftFrontMiddleCorner;
    const lfmc = this.peaces.middleFrontMiddle;
    const mfm = this.peaces.rightFrontMiddle;

    lbmc.drawPeace(lbmc.x, lbmc.y, lbmc.z);
    mbm.drawPeace(mbm.x, mbm.y, mbm.z);
    rbm.drawPeace(rbm.x, rbm.y, rbm.z);
    lmmc.drawPeace(lmmc.x, lmmc.y, lmmc.z);
    mmm.drawPeace(mmm.x, mmm.y, mmm.z);
    rmm.drawPeace(rmm.x, rmm.y, rmm.z);
    lfm.drawPeace(lfm.x, lfm.y, lfm.z);
    lfmc.drawPeace(lfmc.x, lfmc.y, lfmc.z);
    mfm.drawPeace(mfm.x, mfm.y, mfm.z);

    const lbbc = this.peaces.leftBackBottomCorner;
    const mbb = this.peaces.middleBackBottom;
    const rbb = this.peaces.rightBackBottom;
    const lmbc = this.peaces.leftMiddleBottomCorner;
    const mmb = this.peaces.middleMiddleBottom;
    const rmb = this.peaces.rightMiddleBottom;
    const lfb = this.peaces.leftFrontBottomCorner;
    const lfbc = this.peaces.middleFrontBottom;
    const mfb = this.peaces.rightFrontBottom;

    lbbc.drawPeace(lbbc.x, lbbc.y, lbbc.z);
    mbb.drawPeace(mbb.x, mbb.y, mbb.z);
    rbb.drawPeace(rbb.x, rbb.y, rbb.z);
    lmbc.drawPeace(lmbc.x, lmbc.y, lmbc.z);
    mmb.drawPeace(mmb.x, mmb.y, mmb.z);
    rmb.drawPeace(rmb.x, rmb.y, rmb.z);
    lfb.drawPeace(lfb.x, lfb.y, lfb.z);
    lfbc.drawPeace(lfbc.x, lfbc.y, lfbc.z);
    mfb.drawPeace(mfb.x, mfb.y, mfb.z);
  }

  rotateTop(angl) {
    const tempAxis = this.axisTop;
    this.sideTop.forEach((item, _) => {
      item.rotatePeace(angl, tempAxis);
    });
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
    this.sideTop = newTopSideState;
    console.log("top:", this.sideTop);
    console.log(this.sideLeft);

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
  }
  rotateBottom(angl) {
    const tempAxis = this.axisTop;

    this.peaces.leftBackBottomCorner.rotatePeace(angl, tempAxis);
    this.peaces.middleBackBottom.rotatePeace(angl, tempAxis);
    this.peaces.rightBackBottom.rotatePeace(angl, tempAxis);

    this.peaces.leftMiddleBottomCorner.rotatePeace(angl, tempAxis);
    this.peaces.middleMiddleBottom.rotatePeace(angl, tempAxis);
    this.peaces.rightMiddleBottom.rotatePeace(angl, tempAxis);

    this.peaces.leftFrontBottomCorner.rotatePeace(angl, tempAxis);
    this.peaces.middleFrontBottom.rotatePeace(angl, tempAxis);
    this.peaces.rightFrontBottom.rotatePeace(angl, tempAxis);
    console.log("temt", tempAxis);
  }
  rotateLeft(angl) {
    const tempAxis = this.axisSide;
    this.sideLeft.forEach((item, _) => {
      item.rotatePeace(angl, tempAxis);
    });
    var newLeftSideState = [
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
    console.log("left:", this.sideLeft);
    console.log(this.sideTop);

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
  if (keyCode === KeyA) {
    rotatTop += 90;
    cubik.rotateTop(rotatTop);
  } else if (keyCode === KeyS) {
    rotatBottom += 90;
    cubik.rotateBottom(rotatBottom);
  } else if (keyCode === KeyD) {
    rotatLeft += 90;
    cubik.rotateLeft(rotatLeft);
  }
}
