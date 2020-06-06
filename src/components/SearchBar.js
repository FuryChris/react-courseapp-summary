import React from 'react';

class SearchBar extends React.Component {
    //   Making state for changing input
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        // sending a prop 'to App. IMPROTANT' ->
        this.props.callWhenSubmit(this.state.term);
        // TO DO : Make sure we call callback from parent component.
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} action="" className="ui form">
                    <div className="field">
                        <label htmlFor="">Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            // onChange is special name
                            onChange={this.onInputChange}
                        // // Other way - without onInputChange function (inline fun)
                        // onChange={e => this.setState({ term: e.target.value })}
                        />

                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;