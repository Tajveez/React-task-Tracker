import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <div>
           <h1 style={{
               color: 'greenyellow',
               backgroundColor: 'purple'
           }}> {title} </h1>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.protoTpyes = {
    title: PropTypes.string
}

export default Header
