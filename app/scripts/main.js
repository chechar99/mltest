(function() {
    //Main javascript for page here
    console.log("working");
    var options = {
      item: 3,
      verticalHeight:100,
      autoWidth: false,
      slideMove: 1, // slidemove will be 1 if loop is true
      slideMargin: 10,
      galleryMargin: 5,
      thumbMargin: 5,
      controls: true,
      prevHtml: '<span class="slider_buttons">< </>',
      nextHtml: '<span class="slider_buttons">></>'

    };
    $("#carousel_product").lightSlider(options);
    // Create a new Tabs.
    
    //var carousel = $("#carousel_product").carousel();
    //var carousel = new ch.Carousel($("#carousel_product"), {});
})();
