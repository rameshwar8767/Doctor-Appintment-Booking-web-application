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
