import angular1 from '../images/portImages/angular-1.png';
import react1 from '../images/portImages/react-1.png';
import react2 from '../images/portImages/react-2.png';

const portfolios = [
    {
        id: 1,
        category: 'Angular',
        image: angular1,
        link1: 'https://github.com/menonrohith94/angular-highcharts',
        title: 'Data Visualization',
        text: 'Data Visualization using angular and highcharts as frontend and nodejs as backend server where mongodb is the database.'
    },
    {
        id: 2,
        category: 'React JS',
        image: react1,
        link1: 'https://github.com/menonrohith94/food-cart',
        title: 'Food Cart',
        text: 'Responsive food cart website created using different technologies such as react js, Material UI, Styled-Components and more...'
    },
    {
        id: 3,
        category: 'React JS',
        image: react2,
        link1: 'https://github.com/menonrohith94/react-covid-tracker',
        title: 'Covid Tracker',
        text: 'Covid tracker website is a website using reactjs, chartjs and leaflet where we are performing data visualization using covid dataset.'
    }
]

export default portfolios;