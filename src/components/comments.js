import React from 'react';
import OneComment from './one-comment';

class Comments extends React.Component {
constructor(){
  super();
  this.state={
    newComments: [],
    input:''
  }
  this.handleInput = this.handleInput.bind(this);
  this.handleClick = this.handleClick.bind(this);
  this.handleShare = this.handleShare.bind(this);
}

componentDidUpdate(){
    if(this.state.input !== ''){
        console.log('componentDidUpdate log - ' + this.state.input);
    }
}

handleClick(e){
    e.preventDefault();
    //console.log("You're really into clicking");
    if(this.state.input !== ''){
        this.setState({
            newComments: this.state.newComments.concat(this.state.input),
            input: ''
        });
    }
}

handleInput(e){
    //console.log(e.target.value)
    this.setState({
        input: e.target.value
    });
}

handleShare(e){
    console.log(e.target.value)
}

  render() {

    const comments = this.props.comments.map( (item, index) => <OneComment key={index} comment={item}/>)
    const newComments = this.state.newComments.map( (item, index) => <OneComment key={index} newcomment={item}/>)

    return (
      <div>
          <form>
              <input placeholder='Enter comment' onChange={ this.handleInput } value={ this.state.input }/>
              <button onClick={ this.handleClick }>Add Comment</button>
          </form>
          <form>
              <input type='radio' name='share' value='public' onChange={ this.handleShare }/> {"Public  "}
              <input type='radio' name='share' value='private' onChange={ this.handleShare }/> {"Private"}
          </form>
          <div className='wrap'>
              {comments}
          </div>
          <div className='wrap'>
              {newComments}
          </div>
      </div>
    );
  }
}

export default Comments;
