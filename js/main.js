$(".filter-list__heading").on("click", function (e) {
  $(this).parent().toggleClass("opened");
});
$(".color-checkbox-list__item").on("click", function (e) {
  $(this).toggleClass("selected");
});
$(".sort-btn__heading").on("click", function (e) {
  $(this).parent().toggleClass("active");
});
$(".filter__header").on("click", function (e) {
  $(this).parent().toggleClass("expanded");
});
$(".filter-btn").on("click", function (e) {
  $(".filter-overlay").addClass("opened");
});
$(".filter-overlay__close-btn").on("click", function (e) {
  $(".filter-overlay").removeClass("opened");
});
$(".search").on("input", function () {
  if ($(this).find(".search__input").val().length > 4) {
    $(this).addClass("active");
  } else {
    $(this).removeClass("active");
  }
});
$(".search__clear-btn").on("click", function (e) {
  $(this).parent().find(".search__input").val("");
  $(this).parent().removeClass("active");
});

$(document).ready(function () {
  var carousel = $(".gl-carousel");
  var carouselPrevBtn = $(".gl-carousel__prev-btn");
  var carouselNextBtn = $(".gl-carousel__next-btn");
  var carouselWidth = carousel.width();
  var carouselList = carousel.find(".gl-carousel-list");
  var carouselItems = carouselList.find(".gl-carousel-list__item");
  var itemsCount = carouselItems.length;
  var itemWidth = carouselItems.width();
  var itemsWidth = itemWidth * itemsCount;
  var leftIndent = 0;

  carouselList.css("width", itemsWidth + "px");

  function checkPosition() {
    if (leftIndent === 0) {
      carouselPrevBtn.addClass("hidden");
    } else {
      carouselPrevBtn.removeClass("hidden");
    }
    if (leftIndent <= -itemsWidth + carouselWidth) {
      carouselNextBtn.addClass("hidden");
    } else {
      carouselNextBtn.removeClass("hidden");
    }

    // Проверяем достижение последнего элемента
    if (leftIndent <= -(itemsWidth - carouselWidth)) {
      console.log("Достигнут последний элемент!");
    }

    // Проверяем достижение первого элемента
    if (leftIndent === 0) {
      console.log("Достигнут первый элемент!");
    }
  }

  checkPosition();

  carouselNextBtn.click(function () {
    leftIndent -= itemWidth;
    carouselList.css("transform", "translateX(" + leftIndent + "px)");
    checkPosition();
  });

  carouselPrevBtn.click(function () {
    leftIndent += itemWidth;
    carouselList.css("transform", "translateX(" + leftIndent + "px)");
    checkPosition();
  });
});

$(".catalogue-list__wishlist").on("click", function (e) {
  $(this).toggleClass("filled");
});

$(".product-section__header").on("click", function (e) {
  $(this).parent().toggleClass("opened");
});

$(document).ready(function () {
  $(".scrollbar__track").each(function () {
    scrollbar_width = $(this).parent().outerWidth();
    container_width = $(this).parent().parent().width();
    list = $(this).parent().parent().find(".product-recomendations__list").children(".product-recomendations__item");
    count_li = list.length;
    width_li = list.outerWidth();;
    width_list = count_li * width_li;

    if (scrollbar_width > width_list) {
      $(this).parent().hide();
    } else {
      $(this).css("width", (container_width / width_list) * scrollbar_width + "px");
    }
  });
});

$(document).ready(function () {
  var isDragging = false;
  var lastX;
  var offsetLeft = 0;
  $(".scrollbar__track").mousedown(function (event) {
    scrollbar_track = $(this);
    isDragging = true;
    lastX = event.clientX;
    offsetLeft = parseInt($(this).css("left")) || 0;

    $(this).css("cursor", "grabbing");

    $(document).mousemove(function (event) {
      if (isDragging) {
        var deltaX = event.clientX - lastX;

        if (Math.sign(offsetLeft + deltaX) == -1) {
          $(scrollbar_track).css("left", "0px");
          $(scrollbar_track).parent().parent().find("ul").scrollLeft(0);
        } else {
          if (
            offsetLeft + deltaX + $(scrollbar_track).width() >
            $(scrollbar_track).parent().width()
          ) {
            $(scrollbar_track).css(
              "left",
              $(scrollbar_track).parent().width() - $(scrollbar_track).width()
            );
          } else {
            list = $(scrollbar_track).parent().parent().find("ul").children("li");

            container_width = $(scrollbar_track).parent().parent().width();

            count_li = list.length;
            width_li = list.width();
            width_list = count_li * (width_li + 8);
            percent = (offsetLeft + deltaX) / ($(scrollbar_track).parent().width() - $(scrollbar_track).width());
            console.log(width_list,container_width)

            $(scrollbar_track).css("left", offsetLeft + deltaX);
            $(scrollbar_track).parent().parent().find("ul").scrollLeft(percent * (width_list - container_width));
          }
        }
      }
    });
  });
  $(document).mouseup(function () {
    isDragging = false;
    $(".element").css("cursor", "grab");
  });
});

$("video").on("click", function (e) {
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
});


$(".gl-tab__item").on("click", function(e) {
  index = $(this).index()
  tabs_content = $(this).parent().parent().parent().parent().find(".gl-tabs-content").children(".gl-carousel-system")


  $(this).parent().children(".gl-tab__item").removeClass("gl-tab__item--active")
  $(this).addClass("gl-tab__item--active")
  $(tabs_content).addClass("hidden")
  $(tabs_content).eq(index).removeClass("hidden")
});

$(".m-menu__link").on("click", function(e) {
  $(".m-menu__content").addClass("section-toggled")
  $(this).parent().children(".m-menu__sub-section").addClass("opened")
});
$(".m-menu__close").on("click", function(e) {
  $(".m-menu").removeClass("opened")
});
$(".m-menu__sub-section__close").on("click", function(e) {
  $(this).parent().parent().removeClass("opened")
});
$(".mm-btn").on("click", function(e) {
  $(".m-menu").addClass("opened")
});
$(".m-search__close").on("click", function(e) {
  $(".m-search").removeClass("opened")
});
$(".mm-search").on("click", function(e) {
  $(".m-search").addClass("opened")
});
$(".btn-clear-search").on("click", function(e) {
  $(this).parent().find("input").val("")
});