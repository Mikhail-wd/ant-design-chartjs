import { Table } from "antd";
import "./tableStyles.scss"

type columns = Array<
    {
        title: string;
        dataIndex: string;
        key: string;
    }
>

export type PropsType = {
    usersList?: [
        {
            holder: string,
            share_percent: string,
            key: number
        }
    ],
    colors?: Array<string>

}

export default function Tablet(props: PropsType) {

    const columns: columns = [
        {
            title: 'Держатели акции',
            dataIndex: 'holder',
            key: 'holder',
        },
        {
            title: '% Доли',
            dataIndex: 'share_percent',
            key: 'share_percent',
        }
    ];

    function formatingPercents() {
        if (props.usersList) {
            let tempArray = props.usersList
            for (let x = 0; x < props.usersList?.length; x++) {
                tempArray[x].share_percent = tempArray[x].share_percent.slice(0, -1) + " %"
            }
            return tempArray
        }
    }
    return (
        <Table
            dataSource={formatingPercents()}
            columns={columns}
            bordered
            pagination={{ position: ["none", "none"] }} />
    )
}