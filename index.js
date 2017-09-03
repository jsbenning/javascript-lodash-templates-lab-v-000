function init() { 
  var commentForm = document.getElementById('comment-form');
  commentForm.style.display = "none";
}


function createPost() {
  
  var postForm = document.getElementById('post-form');
  var postTitle = document.getElementById('post-title').value;
  var postBody = document.getElementById('post-body').value;
  var postAuthor = document.getElementById('post-author').value;
  var pageTemplate = document.getElementById('page-template').innerHTML;
  var postTemplate = document.getElementById('post-template').innerHTML;
  var commentForm = document.getElementById('comment-form');

  var pageTemplateFn = _.template(pageTemplate);
  var postTemplateFn = _.template(postTemplate);
  var pageHTML = pageTemplateFn();
  var postHTML = postTemplateFn({'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor});
  
  var loadingPoint = document.getElementById('loading-point'); // added templates
  loadingPoint.innerHTML += pageHTML;
  var postPoint = document.getElementById("post");
  postPoint.innerHTML += postHTML;
  postForm.style.display = "none";
  var commentFormArea = document.getElementById('comment-form-area');
  commentForm.style.display = "block"; 
}

function postComment() {

  var commentsArea = document.getElementById('comments-area');

  var commenter = document.getElementById('commenter-name').value;
  var comment = document.getElementById('comment').value;

  var commentTemplate = document.getElementById('comment-template').innerHTML;
  var commentTemplateFn = _.template(commentTemplate);
  var commentHTML = commentTemplateFn({'comment': comment,'commenter': commenter});

  commentsArea.innerHTML += commentHTML;
  
  document.getElementById('commenter-name').value = "";
  document.getElementById('comment').value = "";

}

window.onload= init;

