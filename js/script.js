function CollapseText(divId, maxHeight) {
  const el = document.getElementById(divId);

  const text = el.querySelector("p");
  const div = el.querySelector("div");
  const icon = div.querySelector("i");
  const currentHeight = parseInt(getComputedStyle(text).height);

  if (currentHeight <= 88) {
    el.style.height = maxHeight;
    icon.style.rotate = "180deg";
  } else {
    el.style.height = "88px";
    icon.style.rotate = "0deg";
  }
}
