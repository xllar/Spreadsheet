import db from "../../../libs/mongodb/db"; // ✅ Correct import
import mongoose from "mongoose"; // ✅ Use mongoose instead of mongodb

export default async function handler(req, res) {
  await db.Connectdb(); // ✅ Call Connectdb()

  switch (req.method) {
    case "GET":
      const spreadsheets = await mongoose.connection.db.collection("spreadsheets").find({}).toArray();
      res.status(200).json(spreadsheets);
      break;

    case "POST":
      const newSpreadsheet = req.body;
      const result = await mongoose.connection.db.collection("spreadsheets").insertOne(newSpreadsheet);
      res.status(201).json({ insertedId: result.insertedId });
      break;

    case "PUT":
      const { id, ...updateData } = req.body;
      await mongoose.connection.db.collection("spreadsheets").updateOne(
        { _id: new mongoose.Types.ObjectId(id) }, // ✅ Use mongoose.Types.ObjectId
        { $set: updateData }
      );
      res.status(200).json({ message: "Spreadsheet updated successfully" });
      break;

    case "DELETE":
      const { id: deleteId } = req.body;
      await mongoose.connection.db.collection("spreadsheets").deleteOne({ _id: new mongoose.Types.ObjectId(deleteId) });
      res.status(200).json({ message: "Spreadsheet deleted successfully" });
      break;

    default:
      res.status(405).json({ message: "Method not allowed" });
  }
}
