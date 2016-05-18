/* Slider Widget
--------------------------------------*/

  var numOfSliderPosts = 8;
  var slider = $('#slider .widget-content');
  var sliderContent = slider.text().trim();
  slider.addClass('clearfix');

  if((sliderContent.toLowerCase() !== 'no') && (sliderContent !== '"no"')) {
    $.ajax({
      url: "/feeds/posts/default/-/"+ sliderContent +"?alt=json-in-script&max-results="+ numOfSliderPosts +"",
      type: "get",
      dataType: "jsonp",
      success: function (e) {

        var img  = new Array();
        var trtd2 = '';		
        var numOfEntries = e.feed.entry.length;
        
        for (var i = 0; i < numOfEntries; i++) {
          var entry = e.feed.entry[i];
          var posttitle = entry.title.$t;
          var posturl;

          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
              posturl = entry.link[k].href;
              break;
            }
          }

          if ("content" in entry) {
            var postcontent = entry.content.$t;
          }

          s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

          if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

          var tmb = img[i].replace('s1600/','w891-h555-c/');

          if(i===0) {

            var category = '<a class="slider-post-category slider-post-info-a" href="/search/label/'+ entry.category[0].term +'?max-results=7"><i class="fa fa-tags"></i><br/>'+entry.category[0].term+'</a>';

            var post_comments;
            var comment_url;

            for (var k = 0; k < entry.link.length; k++) {
              if ((entry.link[k].rel === 'replies') && (entry.link[k].type === 'text/html')) {
                post_comments = entry.link[k].title;
                comment_url = entry.link[k].href;
                break;
              }
            } 

            post_comments = parseInt(post_comments, 10);

            var postdate = entry.published.$t;
            var day = postdate.split("-")[2].substring(0,2);
            var m = postdate.split("-")[1];
            var y = postdate.split("-")[0];
            var daystr = day+ '.' + m + '.' + y;

            var summary = postcontent.replace(/<.+?>/g, '').substring(0, 200) + "...";

            var postInfo= '<ul class="slider-post-info"><li class="slider-post-info-item"><a class="slider-post-date slider-post-info-a"><i class="fa fa-calendar"></i><br/>'+ daystr +'</a></li><li class="slider-post-info-item"><a class="slider-post-comments slider-post-info-a" href="'+ comment_url +'"><i class="fa fa-comments"></i><br/>'+ post_comments +'</a></li><li class="slider-post-info-item">'+ category +'</li></ul>'

            var trtd1 = '<div class="slider-big-box"><div class="slider-image-wrapper" href="'+ posturl +'" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ postInfo +'<div class="title-and-summary"><a href="'+ posturl +'" class="slider-post-title"><h2 class="heading">'+ posttitle +'</h2></a><p class="slider-post-summary">'+ summary +'</p></div></div></div>';
          }
          else
          {
            var trtd2 = trtd2 + '<li class="slider-small-items" style="background: url('+ tmb +') no-repeat center;background-size: cover"><a href="'+ posturl +'" class="slider-post-title"><h2 class="heading">'+ posttitle +'</h2></a></li>';
          }

        }

        if(numOfSliderPosts > 4) {
          slider.html(trtd1 + '<div class="slider-small-container clearfix"><button id="up"><i class="fa fa-chevron-up"></i></button><button id="down"><i class="fa fa-chevron-down"></i></button><div class="slider-small-wrapper"><ul class="slider-small-box">' + trtd2 + '</ul></div></div>');
        } else {
          slider.html(trtd1 + '<div class="slider-small-container clearfix"><div class="slider-small-wrapper"><ul class="slider-small-box">' + trtd2 + '</ul></div></div>');
        } 
      }
    });
  } else {
    $(".slider-wrapper").remove()
  }

/* Must Read Widget
--------------------------------------*/

  var mustReadSection = $('#must-read .widget-content');
  var mustReadContent = mustReadSection.text().trim();

  if((mustReadContent.toLowerCase() !== 'no') && (mustReadContent !== '"no"')) {
    $.ajax({
      url: "/feeds/posts/default/-/"+ mustReadContent +"?alt=json-in-script&max-results=4",
      type: "get",
      dataType: "jsonp",
      success: function (e) {

        var img  = new Array();
        var trtd = '';		
        var numOfEntries = e.feed.entry.length;

        for (var i = 0; i < numOfEntries; i++) {
          var entry = e.feed.entry[i];
          var posttitle = entry.title.$t;
          var posturl;

          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
              posturl = entry.link[k].href;
              break;
            }
          }

          if ("content" in entry) {
            var postcontent = entry.content.$t;
          }

          s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

          if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

          var tmb = img[i].replace('s1600/','w500-h500-c/');

          var post_comments;
          var comment_url;

          for (var k = 0; k < entry.link.length; k++) {
            if ((entry.link[k].rel === 'replies') && (entry.link[k].type === 'text/html')) {
              post_comments = entry.link[k].title;
              comment_url = entry.link[k].href;
              break;
            }
          } 

          post_comments = parseInt(post_comments, 10);

          var postdate = entry.published.$t;
          var day = postdate.split("-")[2].substring(0,2);
          var m = postdate.split("-")[1];
          var y = postdate.split("-")[0];
          var daystr = day+ '.' + m + '.' + y;

          var summary = postcontent.replace(/<.+?>/g, '').substring(0, 90) + "...";

          var trtd = trtd + '<li class="must-read-item"><a href="'+ posturl +'" class="must-read-image" style="background: url('+ tmb +') no-repeat center; background-size: cover;"></a><a href="'+ posturl +'" class="must-read-title"><h2 class="heading">'+ posttitle +'</h2></a><p class="must-read-summary">'+ summary +'</p><div class="must-read-info"><span class="publish-date"><i class="fa fa-clock-o icon"></i>'+ daystr +'</span><a class="comments" href="'+comment_url +'"><i class="fa fa-comment icon"></i>'+ post_comments +'</a></div></li>';

        }
        mustReadSection.html("<ul class='must-read-posts clearfix'>" + trtd + "</ul>");
      }

    });
  } else {
    $(".must-read-wrapper").remove();
    $(".slider-wrapper").css({
      "background": "#fff",
      "border-bottom": "2px solid #ccc"
    });
  }
