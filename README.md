# RA2311026010032
# Campus Notifications System (Stage 1)
This project implements a backend system that fetches campus notifications from a provided API and prioritizes them based on importance and recency.

The system processes notifications and returns the top N most important unread notifications.

---

## Tech Stack

* Node.js
* JavaScript 
* REST API

---

## How It Works

1. Register and authenticate using API
2. Obtain access token
3. Fetch notifications from API endpoint
4. Apply priority mapping:Placement → Result → Event 
5. Sort notifications:First by priority , Then by timestamp
6. Select top N notifications
7. Log each step using middleware

---

##  How to Run

### 1. Install dependencies
npm install

### 2. Generate access token
node auth.js


### 3. Paste token in app.js
const TOKEN = "mytoken";

### 4. Run the application
node notification_app_be/app.js

---


## Screenshots

![alt text](<Screenshot 2026-05-02 110754.png>)