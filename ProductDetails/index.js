let commentContainer = document.getElementById("AllcommentsContainer");
let username = document.getElementById("username");
let comment = document.getElementById("comment");
console.log(commentContainer)



function addcomment(e) {
  e.preventDefault();
  commentContainer.innerHTML += `<div class="commentContainer">
    <div class="comment">
      <h4>${username.value} </h4>
      <p>${comment.value} </p>
    </div>
    <img src="profile.png" alt=""  >
  </div>
`
}