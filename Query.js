use('mongodb://localhost:27017/craftShop');
db.createCollection('employees');
db.employees.drop();
db.employees.insertOne({
    "name": "Bob Johnson",
    "designation": "Data Analyst",
    "salary": 60000,
    "city": "Los Angeles"
})
db.employees.deleteOne({
    "name": "Jane Smith"
})

