import React from 'react'

function ReviewCard({ author, review, avatar, row, fontColor }) {
  return (
    <div className="card card-review-container h-100">
      <div className="card-body">
        <div className="card-text">
          <h1 className={`quotation-mark ${fontColor}`}>“</h1>
          <div className="d-flex mt-5">
            <p>{review}</p>
            {row ? <img className="avatar" src={avatar} alt="avatar"/> : null}
          </div>
          {row ? <h4 className="fw-bold">{author}</h4> : null}
          {row ? null : <hr/>}
          {row ? null :
            <div className="d-flex justify-content-center align-items-center">
              <img className="avatar mx-3" src={avatar} alt="avatar"/>
              <div>
                <h4 className="fw-bold">{author}</h4>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
