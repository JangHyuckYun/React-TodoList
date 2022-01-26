import {useContext, useMemo} from "react";
import {InfoContext} from "./contexts/info";
import StatusStyle from "./styled/Status-Style";
import {PieChart} from "react-minimal-pie-chart";

const Status = () => {
    const {todoList} = useContext(InfoContext);

    const getAverage = list => {
        const allLen = list.length;
        const completeLen = list.filter(item => item.isSelected).length;

        return Math.ceil(completeLen / allLen * 100) || 0;
    }

    const avg = useMemo(() => getAverage(todoList), [todoList]);

    return (
        <StatusStyle avg={avg}>
            <div className="chart_container">
                <PieChart
                    data={[{
                        value: avg,
                        color: "#5ec297",
                        name: "name1",
                    }]}
                    reveal={avg}
                    lineWidth={20}
                    background="rgba(255,255,255,.85)"
                    startAngle={-90}
                    lengthAngle={360}
                    rounded
                    animate
                />
                <p><b>{avg}%</b> done</p>
            </div>
        </StatusStyle>
    );
};

export default Status;