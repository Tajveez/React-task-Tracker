import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <div>
           <h1 style={headerStyles}> {title} </h1>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.protoTpyes = {
    title: PropTypes.string
}
const headerStyles = {
    color: 'greenyellow',
    backgroundColor: 'purple'
}
export default Header
