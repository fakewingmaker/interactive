$("#sleep").change(function() {
  $(".sleep").hide();
  if ($("#sleep").is(":checked")) {
    $(".sleep").show();
  }
});

$("#eat").change(function() {
  $(".eat").hide();
  if ($("#eat").is(":checked")) {
    $(".eat").show();
  }
});

$("#work").change(function() {
  $(".work").hide();
  if ($("#work").is(":checked")) {
    $(".work").show();
  }
});

$("#play").change(function() {
  $(".play").hide();
  if ($("#play").is(":checked")) {
    $(".play").show();
  }
});

var sleep;
var bed = [
  "images/bed_1.jpeg", 
  "images/bed_2.jpeg", 
  "images/bed_3.jpeg", 
  "images/bed_4.jpeg", 
  "images/bed_5.jpeg", 
  "images/bed_6.jpeg", 
  "images/bed_7.jpeg", 
];

var jungle = [
  "images/jungle_1.jpeg", 
  "images/jungle_2.jpeg", 
  "images/jungle_3.jpeg", 
  "images/jungle_4.jpeg", 
  "images/jungle_5.jpeg", 
  "images/jungle_6.jpeg", 
  "images/jungle_7.jpeg", 
]

var cloud = [
  "images/cloud_1.jpeg", 
  "images/cloud_2.jpeg", 
  "images/cloud_3.jpeg", 
  "images/cloud_4.jpeg", 
  "images/cloud_5.jpeg", 
  "images/cloud_6.jpeg", 
  "images/cloud_7.jpeg", 
]

$("#sleep_options").change(function() {
  sleep = $("#sleep_options").val();
  $(".images_sleep").css("width","25vw");

  if (sleep == 1)
   {
     var index = Math.floor(Math.random() * bed.length);
     $(".images_sleep").attr("src",bed[index]);

     $(window).click(function(){
     var index = Math.floor(Math.random() * bed.length);
     $(".images_sleep").attr("src",bed[index]);
     })
   }

  else if (sleep == 2)
   {
     var index = Math.floor(Math.random() * jungle.length);
     $(".images_sleep").attr("src",jungle[index]);

     $(window).click(function(){
     var index = Math.floor(Math.random() * jungle.length);
     $(".images_sleep").attr("src",jungle[index]);
     })
   }

  else if (sleep == 3)
   {
     var index = Math.floor(Math.random() * cloud.length);
     $(".images_sleep").attr("src",cloud[index]);

     $(window).click(function(){
     var index = Math.floor(Math.random() * cloud.length);
     $(".images_sleep").attr("src",cloud[index]);
   })
  }
});

  var eat;
  var lick = [
  "images/lick_1.jpeg", 
  "images/lick_2.jpeg", 
  "images/lick_3.jpeg", 
  "images/lick_4.jpeg", 
  "images/lick_5.gif", 
  "images/lick_6.jpeg", 
  "images/lick_7.jpeg", 
  ]

  var chew = [
  "images/chew_1.jpeg", 
  "images/chew_2.jpeg", 
  "images/chew_3.jpeg", 
  "images/chew_4.jpeg", 
  "images/chew_5.jpeg", 
  "images/chew_6.jpeg", 
  "images/chew_7.jpeg", 
  ]

  var bite = [
  "images/bite_1.jpeg", 
  "images/bite_2.jpeg", 
  "images/bite_3.jpeg", 
  "images/bite_4.jpeg", 
  "images/bite_5.jpeg", 
  "images/bite_6.jpeg", 
  "images/bite_7.jpeg", 
  ]

    var swallow = [
  "images/swallow_1.jpeg", 
  "images/swallow_2.jpeg", 
  "images/swallow_3.jpeg", 
  "images/swallow_4.jpeg", 
  "images/swallow_5.jpeg", 
  "images/swallow_6.jpeg", 
  "images/swallow_7.jpeg", 
  ]

  $("#eat_options").change(function() {
  eat = $("#eat_options").val();
  $(".images_eat").css("width","25vw");

  if (eat == 1)
   {
     var index = Math.floor(Math.random() * lick.length);
     $(".images_eat").attr("src",lick[index]);

     $(window).click(function(){
       var index = Math.floor(Math.random() * lick.length);
       $(".images_eat").attr("src",lick[index]);
     })
   }

  else if (eat == 2)
  {
    var index = Math.floor(Math.random() * chew.length);
    $(".images_eat").attr("src",chew[index]);

    $(window).click(function(){
      var index = Math.floor(Math.random() * chew.length);
      $(".images_eat").attr("src",chew[index]);
    })
  }

  else if (eat == 3)
  {
    var index = Math.floor(Math.random() * bite.length);
    $(".images_eat").attr("src",bite[index]);

    $(window).click(function(){
      var index = Math.floor(Math.random() * bite.length);
      $(".images_eat").attr("src",bite[index]);
    })
  }

  else if (eat == 4)
  {
    var index = Math.floor(Math.random() * swallow.length);
    $(".images_eat").attr("src",swallow[index]);

    $(window).click(function(){
      var index = Math.floor(Math.random() * swallow.length);
      $(".images_eat").attr("src",swallow[index]);
    })
  }
});

  // else if (sleep == 1)
  // {
  //   var index = Math.floor(Math.random() * beach.length);
  //   $(".images").attr("src",beach[index]);
  // }

  // sleep = $("#sleep_options").val();
  // console.log(sleep);
  // $(".images").attr("src",images[sleep]);
//});

// var range = images.length;

// $(window).click(function(){
//   var index = Math.floor(Math.random() * range);
//   var image_src = images[index];
//   var image = document.createElement("img");
//   console.log(image);
//   image.src = image_src;
//   $('body').prepend(image);

// })