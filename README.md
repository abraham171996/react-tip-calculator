# react-tip-calculator
The Git repository contains a React application that calculates the tip amount and tip per person based on the bill amount, tip percentage, and the number of people.
The Basic component serves as the main component of the application. It uses the Formik library for form handling and state management. The component utilizes three pieces of state:

bill: Stores the bill amount entered by the user as a floating-point number.
percentage: Stores the tip percentage entered by the user as a floating-point number.
numPeople: Stores the number of people entered by the user as an integer.
The component provides three input fields for the user to enter the bill amount, tip percentage, and the number of people. As the user inputs values, the corresponding state variables are updated using the handleBill, handlePercentage, and handleNumPeople functions.

The application calculates the total tip amount (resultTip) and the tip per person (resultPerPerson) based on the entered values. If the bill and percentage have valid values (not null or empty), the total tip amount is computed as (bill * percentage) / 100. If the numPeople and resultTip have valid values, the tip per person is computed as resultTip / numPeople.

The Formik component wraps the input fields and provides form validation. It ensures that the bill field is required, displaying an error message if the field is left empty.

The UI is structured using CSS classes defined in the styles.css file. The input fields for bill, tip percentage, and number of people are displayed in separate cards. The calculated total tip and tip per person are shown in a separate div with the "result" class.

Overall, the application provides a simple and user-friendly interface for calculating tips based on the bill amount, tip percentage, and the number of people. The code can be easily extended or modified to include additional features or styling as needed. Developers can explore the code to understand how to implement form handling, state management, and calculations in a React application using Formik.
