// dom element varibale selection
let html = document.querySelector("#html> textarea");
let css = document.querySelector("#css> textarea");
let javascript = document.querySelector("#javascript> textarea");
let output = document.querySelector("#output");

// rendering html section
html.addEventListener("input", function(event) {
  if (output.querySelector("iframe") === null) {
    output.innerHTML = "<iframe></iframe>"
    output.style.color = "black";
    output.style.background = "white";
  } else {
    if (event.target.value.endsWith("/") || event.target.value.endsWith("<")) {
      return;
    } else {
      output.querySelector("iframe").srcdoc = `${html.value}
                                                <style>${css.value}</style>
                                                <script>${javascript.value}</script>`;
    }
  }
});
// rendering css section
css.addEventListener("input", function(event) {
  if (event.target.value.endsWith("{")) {
    return;
  } else {
    output.querySelector("iframe").srcdoc = `${html.value}
                                                <style>${css.value}</style>
                                              `;
  }
});
// rendering javascript section
javascript.addEventListener("input", function() {
  output.querySelector("iframe").srcdoc = `   ${html.value}
                                                <style>${css.value}</style>
                                                <script>${javascript.value}</script>
                                              `;
});
