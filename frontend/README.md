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
