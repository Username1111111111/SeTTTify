const algoliasearch = require("algoliasearch");

const appId = process.env.ALGOLIA_APP_ID;
const adminKey = process.env.ALGOLIA_ADMIN_API_KEY;
const indexName = process.env.ALGOLIA_INDEX_NAME;

const client = algoliasearch(appId, adminKey);
const index = client.initIndex(indexName);

const items = await prisma.item.findMany();

index.saveObject({
    objectID: item.id,

});
