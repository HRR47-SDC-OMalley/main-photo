# ReBurke / main-photo

> A module that displays all photos for a listed item.

## Related Projects

  - https://github.com/HRR47-FEC-Burke/seller-reviews
  - https://github.com/HRR47-FEC-Burke/sidebar
  - https://github.com/HRR47-FEC-Burke/main-photo

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#Requirements)
3. [Development](#Development)
4. [Production](#Production)
5. [Deployment](#Deployment)

## Usage

  - Example URL: http://localhost:3001/item/50
  - Items range from 1-99

## Requirements

- Node.js v14.3.0
  - https://nodejs.org/

- MongoDB v4.2.8
  - https://www.mongodb.com/

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Seeding Database

```sh
npm run seed
```

### Development Server

In two separate terminal windows:

```sh
npm run build:dev
```

```sh
npm run start:dev
```

### Testing

```sh
npm test
```

## Production

### Webpack Production Build

```sh
npm run build
```

### Node Express Server

```sh
npm start
```
## Deployment

- Run $ `docker-compose up -d` to start running the service on port 80