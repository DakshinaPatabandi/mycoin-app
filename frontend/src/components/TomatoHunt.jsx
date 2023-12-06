import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../App.css";
import { NavLink, useLocation } from "react-router-dom"

const TomatoHunt = ({ }) => {

    const location = useLocation();

    const [clicktime, setClicktime] = useState(0)
    const [imageUrl, setImageUrl] = useState('');
    const [solution, setSolution] = useState('');
    const [value, setValue] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [score, setScore] = useState(0)
    const [level, setLevel] = useState(1)


    const username = new URLSearchParams(location.search).get('username');

    // Fetches the game data from the API
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://marcconrad.com/uob/tomato/api.php?out=json');
            const data = await response.json();
            setImageUrl(data.question);
            setSolution(data.solution);
            setIsCorrect(false);
        } catch (error) {
            console.error('Error fetching game data:', error);
        }
    };


    // Handles the user's guess
    const handleSubmit = () => {
        setClicktime(clicktime + 1)
        const parsedGuess = parseInt(value, 10);
        if (parsedGuess === solution) {
            toast.success('You are correct!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
            });
            setIsCorrect(true);
            setScore(score + 1)
        } else {
            toast.error('Nope! Try again.', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
            });
        }
    };

    // Handles the next level button click
    const handleNextLevel = () => {
        setLevel(level + 1)
        fetchData(); // Fetches new game data for the next level
        setValue(''); // Resets the guess state
    };

    return (
        <div className='container'>
            <p className='mt-5 title'>Tomato Hunt</p>

            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col-8">
                    <div class="card ">
                        <img src={imageUrl} className='borderimg' alt="Tomato Game" />
                    <NavLink to='/' className='mt-3 btn-home btn btn-primary border'><strong>Home</strong></NavLink>
                    </div>
                </div>
                <div className="col scores">
                    <div class="row  p-3">
                        <div class="card ">
                            <h1 className='score'>Score Board</h1>
                            <h2>Level: {level}</h2>
                            <h1 className='name' >Name: {username}</h1>
                            <h1 className='yourscore' > Your Score: {score}</h1>
                            <h1 className='click' >You clicked {clicktime} times</h1>
                        </div>
                    </div>
                    <div class="row  p-3">
                        <div class="card ">
                            <div className="label-input-button-container d-block">
                                <p className='enter-name'>Enter the correct value</p>
                                <input type="text" className='myinput' value={value} onChange={(e) => setValue(e.target.value)} />
                                {!isCorrect && <button onClick={handleSubmit}>Check</button>}
                            </div>
                            {isCorrect && <button className='mt-4' onClick={handleNextLevel}>Next Level.</button>}
                            
                        </div>
                    </div>
                </div>

            </div>



            <ToastContainer />
        </div>
    );
}

export default TomatoHunt;
