var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7539174a-9273-49b8-86bc-d8cfca640fbd","5874f92b-5633-423f-afd7-10031fb5528a","18fef429-8975-42fc-bb8f-621914ae66ce"],"propsByKey":{"7539174a-9273-49b8-86bc-d8cfca640fbd":{"name":"sticker_33_1","sourceUrl":null,"frameSize":{"x":332,"y":282},"frameCount":1,"looping":true,"frameDelay":12,"version":"EZp9DyAfG.3ogJVY6oA6de6f1ciTRMLn","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":282},"rootRelativePath":"assets/7539174a-9273-49b8-86bc-d8cfca640fbd.png"},"5874f92b-5633-423f-afd7-10031fb5528a":{"name":"planet14_1","sourceUrl":null,"frameSize":{"x":400,"y":372},"frameCount":1,"looping":true,"frameDelay":12,"version":"urW8ldWwumIj9FcrC.MYmkFlEKEdZ5ZC","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":372},"rootRelativePath":"assets/5874f92b-5633-423f-afd7-10031fb5528a.png"},"18fef429-8975-42fc-bb8f-621914ae66ce":{"name":"background_landscape11_1","sourceUrl":"assets/api/v1/animation-library/gamelab/48WvIjYXVxyuCdt3Jah08koeLbeNGtRC/category_backgrounds/background_landscape11.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"48WvIjYXVxyuCdt3Jah08koeLbeNGtRC","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/48WvIjYXVxyuCdt3Jah08koeLbeNGtRC/category_backgrounds/background_landscape11.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var rocket;
var asteroid1;
var asteroid2;
var asteroid3;
var asteroid4;
var planet;
var life=0;

//creating rocket and asteroid sprites
var rocket=createSprite(202,360,30,30);
rocket.setAnimation("sticker_33_1");
rocket.scale=0.25;

var asteroid1=createSprite(190,290);
asteroid1.setAnimation("planet14_1");
asteroid1.scale=0.12;

var asteroid2=createSprite(260,220);
asteroid2.setAnimation("planet14_1");
asteroid2.scale=0.12;

var asteroid3=createSprite(110,140);
asteroid3.setAnimation("planet14_1");
asteroid3.scale=0.12;

var asteroid4=createSprite(50,70);
asteroid4.setAnimation("planet14_1");
asteroid4.scale=0.12;

var planet=createSprite(200,20,20,20);
planet.setAnimation("background_landscape11_1");
planet.scale=0.20;

  //velocity for asteroids
 asteroid1.velocityX=9;
 asteroid2.velocityX=-9;
 asteroid3.velocityX=9;
 asteroid4.velocityX=-9;
 
function draw() {
 background("indigo"); 
  
 fill("pink");
  stroke("yellow");
  textSize(30);
   text("Life:" +life,30,380);
   fill("pink");
  stroke("yellow");
  textSize(25);
   text("Goal",245,40);
   
   //moving the rocket with the help of arrow keys
  if (keyDown("up")) {
    rocket.y=rocket.y-5;
  }
   if (keyDown("down")) {
    rocket.y=rocket.y+5;
  }
  
   if (rocket.isTouching(asteroid1)||rocket.isTouching(asteroid2)||rocket.isTouching(asteroid3)){
     rocket.x=202;
     rocket.y=360;
     life=life+1;
     playSound("assets/category_alerts/retro_game_powerup_7.mp3",false);
   }
   
   if (rocket.isTouching(planet)) {
    fill("pink");
    stroke("yellow");
    textSize(48);
   text("YOU WIN !!",110,200);
   asteroid1.velocityX=0;
   asteroid2.velocityX=0;
   asteroid3.velocityX=0;
   rocket.velocityY=0;
   }
   
  
 createEdgeSprites();
 asteroid1.bounceOff(edges);
 asteroid2.bounceOff(edges);
 asteroid3.bounceOff(edges);
 asteroid4.bounceOff(edges);
 rocket.bounceOff(edges);
 
 drawSprites(); 
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
