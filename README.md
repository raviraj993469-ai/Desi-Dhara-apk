# Desi Dhara by Rajwari - Premium Dairy App

A production-ready, scalable, and modern Flutter application for A2 milk and dairy delivery, featuring a luxury Indian brand aesthetic.

## Project Structure
- `/mobile_app`: Flutter source code for Customer, Admin, and Delivery panels.
- `/backend`: Node.js Express server with MongoDB integration.
- `/docs`: Architecture and design documentation.

## Brand Identity
- **Luxury Theme:** Deep Forest Green, Heritage Green, and Antique Gold.
- **Typography:** Playfair Display (Headings) & Lato (Body).
- **UI:** Premium minimal design with smooth transitions.

## Features
- **Customer:** OTP Auth, Subscriptions (Daily/Custom), Wallet, Tracking, WhatsApp Support.
- **Admin:** Revenue Dashboard, Analytics, User & Delivery Management.
- **Delivery:** Route Optimization, OTP Delivery Confirmation.

## Getting Started

### Backend Setup
1. Navigate to `/backend`.
2. Install dependencies: `npm install`.
3. Create a `.env` file with `MONGODB_URI` and `FIREBASE_CONFIG`.
4. Run the server: `npm start`.

### Mobile App Setup
1. Navigate to `/mobile_app`.
2. Install Flutter dependencies: `flutter pub get`.
3. Configure Firebase in `google-services.json` (Android).
4. Run the app: `flutter run`.

## Tech Stack
- **Frontend:** Flutter (State Management: Provider)
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Auth:** Firebase Authentication
- **Notifications:** Firebase Cloud Messaging
