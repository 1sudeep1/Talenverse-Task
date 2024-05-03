
# Talenverse-Task

This is a basic setup guide for creating a web application using Next.js, Node.js, Express.js, and MongoDB. This setup will allow you to create a site of Talenverse with hompage and contact page with full responsive.


## Features
- Responsive design for home page and contact page.
- Backend for contact page, where user can fill up the contact form and send the message. The information will store in mongodb database.
- Navar animation while scrolling.

## Prerequisites

- Node.js: Download and Install Node.js
- MongoDB: Download and Install MongoDB

## Getting Started

- Clone the Repository

        git clone https://github.com/1sudeep1/Talenverse-Task.git

### Backend Setup

- Install Dependencies

        cd server

        npm install


- Set Up Environment Variables

    Create a .env file in the root directory and add the following:

        PORT
  
- Start the Server

        npm run dev

### Front-end Setup
- Install Dependencies

        cd client

        npm install
  
- Set Up Environment Variables

    Create a .env file in the root directory and add the following:

        NEXT_PUBLIC_API_URL

- Start the Server

        npm run dev

