class Post {
    constructor(trip_id, user_id, post_id, title, description) {
        this.trip_id = trip_id;
        this.user_id = user_id;
        this.post_id = post_id;
        this.title = title;
        this.description = description;
    }
}

module.exports = Post
