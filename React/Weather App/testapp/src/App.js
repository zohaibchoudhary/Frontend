import axios from 'axios'
import { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import WeatherCard from './components/WeatherCard';


let Home = () => {

    const [cityName, setCityName] = useState("");
    const [data, setData] = useState([]);
  
    let submitHandler = async (e) => {
        e.preventDefault()

        try {
          let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=8cc0bd1bdf666a6e9b23125f06fef1db&units=metric}`)

            console.log("response: ", response);

            setData(response.data.list)


        } catch (error) {
            console.log('error');
        }

    }


    return (
        <div >
            <h1>Weather App Home</h1>

            <form onSubmit={submitHandler}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    
                    
                  
                </Form.Group>



                <input
                    type="text"
                    required placeholder='enter your city name'
                    onChange={(e) => {setCityName(e.target.value);
                    }}
                />
                <Button type='submit'>Get Weather</Button>
            </form>

            {

                data.map((eachForcast, index) => (

                    <WeatherCard
                        key={index}
                        date={eachForcast.dt_txt}
                        temp={eachForcast.main.temp}
                        min={eachForcast.main.temp_min}
                        max={eachForcast.main.temp_max}
                    />
                ))
            }



        </div>
    );
}

export default Home;

