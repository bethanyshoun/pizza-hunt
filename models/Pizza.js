const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: [],
    comments: [
        {
            type: Schema.Types.ObjectId,
            //ref property tells Pizza model which documents to search to find the right comments
            ref: 'Comment'
        }
    ]
  },
  {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
  }
);

//get total count of comments and replies on retrieval
//virtuals allow us to add more informaiton to a DB response so we don't 
//have to add the info manually wiht a helper before responding to the API request
PizzaSchema.virtual('commentCount').get(function() {
    return this.comments.length;
});

//create the Pizza model using the Pizza Schema
const Pizza = model('Pizza', PizzaSchema);

//export the Pizza model
module.exports = Pizza;