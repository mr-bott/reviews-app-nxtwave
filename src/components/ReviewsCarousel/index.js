import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    count: 0,
  }

  decrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  increment = () => {
    const {count} = this.state
    const {reviewsList} = this.props
    if (count < reviewsList.length - 1) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {count} = this.state
    const {username, companyName, description, imgUrl} = reviewsList[count]

    return (
      <div className="main">
        <div>
          <button className="btn" type="button" data-testid="leftArrow" onClick={this.decrement}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="imgg"
            />
          </button>
        </div>
        <div className="card">
          <h1 className="hh">Reviews</h1>
          <img src={imgUrl} alt={username} className="img" />
          <p className="hh">{username}</p>
          <p>{companyName}</p>
          <p>{description}</p>
        </div>
        <div>
          <button className="btn" type="button" data-testid="rightArrow" onClick={this.increment}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="imgg"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
