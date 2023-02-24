gsap.to('.js-demo-section', { //アニメーションしたい要素を指定
  x: 800, //横に800px動かす
  scrollTrigger: {
    trigger: '.js-trigger',//アニメーションが始まるトリガーとなる要素
    start: 'top center', //アニメーションが始まる位置
    markers: true,
  }
});
