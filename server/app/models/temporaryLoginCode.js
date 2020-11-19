const mongoose = require('mongoose')
const validator = require('validator')

const TemporaryLoginCodeSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            validate: {
                validator: validator.isEmail,
                message: 'EMAIL_IS_NOT_VALID'
            },
            lowercase: true,
            unique: true,
            required: true
        },
        verification: {
            type: String
        },
        verified: {
            type: Boolean,
            'default': false
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('TemporaryLoginCode', TemporaryLoginCodeSchema)

