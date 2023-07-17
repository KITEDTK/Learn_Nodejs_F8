const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({ //Tạo ra schema
    name: { type: String, maxLength: 255}, // có thể thêm nhiều điều kiện 
    description : { type: String, maxLength: 600},
    image : { type: String, maxLength: 255},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Course', Course);