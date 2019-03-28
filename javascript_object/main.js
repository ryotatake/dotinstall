'use strict';

{
  const a = [1, 5, 10];

  for( let i = 0; i <= 2; i++ ) {
    console.log( a[i] );
  }

  for( let i = 0; i < a.length; i++ ) {
    console.log( a[i] );
  }

  a.forEach( item => {
    console.log( item );
  });

  a.forEach(( item, index ) => {
    console.log( `${index}: ${item}`);
  });
}
