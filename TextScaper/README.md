# TextScaper

TextScaper is a TypeScript-based Express application designed to parse text files uploaded by users. The application removes new lines and processes the text data for further use.

## Features

- Upload text files through a RESTful API.
- Remove new lines from the uploaded text.
- Validate and sanitize input data to prevent security issues.
- Unit tests to ensure functionality.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd TextScaper
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   npm run start
   ```

2. Use a tool like Postman or curl to upload a text file to the API endpoint:
   ```
   POST /upload
   ```

3. The server will respond with the processed text data.

## Directory Structure

```
TextScaper
├── src
│   ├── app.ts
│   ├── server.ts
│   ├── controllers
│   │   └── uploadController.ts
│   ├── routes
│   │   └── uploadRoutes.ts
│   ├── services
│   │   └── parseService.ts
│   ├── middleware
│   │   └── uploadMiddleware.ts
│   ├── utils
│   │   └── sanitizer.ts
│   └── types
│       └── index.d.ts
├── tests
│   └── parseService.test.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.