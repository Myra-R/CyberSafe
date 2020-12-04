import React from 'react';
import GaugeChart from 'react-gauge-chart';
import { score } from "../profile/index";


function Gauge() {
    return (
        <div>
            <GaugeChart id="gauge-chart3"
                nrOfLevels={30}
                colors={["#FF5F6D", "#00FF00"]}
                arcWidth={0.3}
                percent={score/100}
            />
        </div>
    )
}

export default Gauge;