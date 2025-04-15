const cron = require("node-cron")
const UserModel = require("../model/user.model")
const transport = require("../middleware/sendEmail")
const { createEmailTemplate } = require("../utils/emailTemplate")


// cron job is scheduled to run evryday at 7AM
cron.schedule("0 7 * * * ", async () => {
  try {
    const today = new Date()
    const month = today.getMonth() + 1
    const day = today.getDay()

    // find users in DB that their dob is today for the month & day
    const users = await UserModel.find({
      $expr: {
        $and: [
          { $eq: [{ $month: "$DateOfBirth"}], month },
          { $eq: [{ $dayOfMonth : "$DateOfBirth"}], day },
        ]
      }
    })

    users.forEach((user) => {
      const mailOptions = {
        from: process.env.NODE_SENDING_EMAIL_ADDRESS,
        to: user.email,
        subject: "Happy Birthday🎉",
        html: createEmailTemplate(user.name)
      };

      transport.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(`Error occured sending email to ${user.name}`, err);
        } else {
          return res.status(200).json({
            success: true,
            message: `Birthday email sent to ${user.email}`,
          });
        }
      });
    })
  } catch (error) {
    res.status(500).json({ success: false, error: message.error })
  }
} )
