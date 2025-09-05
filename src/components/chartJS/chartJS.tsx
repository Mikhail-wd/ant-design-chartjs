import "./chartJSStyle.scss"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2";
import { type PropsType } from '../table/table'

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartData(props: PropsType) {

    function getPercents() {
        if (props.usersList) {
            let tempArray = []
            for (let x = 0; x < props.usersList.length; x++) {
                tempArray.push(props.usersList[x].share_percent.slice(0,-2))
            }
            return tempArray
        } else {
            return [33, 33, 33]
        }
    }

    const linedata = {
        datasets: [{
            label: "",
            data: getPercents(),
            backgroundColor: props.colors
        }
        ]
    };

    return (
        <div className="chartGraph">
            <Doughnut data={linedata} />
        </div>
    )
}