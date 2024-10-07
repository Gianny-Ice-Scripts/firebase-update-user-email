const admin = require("firebase-admin");
const serviceAccount = require("./serviceKey.json"); //check LastPass for the serviceKey.json file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const uid = "vA12xxx"; // Specify the user ID
admin
  .auth()
  .getUser(uid)
  .then(function (userRecord) {
    // Update the user's email
    return updateUserEmail(userRecord, "<email>");
  })
  .catch(function (error) {
    console.log("Error fetching user:", error);
  });

function updateUserEmail(userRecord, newEmail) {
  return admin
    .auth()
    .updateUser(userRecord.uid, {
      email: newEmail,
    })
    .then(function (updatedUserRecord) {
      console.log("User email updated:", updatedUserRecord.email);
    })
    .catch(function (error) {
      console.log("Error updating user email:", error);
    });
}
