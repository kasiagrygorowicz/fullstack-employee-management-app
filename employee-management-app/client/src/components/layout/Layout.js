import MyNavbar from "./Navbar";


export default function Layout(props) {
    return (
        <>
            <MyNavbar/>
            <main className='min-vh-100 bg-info d-flex justify-content-center' >{props.children}</main>

        </>
    )
}
