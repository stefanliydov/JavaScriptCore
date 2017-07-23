function result() {


    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(newComment) {
            this.comments.push(newComment);
        }

        toString() {
            if (this.comments.length > 0) {
                return `${super.toString()}\nRating: ${this.likes - this.dislikes}\nComments:\n${this.comments.map(c => ` * ${c}`).join(`\n`)}`;
            }
            else
                return `${super.toString()}\nRating: ${this.likes - this.dislikes}`;
        }
    }

    class BlogPost extends Post {
        constructor(title, content,view) {
            super(title, content);
            this.views = view;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return `${super.toString()}\nViews: ${this.views}`
        }
    }
    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

//let post = new Post("Post", "Content");

//console.log(post.toString());

// Post: Post
// Content: Content

//let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

//scm.addComment("Good post");
//scm.addComment("Very good post");
//scm.addComment("Wow!");

//console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

let classes = result();

let test = new classes.BlogPost("TestTitle", "TestContent", 5);

test.view().view().view();
console.log(test.toString());