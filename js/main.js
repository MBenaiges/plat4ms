'use strict'

const main = () => {

  //Crea el Dom
  const buildDom = (html) => {
    const main = document.querySelector('main');
    main.innerHTML = html;
    return main;
  };

  //Crea la pantalla principal
  const buildSplashScreen = () => {
    const splashScreen = buildDom(`
  <section class="splash-screen">
  <h1>GAME NAME</h1>
  <button>New Game!</button>
  </section>
  `);
  //Boton para ir a la pantalla del juego
  const startButton = document.querySelector('button');
  startButton.addEventListener('click', buildGameScreen);
  };

  //Crea la pantalla del juego
  const buildGameScreen = () => {
    const gameScreen = buildDom(`
    <h1>Game Screen</h1>
    <section class = "game-screen">
      <canvas></canvas>
    </section>
  `);
  
  //Creamos canvas
  const width = document.querySelector('.game-screen').offsetWidth;
  const height = document.querySelector('.game-screen').offsetHeight;

  const canvasElement = document.querySelector('canvas');
  canvasElement.setAttribute('width',width);
  canvasElement.setAttribute('height',height);
  
  //Comprobamos que pasados 3 segundos salta a la pantalla de Game Over
  //setTimeout(buildGameOver, 3000);
  
  //Iniciamos juego
  const game = new Game(canvasElement);
  game.gameOverCallBack(buildGameOver);

  game.startLoop();

  }
  //Crea la pantall de Game Over
  const buildGameOver = () => {
    const gameOverScreen = buildDom(`
    <section class="game-over">
      <h1>Game Over</h1>
      <button>Restart</button>
    </section>
    `);
  //boton de restart buton, k nos vuelve a llevar a la pantalla del juego
  const restartButton = document.querySelector('button');
  restartButton.addEventListener('click',buildGameScreen);
  }
  
 
  buildSplashScreen();
};




window.addEventListener('load', main);