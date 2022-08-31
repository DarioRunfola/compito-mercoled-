import { Alert } from 'react-bootstrap'

const WarningSign = (prop) => (

    <Alert variant="danger">
        {prop.text}
    </Alert>
)
export default WarningSign
