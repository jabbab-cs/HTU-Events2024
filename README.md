# HTU Events App & Website

## Overview

The **HTU Events App** and **Website** are platforms designed to help students at HTU  discover, RSVP, and manage events organized by various clubs and organizations. The app provides a seamless experience for browsing events, while the website allows admins to add and manage events.

This project includes:
- A **React Native** mobile app for students.
- A **React**-based website for event management.
- A **Node.js/Express** backend to handle API requests.

---

## Features

### Mobile App
- **Event Discovery**: Browse upcoming events with details like date, time, location, and organizer.
- **RSVP**: RSVP to events and view your RSVPs.
- **Event Details**: View detailed information about each event, including descriptions and RSVP lists.

### Website
- **Event Management**: Add and edit events.
- **Image Upload**: Upload event images directly from the website.
- **RSVP Management**: View a list of users who RSVP'd to each event.

---

## Technologies Used

### Frontend (Mobile App)
- **React Native**: For building the mobile app.
- **React Navigation**: For navigation between screens.
- **React Native Reanimated Carousel**: For displaying events in a carousel format.
- **Axios**: For making API requests to the backend.

### Frontend (Website)
- **React**: For building the website.
- **Tailwind CSS**: For styling the website.
- **Axios**: For making API requests to the backend.

### Backend
- **Node.js**: For the server.
- **Express**: For handling API routes.
- **Multer**: For handling image uploads.

## Features Added

### Mobile App
- **Carousel View**: Events are displayed in a carousel for a better user experience.
- **RSVP Functionality**: Users can RSVP to events, and admins can view RSVP lists.

### Website
- **Event Management**: Admins can add, edit, and delete events.
- **Image Upload**: Admins can upload event images directly from the website.
- **RSVP Management**: Admins can view a list of users who RSVP'd to each event.

---

## Screenshots

### Mobile App
| Login Screen | Home Screen | Event Details |
|--------------|-------------|---------------|
| ![Login Screen](screenshots/login.png) | ![Home Screen](screenshots/home.png) | ![Event Details](screenshots/details.png) |

### Website
| Event Management | Add Event | RSVP List |
|------------------|-----------|-----------|
| ![Event Management](screenshots/website-events.png) | ![Add Event](screenshots/add-event.png) | ![RSVP List](screenshots/rsvp-list.png) |

---

## Future Improvements
- **User Authentication**: Add user authentication for secure access.
- **Push Notifications**: Implement push notifications for real-time updates.
- **Search Functionality**: Add a search bar to filter events by title or description.
