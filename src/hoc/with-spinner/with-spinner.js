export default function WithSpinner({ children,status }) {
 

    if(status===undefined||status===true)
    {
        return(<div>Spinner</div>)
    }
    else
    return(<div>{children}</div>)
}
