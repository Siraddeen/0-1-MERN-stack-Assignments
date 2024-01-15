const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/your_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
});

// Create a model
const User = mongoose.model("User", userSchema);

// Create a new document
const newUser = new User({
  username: "john_doe",
  email: "john.doe@example.com",
  age: 25,
});

// Save the new document
newUser
  .save()
  .then((savedUser) => {
    console.log("New user saved:", savedUser);

    // Find one document
    User.findOne({ username: "john_doe" })
      .then((foundUser) => {
        console.log("Found user:", foundUser);

        // Update one document
        User.updateOne({ username: "john_doe" }, { $set: { age: 26 } })
          .then((updatedUser) => {
            console.log("Updated user:", updatedUser);

            // Delete one document
            User.deleteOne({ username: "john_doe" })
              .then((deletedUser) => {
                console.log("Deleted user:", deletedUser);
                mongoose.connection.close(); // Close the connection when done
              })
              .catch((err) => console.error("Error deleting user:", err));
          })
          .catch((err) => console.error("Error updating user:", err));
      })
      .catch((err) => console.error("Error finding user:", err));
  })
  .catch((err) => console.error("Error saving user:", err));
