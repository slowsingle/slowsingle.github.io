Vue.component('header-component', {
  template: '\
    <header class="site-header"> \
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> \
        <a class="navbar-brand" href="/">MyPage</a> \
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> \
          <span class="navbar-toggler-icon"></span> \
        </button> \
        <div class="collapse navbar-collapse" id="navbarNavDropdown"> \
          <ul class="navbar-nav"> \
            <li class="nav-item active"> \
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a> \
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
    numOfPosts: 3,
    postInfo: [],
  },
  created: function() {
    const _home = ["/", "/index.html"]
    if (!_home.includes(location.pathname)) {
      console.log("Do Nothing.");
      return;
    }

    let originUrl = location.origin;
    for(let i=1; i<this.numOfPosts+1; i++) {
      let post = {};
      const localUrl = "/posts/" + String(i) + ".html";
      axios.get(localUrl, {
        responseType: 'document',
      })
      .then((response) => {
        // handle success
        post.theme = response.data.getElementById("theme").innerHTML;
        post.url = originUrl + localUrl;
      })
      .catch((error) => {
        // handle error
        post.theme = "No Name"
        post.url = originUrl + localUrl;  // 404.htmlに飛ばしたい
        console.log(error);
      })
      .then(() => {
        this.postInfo.push(post);
      })
    }
    console.log(this.postInfo);
  }
})