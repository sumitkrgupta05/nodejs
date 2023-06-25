const mongoose = require("mongoose");
const validator = require("validator");

//connection creating and creating a new database
mongoose
  .connect("mongodb://localhost:27017/lmongoose")
  .then(() => console.log("connection successful...."))
  .catch((err) => console.log(err));

// *
// *
// *

//Schema
// A mongoose schema defines the structure of the document, default values, validators, etc.

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true, //mean ye toh hona hi chaiye else error
    unique: true,
    lowercase: true,
    trim: true,
    minlength: [2, "minimum 2 letters required"],
    maxlength: 30,
  },
  ctype: {
    type: String,
    require: true,
    lowercase: true,
    enum: ["frontend", "backend", "database"],
  },
  videos: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("videos can't be negative");
      }
    },
  },
  author: String,
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email!! Plz try again");
      }
    },
  },
  active: Boolean,
  date: {
    type: Date,
    deafult: Date.now,
  },
});

// *
// *
// *

// Model
// A mongoose model is a wrapper on the Mongoose schema. A Mongoose schema defines the structure of the document, default values, validators, etc., whereas a Mongoose model provides an interface to the database for creating , querying, updating, deleting records,etc.

// collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);

//**************creating or inserting a document***********

const createDocument = async () => {
  //error handling
  try {
    // *******only a single element******

    // const reactPlaylist = new Playlist({
    //   name: "React JS",
    //   ctype: "Front End",
    //   videos: 80,
    //   author: "Sumit",
    //   active: true,
    // });

    // const result = await reactPlaylist.save();

    const rmongoPlaylist = new Playlist({
      name: "MongOoseC ",
      ctype: "frontend",
      videos: 69,
      author: "Sumit",
      email: "summoo@gmail.com",
      active: true,
    });

    const result = await rmongoPlaylist.save();

    //*****inserting multiple element ******

    const jsPlaylist = new Playlist({
      name: "javascript",
      ctype: "Front End",
      videos: 150,
      author: "Sumit",
      active: true,
    });

    const mongoPlaylist = new Playlist({
      name: "mongoDB",
      ctype: "Database",
      videos: 10,
      author: "Sumit",
      active: true,
    });

    const mongoosePlaylist = new Playlist({
      name: "Mongoose",
      ctype: "Database",
      videos: 4,
      author: "Sumit",
      active: true,
    });

    const expressPlaylist = new Playlist({
      name: "Express JS",
      ctype: "Back End",
      videos: 20,
      author: "Sumit",
      active: true,
    });

    // const result = await Playlist.insertMany([
    //   jsPlaylist,
    //   mongoPlaylist,
    //   mongoosePlaylist,
    //   expressPlaylist,
    // ]);

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// createDocument();

// *************END*******************

//********Reading Document********* */

const getDocument = async () => {
  // try {
  //   const result = await Playlist.find({ ctype: "Front End" })
  //     .select({ name: 1 })
  //     .limit(1)
  //      .countDocuments();
  //   console.log(result);
  // } catch (err) {
  //   console.log(err);
  // }
  // };
  //*****Comparsion Operator*****
  //   try {
  //     const result = await Playlist.find({ videos: { $lt: 90 } }).select({
  //       name: 1,
  //     });
  //     console.log(result);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  //*****Logical query Operator******

  // try {
  //   const result = await Playlist.find({
  //     $and: [{ ctype: "Back End" }, { author: "Sumit" }],
  //   })
  //     .select({ name: 1 })
  // .countDocuments();
  //   console.log(result);
  // } catch (err) {
  //   console.log(err);
  // }

  // try {
  //   const result = await Playlist.find({
  //     $nor: [{ ctype: "Back End" }, { name: "Express JS" }],
  //   }).select({ name: 1 });
  //   console.log(result);
  // } catch (err) {
  //   console.log(err);
  // }

  //***********Sorting & Counting******* */

  try {
    const result = await Playlist.find({ author: "Sumit" })
      .select({
        name: 1,
      })
      // .countDocuments()
      .sort({ name: -1 });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// getDocument();

// *************END**********************

//**********Updating & Deleting Document**** */

const updateDocument = async (_id) => {
  try {
    const result = await Playlist.updateOne(
      { _id },
      {
        $set: {
          name: "Javascript",
        },
      }
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// updateDocument("635ac676b625928b82f5ca62");

const deleteDocument = async (_id) => {
  try {
    // const result = await Playlist.deleteOne({ _id });
    const result = await Playlist.findByIdAndDelete({ _id });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// deleteDocument("635add0da6037e045906bbbc");

// *************END**********************
