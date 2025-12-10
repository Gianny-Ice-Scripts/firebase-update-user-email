const admin = require("firebase-admin");
const readline = require("readline");
const serviceAccount = require("./serviceKey.json"); //check LastPass for the serviceKey.json file

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

async function main() {
  console.log("=== Firebase User Email Update Tool ===\n");

  console.log("Initializing Firebase Admin SDK...");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  console.log("Firebase Admin SDK initialized successfully.\n");

  const uid = await prompt("Enter the Firebase UID of the user to update: ");
  if (!uid) {
    console.log("Error: UID is required.");
    rl.close();
    process.exit(1);
  }

  const newEmail = await prompt("Enter the new email address: ");
  if (!newEmail) {
    console.log("Error: Email is required.");
    rl.close();
    process.exit(1);
  }

  console.log(`\nFetching user with UID: ${uid}...`);

  try {
    const userRecord = await admin.auth().getUser(uid);
    console.log("User found:");
    console.log(`  - UID: ${userRecord.uid}`);
    console.log(`  - Current email: ${userRecord.email || "(none)"}`);
    console.log(`  - Display name: ${userRecord.displayName || "(none)"}`);
    console.log(`  - Email verified: ${userRecord.emailVerified}`);

    const currentEmail = userRecord.email || "(none)";
    console.log("\nUpdating email from \"" + currentEmail + "\" to \"" + newEmail + "\"...");

    const updatedUserRecord = await admin.auth().updateUser(uid, {
      email: newEmail,
    });

    console.log("\nEmail updated successfully!");
    console.log("Updated user details:");
    console.log(`  - UID: ${updatedUserRecord.uid}`);
    console.log(`  - New email: ${updatedUserRecord.email}`);
    console.log(`  - Email verified: ${updatedUserRecord.emailVerified}`);
  } catch (error) {
    console.log("\nError:", error.message);
    if (error.code) {
      console.log(`Error code: ${error.code}`);
    }
  }

  rl.close();
}

main();
