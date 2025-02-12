# BookMyDoc Frontend Documentation

## 📑 Core Components Overview

### 1. Home Page (`Home.jsx`)
- **Purpose**: Main landing page
- **Components Used**:
  - Header (Hero section)
  - SpecialityMenu
  - TopDoctors
  - Banner
- **Key Features**:
  - Welcoming interface
  - Quick access to specialities
  - Featured doctors display

### 2. Doctors Page (`Doctors.jsx`)
- **Purpose**: Doctor listing and filtering
- **Key Features**:
  - Filter by speciality
  - Dynamic routing with speciality parameters
  - Grid view of doctors
  - Availability status indicators
- **State Management**:
  - Uses AppContext for doctors data
  - Local state for filtered results
  - URL parameters for speciality filtering

### 3. Navigation (`Navbar.jsx`)
- **Features**:
  - Responsive design
  - Dynamic menu based on auth state
  - Profile dropdown for logged-in users
- **Navigation Links**:
  - Home
  - Doctors
  - About
  - Contact
  - Login/Profile

### 4. Banner Component (`Banner.jsx`)
- **Purpose**: CTA section
- **Features**:
  - Appointment booking promotion
  - Responsive design
  - Call-to-action button
  - Dynamic image placement

### 5. Footer Component (`Footer.jsx`)
- **Sections**:
  - Company information
  - Quick links
  - Contact details
- **Features**:
  - Responsive grid layout
  - Social media links
  - Copyright information

### 6. Appointments Component (`Appointments.jsx`)
- **Purpose**: Handle doctor appointment bookings
- **Key Features**:
  - Doctor profile display
  - Dynamic slot generation
  - Interactive booking calendar
  - Time slot selection

#### State Management
- **Local States**:
  ```javascript
  docInfo       // Stores doctor information
  docSlot       // Manages available time slots
  slotIndex     // Tracks selected day
  slotTime      // Selected appointment time
  ```

#### Core Functions
1. **fetchDocInfo()**
   - Retrieves doctor details from context
   - Filters based on URL parameter
   - Updates doctor information state

2. **getAvailableSlots()**
   - Generates 7-day booking window
   - Creates 30-minute interval slots
   - Handles time restrictions:
     - Current day: Starts from next hour
     - Future days: Full day slots
   - Business hours: 10 AM - 9 PM

#### UI Components
1. **Doctor Profile Section**
   - Profile image
   - Name with verification badge
   - Qualifications
   - Speciality
   - Experience
   - About section
   - Appointment fee

2. **Booking Interface**
   - **Date Selection**:
     - 7-day calendar view
     - Day name and date display
     - Active day highlighting
   - **Time Slots**:
     - 30-minute intervals
     - Visual selection feedback
     - Scrollable interface
   - **Booking Action**:
     - Confirmation button
     - Fee display

#### Implementation Details
- **Data Flow**:
  ```
  URL Params → Doctor Info → Available Slots → User Selection → Booking
  ```
- **Responsive Design**:
  - Flexible layout system
  - Mobile-first approach
  - Adaptive grid structure

#### Technical Specifications
- **Dependencies**:
  - React Router (useParams)
  - Context API
  - Date manipulation
- **Styling**:
  - Tailwind classes
  - Custom responsive utilities
  - Dynamic state classes

### Enhanced Appointments Component Details
#### Advanced Features
1. **Slot Generation Logic**:
   ```javascript
   - Business hours: 10 AM - 9 PM
   - Dynamic start time for current day
   - 30-minute slot intervals
   - 7-day advance booking
   ```

2. **Data Validation**:
   - Doctor existence check
   - Valid time slot verification
   - Date boundary checks

3. **User Interface Improvements**:
   - Interactive calendar
   - Visual slot selection
   - Responsive layout adjustments
   - Profile card design

4. **Integration Points**:
   - Context API connection
   - Route parameter handling
   - RelatedDoctors component
   - Asset management

### 7. About Page (`About.jsx`)
- **Purpose**: Company information and value proposition
- **Key Features**:
  - Company overview
  - Value propositions
  - Interactive cards
- **Layout Structure**:
  - Header section
  - Main content with image
  - Features grid
- **UI Components**:
  1. **Header**:
     - Title with styling
     - Responsive text layout
  2. **Main Content**:
     - Company image
     - Description text
     - Responsive flex layout
  3. **Feature Cards**:
     - Interactive hover effects
     - Three main value propositions:
       - Efficiency
       - Convenience
       - Personalization
     - Consistent styling with primary colors

### 8. RelatedDoctors Component (`RelatedDoctors.jsx`)
- **Purpose**: Display related doctors based on speciality
- **Props**:
  ```javascript
  speciality   // Doctor's speciality for filtering
  docId        // Current doctor's ID to exclude
  ```
- **Features**:
  - Filtered doctor list
  - Interactive cards
  - Navigation integration
  - Responsive grid layout

#### Implementation Details
1. **State Management**:
   ```javascript
   const [relDoc, setRelDocs] = useState([])  // Stores filtered doctors
   ```

2. **Data Filtering**:
   - Filters doctors by speciality
   - Excludes current doctor
   - Limited to 5 doctors display

3. **UI Elements**:
   - Doctor cards with:
     - Profile image
     - Availability status
     - Name and speciality
     - Hover animations
   - "More" button for full listing

4. **Navigation**:
   - Click handlers for doctor cards
   - Smooth scrolling behavior
   - Route management

### 9. Contact Page (`Contact.jsx`)
- **Purpose**: Display company contact information and career opportunities
- **Component Structure**:
  1. **Header Section**:
     - Title "CONTACT US"
     - Styled with gray color scheme
     - Centered alignment

  2. **Main Content**:
     - Two-column layout (mobile responsive)
     - Left: Contact image
     - Right: Contact information

  3. **Information Sections**:
     - Office address
     - Contact details
     - Career opportunities
     - Call-to-action button

#### Features
1. **Responsive Design**:
   - Mobile-first approach
   - Flex column on mobile
   - Two-column layout on desktop (md breakpoint)
   - Adaptive image sizing

2. **Visual Elements**:
   - Contact illustration
   - Consistent typography
   - Brand color scheme
   - Interactive button

3. **Contact Details**:
   ```
   Location: Karve Statue Kothrud, Pune-411008, India
   Phone: +91 8787898091
   Email: bookmydoctor@gmail.com
   ```

#### Technical Implementation
1. **Component Import**:
   - React framework
   - Assets import for images

2. **Styling**:
   - Tailwind CSS classes
   - Responsive utilities:
     - flex-col/row
     - width adjustments
     - padding/margin
   - Interactive hover effects
   - Smooth transitions

3. **Button Features**:
   - Border styling
   - Hover animation
   - Color transition
   - Padding optimization

#### CSS Classes
```css
Main Container:
- flex flex-col
- items-center
- justify-center
- gap-10
- md:flex-row

Image:
- w-full
- md:max-w-[360px]

Typography:
- text-gray-500/600/700
- text-sm/lg/2xl
- font-semibold

Button:
- border
- rounded-lg
- border-black
- px-8 py-4
- hover:bg-black
- hover:text-white
- transition-all
- duration-500
```

#### Usage Guidelines
1. **Image Requirements**:
   - Contact illustration
   - Responsive sizing
   - Alt text for accessibility

2. **Content Updates**:
   - Address modification
   - Contact details changes
   - Career section updates

3. **Maintenance**:
   - Regular contact validation
   - Link updates
   - Career openings sync

## 🔧 Technical Implementation

### Routing Structure
```javascript
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/doctors" element={<Doctors/>} />
  <Route path="/doctors/:speciality" element={<Doctors/>} />
  <Route path="/appointments/:docId" element={<Appointments/>} />
  <Route path="/my-appointments" element={<MyAppointments/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/profile" element={<Profile/>} />
  <Route path="/signup" element={<Signup/>} />
</Routes>
```

### Styling
- **Framework**: Tailwind CSS
- **Custom Classes**:
  - Responsive utilities
  - Custom scrollbar hiding
  - Active state indicators
- **Font**: Outfit (Google Fonts)

### State Management
- **Global State**: React Context API
- **Local State**: useState Hook
- **URL State**: React Router useParams

## 📱 Responsive Design
- **Breakpoints**:
  - sm: 640px
  - md: 768px 
  - lg: 1024px
  - xl: 1280px
- **Mobile-First Approach**:
  - Flexible grids
  - Responsive padding/margins
  - Adaptive layouts

## 🔄 Data Flow
1. Context Provider wraps app
2. Components consume context data
3. URL parameters control routing
4. User actions trigger state updates

## 🚀 Setup & Installation
1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## 🛠 Development Guidelines

### Component Structure
- Functional components
- Props validation
- Clear component hierarchy
- Modular design

### Code Style
- ES6+ syntax
- Consistent naming
- Component-based architecture
- Clean props passing

### Best Practices
- Regular commits
- Component documentation
- Responsive testing
- Performance optimization

## 🔍 Testing
- Component testing
- Responsive design testing
- Cross-browser compatibility
- Performance monitoring

## 🔐 Security
- Input validation
- Protected routes
- Secure data handling
- Error boundaries

## 📈 Future Enhancements
- [ ] Real-time chat
- [ ] Push notifications
- [ ] Payment integration
- [ ] Doctor reviews
- [ ] Appointment reminders
- [ ] Medical history

## 🔐 Authentication System

### Components Overview

#### 1. Login Component (`Login.jsx`)
- **Purpose**: User authentication interface
- **State Management**:
  ```javascript
  email        // User email
  password     // User password
  ```
- **Key Features**:
  - Email/password validation
  - Error handling
  - Redirect after login
  - Password recovery link
  - Sign up redirect
- **Form Elements**:
  - Email input field
  - Password input field
  - Login button
  - Forgot password link
  - Sign up link

#### 2. Signup Component (`Signup.jsx`)
- **Purpose**: New user registration
- **State Management**:
  ```javascript
  name             // User's full name
  email            // User email
  password         // User password
  confirmPassword  // Password confirmation
  ```
- **Key Features**:
  - Form validation
  - Password matching
  - Input sanitization
  - Automatic login after signup
  - Login redirect for existing users
- **Form Elements**:
  - Full name input
  - Email input
  - Password input
  - Confirm password input
  - Create account button
  - Login redirect link

### Authentication Flow
1. **Login Process**:
   ```
   Input Validation → API Call → Token Storage → Redirect
   ```
   
2. **Signup Process**:
   ```
   Form Validation → Data Sanitization → API Call → Auto Login → Redirect
   ```

3. **Session Management**:
   - JWT token storage
   - Token refresh mechanism
   - Auto logout on expiry
   - Secure cookie handling

### Security Measures
1. **Input Validation**:
   - Email format checking
   - Password strength requirements
   - XSS prevention
   - SQL injection protection

2. **Data Protection**:
   - Password hashing
   - Secure token storage
   - HTTPS enforcement
   - Rate limiting

3. **Error Handling**:
   - Invalid credentials
   - Network failures
   - Server errors
   - Validation errors

### UI/UX Features
1. **Form Design**:
   - Clean, minimalist layout
   - Responsive design
   - Clear error messages
   - Loading states
   - Success feedback

2. **Navigation**:
   - Smooth transitions
   - Protected routes
   - Redirect handling
   - Browser history management

### Integration Points
1. **API Endpoints**:
   ```javascript
   POST /api/auth/login    // User login
   POST /api/auth/signup   // User registration
   POST /api/auth/logout   // User logout
   GET  /api/auth/verify   // Token verification
   ```

2. **State Management**:
   - Global auth context
   - Local form state
   - Persistent login
   - Token refresh logic

### 10. MyAppointments Component (`MyAppointments.jsx`)
- **Purpose**: Display and manage user's appointments
- **Component Structure**:
  1. **Header Section**:
     - Title "My Appointments"
     - Filter options (Upcoming/Past)
     - Search functionality

  2. **Appointments List**:
     - Appointment cards
     - Sorting options
     - Pagination

#### Features
1. **Appointment Cards**:
   - Doctor information
   - Date and time
   - Status indicator
   - Action buttons
   - Booking reference

2. **Filtering & Sorting**:
   - By date
   - By status
   - By doctor name
   - By speciality

3. **Appointment Management**:
   - Cancel appointment
   - Reschedule option
   - View details
   - Download prescription

#### State Management
```javascript
appointments    // List of user appointments
filterType      // Current filter selection
searchQuery     // Search input value
currentPage     // Pagination state
sortBy         // Current sort criteria
```

#### Technical Implementation
1. **Data Fetching**:
   ```javascript
   useEffect(() => {
     // Fetch user appointments
     // Apply filters
     // Update state
   }, [filterType, searchQuery, currentPage])
   ```

2. **Appointment Card Structure**:
   ```javascript
   {
     id: string,
     doctorId: string,
     doctorName: string,
     speciality: string,
     date: Date,
     time: string,
     status: 'upcoming' | 'completed' | 'cancelled',
     reference: string
   }
   ```

3. **User Actions**:
   - View appointment details
   - Cancel appointment
   - Request rescheduling
   - Leave feedback

#### UI Components
1. **Filter Section**:
   - Toggle buttons
   - Search input
   - Date range picker
   - Sort dropdown

2. **Appointment List**:
   - Grid/List view toggle
   - Responsive card layout
   - Status badges
   - Action buttons

3. **Empty States**:
   - No appointments
   - No search results
   - Error states

#### Integration Points
1. **API Endpoints**:
   ```javascript
   GET    /api/appointments        // Fetch appointments
   PATCH  /api/appointments/:id    // Update appointment
   DELETE /api/appointments/:id    // Cancel appointment
   POST   /api/appointments/reschedule
   ```

2. **Context Usage**:
   - User context for authentication
   - Toast context for notifications
   - Loading context for states

#### Styling
```css
Container:
- max-w-7xl
- mx-auto
- px-4
- py-8

Cards:
- rounded-lg
- shadow-md
- hover:shadow-lg
- transition-all

Status Badges:
- upcoming: bg-green-100 text-green-800
- completed: bg-gray-100 text-gray-800
- cancelled: bg-red-100 text-red-800
```

#### Error Handling
1. **Network Errors**:
   - Retry mechanism
   - Error messages
   - Fallback UI

2. **User Feedback**:
   - Success messages
   - Error notifications
   - Loading states

#### Best Practices
1. **Performance**:
   - Pagination
   - Lazy loading
   - Debounced search
   - Memoized components

2. **Accessibility**:
   - ARIA labels
   - Keyboard navigation
   - Focus management
   - Screen reader support

3. **Mobile Optimization**:
   - Touch targets
   - Swipe actions
   - Responsive layout
   - Bottom sheet details

## 🔍 Detailed Component Functionality

### Navigation Component (`Navbar.jsx`)
#### Core Features
1. **Responsive Navigation**
   - Desktop menu with full options
   - Mobile hamburger menu
   - Smooth transitions

2. **Authentication States**
   - Logged-in user profile dropdown
   - Guest user login/signup buttons
   - Dynamic menu updates

3. **Profile Management**
   - Profile picture display
   - Dropdown menu with options:
     - My Profile
     - My Appointments
     - Logout
   - Hover-based interaction

#### State Management
```javascript
showMenu: boolean    // Controls mobile menu visibility
token: boolean      // Manages authentication state
```

#### Navigation Links
- HOME
- ALL DOCTORS
- ABOUT
- CONTACT

#### Mobile Menu Features
- Slide-in animation
- Full-screen overlay
- Close button
- Responsive link layout

#### Technical Implementation
1. **Route Handling**
   ```javascript
   useNavigate() for programmatic navigation
   NavLink for active route styling
   ```

2. **Responsive Classes**
   - Hidden/visible based on breakpoints
   - Flexible layout adaptation
   - Touch-friendly mobile UI

3. **User Experience**
   - Smooth transitions
   - Clear visual hierarchy
   - Intuitive interactions

### Doctors Component (`Doctors.jsx`)
#### Core Features
1. **Dynamic Filtering**
   - Specialty-based filtering
   - URL parameter integration
   - Real-time updates

2. **Doctor Cards**
   - Profile image
   - Availability status
   - Name and specialty
   - Interactive hover effects

3. **Filter Panel**
   - Mobile-responsive toggle
   - Specialty categories
   - Active state indication

#### State Management
```javascript
filterDoc: Doctor[]     // Filtered doctors list
showFilter: boolean     // Mobile filter visibility
speciality: string     // URL parameter tracking
```

#### Filter Categories
- General physician
- Gynecologist
- Dermatologist
- Pediatricians
- Neurologist
- Gastroenterologist

#### Technical Implementation
1. **Data Flow**
   ```javascript
   URL Params → Filter Logic → Display Update
   ```

2. **Filter Logic**
   ```javascript
   useEffect(() => {
     if(speciality) {
       filter by specialty
     } else {
       show all doctors
     }
   }, [doctors, speciality])
   ```

3. **Responsive Design**
   - Grid layout for cards
   - Flexible filter panel
   - Mobile-first approach

#### User Interactions
1. **Filter Selection**
   - Click to toggle specialty
   - Active state feedback
   - Route parameter updates

2. **Doctor Selection**
   - Card hover animation
   - Click navigation
   - Smooth transitions

3. **Mobile Experience**
   - Filter toggle button
   - Collapsible filter panel
   - Touch-friendly targets

#### Performance Optimizations
1. **Rendering**
   - Efficient list updates
   - Memoized filter results
   - Optimized image loading

2. **Navigation**
   - Smart routing
   - State persistence
   - Smooth transitions

#### Error Handling
1. **Data Validation**
   - Specialty verification
   - Image fallbacks
   - Empty state handling

2. **User Feedback**
   - Loading states
   - Error messages
   - Filter status
