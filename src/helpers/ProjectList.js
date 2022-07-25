import DietPlanner from "../assets/DietPlanner.png";
import CrwnClothing from "../assets/CrwnClothing.png";

export const ProjectList = [
    {
        name: "Diet Planner",
        image: DietPlanner,
        appUrl: "https://diet-planner-final-app.netlify.app/",
        gitHubUrl: " https://github.com/ovidiupetric99/diet-planner-final",
        description: "This is my last web application developed with React JS, that help users to create a diet. I used Firebase Authentication for authentication and Firestore for data storage. The application brings data from an API that provides nutritional data about a large set of foods. I also used Stripe API to implement payments for buying Premium version. Also, this is my undergraduate project for university final exam."
    },
    {
        name: "Crown Clothing",
        image: CrwnClothing,
        appUrl: "https://test-app-crwnshop.herokuapp.com/",
        gitHubUrl: "https://github.com/ovidiupetric99/crwn-clothing.git",
        description: "This is my first relative complex application created using React JS. I developed it by following a tutorial from Zero To Mastery. It is an online shopping platform for clothes, with some products data stored on Firebase Firestore. It has a shopping cart to add different products, some clothes category, a checkout page, and posibility to create an account and login."
    },
]