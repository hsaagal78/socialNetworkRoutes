# socialNetworkRoutes

This repository contains the backend API for a social media startup. The API is designed to handle large amounts of unstructured data using a NoSQL database. The application uses Mongoose as the Object Data Modeling (ODM) library to interact with the MongoDB database.
# Table of contents

- [Getting Started](#Getting_Started)
- [Install the dependencies](#Install_the_dependencies)
- [API Endpoints](#API_Endpoints)
- [Testing the API](#Testing_the_API)
- [Acceptance Criteria](#Acceptance_Criteria)
- [Contributing](#Contributing)
- [License](#license)
- [Contact](#Contact)
- [Video](#Pictures)


## Getting Started

To run the social media API, follow the steps below:

1. Clone the repository to your local machine, git@github.com:hsaagal78/socialNetworkRoutes.git
2. Navigate to the project directory in your terminal.
3. Install the required dependencies.
4. Make sure you have MongoDB installed and running on your machine.
5. Start the server and sync the Mongoose models with the MongoDB database using:

# Install the dependencies:

- [Express](https://www.npmjs.com/package/express)
- [Init](https://docs.npmjs.com/cli/v9/commands/npm-init)
- [Mongod](https://www.npmjs.com/package/mongodb)
- [Mongodb](https://www.npmjs.com/package/mongodb)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Nodemon](https://www.npmjs.com/package/nodemon)
  
  

## API Endpoints

### Users

- `GET /api/users`: Fetch all users in the database .
- `GET /api/users/:userId`: Fetch a specific user by their `userId`.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:userId`: Update an existing user.
- `DELETE /api/users/:userId`: Delete a user.

### Thoughts

- `GET /api/thoughts`: Fetch all thoughts in the database.
- `GET /api/thoughts/:thoughtId`: Fetch a specific thought by its `thoughtId`.
- `POST /api/thoughts`: Create a new thought.
- `PUT /api/thoughts/:thoughtId`: Update an existing thought.
- `DELETE /api/thoughts/:thoughtId`: Delete a thought.

### Reactions

- `POST /api/thoughts/:thoughtId/reactions`: Create a new reaction for a specific thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Delete a reaction from a specific thought.

### Friendships

- `POST /api/users/:userId/friends/:friendId`: Add a friend to a user's friend list.
- `DELETE /api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list.

## Testing the API

You can use tools like [Insomnia](https://insomnia.rest/)  to test the API endpoints.

Ensure the server is running (`npm run dev`) before making any API requests.

## Acceptance Criteria

- The server should start successfully and sync the Mongoose models with the MongoDB database.
- API GET routes for users and thoughts should display data in a formatted JSON when tested in Insomnia.
- API POST, PUT, and DELETE routes for users and thoughts should allow successful creation, updating, and deletion of data in the database.
- API POST and DELETE routes for reactions should allow successful creation and deletion of reactions associated with thoughts.
- API POST and DELETE routes for friendships should allow adding and removing friends to/from a user's friend list.

## Contributing

Thank you for your interest in contributing to the social media startup API. If you have any suggestions, improvements, or bug fixes, feel free to submit a pull request, https://github.com/hsaagal78/socialNetworkRoutes

## License

![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)

This project is licensed under the Apache 2.0 license.

* [License](#license)

## Contact

For any inquiries, please contact me at hsagal78@gmail.com

## Video

- [Describe the code and user models works using insomnia](https://drive.google.com/file/d/119Gafduz1_P1500hhRVU60xJT-t5cjDg/view)
- [How to thoughts and reactions models works](https://drive.google.com/file/d/1fY9oIY-ccIXIh8okwp3AbPT7MZZZX9eX/view)