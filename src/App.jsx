import { useEffect, useState } from "react"
import JobInfo from "./JobInfo"
import BtnContainer from "./BtnContainer"

const url = "https://course-api.com/react-tabs-project"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  // currentItem

  const fetchedJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchedJobs()
  }, [])

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }

  return (
    <section className="jobs-center">
      {/* <button className=""></button> */}
      <BtnContainer jobs={jobs} />
      {/* job info */}
      <JobInfo jobs={jobs} />
    </section>
  )
}
export default App
