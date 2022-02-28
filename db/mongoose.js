const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://shubh22:shubh22@cluster0.ckvsh.mongodb.net/Todo?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connection successful"))
    .catch((err) => console.log("no connection", err));