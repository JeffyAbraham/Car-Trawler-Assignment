 import GoogleAutoComplete from 'react-google-autocomplete'
 export default function LocationForm({label})
 {

   return(
   
   <div style={{marginTop:'50px'}}>
   <div>{label}</div>    
   <GoogleAutoComplete style={{width:'250px',height:'50px',marginTop:'20px',fontSize:'17px'}}apiKey='AIzaSyA5PhlSej1NIDdnHTJ2I_JGRJmzFU-FwrQ' />
   </div>
   )
 }


