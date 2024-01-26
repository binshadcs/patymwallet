const mongoose = require('mongoose');
const { Router } = require('express')
const router = Router()
const { User, Accounts } = require('../db.js')
const { userAuth } = require('../middleware/user.js')


router.get("/balance", userAuth, async(req, res) => {
    const userId = req.userId;
    console.log(userId)
    try {
        const acc = await Accounts.findOne({
            userId 
        })
        console.log(acc)
        res.status(200).json({
            balance : acc.balance
        })
    } catch (error) {
        res.status(404).json({
            message : "Fetching balance is failed"
        })
    }
});


router.post("/transfer", userAuth, async(req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    const { to, amount } = req.body;
    const { userId } = req;

    const currentAccount = await Accounts.findOne({userId}).session(session)

    if(!currentAccount || currentAccount.balance < amount) {
        await session.abortTransaction()
        res.status(400).json({
            message : "Insufficient balance"
        })
    }
    
    const toAccount = await Accounts.findOne({ userId: to }).session(session);

    if(!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

        // Perform the transfer
    await Accounts.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Accounts.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    await session.commitTransaction()
    await session.endSession()
    res.status(200).json({
        message : "Transfer successful"
    })
})



module.exports = router;