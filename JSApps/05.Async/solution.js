/**
 * Created by Stefan on 31.7.2017 г..
 */
function attachEvents() {
    $("#btnLoadPosts").click(loadPosts);
    $("#btnViewPost").click(viewPosts);
    let baseUrl = "https://baas.kinvey.com/appdata/kid_B1KOubTUb/";
    let posts = $("#posts");
    function loadPosts() {
        let req = {
            url:baseUrl+"posts",
            method: "GET",
            headers: {
                "Authorization": "Basic " +btoa("pesho:p")
            },
            success: load,

        };
        $.ajax(req);

        function load(data) {

            posts.empty();

            for(let post of data){
                $("<option>")
                    .text(post.title)
                    .val(post._id)
                    .appendTo(posts);
            }
        }
    }
    function viewPosts() {
        let req = {
            url:baseUrl+"comments",
            method: "GET",
            headers: {
                "Authorization": "Basic " +btoa("pesho:p")
            },
            success: getComments,

        };
        $.ajax(req);

        $("#post-title").text(posts.find("option:selected").text());
        $.get({url:baseUrl+`posts/${posts.find("option:selected").val()}`,
            headers: {
                "Authorization": "Basic " +btoa("pesho:p")
            }})
            .then((data)=>$("#post-body").text(data.body));


        function getComments(data) {
            let comments = $("#post-comments");
            comments.empty();

            for(let comment of data){

                if(comment.postid === posts.find("option:selected").val()){

                    comments.append($("<li>").text(comment.text));

                }
            }
        }

    }

}