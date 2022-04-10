const { Schema, model } = require('mongoose');

const buisnessSchema = new Schema({
    // user: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'User',
    //         required: true, 
    //     }
    // ],
    buisnessId: 
        {
            type: Number,
        },
    
    buisnessName: [
        {
            type: String,
            trim: true,
            required: true,
        },
    ],
    buisnessOwner: [
        {
            type: String,
            trim: true,
            required: true,
        },
    ],
    email: 
        {
            type: String,
            trim: true,
            required: true,
        },
    
    cost: 
        {
            type: Number,
            required: true,
        },
    
    description: 
        {
            type: String,
            trim: true,
            required: true,
        },
    
});

// buisnessSchema.index({ createdAt: 1, updatedAt: 1 });
const Buisness = model('Buisness', buisnessSchema);


 module.exports = Buisness;

 