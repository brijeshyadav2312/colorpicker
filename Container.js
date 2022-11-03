const Container = (props) => {
  return (
    <div className="card">
        <div style={{backgroundColor:`${props.color_name}`}}></div>
        <span>
            <h2>{color_name}</h2>
            <h4 style={{color:`${props.color_name}`}}>{color_id}</h4>
        </span>
    </div>
  )
}

export default Container

