module.exports = {
	"APP_NAME": "Express GraphQL MongoDB Server",
	"API_BASE": "/api/v1",
	"PORT": "4000",
	"MONGO": {
		"hostname": process.env.MONGO_HOST || "localhost",
		"port": process.env.MONGO_PORT || "27017",
		"username": process.env.MONGO_USERNAME || "appuser",
		"password": process.env.MONGO_PASSWORD || "App123",
		"dbName": process.env.MONGO_DB_NAME || "express_graphql_db",
		"replicaSet": process.env.MONGO_RS || null
	}
}