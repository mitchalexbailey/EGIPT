  $(document).ready(function(){
    $(".inline").colorbox({inline:true, width:"50%"});
    $("#panel-search").on('input propertychange paste', function(){
     $(".gene").css("background-color","rgba(0,0,0,0)");
     var div = document.getElementById('color-box');
     div.innerHTML = emptyBox;
     hold = $(".gene");
     if($("#panel-search").val().length > 1){
        for(i=0;i<hold.length;i++){
           if(($(hold[i]).attr("title").toLowerCase()).indexOf($("#panel-search").val().toLowerCase()) != -1 | ($(hold[i]).attr("id").toLowerCase()).indexOf($("#panel-search").val().toLowerCase()) != -1 | ($(hold[i]).attr("class").toLowerCase()).indexOf($("#panel-search").val().toLowerCase()) != -1 ){
              temp_id = $(hold[i]).attr("id");
              console.log(temp_id);
              $("#" + temp_id).css("background-color","rgba(255,0,0,0.5)");
           } else {}
        }
  }
  });

  });

  $( function() {
     $( document ).tooltip({
      position: {
        my: "top",
        collision: "fit"
      },
      //   hide: {
      //     fixed: true
      //   },
      //   content: function () {
      //           return $(this).prop('title');
      //       }
      content: function () {
            return $(this).prop('title');
        },
        show: null, 
        close: function (event, ui) {
            ui.tooltip.hover(
            function () {
                $(this).stop(true).fadeTo(400, 1);
            },    
            function () {
                $(this).fadeOut("400", function () {
                    $(this).remove();
                })
            });
        },
     });
  } );

  function disclaimer(){
    $("#disclaimer").hide();
    $("#main").fadeIn(600);
  }

  var red_array = [];
  var blue_array = [];
  var green_array = [];
  var highlighted = [];
  var emptyBox = "<h4>Currently highlighted:</h4>";

  //functions
  function toTitleCase(str)
  {
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  function highlight(type){
        if(highlighted.indexOf(type) == -1){
              highlighted.push(type);
              } else {console.log(highlighted.indexOf(type)); return; }
        temp1 = Math.ceil(Math.random()*255);
        for(i=0;i<red_array.length;i++){
              if(Math.abs(red_array[i] - temp1) < 15){
                    console.log("oops: " +red_array[i]+ ", "+temp1);
                    temp1 = Math.ceil(Math.random()*255);
                    i = 0; continue;
              } else {}
        }
        red_array.push(temp1);

        temp2 = Math.ceil(Math.random()*255);
        for(i=0;i<blue_array.length;i++){
              if(Math.abs(blue_array[i] - temp2) < 15){
                    console.log("oops: " +blue_array[i]+ ", "+temp2);
                    temp2 = Math.ceil(Math.random()*255);
                    i = 0; continue;
              } else {}
        }
        blue_array.push(temp2);

        temp3 = Math.ceil(Math.random()*255);
        for(i=0;i<green_array.length;i++){
              if(Math.abs(green_array[i] - temp3) < 15){
                    console.log("oops: " +green_array[i]+ ", "+temp3);
                    temp3 = Math.ceil(Math.random()*255);
                    i = 0; continue;
              } else {}
        }
        green_array.push(temp3);

        randomColor = "rgba("+temp1+","+temp2+","+temp3+",0.4)";
        console.log(red_array, green_array, blue_array);
        $("." + type).css("background-color", randomColor);
        var div = document.getElementById('color-box');

        var str_type = type.replace("-"," ");
        str_type = toTitleCase(str_type);
        div.innerHTML = div.innerHTML + "<button class='btn btn-primary gene-btn indicate-highlight "+type+ "' style='color: black; padding: 20px; background-color:" + randomColor + "' onclick=remove('" +type+ "')>" + str_type + "</button>";
  };

  function resetGenes(){
        $(".gene").css("background-color","rgba(0,0,0,0)");
        var div = document.getElementById('color-box');
        div.innerHTML = emptyBox;
        blue_array = [];
        green_array = [];
        red_array = [];
        highlighted = [];
  };

  function remove(x){
        $("." + x + ".indicate-highlight").remove();
        $("." + x).css("background-color", "rgba(0,0,0,0)");
        temp = highlighted.indexOf(x);
        highlighted.splice(temp, 1);
  }

  //event listeners
  

  (function($) {
      $.fn.textfill = function(maxFontSize) {
          maxFontSize = parseInt(maxFontSize, 10);
          return this.each(function(){
              var ourText = $("span", this),
                  parent = ourText.parent(),
                  maxHeight = parent.height(),
                  maxWidth = parent.width(),
                  fontSize = parseInt(ourText.css("fontSize"), 10),
                  multiplier = maxWidth/ourText.width(),
                  newSize = (fontSize*(multiplier-0.1));
              ourText.css(
                  "fontSize", 
                  (maxFontSize > 0 && newSize > maxFontSize) ? 
                      maxFontSize : 
                      newSize
              );
          });
      };
  })(jQuery);

