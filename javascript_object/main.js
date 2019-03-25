'use strict';

{
  const player = {
    name: 'taguchi',
    score: 32,
  }
  console.log( player.name );
  console.log( player['name'] );

  player.score = 100;
  console.log( player );

  player.email = 'taguchi@gmail.com';
  console.log( player.email );

  delete player.score;
  console.log( player );
}
