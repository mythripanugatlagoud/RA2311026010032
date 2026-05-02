const Log = require("../logging_middleware/log");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtcDk4MTZAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMDU5MywiaWF0IjoxNzc3Njk5NjkzLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiY2NmN2RmNDktMTE5MS00NjE5LTk5OWQtZWYwNjE5MDY4ZGVkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibXl0aHJpIHBhbnVnYXRsYSIsInN1YiI6ImRkOTU5N2JjLWFhODItNDMzOC05N2E1LWM5YzcyNThkZGIyZCJ9LCJlbWFpbCI6Im1wOTgxNkBzcm1pc3QuZWR1LmluIiwibmFtZSI6Im15dGhyaSBwYW51Z2F0bGEiLCJyb2xsTm8iOiJyYTIzMTEwMjYwMTAwMzIiLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiJkZDk1OTdiYy1hYTgyLTQzMzgtOTdhNS1jOWM3MjU4ZGRiMmQiLCJjbGllbnRTZWNyZXQiOiJQZlVncmtqbnVDaFJwcWFnIn0.dgT8w2lF58ks6InCtmcye2LPOO_LLQ5sHXzzBG9oHC8";

async function getTopNotifications(n = 10) {
    try {
        Log("backend", "info", "api", "Fetching notifications");

        const response = await fetch("http://20.207.122.201/evaluation-service/notifications", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${TOKEN}`
            }
        });

        const data = await response.json();
        console.log("FULL DATA:", data);

        if (!data.notifications) {
            Log("backend", "error", "api", "Invalid token or no data received");
            return;
        }

        const notifications = data.notifications;

        Log("backend", "info", "api", "Notifications fetched successfully");

        const priority = {
            Placement: 3,
            Result: 2,
            Event: 1
        };

        notifications.sort((a, b) => {
            if (priority[b.Type] !== priority[a.Type]) {
                return priority[b.Type] - priority[a.Type];
            }
            return new Date(b.Timestamp) - new Date(a.Timestamp);
        });

        Log("backend", "info", "logic", "Sorting completed");

        const topN = notifications.slice(0, n);

        Log("backend", "info", "logic", "Top N notifications selected");

        console.log("TOP NOTIFICATIONS:", topN);

    } catch (error) {
        Log("backend", "error", "api", error.message);
    }
}

getTopNotifications(10);