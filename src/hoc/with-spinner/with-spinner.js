export default function WithSpinner({ children,status }) {
    console.log(status)

    if(status===undefined)
    {  alert('get')
        return(<div>Spinner</div>)
    }
    else
    return(<div>{children}</div>)
}
