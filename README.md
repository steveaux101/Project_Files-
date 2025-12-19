# Parse Text API

This project is a simple API that allows users to upload text files, which are then parsed to remove new lines and return the cleaned data. 

## Features

- Upload text files via API
- Remove new lines from the uploaded text
- Return cleaned text data

## Project Structure

```
parse-text-api
├── src
│   ├── app.ts                # Main entry point of the application
│   ├── server.ts             # Starts the server and listens for requests
│   ├── controllers
│   │   └── uploadController.ts # Handles file upload logic
│   ├── routes
│   │   └── uploadRoutes.ts    # Defines routes for file uploads
│   ├── services
│   │   └── parseService.ts     # Contains the logic for parsing text
│   ├── middleware
│   │   └── uploadMiddleware.ts  # Middleware for handling uploads
│   ├── utils
│   │   └── sanitizer.ts        # Utility functions for sanitizing input
│   └── types
│       └── index.d.ts         # Custom TypeScript types and interfaces
├── tests
│   └── parseService.test.ts    # Unit tests for the ParseService
├── package.json                # npm configuration file
├── tsconfig.json               # TypeScript configuration file
├── .env.example                # Example environment variables
└── README.md                   # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd parse-text-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```
2. Use an API client (like Postman) to upload a text file to the endpoint:
   ```
   POST /upload
   ```
   Make sure to include the file in the request body.

## API Endpoints

- **POST /upload**: Uploads a text file and returns the cleaned text without new lines.

## Testing

To run the tests, use the following command:
```
npm test
```

## License

This project is licensed under the MIT License.