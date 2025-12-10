# Firebase Update User Email

A Node.js utility script for updating Firebase user emails using the Firebase Admin SDK.

## Prerequisites

- Node.js installed on your machine
- A Firebase project with Authentication enabled
- Firebase Admin SDK service account credentials

## Setup

### 1. Clone or download this repository

```bash
git clone https://github.com/Gianny-Ice-Scripts/firebase-update-user-email.git
cd firebase-update-user-email
```

### 2. Install dependencies

```bash
npm install
```

### 3. Get your Firebase service account key from LastPass

1. Save the downloaded JSON file as `serviceKey.json` in the project root

> **Note:** The `serviceKey.json` file is gitignored for security. Never commit this file to version control.

## Usage

Run the script:

```bash
node updateUserEmail.js
```

The script will prompt you for:

1. **Firebase UID** - The unique identifier of the user you want to update
2. **New email address** - The email address to set for the user

### Example output

```
=== Firebase User Email Update Tool ===

Initializing Firebase Admin SDK...
Firebase Admin SDK initialized successfully.

Enter the Firebase UID of the user to update: abc123xyz
Enter the new email address: newemail@example.com

Fetching user with UID: abc123xyz...
User found:
  - UID: abc123xyz
  - Current email: oldemail@example.com
  - Display name: John Doe
  - Email verified: true

Updating email from "oldemail@example.com" to "newemail@example.com"...

Email updated successfully!
Updated user details:
  - UID: abc123xyz
  - New email: newemail@example.com
  - Email verified: false
```

## Finding a user's UID

To find a user's UID in Firebase:

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Authentication** > **Users**
4. Find the user and copy their **User UID** from the table
