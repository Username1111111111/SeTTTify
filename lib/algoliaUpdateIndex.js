const algoliasearch = require("algoliasearch");

const appId = process.env.ALGOLIA_APP_ID;
const adminKey = process.env.ALGOLIA_ADMIN_API_KEY;
const indexName = process.env.ALGOLIA_INDEX_NAME;

const client = algoliasearch(appId, adminKey);
const index = client.initIndex(indexName);

// index.saveObject({
//     objectID: item.id,
// });

async function uploadToAlgolia() {

    const items = await prisma.item.findMany();

    const filteredItems = items.map(item => {
        const filteredItem = {};
        for (const key in item) {
            if (typeof item[key] === 'string') {
                filteredItem[key] = item[key];
            }
        }
        
        filteredItem.objectID = item.id;
        return filteredItem;
    });

    index.saveObjects(filteredItems).then(({ objectIDs }) => {
        console.log(objectIDs);
    }).catch(error => {
        console.error('Error uploading to Algolia:', error);
    });
}

uploadToAlgolia();