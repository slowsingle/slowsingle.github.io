Vue.component('header-component', {
  template: '\
    <header class="site-header"> \
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> \
        <a class="navbar-brand" href="index.html">MyPage</a> \
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> \
          <span class="navbar-toggler-icon"></span> \
        </button> \
        <div class="collapse navbar-collapse" id="navbarNavDropdown"> \
          <ul class="navbar-nav"> \
            <li class="nav-item active"> \
              <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a> \
            </li> \
          </ul> \
        </div> \
      </nav> \
    </header> \
  '
})

Vue.component('footer-component', {
  template: ' \
    <footer class="bg-dark site-footer"> \
      <div> \
        <p>特にこのFooterに意味はない</p> \
      </div> \
    </footer> \
  '
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, World!',
    postUrlList: [
      'posts/post-2020xxxx.html',
      'posts/post-2020yyyy.html',
      'posts/post-2020zzzz.html',
    ]
  }
})