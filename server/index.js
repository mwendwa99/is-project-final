const express = require('express');
const { MongoClient } = require('mongodb');

const PORT = process.env.PORT || 5000;
const app = express();

// api route
// app.get('/api', (req, res) => {
//     res.json({ message: "hello from server!" })
// });

// connect to mongodb cluster
async function main() {
    const uri = 'mongodb+srv://<username>:<password>@cluster0.huhb3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
    // an instance of my mongo client
    const client = new MongoClient(uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    try {
        // connect to cluster
        await client.connect();
        // get databases in cluster
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
};

main().catch(console.error);

async function listDatabases(client) {
    databaseList = await client.db().admin().listDatabases();

    console.log("Databases in cluster:");
    databaseList.databases.forEach(db => {
        console.log(` - ${db.name}`)
    });
}

// app.listen(PORT, () => {
//     console.log(`server is running on port: ${PORT}`)
// });