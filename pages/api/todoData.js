const url = require("url");
const MongoClient = require("mongodb").MongoClient;

// Create cached connection variable
let cachedDb = null;

// A function for connecting to MongoDB,
// taking a single parameter of the connection string
async function connectToDatabase(uri) {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb;
  }

  // If no connection is cached, create a new one
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db(url.parse(uri).pathname.substr(1));

  // Cache the database connection and return the connection
  cachedDb = db;
  return db;
}

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
  // Get a database connection, cached or otherwise,
  // using the connection string environment variable as the argument
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const sessionToken = req.cookies["next-auth.session-token"];

  // Select the "users" collection from the database
  const sessionsCollection = await db.collection("sessions");

  // Select the users collection from the database
  const session = await sessionsCollection.findOne({ sessionToken });
  const userId = session.userId;

  const todoDataCollection = await db.collection("todoData");

  if (req.method === "GET") {
    const todoData = await todoDataCollection.findOne({ userId });
    res.status(200).json(todoData || {});
  } else if (req.method === "PUT") {
    await todoDataCollection.replaceOne(
      { userId },
      { ...JSON.parse(req.body), userId },
      { upsert: true }
    );
    res.status(200).json({});
  } else {
    res.status(405).json({});
  }
};
