const Goal = require('../models/goal');

module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update
};

async function index(req, res) {
    const goals = await Goal.find({});
    res.status(200).json(goals);
  }

async function show(req, res) {
    const goal = await Goal.findById(req.params.id);
    res.status(200).json(goal);
}

async function create(req, res) {
    console.log(req.body);
    const goal = new Goal(req.body);
    try {
        await goal.save();
        res.json(goal);
    } catch (err) {
        console.log(err)
        res.status(400).json({msg:"fail"});
    }
}

async function deleteOne(req, res) {
    console.log(req.params.id);
    const deletedGoal = await Goal.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedGoal);
}

async function update(req, res) {
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedGoal);
  }