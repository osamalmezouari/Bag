# React Shopping Bag 

This project is a React application that demonstrates the use of `useReducer` in managing a shopping bag. The shopping bag allows users to add, remove, increase, and decrease items, while using local storage to persist the state.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Sample Data](#sample-data)
- [License](#license)

## Installation

#### 1. Clone the project repository:

   ```
   git clone https://github.com/osamalmezouari/Bag.git
   ```
#### 2. Navigate to the project directory:

```
cd Bag
```

### 3.Install dependencies:

```
npm install
```

## Usage

The project is a shopping bag application built with React and Vite. It uses useReducer for state management and local storage to persist the state of the shopping bag.

To start the development server, run:

```
npm run dev
```
Visit http://localhost:3000 in your browser to see the application.

## data is follwing 

```
export default [
    {
        id: 1,
        title: 'Samsung Galaxy S7',
        price: 599.99,
        img: 'https://www.course-api.com/images/cart/phone-1.png',
        amount: 1,
    },
    {
        id: 2,
        title: 'Google Pixel',
        price: 499.99,
        img: 'https://www.course-api.com/images/cart/phone-2.png',
        amount: 1,
    },
    {
        id: 3,
        title: 'Xiaomi Redmi Note 2',
        price: 699.99,
        img: 'https://www.course-api.com/images/cart/phone-3.png',
        amount: 1,
    },
];
```

## Contributors

- [osamalmezouari](https://github.com/osamalmezouari)

## License

This project is licensed under the [john smilga](https://github.com/john-smilga).
