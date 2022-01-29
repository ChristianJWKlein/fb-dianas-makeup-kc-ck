//import our customers
const customers = require("./customers.json");
const products = require("./products.json");

// //import a set of tools to talk to firebase and firestore
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

// import our credentials
const credentials = require("./credentials.json");

//connect to firebase services
initializeApp({
  credential: cert(credentials),
});

// //connect to firestore
const db = getFirestore();
//console.log("it worked");

//  reference to customer, products and orders collection since used heavily
const custRef = db.collection("customers");
const prodRef = db.collection("products");

//create a collection called "customers" & "products"

//  **** Customers and Products already added in *** Do not run! Do not run below code blocks
//below adds customers and products to db by specifying index of .json arrays

// custRef
//   .add(customers[2])
//   .then((doc) => {
//     console.log("added customer", doc.id);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// prodRef
//   .add(products[2])
//   .then((doc) => {
//     console.log("added product", doc.id);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/// **** END DO NOT RUN AREA.

//read one document...customers and products...orders to come
// db.collection("products")
//   .doc("maTKKhFgh60RqNOZFbzh")
//   .get()
//   .then((doc) => {
//     console.log(doc.id, " ===> ", doc.data());
//   })
//   .catch(console.error);

// db.collection("customers")
//   .doc("HS6avhDVTYPtVA5VpfFo")
//   .get()
// .then((doc) => {
//   console.log(doc.id, " ===> ", doc.data());
// })
// .catch(console.error);

//get all documents..below we actually get a snapshot of the database at that time.
// prodRef
//   .get()
//   .then((snapshot) =>
//     snapshot.forEach((doc) => {
//       console.log(doc.id, " ===> ", doc.data());
//     })
//   )
//   .catch(console.error);

// custRef
//   .get()
//   .then((snapshot) =>
//     snapshot.forEach((doc) => {
//       console.log(doc.id, " ===> ", doc.data());
//     })
//   )
//   .catch(console.error);

//querying a collection
// custRef
//   .where("lname", "==", "Wade")
//   .where("fname", "==", "Dwyane")
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       //todd may not have had snapshot on this line
//       console.log(doc.data());
//     });
//   })
//   .catch(console.error);

// challenge for Keren.... Query a product from the products collection below.

//update a product to add in Discount Price..added into "Spehora"..Confirmed

prodRef.doc("HXsGAcOKjIba324dXv33").update({ discPrice: 30 });

//Challenge for Keren...Update the Channel brand products to add in the Discount Price.
