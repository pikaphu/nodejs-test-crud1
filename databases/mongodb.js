// Database: mongodb 
// DB plugin: mongoose
const mongoose = require('mongoose');

class MongoDatabase {
    constructor(db = mongoose) {
        this._mongodb = db;
        const host = global.myConfig.database_mongo.host
        const user = global.myConfig.database_mongo.user
        const pass = global.myConfig.database_mongo.pass
        const dbname = global.myConfig.database_mongo.db
        const connStr = `mongodb://${user}:${pass}@${host}/${dbname}` // ES6
        
        this._mongodb.connect(connStr, { useNewUrlParser: true, useUnifiedTopology: true })
        this.posts = this._mongodb.model("posts", new this._mongodb.Schema(
            {
                post_image: String,
                post_category: String,
                post_name: String,
                post_detail: String,
                post_date: {
                    type: Date,
                    default: Date.now
                }
            },
            {
                toJSON: {
                    virtuals: true
                }
            }
        ));
    }
}

module.exports = MongoDatabase;