# 🗡️ MongoMingle 🗡️

## 🎯 Description
Welcome to MongoMingle, where thoughts become connections and friends become family! 🚀 This social network API is your gateway to building meaningful digital relationships. Built with Express.js for routing, MongoDB for data storage, and Mongoose ODM for elegant data modeling, MongoMingle brings your social network dreams to life! ✨

## 📚 Table of Contents
- [Installation](#-installation)
- [Usage](#-usage)
- [API Routes](#-api-routes)
- [Video Walkthrough](#-video-walkthrough)
- [License](#-license)

## 🛠️ Installation
1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Make sure MongoDB is installed and running on your machine
4. Create a `.env` file in the root directory with the following content:
```
MONGODB_URI=mongodb://127.0.0.1:27017/mongomingle
```

## 🚀 Usage
To start the server, run:
```bash
npm start
```

## 🌐 API Routes

### 👥 Users
- GET `/api/users` - Get all users
- GET `/api/users/:userId` - Get a single user by ID
- POST `/api/users` - Create a new user
- PUT `/api/users/:userId` - Update a user
- DELETE `/api/users/:userId` - Delete a user
- POST `/api/users/:userId/friends/:friendId` - Add a friend
- DELETE `/api/users/:userId/friends/:friendId` - Remove a friend

### 💭 Thoughts
- GET `/api/thoughts` - Get all thoughts
- GET `/api/thoughts/:thoughtId` - Get a single thought by ID
- POST `/api/thoughts` - Create a new thought
- PUT `/api/thoughts/:thoughtId` - Update a thought
- DELETE `/api/thoughts/:thoughtId` - Delete a thought
- POST `/api/thoughts/:thoughtId/reactions` - Add a reaction to a thought
- DELETE `/api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought

## 🎥 Video Walkthrough
[Video Link Here]

## 🛠️ Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose ODM

## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author
**KnifeDad** 🗡️
- GitHub: [@KnifeDad](https://github.com/KnifeDad)

---
Made with ❤️ and a sharp sense of humor 🗡️ 