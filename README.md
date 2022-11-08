In this project, let's build a **Credit Card** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js-hooks/credit-card-output-v0.gif" alt="credit card output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js-hooks/credit-card-sm-outputs-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Empty Credit Card](https://assets.ccbp.in/frontend/content/react-js-hooks/empty-credit-card-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Credit Card](https://assets.ccbp.in/frontend/content/react-js-hooks/credit-card-lg-output-v0.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When a credit card number is provided in the card number input, then the provided value should be displayed on the credit card
- When a credit cardholder name is provided in the cardholder name input, then the provided value should be displayed on the credit card

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/CreditCard/index.js`
- `src/components/CreditCard/styledComponents.js`
</details>

### Quick Tips

<details close>
<summary>Click to view</summary>
<br>

- To convert a string value to uppercase we can use `toUpperCase()`
</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- **Styled Components** should be used for styling purposes
- HTML input element for card number should have the placeholder as **Card Number**
- HTML input element for cardholder name should have the placeholder as **Cardholder Name**
- HTML container element with `data-testid` as **creditCard** should have the background image URL as the given credit card image URL

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/hooks/credit-card-bg.png](https://assets.ccbp.in/frontend/hooks/credit-card-bg.png)

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #3b4b69; width: 150px; padding: 10px; color: white">Hex: #3b4b69</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #ffd773; width: 150px; padding: 10px; color: black">Hex: #ffd773</div>
<div style="background-color: #344e7a; width: 150px; padding: 10px; color: white">Hex: #344e7a</div>
<div style="background-color: #d3d9e0; width: 150px; padding: 10px; color: black">Hex: #d3d9e0</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<div style="background-color: #c3cad9; width: 150px; padding: 10px; color: black">Hex: #c3cad9</div>
<br/>
</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
