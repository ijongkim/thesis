import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuestionAnswers, sortAnswers } from '../actions/answer'
import QAEntry from './QAEntry'
import AddAnswer from './AddAnswer'

class AnswerList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: [],
      sortOptions: [ 'New', 'Trending', 'Old' ],
      option: 0
    }

    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleOptionChange (event) {
    this.setState({ option: event.target.value })
    this.props.sortAnswers(this.state.sortOptions[event.target.value])
  }

  componentWillMount () {
    const { id, user_id } = this.props
    this.props.fetchQuestionAnswers(id, user_id)

    let index = this.state.sortOptions.findIndex(x => x === this.props.sortBy)
    this.setState({ option: index })
  }

  render () {
    return (
      <div className='post-list'>
        <h4>Answers</h4>
        <AddAnswer id={this.props.id} />
        <select value={this.state.option} onChange={this.handleOptionChange}>
          {this.state.sortOptions.map((option, i) => <option key={i} value={i}>{option}</option>)}
        </select>
        {this.props.answers.map(answer => <QAEntry key={answer.id} answer={answer} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    answers: state.answers.data,
    sortBy: state.answers.sortBy,
    user_id: state.user.data ? state.user.data.id : null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestionAnswers: (id, user_id) => dispatch(fetchQuestionAnswers(id, user_id)),
    sortAnswers: (sortBy) => dispatch(sortAnswers(sortBy))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerList)
