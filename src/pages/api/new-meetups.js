

import { connectDatabase, insertDocument } from '../../helpers/db-util';
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
        const id = req.query.id;

        let client;

        try {
            client = await connectDatabase();
        } catch(error) {
            res.status(500).json({ message: 'Connecting to the database failed'});
            return;
        }

        try {
            const result = await deleteDocument(client, 'exercises', { _id: ObjectId(id) });
            client.close();
            res.status(200).json({ message: 'exercise deleted'});
        } catch (error) {
            res.status(500).json({ message: 'Deleting data failed'});
            return;
        }
    }
}


export default handler;