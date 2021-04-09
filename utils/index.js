async function Response(res,code,isSuccess,msg){
    return res.status(code).json({
        success: isSuccess,
        msg
    })
}

module.exports = {
    Response
}