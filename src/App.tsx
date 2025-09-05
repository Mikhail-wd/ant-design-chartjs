import { ConfigProvider } from 'antd';
import useDateNow from './support/date';
import "./index.scss"
import mockData from './data/data.json'
import ItemsList from "./components/list/list";
import Tablet from "./components/table/table"
import Section from './components/section/section'
import ChartData from './components/chartJS/chartJS';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const currentDate = useDateNow()
  const [data, setData] = useState<Array<{}>>([])
  const [colors, setColors] = useState<Array<string>>([])

  function deleteDoubles(value: Array<{}>) {
    let sortedArray = value
    for (let x = 0; x < value.length; x++) {
      if (sortedArray.includes(value[x])) {
        sortedArray.splice(x, 1)
        sortedArray[x] = ({ ...sortedArray[x], key: x + 1 })
      }
    }
    return sortedArray
  }

  function generateColors(value: Array<{}>) {
    let tempArray = []
    for (let x = 0; x < value.length; x++) {
      tempArray.push("#" + ((Math.random() * 12090200).toString(16).slice(0, 4)))
    }
    setColors(tempArray)
  }

  useEffect(() => {
    let tempAray = []
    axios.get("http://watchmedobackfl.ip")
      .catch(error => {
        tempAray = deleteDoubles([...mockData.SBER])
        generateColors(deleteDoubles([...mockData.SBER]))
        console.warn("Yep fake request is send - " + error)
        setData(tempAray)
      })
  }, [])

  return (
    <ConfigProvider table={{ className: "customTable" }} list={{ className: "grow" }}>
      <div className="main-frame">
        <Section>
          <h1>Структура акционеров</h1>
          <div className="section-row">
            <div className="grow">
              {data.length !== 0 ? <Tablet usersList={data} /> : "Loading..."}
              <p>Дата последнего обновления этой структуры: {currentDate}</p>
            </div>
            <div className="border-frame box-controller">
              <ChartData usersList={data} colors={colors} />
              <ItemsList usersList={data} colors={colors} />
            </div>
          </div>
        </Section>
      </div>
    </ConfigProvider>
  )
}

export default App
