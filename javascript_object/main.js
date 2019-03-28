'use strict';

{
  const a = [1, 2, 5, 10];
  const b = [];
  a.forEach( item => {
    b.push( item * 2 );
  });
  console.log( b );

  const c = a.map( item => {
    return item * 2;
  });

  const d = a.map( item => item * 2 );
  console.log( d );

  const e = a.filter( item => item % 2 === 0 );
  console.log( e );
}
