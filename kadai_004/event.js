//HTMLが読み込まれたときに実行
$(window).on('load',function(){
  console.log('loadイベントが発生しました');   
});

//ページが読み込まれた後に、scroll後consoleに表示
$(function(){
  $(window).on('scroll',function(){
      console.log('scrollイベントが発生しました');   
  }); 
});
