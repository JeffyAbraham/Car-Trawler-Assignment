import './icon-legend.style.css'
export default function Legend({ title, icon, hoverMessage }) {
  return (
    <div className='legend-flexbox'>
      <div>{title}</div>
      <div style={{marginTop:'5px'}}>
        <img src={icon} width="18px" height="18px" />
      </div>
    </div>
  );
}
