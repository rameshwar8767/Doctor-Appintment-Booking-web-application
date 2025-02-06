# BookMyDoc Frontend Components

## 🏥 Component Documentation

### 1. Navigation System (`Navbar.jsx`)
- **Authentication States:**
  - Logged-in: Shows profile picture with dropdown
  - Logged-out: Displays "Create account" button
- **Menu Items:**
  - HOME - Landing page navigation
  - ALL DOCTORS - Complete doctors listing
  - ABOUT - Platform information
  - CONTACT - Contact details
- **Profile Dropdown Features:**
  - My Profile
  - My Appointments
  - Logout option
- **Responsive Design:**
  - Desktop: Full menu visible
  - Mobile: Collapsible menu

### 2. Hero Section (`Header.jsx`)
- **Main Features:**
  - Compelling headline for doctor appointments
  - Trust indicators with profile group display
  - CTA button for appointment booking
- **Responsive Layout:**
  - Desktop: Side-by-side content and image
  - Mobile: Stacked layout
- **Interactive Elements:**
  - Smooth scroll to speciality section
  - Hover effects on CTA button

### 3. Speciality Navigation (`SpecialityMenu.jsx`)
- **Core Features:**
  - Horizontal scrollable speciality cards
  - Icon-based speciality representation
  - Direct navigation to filtered doctor lists
- **User Experience:**
  - Smooth scrolling behavior
  - Hover animations
  - Auto-scroll to top on selection
- **Data Management:**
  - Pulls data from specialityData array
  - Dynamic routing based on speciality

### 4. Doctor Showcase (`TopDoctors.jsx`)
- **Display Features:**
  - Grid layout of top 10 doctors
  - Individual doctor cards with:
    - Profile image
    - Availability status
    - Name and specialization
- **Interactive Elements:**
  - Click navigation to appointment booking
  - Hover effects on cards
  - "More" button for additional listings
- **Context Integration:**
  - Uses AppContext for doctor data
  - Dynamic routing with useNavigate

### 5. Context Management (`Context.jsx`)
- **Global State Management:**
  - Doctors data accessibility
  - Centralized state management
  - Provider wrapper for component tree

### 6. User Management Pages
#### Profile Page (`Profile.jsx`)
- Template structure for user profile management
- Pending implementation for:
  - Profile information display
  - Edit functionality
  - Settings management

#### Appointments Page (`MyAppointments.jsx`)
- Template structure for appointment management
- Planned features:
  - Appointment listing
  - Status tracking
  - Booking management

## 🛠 Technical Stack
- React 18+
- React Router v6
- Context API
- Tailwind CSS
- Modern ES6+ JavaScript

## 📚 State Management
- Local state: useState hooks
- Global state: Context API
- Route state: React Router

## 🎨 Styling Architecture
- Tailwind CSS classes
- Responsive design principles
- Custom animations
- Mobile-first approach

## 🔄 Data Flow
1. Context provides doctor data
2. Components consume context
3. React Router handles navigation
4. State updates trigger re-renders

## 📱 Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Quick Start Guide
1. Clone repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Access via `http://localhost:3000`

## 💡 Development Guidelines
1. Maintain component modularity
2. Follow existing naming conventions
3. Use context for global state
4. Implement responsive designs
5. Add comments for complex logic

## 🔄 Future Enhancements
- [ ] Authentication integration
- [ ] Appointment booking system
- [ ] Doctor search functionality
- [ ] Reviews and ratings
- [ ] Patient dashboard
- [ ] Medical records integration

## 🐛 Known Issues
- Profile page needs implementation
- Appointments page needs backend integration
- Mobile menu requires optimization

## 📝 Contributing
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request
