class Tweet {
    constructor(sender, content, link = 'no link provided', likes = 0, retweets = 0, replies = []) {
        this.sender = sender;
        this.content = content;
        this.link = link;
        this.likes = likes;
        this.retweets = retweets;
        this.replies = replies;
        this.replyCount = replies.length;
    }

    like(likes) {
        this.likes++;
    }
    retweet(retweets) {
        this.retweets++;
    }
    reply(replyContent) {
        this.replies.push(replyContent);
        this.replyCount++;
    }
}

module.exports = Tweet;
