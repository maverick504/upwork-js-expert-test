'use strict';

var data = JSON.parse('{\n    "articles": [\n        {\n            "headline": "\'Further restrictions\': Warning for NSW",\n            "thumbnail": {\n                "title": "Warning for NSW", \n                "width": 316, \n                "height": 237, \n                "src": "https://content.api.news/v3/images/bin/7fb8522d275a99adfaa6e642ea23fa83?width=316" \n            },\n            "link": "https://www.news.com.au/world/coronavirus/australia/coronavirus-victoria-live-latrobe-university-students-party-during-melbourne-lockdown/live-coverage/e4c83d113632fbdbd9b1c8a5a232fb27",\n            "standfirst": "NSW residents have been urged to think about their movements this weekend, with the premier warning she doesn\'t want to have to impose further restrictions.",\n            "primarySectionRouteName": "NSW & ACT"\n        },\n        {\n            "headline": "Big W causes frenzy over $40 Nike sale",\n            "thumbnail": {\n                "title": "Shoes", \n                "width": 316, \n                "height": 237, \n                "src": "https://content.api.news/v3/images/bin/095a7bf5f3d4835128b138d272f76444?width=316"\n            },\n            "link": "https://www.news.com.au/lifestyle/fashion/big-w-starts-selling-nike-shoes-for-40/news-story/76b64e7689eb958e963a24d5d119b504",\n            "standfirst": "Big W has surprised shoppers by heavily discounting one of the most popular sporting brands, sending fans into a frenzy.",\n            "primarySectionRouteName": "Fashion"\n        },\n        {\n            "headline": "Brand removes controversial ingredient",\n            "thumbnail": {\n                "title": "Chocolate", \n                "width": 316, \n                "height": 237, \n                "src": "https://content.api.news/v3/images/bin/05684bb3139d03ccef1856a71f66fd5b?width=316" \n            },\n            "link": "https://www.news.com.au/lifestyle/food/eat/darrell-lea-removes-controversial-palm-oil-ingredient-from-chocolate/news-story/bb2d04be500ef0c8b18d4ec821eb5aef",\n            "standfirst": "The iconic Australian chocolate brand will change the ingredients for over 100 of its products \u2013 and is now calling on other companies to do the same.",\n            "primarySectionRouteName": "Eat"\n        }\n    ]\n}');

// Generates HTML for a list of articles.
function genHtmlArticles(data) {
    var code = '';

    for (var i = 0; i < data.articles.length; i++) {
        code += genHtmlOneArticle(data.articles[i]);
    }

    return code;
}

// Generates HTML for ONE article.
function genHtmlOneArticle(article) {
    var code = '<div class="article">\n        <div class="article--information-wrapper">\n            <div class="article--category">' + article.primarySectionRouteName + '</div>\n            <div class="article--headline">' + article.headline + '</div>\n            <div class="article--standfirst">' + article.standfirst + '</div>\n        </div>\n        <div class="article--thumbnail-wrapper">\n            <img\n                class="article--thumbnail"\n                src="' + article.thumbnail.src + '"\n                title="' + article.thumbnail.title + '"\n                width="' + article.thumbnail.width + '"\n                height="' + article.thumbnail.height + '"\n            >\n        </div>\n    </div>';

    return code;
}

// Runs after page is loaded and renders the HTML using JS.
(function () {
    document.body.innerHTML = genHtmlArticles(data);
})();
