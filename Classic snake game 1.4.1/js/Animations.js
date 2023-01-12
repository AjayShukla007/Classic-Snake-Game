let ani1 = anime({
   targets: startAlert,
   easing: 'linear',
   keyframes: [
      // {background: ''},
      {boxShadow: '0 0 6px 0 #15401D'},
   ],
   duration: 2000,
   loop: true,
})
let ani2 = anime.timeline({
   duration: 200,
   easing: 'easeOutExpo',
   loop: true,
})
ani2
.add({
   targets: '#latter1',
   keyframes: [
      {color: '#072D07'},
      {color: '#000'},
      {translateY: -10},
      {translateY: 0},
      
   ],

})
.add({
   targets: '#latter2',
   keyframes: [
      { color: '#072D07' },
      { color: '#000' },
      {translateY: -10},
      {translateY: 0},
      
   ],})
.add({
   targets: '#latter3',
   keyframes: [
      { color: '#072D07' },
      { color: '#000' },
      {translateY: -10},
      {translateY: 0},
      
   ],})
.add({
   targets: '#latter4',
   keyframes: [
      { color: '#072D07' },
      { color: '#000' },
      {translateY: -10},
      {translateY: 0},
      
   ],})
.add({
   targets: '#latter5',
   keyframes: [
      { color: '#072D07' },
      { color: '#000' },
      {translateY: -10},
      {translateY: 0},
      
   ],})
.add({
   targets: '#latter6',
   keyframes: [
      { color: '#072D07' },
      { color: '#000' },
      {translateY: -10},
      {translateY: 0},
      
   ],})
.add({
   targets: '#latter7',
   keyframes: [
      { color: '#072D07' },
      { color: '#000' },
      {translateY: -10},
      {translateY: 0},
      
   ],})
.add({
   targets: '#dot1',
   keyframes: [
      { color: '#072D07' },
      { color: '#000' },
      {translateY: -7},
      {translateY: 0},
   ],})
.add({
   targets: '#dot2',
   keyframes: [
      { color: '#072D07' },
      { color: '#000' },
      {translateY: -7},
      {translateY: 0},
   ],})
.add({
   targets: '#dot3',
   keyframes: [
      { color: '#072D07' },
      { color: '#000' },
      {translateY: -7},
      {translateY: 0},
   ],})
.add({
   targets: '#dot4',
   keyframes: [
      { color: '#072D07' },
      { color: '#000' },
      {translateY: -7},
      {translateY: 0},
   ],})
