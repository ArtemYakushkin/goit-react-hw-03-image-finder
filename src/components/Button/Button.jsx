import PropTypes from 'prop-types';

const Button = ({ onLoadMore, isLoading }) => {
    return (
        <button type='button' onClick={onLoadMore} disabled={isLoading}>Load more</button>
    );
};

export default Button;

Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};