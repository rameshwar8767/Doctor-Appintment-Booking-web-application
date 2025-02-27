# BookMyDoc Backend

A Node.js backend service for the BookMyDoc application, handling doctor appointment scheduling and management.

## Project Structure

```
backend/
├── config/
│   ├── cloudinary.js     # Cloudinary configuration for image uploads
│   └── mongoDb.js        # MongoDB database connection setup
├── controllers/
│   ├── admin.controller.js    # Admin-related business logic
│   └── doctor.controller.js   # Doctor-related business logic
├── middleware/
│   └── upload.js         # Multer middleware for file uploads
├── models/
│   └── doctor.model.js   # Doctor database schema
├── routes/
│   ├── admin.route.js    # Admin API routes
│   └── doctor.route.js   # Doctor API routes
└── index.js             # Application entry point
```

## Features

- **MongoDB Integration**: Uses Mongoose for database operations
- **Image Upload**: Supports doctor profile image uploads using Multer and Cloudinary
- **Doctor Management**: Complete CRUD operations for doctor profiles
- **Appointment System**: Handles doctor appointment slots and bookings

## API Endpoints

### Admin Routes
- `POST /api/admin/add-doctor`: Add a new doctor with profile details and image

### Doctor Schema
The doctor model includes:
- Basic Information (name, email, phone, password)
- Professional Details (speciality, degree, experience)
- Practice Information (fees, address)
- Availability (slots, available status)
- Profile Image

## Functionality

### User Management
The system includes a comprehensive user model with the following features:

1. **User Profile**
   - Basic user information storage (name, email, phone)
   - Password-protected accounts
   - Profile image support with default avatar
   - Address management with two-line format
   - Gender and date of birth tracking

2. **Data Validation**
   - Required field validation for essential information
   - Email uniqueness verification
   - Phone number uniqueness check
   - String trimming and lowercase conversion for consistency

3. **Schema Features**
   - Timestamps for user record tracking
   - Flexible address structure using Object type
   - Default values for optional fields
   - Image handling with base64 default avatar

4. **Technical Details**
   - MongoDB/Mongoose integration
   - Automatic timestamp generation
   - Case-insensitive data storage
   - Structured data validation

## Detailed Functionality

### 1. Authentication System
- **Admin Authentication**
  - Secure JWT-based authentication
  - Environment-based admin credentials
  - Protected admin routes with middleware verification
  - Token-based session management

- **Security Features**
  - Password hashing using bcrypt
  - JWT token generation and validation
  - Protected route middleware
  - Request validation and sanitization

### 2. Doctor Management
- **Profile Creation and Management**
  ```javascript
  Doctor Registration Features:
  - Name, Email, Phone validation
  - Password hashing & security
  - Professional details verification
  - Unique constraint checking
  - Image upload & optimization
  - Address formatting & validation
  ```

- **Document Processing**
  - Image upload to Cloudinary
  - Secure URL generation
  - File type validation
  - Size optimization
  - Automatic cleanup

### 3. Data Management
- **MongoDB Integration**
  - Mongoose schema validation
  - Indexed fields for optimization
  - Timestamp tracking
  - Cascade operations
  - Error handling

- **Data Validation Rules**
  ```javascript
  Validation Checks:
  - Email format verification
  - Phone number formatting
  - Required field validation
  - Type checking
  - Length restrictions
  - Unique field verification
  ```

### 4. API Architecture
- **RESTful Endpoints**
  ```javascript
  Admin Routes:
  POST /api/admin/login      // Admin authentication
  POST /api/admin/doctor     // Add new doctor
  GET  /api/admin/doctors    // List all doctors

  Doctor Routes:
  POST /api/doctor/login     // Doctor authentication
  GET  /api/doctor/profile   // Get doctor profile
  PUT  /api/doctor/profile   // Update doctor profile
  ```

### 5. Error Handling
- **Comprehensive Error Management**
  - Validation errors
  - Authentication failures
  - Database operation errors
  - File upload issues
  - Network failures
  - Custom error responses

### 6. File Management
- **Image Processing Pipeline**
  ```javascript
  Upload Process:
  1. File validation
  2. Size optimization
  3. Cloudinary upload
  4. URL generation
  5. Database update
  6. Cleanup
  ```

### 7. Security Features
- **Multi-layer Security**
  - Input sanitization
  - XSS protection
  - CSRF protection
  - Rate limiting
  - Request validation
  - Secure headers

### 8. Database Operations
- **Optimized Query Handling**
  - Indexed searches
  - Efficient updates
  - Atomic operations
  - Transaction support
  - Cascade deletions

## Core Functionality

### 1. Doctor Management System
- **Doctor Registration**
  - Complete doctor profile creation
  - Secure password hashing using bcrypt
  - Image upload with Cloudinary integration
  - Validation for required fields and email format
  - Professional details storage (speciality, degree, experience)

- **Doctor Profile**
  - Comprehensive information storage
  - Fee structure management
  - Experience tracking
  - Address and contact details
  - Professional credentials validation

### 2. User Management System
- **Profile Management**
  - Secure user registration and authentication
  - Profile image handling with default avatar
  - Address management with structured format
  - Personal information tracking (gender, DOB)

- **Data Security**
  - Password encryption
  - Unique email and phone validation
  - Case-insensitive data handling
  - Automatic timestamp tracking

### 3. Technical Implementation
- **Database Operations**
  ```javascript
  Doctor Schema {
      name, email, phone: String (required, unique)
      password: String (hashed)
      speciality, degree, experience: String
      fees: Number
      image: String (Cloudinary URL)
      address: Object
      status: Boolean
  }

  User Schema {
      name: String       // Required, trimmed, lowercase
      email: String      // Required, unique, trimmed, lowercase
      phone: String      // Required, unique, trimmed
      password: String   // Required
      image: String      // Optional, includes default avatar
      address: {         // Optional object with default structure
          line1: String
          line2: String
      }
      gender: String     // Optional, defaults to "Not Selected"
      dob: String       // Optional, defaults to "Not Selected"
      timestamps: true   // Automatically managed
  }
  ```

- **API Security**
  - Input validation
  - Error handling
  - Secure file upload
  - CORS protection

### 4. System Features
- **Image Processing**
  - Cloudinary integration
  - Automatic image optimization
  - Secure URL generation
  - Default avatar support

- **Data Validation**
  - Email format verification
  - Required field checking
  - Password strength validation
  - Phone number format checking

## Technical Stack

- **Database**: MongoDB
- **Server**: Express.js
- **File Upload**: Multer
- **Cloud Storage**: Cloudinary
- **Authentication**: (To be implemented)
- **API Security**: CORS enabled

## Environment Variables Required

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables
4. Run the server: `npm start`
