import User from `../models/User.js`;


export async function getUsers(req, res) {
    await dbConnect();
   const result = await User.find({})
    const users = result.map((doc) => {
      const user = doc.toObject()
      user._id = user._id.toString()
      return user
    })
    return res.status(200).json(users);
}