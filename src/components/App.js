import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/App.css';
import Header from './Header';
import Listhotel from './List-hotel';
import Login from './Log-in';
import Helpsupport from './Help-support';
import Hero from './Hero';
import Cities from './Cities';
import Benefits from './Benefits';
import Milestones from './Milestones';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Error from './Error';
import { RouterProvider, createBrowserRouter, Outlet, useNavigate } from 'react-router-dom';
import SignUp from './Sign-up';
import Search from './Search';

const App = () => {
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const handleSearch = (searchParams) => {
        console.log('Search Params:', searchParams);

        const mockResults = [
            { id: 1, name: "Hotel Ascent Biz", location: "Sector 62", rating: 4.5, price: "₹3500", image: "https://th.bing.com/th/id/OIP._XuZby4A43FdQhGGOy_avwHaEK?rs=1&pid=ImgDetMain", amenities: ["Fully AC", "Bigger Beds", "LED TV", "Wi-Fi", "Laundry"] },
            { id: 2, name: "Bloom Hotel", location: "Delta I", rating: 4.6, price: "₹2800", image: "https://th.bing.com/th/id/R.fb2df71da1ca1b015ea56dd61d37a0e8?rik=EFKdlbDkMZcvGA&riu=http%3a%2f%2fihg.scene7.com%2fis%2fimage%2fihg%2fholiday-inn-hotel-and-suites-orlando-4038307489-4x3&ehk=sjrqInnTDb8W2LsPSmF6JMCIs%2fT9R8CvnDZ3btJjx2g%3d&risl=&pid=ImgRaw&r=0", amenities: ["Fully AC", "Bigger Beds", "LED TV", "Wi-Fi", "Laundry"] },
            { id: 3, name: "Bloom Hotel", location: "Gama I", rating: 4.6, price: "₹2800", image: "https://th.bing.com/th/id/OIP.bt984pG6_ZgLVpXiDM9BWQHaD9?w=768&h=410&rs=1&pid=ImgDetMain", amenities: ["Fully AC", "Bigger Beds", "LED TV", "Wi-Fi", "Laundry"] },
            { id: 4, name: "Bloom Hotel", location: "Alpha I", rating: 4.6, price: "₹2800", image: "https://th.bing.com/th/id/OIP.uWbSP21mGXo4aoVT1I71rAAAAA?w=400&h=300&rs=1&pid=ImgDetMain", amenities: ["Fully AC", "Bigger Beds", "LED TV", "Wi-Fi", "Laundry"] },
            { id: 5, name: "Bloom Hotel", location: "Sector 62", rating: 4.6, price: "₹2800", image: "https://th.bing.com/th/id/OIP.bt984pG6_ZgLVpXiDM9BWQHaD9?w=768&h=410&rs=1&pid=ImgDetMain", amenities: ["Fully AC", "Bigger Beds", "LED TV", "Wi-Fi", "Laundry"] },
            { id: 6, name: "Bloom Hotel", location: "Sector 62", rating: 4.6, price: "₹2800", image: "https://th.bing.com/th/id/R.fb2df71da1ca1b015ea56dd61d37a0e8?rik=EFKdlbDkMZcvGA&riu=http%3a%2f%2fihg.scene7.com%2fis%2fimage%2fihg%2fholiday-inn-hotel-and-suites-orlando-4038307489-4x3&ehk=sjrqInnTDb8W2LsPSmF6JMCIs%2fT9R8CvnDZ3btJjx2g%3d&risl=&pid=ImgRaw&r=0", amenities: ["Fully AC", "Bigger Beds", "LED TV", "Wi-Fi", "Laundry"] },
            { id: 7, name: "Bloom Hotel", location: "Sector 62", rating: 4.6, price: "₹2800", image: "https://th.bing.com/th/id/OIP.uWbSP21mGXo4aoVT1I71rAAAAA?w=400&h=300&rs=1&pid=ImgDetMain", amenities: ["Fully AC", "Bigger Beds", "LED TV", "Wi-Fi", "Laundry"] },
            { id: 8, name: "Bloom Hotel", location: "Sector 62", rating: 4.6, price: "₹2800", image: "https://www.bing.com/images/search?view=detailV2&ccid=zXf3fv7b&id=7AB2E0305D665617A0B7DC9D52E719A7478D963C&thid=OIP.zXf3fv7bZqOkpqwskXeOEwHaE8&mediaurl=https%3a%2f%2fcache.marriott.com%2fmarriottassets%2fmarriott%2fGVALC%2fgvalc-deluxe-7352-hor-clsc.jpg%3finterpolation%3dprogressive-bilinear%26&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.cd77f77efedb66a3a4a6ac2c91778e13%3frik%3dPJaNR6cZ51Kd3A%26pid%3dImgRaw%26r%3d0&exph=2667&expw=4000&q=hotel+image&simid=608028285969843974&FORM=IRPRST&ck=12684600A792087D139F0BAA8C1CBACD&selectedIndex=16&itb=0", amenities: ["Fully AC", "Bigger Beds", "LED TV", "Wi-Fi", "Laundry"] },
            { id: 9, name: "Bloom Hotel", location: "Sector 62", rating: 4.6, price: "₹2800", image: "https://th.bing.com/th/id/OIP.uWbSP21mGXo4aoVT1I71rAAAAA?w=400&h=300&rs=1&pid=ImgDetMain", amenities: ["Fully AC", "Bigger Beds", "LED TV", "Wi-Fi", "Laundry"] },
        ];
        setResults(mockResults);
        navigate("/search-results");
    };

    return (
        <div>
            <Header />
            <Outlet context={{ results, handleSearch }} />
            <Footer />
        </div>
    );
};

const Home = () => {
    return (
        <>
            <Hero />
            <Cities />
            <Benefits />
            <Milestones />
            <Testimonials />
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "list-hotel", element: <Listhotel /> },
            { path: "help-support", element: <Helpsupport /> },
            { path: "login-container", element: <Login /> },
            { path: "sign-up", element: <SignUp /> },
            { path: "login", element: <Login /> },
            { path: "home", element: <Home /> },
            { path: "search-results", element: <Search /> },
        ],
        errorElement: <Error />,
    },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<RouterProvider router={appRouter} />);
} else {
    console.error('Root element not found');
}

export default App;
