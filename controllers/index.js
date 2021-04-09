const { Response } = require('../utils');
async function VerifyCode(req, res) {
    try {
        const { codes } = req.body
        if (!codes) {
            return Response(res, 200, false, 'codes is required')
        }

        if (!Array.isArray(codes)) {
            return Response(res, 200, false, 'codes need to be array')
        }

        const filteredCode = codes.filter(value => value !== '').map(Number);

        if (filteredCode.length !== 6) {
            return Response(res, 200, false, 'codes need to be of length six')
        }

        const lastElement = filteredCode.pop()

        if (lastElement === 7) {
            return Response(res, 200, false, 'last element is not expected to be 7')
        }
        return Response(res, 200, true, '')
    } catch (err) {
        throw new Error(err)
    }
}

async function HealthCheck(req, res) {
    return res.json({
        "Health": "Ok"
    })
}

module.exports = { VerifyCode, HealthCheck }