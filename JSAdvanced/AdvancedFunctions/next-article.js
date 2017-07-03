function getArticleGenerator(articles) {
    let i = 0;
let content = $('#content');

    return function getArticle() {
        if(i < articles.length) {
            let article = $('<article>');
            article.append($(`<p>${articles[i]}</p>`));
            content.append(article);
            i++;
        }
        }

}
