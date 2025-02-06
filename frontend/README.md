# BookMyDoc - Frontend Components Documentation

## Overview
BookMyDoc is a medical appointment booking platform that allows users to find and book appointments with trusted doctors across various specialties.

## Component Structure

### 1. Home Component (`/pages/Home.jsx`)
The main landing page component that integrates:
- Header
- SpecialityMenu
- TopDoctors

### 2. Header Component (`/components/Header.jsx`)
A responsive hero section featuring:
- Main headline "Book Appointment With Trusted Doctors"
- Profile group display
- Call-to-action button for appointment booking
- Responsive layout with doctor image
- Custom styling for mobile and desktop views

### 3. SpecialityMenu Component (`/components/SpecialityMenu.jsx`)
Displays medical specialties in a scrollable horizontal layout:
- Title and description section
- Clickable specialty cards with icons
- React Router integration for specialty-based navigation
- Smooth scroll-to-top functionality
- Hover animations for better user interaction

### 4. TopDoctors Component (`/components/TopDoctors.jsx`)
Shows featured doctors:
- Displays top 10 doctors from the database
- Each doctor card includes:
  - Doctor's photo
  - Availability status
  - Name
  - Speciality
- "More" button for expanded view

### 5. Navbar Component (`/components/Navbar.jsx`)
Responsive navigation bar with:
- Logo
- Navigation links (Home, All Doctors, About, Contact)
- User authentication features:
  - Profile dropdown menu for logged-in users
  - Create account button for non-authenticated users
- Mobile-responsive design
- User profile management options:
  - My Profile
  - My Appointments
  - Logout functionality

### 6. Profile Component (`/pages/Profile.jsx`)
User profile management page (template ready for implementation)

### 7. MyAppointments Component (`/pages/MyAppointments.jsx`)
Appointments management page (template ready for implementation)

## Key Features
- Fully responsive design
- Tailwind CSS integration
- React Router for navigation
- User authentication state management
- Interactive UI elements
- Smooth animations and transitions

## Technical Implementation
- Uses React functional components
- React Router for routing
- State management using React hooks (useState)
- Asset management through centralized assets file
- Tailwind CSS for styling
- Component-based architecture for better maintainability

## Getting Started
1. Install dependencies: `npm install`
2. Run the development server: `npm start`
3. Access the application at `http://localhost:3000`

## Future Implementations
- Profile page functionality
- Appointments management system
- Doctor search and filtering
- Appointment booking flow
- User authentication integration
- Backend API integration

## Contributing
Feel free to contribute to this project by submitting pull requests or creating issues for bugs and feature requests.
