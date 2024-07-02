import User from '../models/user.model.js'

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select('-password')
    // const allUsers = await User.find() this will find all the users in the database including the present user

    return res.status(200).json(filteredUsers)
  } catch (error) {
    console.error('Error in getUsersForSidebar: ', error.message)
    res.status(500).json({ error: 'Internal server error' })
  }
}
