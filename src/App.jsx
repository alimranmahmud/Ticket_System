import { Suspense, useEffect, useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import IncreaseNumber from './Components/IncreaseNumber/IncreaseNumber'
import Navbar from './Components/Navbar/Navbar'
import TicketCards from './Components/TicketCards/TicketCards'
import { ToastContainer } from 'react-toastify';

// const fetchTickets = async () => {
//   const res = await fetch("/public/ticket.json")
//   return res.json()
// }

// const promiseTicket = fetchTickets()



function App() {
  const [promiseTicket, setPromiseTickets] = useState([])
  useEffect(() => {
    const fetchTickets = async () => {
      const res = await fetch("/ticket.json")
      const data = await res.json()
      setPromiseTickets(data)
    }

    fetchTickets()
  }, [])
  const [progress, setProgress] = useState(0)
  const [progressData, setProgressData] = useState([])
  const [resolvedData, setResolvedData] = useState([])



  const handelComplete = (data) => {
    const filterProgressData = progressData.filter(progressDataFilter => progressDataFilter.id !== data.id)
    setProgressData(filterProgressData)

    const promiseFilterData = promiseTicket.filter(promiseData => promiseData.id !== data.id)
    setPromiseTickets(promiseFilterData)

  }


  return (
    <>
      <Navbar></Navbar>
      <IncreaseNumber progressData={progressData} resolvedData={resolvedData}></IncreaseNumber>
      <Suspense fallback={<h1>Loading...</h1>}>
        <TicketCards handelComplete={handelComplete}
          resolvedData={resolvedData}
          setResolvedData={setResolvedData}
          progressData={progressData}
          setProgressData={setProgressData}
          progress={progress}
          setProgress={setProgress}
          promiseTicket={promiseTicket}
        ></TicketCards>
      </Suspense>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
