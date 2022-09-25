const asyncHandler = require('express-async-handler');

// @description:     Get Goals
// @route:          GET /api/goals
// @access          Private

const getGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message:'get goals'})
})

// @description:     Set Goals
// @route:          POST /api/goals
// @access          Private

const setGoals = asyncHandler( async (req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
    }
    console.log(req.body);
    res.status(200).json({message:'set goals'})
})

// @description:     Update Goals
// @route:          PUT /api/goals/:id
// @access          Private

const updateGoals = asyncHandler( async (req,res) => {
    res.status(200).json({message:`update goals ${req.params.id}`})
})

// @description:     Delete Goals
// @route:          DELETE /api/goals/:id
// @access          Private

const deleteGoals = asyncHandler( async (req,res) => {
    res.status(200).json({message:`delete goals ${req.params.id}`})
})


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}