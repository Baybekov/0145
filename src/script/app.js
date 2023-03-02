const button = document.getElementById("submitBtn");
const commentBlock = document.getElementsByClassName("card-four__comment");
const nameBlock = document.getElementsByClassName("card-five__text-name");
const form = document.getElementById('form')

const date = new Date();
const year = date.getFullYear();
const dateNumber = date.getDate();

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const month = monthNames[date.getMonth()];

button.onclick = function (e) {
  e.preventDefault();
  const text = document.getElementById("text").value;
  const textName = document.getElementById("textName").value;
  commentBlock[commentBlock.length - 1].insertAdjacentHTML(
    "afterend",
    `<div class="card-four__comment">
    <div class="card-four__comment-name">
        <p>
            ${textName}
        </p>
        <p>
            ${dateNumber} ${month} ${year}
        </p>
    </div>
    <div class="card-four__comment-text">
        <p>
           ${text}
        </p>
    </div>
</div>`
  );
  form.reset();
};

function checkKey(e) {
  if (e.ctrlKey && e.keyCode == 13) {
    e.preventDefault();
    const text = document.getElementById("text").value;
    const textName = document.getElementById("textName").value;
    commentBlock[commentBlock.length - 1].insertAdjacentHTML(
      "afterend",
      `<div class="card-four__comment">
        <div class="card-four__comment-name">
        <p>
            ${textName}
        </p>
        <p>
            ${dateNumber} ${month} ${year}
        </p>
    </div>
    <div class="card-four__comment-text">
        <p>
           ${text}
        </p>
    </div>
    </div>`
    );
    form.reset();
  }
}
