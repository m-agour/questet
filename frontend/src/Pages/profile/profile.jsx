// import listExam from "../listExam"
import "./profile.css"
import Topbar from "../../component/topbar/topbar";

export default function profile() {
  let exams=[{"title":"yoga","id":1},{"title":"math","id":2},{"title":"biology","id":3},{"title":"physics","id":4},{"title":"astronomy","id":5}]

  return (
    <>
    <Topbar/>
    <div className="profilewar">
        <div className="content">
        <div className="taken">
          <h2>Taken Exams</h2>
          {exams.map((exam)=>(
                  <div className="exam-preview" key={exam.id}>
                      {/* <Link to={`/user/${id}/exams/${exam.id}`}> */}
                          <h2>{exam.title}</h2>
                          {/* <p>{exam.id}</p> */}
                      {/* </Link> */}
                  </div>
              ))}
        </div>
        <div className="created">
        <h2>Created Exams</h2>
          {exams.map((exam)=>(
                  <div className="exam-preview" key={exam.id}>
                      {/* <Link to={`/user/${id}/exams/${exam.id}`}> */}
                          <h2>{exam.title}</h2>
                          {/* <p>{exam.id}</p> */}
                      {/* </Link> */}
                  </div>
              ))}
        </div>
      </div>
    </div>
    </>
  )
}
