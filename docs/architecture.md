# Desi Dhara by Rajwari - Project Architecture

## Overview
Desi Dhara by Rajwari is a premium A2 milk and dairy delivery platform. The system consists of a Flutter-based mobile application (supporting Customer, Admin, and Delivery roles) and a robust Node.js backend.

## Tech Stack
- **Mobile App:** Flutter (Dart)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **Authentication:** Firebase Auth (OTP)
- **Payments:** UPI Integration (Razorpay/PhonePe)
- **Cloud Storage:** Firebase Storage / AWS S3
- **Notifications:** Firebase Cloud Messaging (FCM)

## Project Structure

### Mobile App (`/mobile_app`)
Follows a Feature-driven Clean Architecture:
- `lib/core`: Constants, themes, network, and utilities.
- `lib/features`:
  - `auth`: OTP Login/Signup.
  - `customer`: Home, Products, Subscriptions, Wallet, Tracking.
  - `admin`: Dashboard, Customer/Subscription management, Analytics.
  - `delivery`: Routes, OTP Confirmation.
- `lib/shared`: Common widgets (Buttons, Inputs, Cards).
- `lib/models`: Data models and JSON serialization.
- `lib/services`: API services, Firebase integration.
- `lib/providers`: State management (using Provider).

### Backend (`/backend`)
Follows MVC pattern:
- `src/controllers`: Logic for each route.
- `src/models`: Mongoose schemas.
- `src/routes`: API endpoints.
- `src/middleware`: Auth, validation, error handling.
- `src/services`: External integrations (Firebase, SMS, Payment).
- `src/config`: Environment variables and DB connection.

## Brand Design System
- **Primary Color:** Deep Forest Green (#0F2A1D)
- **Secondary Color:** Heritage Green (#1B3B2A)
- **Accent Color:** Antique Gold (#C5A46D)
- **Background:** Warm Ivory (#F7F2E7)
- **Surface:** Cream White (#FFFDF8)
- **Typography:** Serif for headings (Luxury feel), Sans-serif for body (Readability).
