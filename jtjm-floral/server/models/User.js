const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    
    fullName: {
        type: String,
        required: true,
        trim: true,
        
    },
    address: {
        type: String,
        required: true,
        trim: true,
        
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    carts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Cart',
        },
    ],
});

userSchema.pre('save', async function(next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;