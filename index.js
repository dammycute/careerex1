require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")
// import { drugs } from "./main.js"
const Item = require("./itemModel")



const app = express()

// MiddleWare 
app.use(express.json())


// Adding Conditional Port 
PORT = process.env.PORT || 5000

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL)
.then(()=>{
    console.log('Mongidb Connected')
    app.listen(PORT, () => {
        console.log(`The server has started on port ${PORT}`)
    })
})


app.post("/items", async (req, res) => {
    try {
        const { itemName, description, locationFound, dateFound, claimed } = req.body;

        if (!itemName || !locationFound) {
            return res.status(400).json({ message: "itemName and locationFound are required" });
        }

        const newItem = new Item({ itemName, description, locationFound, dateFound, claimed });
        const savedItem = await newItem.save();

        res.status(201).json(savedItem);
    } catch (err) {
        res.status(500).json({ message: "Error adding item", error: err.message });
    }
});

// View all unclaimed items
app.get("/items/unclaimed", async (req, res) => {
    try {
        const items = await Item.find({ claimed: false });
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: "Error fetching unclaimed items", error: err.message });
    }
});

// Endpoint to View one item by ID
app.get("/items/:id", async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ message: "Item not found" });

        res.json(item);
    } catch (err) {
        res.status(500).json({ message: "Error retrieving item", error: err.message });
    }
});

// Endpoint to Update item or mark as claimed
app.put("/items/:id", async (req, res) => {
    try {
        const updates = req.body;
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, updates, { new: true });

        if (!updatedItem) return res.status(404).json({ message: "Item not found" });

        res.json(updatedItem);
    } catch (err) {
        res.status(500).json({ message: "Error updating item", error: err.message });
    }
});

// Delete an item
app.delete("/items/:id", async (req, res) => {
    try {
        const deleted = await Item.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "Item not found" });

        res.json({ message: "Item deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting item", error: err.message });
    }
});


