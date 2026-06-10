const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        promise.resolve(func(req, res, next)).catch((err) => next(err))
    }
}





export { asyncHandler }


// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

