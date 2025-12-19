# TextScraperElite

TextScraperElite — API to parse customer text files and return cleaned text (newlines removed).

## Features

- Upload text files via API
- Remove new lines from the uploaded text
- Return cleaned text data

## Project Structure

```
TextScraperElite
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
├── .env.example
└── README.md
```

## Installation

1. Install dependencies:
```
npm install
```

2. Start in development:
```
npm run dev
```

3. Build and run:
```
npm run build
npm start
```

## Usage

Health check (replace port if different):
```
curl http://localhost:3000/health
```

Upload a text file (multipart/form-data, field name "file"):
```
curl -X POST -F "file=@/path/to/customer.txt" http://localhost:3000/upload -H "Accept: application/json"
```

If the API accepts raw text:
```
curl -X POST http://localhost:3000/parse -H "Content-Type: text/plain" --data-binary @/path/to/customer.txt
```

## API Endpoints

- POST /upload — Uploads a text file and returns cleaned text (newlines removed).
- GET /health — Health check.

## Testing

Run tests:
```
npm test
```

## License

MIT
```// filepath: /Users/stevieb/Typescript_express/parse-text-api/README.md
# TextScraperElite

TextScraperElite — API to parse customer text files and return cleaned text (newlines removed).

## Features

- Upload text files via API
- Remove new lines from the uploaded text
- Return cleaned text data

## Project Structure

```
TextScraperElite
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
├── .env.example
└── README.md
```

## Installation

1. Install dependencies:
```
npm install
```

2. Start in development:
```
npm run dev
```

3. Build and run:
```
npm run build
npm start
```

## Usage

Health check (replace port if different):
```
curl http://localhost:3000/health
```

Upload a text file (multipart/form-data, field name "file"):
```
curl -X POST -F "file=@/path/to/customer.txt" http://localhost:3000/upload -H "Accept: application/json"
```

If the API accepts raw text:
```
curl -X POST http://localhost:3000/parse -H "Content-Type: text/plain" --data-binary @/path/to/customer.txt
```

## API Endpoints

- POST /upload — Uploads a text file and returns cleaned text (newlines removed).
- GET /health — Health check.

## Testing

Run tests:
```
npm test