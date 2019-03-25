'use strict';

{
  //const player = {
  //  name: 'taguchi',
  //  score: 32,
  //}

  class Player {
    constructor(name, score) {
      this.name = name;
      this.score = score;
    }

    showInfo() {
      console.log( `name: ${ this.name } score: ${ this.score }` );
    }

    static showVersion() {
      console.log( 'Player class ver. 1.0' );
    }
  }

  const taguchi = new Player( 'taguchi', 32 );
  const fkoji = new Player( 'fkoji', 44 );

  taguchi.showInfo();
  fkoji.showInfo();

  Player.showVersion();
}
