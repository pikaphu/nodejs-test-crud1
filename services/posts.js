class PostsComponents {
    constructor() {
        this.post_image = '';
        this.post_category = '';
        this.post_name = '';
        this.post_detail = '';
        this.post_date = new Date(null);
        this.id = 0;
    }

    selectAll() {
        return new Promise((resolve, reject) => {
            // console.table(this)
            resolve([this, this]);
        });
    }

    selectOne(id) {
        return new Promise((resolve, reject) => {
            resolve(this);
        });
    }

}

const database = require('../databases/mongodb');
class PostsComponentsDBMongo {

    constructor(db = database) {
        this._db = new db()
    }

    // 1. Read all data
    selectAll() {
        return this._db.posts.find().sort({
            post_date: 'desc'
        })
    }
    
    // 2. Read a data
    async selectOne(id) {
        return await this._db.posts.findById(id)
    }
    
    // 3. Create
    create(data) {
        //console.log('mongo create:', data);
        return this._db.posts(data).save()
    }
    
    // 4. Edit
    async update(id, data) {
        //console.log('mongo update:', id, data);
        await this._db.posts.update({ _id: id}, data)
        return this.selectOne(id)
    }

    // 5. Delete
    delete(id) {
        //console.log('mongo delete:', id);
        return this._db.posts.deleteOne({ _id: id})
    }   
}


module.exports = PostsComponentsDBMongo;