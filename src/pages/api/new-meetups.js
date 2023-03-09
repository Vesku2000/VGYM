
import { connectDatabase, insertDocument, deleteDocumentById } from '../../helpers/db-util';
import { ObjectId } from 'mongodb';

// rest of the code...

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
    if(req.method === 'POST'){
        const data = req.body;

        let client;

        try {
            client = await connectDatabase();
        } catch(error) {
            res.status(500).json({ message: 'Connecting to the database failed'});
            return;
        }

        try {
            await insertDocument(client, 'exercises', data);
            client.close();
        } catch (error) {
            res.status(500).json({ message: 'Inserting data failed'});
            return;
        }

        res.status(201).json({ message: 'exercise inserted'});
    } else if (req.method === 'DELETE') {
        const data = req.body;

        let client;

        try {
            client = await connectDatabase();
        } catch(error) {
            res.status(500).json({ message: 'Connecting to the database failed'});
            return;
        }

        try {
             await deleteDocumentById(client, 'exercises', data) {
                const db = client.db();
                const result = await db.collection(collection).deleteOne({ _id: new ObjectId(id) });
                console.log(`${result.deletedCount} document(s) deleted.`);
                return result;
              }
              
        } catch (error) {
            res.status(500).json({ message: 'Deleting data failed'});
            return;
        }
    }
}


export default handler;