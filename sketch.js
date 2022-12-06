let set1n1, set1n2, set1n3;
let set2n1, set2n2, set2n3;
let set3n1, set3n2, set3n3;
let set4n1, set4n2, set4n3;
let imgSet = 1;

let color1, color2, color3, color4;

//

let baseUnit;
let plusUnit;
let fullUnit;

let shiftX, shiftY;

//

let leftImgL, leftImgR;
let centerImgL, centerImgR;
let rightImgL, rightImgR;
let allImgT, allImgB;

let leftImgHover = false;
let centerImgHover = false;
let rightImgHover = false;
let anyImgHover = false;

//

let userStaticAlpha = 1;
let userStaticCounter = 0;
let userStaticCounterMax = 280;

let userActive1Alpha = 0;
let userActive2Alpha = 0;
let userActive3Alpha = 0;

//

let mouseXEasing = 0;
let mouseYEasing = 0;
let easing = 0.04;

//

let actionCounter = 0;
let actionCounterMax = 40;

let cursorCounter = 0;
let cursorCounterMax = 70;

//

let breakpoint = 767;

//

let loading = true;
let loadingAlpha = 1;

function imageLoaded(img) {
  set4n3 = img;
  loading = false;
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  colorMode(RGB, 255, 255, 255, 1);
  imageMode(CENTER);

  set1n2 = loadImage("assets/Identity; Cool Cats.gif");
  set1n1 = loadImage("assets/Identity; Moonbirds.gif");
  set1n3 = loadImage("assets/Identity; BAYC.gif", imageLoaded);

  set2n1 = loadImage("assets/GameFi; 01.png");
  set2n2 = loadImage("assets/GameFi; 02.gif");
  set2n3 = loadImage("assets/GameFi; 03.gif");

  set3n1 = loadImage("assets/Soulbound; 01.png");
  set3n2 = loadImage("assets/Soulbound; 02.png");
  set3n3 = loadImage("assets/Soulbound; 03.png");

  set4n1 = loadImage("assets/Identity.gif");
  set4n2 = loadImage("assets/GameFi.gif");
  set4n3 = loadImage("assets/Soulbound.png", imageLoaded);

  color1 = color(236, 236, 236);
  color2 = color(15, 15, 15);
  color3 = color(0, 18, 216);
  color4 = color(243, 63, 12);

  textFont("Inter");

  smooth();

  //

  var options = {
    preventDefault: true,
  };

  var hammer = new Hammer(document.body, options);
  hammer.get("swipe").set({
    direction: Hammer.DIRECTION_ALL,
  });

  hammer.on("swipe", swiped);
}

function draw() {
  background(color1);

  if (width > breakpoint) {
    baseUnit = width / 34;
  } else {
    baseUnit = width / 16;
  }
  plusUnit = baseUnit * 10;
  fullUnit = baseUnit * 16;

  //

  if (width > breakpoint) {
    mouseXEasing += (mouseX - mouseXEasing) * easing;
    mouseYEasing += (mouseY - mouseYEasing) * easing;

    shiftX = map(mouseXEasing, 0, width, baseUnit * 2, -baseUnit * 2);
    shiftY = map(mouseYEasing, 0, height, baseUnit * 2, -baseUnit * 2);
  } else {
    if (imgSet == 1) {
      shiftX = plusUnit + baseUnit;
    } else if (imgSet == 2) {
      shiftX = 0;
    } else if (imgSet == 3) {
      shiftX = -plusUnit - baseUnit;
    }

    shiftY = -plusUnit / 6;

    mouseXEasing += ((shiftX - mouseXEasing) * easing) / 2;
  }

  push();
  translate(width / 2, height / 2);

  if (width > breakpoint) {
    translate(shiftX, shiftY);
  } else {
    translate(mouseXEasing, shiftY);
  }

  //

  noFill();
  stroke(15, 15, 15, 0.08);
  strokeWeight(baseUnit / 32);

  leftImgL = -baseUnit * 16;
  leftImgR = -baseUnit * 6;
  centerImgL = -baseUnit * 5;
  centerImgR = baseUnit * 5;
  rightImgL = baseUnit * 6;
  rightImgR = baseUnit * 16;

  allImgT = centerImgL;
  allImgB = centerImgR;

  ellipse((leftImgL + leftImgR) / 2, 0, fullUnit);
  ellipse((centerImgL + centerImgR) / 2, 0, fullUnit);
  ellipse((rightImgL + rightImgR) / 2, 0, fullUnit);

  line(leftImgL, -height, leftImgL, height * 2);
  line(leftImgR, -height, leftImgR, height * 2);
  line(centerImgL, -height, centerImgL, height * 2);
  line(centerImgR, -height, centerImgR, height * 2);
  line(rightImgL, -height, rightImgL, height * 2);
  line(rightImgR, -height, rightImgR, height * 2);

  line(-width, allImgT, width * 2, allImgT);
  line(-width, allImgB, width * 2, allImgB);

  //

  stroke(15, 15, 15, userActive1Alpha / 2);
  ellipse((leftImgL + leftImgR) / 2, 0, fullUnit);

  stroke(15, 15, 15, userActive2Alpha / 2);
  ellipse((centerImgL + centerImgR) / 2, 0, fullUnit);

  stroke(15, 15, 15, userActive3Alpha / 2);
  ellipse((rightImgL + rightImgR) / 2, 0, fullUnit);

  //

  fill(15, 15, 15);
  noStroke();

  ellipse((leftImgL + leftImgR) / 2, 0, plusUnit);
  ellipse((centerImgL + centerImgR) / 2, 0, plusUnit);
  ellipse((rightImgL + rightImgR) / 2, 0, plusUnit);

  //

  if (width > breakpoint) {
    if (leftImgHover) {
      push();
      tint(
        255,
        map(
          dist(
            mouseX - width / 2 - shiftX,
            mouseY - height / 2 - shiftY,
            (leftImgR + leftImgL) / 2,
            (allImgT + allImgB) / 2
          ),
          plusUnit / 4,
          plusUnit / 2,
          1,
          0,
          true
        )
      );
      image(set1n1, (leftImgL + leftImgR) / 2, 0, plusUnit, plusUnit);
      image(set1n2, (centerImgL + centerImgR) / 2, 0, plusUnit, plusUnit);
      image(set1n3, (rightImgL + rightImgR) / 2, 0, plusUnit, plusUnit);
      pop();
    }

    if (centerImgHover) {
      push();
      tint(
        255,
        map(
          dist(
            mouseX - width / 2 - shiftX,
            mouseY - height / 2 - shiftY,
            (centerImgR + centerImgL) / 2,
            (allImgT + allImgB) / 2
          ),
          plusUnit / 4,
          plusUnit / 2,
          1,
          0,
          true
        )
      );
      image(set2n1, (leftImgL + leftImgR) / 2, 0, plusUnit, plusUnit);
      image(set2n2, (centerImgL + centerImgR) / 2, 0, plusUnit, plusUnit);
      image(set2n3, (rightImgL + rightImgR) / 2, 0, plusUnit, plusUnit);
      pop();
    }

    if (rightImgHover) {
      push();
      tint(
        255,
        map(
          dist(
            mouseX - width / 2 - shiftX,
            mouseY - height / 2 - shiftY,
            (rightImgR + rightImgL) / 2,
            (allImgT + allImgB) / 2
          ),
          plusUnit / 4,
          plusUnit / 2,
          1,
          0,
          true
        )
      );
      image(set3n1, (leftImgL + leftImgR) / 2, 0, plusUnit, plusUnit);
      image(set3n2, (centerImgL + centerImgR) / 2, 0, plusUnit, plusUnit);
      image(set3n3, (rightImgL + rightImgR) / 2, 0, plusUnit, plusUnit);
      pop();
    }
  } else {
    push();
    tint(255, userActive1Alpha);
    image(set4n1, (leftImgL + leftImgR) / 2, 0, plusUnit, plusUnit);
    pop();

    push();
    tint(255, userActive2Alpha);
    image(set4n2, (centerImgL + centerImgR) / 2, 0, plusUnit, plusUnit);
    pop();

    push();
    tint(255, userActive3Alpha);
    image(set4n3, (rightImgL + rightImgR) / 2, 0, plusUnit, plusUnit);
    pop();
  }

  //

  noFill();
  stroke(color2);
  strokeWeight(baseUnit / 4);

  ellipse((leftImgL + leftImgR) / 2, 0, plusUnit - baseUnit / 4);
  ellipse((centerImgL + centerImgR) / 2, 0, plusUnit - baseUnit / 4);
  ellipse((rightImgL + rightImgR) / 2, 0, plusUnit - baseUnit / 4);
  pop();

  if (width > breakpoint) {
    hoverBool();
    userStatic();
  }

  userActive1();
  userActive2();
  userActive3();

  action();
  customCursor();

  //

  fill(236, 236, 236, loadingAlpha);
  rect(-width, -height, width * 2, height * 2);

  if (!loading) {
    if (loadingAlpha > 0) {
      loadingAlpha -= 0.01;
    }
  }
}

function swiped(event) {
  console.log(event);

  if (event.direction == 2) {
    if (imgSet < 3) {
      imgSet++;
    }
  } else if (event.direction == 4) {
    if (imgSet > 1) {
      imgSet--;
    }
  }
}

function touchStarted() {
  if (width > breakpoint) {
  } else {
    if (
      actionCounter == actionCounterMax &&
      dist(mouseX, mouseY, width - baseUnit * 3, height - baseUnit * 3) < 40
    ) {
      window.open("https://bcut2lhqa2t.typeform.com/to/Efyjelp5", "_self");
    }
  }
}

function mousePressed() {
  if (width > breakpoint) {
    if (actionCounter == actionCounterMax && anyImgHover) {
      window.open("https://bcut2lhqa2t.typeform.com/to/Efyjelp5");
    }
  } else {
  }
}

function customCursor() {
  if (width > breakpoint) {
    noCursor();

    fill(color3);
    noStroke();

    ellipse(
      mouseX,
      mouseY,
      map2(actionCounter, 0, actionCounterMax, 10, 80, QUADRATIC, OUT)
    );

    noFill();
    stroke(0, 18, 216, map(cursorCounter, 0, cursorCounterMax, 1, 0, true));

    ellipse(
      mouseX,
      mouseY,
      map2(cursorCounter, 0, cursorCounterMax, 0, 200, QUADRATIC, OUT)
    );

    fill(
      243,
      63,
      12,
      map2(actionCounter, 0, actionCounterMax, 0, 1, QUADRATIC, IN)
    );
    noStroke();

    textSize(10);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text("I'M\nINTRIGUED!\n->", mouseX, mouseY);
  } else {
    fill(color3);
    noStroke();

    ellipse(
      width - baseUnit * 3,
      height - baseUnit * 3,
      map2(actionCounter, 0, actionCounterMax, 0, 80, QUADRATIC, OUT)
    );

    noFill();
    stroke(0, 18, 216, map(cursorCounter, 0, cursorCounterMax, 1, 0, true));

    ellipse(
      width - baseUnit * 3,
      height - baseUnit * 3,
      map2(cursorCounter, 0, cursorCounterMax, 0, 200, QUADRATIC, OUT)
    );

    fill(
      243,
      63,
      12,
      map2(actionCounter, 0, actionCounterMax, 0, 1, QUADRATIC, IN)
    );
    noStroke();

    textSize(10);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text("I'M\nINTRIGUED!\n->", width - baseUnit * 3, height - baseUnit * 3);
  }
}

function action() {
  if (width > breakpoint) {
    if (anyImgHover) {
      if (actionCounter < actionCounterMax) {
        actionCounter++;
      }
    } else {
      if (actionCounter > 0) {
        actionCounter--;
      }
    }

    if (cursorCounter < cursorCounterMax) {
      cursorCounter++;
    } else {
      if (anyImgHover) {
        cursorCounter = 0;
      } else {
        cursorCounter = cursorCounterMax;
      }
    }
  } else {
    if (imgSet == 3) {
      if (actionCounter < actionCounterMax) {
        actionCounter++;
      }
    } else {
      if (actionCounter > 0) {
        actionCounter--;
      }
    }

    if (cursorCounter < cursorCounterMax) {
      cursorCounter++;
    } else {
      if (imgSet == 3) {
        cursorCounter = 0;
      } else {
        cursorCounter = cursorCounterMax;
      }
    }
  }
}

function userActive3() {
  if (width > breakpoint) {
    push();
    translate(width / 2, height / 2);
    translate(shiftX, shiftY);

    fill(15, 15, 15, userActive3Alpha);
    noStroke();

    textSize(10 + baseUnit / 32);
    textAlign(LEFT, BASELINE);
    textStyle(BOLD);
    text("03        ->", rightImgL, allImgT);

    textAlign(RIGHT, BASELINE);
    text("SOULBOUND", rightImgR, allImgT);

    textSize(20 + baseUnit / 16);
    textAlign(LEFT, TOP);
    textStyle(NORMAL);
    text(
      "->\nOur system runs on the SOOOUL SBT—a Soulbound Token companion that rides along your adventures in and out of Web3...",
      rightImgL,
      allImgB,
      plusUnit
    );
    pop();

    if (rightImgHover) {
      if (userActive3Alpha < 1) {
        userActive3Alpha += 0.026;
      } else {
        userActive3Alpha = 1;
      }
    } else {
      if (userActive3Alpha > 0) {
        userActive3Alpha -= 0.026;
      } else {
        userActive3Alpha = 0;
      }
    }
  } else {
    push();
    translate(width / 2, height / 2);
    translate(mouseXEasing, shiftY);

    fill(15, 15, 15, userActive3Alpha);
    noStroke();

    textSize(10 - baseUnit / 32);
    textAlign(LEFT, BASELINE);
    textStyle(BOLD);
    text("03        ->", rightImgL, allImgT);

    textAlign(RIGHT, BASELINE);
    text("SOULBOUND", rightImgR, allImgT);

    textSize(20 - baseUnit / 8);
    textAlign(LEFT, TOP);
    textStyle(NORMAL);
    text(
      "->\nOur system runs on the SOOOUL SBT—a Soulbound Token companion that rides along your adventures in and out of Web3...",
      rightImgL,
      allImgB,
      plusUnit
    );
    pop();

    if (imgSet == 3) {
      if (userActive3Alpha < 1) {
        userActive3Alpha += 0.026;
      } else {
        userActive3Alpha = 1;
      }
    } else {
      if (userActive3Alpha > 0) {
        userActive3Alpha -= 0.026;
      } else {
        userActive3Alpha = 0;
      }
    }
  }
}

function userActive2() {
  if (width > breakpoint) {
    push();
    translate(width / 2, height / 2);
    translate(shiftX, shiftY);

    fill(15, 15, 15, userActive2Alpha);
    noStroke();

    textSize(10 + baseUnit / 32);
    textAlign(LEFT, BASELINE);
    textStyle(BOLD);
    text("02        ->", centerImgL, allImgT);

    textAlign(RIGHT, BASELINE);
    text("GAMEFI", centerImgR, allImgT);

    textSize(20 + baseUnit / 16);
    textAlign(LEFT, TOP);
    textStyle(NORMAL);
    text(
      "->\nPlay—not pay—to upgrade your soul. SOOOUL gamifies the holding experience by engaging your avatars with your passion...",
      centerImgL,
      allImgB,
      plusUnit
    );
    pop();

    if (centerImgHover) {
      if (userActive2Alpha < 1) {
        userActive2Alpha += 0.026;
      } else {
        userActive2Alpha = 1;
      }
    } else {
      if (userActive2Alpha > 0) {
        userActive2Alpha -= 0.026;
      } else {
        userActive2Alpha = 0;
      }
    }
  } else {
    push();
    translate(width / 2, height / 2);
    translate(mouseXEasing, shiftY);

    fill(15, 15, 15, userActive2Alpha);
    noStroke();

    textSize(10 - baseUnit / 32);
    textAlign(LEFT, BASELINE);
    textStyle(BOLD);
    text("02        ->", centerImgL, allImgT);

    textAlign(RIGHT, BASELINE);
    text("GAMEFI", centerImgR, allImgT);

    textSize(20 - baseUnit / 8);
    textAlign(LEFT, TOP);
    textStyle(NORMAL);
    text(
      "->\nPlay—not pay—to upgrade your soul. SOOOUL gamifies the holding experience by engaging your avatars with your passion...",
      centerImgL,
      allImgB,
      plusUnit
    );
    pop();

    if (imgSet == 2) {
      if (userActive2Alpha < 1) {
        userActive2Alpha += 0.026;
      } else {
        userActive2Alpha = 1;
      }
    } else {
      if (userActive2Alpha > 0) {
        userActive2Alpha -= 0.026;
      } else {
        userActive2Alpha = 0;
      }
    }
  }
}

function userActive1() {
  if (width > breakpoint) {
    push();
    translate(width / 2, height / 2);
    translate(shiftX, shiftY);

    fill(15, 15, 15, userActive1Alpha);
    noStroke();

    textSize(10 + baseUnit / 32);
    textAlign(LEFT, BASELINE);
    textStyle(BOLD);
    text("01        ->", leftImgL, allImgT);

    textAlign(RIGHT, BASELINE);
    text("IDENTITY", leftImgR, allImgT);

    textSize(20 + baseUnit / 16);
    textAlign(LEFT, TOP);
    textStyle(NORMAL);
    text(
      "->\nIn the sea of unique avatars, are you uniquely you? We want to help you define your soul in Web3...",
      leftImgL,
      allImgB,
      plusUnit
    );
    pop();

    if (leftImgHover) {
      if (userActive1Alpha < 1) {
        userActive1Alpha += 0.026;
      } else {
        userActive1Alpha = 1;
      }
    } else {
      if (userActive1Alpha > 0) {
        userActive1Alpha -= 0.026;
      } else {
        userActive1Alpha = 0;
      }
    }
  } else {
    push();
    translate(width / 2, height / 2);
    translate(mouseXEasing, shiftY);

    fill(15, 15, 15, userActive1Alpha);
    noStroke();

    textSize(10 - baseUnit / 32);
    textAlign(LEFT, BASELINE);
    textStyle(BOLD);
    text("01        ->", leftImgL, allImgT);

    textAlign(RIGHT, BASELINE);
    text("IDENTITY", leftImgR, allImgT);

    textSize(20 - baseUnit / 8);
    textAlign(LEFT, TOP);
    textStyle(NORMAL);
    text(
      "->\nIn the sea of unique avatars, are you uniquely you? We want to help you define your soul in Web3...",
      leftImgL,
      allImgB,
      plusUnit
    );
    pop();

    if (imgSet == 1) {
      if (userActive1Alpha < 1) {
        userActive1Alpha += 0.026;
      } else {
        userActive1Alpha = 1;
      }
    } else {
      if (userActive1Alpha > 0) {
        userActive1Alpha -= 0.026;
      } else {
        userActive1Alpha = 0;
      }
    }
  }
}

function userStatic() {
  push();
  translate(width / 2, height / 2);
  translate(shiftX, shiftY);

  fill(15, 15, 15, userStaticAlpha);
  noStroke();

  ellipse((leftImgL + leftImgR) / 2, 0, plusUnit);
  ellipse((centerImgL + centerImgR) / 2, 0, plusUnit);
  ellipse((rightImgL + rightImgR) / 2, 0, plusUnit);

  noFill();
  stroke(
    15,
    15,
    15,
    map(userStaticCounter, 0, userStaticCounterMax / 2, 0.4, 0, true)
  );
  strokeWeight(1);

  ellipse(
    (leftImgL + leftImgR) / 2,
    0,
    map2(
      userStaticCounter,
      0,
      userStaticCounterMax / 2,
      plusUnit,
      fullUnit,
      QUADRATIC,
      OUT
    )
  );
  ellipse(
    (centerImgL + centerImgR) / 2,
    0,
    map2(
      userStaticCounter,
      0,
      userStaticCounterMax / 2,
      plusUnit,
      fullUnit,
      QUADRATIC,
      OUT
    )
  );
  ellipse(
    (rightImgL + rightImgR) / 2,
    0,
    map2(
      userStaticCounter,
      0,
      userStaticCounterMax / 2,
      plusUnit,
      fullUnit,
      QUADRATIC,
      OUT
    )
  );
  pop();

  if (userStaticCounter < userStaticCounterMax) {
    userStaticCounter++;
  } else {
    if (anyImgHover == false && userStaticAlpha == 1) {
      userStaticCounter = 0;
    } else {
      userStaticCounter = userStaticCounterMax;
    }
  }

  if (anyImgHover == false) {
    if (userStaticAlpha < 1) {
      userStaticAlpha += 0.01;
    } else {
      userStaticAlpha = 1;
    }
  } else {
    if (userStaticAlpha > 0) {
      userStaticAlpha -= 0.01;
    } else {
      userStaticAlpha = 0;
    }
  }
}

function hoverBool() {
  if (
    dist(
      (leftImgL + leftImgR) / 2,
      (allImgT + allImgB) / 2,
      mouseX - width / 2 - shiftX,
      mouseY - height / 2 - shiftY
    ) <
    plusUnit / 2
  ) {
    leftImgHover = true;
    imgSet = 1;
  } else {
    leftImgHover = false;
  }

  if (
    dist(
      (centerImgL + centerImgR) / 2,
      (allImgT + allImgB) / 2,
      mouseX - width / 2 - shiftX,
      mouseY - height / 2 - shiftY
    ) <
    plusUnit / 2
  ) {
    centerImgHover = true;
    imgSet = 2;
  } else {
    centerImgHover = false;
  }

  if (
    dist(
      (rightImgL + rightImgR) / 2,
      (allImgT + allImgB) / 2,
      mouseX - width / 2 - shiftX,
      mouseY - height / 2 - shiftY
    ) <
    plusUnit / 2
  ) {
    rightImgHover = true;
    imgSet = 3;
  } else {
    rightImgHover = false;
  }

  if (leftImgHover || centerImgHover || rightImgHover) {
    anyImgHover = true;
  } else {
    anyImgHover = false;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
