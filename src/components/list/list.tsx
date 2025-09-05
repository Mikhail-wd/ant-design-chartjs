import './listStyles.scss'
import { type PropsType } from '../table/table';
import { List } from 'antd';

export default function ItemsList(props: PropsType) {
    function getHolders() {
        if (props.usersList) {
            let tempArray = []
            for (let x = 0; x < props.usersList.length; x++) {
                tempArray.push(props.usersList[x].holder)
            }
            return tempArray
        } else {
            return ["None"]
        }
    }

    function selectColors(value: number) {
        if (props.colors) {
            return props.colors[value]
        }
    }

    return (
        <div className="users-list-size">
            <List
                className="users-list"
                size="large"
                dataSource={getHolders()}
                renderItem={(item, index) =>
                    <List.Item >
                        <span className="circle" style={{ backgroundColor: `${selectColors(index)}` }}></span>
                        <span>{item}</span>
                    </List.Item>}
            >
            </List>
        </div>
    )
}