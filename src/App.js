import React, {useState} from 'react';
import Timeline from './Timeline.js';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const style = {margin: 10}
function App() {
    const [dates, setDates] = useState([]);

    const handleClick = () => {
        setDates(dates.concat(new Date().toLocaleString()))
    };

    const [displayType, setDisplayType] = useState('select')
    const handleChange = (selectedValue) => {
        setDisplayType(selectedValue);
    };
    
    //gotta add different handlers for different color semscreens (this would mock up how semscreens owned by different colored hats would show up)
    return (
        <>
            <Button id="button" style={style} onClick={handleClick}>Add red semscreen</Button>
            <Button id="button" style={style} onClick={handleClick}>Add green semscreen</Button>
            <Button id="button" style={style} onClick={handleClick}>Add blue semscreen</Button>
            <ToggleButtonGroup type="radio" name="select-filter" defaultValue={'select'} onChange={handleChange}>
                <ToggleButton variant="secondary" value={'select'}>Select</ToggleButton>
                <ToggleButton variant="secondary" value={'filter'}>Filter</ToggleButton>
            </ToggleButtonGroup>
            <Timeline
                dates={dates}
                displayType={displayType}
            />
        </>
    );
}

export default App;
