### Notification System

Approach:
- Fetch notifications using API with Bearer token
- Implement logging middleware for tracking
- Assign priority:
  Placement > Result > Event
- Sort notifications by priority and timestamp
- Select top N notifications

Optimization:
- Use a priority queue (min-heap) to maintain the top N notifications efficiently, reducing time complexity compared to sorting the entire dataset each time.