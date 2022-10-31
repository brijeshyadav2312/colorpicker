const Container = ({color_name,color_id}) => {
  return (
    <div className="card">
        <div style={{backgroundColor:`${color_name}`}}></div>
        <span>
            <h2>{color_name}</h2>
            <h4 style={{color:`${color_name}`}}>{color_id}</h4>
        </span>
    </div>
  )
}

export default Container

