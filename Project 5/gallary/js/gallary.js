lightbox.option({
    showImageNumberLabel: false,
    wrapAround: true,
    disableScrolling: true
});

	


let search = $("#search");    // target input search field
let img = $("a");  
search.keyup((event) => {
    let value = search.val().toLowerCase();
    img.show();
    if (value !== "") {
      img.not(`[data-title*="${value}"]`).hide();
    } 
  });
	