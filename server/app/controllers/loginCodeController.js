const TemporaryLoginCode = require('../models/temporaryLoginCode')
const uuid = require('uuid')
const utils = require('../middleware/utils')
const { matchedData } = require('express-validator')
const emailer = require('../middleware/emailer')

const createLoginCode = async (req) => {
    return new Promise((resolve, reject) => {
        const user = new TemporaryLoginCode({
            email: req.email,
            verification: uuid.v4()
        })
        user.save((err, item) => {
            if (err) {
                reject(utils.buildErrObject(422, err.message))
            }
            resolve(item)
        })
    })
}

const verificationExists = async (id) => {
    return new Promise((resolve, reject) => {
        TemporaryLoginCode.findOne(
            {
                verification: id
            },
            (err, user) => {
                utils.itemNotFound(err, user, reject, 'NOT_FOUND_OR_ALREADY_VERIFIED')
                resolve(user)
            }
        )
    })
}

const verifyCode = async (code) => {
    return new Promise((resolve, reject) => {
        code.verified = true
        code.save((err, item) => {
            if (err) {
                reject(utils.buildErrObject(422, err.message))
            }
            resolve({
                email: item.email,
                verified: item.verified
            })
        })
    })
}

exports.loginCode = async (req, res) => {
    try {
        const locale = req.getLocale()
        req = matchedData(req)
        const doesEmailExists = await emailer.emailExists(req.email)
        if (!doesEmailExists) {
            const item = await createLoginCode(req)
            emailer.sendLoginCodeEmail(locale, item)
            res.status(201).json(item)
        }
    } catch (error) {
        utils.handleError(res, error)
    }
}

exports.verifyLoginCode = async (req, res) => {
    try {
        req = matchedData(req)
        const code = await verificationExists(req.code)
        res.status(200).json(await verifyCode(code))
    } catch (error) {
        utils.handleError(res, error)
    }
}
