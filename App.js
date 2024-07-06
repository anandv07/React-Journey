import React from "react";
import  ReactDOM  from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://static.vecteezy.com/system/resources/previews/021/953/308/non_2x/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg"/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    );
}

const RestaurantCard = (props) => {
    console.log(props);
    return(
        <div className="restaurant-card">
            <div className="restaurant-info">
            <img className = "restaurant-image" src="https://cdn.pixabay.com/photo/2023/10/19/11/18/biryani-8326234_640.jpg"/>
            <h3 className="restaurant-heading">{props.restaurantName}</h3>
            <h4 className="food-description">{props.foodType}</h4>
            <h4 className="food-time">{props.foodTime}</h4>
            <h4 className="food-rating">{props.foodRating}</h4>
            </div>
        </div>
    );
}

const Body = () => {
    return (
    <div className="body">
        <div className="search">
            Search
        </div>
        <div className="restaurant-container">
            <RestaurantCard
                restaurantName = "Paradise Biriyani"
                foodType = "Biriyani , Asian , Indian"
                foodTime = "38 minutes"
                foodRating = "4.4"
                />
            <RestaurantCard
                restaurantName = "KYC Foods Chennai"
                foodType = "Chicken, Indian, Global"
                foodTime = "25 minutes"
                foodRating = "4.2"/>
                
        </div>

    </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);