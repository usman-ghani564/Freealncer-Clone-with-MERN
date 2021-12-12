const connection_string =
  "mongodb+srv://usman:12345@cluster0.orrwv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const data = [
  {
    title:
      "Record a two day webinar as individual lectures with sound October 2nd and 3rd forward videos",
    description:
      "I want a recording of a series of online videos that are being broadcast Saturday 2nd and Sunday 3rd October (10am to 4pm central eastern time) to be recorded. Video and sound quality must be good. the url for broadcast will be supplied to successful applicant.",
    price: "$18 / hr",
    noOfBids: "7",
  },
  {
    title:
      "Record a two day webinar as individual lectures with sound October 2nd and 3rd forward videos",
    description:
      "I want a recording of a series of online videos that are being broadcast Saturday 2nd and Sunday 3rd October (10am to 4pm central eastern time) to be recorded. Video and sound quality must be good. the url for broadcast will be supplied to successful applicant.",
    price: "$18 / hr",
    noOfBids: "7",
  },
  {
    title:
      "Record a two day webinar as individual lectures with sound October 2nd and 3rd forward videos",
    description:
      "I want a recording of a series of online videos that are being broadcast Saturday 2nd and Sunday 3rd October (10am to 4pm central eastern time) to be recorded. Video and sound quality must be good. the url for broadcast will be supplied to successful applicant.",
    price: "$18 / hr",
    noOfBids: "7",
  },
  {
    title:
      "Record a two day webinar as individual lectures with sound October 2nd and 3rd forward videos",
    description:
      "I want a recording of a series of online videos that are being broadcast Saturday 2nd and Sunday 3rd October (10am to 4pm central eastern time) to be recorded. Video and sound quality must be good. the url for broadcast will be supplied to successful applicant.",
    price: "$18 / hr",
    noOfBids: "7",
  },
  {
    title:
      "Record a two day webinar as individual lectures with sound October 2nd and 3rd forward videos",
    description:
      "I want a recording of a series of online videos that are being broadcast Saturday 2nd and Sunday 3rd October (10am to 4pm central eastern time) to be recorded. Video and sound quality must be good. the url for broadcast will be supplied to successful applicant.",
    price: "$18 / hr",
    noOfBids: "7",
  },
];

var jobSchema = new Schema({
  title: String,
  description: String,
  price: String,
  noOfBids: String,
});

var jobModel = mongoose.model("JobModel", jobSchema);

const connectToMongoDb = () => {
  mongoose.connect(
    connection_string,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (!err) {
        console.log("Connection to the database is successful");
      } else {
        console.log("An error occured while connecting to the database");
      }
    }
  );
};

const insertJobs = (job_obj) => {
  var jobs = data.map((job) => {
    return jobModel({
      title: job.title,
      description: job.description,
      price: job.price,
      noOfBids: job.noOfBids,
    });
  });

  jobModel.insertMany(jobs, () => {
    console.log("Data Inserted!");
  });
};

const fetchJobs = () => {
  jobModel
    .find()
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log("An error occured while fetching data from database!");
    });
};

module.exports.connectToMongoDb = connectToMongoDb;
module.exports.fetchJobs = fetchJobs;
