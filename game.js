let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}

PIXI.utils.sayHello(type)

//Create a Pixi Application
let app = new PIXI.Application({ 
  width: 256,         // default: 800
  height: 256,        // default: 600
  antialias: true,    // default: false
  transparent: false, // default: false
  resolution: 1       // default: 1
}
			      );

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

//Change backgroud color
app.renderer.backgroundColor = 0x061639;

//Resize
app.renderer.autoResize = true;
app.renderer.resize(1200, 800);

//fullsize
//app.renderer.view.style.position = "absolute";
//app.renderer.view.style.display = "block";
//app.renderer.autoResize = true;
//app.renderer.resize(window.innerWidth, window.innerHeight);

PIXI.loader
  .add("images/renge.png")
  .add("images/inaka.jpg")
  .load(setup);	

let renge
let inaka
//Spriteにテクスチャキャッシュから読み込む
function setup() {
  loadImages()
  makeText()
  app.ticker.add(delta => gameLoop(delta));
}

//右に移動
function gameLoop(delta){
  //Move the cat 1 pixel 
  renge.x += 1;
}

// 背景とキャラ
function loadImages(){
  //画像をテクスチャキャッシュに読み込み
  renge = new PIXI.Sprite(PIXI.loader.resources["images/renge.png"].texture);
  inaka = new PIXI.Sprite(PIXI.loader.resources["images/inaka.jpg"].texture);
  app.stage.addChild(inaka)
  app.stage.addChild(renge)
}

// テキストボックス
function makeText(){
  
  let Graphics = PIXI.Graphics
  let Text = PIXI.Text

  //角丸四角形
  let roundBox = new PIXI.Graphics();
  roundBox.lineStyle(4, 0x000000, 1);
  roundBox.beginFill(0xFFFFFF);
  roundBox.drawRoundedRect(0, 0, 1000, 150, 10);
  roundBox.endFill();
  roundBox.x = 48;
  roundBox.y = 640;
  app.stage.addChild(roundBox);
  
  //テキスト
  let name = new Text("れんちょん");
  name.position.set(100, 650);
  app.stage.addChild(name);
  
  //テキスト
  let message = new Text("わたしはれんげ、みぎにいくのん！");
  message.position.set(100, 680);
  app.stage.addChild(message);
  
}
