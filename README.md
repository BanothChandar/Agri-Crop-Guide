# Agri Crop Guide

Agri Crop Guide is a Node.js web application that gives farmers and agriculture enthusiasts crop and soil-information guidance. Users can create an account, sign in securely, and browse crop-related pages for different soil types.

## Features

- User signup and login
- Passwords protected with bcrypt hashing
- Session-based access to protected pages
- Crop and soil guidance pages for red, black, clay, peaty, saline, and forest soils
- MongoDB persistence through Mongoose
- MongoDB Atlas-ready deployment configuration

## Tech stack

- **Backend:** Node.js and Express
- **Database:** MongoDB with Mongoose
- **Authentication:** bcrypt and express-session
- **Views:** EJS
- **Frontend:** HTML, CSS, and JavaScript

## Prerequisites

- Node.js 20 or later
- npm
- One of the following MongoDB options:
  - A local MongoDB instance, or
  - A MongoDB Atlas cluster

## Installation

Clone the repository and open the project folder:

```bash
git clone https://github.com/BanothChandar/Agri-Crop-Guide.git
cd Agri-Crop-Guide
```

Install dependencies:

```bash
npm install
```

## Database configuration

The application reads its database connection string from the `MONGODB_URI` environment variable.

If no variable is provided, it connects to local MongoDB:

```text
mongodb://127.0.0.1:27017/loginTut
```

To use MongoDB Atlas, set `MONGODB_URI` to your Atlas connection string. Never commit a database password or `.env` file to GitHub.

PowerShell example:

```powershell
$env:MONGODB_URI="mongodb+srv://<username>:<password>@<cluster>/loginTut?retryWrites=true&w=majority"
npm.cmd start
```

The repository includes [`.env.example`](.env.example) as a configuration template. The real `.env` file is ignored by Git.

## Run locally

Start the production-style server:

```bash
npm start
```

For development with automatic restarts:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment with Render

1. Push the project to GitHub.
2. In Render, select **New** → **Web Service** and connect this repository.
3. Use these service settings:
   - Build command: `npm install`
   - Start command: `npm start`
4. Add a Render environment variable named `MONGODB_URI` with your MongoDB Atlas connection string.
5. Deploy the service.

Render provides the `PORT` environment variable automatically; the application uses it when available.

## Project structure

```text
src/
  config.js       MongoDB connection and user model
  index.js        Express application, routes, and authentication
views/            EJS page templates
public/           Stylesheets, client-side JavaScript, and images
```

## Author

Banoth Chandar — [@BanothChandar](https://github.com/BanothChandar)
