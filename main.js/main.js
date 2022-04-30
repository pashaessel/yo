let words = 'If, you can read?';
let nato = {
    a: 'Alfa',
    b: 'Bravo',
    c: 'Charlie',
    d: 'Delta',
    e: 'Echo',
    f: 'Foxtrot',
    g: 'Golf',
    h: 'Hotel',
    i: 'India',
    j: 'Juliett',
    k: 'Kilo',
    l: 'Lima',
    m: 'Mike',
    n: 'November',
    o: 'Oscar',
    p: 'Papa',
    q: 'Quebec',
    r: 'Romeo',
    s: 'Sierra',
    t: 'Tango',
    u: 'Uniform',
    v: 'Victor',
    w: 'Whiskey',
    x: 'Xray',
    y: 'Yankee',
    z: 'Zulu'
 };
 let specials = ',.!?';
 words = words.toLowerCase();
 let array = words.split('');
let new_arr =  array.filter(cur => cur !== ' ').map((cur,index) => {
   if(nato[cur]) {
      return nato[cur];
   };
   if(specials.includes(cur)) {
      return ` ${cur} `;
   }
}) ;

console.log(new_arr.join(' '));
 