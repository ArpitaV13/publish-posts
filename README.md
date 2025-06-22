# 📝 Publish Posts – A Minimal Social Feed App

A simple front-end React app that allows users to sign up, sign in, and post messages to a public feed. Built with React + TypeScript + Tailwind CSS.

## 🔑 Core Features

### 1. 📰 **Feed Page**
- Landing page displaying all user posts
- Contains a **Post Editor** (textarea + send button)
- New posts appear instantly in the feed
- Post buttons like ❤️, 💬, ⚙️ show an alert: "Function not implemented"

### 2. 🔐 **Authentication**
- Users can **Sign Up** and **Sign In**
- Credentials stored in `localStorage`
- Only authenticated users can publish posts
- Unauthenticated users are redirected to Sign In page

### 3. 📦 **Sign In / Sign Up Modals**
- Full-page forms with basic validation
- Alerts users if credentials are incorrect or already exist

### 4. 🕒 **Time Formatting**
- Posts show dynamic timestamps like:
  - "Just now"
  - "5 mins ago"
  - or a formatted date if older than 55 minutes

### 5. 🚪 **Logout**
- Authenticated users can log out via a logout icon

### 6. ⚙️ **Responsive UI**
- Built with **Tailwind CSS**
- Clean and mobile-friendly layout

## 💻 Stack
- React + TypeScript
- Tailwind CSS
- React Router DOM
- Vite

## 🔧 Local Setup

```bash
npm install
npm run dev
