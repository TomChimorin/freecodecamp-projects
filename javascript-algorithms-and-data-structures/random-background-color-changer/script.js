const darkColorsArr = [
    "#2C3E50", // Dark Blue
    "#34495E", // Blue Gray
    "#2C2C2C", // Charcoal Gray
    "#616A6B", // Slate Gray
    "#4A235A", // Dark Purple
    "#2F4F4F", // Dark Teal
    "#0E4B5A", // Dark Cyan
    "#36454F", // Charcoal Blue
    "#800020", // Maroon
    "#FF6347", // Tomato Red
    "#FFD700", // Gold
    "#32CD32", // Lime Green
    "#8A2BE2", // Blue Violet
    "#FF4500", // Orange Red
    "#FFD700", // Yellow
    "#C71585", // Medium Violet Red
    "#00BFFF", // Deep Sky Blue
    "#ADFF2F", // Green Yellow
    "#FF1493", // Deep Pink
    "#D2691E"  // Chocolate Brown
];

  
  function getRandomIndex() {
    const randomIndex = Math.floor(darkColorsArr.length * Math.random());
    return randomIndex;
  }
  
  const body = document.querySelector("body");
  const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
  
  function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()];
  
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
  }
  const btn = document.querySelector("#btn");
  
  btn.onclick = changeBackgroundColor;