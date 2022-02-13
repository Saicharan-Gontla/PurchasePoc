import React from "react";
import axios from "axios";
import data from "../data";
import Header from "./Header";
import PurchaseInfo from "./PurchaseInfo"
import Card from "./Card"
function App() {
    return (
        <div>
            <Header />
            <PurchaseInfo />
            <Card/>
            <Card/>
        </div>
    );
};

export default App;