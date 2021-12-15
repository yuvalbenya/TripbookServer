class Trip {
    constructor(user_id, isWaiting, adminMessage, tripName, category, price, location, trip_id, description) {
        this.user_id = user_id;
        this.isWaiting = isWaiting;
        this.adminMessage = adminMessage;
        this.tripName = tripName;
        this.category = category;
        this.price = price;
        this.location = location;
        this.trip_id = trip_id;
        this.description = description;
        this.pictures = [];
        this.feedbacks = [];
        this.feedbacksLive = [];
    }
}
module.exports = Trip
