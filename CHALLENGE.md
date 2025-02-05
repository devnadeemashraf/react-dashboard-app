# **Project: Real-Time Analytics Dashboard (10k+ Data Points)**

## **Technical Problem Statement**

### **Overview**

Build a dashboard for monitoring IoT sensor data from 10,000+ devices in real-time. The system must handle high-frequency updates while maintaining smooth UI performance. Use frontend-only tech stack with mocked APIs.

### **Key Features & Learning Objectives**

#### **1. Data Infrastructure Setup**

- [ ] **Mirage JS Server Configuration**
  - Mock API endpoints for:
  - Initial dataset load (10k records)
  - Real-time update stream
  - Search/filter endpoints
- [ ] **Data Modeling**
  - Generate realistic fake data with:
  - Device ID (UUIDv4)
  - Geo-coordinates
  - Nested sensor readings
  - Timestamped metrics
- [ ] **Pagination & Infinite Scroll**
  - Implement cursor-based pagination
  - Scroll restoration functionality

#### **2. Core Dashboard Features**

- [ ] **Real-Time Updates**
  - WebSocket-like simulation
  - Merge stream updates with existing data
  - Visual update indicators
- [ ] **Virtualized Data Grid**
  - Render 10k+ rows smoothly
  - Custom cell renderers with charts
  - Column resizing/reordering
- [ ] **Complex Visualizations**
  - Heatmap of device locations
  - Time-series sparklines
  - Dynamic aggregation charts

#### **3. Performance Requirements**

- [ ] **Rendering Optimization**
  - ≤ 50ms JS execution per update
  - ≤ 5% dropped frames during scrolling
  - Memory usage ≤ 200MB for 10k rows
- [ ] **Background Processing**
  - Web Workers for data aggregation
  - Debounced filter calculations
  - Off-main-thread sorting

### **Technical Specifications**

#### **Mandatory Tech Stack**

- React 18+ (Initially JavaScript, later migrate to TypeScript)
- Mirage JS (Mock API)
- react-window (Virtualization)
- React Query (Data Management)
- Web Workers (Optional but Recommended)

#### **Setup Steps for Mirage JS**

1. Install dependencies:

```bash
npm install miragejs faker @faker-js/faker
```

2. Create mock server (`src/mocks/server.ts`):

```ts
import { createServer } from "miragejs";
import { faker } from "@faker-js/faker";

export function makeServer() {
  return createServer({
    routes() {
      this.namespace = "api";

      // Initial load endpoint
      this.get("/devices", (schema, request) => {
        const page = parseInt(request.queryParams.page || "1");
        return {
          data: Array.from({ length: 200 }).map(() => ({
            id: faker.string.uuid(),
            name: faker.location.city(),
            coordinates: [
              faker.location.latitude(),
              faker.location.longitude(),
            ],
            metrics: {
              temperature: faker.number.int({ min: -20, max: 50 }),
              humidity: faker.number.int({ min: 0, max: 100 }),
              lastUpdated: faker.date.recent().toISOString(),
            },
          })),
          pagination: {
            currentPage: page,
            totalPages: 50, // 50 * 200 = 10k devices
          },
        };
      });

      // Real-time updates endpoint
      this.get("/updates", () => ({
        updates: Array.from({ length: 50 }).map(() => ({
          id: faker.helpers.arrayElement(existingDeviceIds),
          metrics: {
            temperature: faker.number.int({ min: -20, max: 50 }),
            timestamp: faker.date.recent().toISOString(),
          },
        })),
      }));
    },
  });
}
```

### **Implementation Hints**

1. **Virtualization Strategy**

   - Use `react-window`'s `VariableSizeList` for dynamic row heights
   - Implement CSS containment for complex cells
   - Cache measurement results with `useMemo`

2. **Real-Time Updates**

   - Use `WebSocket` polyfill with Mirage's `passthrough`
   - Batch updates with `useTransition`
   - Implement versioned data merging

3. **Performance Monitoring**
   - Use React DevTools Profiler
   - Track Cumulative Layout Shift (CLS)
   - Implement custom performance metrics logger

### **Success Metrics**

- Maintain 60 FPS during rapid updates
- Sub-100ms interaction latency
- Smooth scroll with 100k+ simulated rows

---

### **Recommended Learning Resources**

1. [React Window Documentation](https://react-window.vercel.app/)
2. [Mirage JS Request Lifecycle](https://miragejs.com/docs/main-concepts/route-handlers/)
3. [Web Workers in React](https://www.smashingmagazine.com/2020/10/web-workers-angular-react-vue/)
4. [React Query Optimistic Updates](https://tanstack.com/query/v4/docs/guides/optimistic-updates)

### **Architecture Diagram Draft**

```
[Mock Server] ← HTTP/WS → [React Query] → [Virtualized Grid]
       ↑                       |
       └── Web Workers ← [Data Processing]
                ↓
[Performance Monitor] → [Metrics Dashboard]
```
