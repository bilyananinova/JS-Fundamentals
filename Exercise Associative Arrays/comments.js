function comments(arr) {
  let commentsObj = {};
  let articleList = [];
  let userList = [];

  // {user {title: coments, aricle: }}
  for (let line of arr) {
    if (line.includes('user')) {
      // "user {username}" – add the user to the list of users
      let username = line.substring(line.indexOf('user') + 5);
      userList.push(username)
    }
    else if (line.includes('article')) {
      // "article {article name}" – add the article to the article list
      let articleName = line.substring(line.indexOf('article') + 8);
      if (!commentsObj[articleName]) {
        commentsObj[articleName] = []
      }
      articleList.push(articleName)
    }
    else if (line.includes('post')) {
      // "{username} posts on {article name}: {comment title}, {comment content}" – save the info

      let [username, articleInfo] = line.split(' posts on ')
      let [articleName, contentInfo] = articleInfo.split(': ');
      let [commentTitle, contents] = contentInfo.split(', ');
      if (userList.includes(username) && articleList.includes(articleName)) {

        commentsObj[articleName].push({ username, articleName, commentTitle, contents });


      }
    }
  }

  // console.log(commentsObj);
  //At the end sort the articles by count of comments and print the
  // users with their comments ordered by usernames in ascending.

  let entries = Object.entries(commentsObj).sort((a, b) => b[1].length - a[1].length)
  // console.log(entries);

  for (let [article, info] of entries) {
    console.log(`Comments on ${article}`);
    let comments = commentsObj[article];
    comments.sort((a, b) => a.username.localeCompare(b.username));
    comments.forEach(element => {
      //--- From user {username1}: {comment title} - {comment content}
      console.log(`--- From user ${element.username}: ${element.commentTitle} - ${element.contents}`);
    });

  }

}

comments([
  'user aUser123',
  'someUser posts on someArticle: NoTitle, stupidComment',
  'article Books', 'article Movies', 'article Shopping',
  'user someUser',
  'user uSeR4',
  'user lastUser',
  'uSeR4 posts on Books: I like books, I do really like them',
  'uSeR4 posts on Movies: I also like movies, I really do',
  'someUser posts on Shopping: title, I go shopping every day',
  'someUser posts on Movies: Like, I also like movies very much'
])