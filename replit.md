# AI Portfolio Website

## Overview

This is a full-stack web application built as a professional portfolio for an AI enthusiast and data professional. The application showcases skills, experience, projects, and provides a contact form for potential employers or collaborators. It features a modern, responsive design with a clean user interface built using React and shadcn/ui components.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Management**: React Hook Form with Zod validation
- **UI Components**: shadcn/ui based on Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: PostgreSQL-backed sessions (connect-pg-simple)
- **API Design**: RESTful API with JSON responses

### Development Architecture
- **Monorepo Structure**: Shared code between client and server
- **Hot Reload**: Vite dev server with HMR
- **Type Safety**: Full TypeScript coverage across the stack
- **Code Organization**: Modular component structure with clear separation of concerns

## Key Components

### Frontend Components
- **Navigation**: Sticky navigation with smooth scrolling
- **Hero Section**: Professional introduction with contact information
- **About Section**: Professional summary and career progression
- **Skills Section**: Categorized technical skills display
- **Experience Section**: Work history with achievements
- **Projects Section**: Portfolio of AI and data warehousing projects
- **Education Section**: Academic background and extracurricular activities
- **Contact Form**: Validated form with server-side submission
- **Footer**: Social links and additional contact information

### Backend Components
- **API Routes**: Contact form submission and data retrieval endpoints
- **Database Schema**: User and contact tables with proper relationships
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Error Handling**: Comprehensive error handling with proper HTTP status codes
- **Request Logging**: Middleware for API request logging

### Shared Components
- **Schema Definitions**: Zod schemas for data validation
- **TypeScript Types**: Shared types between frontend and backend
- **Database Models**: Drizzle ORM schema definitions

## Data Flow

1. **User Interaction**: User interacts with the portfolio website
2. **Form Submission**: Contact form data is validated client-side using Zod
3. **API Request**: Form data is sent to `/api/contact` endpoint
4. **Server Validation**: Server validates data using shared Zod schemas
5. **Database Storage**: Valid contact submissions are stored in PostgreSQL
6. **Response**: Success/error response is sent back to the client
7. **User Feedback**: Toast notifications inform users of submission status

## External Dependencies

### Frontend Dependencies
- **UI Library**: Radix UI primitives for accessible components
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date formatting
- **Form Validation**: Zod for schema validation
- **HTTP Client**: Fetch API with custom request wrapper

### Backend Dependencies
- **Database**: Neon Database (PostgreSQL-compatible)
- **ORM**: Drizzle ORM for type-safe database operations
- **Session Store**: PostgreSQL session storage
- **Development**: tsx for TypeScript execution

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Type Checking**: TypeScript with strict configuration
- **Replit Integration**: Cartographer plugin for Replit environment

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express API
- **Hot Reload**: Full-stack hot reload with Vite middleware
- **Environment Variables**: DATABASE_URL for PostgreSQL connection
- **Replit Integration**: Optimized for Replit development environment

### Production Build
- **Frontend**: Vite builds optimized bundle to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Static Assets**: Served from Express in production
- **Database**: Drizzle migrations for schema deployment

### Database Setup
- **Schema Management**: Drizzle Kit for migrations
- **Connection**: Neon Database serverless PostgreSQL
- **Environment**: DATABASE_URL environment variable required

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 03, 2025. Initial setup