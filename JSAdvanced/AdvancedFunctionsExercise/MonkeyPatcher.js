/**
 * Created by Stefan on 2.7.2017 г..
 */
function result(input) {
    switch(input){
        case 'upvote':
            this.upvotes++;
            break;
        case 'downvote':
            this.downvotes++;
            break;
        case 'score':
            let currUpVotes = this.upvotes;
            let currDownVotes = this.downvotes;
            let rating = 'new';
            if(currDownVotes+currUpVotes>=10){
                if(currUpVotes > 0.66 * (currUpVotes+currDownVotes)){
                    rating = 'hot'
                }
                else if(currDownVotes > currUpVotes){
                    rating = 'unpopular'
                }
                else if( currDownVotes> 100 || currUpVotes> 100){

                    rating = "controversial";
                }
            }
            if(currUpVotes+currDownVotes > 50){
                let extra = Math.ceil(0.25 * Math.max(currUpVotes, currDownVotes));
                currDownVotes+=extra;
                currUpVotes+=extra
            }
            let score = currUpVotes - currDownVotes;
           return [currUpVotes, currDownVotes, score, rating];

}
}
var forumPost = {
    id: '2',
    author: 'gosho',
    content: 'whats up?',
    upvotes: 120,
    downvotes: 30
};

var answer = result.call(forumPost, 'score');