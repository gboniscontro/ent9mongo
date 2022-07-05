db = connect('mongodb://localhost/ecommerce');
db.dropDatabase()
db.createCollection("messages")
db.messages.insertOne({ message: "algo", email: "gus@dfd.com", date: ISODate() })
db.messages.insertOne({ message: "algo2", email: "gu2s@dfd.com", date: ISODate() })
db.messages.insertOne({ message: "algo3", email: "gu3s@dfd.com", date: ISODate() })
db.messages.insertOne({ message: "algo4", email: "gu3s@dfd.com", date: ISODate() })
db.messages.insertOne({ message: "algo5", email: "gu3s@dfd.com", date: ISODate() })
db.messages.insertOne({ message: "algo6", email: "gu3s@dfd.com", date: ISODate() })
db.messages.insertOne({ message: "algo7", email: "gu3s@dfd.com", date: ISODate() })
db.messages.insertOne({ message: "algo8", email: "gu3s@dfd.com", date: ISODate() })
db.messages.insertOne({ message: "algo9", email: "gu3s@dfd.com", date: ISODate() })
db.messages.insertOne({ message: "algo10", email: "gu3s@dfd.com", date: ISODate() })


db.createCollection("productos")
db.productos.insertOne({ title: "algo 1 ", price: "100" })
db.productos.insertOne({ title: "algo 2 ", price: "1900" })
db.productos.insertOne({ title: "algo 3 ", price: "3000" })
db.productos.insertOne({ title: "algo 4 ", price: "500" })
db.productos.insertOne({ title: "algo 5 ", price: "4100" })
db.productos.insertOne({ title: "algo 6 ", price: "4999" })
db.productos.insertOne({ title: "algo 7 ", price: "2303" })
db.productos.insertOne({ title: "algo 8 ", price: "1323" })
db.productos.insertOne({ title: "algo 9 ", price: "322" })
db.productos.insertOne({ title: "algo 10 ", price: "211" })


print("\nColección mensajes:\n")
printjson(db.messages.find());

print("\nColección productos:\n")
printjson(db.productos.find());

print(`Cantidad total de productos: ${db.productos.estimatedDocumentCount()}`);
print(`Cantidad total de mensajes: ${db.messages.estimatedDocumentCount()}`);

db.productos.insertOne({ title: "producto agregado", price: 4120 });

db.productos.find({ "price": { $lt: 1000 } }, { "title": 1 });
db.productos.find({ "price": { $gte: 1000, $lte: 3000 } }, { "title": 1 });
db.productos.find({ "price": { $gt: 3000 } }, { "title": 1 });
db.productos.find().skip(2).limit(1).sort({ "price": 1 })

db.productos.updateMany({}, { $set: { "stock": 100 } });
db.productos.updateMany({ "price": { $gt: 4000 } }, { $set: { "stock": 0 } });
db.productos.deleteMany({ "price": { $lt: 1000 } });

db = connect('mongodb://localhost/admin');

db.createUser(
    {
        user: "pepe",
        pwd: "asd456",
        roles: [
            { role: "read", db: "ecommerce" }
        ]
    }
);
