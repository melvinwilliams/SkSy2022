import clientPromise from '../lib/mongo';

export async function post ({request}) {
 const dbConnection = await clientPromise;
 const db = dbConnection.db();
 const collection = db.collection('todoapp');
 let apothegm = await request.json();
 const dbApothegm = await collection.insertOne(apothegm);
 return { status: 200, body: { dbApothegm } }
}

export async function get(request){
    return {
        status: 200,
        body: {
            todo: 'Todo'
        }
    }
}

export async function put(request){

}

export async function del(request){

}


