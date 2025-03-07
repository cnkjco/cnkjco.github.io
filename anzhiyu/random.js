var posts=["2025/03/06/hello-world/","2025/03/06/这是一篇新的博文/","2025/03/06/这是一篇宝隆新文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };