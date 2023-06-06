// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

async function comic(num) {
  const response = await $.ajax({
    url: "https://xkcd.com/info.0.json",
    type: "GET"
  });

  const { img, title, alt, num: comicNum } = response;

  const html = `<div id="imageblock">
    <h2>${title}</h2>
    <img src="${img}" title="${alt}"><br>
    <button id="prev">Previous</button><button id="next">Next</button>
  </div>`;

  $("#output").html(html);

  $("#output").on("click", "#prev", () => {
    comic(comicNum - 1);
  });

  $("#output").on("click", "#next", () => {
    comic(comicNum + 1);
  });
}

comic();



