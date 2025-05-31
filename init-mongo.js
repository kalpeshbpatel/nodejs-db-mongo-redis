db = db.getSiblingDB('scarfall-2');

// Create user with proper roles
db.createUser({
  user: 'scarfall',
  pwd: 'mongopass6001',
  roles: [
    {
      role: 'readWrite',
      db: 'scarfall-2'
    },
    {
      role: 'dbAdmin',
      db: 'scarfall-2'
    }
  ]
});

// Switch to the database
db = db.getSiblingDB('scarfall-2');

// Create collections
db.createCollection('users');
db.createCollection('tokens');
db.createCollection('games');
db.createCollection('sessions'); 