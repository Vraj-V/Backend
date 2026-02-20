📅 Backend Learning Diary — Day 1
✅ Environment & Setup

    Initialized Node.js backend project

    Installed and configured Express

    Used nodemon to auto-restart server

    Fixed CommonJS vs ES Module issues

✅ Core Backend Concepts Learned

    Understood request → response flow

    Learned HTTP methods: GET, POST

    Used HTTP status codes (200, 400, 401)

    Learned difference between:

    res.send()

    res.json()

    res.render()

✅ Express Routing & Logic

    Created root endpoint (/)

    Built /sum endpoint using query parameters

    Built /sub endpoint with validation

    Built /mult endpoint

    Learned why only one response per route is allowed

✅ Data Handling & Validation

    Used req.query to receive data

    Used req.body for POST requests

    Implemented basic input validation

    Learned common validation mistakes (!a || !b)

    Understood importance of return in error handling

✅ Authentication Logic (Basic)

    Created /login GET route

    Created /login POST route

    Validated username, password, and age

    Implemented basic credential checking logic

✅ Middleware Understanding

    Used express.json() middleware

    Used express.urlencoded() middleware

    Learned why app.use() only accepts functions

✅ Debugging & Error Handling

    Read and understood Express error stack traces

    Fixed:

    Middleware misuse errors

    View engine configuration errors

    Multiple response bugs

 Learned how backend crashes happen and why