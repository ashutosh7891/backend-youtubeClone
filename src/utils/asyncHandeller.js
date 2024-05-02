// using Promise to creating middleware

const asyncHandeller = (requesthandeller) => {
    (req, res, next) => {
        Promise.resolve(requesthandeller(req,res,next)).catch((error) => next(error))
    }
}








export {asyncHandeller}




// const asyncHandeller = (func) => () => {}
// const asyncHandeller = (func) => async () => {}

// try catch down below ways to do middleware

// const asyncHandeller = (func) => async(req, res, next) => {
//         try {
//             await func(req, res, next)
//         } catch (error) {
//             res.status(error.code || 500).json({
//                 success: false,
//                 message: error.message
//             })
//         }
// }   


