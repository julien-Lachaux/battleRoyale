import * as PIXI from 'pixi.js'

/************** TO REMOVE LATER */
function demo(callback = () => {}) { callback('hello client') }
demo((text) => { console.log(text) })
/************** TO REMOVE LATER */

// on instancie PIXI
const app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb})
document.querySelector('#appWrapper').appendChild(app.view)

// on ajoute une conteneur
const container = new PIXI.Container()
app.stage.addChild(container)

const texture = PIXI.Texture.fromImage('./../../ressources/player_demo_1.png')
// Create a 5x5 grid of bunnies
for (var i = 0; i < 25; i++) {
    var bunny = new PIXI.Sprite(texture);
    bunny.anchor.set(0.5);
    bunny.x = (i % 5) * 60;
    bunny.y = Math.floor(i / 5) * 60;
    container.addChild(bunny);
}

// Center on the screen
container.x = (app.screen.width - container.width) / 2;
container.y = (app.screen.height - container.height) / 2;