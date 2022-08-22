import { useEffect, useState } from "react"
import useGlobalState from "./globalState"
import { Button } from 'primereact/button';

export default function App({ data }) {
  const [initialData, setInitialData] = useState(null);
  const { globalState, setGlobalState } = useGlobalState();
  useEffect(() => {
    setGlobalState(data);
  }, [data])

  return (
    <>
      <Button onClick={() => setInitialData(JSON.stringify(globalState))} label='Dados' />
      <p>
        {initialData}
      </p>
    </>
  )
}