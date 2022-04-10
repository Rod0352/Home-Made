const { AuthenticationError } = require('apollo-server-express');
const { User, Buisness } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query:
  {
    me: async () => {
      return User.find().populate('Buisness');
    },
    me: async (parent, { username }) => {
      return User.findOne({ username }).populate('Buisness');
    },
    buisness:  () => {

      return  Buisness.find({});
    },
    // getBuisness: async () => {
    //   const params = Buisness ? { Buisness } : {};

    //   return await Buisness.find(params).sort({ createdAt: -1 });
    // },
    // get by ID
    // buisness: async ({Buisness}) => {
    //   return await Buisness.findById(args.id).populate('Buisness');
    // }

  },

  Mutation: {
    addUser: async (parent, { Username, email, password }) => {
      // First we create the User
      const User = await User.create({ Username, email, password });
      // To reduce friction for the User, we immediately sign a JSON Web Token and log the User in after they are created
      const token = signToken(User);
      // Return an `Auth` object that consists of the signed token and User's information
      return { token, User };
    },
    login: async (parent, { email, password }) => {
      // Look up the User by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      const User = await User.findOne({ email });

      // If there is no User with that email address, return an Authentication error stating so
      if (!User) {
        throw new AuthenticationError('No User found with this email address');
      }

      // If there is a User found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await User.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      // If email and password are correct, sign User into the application with a JWT
      const token = signToken(User);

      // Return an `Auth` object that consists of the signed token and User's information
      return { token, User };
    },
    addBuisness: async (parent, { buisnessName, buisnessOwner }) => {
      const Buisness = await Buisness.create({ buisnessName, buisnessOwner });

      await User.findOneAndUpdate(
        { Username: buisnessOwner },
        { $addToSet: { Buisness: Buisness._id } }
      );

      return Buisness;
    },
    // addComment: async (parent, { BuisnessId, commentText, commentAuthor }) => {
    //   return Buisness.findOneAndUpdate(
    //     { _id: BuisnessId },
    //     {
    //       $addToSet: { comments: { commentText, commentAuthor } }
    //     },
    //     {
    //       new: true,
    //       runValidators: true
    //     }
    //   );
    // },
    removeBuisness: async (parent, { BuisnessId }) => {
      return Buisness.findOneAndDelete({ _id: BuisnessId });
    },
    // removeComment: async (parent, { BuisnessId, commentId }) => {
    //   return Buisness.findOneAndUpdate(
    //     { _id: BuisnessId },
    //     { $pull: { comments: { _id: commentId } } },
    //     { new: true }
    //   );
    // }
  }
};

module.exports = resolvers;
