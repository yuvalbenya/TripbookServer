class User {
    constructor(user_id,first_name,last_name,email,password,passRecoverAnswer,admin){
        this.user_id = user_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.passRecoverAnswer = passRecoverAnswer;
        this.admin = admin;
    }
}

module.exports = User
