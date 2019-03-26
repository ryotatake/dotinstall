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

  class SoccerPlayer extends Player {
    constructor( name, score, number ) {
      super( name, score );
      this.number = number;
    }
    kick() {
      console.log( "Goooaaal!" );
    }
  }

  const tsubasa = new SoccerPlayer( 'tsubasa', 99, 10 );

  tsubasa.kick();
  console.log( tsubasa.number );
  tsubasa.showInfo();
}
