document.addEventListener('DOMContentLoaded', function () {
  getQuote();
});

async function getQuote() {
  try {
    randomColor()
    const number = Math.ceil(Math.random() * 100)
    const res = await fetch(`https://dummyjson.com/quotes/${number}`);
    const data = await res.json();
    document.getElementById("text").innerText = '"' + data.quote + '"';
    document.getElementById("author").innerText = '-' + data.author;
  } catch (error) {
    console.error('Error fetching the quote:', error);
  }
}

function randomColor() {
  const selectedColor = colors[Math.floor(Math.random() * colors.length)];

  document.documentElement.style.setProperty('--main-color', selectedColor.base);
  document.documentElement.style.setProperty('--hover-color', selectedColor.hover);
  document.documentElement.style.setProperty('--active-color', selectedColor.active);
}


const colors = [
  {
    base: "rgb(123, 104, 238)",  // Matte Blue-Violet
    hover: "rgb(110, 93, 214)",  // Darker for hover
    active: "rgb(140, 119, 255)" // Lighter for active
  },
  {
    base: "rgb(255, 99, 71)",    // Matte Tomato
    hover: "rgb(230, 89, 64)",   // Darker for hover
    active: "rgb(255, 119, 91)"  // Lighter for active
  },
  {
    base: "rgb(60, 179, 113)",   // Matte Medium Sea Green
    hover: "rgb(54, 161, 102)",  // Darker for hover
    active: "rgb(76, 194, 126)"  // Lighter for active
  },
  {
    base: "rgb(72, 61, 139)",    // Matte Dark Slate Blue
    hover: "rgb(65, 55, 125)",   // Darker for hover
    active: "rgb(90, 80, 155)"   // Lighter for active
  },
  {
    base: "rgb(176, 196, 222)",  // Matte Light Steel Blue
    hover: "rgb(158, 176, 199)", // Darker for hover
    active: "rgb(200, 215, 238)" // Lighter for active
  },
  {
    base: "rgb(218, 165, 32)",   // Matte Goldenrod
    hover: "rgb(196, 149, 29)",  // Darker for hover
    active: "rgb(238, 181, 45)"  // Lighter for active
  },
  {
    base: "rgb(32, 178, 170)",   // Matte Light Sea Green
    hover: "rgb(29, 160, 153)",  // Darker for hover
    active: "rgb(48, 193, 185)"  // Lighter for active
  },
  {
    base: "rgb(255, 160, 122)",  // Matte Light Salmon
    hover: "rgb(230, 144, 110)", // Darker for hover
    active: "rgb(255, 178, 138)" // Lighter for active
  },
  {
    base: "rgb(119, 136, 153)",  // Matte Slate Gray
    hover: "rgb(107, 122, 137)", // Darker for hover
    active: "rgb(135, 150, 166)" // Lighter for active
  },
  {
    base: "rgb(205, 92, 92)",    // Matte Indian Red
    hover: "rgb(185, 83, 83)",   // Darker for hover
    active: "rgb(225, 104, 104)" // Lighter for active
  }
];



