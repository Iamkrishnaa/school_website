//the below code will show loader until page loads
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector(
      "body").style.visibility = "hidden";
    document.querySelector(
      "#loader").style.visibility = "visible";
  } else {
    document.querySelector(
      "#loader").style.display = "none";
    document.querySelector(
      "body").style.visibility = "visible";
  }
};

//Get the button
var mybutton = document.getElementById("goUp");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

jQuery(document).ready(function () {
  jQuery("#my_nanogallery2").nanogallery2({
    items: [
      { src: 'berlin1.jpg', srct: 'berlin1t.jpg', title: 'Berlin 1' },
      { src: 'berlin2.jpg', srct: 'berlin2t.jpg', title: 'Berlin 2' },
      { src: 'berlin3.jpg', srct: 'berlin3t.jpg', title: 'Berlin 3' },
      { src: 'berlin1.jpg', srct: 'berlin1t.jpg', title: 'Berlin 1' },
      { src: 'berlin2.jpg', srct: 'berlin2t.jpg', title: 'Berlin 2' },
      { src: 'berlin3.jpg', srct: 'berlin3t.jpg', title: 'Berlin 3' },
      { src: 'berlin1.jpg', srct: 'berlin1t.jpg', title: 'Berlin 1' },
      { src: 'berlin2.jpg', srct: 'berlin2t.jpg', title: 'Berlin 2' },
      { src: 'berlin3.jpg', srct: 'berlin3t.jpg', title: 'Berlin 3' },
      { src: 'berlin1.jpg', srct: 'berlin1t.jpg', title: 'Berlin 1' },
      { src: 'berlin2.jpg', srct: 'berlin2t.jpg', title: 'Berlin 2' },
      { src: 'berlin3.jpg', srct: 'berlin3t.jpg', title: 'Berlin 3' },
      { src: 'berlin1.jpg', srct: 'berlin1t.jpg', title: 'Berlin 1' },
      { src: 'berlin2.jpg', srct: 'berlin2t.jpg', title: 'Berlin 2' },
      { src: 'berlin3.jpg', srct: 'berlin3t.jpg', title: 'Berlin 3' }
    ],
    thumbnailWidth: 'auto',
    thumbnailHeight: 300,
    itemsBaseURL: 'https://nanogallery2.nanostudio.org/samples/',

    galleryDisplayMode: 'pagination',                 // gallery pagination mode
    galleryMaxRows: 3,                                // gallery with max 3 rows
    gallerySorting: 'random',
    thumbnailAlignment: 'fillWidth',
    thumbnailL1GutterWidth: 20,
    thumbnailL1GutterHeight: 20,
    thumbnailBorderHorizontal: 1,
    thumbnailBorderVertical: 1,

    // THUMBNAIL TOOLS & LABEL
    thumbnailL1Label: { display: true, position: 'overImageOnTop', hideIcons: true, titleFontSize: '1.5em', align: 'left' },
    thumbnailToolbarImage: { topLeft: 'select', bottomRight: 'featured,display,download' },

    // DISPLAY ANIMATION
    thumbnailDisplayTransition: 'flipUp',       // thumbnail display animation
    thumbnailDisplayTransitionDuration: 400,
    thumbnailDisplayInterval: 200,
    thumbnailDisplayOrder: 'rowByRow',

    // THUMBNAIL'S HOVER ANIMATION
    thumbnailHoverEffect2: 'toolsSlideUp|labelSlideDown|image_scale_1.00_1.10_5000|image_rotateZ_0deg_4deg_5000',
    touchAnimation: true,
    touchAutoOpenDelay: -1,

    // GALLERY THEME
    galleryTheme: {
      thumbnail: { titleShadow: 'none', descriptionShadow: 'none', titleColor: '#fff', borderColor: '#fff' },
      navigationPagination: { background: '#3C4B5B', color: '#fff', colorHover: '#aaa', borderRadius: '4px' },
    },

    // DEEP LINKING
    locationHash: false
  });
});