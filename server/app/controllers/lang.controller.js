const i18n = require('i18n')

exports.getLang = (req, res) => {
    const query = req.query
    const lang = query.lang || req.getLocale()
    const keys = query.keys.split(',')
    const keysText = {}

    i18n.setLocale(lang)

    keys.forEach((key) => {
        keysText[key] = i18n.__(key)
    })

    return res.status(200).json({
        lang,
        data: keysText
    })
}
