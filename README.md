CarConnect


Introduction
CarConnect is a comprehensive application that consists of two microservices: Service and Sales. These microservices are designed to efficiently handle different aspects of automobile dealership management, ensuring a seamless experience for both customers and salespersons.
Features
Service microservice:

Technician Management
Appointment Scheduling
Integration with Inventory for VIP Status

Sales microservice:

Customer Information Management
Salesperson Details
Seamless Inventory Integration for Vehicle Information
Sale Creation and Tracking

Technologies Used
Backend: Django for Service and Sales microservices
Frontend: React for the user interface
Database: PostgreSQL
Containerization: Docker
Getting Started
To run the CarConnect application locally using Docker, follow these steps:

Clone the repository
Install Docker on your machine if you haven't already
Create the Docker volume "beta-data"
Build the Docker images for the Service and Sales microservices
Run the Docker containers

Access the application at http://localhost:3000 (for the React frontend) and the respective microservice endpoints
