var dbName = _getEnv('DB_NAME');
var dbUser = _getEnv('APP_USER');
var dbPwd = _getEnv('APP_PWD');

db = db.getSiblingDB(dbName);

db.createUser(
    {
        user: dbUser,
        pwd: dbPwd,
        roles: [
            {
                role: "read",
                db: dbName
            }
        ]
    }
);