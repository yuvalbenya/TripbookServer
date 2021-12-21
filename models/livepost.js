class LivePost {
    constructor(trip_id, user_id, post_id, title, description) {
        this.trip_id = trip_id;
        this.user_id = user_id;
        this.post_id = post_id;
        this.title = '(live) ' + title;
        this.description = '(live) ' +description;
    }
}

module.exports = LivePost
