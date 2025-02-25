# Refund Orders Dashboard

## Overview

This project is a dashboard application for managing refund orders. It features a navigation sidebar and a table displaying a list of refund orders, allowing users to view, update, and manage orders efficiently.

## Features

- **Dashboard Layout**: A user-friendly interface with a navigation sidebar.
- **Refund Orders Table**: Displays a list of refund orders with the following details:
  - ID
  - Reason
  - Store Name
  - Store Logo
  - Store URL
  - Amount
  - Active Status
  - Decision
  - Items Count
- **Actions**:
  1. Dropdown menu to change order decision (options: "reject", "accept", "escalate").
  2. Switch to toggle order status (active/inactive).
  3. IconButton to navigate to an order detail page.
- **Notifications**: Toast notifications for actions taken.
- **Pagination**: Supports pagination with a maximum of 15 orders per page.
- **Data Fetching**: Fetches data from a RESTful API, with loading and error handling states.

## Technologies Used

- **Frontend**: React, Next.js
- **State Management**: React Hooks
- **Styling**: Tailwind CSS
- **Mock API**: JSON Server for mocking API responses
- **TypeScript**: For type safety and better development experience

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/ahmed-kkamel/frontend-yamm-task.git
   cd frontend-yamm-task
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Generate mock data:

   ```bash
   npm run generate-mock-data
   ```

4. Start the JSON server:

   ```bash
   npm run mock-api
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000`.

## Usage

- Navigate through the sidebar to access different sections of the dashboard.
- The refund orders table will display all available orders.
- Use the dropdown menu to change the decision for each order.
- Toggle the switch to change the active status of an order.
- Click the IconButton to view detailed information about an order.

## API Endpoints

- **GET /api/refund-orders**: Fetch all refund orders.
- **PATCH /api/refund-orders/[id]**: Update a specific refund order by ID.
- **GET /api/refund-orders/[id]**: Fetch a specific refund order by ID.

## Workflow Illustration

1. **Generate Mock Data**:

   - Use the command below to generate mock data for refund orders.

   ```bash
   npm run generate-mock-data
   ```

   - **Note**: The script generates 40 orders by default in the `scripts/generateMockData.ts` file. You can modify the number of orders generated by changing the length parameter in the following line:
     ```typescript
     const orders = Array.from({ length: 40 }, (_, i) => generateOrder(i + 1));
     ```

2. **Start the JSON Server**:

   - Run the following command to start the JSON server, which will serve the mock data.

   ```bash
   npm run mock-api
   ```

3. **Start the Development Server**:

   - Launch the development server to view the application in your browser.

   ```bash
   npm run dev
   ```

4. **Access the Dashboard**:

   - Open your browser and navigate to `http://localhost:3000` to access the Refund Orders Dashboard.

5. **View Refund Orders Table**:

   - The dashboard displays a table of refund orders, showing details such as ID, Reason, Store Name, Amount, and Status.

6. **Edit Actions**:

   - Each row in the table includes options to:
     - **Update Decision**: Use a dropdown menu to change the decision for each order (options: "accept", "reject", "escalate").
     - **Toggle Status**: Use a switch to change the active status of an order (active/inactive).
     - **View Order Details**: Click on an icon to navigate to the order detail page for more information.

7. **Features**:
   - **Pagination**: The table supports pagination, displaying a maximum of 15 orders per page for better navigation.
   - **Toast Notifications**: Actions taken (like updating the decision or status) trigger toast notifications to inform users of the success or failure of their actions.
