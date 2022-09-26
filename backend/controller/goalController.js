const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

// @description:     Get Goals
// @route:          GET /api/goals
// @access          Private

const getGoals = asyncHandler(async (req,res) => {
    const goals = await Goal.find();
    res.status(200).json(goals)
})

// @description:     Set Goals
// @route:          POST /api/goals
// @access          Private

const setGoals = asyncHandler( async (req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
    }
     const goal = await Goal.create({
        text:req.body.text
     })
    console.log(req.body);
    res.status(200).json(goal);
})

// @description:     Update Goals
// @route:          PUT /api/goals/:id
// @access          Private

const updateGoals = asyncHandler( async (req,res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal) {
        res.status(400);
        throw new Error('goal not found');;
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
    })
    res.status(200).json(updatedGoal);
})

// @description:     Delete Goals
// @route:          DELETE /api/goals/:id
// @access          Private

const deleteGoals = asyncHandler( async (req,res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal) {
        res.status(400);
        throw new Error('goal not found');
    }

    const deletedGoal = await Goal.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedGoal); 
})


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}