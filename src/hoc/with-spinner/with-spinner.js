export default function WithSpinner({ children,isFetching }) {
 

    if(isFetching)
    {
        return(<div>Spinner</div>)
    }
    else
    return(<div>{children}</div>)
}
