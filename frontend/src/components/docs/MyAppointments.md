# MyAppointments Component Documentation

## Overview
The MyAppointments component displays and manages a user's medical appointments. It provides an interface to view, manage, and track appointment status.

## Component Structure
```jsx
MyAppointments
├── Header Section
├── Appointments List
│   └── Appointment Card
└── Action Buttons
```

## Features

### 1. Appointment Display
- Grid layout with responsive design
- Image and doctor information
- Appointment date and time
- Address details
- Status indicators

### 2. Appointment Management
- **Pay Online**: Process payment for appointments
- **Cancel Appointment**: Option to cancel bookings
- **View Details**: Complete appointment information
- **Responsive Layout**: 
  - Grid layout for desktop
  - Stack layout for mobile
  - Flexible content arrangement

### 3. Data Integration
- Fetches doctor data from AppContext
- Displays first 3 appointments by default
- Dynamic data mapping for appointments

## Component Props
```typescript
interface AppointmentProps {
  doctors: Doctor[]  // From AppContext
}

interface Doctor {
  image: string
  name: string
  speciality: string
  address: {
    line1: string
    line2: string
  }
}
```

## Styling
### Layout Classes
- Grid Layout: `grid grid-cols-[1fr_2fr]`
- Flex Container: `flex sm:gap-6`
- Responsive Padding: `py-2`
- Border Styling: `border-b`

### Image Styling
- Width: `w-32`
- Background: `bg-indigo-50`

### Text Styling
- Base Text: `text-sm text-zinc-600`
- Headers: `text-neutral-800 font-medium`
- Address: `text-xs`

### Button Styling
- Base: `text-sm text-stone-500 text-center`
- Dimensions: `sm:min-w-48 py-2`
- Hover Effects: 
  - Pay: `hover:bg-primary hover:text-white`
  - Cancel: `hover:bg-red-600 hover:text-white`
- Transitions: `transition-all duration-400`

## Usage Example
```jsx
import MyAppointments from './components/MyAppointments'

function App() {
  return (
    <div>
      <MyAppointments />
    </div>
  )
}
```

## User Interactions

### 1. Payment Flow
- Click "Pay Online" button
- Redirects to payment gateway
- Processes payment
- Updates appointment status

### 2. Cancellation Flow
- Click "Cancel appointment" button
- Shows confirmation dialog
- Processes cancellation
- Updates appointment list

## State Management
- Uses React Context (AppContext) for global state
- Manages doctors data through context
- Local state for UI interactions

## Responsive Behavior
- **Desktop**: 
  - Grid layout
  - Side-by-side information
  - Full button width
- **Mobile**: 
  - Stack layout
  - Full-width elements
  - Optimized spacing

## Error Handling
- Graceful fallback for missing images
- Data validation for doctor information
- Context error boundary

## Future Enhancements
- [ ] Pagination for appointments
- [ ] Filter by date range
- [ ] Sort by various parameters
- [ ] Search functionality
- [ ] Appointment rescheduling
- [ ] Email notifications
- [ ] Print appointment details

## Performance Considerations
- Optimized image loading
- Controlled re-renders
- Context optimization
- Lazy loading for large lists

## Accessibility
- Semantic HTML structure
- ARIA labels
- Keyboard navigation
- Focus management
- Screen reader friendly

## Best Practices
1. **Component Structure**
   - Single responsibility
   - Modular design
   - Reusable elements

2. **State Management**
   - Context for global state
   - Props for component data
   - Local state for UI

3. **Styling**
   - Consistent naming
   - Responsive design
   - Theme compatibility
   - Maintainable structure

4. **Performance**
   - Optimized renders
   - Efficient data handling
   - Resource management
