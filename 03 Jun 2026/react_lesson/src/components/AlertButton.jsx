function AlertButton(props) {
  return (
    // Invocazione della callback passata dal genitore
    <button onClick={props.onAction} className="btn-alert">
      {props.label}
    </button>
  )
}

export default AlertButton
