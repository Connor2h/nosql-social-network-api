const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },

        reactionBody: {
            type: String,
            required: true,
            validate: [({ length }) => length >= 1 && length <= 280, 'Your text should be longer than one character, but not longer than 280 characters.']
        },

        username: {
            type: String,
            required: true
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    }
)

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            validate: [({ length }) => length >= 1 && length <= 280, 'Your text should be longer than one character, but not longer than 280 characters.']
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },

        username: {
            type: String,
            required: true,
            trim: true
        },

        reactions: [ReactionSchema]
        
    },

    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);


ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;