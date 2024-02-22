$(function(){
    // トップに戻るボタンのスムーススクロール
    $(".to-top img").click(function(){
        $("html,body").animate({scrollTop:0},500);
    });

    // TOPスライドショー
    $(".slick01").slick({
    autoplay: true,
    dots: true,

    responsive: 
        {
          breakpoint: 768,
          settings: {
            arrows: false,
          }
        }

    });

    // フェードイン
    $(window).scroll(function (){
      $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
    
          if (scroll > elemPos - windowHeight + 150){
            $(this).addClass('scrollin');
          }
      });
    });
    
    // PRODUCTS
      $("button").click(function(){
          var target = $(this).attr("value");
          
          $("#list li").each(function(){
              $(this).animate({"opacity":0}, 300, function(){
              $(this).hide();
  
              if($(this).hasClass(target)|| target == "all"){
                  $(this).show();
                  $(this).animate({"opacity":1}, 300);
              }
              });
          });
      });
  
    // CONTACT US
      $(function(){
        $("#drop").children("li").hover(function(){
          $(this).children("ul").stop().slideToggle(100);
      });
    });

    // CONTACT US FORM
      $(".alert").hide();

      $("#submitBtn").click(function(){

        var sendFlag = true;

        
        // 「お名前」エリアのチェック
        if(!$("#name").val()){
          $("#nameSection .alert").show();
          sendFlag = false;
      }else{
          $("#nameSection .alert").hide();
      }

        // 「電話」エリアのチェック
        if(!$("#phone").val()){
            $("#phoneSection .alert").show();
            sendFlag = false;
        }else{
            $("#phoneSection .alert").hide();
        }

          // 「メール」エリアのチェック
          if(!$("#email").val()){
            $("#emailSection .alert").show();
            sendFlag = false;
        }else{
            $("#emailSection .alert").hide();
        }

        // 「TextArea」エリアのチェック
        if(!$("#textarea").val()){
            $("#textareaSection .alert").show();
            sendFlag = false;
        }else{
            $("#textareaSection .alert").hide();
        }


        return false;
      });

});


