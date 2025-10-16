import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';   // For Incons in InfoBox
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox ({info}) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1668456460190-ec6eabb39cf8?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://plus.unsplash.com/premium_photo-1666241368300-a1115df75b7c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VubnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const COLD_URL = "https://images.unsplash.com/photo-1519863436079-8436f74be632?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const Rain_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80 
                        ? Rain_URL 
                        : info.temp > 15 
                        ? HOT_URL 
                        : COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city} 
                    &nbsp;
                    {
                        info.humidity > 80 
                        ? < ThunderstormIcon /> 
                        : info.temp > 15 
                        ? < SunnyIcon /> 
                        : <AcUnitIcon />
                    }
                </Typography>
                <Typography variant="body2" color="text.secondary"  component="span">
                    <p>Temperature = {info.temp}&deg;C</p>   
                    <p>The weather can be discribed as <i>"{info.weather}"</i> and feels Like = {info.feelsLike}&deg;C</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>Min Temp = {info.tempMin}&deg;C</p>
                    <p>Max Temp = {info.tempMax}&deg;C</p>
                </Typography>
                </CardContent>
                
                </Card>
            </div>
        </div>
    ) 
}