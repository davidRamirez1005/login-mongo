import {MongoClient} from "mongodb"
import {loadEnv} from 'vite'
const env = loadEnv('development', process.cwd(), "ATLAS");



export async function con(){
    try {
        const URI = `mongodb+srv://${env.ATLAS_USER}:${env.ATLAS_PASSWORD}@cluster0.b0o2rzg.mongodb.net/${env.ATLAS_DB}`;
        // console.log(URI);
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        const client = await MongoClient.connect(URI, options);
        return client.db()
    } catch (error) {
        return{status: 500, message: error};
    }
}