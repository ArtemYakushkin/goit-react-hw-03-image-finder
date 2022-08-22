import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const { Component } = require("react");

class Searchbar extends Component {

    state = {
        searchRequest: '',
    };

    handleRequestChange = event => {
        this.setState({ searchRequest: event.currentTarget.value.toLowerCase() });
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.searchRequest.trim() === '') {
            return toast.warning('Search field is empty!');
        }

        this.props.onSubmit(this.state.searchRequest);
        this.setState({ searchRequest: '' });
    }

    render() {
        return (
            <header>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">
                        <span>Search</span>
                    </button>

                    <input
                        type="text"
                        name='searchRequest'
                        value={this.state.searchRequest}
                        onChange={this.handleRequestChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    };
}

export default Searchbar;

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};