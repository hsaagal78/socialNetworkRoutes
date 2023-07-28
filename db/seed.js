
const db = require('./connection');

const mongoose = require('mongoose');
const { User } = require('../models/');



db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
  console.log('Connected to the database');

const users = [
    {
      username: 'johner_doep',
      email: 'johner.doep@example.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'jane_smith',
      email: 'jane.smith@example.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'mike_jackson',
      email: 'mike.jackson@example.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'sarah_adams',
      email: 'sarah.adams@example.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'alex_robinson',
      email: 'alex.robinson@example.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'emily_williams',
      email: 'emily.williams@example.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'david_brown',
      email: 'david.brown@example.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'lisa_turner',
      email: 'lisa.turner@example.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'ryan_smith',
      email: 'ryan.smith@example.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'olivia_johnson',
      email: 'olivia.johnson@example.com',
      thoughts: [],
      friends: [],
    },
  ];
  try {
    // 
    const insertedUsers = await User.insertMany(users);
    console.log(`${insertedUsers.length} insert data.`);
    db.close();
  } catch (err) {
    console.error('Error to insert:', err);
    db.close();
  }
  // console.log(users);
});
// module.exports = User;
 
