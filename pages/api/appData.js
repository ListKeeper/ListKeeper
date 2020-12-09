const url = require("url");
const { MongoClient } = require("mongodb");
const { getSession } = require("next-auth/client");
const { initialState } = require("../../Reducers/reducer").initialState;

// Create cached connection variable
let cachedDb = null;

async function connectToDatabase(uri) {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db(url.parse(uri).pathname.substr(1));

  cachedDb = db;
  return db;
}

// retrieves the session token, retrieves the corresponding userId
// & gets/updates their appData
module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  // const sessionToken = req.cookies["next-auth.session-token"];
  const session = await getSession({ req });

  // error handling: Guard clause
  if (!session) {
    res.status(401).json({});
    return;
  }

  const sessionsCollection = await db.collection("sessions");

  const { userId } = await sessionsCollection.findOne({
    accessToken: session.accessToken,
  });

  const appDataCollection = await db.collection("appData");

  if (req.method === "GET") {
    const appData = await appDataCollection.findOne(
      { userId },
      { fields: { _id: 0, userId: 0 } }
    );
    res.status(200).json(appData || initialState);
  } else if (req.method === "PUT") {
    await appDataCollection.replaceOne(
      { userId },
      { ...JSON.parse(req.body), userId },
      { upsert: true }
    );
    res.status(200).json({});
  } else {
    res.status(405).json({});
  }
};
